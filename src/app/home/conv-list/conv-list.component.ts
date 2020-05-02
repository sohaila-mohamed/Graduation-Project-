/* tslint:disable:typedef-whitespace */
import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {HttpService} from '../HttPService/http.service';
import {Iconvs, Reply} from '../DataModels';
import {DatastreamingService} from 'src/app/services/datastream/datastreaming.service';
import {InteractionService} from 'src/app/services/datacommunication/interaction.service';
import {typeWithParameters} from '@angular/compiler/src/render3/util';
import {newMessage} from 'src/app/model/newMessage';
import {IonContent, AlertController} from '@ionic/angular';
import {eventMethod} from '@ionic/core/dist/types/utils/overlays';
import {NavigationService} from '../NavService/navigation.service';
import {EventEmitterService} from '../../services/EventEmitterService/event-emitter.service';

@Component({
    selector: 'app-conv-list',
    templateUrl: './conv-list.component.html',
    styleUrls: ['./conv-list.component.scss'],
})
export class ConvListComponent implements OnInit {
    private convList: Iconvs[];
    private patientId: number;
    private page: number;
    private scrollPosition: number;
    public state: number;
    @ViewChild(IonContent, {static: false}) ionContent: IonContent;


    constructor(
        private httpService: HttpService,
        private patientData: DatastreamingService,
        private navigation: NavigationService,
        private eventEmitterService: EventEmitterService,
        private dateInteraction: InteractionService, private addController: AlertController) {

        console.log('convlist constructor');
    }


    ngOnInit() {
        console.log('convlist oninit');

        new Promise((resolve, reject) => {
            this.patientId = this.patientData.getPatientId();
            console.log('check patient id');
            // tslint:disable-next-line:triple-equals
            if (this.patientId == undefined) {

                reject('patient id is undefined ');

            } else {
                console.log('patient id resolved');
                console.log('patient_id', this.patientId);
                resolve();

            }
        }).then(() => {
            console.log('patient id form convlist', this.patientId);
            this.GetData(0);
            // at the fist time we need to assign the part of code we need to invoke every time the event emitter emits value
            // tslint:disable-next-line:triple-equals
            if (this.eventEmitterService.Subscribtion == undefined) {
                console.log('subscribing to the event emitter');
                // when the event emitter emits new value only the part of the code that the subscriber hold will be invoked
                this.eventEmitterService.Subscribtion = this.eventEmitterService.FunctionCaller.subscribe((state: number) => {
                    this.GetData(state);
                    console.log('event emitter listener invoked');
                });
            }


        }).catch((err) => this.presentAlert('data stream error', err.message));


    }

    ionViewWillEnter() {

        console.log('convlist ion view will enter');
        console.log('this.scrolling', this.scrollPosition);
    }


    GetData(state) {
        console.log('get data function');
        this.page = 0;

        if (state == 0) {
            console.log('page', this.page);
            console.log('interaction works');
            this.httpService.getInbox(this.patientId, this.page).subscribe((res) => {
                console.log('inbox ', res);
                this.convList = res;
                console.log('list ', this.convList);
            }, error1 => this.presentAlert('http error get inbox', error1.message));
        } else {
            console.log('page', this.page);
            this.httpService.getSent(this.patientId, this.page).subscribe((res) => {
                console.log('sent ', res);
                this.convList = res;
                console.log('list sent', this.convList);


            }, error1 => this.presentAlert('http error get sent', error1.message));
        }

    }


    async presentAlert(subtitleString: string, messageString: string) {
        console.log('alert holding screen ');
        const alert = await this.addController.create({
            header: 'ERROR',
            subHeader: subtitleString,
            message: messageString,
            buttons: ['OK']
        });

        await alert.present();
    }


///////////////////////////////////////////////////////////
/////////// to create new thread 
    //  this.thread={
    //     reciever_id   :  29,
    //     msg_subject   :  "postman4",
    //     created_date  :  "2020-02-02",
    //     is_readed     :  0,
    //     reciever_name :  "sohaila",
    //     sender_name   :  "ahmed",
    //     msg_body      :  "Hello Doctor i want...."

    //   }
    //   this.data={
    //     sender_id:this.patientId,
    //     reciever_id:this.thread.reciever_id,
    //     msg_body:this.thread.msg_body,
    //     created_date:this.thread.created_date,
    //   };
    //   this.httpService.postThread(this.thread,this.patientId).subscribe((res)=>{
    //     console.log("new thread data",res);

    //   this.httpService.postReply(this.data,res.insertId).subscribe((msg)=>{
    //     console.log("first thread message",msg);

    //   });

    //   });

////////////////////////////////////////////////////////////


    ngAfterViewInit() {

        console.log('ngviewtinit');
        this.ionContent.scrollToTop();


    }

    loadData(event) {
        console.log('scrolling NOw');
        this.page = this.page + 10;
        console.log('event', event);
        if (this.state == 0) {
            console.log('page', this.page);
            console.log('interaction works');
            this.httpService.getInbox(this.patientId, this.page).subscribe((res) => {
                console.log('inbox ', res);
                res.forEach(element => {
                    this.convList.push(element);

                });
                event.target.complete();
                return;

            });
        } else {
            console.log('page', this.page);
            this.httpService.getSent(this.patientId, this.page).subscribe((res) => {
                console.log('sent ', res);
                res.forEach(element => {
                    this.convList.push(element);

                });

                event.target.complete();
                console.log('New list sent', this.convList);
                return;

            });


        }


    }

//////////////////////////////////////////////////////////////////
    /////////// to reply on specific thread
    async reply(thread) {
        console.log('REPLIESSSS IN CONVLIST');
        console.log('Thread ID: ', thread.thread_id);

        this.httpService.getReplies(thread.thread_id, 0).subscribe((res) => {

            this.dateInteraction.sendMSG(res);
            console.log('replies', res);

            this.dateInteraction.getThreadIdfromMessageorConvListtoChat(thread).then(() => {
                this.navigation.navigateTo('home/chat');
            });

        });


        /////////////////////////////////////////////////////////////////////////reply///////////////////////////////////

        // this.navigation.navigateTo('home/chat');

        // let date=new Date().toLocaleString();

        // console.log("current date ",new Date().toLocaleString());
        // this.data={
        //     sender_id:patient_id,
        //     reciever_id:this.Doctor_id,
        //     msg_body:"Okay, you can change the potato with salad and some fruits you love , i wish uou happy day, thanks. you can change the potato with salad and some fruits you love , i wish uou happy day, thanks. you can change the potato with salad and some fruits you love , i wish uou happy day, thanks. you can change the potato with salad and some fruits you love , i wish uou happy day, thanks. you can change the potato with salad and some fruits you love , i wish uou happy day, thanks.",
        //     created_date:date,

        // }
        //   this.httpService.postReply(this.data,thread_id).subscribe((res)=>{
        //     console.log("posted",res);
        //   });
    }

    /////////////////////////////////////////////////////////////////////////
    //get all replies with thread_id and offset
    //Attention please send offset =0 until i finish paging for chat
    // this.httpService.getReplies(thread_id,0).subscribe((res)=>{
    //   console.log("replies",res);
    // });
}
