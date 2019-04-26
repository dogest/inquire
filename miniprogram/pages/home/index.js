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
var index_1 = require("../../enums/index");
var card_1 = require("../../contracts/card");
var library_1 = require("../../contracts/library");
var score_1 = require("../../contracts/score");
var dormitory_1 = require("../../contracts/dormitory");
var storage_1 = require("../../utils/storage");
var pages_1 = require("../../configs/pages");
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
    onShareAppMessage: function () {
        return {
            title: '抽空查询',
            path: pages_1.default.home,
        };
    },
    fetchCard: function () {
        return __awaiter(this, void 0, void 0, function () {
            var success, ret, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.card': index_1.EnumApiStatus.fetching,
                        });
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4, card_1.contractCardBalance(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        if (!ret.error) {
                            success = true;
                            this.setData({
                                balance: ret.data.balance,
                                'status.card': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 5];
                    case 3:
                        e_1 = _a.sent();
                        return [3, 5];
                    case 4:
                        if (!success) {
                            this.setData({
                                'status.card': index_1.EnumApiStatus.fail,
                            });
                            wx.reportMonitor(index_1.EnumReport.cardBalanceFail, 1);
                        }
                        return [7];
                    case 5: return [2];
                }
            });
        });
    },
    fetchLibrary: function () {
        return __awaiter(this, void 0, void 0, function () {
            var success, ret, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.library': index_1.EnumApiStatus.fetching,
                        });
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4, library_1.contractLibraryBorrow(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        if (!ret.error) {
                            success = true;
                            this.setData({
                                borrowNum: ret.data.info.length,
                                'status.library': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 5];
                    case 3:
                        e_2 = _a.sent();
                        return [3, 5];
                    case 4:
                        if (!success) {
                            this.setData({
                                'status.library': index_1.EnumApiStatus.fail,
                            });
                            wx.reportMonitor(index_1.EnumReport.libraryBorrowFail, 1);
                        }
                        return [7];
                    case 5: return [2];
                }
            });
        });
    },
    fetchScore: function () {
        return __awaiter(this, void 0, void 0, function () {
            var success, ret, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.score': index_1.EnumApiStatus.fetching,
                        });
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4, score_1.contractScore(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        if (!ret.error) {
                            success = true;
                            this.setData({
                                score: ret.data.grade,
                                'status.score': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 5];
                    case 3:
                        e_3 = _a.sent();
                        return [3, 5];
                    case 4:
                        if (!success) {
                            this.setData({
                                'status.score': index_1.EnumApiStatus.fail,
                            });
                            wx.reportMonitor(index_1.EnumReport.scoreFail, 1);
                        }
                        return [7];
                    case 5: return [2];
                }
            });
        });
    },
    fetchDormitoryHealth: function () {
        return __awaiter(this, void 0, void 0, function () {
            var success, ret, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.dormitoryHealth': index_1.EnumApiStatus.fetching,
                        });
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4, dormitory_1.contractDormitoryHealth(undefined, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        if (!ret.error) {
                            success = true;
                            this.setData({
                                dormitoryHealth: ret.data[0] ? ret.data[0].score : null,
                                dormitoryHealthWeek: ret.data[0] ? ret.data[0].week : null,
                                'status.dormitoryHealth': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 5];
                    case 3:
                        e_4 = _a.sent();
                        return [3, 5];
                    case 4:
                        if (!success) {
                            this.setData({
                                'status.dormitoryHealth': index_1.EnumApiStatus.fail,
                            });
                            wx.reportMonitor(index_1.EnumReport.dormitoryHealthFail, 1);
                        }
                        return [7];
                    case 5: return [2];
                }
            });
        });
    },
    fetchDormitoryEnergy: function () {
        return __awaiter(this, void 0, void 0, function () {
            var success, userInfo, floor, room, ret, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.dormitoryEnergy': index_1.EnumApiStatus.fetching,
                        });
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        return [4, storage_1.default.getUserInfo()];
                    case 2:
                        userInfo = _a.sent();
                        if (!userInfo) return [3, 4];
                        floor = userInfo.floor, room = userInfo.room;
                        return [4, dormitory_1.contractDormitoryEnergy({ floor: floor, room: room }, {
                                autoError: 'none',
                            })];
                    case 3:
                        ret = _a.sent();
                        if (!ret.error) {
                            success = true;
                            this.setData({
                                dormitoryEnergy: ret.data.energy,
                                'status.dormitoryEnergy': index_1.EnumApiStatus.success,
                            });
                        }
                        _a.label = 4;
                    case 4: return [3, 7];
                    case 5:
                        e_5 = _a.sent();
                        return [3, 7];
                    case 6:
                        if (!success) {
                            this.setData({
                                'status.dormitoryEnergy': index_1.EnumApiStatus.fail,
                            });
                            wx.reportMonitor(index_1.EnumReport.dormitoryEnergyFail, 1);
                        }
                        return [7];
                    case 7: return [2];
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
    logout: function () {
        try {
            wx.clearStorageSync();
        }
        catch (e) {
            console.error(e);
        }
        wx.redirectTo({ url: pages_1.default.login });
    },
    toAbout: function () {
        wx.navigateTo({ url: pages_1.default.about });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThEO0FBQzlELDZDQUEyRDtBQUMzRCxtREFBZ0U7QUFDaEUsK0NBQXNEO0FBQ3RELHVEQUFvSDtBQUNwSCwrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBRXhDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDNUIsT0FBTyxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUMvQixLQUFLLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQzdCLGVBQWUsRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDdkMsZUFBZSxFQUFFLHFCQUFhLENBQUMsUUFBUTtTQUN4QztRQUNELE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsZUFBZSxFQUFFLFNBQVM7S0FDM0I7SUFLRCxNQUFNLEVBQU4sVUFBTyxNQUFzQztRQUMzQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0ssaUJBQWlCOzs7Ozs7d0JBRW5CLFdBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBckIsU0FBcUIsQ0FBQzs7O3dCQUV0QixFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7OztLQUU5QjtJQUtELGFBQWE7SUFFYixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLGVBQUssQ0FBQyxJQUFJO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUssU0FBUyxFQUFmOzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixhQUFhLEVBQUUscUJBQWEsQ0FBQyxRQUFRO3lCQUN0QyxDQUFDLENBQUM7d0JBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQzs7Ozt3QkFFTixXQUFNLDBCQUFtQixDQUFDLFNBQVMsRUFBRTtnQ0FDL0MsU0FBUyxFQUFFLE1BQU07NkJBQ2xCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFHLFNBRVY7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQzs0QkFDZixJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87Z0NBQ3pCLGFBQWEsRUFBRSxxQkFBYSxDQUFDLE9BQU87NkJBQ3JDLENBQUMsQ0FBQzt5QkFDSjs7Ozs7O3dCQUdELElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ1osSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixhQUFhLEVBQUUscUJBQWEsQ0FBQyxJQUFJOzZCQUNsQyxDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDakQ7Ozs7OztLQUVKO0lBRUssWUFBWSxFQUFsQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osZ0JBQWdCLEVBQUUscUJBQWEsQ0FBQyxRQUFRO3lCQUN6QyxDQUFDLENBQUM7d0JBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQzs7Ozt3QkFFTixXQUFNLCtCQUFxQixDQUFDLFNBQVMsRUFBRTtnQ0FDakQsU0FBUyxFQUFFLE1BQU07NkJBQ2xCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFHLFNBRVY7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQzs0QkFDZixJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dDQUMvQixnQkFBZ0IsRUFBRSxxQkFBYSxDQUFDLE9BQU87NkJBQ3hDLENBQUMsQ0FBQzt5QkFDSjs7Ozs7O3dCQUdELElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ1osSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixnQkFBZ0IsRUFBRSxxQkFBYSxDQUFDLElBQUk7NkJBQ3JDLENBQUMsQ0FBQzs0QkFDSCxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQ25EOzs7Ozs7S0FFSjtJQUVLLFVBQVUsRUFBaEI7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLGNBQWMsRUFBRSxxQkFBYSxDQUFDLFFBQVE7eUJBQ3ZDLENBQUMsQ0FBQzt3QkFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7O3dCQUVOLFdBQU0scUJBQWEsQ0FBQyxTQUFTLEVBQUU7Z0NBQ3pDLFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLE9BQU8sR0FBRyxJQUFJLENBQUM7NEJBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dDQUNyQixjQUFjLEVBQUUscUJBQWEsQ0FBQyxPQUFPOzZCQUN0QyxDQUFDLENBQUM7eUJBQ0o7Ozs7Ozt3QkFHRCxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUNaLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osY0FBYyxFQUFFLHFCQUFhLENBQUMsSUFBSTs2QkFDbkMsQ0FBQyxDQUFDOzRCQUNILEVBQUUsQ0FBQyxhQUFhLENBQUMsa0JBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQzNDOzs7Ozs7S0FFSjtJQUVLLG9CQUFvQixFQUExQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osd0JBQXdCLEVBQUUscUJBQWEsQ0FBQyxRQUFRO3lCQUNqRCxDQUFDLENBQUM7d0JBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQzs7Ozt3QkFFTixXQUFNLG1DQUF1QixDQUFDLFNBQVMsRUFBRTtnQ0FDbkQsU0FBUyxFQUFFLE1BQU07NkJBQ2xCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFHLFNBRVY7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQzs0QkFDZixJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLGVBQWUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtnQ0FDdkQsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0NBQzFELHdCQUF3QixFQUFFLHFCQUFhLENBQUMsT0FBTzs2QkFDaEQsQ0FBQyxDQUFDO3lCQUNKOzs7Ozs7d0JBR0QsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDWixJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLHdCQUF3QixFQUFFLHFCQUFhLENBQUMsSUFBSTs2QkFDN0MsQ0FBQyxDQUFDOzRCQUNILEVBQUUsQ0FBQyxhQUFhLENBQUMsa0JBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDckQ7Ozs7OztLQUVKO0lBRUssb0JBQW9CLEVBQTFCOzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWix3QkFBd0IsRUFBRSxxQkFBYSxDQUFDLFFBQVE7eUJBQ2pELENBQUMsQ0FBQzt3QkFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7O3dCQUVELFdBQU0saUJBQU8sQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXRDLFFBQVEsR0FBRyxTQUEyQjs2QkFDeEMsUUFBUSxFQUFSLGNBQVE7d0JBQ0YsS0FBSyxHQUFXLFFBQVEsTUFBbkIsRUFBRSxJQUFJLEdBQUssUUFBUSxLQUFiLENBQWM7d0JBQ3JCLFdBQU0sbUNBQXVCLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFO2dDQUN6RCxTQUFTLEVBQUUsTUFBTTs2QkFDbEIsQ0FBQyxFQUFBOzt3QkFGSSxHQUFHLEdBQUcsU0FFVjt3QkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTs0QkFDZCxPQUFPLEdBQUcsSUFBSSxDQUFDOzRCQUNmLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osZUFBZSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtnQ0FDaEMsd0JBQXdCLEVBQUUscUJBQWEsQ0FBQyxPQUFPOzZCQUNoRCxDQUFDLENBQUM7eUJBQ0o7Ozs7Ozs7d0JBSUgsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDWixJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLHdCQUF3QixFQUFFLHFCQUFhLENBQUMsSUFBSTs2QkFDN0MsQ0FBQyxDQUFDOzRCQUNILEVBQUUsQ0FBQyxhQUFhLENBQUMsa0JBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDckQ7Ozs7OztLQUVKO0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUMzQixJQUFJLENBQUMsb0JBQW9CLEVBQUU7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJO1lBQ0YsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdkI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7UUFDRCxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLGVBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPO1FBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxlQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bUFwaVN0YXR1cywgRW51bVJlcG9ydCB9IGZyb20gJy4uLy4uL2VudW1zL2luZGV4JztcbmltcG9ydCB7IGNvbnRyYWN0Q2FyZEJhbGFuY2UgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvY2FyZCc7XG5pbXBvcnQgeyBjb250cmFjdExpYnJhcnlCb3Jyb3cgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvbGlicmFyeSc7XG5pbXBvcnQgeyBjb250cmFjdFNjb3JlIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL3Njb3JlJztcbmltcG9ydCB7IGNvbnRyYWN0RG9ybWl0b3J5RW5lcmd5LCBjb250cmFjdERvcm1pdG9yeUhlYWx0aCwgY29udHJhY3REb3JtaXRvcnlJbmZvIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL2Rvcm1pdG9yeSc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi91dGlscy9zdG9yYWdlJztcbmltcG9ydCBwYWdlcyBmcm9tICcuLi8uLi9jb25maWdzL3BhZ2VzJztcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHN0YXR1czoge1xuICAgICAgY2FyZDogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGxpYnJhcnk6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBzY29yZTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGRvcm1pdG9yeUhlYWx0aDogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGRvcm1pdG9yeUVuZXJneTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHVuZGVmaW5lZCxcbiAgICBib3Jyb3dOdW06IHVuZGVmaW5lZCxcbiAgICBzY29yZTogdW5kZWZpbmVkLFxuICAgIGRvcm1pdG9yeUhlYWx0aDogdW5kZWZpbmVkLFxuICAgIGRvcm1pdG9yeUhlYWx0aFdlZWs6IHVuZGVmaW5lZCxcbiAgICBkb3JtaXRvcnlFbmVyZ3k6IHVuZGVmaW5lZCxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZChfcXVlcnk6IHsgW3F1ZXJ5S2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuZmV0Y2hBbGwoKTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgYXN5bmMgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZmV0Y2hBbGwoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCh7fSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfmir3nqbrmn6Xor6InLFxuICAgICAgcGF0aDogcGFnZXMuaG9tZSxcbiAgICB9O1xuICB9LFxuXG4gIGFzeW5jIGZldGNoQ2FyZCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuY2FyZCc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RDYXJkQmFsYW5jZSh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBiYWxhbmNlOiByZXQuZGF0YS5iYWxhbmNlLFxuICAgICAgICAgICdzdGF0dXMuY2FyZCc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgICB9KTtcbiAgICAgICAgd3gucmVwb3J0TW9uaXRvcihFbnVtUmVwb3J0LmNhcmRCYWxhbmNlRmFpbCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoTGlicmFyeSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMubGlicmFyeSc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RMaWJyYXJ5Qm9ycm93KHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGJvcnJvd051bTogcmV0LmRhdGEuaW5mby5sZW5ndGgsXG4gICAgICAgICAgJ3N0YXR1cy5saWJyYXJ5JzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAnc3RhdHVzLmxpYnJhcnknOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICAgIH0pO1xuICAgICAgICB3eC5yZXBvcnRNb25pdG9yKEVudW1SZXBvcnQubGlicmFyeUJvcnJvd0ZhaWwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaFNjb3JlKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5zY29yZSc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RTY29yZSh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBzY29yZTogcmV0LmRhdGEuZ3JhZGUsXG4gICAgICAgICAgJ3N0YXR1cy5zY29yZSc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgJ3N0YXR1cy5zY29yZSc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LnJlcG9ydE1vbml0b3IoRW51bVJlcG9ydC5zY29yZUZhaWwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaERvcm1pdG9yeUhlYWx0aCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuZG9ybWl0b3J5SGVhbHRoJzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdERvcm1pdG9yeUhlYWx0aCh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBkb3JtaXRvcnlIZWFsdGg6IHJldC5kYXRhWzBdID8gcmV0LmRhdGFbMF0uc2NvcmUgOiBudWxsLFxuICAgICAgICAgIGRvcm1pdG9yeUhlYWx0aFdlZWs6IHJldC5kYXRhWzBdID8gcmV0LmRhdGFbMF0ud2VlayA6IG51bGwsXG4gICAgICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlIZWFsdGgnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICdzdGF0dXMuZG9ybWl0b3J5SGVhbHRoJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgICB9KTtcbiAgICAgICAgd3gucmVwb3J0TW9uaXRvcihFbnVtUmVwb3J0LmRvcm1pdG9yeUhlYWx0aEZhaWwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaERvcm1pdG9yeUVuZXJneSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuZG9ybWl0b3J5RW5lcmd5JzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHN0b3JhZ2UuZ2V0VXNlckluZm8oKTtcbiAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICBjb25zdCB7IGZsb29yLCByb29tIH0gPSB1c2VySW5mbztcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3REb3JtaXRvcnlFbmVyZ3koeyBmbG9vciwgcm9vbSB9LCB7XG4gICAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgZG9ybWl0b3J5RW5lcmd5OiByZXQuZGF0YS5lbmVyZ3ksXG4gICAgICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUVuZXJneSc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICdzdGF0dXMuZG9ybWl0b3J5RW5lcmd5JzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgICB9KTtcbiAgICAgICAgd3gucmVwb3J0TW9uaXRvcihFbnVtUmVwb3J0LmRvcm1pdG9yeUVuZXJneUZhaWwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBmZXRjaEFsbCgpIHtcbiAgICBjb25zb2xlLmxvZygnZmV0Y2hBbGwnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5mZXRjaENhcmQoKSxcbiAgICAgIHRoaXMuZmV0Y2hMaWJyYXJ5KCksXG4gICAgICB0aGlzLmZldGNoU2NvcmUoKSxcbiAgICAgIHRoaXMuZmV0Y2hEb3JtaXRvcnlIZWFsdGgoKSxcbiAgICAgIHRoaXMuZmV0Y2hEb3JtaXRvcnlFbmVyZ3koKSxcbiAgICBdKTtcbiAgfSxcblxuICBsb2dvdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHd4LmNsZWFyU3RvcmFnZVN5bmMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgICB3eC5yZWRpcmVjdFRvKHsgdXJsOiBwYWdlcy5sb2dpbiB9KTtcbiAgfSxcblxuICB0b0Fib3V0KCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IHBhZ2VzLmFib3V0IH0pO1xuICB9LFxufSk7XG4iXX0=