(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/doctorList/doctor-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/doctorList/doctor-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <div class=\"background\">\n\n  <ion-grid >\n    <ion-row>\n    <ion-button class=\"back\" (click)= \"backClick()\"  shape=\"round\" color=\"light\">\n              <ion-icon name=\"arrow-round-back\"></ion-icon>\n              \n          </ion-button>\n      <ion-col size=\"12\">\n        <div class=\"center\">\n            <h1 class=\"middle-text\">My Doctors</h1>\n        </div>\n        \n\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of doctorRow; let i=index\">\n      <ion-grid >\n        <ion-row >\n          <ion-col size=\"1\">\n\n          </ion-col>\n          <ion-col size=\"10\" class=\"card\" >\n            <ion-grid  >\n              <ion-row >\n                <!-- <ion-col size=\"4\">\n                    <img  class=\"small-icon\" [src]=\"item.img\">\n\n                </ion-col> -->\n                <ion-col size=\"8\">\n                  Doctor Id: {{item.doctorId}} <br>\n                  Dr/ {{item.name}} <br>\n                  {{item.email}} <br>\n                  Years Experience: {{item.years_experience}}\n             </ion-col>\n\n              </ion-row>\n            </ion-grid>\n            \n\n\n\n\n\n\n\n\n\n\n      \n          </ion-col>\n          <ion-col size=\"1\">\n       \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n\n\n\n\n    </ion-row>\n  </ion-grid>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/fab/fab.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/fab/fab.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\" class=\"outer\"  > \n    <ion-fab-button color =\"Medium\">\n        <ion-icon name=\"menu\" ></ion-icon> \n       \n    </ion-fab-button>\n    <ion-fab-list side=\"start\" >\n    <ion-fab-button (click)=\"vitalClick()\"><ion-icon name=\"fitness\"></ion-icon></ion-fab-button>\n    <ion-fab-button (click)=\"homeClick()\"><ion-icon name=\"person\"></ion-icon></ion-fab-button>\n    <ion-fab-button (click)=\"dlistClick()\"><ion-icon name=\"medkit\"></ion-icon></ion-fab-button>\n    <ion-fab-button (click)=\"tlistClick()\"><ion-icon name=\"body\"></ion-icon></ion-fab-button>\n    <ion-fab-button (click)=\"outClick()\"><ion-icon name=\"power\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<div *ngIf=\"showSplash\" class=\"myBackground\">\n    <div>\n    <img src=\"/assets/giphy.gif\">\n</div> \n</div> \n  <ion-grid class=\"background\">\n    <ion-row>\n      <ion-col >\n          <ion-button  (click)= \"clear()\" color=\"light\" shape =\"round\" >\n              <ion-icon name=\"arrow-round-back\"></ion-icon>\n              Logout\n              </ion-button>\n            <!-- <img class =\"icon\"src=\"assets/talin.png\" > -->\n  \n            <div class=\"center\">\n\n              <ion-avatar class=\"avat\" >\n                  <img src=\"assets/talin.png\" (click)=\"NavigateMe('home/Myprofile')\">\n             </ion-avatar>\n            </div>\n            <h1 class=\"middle-text user-name\">{{patientName}}</h1>\n  \n              \n      </ion-col>\n\n    </ion-row>\n  </ion-grid >\n  <ion-row class=\"main-card\">\n    <ion-grid>\n      <ion-row>\n          <ion-col col-6 >\n              <div class=\"mini-card\" (click)=\"NavigateMe('home/vitals')\" >\n                <div class=\"center\" >\n                    <img class=\"icon\" src=\"assets/vitals2.png\">\n\n                </div>\n                \n                <div class=\"middle-text\">\n                   My Vitals\n                </div>\n\n                  \n              </div>\n            </ion-col>\n            <ion-col col-6 >\n              <div  class=\"mini-card\">\n                  <div class=\"center\" >\n                      <img class=\"icon\" src=\"assets/clock.png\">\n  \n                  </div>\n                  \n                  <div class=\"middle-text\">\n                     Schedule\n                  </div>\n              </div>\n            </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-6 >\n              <div class=\"mini-card\" (click)=\"addDoctor()\">\n                  <div class=\"center\" >\n                      <img class=\"icon\" src=\"assets/addDoc.jpeg\">\n  \n                  </div>\n                  \n                  <div class=\"middle-text\">\n                     Conversations\n                  </div>\n              </div>\n            </ion-col>\n            <ion-col col-6 >\n              <div  class=\"mini-card\" (click)=\"newMessage()\" >\n                  <div class=\"center\" >\n                      <img class=\"icon\" src=\"assets/message.png\">\n  \n                  </div>\n                  \n                  <div class=\"middle-text\">\n                     New Message\n                  </div>\n              </div>\n            </ion-col>\n\n      </ion-row>\n      \n    </ion-grid>\n  </ion-row>\n\n   <app-fab></app-fab>\n\n\n\n</ion-content>\n<!-- <ion-content>\n  <ion-grid>\n    <ion-row>\n          \n              <app-tab>\n          \n              </app-tab>\n            \n     \n    </ion-row>\n  </ion-grid>\n</ion-content> -->\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/message/message.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/message/message.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  message works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"cont\" >\n<div *ngIf=\"showSplash\" class=\"myBackground\">\n    <div>\n    <img src=\"/assets/giphy.gif\">\n</div> \n</div> \n  <ion-grid>\n    <ion-row class =\"myrow\" >\n      <ion-col size=\"12\">\n        <div class=\"wrapper\" >\n          <div class=\"wave\"></div>\n          <div>\n          \n          <ion-button class=\"back\" (click)= \"backClick()\"  shape=\"round\" color=\"sub.severityLevel\" style=\"color:black\">\n              <ion-icon name=\"arrow-round-back\" ></ion-icon>\n              \n          </ion-button>\n          </div>\n\n          <div >\n              <h1 class=\"centered\">\n                <ion-input clearInput #Name disabled={{notEnable}} (ionChange)=\"changeName()\" #Name [(ngModel)]=\"myName\" floating>\n                     {{patientName}}\n                 </ion-input>\n               </h1>\n               <div class=\"space\">\n                   <ion-avatar class=\"avat\"  >\n                    <img src=\"assets/images.jpg\" >\n                   </ion-avatar>\n               </div>\n           </div>\n           \n        </div>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n        <ion-col size=\"6\">\n        <div class=\"Srow\">\n         <ion-item class = \"it\" color=\"sub.severityLevel\">\n              <ion-icon name=\"contacts\" class=\"pad\"></ion-icon>\n             \n              <ion-input  (ionChange)=\"changeAge()\" type=\"tel\" clearInput readonly=false [(ngModel)]=\"myAge\" #Age maxlength=\"2\"   disabled={{notEnable}}>\n                 Age: {{patientAge}} \n              </ion-input>\n          </ion-item >\n          <ion-item color=\"sub.severityLevel\" >\n            <ion-icon name=\"business\" class=\"pad\"></ion-icon>\n             \n              <ion-input  clearInput  [(ngModel)]=\"myAddress\" (ionChange)=\"changeAddress()\" #Address  disabled={{notEnable}}  floating>\n                 Adress: {{patientAddress}} \n              </ion-input>\n              \n          </ion-item>\n\n          <ion-item  color=\"sub.severityLevel\" >\n          <ion-icon name=\"call\" class=\"pad\"></ion-icon>\n              <ion-label>\n                Mobile: {{mobile}}\n              </ion-label>\n            </ion-item>\n  \n            <ion-item  color=\"sub.severityLevel\" >\n                <ion-icon name=\"alarm\" class=\"pad\"></ion-icon>  \n                <ion-label>\n                  Coming session Date:12/12/2019      \n                </ion-label>\n               <ion-icon name=\"construct\" ></ion-icon>\n                </ion-item>\n\n            <ion-item color=\"sub.severityLevel\" >\n                  <ion-icon name=\"clock\" class=\"pad\"></ion-icon>\n                  \n                    Latest session Date:12/12/2019\n                  \n                </ion-item>\n  \n                <ion-item  color=\"sub.severityLevel\" (click)= \"vitalClick()\">\n                    <ion-icon name=\"fitness\" class=\"pad\"></ion-icon>\n                   \n                      Vitals\n                    \n                  </ion-item>\n         \n        </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"edit\">\n        <ion-col size=\"4\">\n        <ion-button shape=\"round\" (click)=\"edit()\" color=\"sub.severityLevel\" style=\"color:black\"> Edit </ion-button>\n        </ion-col>\n         <ion-col size=\"4\" class=\"cancel\">\n        <ion-button  shape=\"round\" (click)=\"save(Name.value,Age.value,Address.value)\" color=\"sub.severityLevel\" style=\"color:black\"> Save </ion-button>\n        </ion-col>\n        <ion-col size =\"4\" class=\"fab\">\n            <app-fab></app-fab>\n\n        </ion-col>\n    \n    </ion-row>\n\n  </ion-grid>\n  </ion-content>\n  \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/tab/tab.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/tab/tab.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button (click)=\"vitalClick()\">\n      <ion-icon name=\"fitness\"></ion-icon>\n      <ion-label>My Vitals</ion-label>\n      <!-- <ion-badge>6</ion-badge> -->\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"homeClick()\">\n      <ion-icon name=\"person\"></ion-icon> \n      <ion-label>Homepage</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"dlistClick()\" >\n        <ion-icon name=\"medkit\"></ion-icon>\n       <ion-label>My doctors</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"tlistClick()\">\n      <ion-icon name=\"body\"></ion-icon>\n      <ion-label>My trainer</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/vitals/vitals.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/vitals/vitals.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n \n<ion-content  [scrollEvents]=\"true\" >\n    <ion-grid class=\"background\">\n      <ion-row >\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n\n      <ion-col size=\"12\">\n           <img class=\"vital\" src=\"assets/vitals_n.png\">\n      </ion-col>   \n      </ion-row>\n      <ion-row>\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"7\" class=\"title\">\n           <div class=\"header \">\n               <p> My Vital</p>\n              </div>\n      </ion-col></ion-row>\n      <ion-row class=\"main-card\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"vitals-from\">\n          <ion-grid class=\"vital-holder\">\n            <ion-row class=\"vital-row\" *ngFor=\"let item of vitalrow; let i=index\">\n              <ion-col size=\"3\" [ngClass]=\"{'Floating-icon' : !item.isDisabled}\">\n               \n                    <img  class=\"small-icon\" [src]=\"item.icon\">\n        \n              </ion-col>\n              <ion-col size=\"5\">\n                  <div class=\"input\">\n                      <ion-label class=\"start-text\" stacked>{{item.label}}</ion-label>\n                      <ion-input [(ngModel)]=item.input  type=\"number\" #input [placeholder]=\"item.place_holder\"  disabled=\"{{item.isDisabled}}\" ></ion-input>\n                    </div>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-grid>\n                  \n                  <ion-row>\n                    <ion-col size=\"6\">\n                        <img class=\"small-icon-us\" src=\"assets/edit.png\" (click)=\"Update(item)\"> \n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <img class=\"small-icon-us\" src=\"assets/save.png\" (click)=\"Save(item,input.value)\">\n\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                  \n                   \n              </ion-col>\n            </ion-row>\n\n              \n          </ion-grid>\n            \n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row>\n         <app-fab></app-fab>\n\n      </ion-row>\n     \n    </ion-grid>\n    \n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/home/DataModels.ts":
/*!************************************!*\
  !*** ./src/app/home/DataModels.ts ***!
  \************************************/
/*! exports provided: UpVitals, Ivitals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpVitals", function() { return UpVitals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ivitals", function() { return Ivitals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UpVitals {
}
class Ivitals {
}


/***/ }),

