"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var apis_1 = require("../configs/apis");
var pages_1 = require("../configs/pages");
var index_1 = require("../enums/index");
var storage_1 = require("./storage");
var reqTimeout = 30000;
var lastLogin = null;
function wxRequest(options) {
    return __awaiter(this, void 0, void 0, function () {
        var header, data, autoError, userId, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    header = __assign({}, (options.header || {}), { 'Content-Type': 'application/json', 'X-Referer': 'Inquire' });
                    data = options.data || {};
                    options.loadingText && wx.showLoading({
                        title: options.loadingText,
                    });
                    autoError = options.autoError || 'dialog';
                    userId = '';
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = data.userid;
                    if (_a) return [3, 3];
                    return [4, storage_1.default.getUserId()];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3:
                    userId = _a || '';
                    return [3, 5];
                case 4:
                    e_1 = _b.sent();
                    console.error(e_1);
                    return [3, 5];
                case 5: return [2, new Promise(function (resolve, reject) {
                        wx.request({
                            url: apis_1.default.base + options.url + '?userid=' + encodeURIComponent(userId),
                            method: options.method,
                            data: data,
                            header: header,
                            success: function (res) {
                                if (res.statusCode >= 500) {
                                    console.error('req fail with code', res.statusCode, res.data);
                                    wx.reportMonitor(index_1.EnumReport.resp5xx, 1);
                                    autoError === 'toast' && wx.showToast({
                                        title: '服务器错误，请稍后再试',
                                        icon: 'none',
                                        duration: 2000,
                                    });
                                    autoError === 'dialog' && wx.showModal({
                                        title: '服务器错误',
                                        content: '请稍后再试',
                                        showCancel: false,
                                    });
                                    reject(res);
                                }
                                else {
                                    console.log('req success with code', res.statusCode, res.data);
                                    res.statusCode === 403 && wx.reportMonitor(index_1.EnumReport.resp403, 1);
                                    var d = res.data;
                                    if (d.error) {
                                        autoError === 'toast' && wx.showToast({
                                            title: d.message,
                                            icon: 'none',
                                            duration: 2000,
                                        });
                                        autoError === 'dialog' && wx.showModal({
                                            title: '',
                                            content: d.message,
                                            showCancel: false,
                                        });
                                    }
                                    if (res.statusCode === 401 &&
                                        !options.url.startsWith(apis_1.default.userToken) &&
                                        (!lastLogin || (lastLogin && Date.now() - lastLogin > reqTimeout * 2))) {
                                        console.log('get last login', lastLogin);
                                        lastLogin = Date.now();
                                        console.log('set last login', lastLogin);
                                        try {
                                            var currentPage = getCurrentPages();
                                            var currentRoute = currentPage[currentPage.length - 1].route || '';
                                            if (!~pages_1.default.login.indexOf(currentRoute)) {
                                                console.log('redirect to re-login', currentRoute);
                                                wx.redirectTo({ url: pages_1.default.login });
                                            }
                                        }
                                        catch (e) {
                                            console.error(e);
                                        }
                                    }
                                    resolve(d);
                                }
                            },
                            fail: function (err) {
                                console.error('req fail', err);
                                autoError === 'toast' && wx.showToast({
                                    title: '未知错误，请稍后再试',
                                    icon: 'none',
                                    duration: 2000,
                                });
                                autoError === 'dialog' && wx.showModal({
                                    title: '未知错误',
                                    content: '请稍后再试',
                                    showCancel: false,
                                });
                                reject(err);
                            },
                            complete: function () {
                                options.loadingText && wx.hideLoading({});
                            },
                        });
                    })];
            }
        });
    });
}
function get(url, options) {
    return wxRequest(__assign({}, options, { method: 'GET', url: url }));
}
function post(url, data, options) {
    return wxRequest(__assign({}, options, { method: 'POST', url: url,
        data: data }));
}
function put(url, data, options) {
    return wxRequest(__assign({}, options, { method: 'PUT', url: url,
        data: data }));
}
function del(url, data, options) {
    return wxRequest(__assign({}, options, { method: 'DELETE', url: url,
        data: data }));
}
var request = {
    wxRequest: wxRequest,
    get: get,
    post: post,
    put: put,
    del: del,
};
exports.default = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWtDO0FBQ2xDLDBDQUFxQztBQUNyQyx3Q0FBNEM7QUFDNUMscUNBQWdDO0FBRWhDLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFJLFNBQVMsR0FBa0IsSUFBSSxDQUFDO0FBa0JwQyxTQUFlLFNBQVMsQ0FBQyxPQUEwQjs7Ozs7O29CQUMzQyxNQUFNLGdCQUNQLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsSUFDekIsY0FBYyxFQUFFLGtCQUFrQixFQUNsQyxXQUFXLEVBQUUsU0FBUyxHQUN2QixDQUFDO29CQUNJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNwQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFdBQVc7cUJBQzNCLENBQUMsQ0FBQztvQkFDRyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7b0JBQzVDLE1BQU0sR0FBRyxFQUFFLENBQUM7Ozs7b0JBRUwsS0FBQSxJQUFJLENBQUMsTUFBTSxDQUFBOzRCQUFYLGNBQVc7b0JBQUksV0FBTSxpQkFBTyxDQUFDLFNBQVMsRUFBRSxFQUFBOzswQkFBekIsU0FBeUI7OztvQkFBakQsTUFBTSxHQUFHLE1BQTRDLEVBQUUsQ0FBQzs7OztvQkFFeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7d0JBRW5CLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0QkFDVCxHQUFHLEVBQUUsY0FBRyxDQUFDLElBQUksR0FB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TSxFQUNkLEdBQUcsS0FBQTtRQUNILElBQUksTUFBQSxJQUNKLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsT0FBeUI7SUFDcEUsT0FBTyxTQUFTLGNBQ1gsT0FBTyxJQUNWLE1BQU0sRUFBRSxLQUFLLEVBQ2IsR0FBRyxLQUFBO1FBQ0gsSUFBSSxNQUFBLElBQ0osQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxHQUFXLEVBQUUsSUFBaUIsRUFBRSxPQUF5QjtJQUNwRSxPQUFPLFNBQVMsY0FDWCxPQUFPLElBQ1YsTUFBTSxFQUFFLFFBQVEsRUFDaEIsR0FBRyxLQUFBO1FBQ0gsSUFBSSxNQUFBLElBQ0osQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFNLE9BQU8sR0FBRztJQUNkLFNBQVMsV0FBQTtJQUNULEdBQUcsS0FBQTtJQUNILElBQUksTUFBQTtJQUNKLEdBQUcsS0FBQTtJQUNILEdBQUcsS0FBQTtDQUNKLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gJy4uL2NvbmZpZ3MvYXBpcyc7XG5pbXBvcnQgcGFnZXMgZnJvbSAnLi4vY29uZmlncy9wYWdlcyc7XG5pbXBvcnQgeyBFbnVtUmVwb3J0IH0gZnJvbSAnLi4vZW51bXMvaW5kZXgnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgcmVxVGltZW91dCA9IDMwMDAwO1xubGV0IGxhc3RMb2dpbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdYUmVxdWVzdE9wdGlvbnMge1xuICBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJztcbiAgdXJsOiBzdHJpbmc7IC8vICcvJyDlvIDlpLTnmoQgYXBpLmJhc2Ug5LmL5ZCO55qEIFVSTFxuICBkYXRhPzogSUFueU9iamVjdDtcbiAgaGVhZGVyPzogSUFueU9iamVjdDtcbiAgbG9hZGluZ1RleHQ/OiBzdHJpbmc7IC8vIOWKoOi9veS4reeahOaWh+ahiO+8jOWAvOS4uuacieaViOWtl+espuS4suaXtuaYvuekulxuICBhdXRvRXJyb3I/OiAnbm9uZScgfCAndG9hc3QnIHwgJ2RpYWxvZyc7IC8vIOmUmeivr+aXtueahOiHquWKqOaPkOekuu+8jOWPr+mAiSB0b2FzdCDmiJYgZGlhbG9nIOaooeW8j+OAgum7mOiupOS4uiBkaWFsb2dcbn1cblxuZXhwb3J0IHR5cGUgSVJlcXVlc3RPcHRpb25zID0gUGljazxJV1hSZXF1ZXN0T3B0aW9ucywgJ2hlYWRlcicgfCAnbG9hZGluZ1RleHQnIHwgJ2F1dG9FcnJvcic+O1xuXG4vKipcbiAqIEJhc2UgcmVxdWVzdFxuICogQHBhcmFtIHtJV1hSZXF1ZXN0T3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge1Byb21pc2U8SUFueU9iamVjdD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHd4UmVxdWVzdChvcHRpb25zOiBJV1hSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8SUFwaVJlc3BvbnNlPElBcGlSZXNwb25zZURhdGFUeXBlPj4ge1xuICBjb25zdCBoZWFkZXIgPSB7XG4gICAgLi4uKG9wdGlvbnMuaGVhZGVyIHx8IHt9KSxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdYLVJlZmVyZXInOiAnSW5xdWlyZScsXG4gIH07XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge307XG4gIG9wdGlvbnMubG9hZGluZ1RleHQgJiYgd3guc2hvd0xvYWRpbmcoe1xuICAgIHRpdGxlOiBvcHRpb25zLmxvYWRpbmdUZXh0LFxuICB9KTtcbiAgY29uc3QgYXV0b0Vycm9yID0gb3B0aW9ucy5hdXRvRXJyb3IgfHwgJ2RpYWxvZyc7XG4gIGxldCB1c2VySWQgPSAnJztcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBkYXRhLnVzZXJpZCB8fCBhd2FpdCBzdG9yYWdlLmdldFVzZXJJZCgpIHx8ICcnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBhcGkuYmFzZSArIG9wdGlvbnMudXJsICsgJz91c2VyaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgIGRhdGEsXG4gICAgICBoZWFkZXIsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA+PSA1MDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdyZXEgZmFpbCB3aXRoIGNvZGUnLCByZXMuc3RhdHVzQ29kZSwgcmVzLmRhdGEpO1xuICAgICAgICAgIHd4LnJlcG9ydE1vbml0b3IoRW51bVJlcG9ydC5yZXNwNXh4LCAxKTtcbiAgICAgICAgICBhdXRvRXJyb3IgPT09ICd0b2FzdCcgJiYgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF1dG9FcnJvciA9PT0gJ2RpYWxvZycgJiYgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5Zmo6ZSZ6K+vJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlcSBzdWNjZXNzIHdpdGggY29kZScsIHJlcy5zdGF0dXNDb2RlLCByZXMuZGF0YSk7XG4gICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPT09IDQwMyAmJiB3eC5yZXBvcnRNb25pdG9yKEVudW1SZXBvcnQucmVzcDQwMywgMSk7XG4gICAgICAgICAgY29uc3QgZCA9IHJlcy5kYXRhIGFzIElBcGlSZXNwb25zZTxJQXBpUmVzcG9uc2VEYXRhVHlwZT47XG4gICAgICAgICAgaWYgKGQuZXJyb3IpIHtcbiAgICAgICAgICAgIGF1dG9FcnJvciA9PT0gJ3RvYXN0JyAmJiB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogZC5tZXNzYWdlLFxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdXRvRXJyb3IgPT09ICdkaWFsb2cnICYmIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgY29udGVudDogZC5tZXNzYWdlLFxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDQwMSAmJlxuICAgICAgICAgICAgIW9wdGlvbnMudXJsLnN0YXJ0c1dpdGgoYXBpLnVzZXJUb2tlbikgJiZcbiAgICAgICAgICAgICghbGFzdExvZ2luIHx8IChsYXN0TG9naW4gJiYgRGF0ZS5ub3coKSAtIGxhc3RMb2dpbiA+IHJlcVRpbWVvdXQgKiAyKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgbGFzdCBsb2dpbicsIGxhc3RMb2dpbik7XG4gICAgICAgICAgICBsYXN0TG9naW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCBsYXN0IGxvZ2luJywgbGFzdExvZ2luKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IGN1cnJlbnRQYWdlW2N1cnJlbnRQYWdlLmxlbmd0aCAtIDFdLnJvdXRlIHx8ICcnO1xuICAgICAgICAgICAgICBpZiAoIX5wYWdlcy5sb2dpbi5pbmRleE9mKGN1cnJlbnRSb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVkaXJlY3QgdG8gcmUtbG9naW4nLCBjdXJyZW50Um91dGUpO1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oeyB1cmw6IHBhZ2VzLmxvZ2luIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3JlcSBmYWlsJywgZXJyKTtcbiAgICAgICAgYXV0b0Vycm9yID09PSAndG9hc3QnICYmIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmnKrnn6XplJnor6/vvIzor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF1dG9FcnJvciA9PT0gJ2RpYWxvZycgJiYgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+acquefpemUmeivrycsXG4gICAgICAgICAgY29udGVudDogJ+ivt+eojeWQjuWGjeivlScsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICBvcHRpb25zLmxvYWRpbmdUZXh0ICYmIHd4LmhpZGVMb2FkaW5nKHt9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMpIHtcbiAgcmV0dXJuIHd4UmVxdWVzdCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHVybCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE/OiBJQW55T2JqZWN0LCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgdXJsLFxuICAgIGRhdGEsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBJQW55T2JqZWN0LCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbCh1cmw6IHN0cmluZywgZGF0YT86IElBbnlPYmplY3QsIG9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMpIHtcbiAgcmV0dXJuIHd4UmVxdWVzdCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIHVybCxcbiAgICBkYXRhLFxuICB9KTtcbn1cblxuY29uc3QgcmVxdWVzdCA9IHtcbiAgd3hSZXF1ZXN0LFxuICBnZXQsXG4gIHBvc3QsXG4gIHB1dCxcbiAgZGVsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcbiJdfQ==