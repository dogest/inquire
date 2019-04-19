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
var storages_1 = require("../../configs/storages");
var user_1 = require("../../contracts/user");
var pages_1 = require("../../configs/pages");
var general_1 = require("../../configs/general");
Page({
    data: {
        username: '',
        password: '',
    },
    onLoad: function (_query) {
        var token = wx.getStorageSync(storages_1.default.token);
        if (token) {
        }
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
            var ret, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, user_1.contractUserToken({
                            username: this.data.username,
                            password: this.data.password,
                        })];
                    case 1:
                        ret = _a.sent();
                        console.log(ret);
                        if (!ret.error) {
                            token = ret.data.token;
                            wx.setStorage({
                                key: storages_1.default.token,
                                data: token,
                            });
                            wx.setStorage({
                                key: storages_1.default.tokenExpires,
                                data: "" + (Date.now() + general_1.default.tokenLifetime),
                            });
                            wx.setStorage({
                                key: storages_1.default.userId,
                                data: this.data.username,
                            });
                            wx.setStorage({
                                key: storages_1.default.password,
                                data: this.data.password,
                            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWdEO0FBQ2hELDZDQUF5RDtBQUN6RCw2Q0FBd0M7QUFDeEMsaURBQW1EO0FBRW5ELElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUtELE1BQU0sRUFBTixVQUFPLE1BQXNDO1FBQzNDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLEtBQUssRUFBRTtTQUVWO0lBQ0gsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUVELGdCQUFnQixFQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUssUUFBUTs7Ozs7NEJBQ0EsV0FBTSx3QkFBaUIsQ0FBQzs0QkFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTs0QkFDNUIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTt5QkFDN0IsQ0FBQyxFQUFBOzt3QkFISSxHQUFHLEdBQUcsU0FHVjt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTs0QkFDUixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7NEJBQzdCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLGtCQUFVLENBQUMsS0FBSztnQ0FDckIsSUFBSSxFQUFFLEtBQUs7NkJBQ1osQ0FBQyxDQUFDOzRCQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLGtCQUFVLENBQUMsWUFBWTtnQ0FDNUIsSUFBSSxFQUFFLE1BQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGlCQUFjLENBQUMsYUFBYSxDQUFFOzZCQUNyRCxDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsa0JBQVUsQ0FBQyxNQUFNO2dDQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFROzZCQUN6QixDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsa0JBQVUsQ0FBQyxRQUFRO2dDQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFROzZCQUN6QixDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsTUFBTTs2QkFDZCxDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt5QkFDcEM7Ozs7O0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmFnZUtleSBmcm9tICcuLi8uLi9jb25maWdzL3N0b3JhZ2VzJztcbmltcG9ydCB7IGNvbnRyYWN0VXNlclRva2VuIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL3VzZXInO1xuaW1wb3J0IHBhZ2VzIGZyb20gJy4uLy4uL2NvbmZpZ3MvcGFnZXMnO1xuaW1wb3J0IGdlbmVyYWxDb25maWdzIGZyb20gJy4uLy4uL2NvbmZpZ3MvZ2VuZXJhbCc7XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKF9xdWVyeTogeyBbcXVlcnlLZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5LnRva2VuKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIC8vIG9rXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICBvblVzZXJuYW1lQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJuYW1lOiBlLmRldGFpbC52YWx1ZSxcbiAgICB9KTtcbiAgfSxcblxuICBvblBhc3N3b3JkQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBhc3N3b3JkOiBlLmRldGFpbC52YWx1ZSxcbiAgICB9KTtcbiAgfSxcblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdFVzZXJUb2tlbih7XG4gICAgICB1c2VybmFtZTogdGhpcy5kYXRhLnVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuZGF0YS5wYXNzd29yZCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgIGlmICghcmV0LmVycm9yKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHJldC5kYXRhLnRva2VuO1xuICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogc3RvcmFnZUtleS50b2tlbixcbiAgICAgICAgZGF0YTogdG9rZW4sXG4gICAgICB9KTtcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6IHN0b3JhZ2VLZXkudG9rZW5FeHBpcmVzLFxuICAgICAgICBkYXRhOiBgJHtEYXRlLm5vdygpICsgZ2VuZXJhbENvbmZpZ3MudG9rZW5MaWZldGltZX1gLFxuICAgICAgfSk7XG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiBzdG9yYWdlS2V5LnVzZXJJZCxcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLnVzZXJuYW1lLFxuICAgICAgfSk7XG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiBzdG9yYWdlS2V5LnBhc3N3b3JkLFxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEucGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn57uR5a6a5oiQ5YqfJyxcbiAgICAgIH0pO1xuICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogcGFnZXMuaG9tZSB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==