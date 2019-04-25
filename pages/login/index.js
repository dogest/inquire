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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJFO0FBQzNFLDZDQUF3QztBQUN4QyxpREFBbUQ7QUFDbkQsK0NBQTBDO0FBRTFDLElBQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFL0UsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFLGVBQUssQ0FBQyxPQUFPO1FBQ3pCLE9BQU8sRUFBRSxlQUFLLENBQUMsSUFBSTtLQUNwQjtJQUtLLE1BQU0sRUFBWixVQUFhLE1BQXNDOzs7Ozs7O3dCQUVoQyxXQUFNLGlCQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsQ0FBQSxTQUF5QixLQUFJLEVBQUU7d0JBQzdCLFdBQU0saUJBQU8sQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXRDLFFBQVEsR0FBRyxDQUFBLFNBQTJCLEtBQUksRUFBRTt3QkFDbEQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixNQUFNLFFBQUE7NEJBQ04sUUFBUSxVQUFBO3lCQUNULENBQUMsQ0FBQzt3QkFDSCxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUU7NEJBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDakI7Ozs7d0JBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRXBCO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBRUQsY0FBYyxFQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUssUUFBUSxFQUFkOzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixPQUFPLEVBQUUsSUFBSTt5QkFDZCxDQUFDLENBQUM7d0JBQ0csV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDbEYsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0QkFDYixLQUFLLEVBQUUsV0FBVzt5QkFDbkIsQ0FBQyxDQUFDO3dCQUNDLE9BQU8sR0FBRyxLQUFLLENBQUM7Ozs7d0JBRU4sV0FBTSx3QkFBaUIsQ0FBQztnQ0FDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQ0FDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTs2QkFDN0IsQ0FBQyxFQUFBOzt3QkFISSxHQUFHLEdBQUcsU0FHVjs2QkFDRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQVYsY0FBVTt3QkFDTixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQzdCLFdBQU0saUJBQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixXQUFNLGlCQUFPLENBQUMsZUFBZSxDQUFDLE1BQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGlCQUFjLENBQUMsYUFBYSxDQUFFLENBQUMsRUFBQTs7d0JBQTdFLFNBQTZFLENBQUM7d0JBQzlFLFdBQU0saUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQXpDLFNBQXlDLENBQUM7d0JBQzFDLFdBQU0saUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTdDLFNBQTZDLENBQUM7d0JBRTlCLFdBQU0sdUJBQWdCLEVBQUUsRUFBQTs7d0JBQWxDLE9BQU8sR0FBRyxTQUF3Qjs2QkFDcEMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFkLGNBQWM7d0JBQ1YsS0FBb0MsT0FBTyxDQUFDLElBQUksRUFBOUMsSUFBSSxVQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLElBQUksVUFBQSxDQUFrQjt3QkFDdkQsV0FBTSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsRUFBQTs7d0JBQTVELFNBQTRELENBQUM7d0JBQzdELE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7d0JBSW5CLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osT0FBTyxFQUFFLEtBQUs7eUJBQ2YsQ0FBQyxDQUFDO3dCQUNILEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7Ozt3QkFHckIsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsTUFBTTs2QkFDZCxDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt5QkFDcEM7Ozs7O0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250cmFjdFVzZXJJbmZvLCBjb250cmFjdFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy91c2VyJztcbmltcG9ydCBwYWdlcyBmcm9tICcuLi8uLi9jb25maWdzL3BhZ2VzJztcbmltcG9ydCBnZW5lcmFsQ29uZmlncyBmcm9tICcuLi8uLi9jb25maWdzL2dlbmVyYWwnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vdXRpbHMvc3RvcmFnZSc7XG5cbmNvbnN0IGxvYWRpbmdUZXh0cyA9IFsn6K+356iN5YCZJywgJ+ato+WcqOe7keWumicsICfnrYnlvoXmnI3liqHlmagnLCAn5LiA562JJywgJ+WKquWKm+ivt+axguS4rScsICfmi7zlkb3or7fmsYLkuK0nLCAn5oq956m66K+35rGC5LitJ107XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB1c2VySWQ6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBsaWNlbnNlVXJsOiBwYWdlcy5saWNlbnNlLFxuICAgIGhlbHBVcmw6IHBhZ2VzLmhlbHAsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBhc3luYyBvbkxvYWQoX3F1ZXJ5OiB7IFtxdWVyeUtleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgc3RvcmFnZS5nZXRVc2VySWQoKSB8fCAnJztcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gYXdhaXQgc3RvcmFnZS5nZXRQYXNzd29yZCgpIHx8ICcnO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGlmICh1c2VySWQgJiYgcGFzc3dvcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2F1dG8gbG9naW4nKTtcbiAgICAgICAgdGhpcy5vblN1Ym1pdCgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICBvblVzZXJJZENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySWQ6IGUuZGV0YWlsLnZhbHVlLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uUGFzc3dvcmRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcGFzc3dvcmQ6IGUuZGV0YWlsLnZhbHVlLFxuICAgIH0pO1xuICB9LFxuXG4gIGFzeW5jIG9uU3VibWl0KCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IGxvYWRpbmdUZXh0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsb2FkaW5nVGV4dHMubGVuZ3RoKV07XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6IGxvYWRpbmdUZXh0LFxuICAgIH0pO1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGNvbnRyYWN0VXNlclRva2VuKHtcbiAgICAgICAgdXNlcmlkOiB0aGlzLmRhdGEudXNlcklkLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5kYXRhLnBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJldC5kYXRhLnRva2VuO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldFRva2VuKHRva2VuKTtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXRUb2tlbkV4cGlyZXMoYCR7RGF0ZS5ub3coKSArIGdlbmVyYWxDb25maWdzLnRva2VuTGlmZXRpbWV9YCk7XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0VXNlcklkKHRoaXMuZGF0YS51c2VySWQpO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldFBhc3N3b3JkKHRoaXMuZGF0YS5wYXNzd29yZCk7XG4gICAgICAgIC8vIOivt+axgueUqOaIt+S/oeaBr1xuICAgICAgICBjb25zdCBpbmZvUmV0ID0gYXdhaXQgY29udHJhY3RVc2VySW5mbygpO1xuICAgICAgICBpZiAoIWluZm9SZXQuZXJyb3IpIHtcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIGRlcGFydG1lbnQsIGZsb29yLCByb29tIH0gPSBpbmZvUmV0LmRhdGE7XG4gICAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXRVc2VySW5mbyh7IG5hbWUsIGRlcGFydG1lbnQsIGZsb29yLCByb29tIH0pO1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xuICAgIH1cblxuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+e7keWumuaIkOWKnycsXG4gICAgICB9KTtcbiAgICAgIHd4LnJlZGlyZWN0VG8oeyB1cmw6IHBhZ2VzLmhvbWUgfSk7XG4gICAgfVxuICB9LFxufSk7XG4iXX0=