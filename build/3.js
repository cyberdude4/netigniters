webpackJsonp([3],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(56);
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
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, settings, navp, zone, formBuilder, events) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.navp = navp;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.events = events;
        this.showPasswordText = false;
        this.connected = false;
        // map ID to actual bps
        this.baudlist = [
            { id: 1, speed: '2400' },
            { id: 3, speed: '9600' },
            { id: 4, speed: '19200' },
            { id: 5, speed: '38400' },
            { id: 6, speed: '57600' },
            { id: 8, speed: '115200' }
        ];
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        console.log("settings page " + JSON.stringify(settings));
    }
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        console.log("buildForm");
        this.settingsForm = this.formBuilder.group({
            baudid: [this.uartsettings.baudid],
            password: [this.uartsettings.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            group: [this.uartsettings.group],
        });
        // Watch the form for changes, and save them immediately
        this.settingsForm.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.settingsForm.value);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        // Build an empty form for the template to render
        this.settingsForm = this.formBuilder.group({});
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("ionViewWillEnter");
        // Build an empty form for the template to render
        this.settingsForm = this.formBuilder.group({});
        //this.page = this.navParams.get('page') || this.page;
        //this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.uartsettings = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    SettingsPage.prototype.showPassword = function (input) {
        var _this = this;
        this.zone.run(function () {
            _this.showPasswordText = _this.showPasswordText === true ? false : true;
        });
    };
    SettingsPage.prototype.save = function () {
        //console.log( "form "+ JSON.stringify( this.settingsForm.value ));
        this.uartsettings.baudid = +this.settingsForm.value.baudid;
        // make it into a number with the plus sign
        this.uartsettings.password = this.settingsForm.value.password;
        // keep as string
        this.uartsettings.group = this.settingsForm.value.group;
        //saveSettings( this.storage, this.uartsettings );
        // move to the main page 1
        this.navCtrl.parent.select(0, {
            uartsettings: this.uartsettings
        });
        // send event to the terminal page so it can change the physical settings
        this.events.publish("settings:changed", this.uartsettings);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Tabs */])
    ], SettingsPage.prototype, "tabRef", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/vishal/Downloads/SPP-over-GATT-master/src/pages/settings/settings.html"*/'\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Serial Port Settings\n        </ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list no-lines>\n        <form [formGroup]="settingsForm" *ngIf="settingsReady">\n\n            <ion-item>\n                <ion-label floating>Baud Rate</ion-label>\n                <ion-select formControlName="baudid" interface="popover">\n                    <ion-option *ngFor="let item of baudlist" value="{{item.id}}" [selected]="(baudid == 3)">\n                        {{item.speed}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input *ngIf="!showPasswordText" formControlName="password" type="password"></ion-input>\n                <ion-input *ngIf="showPasswordText" formControlName="password" type="text"></ion-input>\n                <button ion-button clear item-right icon-only (click)="showPassword(input)">\n                    <ion-icon name="eye" is-active="false"></ion-icon>\n                </button>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Group membership in the mesh: {{meshid}}</ion-label>\n                <ion-input formControlName="group" type="text" maxlength="4" pattern="[a-fA-F\d]+"></ion-input>\n            </ion-item>\n        </form>\n\n    </ion-list>\n\n    <button ion-button full color="primary" (click)="save()" *ngIf="!connected">Save Settings</button>\n    <button ion-button full color="danger" (click)="save()" *ngIf="connected">Save Settings</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/Downloads/SPP-over-GATT-master/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=3.js.map