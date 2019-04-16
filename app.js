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
var storages_1 = require("./configs/storages");
var pages_1 = require("./configs/pages");
var user_1 = require("./contracts/user");
App({
    onLaunch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasValidToken, token, ret, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasValidToken = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        token = wx.getStorageSync(storages_1.default.token);
                        console.log('get token', token);
                        if (!token) return [3, 3];
                        console.log('has token, begin req');
                        return [4, user_1.contractUserTokenExist({
                                token: token,
                            }, {
                                autoError: 'none',
                            })];
                    case 2:
                        ret = _a.sent();
                        console.log('resp', ret);
                        if (!ret.error) {
                            hasValidToken = true;
                        }
                        _a.label = 3;
                    case 3: return [3, 5];
                    case 4:
                        e_1 = _a.sent();
                        return [3, 5];
                    case 5:
                        console.log('hasValidToken', hasValidToken);
                        console.log('redirect', hasValidToken ? pages_1.default.home : pages_1.default.login);
                        wx.redirectTo({
                            url: hasValidToken ? pages_1.default.home : pages_1.default.login,
                        });
                        return [2];
                }
            });
        });
    },
    globalData: {},
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBNEM7QUFDNUMseUNBQW9DO0FBQ3BDLHlDQUEwRDtBQU8xRCxHQUFHLENBQVM7SUFDSixRQUFROzs7Ozs7d0JBQ1IsYUFBYSxHQUFHLEtBQUssQ0FBQzs7Ozt3QkFFbEIsS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7NkJBQzVCLEtBQUssRUFBTCxjQUFLO3dCQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQzt3QkFDeEIsV0FBTSw2QkFBc0IsQ0FBQztnQ0FDdkMsS0FBSyxPQUFBOzZCQUNOLEVBQUU7Z0NBQ0QsU0FBUyxFQUFFLE1BQU07NkJBQ2xCLENBQUMsRUFBQTs7d0JBSkksR0FBRyxHQUFHLFNBSVY7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNkLGFBQWEsR0FBRyxJQUFJLENBQUM7eUJBQ3RCOzs7Ozs7O3dCQUdMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO3dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLGVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbEUsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxlQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFLLENBQUMsS0FBSzt5QkFDOUMsQ0FBQyxDQUFDOzs7OztLQUNKO0lBQ0QsVUFBVSxFQUFFLEVBQ1g7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuaW1wb3J0IHN0b3JhZ2VLZXkgZnJvbSAnLi9jb25maWdzL3N0b3JhZ2VzJztcbmltcG9ydCBwYWdlcyBmcm9tICcuL2NvbmZpZ3MvcGFnZXMnO1xuaW1wb3J0IHsgY29udHJhY3RVc2VyVG9rZW5FeGlzdCB9IGZyb20gJy4vY29udHJhY3RzL3VzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNeUFwcCB7XG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz8ocmVzOiB3eC5Vc2VySW5mbyk6IHZvaWQ7XG4gIGdsb2JhbERhdGE6IHt9O1xufVxuXG5BcHA8SU15QXBwPih7XG4gIGFzeW5jIG9uTGF1bmNoKCkge1xuICAgIGxldCBoYXNWYWxpZFRva2VuID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoc3RvcmFnZUtleS50b2tlbik7XG4gICAgICBjb25zb2xlLmxvZygnZ2V0IHRva2VuJywgdG9rZW4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIC8vIGhhcyB0b2tlblxuICAgICAgICBjb25zb2xlLmxvZygnaGFzIHRva2VuLCBiZWdpbiByZXEnKTtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgY29udHJhY3RVc2VyVG9rZW5FeGlzdCh7XG4gICAgICAgICAgdG9rZW4sXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBhdXRvRXJyb3I6ICdub25lJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwJywgcmV0KTtcbiAgICAgICAgaWYgKCFyZXQuZXJyb3IpIHtcbiAgICAgICAgICBoYXNWYWxpZFRva2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgY29uc29sZS5sb2coJ2hhc1ZhbGlkVG9rZW4nLCBoYXNWYWxpZFRva2VuKTtcbiAgICBjb25zb2xlLmxvZygncmVkaXJlY3QnLCBoYXNWYWxpZFRva2VuID8gcGFnZXMuaG9tZSA6IHBhZ2VzLmxvZ2luKTtcbiAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgIHVybDogaGFzVmFsaWRUb2tlbiA/IHBhZ2VzLmhvbWUgOiBwYWdlcy5sb2dpbixcbiAgICB9KTtcbiAgfSxcbiAgZ2xvYmFsRGF0YToge1xuICB9LFxufSk7XG4iXX0=