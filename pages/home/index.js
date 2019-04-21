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
    logout: function () {
        try {
            wx.clearStorageSync();
        }
        catch (e) {
            console.error(e);
        }
        wx.redirectTo({ url: pages_1.default.login });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELDZDQUEyRDtBQUMzRCxtREFBZ0U7QUFDaEUsK0NBQXNEO0FBQ3RELHVEQUFvSDtBQUNwSCwrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBRXhDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDNUIsT0FBTyxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUMvQixLQUFLLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQzdCLGVBQWUsRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDdkMsZUFBZSxFQUFFLHFCQUFhLENBQUMsUUFBUTtTQUN4QztRQUNELE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsZUFBZSxFQUFFLFNBQVM7S0FDM0I7SUFLRCxNQUFNLEVBQU4sVUFBTyxNQUFzQztRQUMzQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0ssaUJBQWlCOzs7Ozs7d0JBRW5CLFdBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBckIsU0FBcUIsQ0FBQzs7O3dCQUV0QixFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7OztLQUU5QjtJQUtELGFBQWE7SUFFYixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxN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VSxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUMzQixJQUFJLENBQUMsb0JBQW9CLEVBQUU7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJO1lBQ0YsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdkI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7UUFDRCxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLGVBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtQXBpU3RhdHVzIH0gZnJvbSAnLi4vLi4vZW51bXMvaW5kZXgnO1xuaW1wb3J0IHsgY29udHJhY3RDYXJkQmFsYW5jZSB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9jYXJkJztcbmltcG9ydCB7IGNvbnRyYWN0TGlicmFyeUJvcnJvdyB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9saWJyYXJ5JztcbmltcG9ydCB7IGNvbnRyYWN0U2NvcmUgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvc2NvcmUnO1xuaW1wb3J0IHsgY29udHJhY3REb3JtaXRvcnlFbmVyZ3ksIGNvbnRyYWN0RG9ybWl0b3J5SGVhbHRoLCBjb250cmFjdERvcm1pdG9yeUluZm8gfSBmcm9tICcuLi8uLi9jb250cmFjdHMvZG9ybWl0b3J5JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IHBhZ2VzIGZyb20gJy4uLy4uL2NvbmZpZ3MvcGFnZXMnO1xuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgc3RhdHVzOiB7XG4gICAgICBjYXJkOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgICAgbGlicmFyeTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIHNjb3JlOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgICAgZG9ybWl0b3J5SGVhbHRoOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgICAgZG9ybWl0b3J5RW5lcmd5OiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0sXG4gICAgYmFsYW5jZTogdW5kZWZpbmVkLFxuICAgIGJvcnJvd051bTogdW5kZWZpbmVkLFxuICAgIHNjb3JlOiB1bmRlZmluZWQsXG4gICAgZG9ybWl0b3J5SGVhbHRoOiB1bmRlZmluZWQsXG4gICAgZG9ybWl0b3J5SGVhbHRoV2VlazogdW5kZWZpbmVkLFxuICAgIGRvcm1pdG9yeUVuZXJneTogdW5kZWZpbmVkLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKF9xdWVyeTogeyBbcXVlcnlLZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5mZXRjaEFsbCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBhc3luYyBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5mZXRjaEFsbCgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKHt9KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+aKveepuuafpeivoicsXG4gICAgICBwYXRoOiBwYWdlcy5ob21lLFxuICAgIH07XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hDYXJkKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RDYXJkQmFsYW5jZSh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGJhbGFuY2U6IHJldC5kYXRhLmJhbGFuY2UsXG4gICAgICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoTGlicmFyeSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMubGlicmFyeSc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGNvbnRyYWN0TGlicmFyeUJvcnJvdyh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGJvcnJvd051bTogcmV0LmRhdGEuaW5mby5sZW5ndGgsXG4gICAgICAgICAgJ3N0YXR1cy5saWJyYXJ5JzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5saWJyYXJ5JzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoU2NvcmUoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLnNjb3JlJzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RTY29yZSh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHNjb3JlOiByZXQuZGF0YS5ncmFkZSxcbiAgICAgICAgICAnc3RhdHVzLnNjb3JlJzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5zY29yZSc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaERvcm1pdG9yeUhlYWx0aCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuZG9ybWl0b3J5SGVhbHRoJzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3REb3JtaXRvcnlIZWFsdGgodW5kZWZpbmVkLCB7XG4gICAgICAgIGF1dG9FcnJvcjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBkb3JtaXRvcnlIZWFsdGg6IHJldC5kYXRhWzBdID8gcmV0LmRhdGFbMF0uc2NvcmUgOiBudWxsLFxuICAgICAgICAgIGRvcm1pdG9yeUhlYWx0aFdlZWs6IHJldC5kYXRhWzBdID8gcmV0LmRhdGFbMF0ud2VlayA6IG51bGwsXG4gICAgICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlIZWFsdGgnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmRvcm1pdG9yeUhlYWx0aCc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaERvcm1pdG9yeUVuZXJneSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuZG9ybWl0b3J5RW5lcmd5JzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBzdG9yYWdlLmdldFVzZXJJbmZvKCk7XG4gICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgeyBmbG9vciwgcm9vbSB9ID0gdXNlckluZm87XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGNvbnRyYWN0RG9ybWl0b3J5RW5lcmd5KHsgZmxvb3IsIHJvb20gfSwge1xuICAgICAgICAgIGF1dG9FcnJvcjogJ25vbmUnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIGRvcm1pdG9yeUVuZXJneTogcmV0LmRhdGEuZW5lcmd5LFxuICAgICAgICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlFbmVyZ3knOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5kb3JtaXRvcnlFbmVyZ3knOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgZmV0Y2hBbGwoKSB7XG4gICAgY29uc29sZS5sb2coJ2ZldGNoQWxsJyk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuZmV0Y2hDYXJkKCksXG4gICAgICB0aGlzLmZldGNoTGlicmFyeSgpLFxuICAgICAgdGhpcy5mZXRjaFNjb3JlKCksXG4gICAgICB0aGlzLmZldGNoRG9ybWl0b3J5SGVhbHRoKCksXG4gICAgICB0aGlzLmZldGNoRG9ybWl0b3J5RW5lcmd5KCksXG4gICAgXSk7XG4gIH0sXG5cbiAgbG9nb3V0KCkge1xuICAgIHRyeSB7XG4gICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gICAgd3gucmVkaXJlY3RUbyh7IHVybDogcGFnZXMubG9naW4gfSk7XG4gIH0sXG59KTtcbiJdfQ==