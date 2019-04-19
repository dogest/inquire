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
App({
    onLaunch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasValidToken, token, tokenExpires;
            return __generator(this, function (_a) {
                hasValidToken = false;
                try {
                    token = wx.getStorageSync(storages_1.default.token);
                    tokenExpires = +wx.getStorageSync(storages_1.default.tokenExpires);
                    console.log('get token', token, tokenExpires, Date.now());
                    if (token && tokenExpires && tokenExpires > Date.now()) {
                        hasValidToken = true;
                    }
                }
                catch (e) { }
                console.log('redirect', hasValidToken ? pages_1.default.home : pages_1.default.login);
                wx.redirectTo({
                    url: hasValidToken ? pages_1.default.home : pages_1.default.login,
                });
                return [2];
            });
        });
    },
    globalData: {},
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBNEM7QUFDNUMseUNBQW9DO0FBT3BDLEdBQUcsQ0FBUztJQUNKLFFBQVE7Ozs7Z0JBQ1IsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSTtvQkFDSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QyxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLGtCQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQzFELElBQUksS0FBSyxJQUFJLFlBQVksSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUN0RCxhQUFhLEdBQUcsSUFBSSxDQUFDO3FCQUN0QjtpQkFDRjtnQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLGVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQUssQ0FBQyxLQUFLO2lCQUM5QyxDQUFDLENBQUM7Ozs7S0FDSjtJQUNELFVBQVUsRUFBRSxFQUNYO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHAudHNcbmltcG9ydCBzdG9yYWdlS2V5IGZyb20gJy4vY29uZmlncy9zdG9yYWdlcyc7XG5pbXBvcnQgcGFnZXMgZnJvbSAnLi9jb25maWdzL3BhZ2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkO1xuICBnbG9iYWxEYXRhOiB7fTtcbn1cblxuQXBwPElNeUFwcD4oe1xuICBhc3luYyBvbkxhdW5jaCgpIHtcbiAgICBsZXQgaGFzVmFsaWRUb2tlbiA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKHN0b3JhZ2VLZXkudG9rZW4pO1xuICAgICAgY29uc3QgdG9rZW5FeHBpcmVzID0gK3d4LmdldFN0b3JhZ2VTeW5jKHN0b3JhZ2VLZXkudG9rZW5FeHBpcmVzKTtcbiAgICAgIGNvbnNvbGUubG9nKCdnZXQgdG9rZW4nLCB0b2tlbiwgdG9rZW5FeHBpcmVzLCBEYXRlLm5vdygpKTtcbiAgICAgIGlmICh0b2tlbiAmJiB0b2tlbkV4cGlyZXMgJiYgdG9rZW5FeHBpcmVzID4gRGF0ZS5ub3coKSkge1xuICAgICAgICBoYXNWYWxpZFRva2VuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGNvbnNvbGUubG9nKCdyZWRpcmVjdCcsIGhhc1ZhbGlkVG9rZW4gPyBwYWdlcy5ob21lIDogcGFnZXMubG9naW4pO1xuICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgdXJsOiBoYXNWYWxpZFRva2VuID8gcGFnZXMuaG9tZSA6IHBhZ2VzLmxvZ2luLFxuICAgIH0pO1xuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gIH0sXG59KTtcbiJdfQ==