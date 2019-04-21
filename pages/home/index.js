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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELDZDQUEyRDtBQUMzRCxtREFBZ0U7QUFDaEUsK0NBQXNEO0FBQ3RELHVEQUFvSDtBQUNwSCwrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBRXhDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDNUIsT0FBTyxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUMvQixLQUFLLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQzdCLGVBQWUsRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDdkMsZUFBZSxFQUFFLHFCQUFhLENBQUMsUUFBUTtTQUN4QztRQUNELE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsZUFBZSxFQUFFLFNBQVM7S0FDM0I7SUFLRCxNQUFNLEVBQU4sVUFBTyxNQUFzQztRQUMzQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0ssaUJBQWlCOzs7Ozs7d0JBRW5CLFdBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBckIsU0FBcUIsQ0FBQzs7O3dCQUV0QixFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7OztLQUU5QjtJQUtELGFBQWE7SUFFYixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxN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VSxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUMzQixJQUFJLENBQUMsb0JBQW9CLEVBQUU7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1BcGlTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9pbmRleCc7XG5pbXBvcnQgeyBjb250cmFjdENhcmRCYWxhbmNlIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL2NhcmQnO1xuaW1wb3J0IHsgY29udHJhY3RMaWJyYXJ5Qm9ycm93IH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL2xpYnJhcnknO1xuaW1wb3J0IHsgY29udHJhY3RTY29yZSB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9zY29yZSc7XG5pbXBvcnQgeyBjb250cmFjdERvcm1pdG9yeUVuZXJneSwgY29udHJhY3REb3JtaXRvcnlIZWFsdGgsIGNvbnRyYWN0RG9ybWl0b3J5SW5mbyB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9kb3JtaXRvcnknO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vdXRpbHMvc3RvcmFnZSc7XG5pbXBvcnQgcGFnZXMgZnJvbSAnLi4vLi4vY29uZmlncy9wYWdlcyc7XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBzdGF0dXM6IHtcbiAgICAgIGNhcmQ6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBsaWJyYXJ5OiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgICAgc2NvcmU6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBkb3JtaXRvcnlIZWFsdGg6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBkb3JtaXRvcnlFbmVyZ3k6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSxcbiAgICBiYWxhbmNlOiB1bmRlZmluZWQsXG4gICAgYm9ycm93TnVtOiB1bmRlZmluZWQsXG4gICAgc2NvcmU6IHVuZGVmaW5lZCxcbiAgICBkb3JtaXRvcnlIZWFsdGg6IHVuZGVmaW5lZCxcbiAgICBkb3JtaXRvcnlIZWFsdGhXZWVrOiB1bmRlZmluZWQsXG4gICAgZG9ybWl0b3J5RW5lcmd5OiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoX3F1ZXJ5OiB7IFtxdWVyeUtleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLmZldGNoQWxsKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIGFzeW5jIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmZldGNoQWxsKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goe30pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5oq956m65p+l6K+iJyxcbiAgICAgIHBhdGg6IHBhZ2VzLmhvbWUsXG4gICAgfTtcbiAgfSxcblxuICBhc3luYyBmZXRjaENhcmQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdENhcmRCYWxhbmNlKHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYmFsYW5jZTogcmV0LmRhdGEuYmFsYW5jZSxcbiAgICAgICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hMaWJyYXJ5KCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5saWJyYXJ5JzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RMaWJyYXJ5Qm9ycm93KHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYm9ycm93TnVtOiByZXQuZGF0YS5pbmZvLmxlbmd0aCxcbiAgICAgICAgICAnc3RhdHVzLmxpYnJhcnknOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmxpYnJhcnknOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hTY29yZSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuc2NvcmUnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdFNjb3JlKHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgc2NvcmU6IHJldC5kYXRhLmdyYWRlLFxuICAgICAgICAgICdzdGF0dXMuc2NvcmUnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLnNjb3JlJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoRG9ybWl0b3J5SGVhbHRoKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlIZWFsdGgnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdERvcm1pdG9yeUhlYWx0aCh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGRvcm1pdG9yeUhlYWx0aDogcmV0LmRhdGFbMF0gPyByZXQuZGF0YVswXS5zY29yZSA6IG51bGwsXG4gICAgICAgICAgZG9ybWl0b3J5SGVhbHRoV2VlazogcmV0LmRhdGFbMF0gPyByZXQuZGF0YVswXS53ZWVrIDogbnVsbCxcbiAgICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUhlYWx0aCc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICdzdGF0dXMuZG9ybWl0b3J5SGVhbHRoJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoRG9ybWl0b3J5RW5lcmd5KCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlFbmVyZ3knOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHN0b3JhZ2UuZ2V0VXNlckluZm8oKTtcbiAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICBjb25zdCB7IGZsb29yLCByb29tIH0gPSB1c2VySW5mbztcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3REb3JtaXRvcnlFbmVyZ3koeyBmbG9vciwgcm9vbSB9LCB7XG4gICAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgZG9ybWl0b3J5RW5lcmd5OiByZXQuZGF0YS5lbmVyZ3ksXG4gICAgICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUVuZXJneSc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUVuZXJneSc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaEFsbCgpIHtcbiAgICBjb25zb2xlLmxvZygnZmV0Y2hBbGwnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5mZXRjaENhcmQoKSxcbiAgICAgIHRoaXMuZmV0Y2hMaWJyYXJ5KCksXG4gICAgICB0aGlzLmZldGNoU2NvcmUoKSxcbiAgICAgIHRoaXMuZmV0Y2hEb3JtaXRvcnlIZWFsdGgoKSxcbiAgICAgIHRoaXMuZmV0Y2hEb3JtaXRvcnlFbmVyZ3koKSxcbiAgICBdKTtcbiAgfSxcbn0pO1xuIl19