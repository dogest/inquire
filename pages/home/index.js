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
        this.fetchAll();
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
        this.fetchCard();
        this.fetchLibrary();
        this.fetchScore();
        this.fetchDormitoryHealth();
        this.fetchDormitoryEnergy();
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJEO0FBQzNELDJDQUFrRDtBQUNsRCxtREFBZ0U7QUFDaEUsK0NBQXNEO0FBQ3RELHVEQUFvSDtBQUVwSCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQzVCLE9BQU8sRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDL0IsS0FBSyxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUM3QixlQUFlLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQ3ZDLGVBQWUsRUFBRSxxQkFBYSxDQUFDLFFBQVE7U0FDeEM7UUFDRCxPQUFPLEVBQUUsU0FBUztRQUNsQixTQUFTLEVBQUUsU0FBUztRQUNwQixLQUFLLEVBQUUsU0FBUztRQUNoQixlQUFlLEVBQUUsU0FBUztRQUMxQixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLGVBQWUsRUFBRSxTQUFTO0tBQzNCO0lBS0QsTUFBTSxFQUFOLFVBQU8sTUFBc0M7UUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFFSyxTQUFTLEVBQWY7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLGFBQWEsRUFBRSxxQkFBYSxDQUFDLFFBQVE7eUJBQ3RDLENBQUMsQ0FBQzs7Ozt3QkFFVyxXQUFNLDBCQUFtQixDQUFDLFNBQVMsRUFBRTtnQ0FDL0MsU0FBUyxFQUFFLE1BQU07NkJBQ2xCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFHLFNBRVY7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO2dDQUN6QixhQUFhLEVBQUUscUJBQWEsQ0FBQyxPQUFPOzZCQUNyQyxDQUFDLENBQUM7eUJBQ0o7Ozs7d0JBRUQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixhQUFhLEVBQUUscUJBQWEsQ0FBQyxJQUFJO3lCQUNsQyxDQUFDLENBQUM7Ozs7OztLQUVOO0lBRUssWUFBWSxFQUFsQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osZ0JBQWdCLEVBQUUscUJBQWEsQ0FBQyxRQUFRO3lCQUN6QyxDQUFDLENBQUM7Ozs7d0JBRVcsV0FBTSwrQkFBcUIsQ0FBQyxTQUFTLEVBQUU7Z0NBQ2pELFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Z0NBQy9CLGdCQUFnQixFQUFFLHFCQUFhLENBQUMsT0FBTzs2QkFDeEMsQ0FBQyxDQUFDO3lCQUNKOzs7O3dCQUVELElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osZ0JBQWdCLEVBQUUscUJBQWEsQ0FBQyxJQUFJO3lCQUNyQyxDQUFDLENBQUM7Ozs7OztLQUVOO0lBRUssVUFBVSxFQUFoQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osY0FBYyxFQUFFLHFCQUFhLENBQUMsUUFBUTt5QkFDdkMsQ0FBQyxDQUFDOzs7O3dCQUVXLFdBQU0scUJBQWEsQ0FBQyxTQUFTLEVBQUU7Z0NBQ3pDLFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztnQ0FDckIsY0FBYyxFQUFFLHFCQUFhLENBQUMsT0FBTzs2QkFDdEMsQ0FBQyxDQUFDO3lCQUNKOzs7O3dCQUVELElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osY0FBYyxFQUFFLHFCQUFhLENBQUMsSUFBSTt5QkFDbkMsQ0FBQyxDQUFDOzs7Ozs7S0FFTjtJQUVLLG9CQUFvQixFQUExQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osd0JBQXdCLEVBQUUscUJBQWEsQ0FBQyxRQUFRO3lCQUNqRCxDQUFDLENBQUM7Ozs7d0JBRVcsV0FBTSxtQ0FBdUIsQ0FBQyxTQUFTLEVBQUU7Z0NBQ25ELFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osZUFBZSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dDQUN2RCxtQkFBbUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtnQ0FDMUQsd0JBQXdCLEVBQUUscUJBQWEsQ0FBQyxPQUFPOzZCQUNoRCxDQUFDLENBQUM7eUJBQ0o7Ozs7d0JBRUQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWix3QkFBd0IsRUFBRSxxQkFBYSxDQUFDLElBQUk7eUJBQzdDLENBQUMsQ0FBQzs7Ozs7O0tBRU47SUFFSyxvQkFBb0IsRUFBMUI7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLHdCQUF3QixFQUFFLHFCQUFhLENBQUMsUUFBUTt5QkFDakQsQ0FBQyxDQUFDOzs7O3dCQUVlLFdBQU0saUNBQXFCLENBQUMsU0FBUyxFQUFFO2dDQUNyRCxTQUFTLEVBQUUsTUFBTTs2QkFDbEIsQ0FBQyxFQUFBOzt3QkFGSSxPQUFPLEdBQUcsU0FFZDt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUNqQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQWQsY0FBYzt3QkFDVixLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQzlCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsV0FBTSxtQ0FBdUIsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUU7Z0NBQy9ELFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLFNBQVMsR0FBRyxTQUVoQjt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTs0QkFDcEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixlQUFlLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNO2dDQUN0Qyx3QkFBd0IsRUFBRSxxQkFBYSxDQUFDLE9BQU87NkJBQ2hELENBQUMsQ0FBQzt5QkFDSjs7Ozs7d0JBR0gsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWix3QkFBd0IsRUFBRSxxQkFBYSxDQUFDLElBQUk7eUJBQzdDLENBQUMsQ0FBQzs7Ozs7O0tBRU47SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udHJhY3RDYXJkQmFsYW5jZSB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9jYXJkJztcbmltcG9ydCB7IEVudW1BcGlTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9pbmRleCc7XG5pbXBvcnQgeyBjb250cmFjdExpYnJhcnlCb3Jyb3cgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvbGlicmFyeSc7XG5pbXBvcnQgeyBjb250cmFjdFNjb3JlIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL3Njb3JlJztcbmltcG9ydCB7IGNvbnRyYWN0RG9ybWl0b3J5RW5lcmd5LCBjb250cmFjdERvcm1pdG9yeUhlYWx0aCwgY29udHJhY3REb3JtaXRvcnlJbmZvIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL2Rvcm1pdG9yeSc7XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBzdGF0dXM6IHtcbiAgICAgIGNhcmQ6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBsaWJyYXJ5OiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgICAgc2NvcmU6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBkb3JtaXRvcnlIZWFsdGg6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBkb3JtaXRvcnlFbmVyZ3k6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSxcbiAgICBiYWxhbmNlOiB1bmRlZmluZWQsXG4gICAgYm9ycm93TnVtOiB1bmRlZmluZWQsXG4gICAgc2NvcmU6IHVuZGVmaW5lZCxcbiAgICBkb3JtaXRvcnlIZWFsdGg6IHVuZGVmaW5lZCxcbiAgICBkb3JtaXRvcnlIZWFsdGhXZWVrOiB1bmRlZmluZWQsXG4gICAgZG9ybWl0b3J5RW5lcmd5OiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoX3F1ZXJ5OiB7IFtxdWVyeUtleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLmZldGNoQWxsKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHRoaXMuZmV0Y2hBbGwoKTtcbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hDYXJkKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RDYXJkQmFsYW5jZSh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJldCk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBiYWxhbmNlOiByZXQuZGF0YS5iYWxhbmNlLFxuICAgICAgICAgICdzdGF0dXMuY2FyZCc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICdzdGF0dXMuY2FyZCc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaExpYnJhcnkoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLmxpYnJhcnknOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdExpYnJhcnlCb3Jyb3codW5kZWZpbmVkLCB7XG4gICAgICAgIGF1dG9FcnJvcjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYm9ycm93TnVtOiByZXQuZGF0YS5pbmZvLmxlbmd0aCxcbiAgICAgICAgICAnc3RhdHVzLmxpYnJhcnknOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmxpYnJhcnknOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hTY29yZSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuc2NvcmUnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdFNjb3JlKHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmV0KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHNjb3JlOiByZXQuZGF0YS5ncmFkZSxcbiAgICAgICAgICAnc3RhdHVzLnNjb3JlJzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5zY29yZSc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaERvcm1pdG9yeUhlYWx0aCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuZG9ybWl0b3J5SGVhbHRoJzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3REb3JtaXRvcnlIZWFsdGgodW5kZWZpbmVkLCB7XG4gICAgICAgIGF1dG9FcnJvcjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgZG9ybWl0b3J5SGVhbHRoOiByZXQuZGF0YVswXSA/IHJldC5kYXRhWzBdLnNjb3JlIDogbnVsbCxcbiAgICAgICAgICBkb3JtaXRvcnlIZWFsdGhXZWVrOiByZXQuZGF0YVswXSA/IHJldC5kYXRhWzBdLndlZWsgOiBudWxsLFxuICAgICAgICAgICdzdGF0dXMuZG9ybWl0b3J5SGVhbHRoJzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlIZWFsdGgnOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hEb3JtaXRvcnlFbmVyZ3koKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLmRvcm1pdG9yeUVuZXJneSc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGluZm9SZXQgPSBhd2FpdCBjb250cmFjdERvcm1pdG9yeUluZm8odW5kZWZpbmVkLCB7XG4gICAgICAgIGF1dG9FcnJvcjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhpbmZvUmV0KTtcbiAgICAgIGlmICghaW5mb1JldC5lcnJvcikge1xuICAgICAgICBjb25zdCBmbG9vciA9IGluZm9SZXQuZGF0YS5yYXdGbG9vcjtcbiAgICAgICAgY29uc3Qgcm9vbSA9ICgvXFxkKyQvLmV4ZWMoaW5mb1JldC5kYXRhLnJvb20pIHx8IFtdKVswXTtcbiAgICAgICAgY29uc3QgZW5lcmd5UmV0ID0gYXdhaXQgY29udHJhY3REb3JtaXRvcnlFbmVyZ3koeyBmbG9vciwgcm9vbSB9LCB7XG4gICAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlbmVyZ3lSZXQpO1xuICAgICAgICBpZiAoIWVuZXJneVJldC5lcnJvcikge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgZG9ybWl0b3J5RW5lcmd5OiBlbmVyZ3lSZXQuZGF0YS5lbmVyZ3ksXG4gICAgICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUVuZXJneSc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUVuZXJneSc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaEFsbCgpIHtcbiAgICBjb25zb2xlLmxvZygnZmV0Y2hBbGwnKTtcbiAgICB0aGlzLmZldGNoQ2FyZCgpO1xuICAgIHRoaXMuZmV0Y2hMaWJyYXJ5KCk7XG4gICAgdGhpcy5mZXRjaFNjb3JlKCk7XG4gICAgdGhpcy5mZXRjaERvcm1pdG9yeUhlYWx0aCgpO1xuICAgIHRoaXMuZmV0Y2hEb3JtaXRvcnlFbmVyZ3koKTtcbiAgfSxcbn0pO1xuIl19