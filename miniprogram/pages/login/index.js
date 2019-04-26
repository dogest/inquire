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
var user_1 = require("../../contracts/user");
var pages_1 = require("../../configs/pages");
var general_1 = require("../../configs/general");
var storage_1 = require("../../utils/storage");
var loadingTexts = ['请稍候', '正在绑定', '等待服务器', '一等', '努力请求中', '拼命请求中', '抽空请求中'];
Page({
    data: {
        userId: '',
        password: '',
        loading: false,
        licenseUrl: pages_1.default.license,
        helpUrl: pages_1.default.help,
    },
    onLoad: function (_query) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, password, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, storage_1.default.getUserId()];
                    case 1:
                        userId = (_a.sent()) || '';
                        return [4, storage_1.default.getPassword()];
                    case 2:
                        password = (_a.sent()) || '';
                        this.setData({
                            userId: userId,
                            password: password,
                        });
                        if (userId && password) {
                            console.log('auto login');
                            this.onSubmit();
                        }
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
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
    onUserIdChange: function (e) {
        this.setData({
            userId: e.detail.value,
        });
    },
    onPasswordChange: function (e) {
        this.setData({
            password: e.detail.value,
        });
    },
    onSubmit: function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingText, success, ret, token, infoRet, _a, name_1, department, floor, room;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setData({
                            loading: true,
                        });
                        loadingText = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
                        wx.showLoading({
                            title: loadingText,
                        });
                        success = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 10, 11]);
                        return [4, user_1.contractUserToken({
                                userid: this.data.userId,
                                password: this.data.password,
                            })];
                    case 2:
                        ret = _b.sent();
                        if (!!ret.error) return [3, 9];
                        token = ret.data.token;
                        return [4, storage_1.default.setToken(token)];
                    case 3:
                        _b.sent();
                        return [4, storage_1.default.setTokenExpires("" + (Date.now() + general_1.default.tokenLifetime))];
                    case 4:
                        _b.sent();
                        return [4, storage_1.default.setUserId(this.data.userId)];
                    case 5:
                        _b.sent();
                        return [4, storage_1.default.setPassword(this.data.password)];
                    case 6:
                        _b.sent();
                        return [4, user_1.contractUserInfo()];
                    case 7:
                        infoRet = _b.sent();
                        if (!!infoRet.error) return [3, 9];
                        _a = infoRet.data, name_1 = _a.name, department = _a.department, floor = _a.floor, room = _a.room;
                        return [4, storage_1.default.setUserInfo({ name: name_1, department: department, floor: floor, room: room })];
                    case 8:
                        _b.sent();
                        success = true;
                        _b.label = 9;
                    case 9: return [3, 11];
                    case 10:
                        this.setData({
                            loading: false,
                        });
                        wx.hideLoading({});
                        return [7];
                    case 11:
                        if (success) {
                            wx.showToast({
                                title: '绑定成功',
                            });
                            wx.redirectTo({ url: pages_1.default.home });
                        }
                        return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJFO0FBQzNFLDZDQUF3QztBQUN4QyxpREFBbUQ7QUFDbkQsK0NBQTBDO0FBRTFDLElBQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFL0UsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFLGVBQUssQ0FBQyxPQUFPO1FBQ3pCLE9BQU8sRUFBRSxlQUFLLENBQUMsSUFBSTtLQUNwQjtJQUtLLE1BQU0sRUFBWixVQUFhLE1BQXNDOzs7Ozs7O3dCQUVoQyxXQUFNLGlCQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsQ0FBQSxTQUF5QixLQUFJLEVBQUU7d0JBQzdCLFdBQU0saUJBQU8sQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXRDLFFBQVEsR0FBRyxDQUFBLFNBQTJCLEtBQUksRUFBRTt3QkFDbEQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixNQUFNLFFBQUE7NEJBQ04sUUFBUSxVQUFBO3lCQUNULENBQUMsQ0FBQzt3QkFDSCxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUU7NEJBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDakI7Ozs7d0JBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRXBCO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBRUQsY0FBYyxFQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUssUUFBUSxFQUFkOzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixPQUFPLEVBQUUsSUFBSTt5QkFDZCxDQUFDLENBQUM7d0JBQ0csV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDbEYsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0QkFDYixLQUFLLEVBQUUsV0FBVzt5QkFDbkIsQ0FBQyxDQUFDO3dCQUNDLE9BQU8sR0FBRyxLQUFLLENBQUM7Ozs7d0JBRU4sV0FBTSx3QkFBaUIsQ0FBQztnQ0FDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQ0FDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTs2QkFDN0IsQ0FBQyxFQUFBOzt3QkFISSxHQUFHLEdBQUcsU0FHVjs2QkFDRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQVYsY0FBVTt3QkFDTixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQzdCLFdBQU0saUJBQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixXQUFNLGlCQUFPLENBQUMsZUFBZSxDQUFDLE1BQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGlCQUFjLENBQUMsYUFBYSxDQUFFLENBQUMsRUFBQTs7d0JBQTdFLFNBQTZFLENBQUM7d0JBQzlFLFdBQU0saUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQXpDLFNBQXlDLENBQUM7d0JBQzFDLFdBQU0saUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTdDLFNBQTZDLENBQUM7d0JBRTlCLFdBQU0sdUJBQWdCLEVBQUUsRUFBQTs7d0JBQWxDLE9BQU8sR0FBRyxTQUF3Qjs2QkFDcEMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFkLGNBQWM7d0JBQ1YsS0FBb0MsT0FBTyxDQUFDLElBQUksRUFBOUMsZ0JBQUksRUFBRSxVQUFVLGdCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsSUFBSSxVQUFBLENBQWtCO3dCQUN2RCxXQUFNLGlCQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxRQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxFQUFBOzt3QkFBNUQsU0FBNEQsQ0FBQzt3QkFDN0QsT0FBTyxHQUFHLElBQUksQ0FBQzs7Ozt3QkFJbkIsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixPQUFPLEVBQUUsS0FBSzt5QkFDZixDQUFDLENBQUM7d0JBQ0gsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O3dCQUdyQixJQUFJLE9BQU8sRUFBRTs0QkFDWCxFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxNQUFNOzZCQUNkLENBQUMsQ0FBQzs0QkFDSCxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3lCQUNwQzs7Ozs7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRyYWN0VXNlckluZm8sIGNvbnRyYWN0VXNlclRva2VuIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL3VzZXInO1xuaW1wb3J0IHBhZ2VzIGZyb20gJy4uLy4uL2NvbmZpZ3MvcGFnZXMnO1xuaW1wb3J0IGdlbmVyYWxDb25maWdzIGZyb20gJy4uLy4uL2NvbmZpZ3MvZ2VuZXJhbCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi91dGlscy9zdG9yYWdlJztcblxuY29uc3QgbG9hZGluZ1RleHRzID0gWyfor7fnqI3lgJknLCAn5q2j5Zyo57uR5a6aJywgJ+etieW+heacjeWKoeWZqCcsICfkuIDnrYknLCAn5Yqq5Yqb6K+35rGC5LitJywgJ+aLvOWRveivt+axguS4rScsICfmir3nqbror7fmsYLkuK0nXTtcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHVzZXJJZDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGxpY2Vuc2VVcmw6IHBhZ2VzLmxpY2Vuc2UsXG4gICAgaGVscFVybDogcGFnZXMuaGVscCxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIGFzeW5jIG9uTG9hZChfcXVlcnk6IHsgW3F1ZXJ5S2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBzdG9yYWdlLmdldFVzZXJJZCgpIHx8ICcnO1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSBhd2FpdCBzdG9yYWdlLmdldFBhc3N3b3JkKCkgfHwgJyc7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHVzZXJJZCAmJiBwYXNzd29yZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYXV0byBsb2dpbicpO1xuICAgICAgICB0aGlzLm9uU3VibWl0KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIG9uVXNlcklkQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJZDogZS5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25QYXNzd29yZENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwYXNzd29yZDogZS5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gbG9hZGluZ1RleHRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxvYWRpbmdUZXh0cy5sZW5ndGgpXTtcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogbG9hZGluZ1RleHQsXG4gICAgfSk7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RVc2VyVG9rZW4oe1xuICAgICAgICB1c2VyaWQ6IHRoaXMuZGF0YS51c2VySWQsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLmRhdGEucGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gcmV0LmRhdGEudG9rZW47XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldFRva2VuRXhwaXJlcyhgJHtEYXRlLm5vdygpICsgZ2VuZXJhbENvbmZpZ3MudG9rZW5MaWZldGltZX1gKTtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXRVc2VySWQodGhpcy5kYXRhLnVzZXJJZCk7XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0UGFzc3dvcmQodGhpcy5kYXRhLnBhc3N3b3JkKTtcbiAgICAgICAgLy8g6K+35rGC55So5oi35L+h5oGvXG4gICAgICAgIGNvbnN0IGluZm9SZXQgPSBhd2FpdCBjb250cmFjdFVzZXJJbmZvKCk7XG4gICAgICAgIGlmICghaW5mb1JldC5lcnJvcikge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZGVwYXJ0bWVudCwgZmxvb3IsIHJvb20gfSA9IGluZm9SZXQuZGF0YTtcbiAgICAgICAgICBhd2FpdCBzdG9yYWdlLnNldFVzZXJJbmZvKHsgbmFtZSwgZGVwYXJ0bWVudCwgZmxvb3IsIHJvb20gfSk7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XG4gICAgfVxuXG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn57uR5a6a5oiQ5YqfJyxcbiAgICAgIH0pO1xuICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogcGFnZXMuaG9tZSB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==