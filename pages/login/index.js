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
Page({
    data: {
        username: '',
        password: '',
    },
    onLoad: function (_query) {
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
            var ret, token, infoRet, _a, name, department, floor, room;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, user_1.contractUserToken({
                            username: this.data.username,
                            password: this.data.password,
                        })];
                    case 1:
                        ret = _b.sent();
                        console.log(ret);
                        if (!!ret.error) return [3, 9];
                        token = ret.data.token;
                        return [4, storage_1.default.setToken(token)];
                    case 2:
                        _b.sent();
                        return [4, storage_1.default.setTokenExpires("" + (Date.now() + general_1.default.tokenLifetime))];
                    case 3:
                        _b.sent();
                        return [4, storage_1.default.setUserId(this.data.username)];
                    case 4:
                        _b.sent();
                        return [4, storage_1.default.setPassword(this.data.password)];
                    case 5:
                        _b.sent();
                        return [4, user_1.contractUserInfo()];
                    case 6:
                        infoRet = _b.sent();
                        if (!!infoRet.error) return [3, 8];
                        _a = infoRet.data, name = _a.name, department = _a.department, floor = _a.floor, room = _a.room;
                        return [4, storage_1.default.setUserInfo({ name: name, department: department, floor: floor, room: room })];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        wx.showToast({
                            title: '绑定成功',
                        });
                        wx.redirectTo({ url: pages_1.default.home });
                        _b.label = 9;
                    case 9: return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJFO0FBQzNFLDZDQUF3QztBQUN4QyxpREFBbUQ7QUFDbkQsK0NBQTBDO0FBRTFDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUtELE1BQU0sRUFBTixVQUFPLE1BQXNDO0lBQzdDLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLEVBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVLLFFBQVE7Ozs7OzRCQUNBLFdBQU0sd0JBQWlCLENBQUM7NEJBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7NEJBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7eUJBQzdCLENBQUMsRUFBQTs7d0JBSEksR0FBRyxHQUFHLFNBR1Y7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFDYixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQVYsY0FBVTt3QkFDTixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQzdCLFdBQU0saUJBQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixXQUFNLGlCQUFPLENBQUMsZUFBZSxDQUFDLE1BQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGlCQUFjLENBQUMsYUFBYSxDQUFFLENBQUMsRUFBQTs7d0JBQTdFLFNBQTZFLENBQUM7d0JBQzlFLFdBQU0saUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTNDLFNBQTJDLENBQUM7d0JBQzVDLFdBQU0saUJBQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTdDLFNBQTZDLENBQUM7d0JBRTlCLFdBQU0sdUJBQWdCLEVBQUUsRUFBQTs7d0JBQWxDLE9BQU8sR0FBRyxTQUF3Qjs2QkFDcEMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFkLGNBQWM7d0JBQ1YsS0FBb0MsT0FBTyxDQUFDLElBQUksRUFBOUMsSUFBSSxVQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLElBQUksVUFBQSxDQUFrQjt3QkFDdkQsV0FBTSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsRUFBQTs7d0JBQTVELFNBQTRELENBQUM7Ozt3QkFFL0QsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsTUFBTTt5QkFDZCxDQUFDLENBQUM7d0JBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozs7O0tBRXRDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udHJhY3RVc2VySW5mbywgY29udHJhY3RVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9jb250cmFjdHMvdXNlcic7XG5pbXBvcnQgcGFnZXMgZnJvbSAnLi4vLi4vY29uZmlncy9wYWdlcyc7XG5pbXBvcnQgZ2VuZXJhbENvbmZpZ3MgZnJvbSAnLi4vLi4vY29uZmlncy9nZW5lcmFsJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZChfcXVlcnk6IHsgW3F1ZXJ5S2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICBvblVzZXJuYW1lQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJuYW1lOiBlLmRldGFpbC52YWx1ZSxcbiAgICB9KTtcbiAgfSxcblxuICBvblBhc3N3b3JkQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBhc3N3b3JkOiBlLmRldGFpbC52YWx1ZSxcbiAgICB9KTtcbiAgfSxcblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdFVzZXJUb2tlbih7XG4gICAgICB1c2VybmFtZTogdGhpcy5kYXRhLnVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuZGF0YS5wYXNzd29yZCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHJldC5kYXRhLnRva2VuO1xuICAgICAgYXdhaXQgc3RvcmFnZS5zZXRUb2tlbih0b2tlbik7XG4gICAgICBhd2FpdCBzdG9yYWdlLnNldFRva2VuRXhwaXJlcyhgJHtEYXRlLm5vdygpICsgZ2VuZXJhbENvbmZpZ3MudG9rZW5MaWZldGltZX1gKTtcbiAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0VXNlcklkKHRoaXMuZGF0YS51c2VybmFtZSk7XG4gICAgICBhd2FpdCBzdG9yYWdlLnNldFBhc3N3b3JkKHRoaXMuZGF0YS5wYXNzd29yZCk7XG4gICAgICAvLyDor7fmsYLnlKjmiLfkv6Hmga9cbiAgICAgIGNvbnN0IGluZm9SZXQgPSBhd2FpdCBjb250cmFjdFVzZXJJbmZvKCk7XG4gICAgICBpZiAoIWluZm9SZXQuZXJyb3IpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBkZXBhcnRtZW50LCBmbG9vciwgcm9vbSB9ID0gaW5mb1JldC5kYXRhO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldFVzZXJJbmZvKHsgbmFtZSwgZGVwYXJ0bWVudCwgZmxvb3IsIHJvb20gfSk7XG4gICAgICB9XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+e7keWumuaIkOWKnycsXG4gICAgICB9KTtcbiAgICAgIHd4LnJlZGlyZWN0VG8oeyB1cmw6IHBhZ2VzLmhvbWUgfSk7XG4gICAgfVxuICB9LFxufSk7XG4iXX0=