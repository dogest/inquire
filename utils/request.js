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
var index_1 = require("../enums/index");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFrQztBQUNsQywwQ0FBcUM7QUFDckMsd0NBQTRDO0FBRTVDLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFJLFNBQVMsR0FBa0IsSUFBSSxDQUFDO0FBa0JwQyxTQUFTLFNBQVMsQ0FBQyxPQUEwQjtJQUMzQyxJQUFNLE1BQU0sZ0JBQ1AsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUN6QixjQUFjLEVBQUUsa0JBQWtCLEVBQ2xDLFdBQVcsRUFBRSxTQUFTLEdBQ3ZCLENBQUM7SUFDRixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNoQyxPQUFPLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDcEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0tBQzNCLENBQUMsQ0FBQztJQUNILElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDO0lBQ2hELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUc7WUFDM0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLElBQUksTUFBQTtZQUNKLE1BQU0sUUFBQTtZQUNOLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtvQkFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUQsRUFBRSxDQUFDLGFBQWEs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RyxLQUFBO1FBQ0gsSUFBSSxNQUFBLElBQ0osQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFNLE9BQU8sR0FBRztJQUNkLFNBQVMsV0FBQTtJQUNULEdBQUcsS0FBQTtJQUNILElBQUksTUFBQTtJQUNKLEdBQUcsS0FBQTtJQUNILEdBQUcsS0FBQTtDQUNKLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gJy4uL2NvbmZpZ3MvYXBpcyc7XG5pbXBvcnQgcGFnZXMgZnJvbSAnLi4vY29uZmlncy9wYWdlcyc7XG5pbXBvcnQgeyBFbnVtUmVwb3J0IH0gZnJvbSAnLi4vZW51bXMvaW5kZXgnO1xuXG5jb25zdCByZXFUaW1lb3V0ID0gMzAwMDA7XG5sZXQgbGFzdExvZ2luOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBJV1hSZXF1ZXN0T3B0aW9ucyB7XG4gIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnO1xuICB1cmw6IHN0cmluZzsgLy8gJy8nIOW8gOWktOeahCBhcGkuYmFzZSDkuYvlkI7nmoQgVVJMXG4gIGRhdGE/OiBJQW55T2JqZWN0O1xuICBoZWFkZXI/OiBJQW55T2JqZWN0O1xuICBsb2FkaW5nVGV4dD86IHN0cmluZzsgLy8g5Yqg6L295Lit55qE5paH5qGI77yM5YC85Li65pyJ5pWI5a2X56ym5Liy5pe25pi+56S6XG4gIGF1dG9FcnJvcj86ICdub25lJyB8ICd0b2FzdCcgfCAnZGlhbG9nJzsgLy8g6ZSZ6K+v5pe255qE6Ieq5Yqo5o+Q56S677yM5Y+v6YCJIHRvYXN0IOaIliBkaWFsb2cg5qih5byP44CC6buY6K6k5Li6IGRpYWxvZ1xufVxuXG5leHBvcnQgdHlwZSBJUmVxdWVzdE9wdGlvbnMgPSBQaWNrPElXWFJlcXVlc3RPcHRpb25zLCAnaGVhZGVyJyB8ICdsb2FkaW5nVGV4dCcgfCAnYXV0b0Vycm9yJz47XG5cbi8qKlxuICogQmFzZSByZXF1ZXN0XG4gKiBAcGFyYW0ge0lXWFJlcXVlc3RPcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxJQW55T2JqZWN0Pn1cbiAqL1xuZnVuY3Rpb24gd3hSZXF1ZXN0KG9wdGlvbnM6IElXWFJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxJQXBpUmVzcG9uc2U8SUFwaVJlc3BvbnNlRGF0YVR5cGU+PiB7XG4gIGNvbnN0IGhlYWRlciA9IHtcbiAgICAuLi4ob3B0aW9ucy5oZWFkZXIgfHwge30pLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ1gtUmVmZXJlcic6ICdJbnF1aXJlJyxcbiAgfTtcbiAgY29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCB7fTtcbiAgb3B0aW9ucy5sb2FkaW5nVGV4dCAmJiB3eC5zaG93TG9hZGluZyh7XG4gICAgdGl0bGU6IG9wdGlvbnMubG9hZGluZ1RleHQsXG4gIH0pO1xuICBjb25zdCBhdXRvRXJyb3IgPSBvcHRpb25zLmF1dG9FcnJvciB8fCAnZGlhbG9nJztcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYXBpLmJhc2UgKyBvcHRpb25zLnVybCxcbiAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICBkYXRhLFxuICAgICAgaGVhZGVyLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPj0gNTAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigncmVxIGZhaWwgd2l0aCBjb2RlJywgcmVzLnN0YXR1c0NvZGUsIHJlcy5kYXRhKTtcbiAgICAgICAgICB3eC5yZXBvcnRNb25pdG9yKEVudW1SZXBvcnQucmVzcDV4eCwgMSk7XG4gICAgICAgICAgYXV0b0Vycm9yID09PSAndG9hc3QnICYmIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+acjeWKoeWZqOmUmeivr++8jOivt+eojeWQjuWGjeivlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdXRvRXJyb3IgPT09ICdkaWFsb2cnICYmIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+acjeWKoeWZqOmUmeivrycsXG4gICAgICAgICAgICBjb250ZW50OiAn6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlamVjdChyZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXEgc3VjY2VzcyB3aXRoIGNvZGUnLCByZXMuc3RhdHVzQ29kZSwgcmVzLmRhdGEpO1xuICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID09PSA0MDMgJiYgd3gucmVwb3J0TW9uaXRvcihFbnVtUmVwb3J0LnJlc3A0MDMsIDEpO1xuICAgICAgICAgIGNvbnN0IGQgPSByZXMuZGF0YSBhcyBJQXBpUmVzcG9uc2U8SUFwaVJlc3BvbnNlRGF0YVR5cGU+O1xuICAgICAgICAgIGlmIChkLmVycm9yKSB7XG4gICAgICAgICAgICBhdXRvRXJyb3IgPT09ICd0b2FzdCcgJiYgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IGQubWVzc2FnZSxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXV0b0Vycm9yID09PSAnZGlhbG9nJyAmJiB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGQubWVzc2FnZSxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSA0MDEgJiZcbiAgICAgICAgICAgICFvcHRpb25zLnVybC5zdGFydHNXaXRoKGFwaS51c2VyVG9rZW4pICYmXG4gICAgICAgICAgICAoIWxhc3RMb2dpbiB8fCAobGFzdExvZ2luICYmIERhdGUubm93KCkgLSBsYXN0TG9naW4gPiByZXFUaW1lb3V0ICogMikpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGxhc3QgbG9naW4nLCBsYXN0TG9naW4pO1xuICAgICAgICAgICAgbGFzdExvZ2luID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgbGFzdCBsb2dpbicsIGxhc3RMb2dpbik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBjdXJyZW50UGFnZVtjdXJyZW50UGFnZS5sZW5ndGggLSAxXS5yb3V0ZSB8fCAnJztcbiAgICAgICAgICAgICAgaWYgKCF+cGFnZXMubG9naW4uaW5kZXhPZihjdXJyZW50Um91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZGlyZWN0IHRvIHJlLWxvZ2luJywgY3VycmVudFJvdXRlKTtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHsgdXJsOiBwYWdlcy5sb2dpbiB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKGQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdyZXEgZmFpbCcsIGVycik7XG4gICAgICAgIGF1dG9FcnJvciA9PT0gJ3RvYXN0JyAmJiB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5pyq55+l6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBhdXRvRXJyb3IgPT09ICdkaWFsb2cnICYmIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmnKrnn6XplJnor68nLFxuICAgICAgICAgIGNvbnRlbnQ6ICfor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgb3B0aW9ucy5sb2FkaW5nVGV4dCAmJiB3eC5oaWRlTG9hZGluZyh7fSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICB1cmwsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gd3hSZXF1ZXN0KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHVybCxcbiAgICBkYXRhLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHV0KHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gd3hSZXF1ZXN0KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgdXJsLFxuICAgIGRhdGEsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWwodXJsOiBzdHJpbmcsIGRhdGE/OiBJQW55T2JqZWN0LCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbmNvbnN0IHJlcXVlc3QgPSB7XG4gIHd4UmVxdWVzdCxcbiAgZ2V0LFxuICBwb3N0LFxuICBwdXQsXG4gIGRlbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG4iXX0=