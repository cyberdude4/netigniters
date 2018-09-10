webpackJsonp([1],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageModule", function() { return DevicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { TerminalPage } from '../terminal/terminal';
var DevicePageModule = /** @class */ (function () {
    function DevicePageModule() {
    }
    DevicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__device__["a" /* DevicePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__device__["a" /* DevicePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__device__["a" /* DevicePage */],
            ],
        })
    ], DevicePageModule);
    return DevicePageModule;
}());

//# sourceMappingURL=device.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_publish__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_publish___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_publish__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromPromise__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_zip__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_share__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// native Bluetooth











// service and characteristics numbers (native)

var DevicePage = /** @class */ (function () {
    function DevicePage(ble, zone, navCtrl, alertCtrl, settings) {
        this.ble = ble;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.isScanning = false;
        // unfiltered list of devices
        this.devices = [];
        // filtered and sorted list of devices
        this.peripherals = [];
        // the connected peripheral
        this.peripheral = {};
        this.writableSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        console.log("device page");
        this.writable$ = this.writableSubject.asObservable();
        // bind the this-context in the constructor
        // allowing external calls from
        this.sendText = this.sendText.bind(this);
    }
    DevicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevicePage');
    };
    ////////////////////////////// N A T I V E    B L U E T O O T H    F U N C T I O N S
    // button press, start scanning
    DevicePage.prototype.nativeScan = function () {
        var _this = this;
        console.log("looking for services " + __WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__["f" /* UART_SERVICE_STR */]);
        this.scanId = new Date();
        this.devices.length = 0;
        this.isScanning = true;
        // native BLE works with strings, in stead of numbers
        // MED_SERVICE_UUID = "55feb600-0030-11e7-93ae-92361f002671";
        // var service = MED_SERVICE_UUID.replace(/-/g, ''); // find all '-' and change to ''
        // services:[service]
        // also string "1815" works
        this.ble.startScanWithOptions([__WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__["f" /* UART_SERVICE_STR */]], { reportDuplicates: true })
            .subscribe(function (device) { return _this.deviceDetected(device); }, function (error) { return _this.scanError(error); }, function () { return console.log("stopped scanning"); });
        // stop after 10 seconds
        setTimeout(function () { return _this.nativeStopScan(); }, 10000);
    };
    DevicePage.prototype.nativeStopScan = function () {
        var _this = this;
        this.ble.stopScan().then(function () {
            _this.isScanning = false;
        });
        this.removeAbsentDevices();
    };
    DevicePage.prototype.removeAbsentDevices = function () {
        var _this = this;
        this.peripherals.filter(function (d) { return d.scanId !== _this.scanId; })
            .map(function (d) { return _this.removeAbsentDevice(d); });
        this.peripherals = this.peripherals.filter(function (d) { return d.scanId === _this.scanId; });
    };
    DevicePage.prototype.removeAbsentDevice = function (device) {
        console.log("removed " + JSON.stringify(device));
    };
    // permission maybe
    DevicePage.prototype.scanError = function (error) {
        this.setStatus('Error ' + error);
        var alert = this.alertCtrl.create({
            title: 'Scanning: ' + error,
            buttons: ["OK"]
        });
        alert.present();
    };
    DevicePage.prototype.deviceDetected = function (device) {
        if (device.name !== undefined) {
            console.log("detected " + device.name);
            if (this.deviceAlreadySeen(device)) {
                // add te.deviceAlreadySeen( device )) {
                // add to filtered list
                console.log("filtered " + JSON.stringify(device, null, 2));
                this.updateExistingDevice(device);
            }
            else {
                // just add to list
                console.log("added " + JSON.stringify(device, null, 2));
                this.devices.push(device);
            }
        }
    };
    DevicePage.prototype.deviceAlreadySeen = function (device) {
        var d = this.devices.find(function (d) { return d.name === device.name; });
        return d !== undefined;
    };
    DevicePage.prototype.updateExistingDevice = function (newDevice) {
        var _this = this;
        var deviceIndex = -1;
        // add to filtered list if not there yet
        if (this.peripherals.find(function (d) { return d.name === newDevice.name; }) === undefined) {
            // push returns length
            deviceIndex = this.peripherals.push(newDevice) - 1;
        }
        else {
            // get index and update the details
            deviceIndex = this.peripherals.findIndex(function (d) { return d.id === newDevice.id; });
            var oldDevice = this.devices[deviceIndex];
            // overwrite with new device information
            newDevice.movement = this.compareRSSI(newDevice, oldDevice);
            this.peripherals[deviceIndex] = newDevice;
        }
        // sort list by RSSI and keep display updated
        this.zone.run(function () {
            _this.peripherals.sort(function (a, b) {
                return _this.compareRSSI(a, b) ? 0 : 1;
            });
        });
    };
    DevicePage.prototype.compareRSSI = function (oldDevice, newDevice) {
        var oldRssi = this.getRssiAsAbsInt(oldDevice);
        var newRssi = this.getRssiAsAbsInt(newDevice);
        return oldRssi < newRssi;
    };
    DevicePage.prototype.getRssiAsAbsInt = function (device) {
        return Math.abs(parseInt(device.rssi));
    };
    // redirect to terminal page
    DevicePage.prototype.redirectToTerminalPage = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.nativeStopScan();
                // connect to the device
                this.setStatus('Connecting to ' + device.name || device.id);
                return [2 /*return*/, this.ble.connect(device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); })];
            });
        });
    };
    DevicePage.prototype.onConnected = function (peripheral) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _pwd;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _pwd = "";
                        this.zone.run(function () {
                            _this.setStatus("Password");
                            _this.peripheral = peripheral;
                        });
                        // send password
                        return [4 /*yield*/, this.settings.getValue('password').then(function (data) { return _pwd = data; })];
                    case 1:
                        // send password
                        _a.sent();
                        return [4 /*yield*/, this.password(_pwd)];
                    case 2:
                        _a.sent();
                        // now allow write to UART
                        setTimeout(function () { return _this.writableSubject.next(true); }, 0);
                        //await this.sendText( this.peripheral.id, "\0");
                        //await this.sendText( this.peripheral.id, "hallo from ios\n");
                        //await this.sendText( this.peripheral.id, "second string\n");
                        // start notifications
                        this.peripheral.data = this.ble.startNotification(this.peripheral.id, __WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__["f" /* UART_SERVICE_STR */], __WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__["h" /* UART_TXRX_STR */])
                            .map(function (buffer) { return String.fromCharCode.apply(null, new Uint8Array(buffer)); })
                            .share();
                        console.log("notify config");
                        // not subscribed yet
                        //await this.sendText( this.peripheral.id, "third text\n");
                        console.log("goto TermPage " + peripheral.name);
                        // move to the terminal page, if all is authorized
                        this.navCtrl.push('TerminalPage', {
                            peripheral: this.peripheral
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DevicePage.prototype.encodeCommand = function (cmd) {
        var encoded = new __WEBPACK_IMPORTED_MODULE_2_text_encoding__["TextEncoder"]('utf-8').encode("" + cmd);
        //encoded[0] = encoded.length - 1;
        return encoded;
    };
    DevicePage.prototype.password = function (pw) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("writing passwd " + pw);
                return [2 /*return*/, this.ble.write(this.peripheral.id, __WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__["f" /* UART_SERVICE_STR */], __WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__["d" /* UART_PASSWORD_STR */], this.encodeCommand(pw).buffer).then(function () { return _this.setStatus("password written"); }, function (e) { return _this.setStatus("password Error"); })];
            });
        });
    };
    DevicePage.prototype.sendText = function (text) {
        var _this = this;
        console.log("native send " + text);
        var bytes = text.split('').map(function (c) { return c.charCodeAt(0); });
        var chunks = [];
        while (bytes.length > 0) {
            chunks.push(new Uint8Array(bytes.splice(0, 20)));
        }
        var result = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].zip(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].from(chunks), this.writableSubject.filter(function (value) { return value; }))
            .mergeMap(function (_a) {
            var chunk = _a[0], writeable = _a[1];
            //console.log("writing: " + chunk);
            _this.writableSubject.next(false);
            // this.ble.writeWithoutResponse is a promise
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(_this.ble.writeWithoutResponse(_this.peripheral.id, __WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__["f" /* UART_SERVICE_STR */], __WEBPACK_IMPORTED_MODULE_15__providers_ble_consts__["h" /* UART_TXRX_STR */], chunk.buffer));
        })
            .map(function () { return setTimeout(function () { return _this.writableSubject.next(true); }, 10); })
            .publish();
        // connect to the Observable and get the result
        result.connect();
        return result;
    };
    DevicePage.prototype.onDeviceDisconnected = function (peripheral) {
        var alert = this.alertCtrl.create({
            title: "The peripheral disconnected",
            buttons: ["OK"]
        });
        alert.present();
        this.navCtrl.push('DevicePage');
    };
    // status message on footer
    DevicePage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.zone.run(function () {
            _this.statusMessage = message;
        });
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"/home/vishal/Downloads/SPP-over-GATT-master/src/pages/device/device.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Devices</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-left (click)="nativeScan()" *ngIf="!isScanning">\n        <ion-icon name="bluetooth"></ion-icon>\n        Scan\n      </button>\n      <button ion-button icon-left (click)="nativeScan()" *ngIf="isScanning">\n        <ion-spinner></ion-spinner>\n        Stop\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>BLE Peripherals</ion-list-header>\n    <ion-item-sliding *ngFor="let device of devices" #slidingItem>\n\n      <button ion-item button-left (click)="redirectToTerminalPage( device )">\n        <ion-icon name="appname-db9"></ion-icon>\n        {{device.name || device.id}} ({{device.rssi}}) dBm\n      </button>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/vishal/Downloads/SPP-over-GATT-master/src/pages/device/device.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Settings */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var fromPromise_1 = __webpack_require__(224);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var zip_1 = __webpack_require__(377);
Observable_1.Observable.zip = zip_1.zip;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zip_1 = __webpack_require__(378);
exports.zip = zip_1.zipStatic;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__(57);
var isArray_1 = __webpack_require__(42);
var Subscriber_1 = __webpack_require__(10);
var OuterSubscriber_1 = __webpack_require__(31);
var subscribeToResult_1 = __webpack_require__(30);
var iterator_1 = __webpack_require__(58);
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function zipOperatorFunction(source) {
        return source.lift.call(zipStatic.apply(void 0, [source].concat(observables)));
    };
}
exports.zip = zip;
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
 * of its input Observables.
 *
 * If the latest parameter is a function, this function is used to compute the created value from the input values.
 * Otherwise, an array of the input values is returned.
 *
 * @example <caption>Combine age and name from different sources</caption>
 *
 * let age$ = Observable.of<number>(27, 25, 29);
 * let name$ = Observable.of<string>('Foo', 'Bar', 'Beer');
 * let isDev$ = Observable.of<boolean>(true, true, false);
 *
 * Observable
 *     .zip(age$,
 *          name$,
 *          isDev$,
 *          (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
 *     .subscribe(x => console.log(x));
 *
 * // outputs
 * // { age: 27, name: 'Foo', isDev: true }
 * // { age: 25, name: 'Bar', isDev: true }
 * // { age: 29, name: 'Beer', isDev: false }
 *
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
        observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
}
exports.zipStatic = zipStatic;
var ZipOperator = (function () {
    function ZipOperator(project) {
        this.project = project;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
        if (values === void 0) { values = Object.create(null); }
        _super.call(this, destination);
        this.iterators = [];
        this.active = 0;
        this.project = (typeof project === 'function') ? project : null;
        this.values = values;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                this.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--; // not an observable
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        // abort if not all of them have values
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            // check to see if it's completed now that you've gotten
            // the next value.
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.project) {
            this._tryProject(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        _super.call(this, destination);
        this.parent = parent;
        this.observable = observable;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
    //    this is legit because `next()` will never be called by a subscription in this case.
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ })

});
//# sourceMappingURL=1.js.map