import { Component, OnInit, ChangeDetectorRef, ViewChild, Input } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { IonContent } from '@ionic/angular';
import {Reply, Iconvs, ImagePath} from '../DataModels';
import { HttpService } from '../HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';
import { ActionSheetController, ToastController, Platform } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Camera,CameraOptions, PictureSourceType} from'@ionic-native/camera/ngx';
import { File ,FileEntry } from '@ionic-native/file/ngx';
import {WebView} from'@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import {NetworkService} from "../../services/Network/network.service";
const STORAGE_KEY='my_images';


@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
    @ViewChild(IonContent, {static: false})   bigContent : IonContent;
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
        private filePath: FilePath,private network:NetworkService) {


    }
    url:string;
    private images = [];
    private img=new ImagePath();
    private newMessages : any[]=[];
    private tId:number;
    private newMsgs:any;
    private replyContent:string;
    private data :Reply;
    private docRow = new Array<doctorData>();
    private pId:number;
    private thread: any;
    private doctor:doctorData;
    private docname:string;
    private image:any;
    showSplash: boolean=false;
    private thread_id:number;
    private loading:boolean=false;
    private scrollingPosition:number=0;
    private doctor_img:String='';




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
        console.log('ion view of chat will enter');
        new Promise((resolve, reject) => {
            this.pId =this.datastream.getPatientId();
            if(this.pId==undefined){reject('patient undefined');}
            else {resolve();}

        }

        ).then(()=>{
            this.docRow = this.datastream.getDoctorList();
            console.log("chat doctor list ",this.docRow);
            this.communication.msg.subscribe(
                (massagesFromMessageOrConvList)=> {
                    console.log("replies in chat: " ,massagesFromMessageOrConvList);
                    this.newMessages=massagesFromMessageOrConvList.newMessages;
                    this.thread=massagesFromMessageOrConvList.thread;
                    this.thread_id=massagesFromMessageOrConvList.thread_id;
                    this.showSplash=true;
                    console.log("msg received  "+massagesFromMessageOrConvList);
                });
            return this.setMessege();

        }).then(()=>console.log('doctor data',this.doctor));

    }

    ionViewDidEnter(){
        console.log("ion view did enter");
        this.ScrollToBottom();

    }
    ScrollToBottom(){
        setTimeout(()=>{
            this.bigContent.scrollToBottom(100);
        },1000);

    }
//////////////////////////moving from Create Msg component to chat
    async setMessege(){
        this.newMsgs=this.newMessages[0];
        if (this.newMsgs.sender_id==undefined){
            this.newMsgs.sender_id=this.pId;
            console.log("newMsgs.sender_id"+this.newMessages);
            console.log("newMsgs if denderid is undefined"+this.newMsgs)
        }
        // timer(3000).subscribe(()=> this.repliesAreHere = false);
        console.log("type myMsgs is "+typeof(this.newMsgs));

        console.log("myMsgs",this.newMsgs.media);
        for(let dRow of this.docRow){

            if(this.newMsgs.receiver_id==dRow.doctorId || this.newMsgs.sender_id==dRow.doctorId){
               await (this.doctor=dRow);
               this.doctor=dRow;
                this.docname=dRow.name;
                this.doctor_img=dRow.user_image;
                console.log("doctor.doctorId"+this.doctor.doctorId);
            }
        }
        console.log("newMsgs.sender_id"+this.newMsgs.sender_id);
        console.log("sender",this.pId);
    }
///////////////////////////////////////////////////////////////////////////////
////////////////////////////send msg reply//Only Text Msg/////////////////////
    sendReplyFun()
    {
        this.sendReply(this.thread_id );
    }
    sendReply(threadId){
        console.log("this.thread.thread_id: ",threadId);
        console.log(this.newMessages);
        console.log("doctor.doctorId"+this.doctor.doctorId);

        //////////////////////////////////
        this.data={
            sender_id:this.pId,
            receiver_id:this.doctor.doctorId,
            sender_name:this.datastream.patient.name,
            receiver_name:this.doctor.name,
            msg_body:this.replyContent,
            thread_subject:this.thread.msg_subject,
            fcm_token:this.doctor.fcmtoken

        };
        this.http.postReply(this.data,threadId).subscribe((res)=>{
            console.log("posted",res);
            this.newMessages.push(this.data);

        });

        this.replyContent="";
        this.ScrollToBottom();
        ////////////////////////////////////////////////////////////////////////////////////
    }
