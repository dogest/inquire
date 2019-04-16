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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWdEO0FBQ2hELDZDQUF5RDtBQUN6RCw2Q0FBd0M7QUFFeEMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsTUFBTSxFQUFOLFVBQU8sTUFBc0M7UUFDM0MsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksS0FBSyxFQUFFO1NBRVY7SUFDSCxDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBRUQsZ0JBQWdCLEVBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixFQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSyxRQUFROzs7Ozs0QkFDQSxXQUFNLHdCQUFpQixDQUFDOzRCQUNsQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO3lCQUM3QixDQUFDLEVBQUE7O3dCQUhJLEdBQUcsR0FBRyxTQUdWO3dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNSLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs0QkFDN0IsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsa0JBQVUsQ0FBQyxLQUFLO2dDQUNyQixJQUFJLEVBQUUsS0FBSzs2QkFDWixDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsa0JBQVUsQ0FBQyxNQUFNO2dDQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFROzZCQUN6QixDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsa0JBQVUsQ0FBQyxRQUFRO2dDQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFROzZCQUN6QixDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsTUFBTTs2QkFDZCxDQUFDLENBQUM7NEJBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt5QkFDcEM7Ozs7O0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmFnZUtleSBmcm9tICcuLi8uLi9jb25maWdzL3N0b3JhZ2VzJztcbmltcG9ydCB7IGNvbnRyYWN0VXNlclRva2VuIH0gZnJvbSAnLi4vLi4vY29udHJhY3RzL3VzZXInO1xuaW1wb3J0IHBhZ2VzIGZyb20gJy4uLy4uL2NvbmZpZ3MvcGFnZXMnO1xuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZChfcXVlcnk6IHsgW3F1ZXJ5S2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoc3RvcmFnZUtleS50b2tlbik7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAvLyBva1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgb25Vc2VybmFtZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VybmFtZTogZS5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25QYXNzd29yZENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwYXNzd29yZDogZS5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RVc2VyVG9rZW4oe1xuICAgICAgdXNlcm5hbWU6IHRoaXMuZGF0YS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLmRhdGEucGFzc3dvcmQsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmV0KTtcbiAgICBpZiAoIXJldC5lcnJvcikge1xuICAgICAgY29uc3QgdG9rZW4gPSByZXQuZGF0YS50b2tlbjtcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6IHN0b3JhZ2VLZXkudG9rZW4sXG4gICAgICAgIGRhdGE6IHRva2VuLFxuICAgICAgfSk7XG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiBzdG9yYWdlS2V5LnVzZXJJZCxcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLnVzZXJuYW1lLFxuICAgICAgfSk7XG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiBzdG9yYWdlS2V5LnBhc3N3b3JkLFxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEucGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn57uR5a6a5oiQ5YqfJyxcbiAgICAgIH0pO1xuICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogcGFnZXMuaG9tZSB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==