import { Component, OnInit, ChangeDetectorRef, ViewChild, Input } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { IonContent } from '@ionic/angular';
import { Reply, Iconvs } from '../DataModels';
import { HttpService } from '../HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';
import { ActionSheetController, ToastController, Platform } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Camera,CameraOptions, PictureSourceType} from'@ionic-native/camera/ngx';
import { File ,FileEntry } from '@ionic-native/file/ngx';
import {WebView} from'@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
 @ViewChild(IonContent, {static: false})   bigContent : IonContent
  constructor(
    private navigation:NavigationService,
    private http:HttpService,
    private datastream: DatastreamingService, 
    private communication:InteractionService,
    private camera: Camera, 
    private file: File, 
   private webview: WebView,
      private actionSheetController: ActionSheetController, 
      private toastController: ToastController,
      private storage: Storage, 
      private plt: Platform, 
      private ref: ChangeDetectorRef, 
      private filePath: FilePath) { 
  
  
      // this.url="https://s3.ap-south-1.amazonaws.com/fortifyfitness/1588904766021-Photo_26042020_161941.jpg";
}
url:string;  
images = [];
    private newMessages : any[]=[];
    private tId:number;
    private newMsgs:any;
    private replyContent:string;
    private data :Reply;
    private docRow = new Array<doctorData>();
    private pId:number;
    private thread: Iconvs;
    private doctor:doctorData;
    

    ngOnInit() {
      this.plt.ready().then(() => {
        this.loadStoredImages();
      });
      // this.url="https://s3.ap-south-1.amazonaws.com/fortifyfitness/1588904766021-Photo_26042020_161941.jpg";
    
    }

    loadStoredImages() {
      this.storage.get(STORAGE_KEY).then(images => {
        if (images) {
          let arr = JSON.parse(images);
          this.images = [];
          for (let img of arr) {
            let filePath = this.file.dataDirectory + img;
            let resPath = this.pathForImage(filePath);
            this.images.push({ name: img, path: resPath, filePath: filePath });
          }
        }
      });
    }

    ionViewWillEnter() {
    console.log("pid: ",this.pId);
    this.pId =this.datastream.getPatientId();
   

    this.communication.getId.subscribe(
      (thread)=>{
        this.thread=thread;
        console.log("id "+this.thread.thread_id)
     });
  
  this.docRow = this.datastream.getDoctorList(); 
  console.log(this.docRow);

  const that=this;
  this.communication.msg.subscribe(
  (massagesFromMessageOrConvList)=> { 
    console.log("replies in chat: " ,massagesFromMessageOrConvList);
    that.newMessages=massagesFromMessageOrConvList;
    
    
    console.log("tpe msg  "+that.newMessages);
    

    that.setMessege();
  });
  

   }
  
  setMessege(){
    this.newMsgs=this.newMessages[0];
    if (this.newMsgs.sender_id==undefined){
      this.newMsgs.sender_id=this.pId;
      console.log("newMsgs.sender_id"+this.newMsgs.sender_id)   
      console.log("newMsgs if denderid is undefined"+this.newMsgs)   

    }
    // timer(3000).subscribe(()=> this.repliesAreHere = false);
  console.log("type myMsgs is "+typeof(this.newMsgs));
   
      console.log("myMsgs",this.newMsgs);
      for(let dRow of this.docRow){

        if(this.newMsgs.reciever_id==dRow.doctorId || this.newMsgs.sender_id==dRow.doctorId){
          this.doctor=dRow;
          console.log("doctor.doctorId"+this.doctor.doctorId);
          
        }
      }
     console.log("newMsgs.sender_id"+this.newMsgs.sender_id)   
     console.log("sender",this.pId);    
  }


  back(){
    this.navigation.navigateTo('home');
   }

   sendReplyFun()
   {
     this.sendReply(this.thread.thread_id );
   }
   sendReply(threadId){
     console.log("this.thread.thread_id: ",threadId);
     console.log(this.newMessages);
     console.log("doctor.doctorId"+this.doctor.doctorId);

       //////////////////////////////////
       this.data={
              sender_id:this.pId,
              reciever_id:this.doctor.doctorId,
              msg_body:this.replyContent,
              created_date:new Date().toLocaleString(),
              thread_subject:this.thread.msg_subject,
              fcm_token:this.doctor.fcmtoken
              
          }
            this.http.postReply(this.data,threadId).subscribe((res)=>{
              console.log("posted",res);
              this.newMessages.push(this.data);

            });
            //  this.httpService.getReplies(threadId,0).subscribe((res)=>{
            //   // this.communication.sendMSG(res);
            //   console.log("replies",res);
            //   this.newMessages=res;  
            //   this.newMsgs=this.newMessages[0];
            //  });
             this.replyContent="";
 
            this.bigContent.scrollToBottom(200);
            ////////////////////////////////////////////////////////////////////////////////////
           


  }

  goConv(){

   this.navigation.navigateTo("home/conversation/convList");

  }
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
  
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }
  
  // Next functions follow here...
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
  }
  
  takePicture(sourceType: PictureSourceType) {
    
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
  
    this.camera.getPicture(options).then(imagePath => {
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                    // let fileP = this.file.dataDirectory + name;
                    // let resPath = this.pathForImage(fileP);
                    // let newEntry = {
                    //     name: this.createFileName(),
                    //     path: resPath,
                    //     filePath: fileP
                    // };
                    // this.startUpload(newEntry);
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

            // let fileP = this.file.dataDirectory + name;
            //       let resPath = this.pathForImage(fileP);
            //       let newEntry = {
            //           name: this.createFileName(),
            //           path: resPath,
            //           filePath: fileP
            //        };
            // this.startUpload(newEntry);


        }
    });
  
  }
  createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
  return newFileName;
  }
  
  copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
  }, error => {
      this.presentToast('Error while storing file.');
  });
  }
  
  updateStoredImages(name) {
  this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }
  
      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);
  
      let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };
      this.startUpload(newEntry);
  
      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
  });
  }
  startUpload(imgEntry) {
  console.log("upload");
  this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
          ( < FileEntry > entry).file(file => this.readFile(file))
      })
      .catch(err => {
          this.presentToast('Error while reading file.');
      });
  }
  json()
  {
  return {
  "thread_id":12,
  "sender_id":70,
  "reciever_id":56,
  "msg_body":"Sohaila Heyyyy",
  "fcm_token":"shshshshsshhshhhh"
  };}
  readFile(file: any) {
  let tat = this;
  const reader = new FileReader();
  
  reader.onloadend = () => {
    
    console.log("ressssssss"+reader.result);
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {type: file.type });
      console.log("blob"+JSON.stringify(imgBlob));
      formData.append('file', imgBlob, file.name);
      formData.append('data',  JSON.stringify(this.json()));
      this.http.bgrb(formData).subscribe(
          (data)=>{
            tat.url = data.url;
            console.log("Data Came: ", data.url);
             
          },
          (err)=>{
            console.log("ERROR Occured")
            console.log("Error Came: ", err);
          },
          ()=>
          {
            console.log("Completed");
    
          }
        )
      
      console.log("form  "+JSON.stringify(formData.getAll('file')));
  };
  reader.readAsArrayBuffer(file);
  }
}


// <ion-row *ngIf="repliesAreHere">
        
           
// <div class="skeleton" >
//     <ion-skeleton-text animated style="width: 100%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 85%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 60%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 45%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 30%" ></ion-skeleton-text>
// </div>
// <div class="skeleton">
//    <ion-skeleton-text animated style="width: 30%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 45%"></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 60%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 85%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 100%" ></ion-skeleton-text>
// </div>
// <div class="skeleton">
//     <ion-skeleton-text animated style="width: 100%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 85%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 45%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
// </div>
// </ion-row>