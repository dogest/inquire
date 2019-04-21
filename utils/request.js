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
Object.defineProperty(exports, "__esModule", { value: true });
var apis_1 = require("../configs/apis");
var pages_1 = require("../configs/pages");
var reqTimeout = 30000;
var lastLogin = null;
function wxRequest(options) {
    var header = __assign({}, (options.header || {}), { 'Content-Type': 'application/json', 'X-Referer': 'Inquire' });
    var data = options.data || {};
    options.loadingText && wx.showLoading({
        title: options.loadingText,
    });
    var autoError = options.autoError || 'dialog';
    return new Promise(function (resolve, reject) {
        wx.request({
            url: apis_1.default.base + options.url,
            method: options.method,
            data: data,
            header: header,
            success: function (res) {
                if (res.statusCode >= 500) {
                    console.error('req fail with code', res.statusCode, res.data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFrQztBQUNsQywwQ0FBcUM7QUFFckMsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLElBQUksU0FBUyxHQUFrQixJQUFJLENBQUM7QUFrQnBDLFNBQVMsU0FBUyxDQUFDLE9BQTBCO0lBQzNDLElBQU0sTUFBTSxnQkFDUCxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLElBQ3pCLGNBQWMsRUFBRSxrQkFBa0IsRUFDbEMsV0FBVyxFQUFFLFNBQVMsR0FDdkIsQ0FBQztJQUNGLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2hDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFdBQVc7S0FDM0IsQ0FBQyxDQUFDO0lBQ0gsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7SUFDaEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsY0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRztZQUMzQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsSUFBSSxNQUFBO1lBQ0osTUFBTSxRQUFBO1lBQ04sT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO29CQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM5RCxTQUFTLEtBQUssT0FBTyxJQUFJLEVBQUUsQ0FB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSAnLi4vY29uZmlncy9hcGlzJztcbmltcG9ydCBwYWdlcyBmcm9tICcuLi9jb25maWdzL3BhZ2VzJztcblxuY29uc3QgcmVxVGltZW91dCA9IDMwMDAwO1xubGV0IGxhc3RMb2dpbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdYUmVxdWVzdE9wdGlvbnMge1xuICBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJztcbiAgdXJsOiBzdHJpbmc7IC8vICcvJyDlvIDlpLTnmoQgYXBpLmJhc2Ug5LmL5ZCO55qEIFVSTFxuICBkYXRhPzogSUFueU9iamVjdDtcbiAgaGVhZGVyPzogSUFueU9iamVjdDtcbiAgbG9hZGluZ1RleHQ/OiBzdHJpbmc7IC8vIOWKoOi9veS4reeahOaWh+ahiO+8jOWAvOS4uuacieaViOWtl+espuS4suaXtuaYvuekulxuICBhdXRvRXJyb3I/OiAnbm9uZScgfCAndG9hc3QnIHwgJ2RpYWxvZyc7IC8vIOmUmeivr+aXtueahOiHquWKqOaPkOekuu+8jOWPr+mAiSB0b2FzdCDmiJYgZGlhbG9nIOaooeW8j+OAgum7mOiupOS4uiBkaWFsb2dcbn1cblxuZXhwb3J0IHR5cGUgSVJlcXVlc3RPcHRpb25zID0gUGljazxJV1hSZXF1ZXN0T3B0aW9ucywgJ2hlYWRlcicgfCAnbG9hZGluZ1RleHQnIHwgJ2F1dG9FcnJvcic+O1xuXG4vKipcbiAqIEJhc2UgcmVxdWVzdFxuICogQHBhcmFtIHtJV1hSZXF1ZXN0T3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge1Byb21pc2U8SUFueU9iamVjdD59XG4gKi9cbmZ1bmN0aW9uIHd4UmVxdWVzdChvcHRpb25zOiBJV1hSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8SUFwaVJlc3BvbnNlPElBcGlSZXNwb25zZURhdGFUeXBlPj4ge1xuICBjb25zdCBoZWFkZXIgPSB7XG4gICAgLi4uKG9wdGlvbnMuaGVhZGVyIHx8IHt9KSxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdYLVJlZmVyZXInOiAnSW5xdWlyZScsXG4gIH07XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge307XG4gIG9wdGlvbnMubG9hZGluZ1RleHQgJiYgd3guc2hvd0xvYWRpbmcoe1xuICAgIHRpdGxlOiBvcHRpb25zLmxvYWRpbmdUZXh0LFxuICB9KTtcbiAgY29uc3QgYXV0b0Vycm9yID0gb3B0aW9ucy5hdXRvRXJyb3IgfHwgJ2RpYWxvZyc7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGFwaS5iYXNlICsgb3B0aW9ucy51cmwsXG4gICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgZGF0YSxcbiAgICAgIGhlYWRlcixcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID49IDUwMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3JlcSBmYWlsIHdpdGggY29kZScsIHJlcy5zdGF0dXNDb2RlLCByZXMuZGF0YSk7XG4gICAgICAgICAgYXV0b0Vycm9yID09PSAndG9hc3QnICYmIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+acjeWKoeWZqOmUmeivr++8jOivt+eojeWQjuWGjeivlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdXRvRXJyb3IgPT09ICdkaWFsb2cnICYmIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+acjeWKoeWZqOmUmeivrycsXG4gICAgICAgICAgICBjb250ZW50OiAn6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlamVjdChyZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXEgc3VjY2VzcyB3aXRoIGNvZGUnLCByZXMuc3RhdHVzQ29kZSwgcmVzLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IGQgPSByZXMuZGF0YSBhcyBJQXBpUmVzcG9uc2U8SUFwaVJlc3BvbnNlRGF0YVR5cGU+O1xuICAgICAgICAgIGlmIChkLmVycm9yKSB7XG4gICAgICAgICAgICBhdXRvRXJyb3IgPT09ICd0b2FzdCcgJiYgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IGQubWVzc2FnZSxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXV0b0Vycm9yID09PSAnZGlhbG9nJyAmJiB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGQubWVzc2FnZSxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSA0MDEgJiZcbiAgICAgICAgICAgICFvcHRpb25zLnVybC5zdGFydHNXaXRoKGFwaS51c2VyVG9rZW4pICYmXG4gICAgICAgICAgICAoIWxhc3RMb2dpbiB8fCAobGFzdExvZ2luICYmIERhdGUubm93KCkgLSBsYXN0TG9naW4gPiByZXFUaW1lb3V0ICogMikpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGxhc3QgbG9naW4nLCBsYXN0TG9naW4pO1xuICAgICAgICAgICAgbGFzdExvZ2luID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgbGFzdCBsb2dpbicsIGxhc3RMb2dpbik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBjdXJyZW50UGFnZVtjdXJyZW50UGFnZS5sZW5ndGggLSAxXS5yb3V0ZSB8fCAnJztcbiAgICAgICAgICAgICAgaWYgKCF+cGFnZXMubG9naW4uaW5kZXhPZihjdXJyZW50Um91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZGlyZWN0IHRvIHJlLWxvZ2luJywgY3VycmVudFJvdXRlKTtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHsgdXJsOiBwYWdlcy5sb2dpbiB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKGQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdyZXEgZmFpbCcsIGVycik7XG4gICAgICAgIGF1dG9FcnJvciA9PT0gJ3RvYXN0JyAmJiB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5pyq55+l6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBhdXRvRXJyb3IgPT09ICdkaWFsb2cnICYmIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmnKrnn6XplJnor68nLFxuICAgICAgICAgIGNvbnRlbnQ6ICfor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgb3B0aW9ucy5sb2FkaW5nVGV4dCAmJiB3eC5oaWRlTG9hZGluZyh7fSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICB1cmwsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gd3hSZXF1ZXN0KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHVybCxcbiAgICBkYXRhLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHV0KHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gd3hSZXF1ZXN0KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgdXJsLFxuICAgIGRhdGEsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWwodXJsOiBzdHJpbmcsIGRhdGE/OiBJQW55T2JqZWN0LCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbmNvbnN0IHJlcXVlc3QgPSB7XG4gIHd4UmVxdWVzdCxcbiAgZ2V0LFxuICBwb3N0LFxuICBwdXQsXG4gIGRlbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG4iXX0=