/***/ "./src/app/home/doctorList/doctor-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/home/doctorList/doctor-list.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle-text {\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  margin-top: 10%;\n  margin-bottom: 2%;\n  font: 2em;\n  color: white;\n}\n\n.background {\n  background-image: -webkit-gradient(linear, left top, right bottom, from(#0a5279), to(#80d3cb));\n  background-image: linear-gradient(to bottom right, #0a5279, #80d3cb);\n  height: 100%;\n  overflow: scroll;\n}\n\n.small-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.card {\n  background: white;\n  border-radius: 15px;\n}\n\n.back {\n  margin-top: 2%;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhYmliYS9HUC9HcmFkdWF0aW9uLVByb2plY3QtL1BhdGllbnQvc3JjL2FwcC9ob21lL2RvY3Rvckxpc3QvZG9jdG9yLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvZG9jdG9yTGlzdC9kb2N0b3ItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElFO0VBQ0UsOEZBQUE7RUFBQSxvRUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2RvY3Rvckxpc3QvZG9jdG9yLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLm1pZGRsZS10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBtYXJnaW4tdG9wOjEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBmb250OiAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgXG4gIH1cbiAgLmJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwjMGE1Mjc5LCAjODBkM2NiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxuICAuc21hbGwtaWNvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgIFxuICAgIFxufVxuLmNhcmR7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5iYWNre1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSIsIi5taWRkbGUtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgZm9udDogMmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzBhNTI3OSwgIzgwZDNjYik7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYmFjayB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMiU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/doctorList/doctor-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/doctorList/doctor-list.component.ts ***!
  \**********************************************************/
/*! exports provided: DoctorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorListComponent", function() { return DoctorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/datastream/datastreaming.service */ "./src/app/services/datastream/datastreaming.service.ts");
/* harmony import */ var _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavService/navigation.service */ "./src/app/home/NavService/navigation.service.ts");


// import { IDoctor } from '../DataModels';


let DoctorListComponent = class DoctorListComponent {
    constructor(datastream, navigation) {
        this.datastream = datastream;
        this.navigation = navigation;
        // doctorRow:IDoctor[]=[
        //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
        //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
        //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
        //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
        //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'}
        // ];
        this.doctorRow = new Array();
        this.doctorRow = this.datastream.getDoctorList();
    }
    ngOnInit() { }
    backClick() {
        console.log("must navigate to patient list");
        this.navigation.navigateTo('home');
    }
};
DoctorListComponent.ctorParameters = () => [
    { type: src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_2__["DatastreamingService"] },
    { type: _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] }
];
DoctorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/doctorList/doctor-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-list.component.scss */ "./src/app/home/doctorList/doctor-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_2__["DatastreamingService"], _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
], DoctorListComponent);



/***/ }),

/***/ "./src/app/home/fab/fab.component.scss":
/*!*********************************************!*\
  !*** ./src/app/home/fab/fab.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer {\n  margin-bottom: 10%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhYmliYS9HUC9HcmFkdWF0aW9uLVByb2plY3QtL1BhdGllbnQvc3JjL2FwcC9ob21lL2ZhYi9mYWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvZmFiL2ZhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBR0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mYWIvZmFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgLy8gbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLy9saW5lYXItZ3JhZGllbnQoXG4gICAgLy8gdG8gYm90dG9tLFxuICAgIC8vICMwYmI4Y2MgMCUsXG4gICAgLy8gIzMxNzFlMCAxMDAlKVxuICAgIFxuICB9IiwiLm91dGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/fab/fab.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/fab/fab.component.ts ***!
  \*******************************************/
/*! exports provided: FabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabComponent", function() { return FabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavService/navigation.service */ "./src/app/home/NavService/navigation.service.ts");



let FabComponent = class FabComponent {
    constructor(navigation) {
        this.navigation = navigation;
    }
    ngOnInit() { }
    vitalClick() {
        this.navigation.navigateTo('home/vitals');
    }
    homeClick() {
        this.navigation.navigateTo('home/Myprofile');
    }
    dlistClick() {
        this.navigation.navigateTo('home/profile');
    }
    tlistClick() {
        this.navigation.navigateTo('home/profile');
        console.log("trainer list");
    }
    outClick() {
        this.navigation.navigateTo('cover');
        console.log("trainer list");
    }
};
FabComponent.ctorParameters = () => [
    { type: _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
];
FabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/fab/fab.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fab.component.scss */ "./src/app/home/fab/fab.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
], FabComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _vitals_vitals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vitals/vitals.component */ "./src/app/home/vitals/vitals.component.ts");
/* harmony import */ var _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavService/navigation.service */ "./src/app/home/NavService/navigation.service.ts");
/* harmony import */ var _HttPService_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HttPService/http.service */ "./src/app/home/HttPService/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/home/tab/tab.component.ts");
/* harmony import */ var _fab_fab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fab/fab.component */ "./src/app/home/fab/fab.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/home/profile/profile.component.ts");
/* harmony import */ var _doctorList_doctor_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./doctorList/doctor-list.component */ "./src/app/home/doctorList/doctor-list.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./message/message.component */ "./src/app/home/message/message.component.ts");
















