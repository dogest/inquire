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
Page({
    data: {
        status: {
            card: index_1.EnumApiStatus.fetching,
        },
        balance: undefined,
    },
    onLoad: function (_query) {
        this.fetchCard();
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
                        return [4, card_1.contractCardBalance()];
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJEO0FBQzNELDJDQUFrRDtBQUVsRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUscUJBQWEsQ0FBQyxRQUFRO1NBQzdCO1FBQ0QsT0FBTyxFQUFFLFNBQVM7S0FDbkI7SUFLRCxNQUFNLEVBQU4sVUFBTyxNQUFzQztRQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUVLLFNBQVMsRUFBZjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osYUFBYSxFQUFFLHFCQUFhLENBQUMsUUFBUTt5QkFDdEMsQ0FBQyxDQUFDOzs7O3dCQUVXLFdBQU0sMEJBQW1CLEVBQUUsRUFBQTs7d0JBQWpDLEdBQUcsR0FBRyxTQUEyQjt3QkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7NEJBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQ0FDWixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO2dDQUN6QixhQUFhLEVBQUUscUJBQWEsQ0FBQyxPQUFPOzZCQUNyQyxDQUFDLENBQUM7eUJBQ0o7Ozs7d0JBRUQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixhQUFhLEVBQUUscUJBQWEsQ0FBQyxJQUFJO3lCQUNsQyxDQUFDLENBQUM7Ozs7OztLQUVOO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udHJhY3RDYXJkQmFsYW5jZSB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9jYXJkJztcbmltcG9ydCB7IEVudW1BcGlTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9pbmRleCc7XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBzdGF0dXM6IHtcbiAgICAgIGNhcmQ6IEVudW1BcGlTdGF0dXMuZmV0Y2hpbmcsXG4gICAgfSxcbiAgICBiYWxhbmNlOiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoX3F1ZXJ5OiB7IFtxdWVyeUtleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLmZldGNoQ2FyZCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICBhc3luYyBmZXRjaENhcmQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBjb250cmFjdENhcmRCYWxhbmNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYmFsYW5jZTogcmV0LmRhdGEuYmFsYW5jZSxcbiAgICAgICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLnN1Y2Nlc3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAnc3RhdHVzLmNhcmQnOiBFbnVtQXBpU3RhdHVzLmZhaWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==