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
var loadingTexts = ['请稍候', '正在绑定', '等待服务器', '一等', '努力请求中'];
Page({
    data: {
        username: '',
        password: '',
        loading: false,
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
                            username: userId,
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
    onUsernameChange: function (e) {
        this.setData({
            username: e.detail.value,
        });
    },
    onPasswordChange: function (e) {
        this.setData({
            password: e.detail.value,
        });
    },
    onSubmit: function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingText, success, ret, token, infoRet, _a, name, department, floor, room;
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
                                username: this.data.username,
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
                        return [4, storage_1.default.setUserId(this.data.username)];
                    case 5:
                        _b.sent();
                        return [4, storage_1.default.setPassword(this.data.password)];
                    case 6:
                        _b.sent();
                        return [4, user_1.contractUserInfo()];
                    case 7:
                        infoRet = _b.sent();
                        if (!!infoRet.error) return [3, 9];
                        _a = infoRet.data, name = _a.name, department = _a.department, floor = _a.floor, room = _a.room;
                        return [4, storage_1.default.setUserInfo({ name: name, department: department, floor: floor, room: room })];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJFO0FBQzNFLDZDQUF3QztBQUN4QyxpREFBbUQ7QUFDbkQsK0NBQTBDO0FBRTFDLElBQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRTdELElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsS0FBSztLQUNmO0lBS0ssTUFBTSxFQUFaLFVBQWEsTUFBc0M7Ozs7Ozs7d0JBRWhDLFdBQU0saUJBQU8sQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxDQUFBLFNBQXlCLEtBQUksRUFBRTt3QkFDN0IsV0FBTSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBdEMsUUFBUSxHQUFHLENBQUEsU0FBMkIsS0FBSSxFQUFFO3dCQUNsRCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLFFBQVEsRUFBRSxNQUFNOzRCQUNoQixRQUFRLFVBQUE7eUJBQ1QsQ0FBQyxDQUFDO3dCQUNILElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTs0QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNqQjs7Ozt3QkFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFcEI7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0Qs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Y29udHJhY3RVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9jb250cmFjdHMvdXNlcic7XG5pbXBvcnQgcGFnZXMgZnJvbSAnLi4vLi4vY29uZmlncy9wYWdlcyc7XG5pbXBvcnQgZ2VuZXJhbENvbmZpZ3MgZnJvbSAnLi4vLi4vY29uZmlncy9nZW5lcmFsJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuXG5jb25zdCBsb2FkaW5nVGV4dHMgPSBbJ+ivt+eojeWAmScsICfmraPlnKjnu5HlrponLCAn562J5b6F5pyN5Yqh5ZmoJywgJ+S4gOetiScsICfliqrlipvor7fmsYLkuK0nXTtcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBhc3luYyBvbkxvYWQoX3F1ZXJ5OiB7IFtxdWVyeUtleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgc3RvcmFnZS5nZXRVc2VySWQoKSB8fCAnJztcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gYXdhaXQgc3RvcmFnZS5nZXRQYXNzd29yZCgpIHx8ICcnO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VySWQsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBpZiAodXNlcklkICYmIHBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhdXRvIGxvZ2luJyk7XG4gICAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgb25Vc2VybmFtZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VybmFtZTogZS5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25QYXNzd29yZENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwYXNzd29yZDogZS5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gbG9hZGluZ1RleHRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxvYWRpbmdUZXh0cy5sZW5ndGgpXTtcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogbG9hZGluZ1RleHQsXG4gICAgfSk7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RVc2VyVG9rZW4oe1xuICAgICAgICB1c2VybmFtZTogdGhpcy5kYXRhLnVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5kYXRhLnBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJldC5kYXRhLnRva2VuO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldFRva2VuKHRva2VuKTtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXRUb2tlbkV4cGlyZXMoYCR7RGF0ZS5ub3coKSArIGdlbmVyYWxDb25maWdzLnRva2VuTGlmZXRpbWV9YCk7XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0VXNlcklkKHRoaXMuZGF0YS51c2VybmFtZSk7XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0UGFzc3dvcmQodGhpcy5kYXRhLnBhc3N3b3JkKTtcbiAgICAgICAgLy8g6K+35rGC55So5oi35L+h5oGvXG4gICAgICAgIGNvbnN0IGluZm9SZXQgPSBhd2FpdCBjb250cmFjdFVzZXJJbmZvKCk7XG4gICAgICAgIGlmICghaW5mb1JldC5lcnJvcikge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZGVwYXJ0bWVudCwgZmxvb3IsIHJvb20gfSA9IGluZm9SZXQuZGF0YTtcbiAgICAgICAgICBhd2FpdCBzdG9yYWdlLnNldFVzZXJJbmZvKHsgbmFtZSwgZGVwYXJ0bWVudCwgZmxvb3IsIHJvb20gfSk7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XG4gICAgfVxuXG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn57uR5a6a5oiQ5YqfJyxcbiAgICAgIH0pO1xuICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogcGFnZXMuaG9tZSB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==