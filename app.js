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
var pages_1 = require("./configs/pages");
var storage_1 = require("./utils/storage");
App({
    onLaunch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasValidToken, token, tokenExpires, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        hasValidToken = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4, storage_1.default.getToken()];
                    case 2:
                        token = _b.sent();
                        _a = Number;
                        return [4, storage_1.default.getTokenExpires()];
                    case 3:
                        tokenExpires = _a.apply(void 0, [_b.sent()]);
                        console.log('get token', token, tokenExpires, Date.now());
                        if (token && tokenExpires && tokenExpires > Date.now()) {
                            hasValidToken = true;
                        }
                        return [3, 5];
                    case 4:
                        e_1 = _b.sent();
                        return [3, 5];
                    case 5:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBb0M7QUFDcEMsMkNBQXNDO0FBT3RDLEdBQUcsQ0FBUztJQUNKLFFBQVE7Ozs7Ozt3QkFDUixhQUFhLEdBQUcsS0FBSyxDQUFDOzs7O3dCQUVWLFdBQU0saUJBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWhDLEtBQUssR0FBRyxTQUF3Qjt3QkFDakIsS0FBQSxNQUFNLENBQUE7d0JBQUMsV0FBTSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxFQUFBOzt3QkFBckQsWUFBWSxHQUFHLGtCQUFPLFNBQStCLEVBQUM7d0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQzFELElBQUksS0FBSyxJQUFJLFlBQVksSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFOzRCQUN0RCxhQUFhLEdBQUcsSUFBSSxDQUFDO3lCQUN0Qjs7Ozs7O3dCQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNsRSxFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNaLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLGVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQUssQ0FBQyxLQUFLO3lCQUM5QyxDQUFDLENBQUM7Ozs7O0tBQ0o7SUFDRCxVQUFVLEVBQUUsRUFDWDtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vYXBwLnRzXG5pbXBvcnQgcGFnZXMgZnJvbSAnLi9jb25maWdzL3BhZ2VzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vdXRpbHMvc3RvcmFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU15QXBwIHtcbiAgdXNlckluZm9SZWFkeUNhbGxiYWNrPyhyZXM6IHd4LlVzZXJJbmZvKTogdm9pZDtcbiAgZ2xvYmFsRGF0YToge307XG59XG5cbkFwcDxJTXlBcHA+KHtcbiAgYXN5bmMgb25MYXVuY2goKSB7XG4gICAgbGV0IGhhc1ZhbGlkVG9rZW4gPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdG9yYWdlLmdldFRva2VuKCk7XG4gICAgICBjb25zdCB0b2tlbkV4cGlyZXMgPSBOdW1iZXIoYXdhaXQgc3RvcmFnZS5nZXRUb2tlbkV4cGlyZXMoKSk7XG4gICAgICBjb25zb2xlLmxvZygnZ2V0IHRva2VuJywgdG9rZW4sIHRva2VuRXhwaXJlcywgRGF0ZS5ub3coKSk7XG4gICAgICBpZiAodG9rZW4gJiYgdG9rZW5FeHBpcmVzICYmIHRva2VuRXhwaXJlcyA+IERhdGUubm93KCkpIHtcbiAgICAgICAgaGFzVmFsaWRUb2tlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICBjb25zb2xlLmxvZygncmVkaXJlY3QnLCBoYXNWYWxpZFRva2VuID8gcGFnZXMuaG9tZSA6IHBhZ2VzLmxvZ2luKTtcbiAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgIHVybDogaGFzVmFsaWRUb2tlbiA/IHBhZ2VzLmhvbWUgOiBwYWdlcy5sb2dpbixcbiAgICB9KTtcbiAgfSxcbiAgZ2xvYmFsRGF0YToge1xuICB9LFxufSk7XG4iXX0=