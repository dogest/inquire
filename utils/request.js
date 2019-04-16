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
function wxRequest(options) {
    var header = options.header || {
        'Content-Type': 'application/json',
    };
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
                    resolve(d);
                }
            },
            fail: function (err) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFrQztBQWtCbEMsU0FBUyxTQUFTLENBQUMsT0FBMEI7SUFDM0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSTtRQUMvQixjQUFjLEVBQUUsa0JBQWtCO0tBQ25DLENBQUM7SUFDRixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNoQyxPQUFPLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDcEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0tBQzNCLENBQUMsQ0FBQztJQUNILElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDO0lBQ2hELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUc7WUFDM0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLElBQUksTUFBQTtZQUNKLE1BQU0sUUFBQTtZQUNOLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtvQkFDekIsU0FBUyxLQUFLLE9BQU8sSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNwQyxLQUFLLEVBQUUsYUFBYTt3QkFDcEIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFDO29CQUNILFNBQVMsS0FBSyxRQUFRLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDckMsS0FBSyxFQUFFLE9BQU87d0JBQ2QsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLFVBQVUsRUFBRSxLQUFLO3FCQUNsQixDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUEwQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7d0JBQ1gsU0FBUyxLQUFLLE9BQU8sSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNwQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU87NEJBQ2hCLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQzt3QkFDSCxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ3JDLEtBQUssRUFBRSxFQUFFOzRCQUNULE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTzs0QkFDbEIsVUFBVSxFQUFFLEtBQUs7eUJBQ2xCLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ1o7WUFDSCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDUixTQUFTLEtBQUssT0FBTyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3BDLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUM7Z0JBQ0gsU0FBUyxLQUFLLFFBQVEsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNyQyxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCLENBQUMsQ0FBQztnQkFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsR0FBVyxFQUFFLE9BQXlCO0lBQ2pELE9BQU8sU0FBUyxjQUNYLE9BQU8sSUFDVixNQUFNLEVBQUUsS0FBSyxFQUNiLEdBQUcsS0FBQSxJQUNILENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsT0FBeUI7SUFDckUsT0FBTyxTQUFTLGNBQ1gsT0FBTyxJQUNWLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxLQUFBO1FBQ0gsSUFBSSxNQUFBLElBQ0osQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxHQUFXLEVBQUUsSUFBaUIsRUFBRSxPQUF5QjtJQUNwRSxPQUFPLFNBQVMsY0FDWCxPQUFPLElBQ1YsTUFBTSxFQUFFLEtBQUssRUFDYixHQUFHLEtBQUE7UUFDSCxJQUFJLE1BQUEsSUFDSixDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFpQixFQUFFLE9BQXlCO0lBQ3BFLE9BQU8sU0FBUyxjQUNYLE9BQU8sSUFDVixNQUFNLEVBQUUsUUFBUSxFQUNoQixHQUFHLEtBQUE7UUFDSCxJQUFJLE1BQUEsSUFDSixDQUFDO0FBQ0wsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFHO0lBQ2QsU0FBUyxXQUFBO0lBQ1QsR0FBRyxLQUFBO0lBQ0gsSUFBSSxNQUFBO0lBQ0osR0FBRyxLQUFBO0lBQ0gsR0FBRyxLQUFBO0NBQ0osQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSAnLi4vY29uZmlncy9hcGlzJztcblxuZXhwb3J0IGludGVyZmFjZSBJV1hSZXF1ZXN0T3B0aW9ucyB7XG4gIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnO1xuICB1cmw6IHN0cmluZzsgLy8gJy8nIOW8gOWktOeahCBhcGkuYmFzZSDkuYvlkI7nmoQgVVJMXG4gIGRhdGE/OiBJQW55T2JqZWN0O1xuICBoZWFkZXI/OiBJQW55T2JqZWN0O1xuICBsb2FkaW5nVGV4dD86IHN0cmluZzsgLy8g5Yqg6L295Lit55qE5paH5qGI77yM5YC85Li65pyJ5pWI5a2X56ym5Liy5pe25pi+56S6XG4gIGF1dG9FcnJvcj86ICdub25lJyB8ICd0b2FzdCcgfCAnZGlhbG9nJzsgLy8g6ZSZ6K+v5pe255qE6Ieq5Yqo5o+Q56S677yM5Y+v6YCJIHRvYXN0IOaIliBkaWFsb2cg5qih5byP44CC6buY6K6k5Li6IG5vbmXvvIzkuI3mmL7npLrplJnor6/kv6Hmga9cbn1cblxuZXhwb3J0IHR5cGUgSVJlcXVlc3RPcHRpb25zID0gUGljazxJV1hSZXF1ZXN0T3B0aW9ucywgJ2hlYWRlcicgfCAnbG9hZGluZ1RleHQnIHwgJ2F1dG9FcnJvcic+O1xuXG4vKipcbiAqIGJhc2Ugd3hSZXF1ZXN0XG4gKiBAcGFyYW0ge0lXWFJlcXVlc3RPcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxJQW55T2JqZWN0Pn1cbiAqL1xuZnVuY3Rpb24gd3hSZXF1ZXN0KG9wdGlvbnM6IElXWFJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxJQXBpUmVzcG9uc2U8SUFwaVJlc3BvbnNlRGF0YVR5cGU+PiB7XG4gIGNvbnN0IGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyIHx8IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9O1xuICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhIHx8IHt9O1xuICBvcHRpb25zLmxvYWRpbmdUZXh0ICYmIHd4LnNob3dMb2FkaW5nKHtcbiAgICB0aXRsZTogb3B0aW9ucy5sb2FkaW5nVGV4dCxcbiAgfSk7XG4gIGNvbnN0IGF1dG9FcnJvciA9IG9wdGlvbnMuYXV0b0Vycm9yIHx8ICdkaWFsb2cnO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBhcGkuYmFzZSArIG9wdGlvbnMudXJsLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgIGRhdGEsXG4gICAgICBoZWFkZXIsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA+PSA1MDApIHtcbiAgICAgICAgICBhdXRvRXJyb3IgPT09ICd0b2FzdCcgJiYgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF1dG9FcnJvciA9PT0gJ2RpYWxvZycgJiYgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5Zmo6ZSZ6K+vJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZCA9IHJlcy5kYXRhIGFzIElBcGlSZXNwb25zZTxJQXBpUmVzcG9uc2VEYXRhVHlwZT47XG4gICAgICAgICAgaWYgKGQuZXJyb3IpIHtcbiAgICAgICAgICAgIGF1dG9FcnJvciA9PT0gJ3RvYXN0JyAmJiB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogZC5tZXNzYWdlLFxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdXRvRXJyb3IgPT09ICdkaWFsb2cnICYmIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgY29udGVudDogZC5tZXNzYWdlLFxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKGQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICBhdXRvRXJyb3IgPT09ICd0b2FzdCcgJiYgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+acquefpemUmeivr++8jOivt+eojeWQjuWGjeivlScsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgYXV0b0Vycm9yID09PSAnZGlhbG9nJyAmJiB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5pyq55+l6ZSZ6K+vJyxcbiAgICAgICAgICBjb250ZW50OiAn6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIG9wdGlvbnMubG9hZGluZ1RleHQgJiYgd3guaGlkZUxvYWRpbmcoe30pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldCh1cmw6IHN0cmluZywgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gd3hSZXF1ZXN0KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgdXJsLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9zdCh1cmw6IHN0cmluZywgZGF0YT86IElBbnlPYmplY3QsIG9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMpIHtcbiAgcmV0dXJuIHd4UmVxdWVzdCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1dCh1cmw6IHN0cmluZywgZGF0YT86IElBbnlPYmplY3QsIG9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMpIHtcbiAgcmV0dXJuIHd4UmVxdWVzdCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIHVybCxcbiAgICBkYXRhLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsKHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gd3hSZXF1ZXN0KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgdXJsLFxuICAgIGRhdGEsXG4gIH0pO1xufVxuXG5jb25zdCByZXF1ZXN0ID0ge1xuICB3eFJlcXVlc3QsXG4gIGdldCxcbiAgcG9zdCxcbiAgcHV0LFxuICBkZWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xuIl19