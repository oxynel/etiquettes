'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var Etiquettes = /** @class */ (function () {
    function Etiquettes(obj) {
        this.obj = obj;
        this.status = 'urlBeta';
        this.token = obj.token;
        this.values = {
            dpe: null,
            ges: null
        };
        this.elementsDom = {
            dpe: null,
            ges: null
        };
        this.isLoad = false;
    }
    Etiquettes.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var color, svg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        color = '#646e77';
                        svg = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 330.9 258.7\" enable-background=\"new 0 0 0 0\" xml:space=\"preserve\">\n            <g transform=\"translate(126,80)\">\n                <circle fill=\"".concat(color, "\" stroke=\"none\" cx=\"6\" cy=\"50\" r=\"6\">\n                <animate attributeName=\"opacity\" dur=\"1s\" values=\"0;1;0\" repeatCount=\"indefinite\" begin=\"0.1\"></animate>    \n                </circle>\n                <circle fill=\"").concat(color, "\" stroke=\"none\" cx=\"26\" cy=\"50\" r=\"6\">\n                <animate attributeName=\"opacity\" dur=\"1s\" values=\"0;1;0\" repeatCount=\"indefinite\" begin=\"0.2\"></animate>       \n                </circle>\n                <circle fill=\"").concat(color, "\" stroke=\"none\" cx=\"46\" cy=\"50\" r=\"6\">\n                <animate attributeName=\"opacity\" dur=\"1s\" values=\"0;1;0\" repeatCount=\"indefinite\" begin=\"0.3\"></animate>     \n                </circle>\n            </g>\n        </svg>");
                        return [4 /*yield*/, this.sleep(1000)];
                    case 1:
                        _a.sent();
                        if (!this.isLoad) {
                            this.elementsDom.dpe ? this.elementsDom.dpe.innerHTML = svg : null;
                            this.elementsDom.ges ? this.elementsDom.ges.innerHTML = svg : null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Etiquettes.prototype.start = function () {
        this.elementsDom.dpe = document.querySelector('[etiquette-dpe]');
        this.elementsDom.ges = document.querySelector('[etiquette-ges]');
        this.values.dpe = parseInt(document.querySelector('[value-dpe]')
            .getAttribute("value-dpe"));
        this.values.ges = parseInt(document.querySelector('[value-ges]')
            .getAttribute("value-ges"));
        this.requestApi();
    };
    Etiquettes.prototype.get = function (obj) {
        this.elementsDom.dpe = document.querySelector(obj.dpe);
        this.elementsDom.ges = document.querySelector(obj.ges);
        this.values.dpe = obj.valueDpe;
        this.values.ges = obj.valueGes;
        this.requestApi();
    };
    Etiquettes.prototype.makeUrl = function () {
        var url = {
            urlLocal: 'http://etiquette_dpe.test',
            urlBeta: 'https://beta.etiquettes.immo',
            urlProd: 'https://etiquettes.immo'
        };
        return "".concat(url[this.status], "/api/etiquette?value_dpe=").concat(this.values.dpe, "&value_ges=").concat(this.values.ges);
    };
    Etiquettes.prototype.makeDom = function (json) {
        this.isLoad = true;
        this.elementsDom.dpe ? this.elementsDom.dpe.innerHTML = json.svgdpe : null;
        this.elementsDom.ges ? this.elementsDom.ges.innerHTML = json.svgges : null;
    };
    Etiquettes.prototype.requestApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, etiquetteJson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.load();
                        return [4 /*yield*/, fetch(this.makeUrl(), {
                                method: 'get',
                                mode: 'cors',
                                credentials: 'same-origin',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + this.token
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        etiquetteJson = _a.sent();
                        this.makeDom(etiquetteJson);
                        return [2 /*return*/];
                }
            });
        });
    };
    Etiquettes.prototype.sleep = function (milliseconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
    };
    return Etiquettes;
}());
export default Etiquettes;
