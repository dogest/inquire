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
            var userInfo, floor, room, ret, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            'status.dormitoryEnergy': index_1.EnumApiStatus.fetching,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
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
                            this.setData({
                                dormitoryEnergy: ret.data.energy,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELDZDQUEyRDtBQUMzRCxtREFBZ0U7QUFDaEUsK0NBQXNEO0FBQ3RELHVEQUFvSDtBQUNwSCwrQ0FBMEM7QUFFMUMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUM1QixPQUFPLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQy9CLEtBQUssRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDN0IsZUFBZSxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUN2QyxlQUFlLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1NBQ3hDO1FBQ0QsT0FBTyxFQUFFLFNBQVM7UUFDbEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixlQUFlLEVBQUUsU0FBUztLQUMzQjtJQUtELE1BQU0sRUFBTixVQUFPLE1BQXNDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLSyxpQkFBaUI7Ozs7Ozt3QkFFbkIsV0FBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDOzs7d0JBRXRCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Ozs7O0tBRTlCO0lBS0QsYUFBYTtJQUViLENBQUM7SUFFSyxTQUFTLEVBQWY7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLGFBQWEsRUFBRSxxQkFBYSxDQUFDLFFBQVE7eUJBQ3RDLENBQUMsQ0FBQzs7Ozt3QkFFVyxXQUFNLDBCQUFtQixDQUFDLFNBQVMsRUFBRTtnQ0FDL0MsU0FBUyxFQUFFLE1BQU07NkJBQ2xCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFHLFNBRVY7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO2dDQUN6QixhQUFhLEVBQUUscUJBQWEsQ0FBQyxPQUFPOzZCQUNyQyxDQUFDLENBQUM7eUJBQ0o7Ozs7d0JBRUQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixhQUFhLEVBQUUscUJBQWEsQ0FBQyxJQUFJO3lCQUNsQyxDQUFDLENBQUM7Ozs7OztLQUVOO0lBRUssWUFBWSxFQUFsQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osZ0JBQWdCLEVBQUUscUJBQWEsQ0FBQyxRQUFRO3lCQUN6QyxDQUFDLENBQUM7Ozs7d0JBRVcsV0FBTSwrQkFBcUIsQ0FBQyxTQUFTLEVBQUU7Z0NBQ2pELFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Z0NBQy9CLGdCQUFnQixFQUFFLHFCQUFhLENBQUMsT0FBTzs2QkFDeEMsQ0FBQyxDQUFDO3lCQUNKOzs7O3dCQUVELElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osZ0JBQWdCLEVBQUUscUJBQWEsQ0FBQyxJQUFJO3lCQUNyQyxDQUFDLENBQUM7Ozs7OztLQUVOO0lBRUssVUFBVSxFQUFoQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osY0FBYyxFQUFFLHFCQUFhLENBQUMsUUFBUTt5QkFDdkMsQ0FBQyxDQUFDOzs7O3dCQUVXLFdBQU0scUJBQWEsQ0FBQyxTQUFTLEVBQUU7Z0NBQ3pDLFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztnQ0FDckIsY0FBYyxFQUFFLHFCQUFhLENBQUMsT0FBTzs2QkFDdEMsQ0FBQyxDQUFDO3lCQUNKOzs7O3dCQUVELElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osY0FBYyxFQUFFLHFCQUFhLENBQUMsSUFBSTt5QkFDbkMsQ0FBQyxDQUFDOzs7Ozs7S0FFTjtJQUVLLG9CQUFvQixFQUExQjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osd0JBQXdCLEVBQUUscUJBQWEsQ0FBQyxRQUFRO3lCQUNqRCxDQUFDLENBQUM7Ozs7d0JBRVcsV0FBTSxtQ0FBdUIsQ0FBQyxTQUFTLEVBQUU7Z0NBQ25ELFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osZUFBZSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dDQUN2RCxtQkFBbUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtnQ0FDMUQsd0JBQXdCLEVBQUUscUJBQWEsQ0FBQyxPQUFPOzZCQUNoRCxDQUFDLENBQUM7eUJBQ0o7Ozs7d0JBRUQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWix3QkFBd0IsRUFBRSxxQkFBYSxDQUFDLElBQUk7eUJBQzdDLENBQUMsQ0FBQzs7Ozs7O0tBRU47SUFFSyxvQkFBb0IsRUFBMUI7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLHdCQUF3QixFQUFFLHFCQUFhLENBQUMsUUFBUTt5QkFDakQsQ0FBQyxDQUFDOzs7O3dCQUVnQixXQUFNLGlCQUFPLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUF0QyxRQUFRLEdBQUcsU0FBMkI7NkJBQ3hDLFFBQVEsRUFBUixjQUFRO3dCQUNGLEtBQUssR0FBVyxRQUFRLE1BQW5CLEVBQUUsSUFBSSxHQUFLLFFBQVEsS0FBYixDQUFjO3dCQUNyQixXQUFNLG1DQUF1QixDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsRUFBRTtnQ0FDekQsU0FBUyxFQUFFLE1BQU07NkJBQ2xCLENBQUMsRUFBQTs7d0JBRkksR0FBRyxHQUFHLFNBRVY7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixlQUFlLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO2dDQUNoQyx3QkFBd0IsRUFBRSxxQkFBYSxDQUFDLE9BQU87NkJBQ2hELENBQUMsQ0FBQzt5QkFDSjs7Ozs7d0JBR0gsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWix3QkFBd0IsRUFBRSxxQkFBYSxDQUFDLElBQUk7eUJBQzdDLENBQUMsQ0FBQzs7Ozs7O0tBRU47SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bUFwaVN0YXR1cyB9IGZyb20gJy4uLy4uL2VudW1zL2luZGV4JztcbmltcG9ydCB7IGNvbnRyYWN0Q2FyZEJhbGFuY2UgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvY2FyZCc7XG5pbXBvcnQgeyBjb250cmFjdExpYnJhcnlCb3Jyb3cgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvbGlicmFyeSc7XG5pbXBvcnQgeyBjb250cmFjdFNjb3JlIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL3Njb3JlJztcbmltcG9ydCB7IGNvbnRyYWN0RG9ybWl0b3J5RW5lcmd5LCBjb250cmFjdERvcm1pdG9yeUhlYWx0aCwgY29udHJhY3REb3JtaXRvcnlJbmZvIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL2Rvcm1pdG9yeSc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi91dGlscy9zdG9yYWdlJztcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHN0YXR1czoge1xuICAgICAgY2FyZDogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGxpYnJhcnk6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBzY29yZTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGRvcm1pdG9yeUhlYWx0aDogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGRvcm1pdG9yeUVuZXJneTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHVuZGVmaW5lZCxcbiAgICBib3Jyb3dOdW06IHVuZGVmaW5lZCxcbiAgICBzY29yZTogdW5kZWZpbmVkLFxuICAgIGRvcm1pdG9yeUhlYWx0aDogdW5kZWZpbmVkLFxuICAgIGRvcm1pdG9yeUhlYWx0aFdlZWs6IHVuZGVmaW5lZCxcbiAgICBkb3JtaXRvcnlFbmVyZ3k6IHVuZGVmaW5lZCxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZChfcXVlcnk6IHsgW3F1ZXJ5S2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuZmV0Y2hBbGwoKTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgYXN5bmMgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZmV0Y2hBbGwoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCh7fSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICBhc3luYyBmZXRjaENhcmQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdENhcmRCYWxhbmNlKHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYmFsYW5jZTogcmV0LmRhdGEuYmFsYW5jZSxcbiAgICAgICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hMaWJyYXJ5KCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5saWJyYXJ5JzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RMaWJyYXJ5Qm9ycm93KHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYm9ycm93TnVtOiByZXQuZGF0YS5pbmZvLmxlbmd0aCxcbiAgICAgICAgICAnc3RhdHVzLmxpYnJhcnknOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmxpYnJhcnknOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hTY29yZSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuc2NvcmUnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdFNjb3JlKHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgc2NvcmU6IHJldC5kYXRhLmdyYWRlLFxuICAgICAgICAgICdzdGF0dXMuc2NvcmUnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLnNjb3JlJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoRG9ybWl0b3J5SGVhbHRoKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlIZWFsdGgnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdERvcm1pdG9yeUhlYWx0aCh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGRvcm1pdG9yeUhlYWx0aDogcmV0LmRhdGFbMF0gPyByZXQuZGF0YVswXS5zY29yZSA6IG51bGwsXG4gICAgICAgICAgZG9ybWl0b3J5SGVhbHRoV2VlazogcmV0LmRhdGFbMF0gPyByZXQuZGF0YVswXS53ZWVrIDogbnVsbCxcbiAgICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUhlYWx0aCc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICdzdGF0dXMuZG9ybWl0b3J5SGVhbHRoJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoRG9ybWl0b3J5RW5lcmd5KCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlFbmVyZ3knOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHN0b3JhZ2UuZ2V0VXNlckluZm8oKTtcbiAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICBjb25zdCB7IGZsb29yLCByb29tIH0gPSB1c2VySW5mbztcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3REb3JtaXRvcnlFbmVyZ3koeyBmbG9vciwgcm9vbSB9LCB7XG4gICAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgZG9ybWl0b3J5RW5lcmd5OiByZXQuZGF0YS5lbmVyZ3ksXG4gICAgICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUVuZXJneSc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUVuZXJneSc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaEFsbCgpIHtcbiAgICBjb25zb2xlLmxvZygnZmV0Y2hBbGwnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5mZXRjaENhcmQoKSxcbiAgICAgIHRoaXMuZmV0Y2hMaWJyYXJ5KCksXG4gICAgICB0aGlzLmZldGNoU2NvcmUoKSxcbiAgICAgIHRoaXMuZmV0Y2hEb3JtaXRvcnlIZWFsdGgoKSxcbiAgICAgIHRoaXMuZmV0Y2hEb3JtaXRvcnlFbmVyZ3koKSxcbiAgICBdKTtcbiAgfSxcbn0pO1xuIl19