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
            dormitory: index_1.EnumApiStatus.fetching,
        },
        balance: undefined,
        borrowNum: undefined,
        score: undefined,
        dormitoryScore: undefined,
        dormitoryScoreWeek: undefined,
    },
    onLoad: function (_query) {
        this.fetchCard();
        this.fetchLibrary();
        this.fetchScore();
        this.fetchDormitoryHealth();
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
                            'status.dormitory': index_1.EnumApiStatus.fetching,
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
                                dormitoryScore: ret.data[0] ? ret.data[0].score : null,
                                dormitoryScoreWeek: ret.data[0] ? ret.data[0].week : null,
                                'status.dormitory': index_1.EnumApiStatus.success,
                            });
                        }
                        return [3, 4];
                    case 3:
                        e_4 = _a.sent();
                        this.setData({
                            'status.dormitory': index_1.EnumApiStatus.fail,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJEO0FBQzNELDJDQUFrRDtBQUNsRCxtREFBZ0U7QUFDaEUsK0NBQXNEO0FBQ3RELHVEQUFvRTtBQUVwRSxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1lBQzVCLE9BQU8sRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDL0IsS0FBSyxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUM3QixTQUFTLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1NBQ2xDO1FBQ0QsT0FBTyxFQUFFLFNBQVM7UUFDbEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsY0FBYyxFQUFFLFNBQVM7UUFDekIsa0JBQWtCLEVBQUUsU0FBUztLQUM5QjtJQUtELE1BQU0sRUFBTixVQUFPLE1BQXNDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFFSyxTQUFTLEVBQWY7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLGFBQWEsRUFBRSxxQkFBYSxDQUFDLFFBQVE7eUJBQ3RDLENBQUMsQ0FBQzs7Ozt3QkFFVyxXQUFNLDBCQUFtQixDQUFDLFNBQVMsRUFB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QyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtnQ0FDekQsa0JBQWtCLEVBQUUscUJBQWEsQ0FBQyxPQUFPOzZCQUMxQyxDQUFDLENBQUM7eUJBQ0o7Ozs7d0JBRUQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixrQkFBa0IsRUFBRSxxQkFBYSxDQUFDLElBQUk7eUJBQ3ZDLENBQUMsQ0FBQzs7Ozs7O0tBRU47Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250cmFjdENhcmRCYWxhbmNlIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL2NhcmQnO1xuaW1wb3J0IHsgRW51bUFwaVN0YXR1cyB9IGZyb20gJy4uLy4uL2VudW1zL2luZGV4JztcbmltcG9ydCB7IGNvbnRyYWN0TGlicmFyeUJvcnJvdyB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9saWJyYXJ5JztcbmltcG9ydCB7IGNvbnRyYWN0U2NvcmUgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvc2NvcmUnO1xuaW1wb3J0IHsgY29udHJhY3REb3JtaXRvcnlIZWFsdGggfSBmcm9tICcuLi8uLi9jb250cmFjdHMvZG9ybWl0b3J5JztcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHN0YXR1czoge1xuICAgICAgY2FyZDogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGxpYnJhcnk6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgICBzY29yZTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIGRvcm1pdG9yeTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9LFxuICAgIGJhbGFuY2U6IHVuZGVmaW5lZCxcbiAgICBib3Jyb3dOdW06IHVuZGVmaW5lZCxcbiAgICBzY29yZTogdW5kZWZpbmVkLFxuICAgIGRvcm1pdG9yeVNjb3JlOiB1bmRlZmluZWQsXG4gICAgZG9ybWl0b3J5U2NvcmVXZWVrOiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoX3F1ZXJ5OiB7IFtxdWVyeUtleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLmZldGNoQ2FyZCgpO1xuICAgIHRoaXMuZmV0Y2hMaWJyYXJ5KCk7XG4gICAgdGhpcy5mZXRjaFNjb3JlKCk7XG4gICAgdGhpcy5mZXRjaERvcm1pdG9yeUhlYWx0aCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICBhc3luYyBmZXRjaENhcmQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdENhcmRCYWxhbmNlKHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmV0KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGJhbGFuY2U6IHJldC5kYXRhLmJhbGFuY2UsXG4gICAgICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5jYXJkJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoTGlicmFyeSgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMubGlicmFyeSc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGNvbnRyYWN0TGlicmFyeUJvcnJvdyh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJldCk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBib3Jyb3dOdW06IHJldC5kYXRhLmluZm8ubGVuZ3RoLFxuICAgICAgICAgICdzdGF0dXMubGlicmFyeSc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICdzdGF0dXMubGlicmFyeSc6IEVudW1BcGlTdGF0dXMuZmFpbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBmZXRjaFNjb3JlKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5zY29yZSc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGNvbnRyYWN0U2NvcmUodW5kZWZpbmVkLCB7XG4gICAgICAgIGF1dG9FcnJvcjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgc2NvcmU6IHJldC5kYXRhLmdyYWRlLFxuICAgICAgICAgICdzdGF0dXMuc2NvcmUnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLnNjb3JlJzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoRG9ybWl0b3J5SGVhbHRoKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5kb3JtaXRvcnknOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdERvcm1pdG9yeUhlYWx0aCh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJldCk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBkb3JtaXRvcnlTY29yZTogcmV0LmRhdGFbMF0gPyByZXQuZGF0YVswXS5zY29yZSA6IG51bGwsXG4gICAgICAgICAgZG9ybWl0b3J5U2NvcmVXZWVrOiByZXQuZGF0YVswXSA/IHJldC5kYXRhWzBdLndlZWsgOiBudWxsLFxuICAgICAgICAgICdzdGF0dXMuZG9ybWl0b3J5JzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5kb3JtaXRvcnknOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==