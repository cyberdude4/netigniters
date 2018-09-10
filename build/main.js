webpackJsonp([5],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UART_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UART_SERVICE_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UART_TXRX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UART_TXRX_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UART_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UART_PASSWORD_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UART_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UART_CONFIG_STR; });
/* unused harmony export readGroupCmd */
/* unused harmony export setBaudCmd */
/* unused harmony export setPasswordCmd */
/* unused harmony export setGroupCmd */
/**
 * Created by juergen on 9/27/17.
 */
var UART_SERVICE = 0x1815;
var UART_SERVICE_STR = "1815";
var UART_TXRX = 0x2a5e;
var UART_TXRX_STR = "2A5E";
var UART_PASSWORD = 0xffff;
var UART_PASSWORD_STR = "ffff";
var UART_CONFIG = 0x2a5f;
var UART_CONFIG_STR = "2a5f";
var readGroupCmd = new Uint8Array([0xef, 0x01, 0x77]);
// set baudrate command
function setBaudCmd(baud) {
    return new Uint8Array([0x56, baud, 0, 0xf0, 0xaa]);
}
// set password command
function setPasswordCmd(pwd) {
    return new Uint8Array([0x56, 0, 0, 0, pwd, 0x0f, 0xaa]);
}
// set group command
function setGroupCmd(grp) {
    return new Uint8Array([0x56, 0, 0, 0, grp, 0x0f, 0xaa]);
}
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		367,
		4
	],
	"../pages/device/device.module": [
		368,
		1
	],
	"../pages/settings/settings.module": [
		369,
		3
	],
	"../pages/tabs/tabs.module": [
		370,
		2
	],
	"../pages/terminal/terminal.module": [
		371,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_ble__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function defaultSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    console.log("default settings");
    return new __WEBPACK_IMPORTED_MODULE_7__providers_providers__["b" /* Settings */](storage, {
        baudid: 3,
        password: "1234",
        group: 0,
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device/device.module#DevicePageModule', name: 'DevicePage', segment: 'device', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminal/terminal.module#TerminalPageModule', name: 'TerminalPage', segment: 'terminal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // defaults to indexdb driver
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__providers_providers__["b" /* Settings */], useFactory: defaultSettings, deps: [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_providers__["a" /* Ble */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ble; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_expand__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_expand___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_expand__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_first__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_let__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_publishReplay__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_publishReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_publishReplay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_reduce__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_publish__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_publish___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_publish__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_scan__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_finally__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_delay__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_switchMap__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_take__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_takeWhile__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_takeUntil__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_share__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_observable_concat__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_observable_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_rxjs_add_observable_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_observable_defer__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_rxjs_add_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_observable_empty__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_observable_from__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_add_observable_fromEvent__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_rxjs_add_observable_merge__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_rxjs_add_observable_of__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_rxjs_add_observable_timer__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_rxjs_BehaviorSubject__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_text_encoding__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_text_encoding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_ble__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__consts__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_ble_consts__ = __webpack_require__(115);
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

// service and characteristics numbers

// service and characteristics numbers (native)

/*
  Provider for Web Bluetooth
 */
var Ble = /** @class */ (function () {
    function Ble(platform, ble) {
        this.platform = platform;
        this.ble = ble;
        this.writableSubject = new __WEBPACK_IMPORTED_MODULE_30_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.isCordova = this.platform.is("cordova");
        if (!this.isCordova) {
            console.log('Hello Web BLE Provider');
            this.writable$ = this.writableSubject.asObservable();
        }
    }
    // connect gets call back functions for READ and NOTIFY chars used
    Ble.prototype.connect = function (gotConfig, getUartDataNote) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var device, _a, uartService, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, navigator.bluetooth.requestDevice({
                            filters: [
                                { services: [__WEBPACK_IMPORTED_MODULE_33__consts__["e" /* UART_SERVICE */]] },
                                { namePrefix: "AIR" },
                            ],
                            optionalServices: ["battery_service"],
                        })];
                    case 1:
                        device = _e.sent();
                        _a = this;
                        return [4 /*yield*/, device.gatt.connect()];
                    case 2:
                        _a.gatt = _e.sent();
                        this.deviceName = this.gatt.device.name;
                        console.log("connected to " + this.deviceName);
                        return [4 /*yield*/, this.gatt.getPrimaryService(__WEBPACK_IMPORTED_MODULE_33__consts__["e" /* UART_SERVICE */])];
                    case 3:
                        uartService = _e.sent();
                        // Password, write only
                        _b = this;
                        return [4 /*yield*/, uartService.getCharacteristic(__WEBPACK_IMPORTED_MODULE_33__consts__["c" /* UART_PASSWORD */])];
                    case 4:
                        // Password, write only
                        _b.passwordChar = _e.sent();
                        // config, read and write
                        _c = this;
                        return [4 /*yield*/, uartService.getCharacteristic(__WEBPACK_IMPORTED_MODULE_33__consts__["a" /* UART_CONFIG */])];
                    case 5:
                        // config, read and write
                        _c.configChar = _e.sent();
                        // register an event handler for config reads
                        this.configChar.addEventListener('characteristicvaluechanged', gotConfig);
                        console.log("got all uart chars");
                        // observable
                        //this.uartData = (await observableCharacteristic( this.uartChar ))
                        //    .map( parseUart );
                        // UART packets write and notify
                        _d = this;
                        return [4 /*yield*/, uartService.getCharacteristic(__WEBPACK_IMPORTED_MODULE_33__consts__["g" /* UART_TXRX */])];
                    case 6:
                        // observable
                        //this.uartData = (await observableCharacteristic( this.uartChar ))
                        //    .map( parseUart );
                        // UART packets write and notify
                        _d.uartChar = _e.sent();
                        // register notify events and turn into observable
                        // implement operator doOnSubscribe on the event observable
                        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].prototype.doOnSubscribe = function (onSubscribe) {
                            var source = this;
                            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].defer(function () {
                                onSubscribe();
                                return source;
                            });
                        };
                        // return the Observable for the notify char, with startNotify on first subscribe
                        getUartDataNote(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.uartChar, 'characteristicvaluechanged')
                            .doOnSubscribe(function () {
                            console.log('starting note');
                            _this.uartChar.startNotifications();
                        })
                            .map(function (value) { return String.fromCharCode.apply(null, new Uint8Array(_this.uartChar.value.buffer)); })
                            .takeUntil(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.gatt.device, 'gattserverdisconnected'))
                            .finally(function () {
                            console.log('stream disconnected ');
                            // not necessary: return this.uartChar.stopNotifications()
                        })
                            .share());
                        /*
                         const chars = this.uartData.concatMap(chunk => chunk.split(''));
                         this.lines$ = chars.scan(( acc, curr ) => acc[acc.length - 1] === '\n' ? curr : acc + curr)
                         .filter(item => item.indexOf('\n') >= 0);
                         console.log( 'got '+this.lines$ )
                         */
                        // now allow write to UART
                        return [4 /*yield*/, setTimeout(function () { return _this.writableSubject.next(true); }, 0)];
                    case 7:
                        /*
                         const chars = this.uartData.concatMap(chunk => chunk.split(''));
                         this.lines$ = chars.scan(( acc, curr ) => acc[acc.length - 1] === '\n' ? curr : acc + curr)
                         .filter(item => item.indexOf('\n') >= 0);
                         console.log( 'got '+this.lines$ )
                         */
                        // now allow write to UART
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Ble.prototype.disconnect = function () {
        console.log("calling disconnect on gatt");
        try {
            this.gatt.disconnect();
        }
        catch (e) { }
    };
    Ble.prototype.disconnectNative = function (peripheral) {
        try {
            this.ble.disconnect(peripheral);
        }
        catch (e) { }
    };
    Ble.prototype.name = function () {
        return this.deviceName;
    };
    /* unused functions

     private getSupportedProperties( characteristic ) {
        let supportedProperties = [];
        for (const p in characteristic.properties) {
            if (characteristic.properties[p] === true) {
                supportedProperties.push(p.toUpperCase());
            }
        }
        return '[' + supportedProperties.join(', ') + ']';
     }

     // another way to do that:
     this.sensData = (await observableCharacteristic( SENSOR ))
         .map( parseSensor );

     async observableCharacteristic( char: BluetoothRemoteGATTCharacteristic ) {
        await char.startNotifications();
        const disconnected = Observable.fromEvent( char.service!.device, 'gattserverdisconnected');
        return Observable.fromEvent( char, 'characteristicvaluechanged' )
            .takeUntil( disconnected )
            .map((event: Event) => ( event.target as BluetoothRemoteGATTCharacteristic ).value as DataView );
     }

     */
    /** characteristic write functions **/
    // only for Web Bluetooth, see device.ts for native
    Ble.prototype.password = function (pw) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("writing pwd " + pw);
                        return [4 /*yield*/, this.passwordChar.writeValue(new __WEBPACK_IMPORTED_MODULE_31_text_encoding__["TextEncoder"]('utf-8').encode("" + pw))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Ble.prototype.writeConfigChar = function (raw, peripheral) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(peripheral !== undefined)) return [3 /*break*/, 2];
                        // Native BLE
                        return [4 /*yield*/, this.ble.write(peripheral.id, __WEBPACK_IMPORTED_MODULE_34__providers_ble_consts__["f" /* UART_SERVICE_STR */], __WEBPACK_IMPORTED_MODULE_34__providers_ble_consts__["b" /* UART_CONFIG_STR */], raw.buffer)];
                    case 1:
                        // Native BLE
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: 
                    // Web Bluetooth
                    return [4 /*yield*/, this.configChar.writeValue(raw)];
                    case 3:
                        // Web Bluetooth
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log("setconfig failed " + e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Ble.prototype.setBaudConfig = function (baudid, peripheral) {
        return __awaiter(this, void 0, void 0, function () {
            var raw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        raw = new Uint8Array(2);
                        raw[0] = 0x01; // baud command
                        raw[1] = +baudid; // convert to number
                        console.log("peripheral=" + JSON.stringify(peripheral));
                        return [4 /*yield*/, this.writeConfigChar(raw, peripheral)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Ble.prototype.setConfig = function (group, peripheral) {
        return __awaiter(this, void 0, void 0, function () {
            var raw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        raw = new Uint8Array(3);
                        raw[0] = 32; // group command
                        raw[1] = group & 0xFF; // lower bytes
                        raw[2] = (group >> 8); // upper byte
                        return [4 /*yield*/, this.writeConfigChar(raw, peripheral)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Ble.prototype.newPassword = function (pw, peripheral) {
        return __awaiter(this, void 0, void 0, function () {
            var length, pwdata, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        length = pw.length;
                        pwdata = new Uint8Array(length + 1);
                        pwdata[0] = length;
                        for (i = 0; i < length; i++) {
                            pwdata[i + 1] = pw.charCodeAt(i);
                        }
                        return [4 /*yield*/, this.writeConfigChar(pwdata, peripheral)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // write to char in chunks as well as step by step
    // using native Bluetooth when peripheral as parameter isn't there
    Ble.prototype.sendText = function (text, peripheral) {
        var _this = this;
        //console.log("sending "+text);
        this.writableSubject.next(true);
        var bytes = text.split('').map(function (c) { return c.charCodeAt(0); });
        var chunks = [];
        while (bytes.length > 0) {
            chunks.push(new Uint8Array(bytes.splice(0, 20)));
        }
        var result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].zip(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(chunks), this.writableSubject.filter(function (value) { return value; }))
            .mergeMap(function (_a) {
            var chunk = _a[0], writeable = _a[1];
            //console.log("writing: "+ chunk);
            _this.writableSubject.next(false);
            if (peripheral !== undefined) {
                // Native BLE this.ble.writeWithoutResponse is a promise
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(_this.ble.writeWithoutResponse(peripheral.id, __WEBPACK_IMPORTED_MODULE_34__providers_ble_consts__["f" /* UART_SERVICE_STR */], __WEBPACK_IMPORTED_MODULE_34__providers_ble_consts__["h" /* UART_TXRX_STR */], chunk.buffer));
            }
            else {
                // Web Bluetooth
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(_this.uartChar.writeValue(chunk));
            }
        })
            .map(function () { return setTimeout(function () { return _this.writableSubject.next(true); }, 10); })
            .publish();
        // connect to the Observable and get the result
        result.connect();
        return result;
    };
    Ble = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_ble__["a" /* BLE */]])
    ], Ble);
    return Ble;
}());

//# sourceMappingURL=ble.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(182);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_sppgatt';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, settings, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // must be a string
        this.rootPage = 'TabsPage';
    }
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (_this.platform.is("cordova")) {
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            }
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/vishal/Downloads/SPP-over-GATT-master/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/vishal/Downloads/SPP-over-GATT-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ble_ble__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ble_ble__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/**
 * Created by juergen on 9/26/17.
 */



//# sourceMappingURL=providers.js.map

/***/ })

},[233]);
//# sourceMappingURL=main.js.map