//////////////////////////////////////////////////////////////////////////////////



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
            if(this.network.NetworkStateGetter())
        {
            if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                        let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                        this.img = {
                            path: correctPath + currentName,
                            currentName: currentName,
                            correctPath: correctPath
                        };
                        this.startUpload(this.img.path);
                        this.image={
                            sender_id:this.pId,
                            receiver_id:this.doctor.doctorId,
                            msg_body:"",
                            fcm_token:this.doctor.fcmtoken,
                            media:this.pathForImage(this.img.path),
                        };
                        this.newMessages.push(this.image);
                        this.loading=true;
                        this.ref.detectChanges();
                        this.ScrollToBottom();
                        // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                    });
            } else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.img = {
                    path: correctPath + currentName,
                    currentName: currentName,
                    correctPath: correctPath
                };
                this.startUpload(this.img.path);
                this.image={
                    sender_id:this.pId,
                    receiver_id:this.doctor.doctorId,
                    msg_body:"",
                    fcm_token:this.doctor.fcmtoken,
                    media:this.pathForImage(this.img.path)
                };
                this.newMessages.push(this.image);
                this.loading=true;
                this.ref.detectChanges();
                this.ScrollToBottom();

                // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

            }
        }
            else {
                alert("you are Offline");
            }
        });

    }

    pathForImage(img) {
        if (img === null) {
            return '';
        } else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
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
            console.log("newEntry"+newEntry);
            this.images = [newEntry, ...this.images];
            this.newMessages.find(msg=>msg.media==this.pathForImage(this.img.path)).media=resPath;
            this.loading=false;
            this.ref.detectChanges();
        });
    }
    startUpload(imgEntry) {
        console.log("upload"+JSON.stringify(imgEntry));


        this.file.resolveLocalFilesystemUrl(imgEntry)
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
            "thread_id":this.thread_id,
            "sender_id":this.pId,
            "receiver_id":this.doctor.doctorId,
            'sender_name':this.datastream.patient.name,
            'receiver_name':this.doctor.name,
            "msg_body":"",
            "fcm_token":this.doctor.fcmtoken
        };}

    readFile(file: any) {
        const that = this;
        const reader = new FileReader();

        reader.onloadend = () => {

            console.log("ressssssss"+reader.result);
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {type: file.type });
            console.log("blob"+JSON.stringify(imgBlob));
            formData.append('file', imgBlob, file.name);
            formData.append('data',  JSON.stringify(this.json()));
            this.http.UplaodingMediaMsg(formData,this.thread_id).subscribe(
                (data)=>{
                    console.log(" allData ", data);
                    that.url = data.url;
                    this.showSplash=false;
                    console.log("Data Came: ", that.url );
                    that.setMessege();
                    this.ScrollToBottom();
                    this.copyFileToLocalDir(this.img.correctPath, this.img.currentName, this.createFileName());


                },
                (err)=>{
                    console.log("ERROR Occured will sending your msg");
                },
                ()=>
                {
                    console.log("Completed");
                    console.log("Data Came3: ", that.newMessages );
                    console.log("Data Came:2 ", this.image);

                }
            );

            console.log("form  "+JSON.stringify(formData.getAll('file')));

        };
        reader.readAsArrayBuffer(file);
        console.log("Data Came:2 ", that.url );
        console.log("Data Came:2 ", this.image);


    }
    doRefresh(event){
        console.log("scrolling to top event",event);
        this.scrollingPosition=this.scrollingPosition+10;
        console.log("all msgs before refresh",this.newMessages);
        this.http.getReplies(this.thread_id, this.scrollingPosition).subscribe((res) => {
            let msgs=res.reverse();
            console.log("msgs",msgs);
            if(msgs.length){
                this.newMessages=msgs.concat(this.newMessages);
                console.log("all msgs",this.newMessages);
                event.target.complete();
                this.ref.detectChanges();
                return;

            }
            event.target.complete();
            this.ref.detectChanges();

        });


    }


    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            position: 'bottom',
            duration: 3000
        });
        toast.present();
    }
    back(){
        this.navigation.navigateTo('home');
    }



}