let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: 'vitals',
                    component: _vitals_vitals_component__WEBPACK_IMPORTED_MODULE_7__["VitalsComponent"]
                },
                {
                    path: 'doctorList',
                    component: _doctorList_doctor_list_component__WEBPACK_IMPORTED_MODULE_14__["DoctorListComponent"]
                },
                {
                    path: 'Myprofile',
                    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"]
                },
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                },
                {
                    path: 'message',
                    component: _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"]
                }
            ])
        ],
        providers: [
            _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"],
            _HttPService_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _vitals_vitals_component__WEBPACK_IMPORTED_MODULE_7__["VitalsComponent"], _doctorList_doctor_list_component__WEBPACK_IMPORTED_MODULE_14__["DoctorListComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_11__["TabComponent"], _fab_fab_component__WEBPACK_IMPORTED_MODULE_12__["FabComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n}\n\nion-row {\n  margin-bottom: -1%;\n}\n\n.background {\n  margin: 0px;\n  padding: 0px;\n  background-image: url(/assets/path-1.png);\n}\n\n.center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.main-card {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.5);\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  border-radius: 10px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  background: white;\n  margin-top: 10%;\n}\n\n.mini-card {\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  margin-top: 10%;\n  border: whitesmoke solid 2px;\n}\n\n.icon {\n  width: 35%;\n  height: 35%;\n  margin: 5%;\n}\n\n.middle-text {\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.user-name {\n  color: white;\n  font: 1em Open-sans;\n}\n\n.grad {\n  margin-left: 10px;\n  padding-left: 10px;\n  margin-top: 10px;\n  --background: linear-gradient(\n  to bottom,\n  #0a5279 0%,\n  #80d3cb 100%) ;\n}\n\n.space {\n  padding-bottom: 25px;\n  padding-left: 300px;\n}\n\n.avat {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 200px !important;\n  max-height: 200px !important;\n}\n\n.btn {\n  border-radius: 0.5%;\n}\n\n.myBackground {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #50b9b6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhYmliYS9HUC9HcmFkdWF0aW9uLVByb2plY3QtL1BhdGllbnQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQ0VGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxxREFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQTs7O2dCQUFBO0FDTUY7O0FEQ0E7RUFHQyxvQkFBQTtFQUNDLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG5pb24tcm93e1xuICAgIG1hcmdpbi1ib3R0b206IC0xJTtcbn1cbi5iYWNrZ3JvdW5ke1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9wYXRoLTEucG5nKTtcbiAgXG5cbiAgXG59XG5cbi5jZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1haW4tY2FyZCB7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgXG59XG4ubWluaS1jYXJke1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgYm9yZGVyOiB3aGl0ZXNtb2tlIHNvbGlkIDJweDtcbn1cbi5pY29ue1xuICB3aWR0aDozNSU7XG4gIGhlaWdodDogMzUlO1xuICBtYXJnaW46IDUlO1xuICBcbn1cbi5taWRkbGUtdGV4dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgbWFyZ2luLXRvcDoyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4udXNlci1uYW1le1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IDFlbSBPcGVuLXNhbnM7XG59XG4uZ3JhZCAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gYm90dG9tLFxuICAjMGE1Mjc5IDAlLFxuICAjODBkM2NiIDEwMCUpXG4gXG59XG5cbi5zcGFjZXtcbiAgLy8gICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgLy8gICBtYXJnaW4tbGVmdDogMjAwO1xuIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6MzAwcHg7XG59XG4uYXZhdHtcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXG4gIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxuICBtYXgtd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXG4gIG1heC1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXG59XG4uYnRue1xuICBib3JkZXItcmFkaXVzOiAwLjUlO1xufVxuLm15QmFja2dyb3VuZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDpyZ2IoODAsIDE4NSwgMTgyKTtcbiAgXG4gIH1cbiAgXG5cblxuLy8gLy8gICBpb24tY29se1xuLy8gLy8gICAgICAgYmFja2dyb3VuZDogYmx1ZTtcblxuLy8gLy8gfVxuLy8gLy8gaW9uLXJvd3tcbi8vIC8vICAgICBiYWNrZ3JvdW5kOiBjaGFydHJldXNlO1xuLy8gLy8gfVxuICBcbi8vICAgICAvLyBAZm9udC1mYWNlIHtcbi8vICAgICAvLyAgIGZvbnQtZmFtaWx5OiBnaWxiZXJ0X2JvbGQtcHJldmlldzU7XG4vLyAgICAgLy8gICBzcmM6IHVybChhc3NldHMvZ2lsYmVydF9ib2xkLXByZXZpZXc1LnR0Zik7XG4vLyAgICAgLy8gfVxuICAgIFxuXG4vLyAgIC5ob21lcGFnZSB7XG5cbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIG92ZXJmbG93LXg6IGF1dG87XG4vLyAgIG92ZXJmbG93LXk6IGF1dG87XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzUsIDIzNSwgMSk7XG4vLyAgIHdpZHRoOiAzNzUuMDBweDtcbi8vIGhlaWdodDogODEyLjAwcHg7XG4vLyBsZWZ0OiAwcHg7XG4vLyB0b3A6IDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmlja2V5Ym9hcmRyZXR1cm4yNHB4IHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gaGVpZ2h0OiAxMDBweDtcbi8vIGxlZnQ6IDUuMDBweDtcbi8vIHRvcDogOC4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtOCB7XG5cbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHdpZHRoOiAzNzUuMDBweDtcbi8vIGhlaWdodDogMjI1LjAwcHg7XG4vLyBsZWZ0OiAtMy4wMHB4O1xuLy8gdG9wOiAwLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC04IC5wYXRoLTEge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIHdpZHRoOiAzNzUuMDBweDtcbi8vIGhlaWdodDogMjI1LjAwcHg7XG4vLyBsZWZ0OiAwLjAwcHg7XG4vLyB0b3A6IDAuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTggLnRhbGluIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vICAgc3Ryb2tlOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICAgICAgc3Ryb2tlLXdpZHRoOiAxLjAwcHg7XG4vLyAgICAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgd2lkdGg6IDEzNC4wMHB4O1xuLy8gaGVpZ2h0OiAxMzcuMDBweDtcbi8vIGxlZnQ6IDEyMS4wMHB4O1xuLy8gdG9wOiAyMy4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtOCAudXNlci1uYW1lIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgbGluZS1oZWlnaHQ6IDU3LjAwcHg7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjAwcHg7XG4vLyAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuLy8gICAtd2Via2l0LXRleHQtc3Ryb2tlOiB1bnNldDtcbi8vICAgZm9udC1zaXplOiAyMi4wMHB4O1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICBmb250LWZhbWlseTogR2VvcmdpYSwgQXJpYWw7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZTtcbi8vICAgd2lkdGg6IDExMC4wMHB4O1xuLy8gaGVpZ2h0OiAyNS4wMHB4O1xuLy8gbGVmdDogMTMzLjAwcHg7XG4vLyB0b3A6IDE1My4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMjIge1xuXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBvdmVyZmxvdy14OiB1bnNldDtcbi8vICAgb3ZlcmZsb3cteTogdW5zZXQ7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB3aWR0aDogMzUwLjAwcHg7XG4vLyBoZWlnaHQ6IDQ2MC4wMHB4O1xuLy8gbGVmdDogMTIuMDBweDtcbi8vIHRvcDogMzE2LjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAucmVjdGFuZ2xlLTYge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4vLyAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItcmlnaHQtd2lkdGg6IDEuMDBweDtcbi8vICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLXRvcC13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMC4wMHB4O1xuLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAuMDBweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAuMDBweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwLjAwcHg7XG4vLyAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygxMHB4IDEwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3MjU0OTAyKSk7XG4vLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMTBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcyNTQ5MDIpKTtcbi8vICAgd2lkdGg6IDE2NS4wMHB4O1xuLy8gaGVpZ2h0OiAxNDAuMDBweDtcbi8vIGxlZnQ6IDAuMDBweDtcbi8vIHRvcDogMC4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMjIgLnJlY3RhbmdsZS02MSB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuLy8gICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItYm90dG9tLXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLWxlZnQtd2lkdGg6IDEuMDBweDtcbi8vICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4vLyAgIGJvcmRlci1yaWdodC13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItdG9wLXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwLjAwcHg7XG4vLyAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMC4wMHB4O1xuLy8gICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMC4wMHB4O1xuLy8gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAuMDBweDtcbi8vICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMTBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcyNTQ5MDIpKTtcbi8vIGZpbHRlcjogZHJvcC1zaGFkb3coMTBweCAxMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNzI1NDkwMikpO1xuLy8gICB3aWR0aDogMTY1LjAwcHg7XG4vLyBoZWlnaHQ6IDE0MC4wMHB4O1xuLy8gbGVmdDogMC4wMHB4O1xuLy8gdG9wOiAxNjAuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTIyIC5yZWN0YW5nbGUtNjIge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4vLyAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItcmlnaHQtd2lkdGg6IDEuMDBweDtcbi8vICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLXRvcC13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMC4wMHB4O1xuLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAuMDBweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAuMDBweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwLjAwcHg7XG4vLyAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygxMHB4IDEwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3MjU0OTAyKSk7XG4vLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMTBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcyNTQ5MDIpKTtcbi8vICAgd2lkdGg6IDE2NS4wMHB4O1xuLy8gaGVpZ2h0OiAxNDAuMDBweDtcbi8vIGxlZnQ6IDE4NS4wMHB4O1xuLy8gdG9wOiAxNjAuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTIyIC5yZWN0YW5nbGUtNjMge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4vLyAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItcmlnaHQtd2lkdGg6IDEuMDBweDtcbi8vICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLXRvcC13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMC4wMHB4O1xuLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAuMDBweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAuMDBweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwLjAwcHg7XG4vLyAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygxMHB4IDEwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3MjU0OTAyKSk7XG4vLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMTBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcyNTQ5MDIpKTtcbi8vICAgd2lkdGg6IDE2NS4wMHB4O1xuLy8gaGVpZ2h0OiAxNDAuMDBweDtcbi8vIGxlZnQ6IDAuMDBweDtcbi8vIHRvcDogMzIwLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAucmVjdGFuZ2xlLTY0IHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4vLyAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMTEyLCAxMTIsIDExMiwgMSk7XG4vLyAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4vLyAgIGJvcmRlci1ib3R0b20td2lkdGg6IDEuMDBweDtcbi8vICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMTEyLCAxMTIsIDExMiwgMSk7XG4vLyAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItbGVmdC13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMTEyLCAxMTIsIDExMiwgMSk7XG4vLyAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMTEyLCAxMTIsIDExMiwgMSk7XG4vLyAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4vLyAgIGJvcmRlci10b3Atd2lkdGg6IDEuMDBweDtcbi8vICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAuMDBweDtcbi8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwLjAwcHg7XG4vLyAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwLjAwcHg7XG4vLyAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMC4wMHB4O1xuLy8gICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMTBweCAxMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNzI1NDkwMikpO1xuLy8gZmlsdGVyOiBkcm9wLXNoYWRvdygxMHB4IDEwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3MjU0OTAyKSk7XG4vLyAgIHdpZHRoOiAxNjUuMDBweDtcbi8vIGhlaWdodDogMTQwLjAwcHg7XG4vLyBsZWZ0OiAxODUuMDBweDtcbi8vIHRvcDogMzIwLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAuZ2VuZXJhdGUtY29kZSB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGxpbmUtaGVpZ2h0OiA1Ny4wMHB4O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMC4wMHB4O1xuLy8gICBjb2xvcjogcmdiYSgxNDMsIDIwMywgMjU1LCAxKTtcbi8vICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogdW5zZXQ7XG4vLyAgIGZvbnQtc2l6ZTogMjIuMDBweDtcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIEFyaWFsO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICBvdmVyZmxvdy14OiB1bnNldDtcbi8vICAgb3ZlcmZsb3cteTogdW5zZXQ7XG4vLyAgIHdoaXRlLXNwYWNlOiBwcmU7XG4vLyAgIHdpZHRoOiAxNDQuMDBweDtcbi8vIGhlaWdodDogMjUuMDBweDtcbi8vIGxlZnQ6IDEwLjAwcHg7XG4vLyB0b3A6IDcyLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAuYWRkLXNjaGVkdWxlIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgbGluZS1oZWlnaHQ6IDU3LjAwcHg7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjAwcHg7XG4vLyAgIGNvbG9yOiByZ2JhKDE0MywgMjAzLCAyNTUsIDEpO1xuLy8gICAtd2Via2l0LXRleHQtc3Ryb2tlOiB1bnNldDtcbi8vICAgZm9udC1zaXplOiAyMi4wMHB4O1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICBmb250LWZhbWlseTogR2VvcmdpYSwgQXJpYWw7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZTtcbi8vICAgd2lkdGg6IDEzNC4wMHB4O1xuLy8gaGVpZ2h0OiAyNS4wMHB4O1xuLy8gbGVmdDogMTUuMDBweDtcbi8vIHRvcDogMjM1LjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAuYWRkLWZyZWV0aW1lcyB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGxpbmUtaGVpZ2h0OiA1Ny4wMHB4O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMC4wMHB4O1xuLy8gICBjb2xvcjogcmdiYSgxNDMsIDIwMywgMjU1LCAxKTtcbi8vICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogdW5zZXQ7XG4vLyAgIGZvbnQtc2l6ZTogMjIuMDBweDtcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIEFyaWFsO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICBvdmVyZmxvdy14OiB1bnNldDtcbi8vICAgb3ZlcmZsb3cteTogdW5zZXQ7XG4vLyAgIHdoaXRlLXNwYWNlOiBwcmU7XG4vLyAgIHdpZHRoOiAxNDMuMDBweDtcbi8vIGhlaWdodDogMjUuMDBweDtcbi8vIGxlZnQ6IDE5Ny4wMHB4O1xuLy8gdG9wOiAyMzUuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTIyIC5wYXRpZW50c2xpc3Qge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBsaW5lLWhlaWdodDogMjUuMDBweDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDAuMDBweDtcbi8vICAgY29sb3I6IHJnYmEoMTQzLCAyMDMsIDI1NSwgMSk7XG4vLyAgIC13ZWJraXQtdGV4dC1zdHJva2U6IHVuc2V0O1xuLy8gICBmb250LXNpemU6IDIyLjAwcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyBmb250LXN0eWxlOiBub3JtYWw7XG4vLyAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBBcmlhbDtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgb3ZlcmZsb3cteDogdW5zZXQ7XG4vLyAgIG92ZXJmbG93LXk6IHVuc2V0O1xuLy8gICB3aGl0ZS1zcGFjZTogcHJlO1xuLy8gICB3aWR0aDogODAuMDBweDtcbi8vIGhlaWdodDogNTAuMDBweDtcbi8vIGxlZnQ6IDQyLjAwcHg7XG4vLyB0b3A6IDQwMS4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMjIgLm1hc3NhZ2VzIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgbGluZS1oZWlnaHQ6IDI1LjAwcHg7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjAwcHg7XG4vLyAgIGNvbG9yOiByZ2JhKDE0MywgMjAzLCAyNTUsIDEpO1xuLy8gICAtd2Via2l0LXRleHQtc3Ryb2tlOiB1bnNldDtcbi8vICAgZm9udC1zaXplOiAyMi4wMHB4O1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICBmb250LWZhbWlseTogR2VvcmdpYSwgQXJpYWw7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZTtcbi8vICAgd2lkdGg6IDkyLjAwcHg7XG4vLyBoZWlnaHQ6IDI1LjAwcHg7XG4vLyBsZWZ0OiAyMjIuMDBweDtcbi8vIHRvcDogNDAxLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAuaWNvbi1tYXAtaGVhbHRoIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGZpbGw6IHJnYmEoMTA5LCA4OSwgODksIDEpO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICB3aWR0aDogNDIuNjdweDtcbi8vIGhlaWdodDogNDQuMjNweDtcbi8vIGxlZnQ6IDYxLjAwcHg7XG4vLyB0b3A6IDE5LjMzcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAuZ3JvdXAtMTkge1xuXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBvdmVyZmxvdy14OiB1bnNldDtcbi8vICAgb3ZlcmZsb3cteTogdW5zZXQ7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB3aWR0aDogMTY1LjAwcHg7XG4vLyBoZWlnaHQ6IDE0MC4wMHB4O1xuLy8gbGVmdDogMTg1LjAwcHg7XG4vLyB0b3A6IDAuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTIyIC5ncm91cC0xOSAucmVjdGFuZ2xlLTY0ZGU4YjNlMSB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuLy8gICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItYm90dG9tLXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLWxlZnQtd2lkdGg6IDEuMDBweDtcbi8vICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4vLyAgIGJvcmRlci1yaWdodC13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItdG9wLXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwLjAwcHg7XG4vLyAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMC4wMHB4O1xuLy8gICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMC4wMHB4O1xuLy8gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAuMDBweDtcbi8vICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMTBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcyNTQ5MDIpKTtcbi8vIGZpbHRlcjogZHJvcC1zaGFkb3coMTBweCAxMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNzI1NDkwMikpO1xuLy8gICB3aWR0aDogMTY1LjAwcHg7XG4vLyBoZWlnaHQ6IDE0MC4wMHB4O1xuLy8gbGVmdDogMC4wMHB4O1xuLy8gdG9wOiAwLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAuZ3JvdXAtMTkgLnNjaGVkdWxlIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgbGluZS1oZWlnaHQ6IDI1LjAwcHg7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjAwcHg7XG4vLyAgIGNvbG9yOiByZ2JhKDE0MywgMjAzLCAyNTUsIDEpO1xuLy8gICAtd2Via2l0LXRleHQtc3Ryb2tlOiB1bnNldDtcbi8vICAgZm9udC1zaXplOiAyMi4wMHB4O1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICBmb250LWZhbWlseTogR2VvcmdpYSwgQXJpYWw7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZTtcbi8vICAgd2lkdGg6IDkwLjAwcHg7XG4vLyBoZWlnaHQ6IDI1LjAwcHg7XG4vLyBsZWZ0OiAzOC4wMHB4O1xuLy8gdG9wOiA4MS4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMjIgLmdyb3VwLTE5IC5pY29uLW1hdGVyaWFsLXNjaGVkdWxlIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGZpbGw6IHJnYmEoMTA5LCA4OSwgODksIDEpO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICB3aWR0aDogNDEuMzNweDtcbi8vIGhlaWdodDogNDMuNjdweDtcbi8vIGxlZnQ6IDYyLjAwcHg7XG4vLyB0b3A6IDE0LjMzcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAuaWNvbi1pb25pYy1pb3MtYWRkLWNpcmNsZS1vdXRsaW5lIHtcblxuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgb3ZlcmZsb3cteDogdW5zZXQ7XG4vLyAgIG92ZXJmbG93LXk6IHVuc2V0O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgd2lkdGg6IDQ1LjAwcHg7XG4vLyBoZWlnaHQ6IDQ1LjAwcHg7XG4vLyBsZWZ0OiAyNDYuMDBweDtcbi8vIHRvcDogMTgzLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0yMiAuaWNvbi1pb25pYy1pb3MtYWRkLWNpcmNsZS1vdXRsaW5lIC5wYXRoLTIge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgZmlsbDogcmdiYSgxMDksIDg5LCA4OSwgMSk7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIHdpZHRoOiAxMC43M3B4O1xuLy8gaGVpZ2h0OiAxMC43M3B4O1xuLy8gbGVmdDogMTcuMTRweDtcbi8vIHRvcDogMTcuMTRweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTIyIC5pY29uLWlvbmljLWlvcy1hZGQtY2lyY2xlLW91dGxpbmUgLnBhdGgtMyB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBmaWxsOiByZ2JhKDEwOSwgODksIDg5LCAxKTtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgd2lkdGg6IDQ1LjAwcHg7XG4vLyBoZWlnaHQ6IDQ1LjAwcHg7XG4vLyBsZWZ0OiAwLjAwcHg7XG4vLyB0b3A6IDAuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTIyIC5pY29uLWlvbmljLWlvcy1hZGQtY2lyY2xlLW91dGxpbmUxIHtcblxuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgb3ZlcmZsb3cteDogdW5zZXQ7XG4vLyAgIG92ZXJmbG93LXk6IHVuc2V0O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgd2lkdGg6IDQ1LjAwcHg7XG4vLyBoZWlnaHQ6IDQ1LjAwcHg7XG4vLyBsZWZ0OiA1OC4wMHB4O1xuLy8gdG9wOiAxODMuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTIyIC5pY29uLWlvbmljLWlvcy1hZGQtY2lyY2xlLW91dGxpbmUxIC5wYXRoLTJiMWMwMzdkNiB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBmaWxsOiByZ2JhKDEwOSwgODksIDg5LCAxKTtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgd2lkdGg6IDEwLjczcHg7XG4vLyBoZWlnaHQ6IDEwLjczcHg7XG4vLyBsZWZ0OiAxNy4xNHB4O1xuLy8gdG9wOiAxNy4xNHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMjIgLmljb24taW9uaWMtaW9zLWFkZC1jaXJjbGUtb3V0bGluZTEgLnBhdGgtM2I4ZDE4MmJkIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGZpbGw6IHJnYmEoMTA5LCA4OSwgODksIDEpO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICB3aWR0aDogNDUuMDBweDtcbi8vIGhlaWdodDogNDUuMDBweDtcbi8vIGxlZnQ6IDAuMDBweDtcbi8vIHRvcDogMC4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMjIgLmljb24tYXdlc29tZS1saXN0IHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGZpbGw6IHJnYmEoMTA5LCA4OSwgODksIDEpO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICB3aWR0aDogMzYuMDBweDtcbi8vIGhlaWdodDogMjkuMjVweDtcbi8vIGxlZnQ6IDYyLjAwcHg7XG4vLyB0b3A6IDM0OS4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMjIgLmljb24tYXdlc29tZS1saXN0MSB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBmaWxsOiByZ2JhKDEwOSwgODksIDg5LCAxKTtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgd2lkdGg6IDM2LjAwcHg7XG4vLyBoZWlnaHQ6IDI5LjI1cHg7XG4vLyBsZWZ0OiAyNTAuMDBweDtcbi8vIHRvcDogMzQ5LjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5pY29uLW9wZW4tYWNjb3VudC1sb2dvdXQge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgd2lkdGg6IDI0LjAwcHg7XG4vLyBoZWlnaHQ6IDIwLjUwcHg7XG4vLyBsZWZ0OiA1LjAwcHg7XG4vLyB0b3A6IDExLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5sb2dvdXQge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBsZXR0ZXItc3BhY2luZzogMC4wMHB4O1xuLy8gICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogdW5zZXQ7XG4vLyAgIGZvbnQtc2l6ZTogMTYuMDBweDtcbi8vICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgZm9udC1mYW1pbHk6IGdpbGJlcnRfYm9sZC1wcmV2aWV3NSwgQXJpYWw7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZTtcbi8vICAgd2lkdGg6IDQwLjAwcHg7XG4vLyBoZWlnaHQ6IDIxLjAwcHg7XG4vLyBsZWZ0OiAzMy4wMHB4O1xuLy8gdG9wOiAxMC4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMTgge1xuXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBvdmVyZmxvdy14OiB1bnNldDtcbi8vICAgb3ZlcmZsb3cteTogdW5zZXQ7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB3aWR0aDogMzQ0LjAwcHg7XG4vLyBoZWlnaHQ6IDkzLjAwcHg7XG4vLyBsZWZ0OiAxNS4wMHB4O1xuLy8gdG9wOiAxOTguMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTE4IC54NDU4MTcge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDAuNTc5OTk5OTgzMzEwNjk5NTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4vLyAgIHN0cm9rZTogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgICAgIHN0cm9rZS13aWR0aDogMS4wMHB4O1xuLy8gICAgICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIHdpZHRoOiAzMzYuMDBweDtcbi8vIGhlaWdodDogOTMuMDBweDtcbi8vIGxlZnQ6IDAuMDBweDtcbi8vIHRvcDogMC4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMTggLnJlcGVhdC1ncmlkLTYge1xuXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBvdmVyZmxvdy14OiBhdXRvO1xuLy8gICBvdmVyZmxvdy15OiBhdXRvO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgd2lkdGg6IDMyNC4wMHB4O1xuLy8gaGVpZ2h0OiAxOS4wMHB4O1xuLy8gbGVmdDogMjAuMDBweDtcbi8vIHRvcDogNjIuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTE4IC5yZXBlYXQtZ3JpZC02IC54NzJicyB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjAwcHg7XG4vLyAgIGNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICAtd2Via2l0LXRleHQtc3Ryb2tlOiB1bnNldDtcbi8vICAgZm9udC1zaXplOiAxNi4wMHB4O1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICBmb250LWZhbWlseTogR2VvcmdpYSwgQXJpYWw7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZTtcbi8vICAgd2lkdGg6IDQwLjAwcHg7XG4vLyBoZWlnaHQ6IDE5LjAwcHg7XG4vLyBsZWZ0OiAtMS4wMHB4O1xuLy8gdG9wOiAwLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0xOCAucmVwZWF0LWdyaWQtNiAueDY1a2cge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBsZXR0ZXItc3BhY2luZzogMC4wMHB4O1xuLy8gICBjb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogdW5zZXQ7XG4vLyAgIGZvbnQtc2l6ZTogMTYuMDBweDtcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIEFyaWFsO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICBvdmVyZmxvdy14OiB1bnNldDtcbi8vICAgb3ZlcmZsb3cteTogdW5zZXQ7XG4vLyAgIHdoaXRlLXNwYWNlOiBwcmU7XG4vLyAgIHdpZHRoOiAzNC4wMHB4O1xuLy8gaGVpZ2h0OiAxOS4wMHB4O1xuLy8gbGVmdDogNzAuMDBweDtcbi8vIHRvcDogMC4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMTggLnJlcGVhdC1ncmlkLTYgLngxNjJjbSB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjAwcHg7XG4vLyAgIGNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICAtd2Via2l0LXRleHQtc3Ryb2tlOiB1bnNldDtcbi8vICAgZm9udC1zaXplOiAxNi4wMHB4O1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICBmb250LWZhbWlseTogR2VvcmdpYSwgQXJpYWw7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZTtcbi8vICAgd2lkdGg6IDQ2LjAwcHg7XG4vLyBoZWlnaHQ6IDE5LjAwcHg7XG4vLyBsZWZ0OiAxMzIuMDBweDtcbi8vIHRvcDogMC4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMTggLnJlcGVhdC1ncmlkLTYgLm1hbGUge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBsZXR0ZXItc3BhY2luZzogMC4wMHB4O1xuLy8gICBjb2xvcjogcmdiYSgxMTIsIDExMiwgMTEyLCAxKTtcbi8vICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogdW5zZXQ7XG4vLyAgIGZvbnQtc2l6ZTogMTYuMDBweDtcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIEFyaWFsO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICBvdmVyZmxvdy14OiB1bnNldDtcbi8vICAgb3ZlcmZsb3cteTogdW5zZXQ7XG4vLyAgIHdoaXRlLXNwYWNlOiBwcmU7XG4vLyAgIHdpZHRoOiAzNC4wMHB4O1xuLy8gaGVpZ2h0OiAxOS4wMHB4O1xuLy8gbGVmdDogMjA2LjAwcHg7XG4vLyB0b3A6IDAuMDBweDtcblxuLy8gfVxuXG4vLyAuaG9tZXBhZ2UgLmdyb3VwLTE4IC5yZXBlYXQtZ3JpZC02IC5vIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDAuMDBweDtcbi8vICAgY29sb3I6IHJnYmEoMTEyLCAxMTIsIDExMiwgMSk7XG4vLyAgIC13ZWJraXQtdGV4dC1zdHJva2U6IHVuc2V0O1xuLy8gICBmb250LXNpemU6IDE2LjAwcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyBmb250LXN0eWxlOiBub3JtYWw7XG4vLyAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBBcmlhbDtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgb3ZlcmZsb3cteDogdW5zZXQ7XG4vLyAgIG92ZXJmbG93LXk6IHVuc2V0O1xuLy8gICB3aGl0ZS1zcGFjZTogcHJlO1xuLy8gICB3aWR0aDogMjAuMDBweDtcbi8vIGhlaWdodDogMTkuMDBweDtcbi8vIGxlZnQ6IDI4MS4wMHB4O1xuLy8gdG9wOiAwLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0xOCAucmVwZWF0LWdyaWQtNyB7XG5cbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIG92ZXJmbG93LXg6IGF1dG87XG4vLyAgIG92ZXJmbG93LXk6IGF1dG87XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB3aWR0aDogMzEwLjAwcHg7XG4vLyBoZWlnaHQ6IDM5Ljc1cHg7XG4vLyBsZWZ0OiAxMy4wMHB4O1xuLy8gdG9wOiAxMS4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMTggLnJlcGVhdC1ncmlkLTcgLnJlcGVhdC1ncmlkLTcwYzNkODlkOSB7XG5cbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbi8vICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgd2lkdGg6IDMxMC4wMHB4O1xuLy8gaGVpZ2h0OiAzOS43NXB4O1xuLy8gbGVmdDogMC4wMHB4O1xuLy8gdG9wOiAwLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0xOCAucmVwZWF0LWdyaWQtNyAucmVwZWF0LWdyaWQtNzBjM2Q4OWQ5IC5pY29uLWF3ZXNvbWUtaGVhcnRiZWF0IHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGZpbGw6IHJnYmEoODcsIDE3MywgMCwgMSk7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIHdpZHRoOiAzNi4wMHB4O1xuLy8gaGVpZ2h0OiAzMS41MHB4O1xuLy8gbGVmdDogMC4wMHB4O1xuLy8gdG9wOiA4LjI1cHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0xOCAucmVwZWF0LWdyaWQtNyAucmVwZWF0LWdyaWQtNzBjM2Q4OWQ5IC5pY29uLWF3ZXNvbWUtd2VpZ2h0IHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBtYXJnaW4tdG9wOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1yaWdodDogMC4wMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy1ib3R0b206IDAuMDBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAwLjAwcHg7XG4vLyAgIGZpbGw6IHJnYmEoODcsIDE3MywgMCwgMSk7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIHdpZHRoOiAzNi4wMHB4O1xuLy8gaGVpZ2h0OiAzNi4wMHB4O1xuLy8gbGVmdDogNzEuOTlweDtcbi8vIHRvcDogMi4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMTggLnJlcGVhdC1ncmlkLTcgLnJlcGVhdC1ncmlkLTcwYzNkODlkOSAuaWNvbi1hd2Vzb21lLXRhcGUge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgZmlsbDogcmdiYSg4NywgMTczLCAwLCAxKTtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgd2lkdGg6IDQ1LjAwcHg7XG4vLyBoZWlnaHQ6IDMxLjUwcHg7XG4vLyBsZWZ0OiAxMzguMjRweDtcbi8vIHRvcDogMi4wMHB4O1xuXG4vLyB9XG5cbi8vIC5ob21lcGFnZSAuZ3JvdXAtMTggLnJlcGVhdC1ncmlkLTcgLnJlcGVhdC1ncmlkLTcwYzNkODlkOSAuaWNvbi1hd2Vzb21lLXRyYW5zZ2VuZGVyLWFsdCB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBmaWxsOiByZ2JhKDg3LCAxNzMsIDAsIDEpO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICB3aWR0aDogMzMuNzVweDtcbi8vIGhlaWdodDogMzYuMDBweDtcbi8vIGxlZnQ6IDIwNy4wNXB4O1xuLy8gdG9wOiAyLjc1cHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC5ncm91cC0xOCAucmVwZWF0LWdyaWQtNyAucmVwZWF0LWdyaWQtNzBjM2Q4OWQ5IC5vdXRwdXQtb25saW5lcG5ndG9vbHMtMSB7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuLy8gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gdHJhbnNmb3JtOiByb3RhdGUoMC4wMGRlZyk7XG4vLyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvb3V0cHV0LW9ubGluZXBuZ3Rvb2xzLTEucG5nXCIpO1xuLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbWFyZ2luLXRvcDogMC4wMHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDAuMDBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4wMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwLjAwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMC4wMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuLy8gICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItYm90dG9tLXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcbi8vICAgYm9yZGVyLWxlZnQtd2lkdGg6IDEuMDBweDtcbi8vICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4vLyAgIGJvcmRlci1yaWdodC13aWR0aDogMS4wMHB4O1xuLy8gICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuLy8gICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuLy8gICBib3JkZXItdG9wLXdpZHRoOiAxLjAwcHg7XG4vLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMDBweDtcbi8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMDBweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4wMHB4O1xuLy8gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4wMHB4O1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gICB3aWR0aDogMzkuMDBweDtcbi8vIGhlaWdodDogMzkuMDBweDtcbi8vIGxlZnQ6IDI3MS4wMHB4O1xuLy8gdG9wOiAwLjAwcHg7XG5cbi8vIH1cblxuLy8gLmhvbWVwYWdlIC54MzdkZjY2ZjYge1xuLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwLjAwZGVnKTtcbi8vIHRyYW5zZm9ybTogcm90YXRlKDAuMDBkZWcpO1xuLy8gLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbi8vIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIG1hcmdpbi10b3A6IDAuMDBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjAwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDAuMDBweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDAuMDBweDtcbi8vICAgcGFkZGluZy10b3A6IDAuMDBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMC4wMHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDAuMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBsZXR0ZXItc3BhY2luZzogMC4wMHB4O1xuLy8gICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogdW5zZXQ7XG4vLyAgIGZvbnQtc2l6ZTogMTYuMDBweDtcbi8vICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgZm9udC1mYW1pbHk6IGdpbGJlcnRfYm9sZC1wcmV2aWV3NSwgQXJpYWw7XG4vLyAgIGJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG92ZXJmbG93LXg6IHVuc2V0O1xuLy8gICBvdmVyZmxvdy15OiB1bnNldDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZTtcbi8vICAgd2lkdGg6IDYuMDBweDtcbi8vIGhlaWdodDogMjEuMDBweDtcbi8vIGxlZnQ6IDE4Ny4wMHB4O1xuLy8gdG9wOiAyNTYuMDBweDtcblxuLy8gfVxuXG4iLCJpb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogLTElO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3BhdGgtMS5wbmcpO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ubWluaS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBib3JkZXI6IHdoaXRlc21va2Ugc29saWQgMnB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogMzUlO1xuICBtYXJnaW46IDUlO1xufVxuXG4ubWlkZGxlLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udDogMWVtIE9wZW4tc2Fucztcbn1cblxuLmdyYWQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gYm90dG9tLFxuICAjMGE1Mjc5IDAlLFxuICAjODBkM2NiIDEwMCUpIDtcbn1cblxuLnNwYWNlIHtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMzAwcHg7XG59XG5cbi5hdmF0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNSU7XG59XG5cbi5teUJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM1MGI5YjY7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavService/navigation.service */ "./src/app/home/NavService/navigation.service.ts");
/* harmony import */ var _services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/datastream/datastreaming.service */ "./src/app/services/datastream/datastreaming.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _HttPService_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HttPService/http.service */ "./src/app/home/HttPService/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let HomePage = class HomePage {
    constructor(navigation, datastream, http, addController, docList) {
        this.navigation = navigation;
        this.datastream = datastream;
        this.http = http;
        this.addController = addController;
        this.docList = docList;
    }
    ngOnInit() {
        this.patientName = this.datastream.getPatientName();
        if (this.patientName == undefined) {
            this.presentAlert('HTTP DataStream Error: ', "My Patient Name is Null");
            console.log("this.datastream.getPatientName()==undefined ");
            this.navigation.navigateTo('cover');
        }
        this.getDocList();
    }
    getDocList() {
        const token = this.datastream.getToken();
        console.log("Token to get doctor list in home page: ", token);
    }
    clear() {
        this.datastream.clearData();
        this.navigation.navigateTo('cover');
    }
    NavigateMe(path) {
        this.navigation.navigateTo(path);
        console.log("navigate to ", path);
    }
    presentAlert(subtitleString, messageString) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.addController.create({
                header: 'ERROR',
                subHeader: subtitleString,
                message: messageString,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    addDoctor() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = this.addController.create({
                header: 'Add your Doctor',
                animated: true,
                message: 'Enter code you got from your doctor.',
                inputs: [{
                        type: "text",
                        name: 'val',
                        value: ""
                    }],
                cssClass: "Dark",
                buttons: [{
                        text: 'Add',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            let token = this.datastream.getToken();
                            console.log("code: " + data.val);
                            yield this.http.addDoctor(data.val, token)
                                .subscribe(response => {
                                console.log("http request to add doctor responce: " + JSON.stringify(response));
                            }, err => {
                                this.presentAlert('HTTP Add Doctor Error: ', err.error.message);
                            }, () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                console.log('HTTP request completed.');
                                //Get Doctor List
                                yield this.http.getDoctorList(token)
                                    .subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                    // timer
                                    this.showSplash = true;
                                    // timer
                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(10000).subscribe(() => this.showSplash = false);
                                    this.datastream.clearDoctorList();
                                    yield response.forEach(element => {
                                        this.datastream.addToDoctorList(element);
                                    });
                                    yield this.datastream.saveDoctorListToDataStore();
                                    console.log('HTTP request completed.');
                                    this.navigation.navigateTo('home/doctorList');
                                }), err => {
                                    console.log('HTTP Doctor List Error: ', err.error.message);
                                    this.presentAlert('HTTP Doctor List Error: ', err.error.message);
                                });
                            }));
                        })
                    },
                    { text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            (yield alert).present();
        });
    }
    newMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.docList.create({
                header: 'Message Type',
                buttons: [{
                        text: 'Text',
                        // role: 'destructive',
                        icon: 'chatbubbles',
                        handler: () => {
                            console.log('Delete clicked');
                            this.navigation.navigateTo("home/message");
                        }
                    }, {
                        text: 'Voice Call',
                        icon: 'call',
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Video Call',
                        icon: 'camera',
                        handler: () => {
                            console.log('Play clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
    { type: _services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_3__["DatastreamingService"] },
    { type: _HttPService_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
        _services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_3__["DatastreamingService"],
        _HttPService_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/message/message.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/message/message.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/message/message.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/message/message.component.ts ***!
  \***************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageComponent = class MessageComponent {
    constructor() { }
    ngOnInit() { }
};
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.scss */ "./src/app/home/message/message.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessageComponent);



/***/ }),

/***/ "./src/app/home/profile/profile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/profile/profile.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cont {\n  height: 100%;\n  width: 100%;\n  margin: -10%;\n}\n\n.centered {\n  position: absolute;\n  margin-left: 50%;\n  -webkit-transform: translate(-30%, -40%);\n          transform: translate(-30%, -40%);\n  color: black;\n}\n\n.avat {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 150px !important;\n  max-height: 150px !important;\n}\n\n.space {\n  position: absolute;\n  margin-left: 10%;\n  margin-top: 10%;\n}\n\n.it {\n  padding-top: 2%;\n}\n\n.grad {\n  --background: linear-gradient(\n  to bottom,\n  #0a5279 0%,\n  #80d3cb 100%) ;\n}\n\n.back {\n  margin-top: 50%;\n  margin-left: 10%;\n}\n\n.edit {\n  margin-left: 7%;\n  margin-top: 90%;\n}\n\n.pad {\n  margin-left: 10%;\n  padding-right: 3%;\n}\n\n.wrapper {\n  width: 500px;\n  height: 500px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 5px;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#50b9b6), to(#ffffff));\n  background-image: linear-gradient(to top, #50b9b6 0%, #ffffff 100%);\n  overflow: hidden;\n  border-radius: 20%;\n}\n\n.wave {\n  width: 1000px;\n  height: 1000px;\n  position: absolute;\n  top: -25%;\n  left: 50%;\n  margin-left: -500px;\n  margin-top: -500px;\n  border-radius: 35%;\n  background: rgba(255, 255, 255, 0.75);\n  -webkit-animation: wave 15s infinite linear;\n          animation: wave 15s infinite linear;\n}\n\n@-webkit-keyframes wave {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  from {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes wave {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  from {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.myrow {\n  padding-bottom: 60%;\n}\n\n.Srow {\n  width: 500px;\n  height: 500px;\n  position: absolute;\n  margin-left: 100%;\n  margin-top: 130%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#50b9b6), to(#ffffff));\n  background-image: linear-gradient(to bottom, #50b9b6 0%, #ffffff 100%);\n  overflow: hidden;\n  border-radius: 20%;\n}\n\n.fab {\n  margin-bottom: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhYmliYS9HUC9HcmFkdWF0aW9uLVByb2plY3QtL1BhdGllbnQvc3JjL2FwcC9ob21lL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURZRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsWUFBQTtBQ1RKOztBRGNFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNYSjs7QURhRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVko7O0FEWUU7RUFDRSxlQUFBO0FDVEo7O0FEV0U7RUFDRTs7O2dCQUFBO0FDTEo7O0FEWUM7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURZRTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDVE47O0FEV0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2RkFBQTtFQUFBLG1FQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDUEo7O0FEVUU7RUFDRTtJQUFPLCtCQUFBO1lBQUEsdUJBQUE7RUNOVDtFRE9FO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0pUO0FBQ0Y7O0FEQ0U7RUFDRTtJQUFPLCtCQUFBO1lBQUEsdUJBQUE7RUNOVDtFRE9FO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0pUO0FBQ0Y7O0FES0U7RUFDRSxtQkFBQTtBQ0hKOztBREtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsNkZBQUE7RUFBQSxzRUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJRTtFQUNFLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnR7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogLTEwJTtcbn1cblxuLy8gLmNvbnRhaW5lciB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIG1hcmdpbjogMHB4O1xuLy8gICAgIHBhZGRpbmc6IDAlO1xuLy8gICB9XG4gIC5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwgLTQwJSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBtYXJnaW4tdG9wOi0xMDAlO1xuICAgIC8vIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB9XG4gIC5hdmF0e1xuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDsgIFxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxuICAgIG1heC13aWR0aDogMTUwcHggIWltcG9ydGFudDsgIFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7IFxuICB9XG4gIC5zcGFjZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cbiAgLml0e1xuICAgIHBhZGRpbmctdG9wOiAyJTsgXG4gICAgfVxuICAuZ3JhZCAge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGJvdHRvbSxcbiAgICAjMGE1Mjc5IDAlLFxuICAgICM4MGQzY2IgMTAwJSlcbiAgICBcbn1cblxuIC5iYWNre1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG4gIFxuICAuZWRpdHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICAgIG1hcmdpbi10b3A6IDkwJTtcbiAgICB9XG4gIC5wYWR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgfVxuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDgwLCAxODUsIDE4MikgMCUsICNmZmZmZmYgMTAwJSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIH1cbiAgXG4gIC53YXZlIHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGhlaWdodDogMTAwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yNSU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1JTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XG4gICAgYW5pbWF0aW9uOiB3YXZlIDE1cyBpbmZpbml0ZSBsaW5lYXI7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgd2F2ZSB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbiAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG4gIH1cbiAgLm15cm93e1xuICAgIHBhZGRpbmctYm90dG9tOiA2MCU7XG4gIH1cbiAgLlNyb3d7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEzMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDgwLCAxODUsIDE4MikgMCUsICNmZmZmZmYgMTAwJSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIH1cbiAgLmZhYntcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgfVxuICAiLCIuY29udCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogLTEwJTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtNDAlKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYXZhdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zcGFjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uaXQge1xuICBwYWRkaW5nLXRvcDogMiU7XG59XG5cbi5ncmFkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIGJvdHRvbSxcbiAgIzBhNTI3OSAwJSxcbiAgIzgwZDNjYiAxMDAlKSA7XG59XG5cbi5iYWNrIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uZWRpdCB7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgbWFyZ2luLXRvcDogOTAlO1xufVxuXG4ucGFkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMyU7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1MGI5YjYgMCUsICNmZmZmZmYgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cblxuLndhdmUge1xuICB3aWR0aDogMTAwMHB4O1xuICBoZWlnaHQ6IDEwMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNSU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01MDBweDtcbiAgbWFyZ2luLXRvcDogLTUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNSU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGFuaW1hdGlvbjogd2F2ZSAxNXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHdhdmUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4ubXlyb3cge1xuICBwYWRkaW5nLWJvdHRvbTogNjAlO1xufVxuXG4uU3JvdyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTMwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1MGI5YjYgMCUsICNmZmZmZmYgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cblxuLmZhYiB7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavService/navigation.service */ "./src/app/home/NavService/navigation.service.ts");
/* harmony import */ var src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/datastream/datastreaming.service */ "./src/app/services/datastream/datastreaming.service.ts");
/* harmony import */ var _HttPService_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HttPService/http.service */ "./src/app/home/HttPService/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ProfileComponent = class ProfileComponent {
    constructor(navigation, datastream, editPatientService, savedata) {
        this.navigation = navigation;
        this.datastream = datastream;
        this.editPatientService = editPatientService;
        this.savedata = savedata;
    }
    ngOnInit() {
        this.notEnable = true;
        // this.showSplash = true;
        // timer(3000).subscribe(()=> this.showSplash = false);
        // this.patientName =this.datastream.getPatientName();
        this.patientName = this.datastream.getPatientName();
        this.patientAge = this.datastream.getPatientAge();
        this.patientAddress = this.datastream.getPatientAddress();
        this.mobile = this.datastream.getPatientMobile();
        this.code = "patient1";
        console.log("name  " + this.patientName);
        console.log("myAge " + this.patientAge);
        console.log("myName " + this.myName);
    }
    backClick() {
        console.log("must navigate to patient list");
        this.navigation.navigateTo('home');
    }
    vitalClick() {
        this.navigation.navigateTo('home/vitals');
    }
    edit() {
        this.notEnable = false;
        // this.patientName="";
        // this.patientAge=null;
        // this.patientAddress="";
        // this.myAddress="";
        // this.myAge=null;
        // this.myName="";
        console.log("myAge " + this.myAge);
        console.log("myName " + this.myName);
    }
    save(name, age, address, token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = this.savedata.create({
                header: 'Are you sure you want to save edits?',
                animated: true,
                buttons: [{ text: 'Cancel',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            this.patientName = "";
                            this.patientAge = null;
                            this.patientAddress = "";
                            this.myName = this.datastream.getPatientName();
                            this.myAge = this.datastream.getPatientAge();
                            this.myAddress = this.datastream.getPatientAddress();
                            this.notEnable = true;
                        })
                    },
                    {
                        text: 'Save',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            this.notEnable = true;
                            token = this.datastream.getToken();
                            console.log("myAge " + age);
                            console.log("myName " + name);
                            console.log("myAddress " + address);
                            this.editPatientService.editPatientProfile(name, age, address, token).subscribe(response => {
                                // this.datastream.setToken(response.token);
                                console.log("http request to Change patient Data: " + JSON.stringify(response));
                                // this.datastream.changePatientData(response);
                            }, err => {
                                console.log('HTTP Edit profile Error: ', err.error.message);
                            });
                        })
                    }
                ]
            });
            (yield alert).present();
        });
    }
    changeName() {
        this.patientName = "";
    }
    changeAge() {
        this.patientAge = null;
    }
    changeAddress() {
        this.patientAddress = "";
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
    { type: src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_3__["DatastreamingService"] },
    { type: _HttPService_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/home/profile/profile.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
        src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_3__["DatastreamingService"],
        _HttPService_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/home/tab/tab.component.scss":
/*!*********************************************!*\
  !*** ./src/app/home/tab/tab.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGFiL3RhYi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/tab/tab.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/tab/tab.component.ts ***!
  \*******************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavService/navigation.service */ "./src/app/home/NavService/navigation.service.ts");



let TabComponent = class TabComponent {
    constructor(navigation) {
        this.navigation = navigation;
    }
    ngOnInit() { }
    vitalClick() {
        this.navigation.navigateTo('home/vitals');
    }
    homeClick() {
        this.navigation.navigateTo('home');
    }
    dlistClick() {
        this.navigation.navigateTo('home/profile');
    }
    tlistClick() {
        this.navigation.navigateTo('home/patient');
        console.log("trainer list");
    }
};
TabComponent.ctorParameters = () => [
    { type: _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
];
TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/tab/tab.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab.component.scss */ "./src/app/home/tab/tab.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_NavService_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
], TabComponent);



