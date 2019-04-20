"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("../../contracts/card");
var index_1 = require("../../enums/index");
var library_1 = require("../../contracts/library");
var score_1 = require("../../contracts/score");
var dormitory_1 = require("../../contracts/dormitory");
Page({
    data: {
        status: {
            card: index_1.EnumApiStatus.fetching,
            library: index_1.EnumApiStatus.fetching,
            score: index_1.EnumApiStatus.fetching,
            dormitoryHealth: index_1.EnumApiStatus.fetching,
            dormitoryEnergy: index_1.EnumApiStatus.fetching,
        },
        balance: undefined,
        borrowNum: undefined,
        score: undefined,
        dormitoryHealth: undefined,
        dormitoryHealthWeek: undefined,
        dormitoryEnergy: undefined,
    },
    onLoad: function (_query) {
        this.fetchAll();
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        return [4, this.fetchAll()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        wx.stopPullDownRefresh({});
                        return [7];
                    case 3: return [2];
                }
            });
        });
    },
    onReachBottom: function () {
    },
    fetchCard: function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.card': index_1.EnumApiStatus.fetching,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, card_1.contractCardBalance(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        console.log(ret);
                        if (!ret.error) {
                            this.setData({
                                balance: ret.data.balance,
                                'status.card': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.setData({
                            'status.card': index_1.EnumApiStatus.fail,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    fetchLibrary: function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.library': index_1.EnumApiStatus.fetching,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, library_1.contractLibraryBorrow(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        console.log(ret);
                        if (!ret.error) {
                            this.setData({
                                borrowNum: ret.data.info.length,
                                'status.library': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.setData({
                            'status.library': index_1.EnumApiStatus.fail,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    fetchScore: function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.score': index_1.EnumApiStatus.fetching,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, score_1.contractScore(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        console.log(ret);
                        if (!ret.error) {
                            this.setData({
                                score: ret.data.grade,
                                'status.score': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 4];
                    case 3:
                        e_3 = _a.sent();
                        this.setData({
                            'status.score': index_1.EnumApiStatus.fail,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    fetchDormitoryHealth: function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.dormitoryHealth': index_1.EnumApiStatus.fetching,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, dormitory_1.contractDormitoryHealth(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        console.log(ret);
                        if (!ret.error) {
                            this.setData({
                                dormitoryHealth: ret.data[0] ? ret.data[0].score : null,
                                dormitoryHealthWeek: ret.data[0] ? ret.data[0].week : null,
                                'status.dormitoryHealth': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 4];
                    case 3:
                        e_4 = _a.sent();
                        this.setData({
                            'status.dormitoryHealth': index_1.EnumApiStatus.fail,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    fetchDormitoryEnergy: function () {
        return __awaiter(this, void 0, void 0, function () {
            var infoRet, floor, room, energyRet, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.dormitoryEnergy': index_1.EnumApiStatus.fetching,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4, dormitory_1.contractDormitoryInfo(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        infoRet = _a.sent();
                        console.log(infoRet);
                        if (!!infoRet.error) return [3, 4];
                        floor = infoRet.data.rawFloor;
                        room = (/\d+$/.exec(infoRet.data.room) || [])[0];
                        return [4, dormitory_1.contractDormitoryEnergy({ floor: floor, room: room }, {
                                autoError: 'none',
                            })];
                    case 3:
                        energyRet = _a.sent();
                        console.log(energyRet);
                        if (!energyRet.error) {
                            this.setData({
                                dormitoryEnergy: energyRet.data.energy,
                                'status.dormitoryEnergy': index_1.EnumApiStatus.success,
                            });
                        }
                        _a.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        e_5 = _a.sent();
                        this.setData({
                            'status.dormitoryEnergy': index_1.EnumApiStatus.fail,
                        });
                        return [3, 6];
                    case 6: return [2];
                }
            });
        });
    },
    fetchAll: function () {
        console.log('fetchAll');
        return Promise.all([
            this.fetchCard(),
            this.fetchLibrary(),
            this.fetchScore(),
            this.fetchDormitoryHealth(),
            this.fetchDormitoryEnergy(),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJEO0FBQzNELDJDQUFrRDtBQUNsRCxtREFBZ0U7QUFDaEUsK0NBQXNEO0FBQ3RELHVEQUFvSDtBQUVwSCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQzVCLE9BQU8sRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDL0IsS0FBSyxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUM3QixlQUFlLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQ3ZDLGVBQWUsRUFBRSxxQkFBYSxDQUFDLFFBQVE7U0FDeEM7UUFDRCxPQUFPLEVBQUUsU0FBUztRQUNsQixTQUFTLEVBQUUsU0FBUztRQUNwQixLQUFLLEVBQUUsU0FBUztRQUNoQixlQUFlLEVBQUUsU0FBUztRQUMxQixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLGVBQWUsRUFBRSxTQUFTO0tBQzNCO0lBS0QsTUFBTSxFQUFOLFVBQU8sTUFBc0M7UUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtLLGlCQUFpQjs7Ozs7O3dCQUVuQixXQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7Ozt3QkFFdEIsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7S0FFOUI7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUVLLFNBQVMsRUFBZjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osYUFBYSxFQUFFLHFC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QyxTQUFTLENBQUMsS0FBSyxFQUFFOzRCQUNwQixJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLGVBQWUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU07Z0NBQ3RDLHdCQUF3QixFQUFFLHFCQUFhLENBQUMsT0FBTzs2QkFDaEQsQ0FBQyxDQUFDO3lCQUNKOzs7Ozt3QkFHSCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLHdCQUF3QixFQUFFLHFCQUFhLENBQUMsSUFBSTt5QkFDN0MsQ0FBQyxDQUFDOzs7Ozs7S0FFTjtJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250cmFjdENhcmRCYWxhbmNlIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL2NhcmQnO1xuaW1wb3J0IHsgRW51bUFwaVN0YXR1cyB9IGZyb20gJy4uLy4uL2VudW1zL2luZGV4JztcbmltcG9ydCB7IGNvbnRyYWN0TGlicmFyeUJvcnJvdyB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9saWJyYXJ5JztcbmltcG9ydCB7IGNvbnRyYWN0U2NvcmUgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvc2NvcmUnO1xuaW1wb3J0IHsgY29udHJhY3REb3JtaXRvcnlFbmVyZ3ksIGNvbnRyYWN0RG9ybWl0b3J5SGVhbHRoLCBjb250cmFjdERvcm1pdG9yeUluZm8gfSBmcm9tICcuLi8uLi9jb250cmFjdHMvZG9ybWl0b3J5JztcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHN0YXR1czoge1xuICAgICAgY2FyZDogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGxpYnJhcnk6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBzY29yZTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGRvcm1pdG9yeUhlYWx0aDogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGRvcm1pdG9yeUVuZXJneTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHVuZGVmaW5lZCxcbiAgICBib3Jyb3dOdW06IHVuZGVmaW5lZCxcbiAgICBzY29yZTogdW5kZWZpbmVkLFxuICAgIGRvcm1pdG9yeUhlYWx0aDogdW5kZWZpbmVkLFxuICAgIGRvcm1pdG9yeUhlYWx0aFdlZWs6IHVuZGVmaW5lZCxcbiAgICBkb3JtaXRvcnlFbmVyZ3k6IHVuZGVmaW5lZCxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZChfcXVlcnk6IHsgW3F1ZXJ5S2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuZmV0Y2hBbGwoKTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgYXN5bmMgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZmV0Y2hBbGwoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCh7fSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICBhc3luYyBmZXRjaENhcmQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdENhcmRCYWxhbmNlKHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmV0KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGJhbGFuY2U6IHJldC5kYXRhLmJhbGFuY2UsXG4gICAgICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoTGlicmFyeSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMubGlicmFyeSc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGNvbnRyYWN0TGlicmFyeUJvcnJvdyh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJldCk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBib3Jyb3dOdW06IHJldC5kYXRhLmluZm8ubGVuZ3RoLFxuICAgICAgICAgICdzdGF0dXMubGlicmFyeSc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICdzdGF0dXMubGlicmFyeSc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaFNjb3JlKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5zY29yZSc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGNvbnRyYWN0U2NvcmUodW5kZWZpbmVkLCB7XG4gICAgICAgIGF1dG9FcnJvcjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgc2NvcmU6IHJldC5kYXRhLmdyYWRlLFxuICAgICAgICAgICdzdGF0dXMuc2NvcmUnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLnNjb3JlJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoRG9ybWl0b3J5SGVhbHRoKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlIZWFsdGgnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdERvcm1pdG9yeUhlYWx0aCh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJldCk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBkb3JtaXRvcnlIZWFsdGg6IHJldC5kYXRhWzBdID8gcmV0LmRhdGFbMF0uc2NvcmUgOiBudWxsLFxuICAgICAgICAgIGRvcm1pdG9yeUhlYWx0aFdlZWs6IHJldC5kYXRhWzBdID8gcmV0LmRhdGFbMF0ud2VlayA6IG51bGwsXG4gICAgICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlIZWFsdGgnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUhlYWx0aCc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaERvcm1pdG9yeUVuZXJneSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuZG9ybWl0b3J5RW5lcmd5JzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW5mb1JldCA9IGF3YWl0IGNvbnRyYWN0RG9ybWl0b3J5SW5mbyh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGluZm9SZXQpO1xuICAgICAgaWYgKCFpbmZvUmV0LmVycm9yKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gaW5mb1JldC5kYXRhLnJhd0Zsb29yO1xuICAgICAgICBjb25zdCByb29tID0gKC9cXGQrJC8uZXhlYyhpbmZvUmV0LmRhdGEucm9vbSkgfHwgW10pWzBdO1xuICAgICAgICBjb25zdCBlbmVyZ3lSZXQgPSBhd2FpdCBjb250cmFjdERvcm1pdG9yeUVuZXJneSh7IGZsb29yLCByb29tIH0sIHtcbiAgICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVuZXJneVJldCk7XG4gICAgICAgIGlmICghZW5lcmd5UmV0LmVycm9yKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBkb3JtaXRvcnlFbmVyZ3k6IGVuZXJneVJldC5kYXRhLmVuZXJneSxcbiAgICAgICAgICAgICdzdGF0dXMuZG9ybWl0b3J5RW5lcmd5JzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICdzdGF0dXMuZG9ybWl0b3J5RW5lcmd5JzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGZldGNoQWxsKCkge1xuICAgIGNvbnNvbGUubG9nKCdmZXRjaEFsbCcpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmZldGNoQ2FyZCgpLFxuICAgICAgdGhpcy5mZXRjaExpYnJhcnkoKSxcbiAgICAgIHRoaXMuZmV0Y2hTY29yZSgpLFxuICAgICAgdGhpcy5mZXRjaERvcm1pdG9yeUhlYWx0aCgpLFxuICAgICAgdGhpcy5mZXRjaERvcm1pdG9yeUVuZXJneSgpLFxuICAgIF0pO1xuICB9LFxufSk7XG4iXX0=