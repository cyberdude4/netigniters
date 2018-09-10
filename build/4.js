webpackJsonp([4],{

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.isIos = this.platform.is("ios");
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/vishal/Downloads/SPP-over-GATT-master/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="about cards-bg social-cards">\n\n  <h3>Serial GATT Terminal</h3>\n  <p *ngIf="!IsIos">Hybrid software for Chrome browser, Android and iOS, that allows you to connect to and communicate with the\n    <a href="https://goo.gl/RAjU5X" target="_blank">AIRcable MiniMesh</a>.\n  </p>\n\n  <p *ngIf="IsIos">Utility that connects via BLE and communicates serial data with the\n    <a href="https://goo.gl/RAjU5X" target="_blank">AIRcable MiniMesh</a>.\n  </p>\n\n  <ion-list-header>Built by Wireless Cables Inc.</ion-list-header>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/JuergenPortrait2014.png">\n      </ion-avatar>\n      <h2>AIRcable MiniMesh</h2>\n    </ion-item>\n\n    <img src="assets/mini_420.png">\n\n    <ion-card-content>\n\n      Serial-port to Bluetooth BLE:\n      <ul>\n        <li>\n          SPP-over-GATT: serial port profile over GATT, secured with strong encryption and password.\n        </li>\n        <li>\n          Bluetooth Mesh, when not connected. Transmits RS232 data with encrypted mesh packets.\n        </li>\n        <li>\n          No more range problems, mesh packets are relayed by other mesh nodes.\n        </li>\n      </ul>\n\n\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'appname-wave\'></ion-icon>\n          More Information\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'logo-github\'></ion-icon>\n          <a href="https://github.com/aircable/SPP-over-GATT" target="_blank">Source Code</a>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          September 2017\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/Downloads/SPP-over-GATT-master/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=4.js.map