/***/ }),

/***/ "./src/app/home/vitals/vitals.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/vitals/vitals.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  margin-bottom: -1%;\n}\n\n.background {\n  margin-right: 0px;\n  padding: 0px;\n  background: white;\n}\n\n@font-face {\n  font-family: \"Forte\";\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/src/assets/fonts/FORTE.ttf\");\n  src: url('FORTE.TTF');\n}\n\n.clicked {\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  margin-top: 10%;\n  border: blue solid 2px;\n}\n\n.center {\n  text-align: center;\n}\n\n.Right {\n  text-align: right;\n}\n\n.vital-holder {\n  width: 100%;\n  height: 100%;\n  background: white;\n  border-radius: 30px;\n  text-align: center;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.header {\n  width: 100%;\n  margin-top: -55%;\n  margin-left: 38%;\n  background: white;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);\n  font-family: \"Forte\";\n  font-size: 200%;\n  color: #0fdd8b;\n}\n\n.title {\n  margin-left: -10%;\n}\n\n.vital {\n  margin-left: -20%;\n}\n\n.Floating-icon {\n  -webkit-animation: flickr 0.7s ease-in-out 0.1s 1 alternate both;\n  animation: flickr 0.7s ease-in-out 0.1s 1 alternate both;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.main-card {\n  width: 100%;\n  height: 100%;\n  margin-top: -10%;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  background: white;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.vitals-from {\n  background: white;\n  width: 100%;\n  height: 100%;\n}\n\n.vital-row {\n  border-bottom: #5DBB47 solid 1px;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.mini-card {\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  margin-top: 10%;\n  border: whitesmoke solid 2px;\n}\n\n.icon {\n  width: 100%;\n  height: 100%;\n  margin: 5%;\n}\n\n.small-icon {\n  width: 60%;\n  height: 60%;\n  margin-top: 30%;\n}\n\n.small-icon-us {\n  width: 60%;\n  height: 60%;\n  margin-top: 80%;\n  margin-left: 50%;\n}\n\n.middle-text {\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.start-text {\n  text-align: start;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-size: 100%;\n}\n\n.user-name {\n  color: white;\n  font: 2.5em Open-sans;\n}\n\n.input {\n  margin-top: 10%;\n}\n\n@-webkit-keyframes flickr {\n  0% {\n    left: 0px;\n    top: 0px;\n  }\n  50% {\n    top: -5px;\n  }\n  100% {\n    top: 5px;\n  }\n}\n\n@keyframes flickr {\n  0% {\n    left: 0px;\n    top: 0px;\n  }\n  50% {\n    top: -5px;\n  }\n  100% {\n    top: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhYmliYS9HUC9HcmFkdWF0aW9uLVByb2plY3QtL1BhdGllbnQvc3JjL2FwcC9ob21lL3ZpdGFscy92aXRhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvdml0YWxzL3ZpdGFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FDREY7O0FESUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RBOztBREdBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBR0EsdUNBQUE7RUFDQSxxQkFBQTtBQ0ZBOztBRE1BO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0pBOztBRFNBO0VBRUEsa0JBQUE7QUNQQTs7QURVQTtFQUNBLGlCQUFBO0FDUEE7O0FEU0E7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FDTkE7O0FEUUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0xBOztBRE9BO0VBQ0EsaUJBQUE7QUNKQTs7QURNQTtFQUNBLGlCQUFBO0FDSEE7O0FEU0E7RUFFQSxnRUFBQTtFQUNBLHdEQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ1BBOztBRFVBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ1BBOztBRFNBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFlBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNUQTs7QURZQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNUQTs7QURZQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1RBOztBRFdBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUkY7O0FEV0E7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1JBOztBRFdBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1JBOztBRFdBO0VBQ0UsaUJBQUE7RUFDQSxxREFBQTtFQUNBLGVBQUE7QUNSRjs7QURVQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ1BBOztBRFNBO0VBQ0UsZUFBQTtBQ05GOztBRFFBO0VBQ0E7SUFBTSxTQUFBO0lBQVUsUUFBQTtFQ0hkO0VESUY7SUFBTyxTQUFBO0VDREw7RURFRjtJQUFPLFFBQUE7RUNDTDtBQUNGOztBRENBO0VBQ0E7SUFBTSxTQUFBO0lBQVUsUUFBQTtFQ0dkO0VERkY7SUFBTyxTQUFBO0VDS0w7RURKRjtJQUFPLFFBQUE7RUNPTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92aXRhbHMvdml0YWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1yb3d7XG4gIG1hcmdpbi1ib3R0b206IC0xJTtcbiAgXG59XG4uYmFja2dyb3VuZHtcbm1hcmdpbi1yaWdodDogMHB4O1xucGFkZGluZzogMHB4O1xuYmFja2dyb3VuZDogd2hpdGU7XG59XG5AZm9udC1mYWNlIHtcbmZvbnQtZmFtaWx5OiAnRm9ydGUnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuXG5zcmM6IHVybCgnL3NyYy9hc3NldHMvZm9udHMvRk9SVEUudHRmJyk7XG5zcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9GT1JURS5UVEYnKTsvL3BhdGggdG8gbXkgZm9udCBmaWxlXG5cbn1cblxuLmNsaWNrZWR7XG5wb3NpdGlvbjpyZWxhdGl2ZTtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcbnRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5tYXJnaW4tdG9wOiAxMCU7XG5ib3JkZXI6IGJsdWUgc29saWQgMnB4O1xufVxuXG5cblxuLmNlbnRlcntcblxudGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4uUmlnaHR7XG50ZXh0LWFsaWduOiByaWdodDsgXG59XG4udml0YWwtaG9sZGVye1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5iYWNrZ3JvdW5kOiB3aGl0ZTtcbmJvcmRlci1yYWRpdXM6IDMwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcbn1cbi5oZWFkZXJ7XG53aWR0aDogMTAwJTtcbm1hcmdpbi10b3A6IC01NSU7XG5tYXJnaW4tbGVmdDogMzglO1xuYmFja2dyb3VuZDogd2hpdGU7XG5ib3JkZXItcmFkaXVzOiAyMHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbmZvbnQtZmFtaWx5OiAnRm9ydGUnO1xuZm9udC1zaXplOiAyMDAlO1xuY29sb3I6ICMwZmRkOGI7XG59XG4udGl0bGV7XG5tYXJnaW4tbGVmdDotMTAlIDtcbn1cbi52aXRhbHtcbm1hcmdpbi1sZWZ0OiAtMjAlO1xuXG5cbn1cblxuXG4uRmxvYXRpbmctaWNvbntcblxuLXdlYmtpdC1hbmltYXRpb246IGZsaWNrciAwLjdzIGVhc2UtaW4tb3V0IDAuMXMgMSBhbHRlcm5hdGUgYm90aDtcbmFuaW1hdGlvbjogZmxpY2tyIDAuN3MgZWFzZS1pbi1vdXQgMC4xcyAxIGFsdGVybmF0ZSBib3RoO1xuYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5cbn1cbi5tYWluLWNhcmQge1xud2lkdGg6MTAwJTtcbmhlaWdodDoxMDAlO1xubWFyZ2luLXRvcDogLTEwJTtcbnRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5iYWNrZ3JvdW5kOndoaXRlO1xuZmxleC1ncm93IDogMTtcbn1cbi52aXRhbHMtZnJvbXtcbmJhY2tncm91bmQ6d2hpdGU7XG53aWR0aDoxMDAlO1xuaGVpZ2h0OjEwMCU7XG5cblxuXG5cbn1cbi52aXRhbC1yb3d7XG5ib3JkZXItYm90dG9tOiM1REJCNDcgc29saWQgMXB4O1xubWFyZ2luLXRvcDogMiU7XG5tYXJnaW4tYm90dG9tOiAyJTtcblxufVxuLm1pbmktY2FyZHtcbnBvc2l0aW9uOnJlbGF0aXZlO1xuYm9yZGVyLXJhZGl1czogMTBweDtcbmJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xudHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbm1hcmdpbi10b3A6IDEwJTtcbmJvcmRlcjogd2hpdGVzbW9rZSBzb2xpZCAycHg7XG5cbn1cbi5pY29ue1xud2lkdGg6MTAwJTtcbmhlaWdodDogMTAwJTtcbm1hcmdpbjogNSU7XG59XG4uc21hbGwtaWNvbntcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OjYwJTtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBcbn1cbi5zbWFsbC1pY29uLXVze1xud2lkdGg6IDYwJTtcbmhlaWdodDo2MCU7XG5tYXJnaW4tdG9wOiA4MCU7XG5tYXJnaW4tbGVmdDo1MCUgO1xuXG59XG4ubWlkZGxlLXRleHR7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbm1hcmdpbi10b3A6MiU7XG5tYXJnaW4tYm90dG9tOiAyJTtcblxufVxuLnN0YXJ0LXRleHR7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxMDAlXG59XG4udXNlci1uYW1le1xuY29sb3I6IHdoaXRlO1xuZm9udDogMi41ZW0gT3Blbi1zYW5zO1xufVxuLmlucHV0e1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpY2tyIHtcbjAlICAge2xlZnQ6MHB4OyB0b3A6MHB4O31cbjUwJSAgeyB0b3A6LTVweDt9XG4xMDAlIHsgdG9wOjVweDt9XG59XG5cbkBrZXlmcmFtZXMgZmxpY2tyIHtcbjAlICAge2xlZnQ6MHB4OyB0b3A6MHB4O31cbjUwJSAgeyB0b3A6LTVweDt9XG4xMDAlIHsgdG9wOjVweDt9XG59XG4iLCJpb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogLTElO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydGVcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZPUlRFLnR0ZlwiKTtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0ZPUlRFLlRURlwiKTtcbn1cbi5jbGlja2VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBib3JkZXI6IGJsdWUgc29saWQgMnB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uUmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnZpdGFsLWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC01NSU7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRlXCI7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgY29sb3I6ICMwZmRkOGI7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xufVxuXG4udml0YWwge1xuICBtYXJnaW4tbGVmdDogLTIwJTtcbn1cblxuLkZsb2F0aW5nLWljb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmxpY2tyIDAuN3MgZWFzZS1pbi1vdXQgMC4xcyAxIGFsdGVybmF0ZSBib3RoO1xuICBhbmltYXRpb246IGZsaWNrciAwLjdzIGVhc2UtaW4tb3V0IDAuMXMgMSBhbHRlcm5hdGUgYm90aDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5tYWluLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4udml0YWxzLWZyb20ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnZpdGFsLXJvdyB7XG4gIGJvcmRlci1ib3R0b206ICM1REJCNDcgc29saWQgMXB4O1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5taW5pLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJvcmRlcjogd2hpdGVzbW9rZSBzb2xpZCAycHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgbWFyZ2luLXRvcDogMzAlO1xufVxuXG4uc21hbGwtaWNvbi11cyB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjAlO1xuICBtYXJnaW4tdG9wOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5taWRkbGUtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4uc3RhcnQtdGV4dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbi51c2VyLW5hbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IDIuNWVtIE9wZW4tc2Fucztcbn1cblxuLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpY2tyIHtcbiAgMCUge1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgfVxuICA1MCUge1xuICAgIHRvcDogLTVweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDVweDtcbiAgfVxufVxuQGtleWZyYW1lcyBmbGlja3Ige1xuICAwJSB7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICB9XG4gIDUwJSB7XG4gICAgdG9wOiAtNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogNXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/vitals/vitals.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/vitals/vitals.component.ts ***!
  \*************************************************/
