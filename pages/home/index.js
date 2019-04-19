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
Page({
    data: {
        status: {
            card: index_1.EnumApiStatus.fetching,
            library: index_1.EnumApiStatus.fetching,
            score: index_1.EnumApiStatus.fetching,
        },
        balance: undefined,
        borrowNum: undefined,
        score: undefined,
    },
    onLoad: function (_query) {
        this.fetchCard();
        this.fetchLibrary();
        this.fetchScore();
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJEO0FBQzNELDJDQUFrRDtBQUNsRCxtREFBZ0U7QUFDaEUsK0NBQXNEO0FBRXRELElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxxQkFBYSxDQUFDLFFBQVE7WUFDNUIsT0FBTyxFQUFFLHFCQUFhLENBQUMsUUFBUTtZQUMvQixLQUFLLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1NBQzlCO1FBQ0QsT0FBTyxFQUFFLFNBQVM7UUFDbEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFLRCxNQUFNLEVBQU4sVUFBTyxNQUFzQztRQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBRUssU0FBUyxFQUFmOzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixhQUFhLEVBQUUscUJBQWEsQ0FBQyxRQUFRO3lCQUN0QyxDQUFDLENBQUM7Ozs7d0JBRVcsV0FBTSwwQkFBbUIsQ0FBQyxTQUFTLEVBQUU7Z0NBQy9DLFNBQVMsRUFBRSxNQUFNOzZCQUNsQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7Z0NBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztnQ0FDekIsYUFBYSxFQUFFLHFCQUFhLENBQUMsT0FBTzs2QkFDckMsQ0FBQyxDQUFDO3lCQUNKOzs7O3dCQUVELElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osYUFBYSxFQUFFLHFCQUFhLENBQUMsSUFBSTt5QkFDbEMsQ0FBQyxDQUFDOzs7Ozs7S0FFTjtJQUVLLFlBQVksRUFBbEI7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLGdCQUFnQixFQUFFLHFCQUFhLENBQUMsUUFBUTt5QkFDekMsQ0FBQyxDQUFDOzs7O3dCQUVXLFdBQU0sK0JBQXFCLENBQUMsU0FBUyxFQUFFO2dDQUNqRCxTQUFTLEVBQUUsTUFBTTs2QkFDbEIsQ0FBQyxFQUFBOzt3QkFGSSxHQUFHLEdBQUcsU0FFVjt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTs0QkFDZCxJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dDQUMvQixnQkFBZ0IsRUFBRSxxQkFBYSxDQUFDLE9BQU87NkJBQ3hDLENBQUMsQ0FBQzt5QkFDSjs7Ozt3QkFFRCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLGdCQUFnQixFQUFFLHFCQUFhLENBQUMsSUFBSTt5QkFDckMsQ0FBQyxDQUFDOzs7Ozs7S0FFTjtJQUVLLFVBQVUsRUFBaEI7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLGNBQWMsRUFBRSxxQkFBYSxDQUFDLFFBQVE7eUJBQ3ZDLENBQUMsQ0FBQzs7Ozt3QkFFVyxXQUFNLHFCQUFhLENBQUMsU0FBUyxFQUFFO2dDQUN6QyxTQUFTLEVBQUUsTUFBTTs2QkFDbEIsQ0FBQyxFQUFBOzt3QkFGSSxHQUFHLEdBQUcsU0FFVjt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTs0QkFDZCxJQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0NBQ3JCLGNBQWMsRUFBRSxxQkFBYSxDQUFDLE9BQU87NkJBQ3RDLENBQUMsQ0FBQzt5QkFDSjs7Ozt3QkFFRCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLGNBQWMsRUFBRSxxQkFBYSxDQUFDLElBQUk7eUJBQ25DLENBQUMsQ0FBQzs7Ozs7O0tBRU47Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250cmFjdENhcmRCYWxhbmNlIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL2NhcmQnO1xuaW1wb3J0IHsgRW51bUFwaVN0YXR1cyB9IGZyb20gJy4uLy4uL2VudW1zL2luZGV4JztcbmltcG9ydCB7IGNvbnRyYWN0TGlicmFyeUJvcnJvdyB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9saWJyYXJ5JztcbmltcG9ydCB7IGNvbnRyYWN0U2NvcmUgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvc2NvcmUnO1xuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgc3RhdHVzOiB7XG4gICAgICBjYXJkOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgICAgbGlicmFyeTogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICAgIHNjb3JlOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0sXG4gICAgYmFsYW5jZTogdW5kZWZpbmVkLFxuICAgIGJvcnJvd051bTogdW5kZWZpbmVkLFxuICAgIHNjb3JlOiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoX3F1ZXJ5OiB7IFtxdWVyeUtleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLmZldGNoQ2FyZCgpO1xuICAgIHRoaXMuZmV0Y2hMaWJyYXJ5KCk7XG4gICAgdGhpcy5mZXRjaFNjb3JlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIGFzeW5jIGZldGNoQ2FyZCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICdzdGF0dXMuY2FyZCc6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGNvbnRyYWN0Q2FyZEJhbGFuY2UodW5kZWZpbmVkLCB7XG4gICAgICAgIGF1dG9FcnJvcjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYmFsYW5jZTogcmV0LmRhdGEuYmFsYW5jZSxcbiAgICAgICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hMaWJyYXJ5KCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgJ3N0YXR1cy5saWJyYXJ5JzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RMaWJyYXJ5Qm9ycm93KHVuZGVmaW5lZCwge1xuICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmV0KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGJvcnJvd051bTogcmV0LmRhdGEuaW5mby5sZW5ndGgsXG4gICAgICAgICAgJ3N0YXR1cy5saWJyYXJ5JzogRW51bUFwaVN0YXR1cy5zdWNjZXNzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgJ3N0YXR1cy5saWJyYXJ5JzogRW51bUFwaVN0YXR1cy5mYWlsLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGZldGNoU2NvcmUoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLnNjb3JlJzogRW51bUFwaVN0YXR1cy5mZXRjaGluZyxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RTY29yZSh1bmRlZmluZWQsIHtcbiAgICAgICAgYXV0b0Vycm9yOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJldCk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBzY29yZTogcmV0LmRhdGEuZ3JhZGUsXG4gICAgICAgICAgJ3N0YXR1cy5zY29yZSc6IEVudW1BcGlTdGF0dXMuc3VjY2VzcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICdzdGF0dXMuc2NvcmUnOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==