/*! exports provided: VitalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitalsComponent", function() { return VitalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _HttPService_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HttPService/http.service */ "./src/app/home/HttPService/http.service.ts");
/* harmony import */ var _DataModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataModels */ "./src/app/home/DataModels.ts");
/* harmony import */ var src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/datastream/datastreaming.service */ "./src/app/services/datastream/datastreaming.service.ts");
/* harmony import */ var _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NavService/navigation.service */ "./src/app/home/NavService/navigation.service.ts");






let VitalsComponent = class VitalsComponent {
    constructor(http, patientData, navigation) {
        this.http = http;
        this.patientData = patientData;
        this.navigation = navigation;
        this.vital = new _DataModels__WEBPACK_IMPORTED_MODULE_3__["UpVitals"];
        this.vitals = new _DataModels__WEBPACK_IMPORTED_MODULE_3__["Ivitals"];
        this.isDisabled = true;
        this.patientId = this.patientData.getPatientId();
        console.log("patientID", this.patientId);
    }
    ngOnInit() {
        console.log(this.vitals);
        this.http.GetVitals(this.patientId).subscribe((res) => {
            console.log("get Vitals ", res);
            this.vitals = res[0];
            console.log(this.vitals);
            this.vitalrow = [{
                    label: "Weight",
                    place_holder: "Add Weight",
                    isDisabled: true,
                    icon: "assets/Iconawesome-weight.png",
                    name: "weight",
                    input: this.vitals.weight
                },
                {
                    label: "Height",
                    place_holder: "Add Height",
                    isDisabled: true,
                    icon: "assets/Iconawesome-tape.png", name: "height",
                    input: this.vitals.height
                },
                {
                    label: "BMI",
                    place_holder: "Add BMI",
                    isDisabled: true,
                    icon: "assets/Iconawesome-dumbbell.png",
                    name: "BMI",
                    input: this.vitals.BMI
                },
                {
                    label: "Body Fats Ratio",
                    place_holder: "Body Fats Ratio",
                    isDisabled: true,
                    icon: "assets/Iconawesome-tape.png",
                    name: "body_fats_ratio",
                    input: this.vitals.body_fats_ratio
                },
                {
                    label: "Body Water Ratio",
                    place_holder: "Body Water Ratio",
                    isDisabled: true,
                    icon: "assets/Iconawesome-heartbeat.png",
                    name: "body_water_ratio",
                    input: this.vitals.body_water_ratio
                },
                {
                    label: "Stomach Area Fats",
                    place_holder: "Stomach Area Fats",
                    isDisabled: true,
                    icon: "assets/Iconawesome-heartbeat.png",
                    name: "stomic_area_fats",
                    input: this.vitals.stomic_area_fats
                },
                {
                    label: "Bone Density",
                    place_holder: "Bone Density",
                    isDisabled: true,
                    icon: "assets/Iconawesome-heartbeat.png",
                    name: "bone_desity",
                    input: this.vitals.bone_desity
                },
                {
                    label: "Muscle Density",
                    place_holder: "Muscle Density",
                    isDisabled: true,
                    icon: "assets/Iconawesome-heartbeat.png",
                    name: "muscle_desity",
                    input: this.vitals.muscle_desity
                }
            ];
        });
    }
    printvitals() {
        console.log(this.vitals);
    }
    submit() {
        console.log("Post Vitals");
        this.http.PostVitals(this.vitals, this.patientId).subscribe((res) => {
            console.log(res);
        });
    }
    Update(item) {
        item.isDisabled = false;
        console.log(this.vitals.weight);
    }
    Save(item, value) {
        console.log("Id", this.patientId);
        item.isDisabled = true;
        this.vital.vital_Name = item.name;
        this.vital.new_value = value;
        console.log("Vitals to update", this.vital);
        this.http.PutVital(this.vital, this.patientId).subscribe((res) => {
            console.log("res", res);
        });
    }
    backClick() {
        console.log("must navigate to patient list");
        this.navigation.navigateTo('home');
    }
};
VitalsComponent.ctorParameters = () => [
    { type: _HttPService_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_4__["DatastreamingService"] },
    { type: _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"] }
];
VitalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vitals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vitals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/vitals/vitals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vitals.component.scss */ "./src/app/home/vitals/vitals.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_HttPService_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], src_app_services_datastream_datastreaming_service__WEBPACK_IMPORTED_MODULE_4__["DatastreamingService"], _NavService_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]])
], VitalsComponent);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map