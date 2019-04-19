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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFrQztBQWtCbEMsU0FBUyxTQUFTLENBQUMsT0FBMEI7SUFDM0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSTtRQUMvQixjQUFjLEVBQUUsa0JBQWtCO0tBQ25DLENBQUM7SUFDRixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNoQyxPQUFPLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDcEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0tBQzNCLENBQUMsQ0FBQztJQUNILElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDO0lBQ2hELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUc7WUFDM0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLElBQUksTUFBQTtZQUNKLE1BQU0sUUFBQTtZQUNOLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtvQkFDekIsU0FBUyxLQUFLLE9BQU8sSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNwQyxLQUFLLEVBQUUsYUFBYTt3QkFDcEIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFDO29CQUNILFNBQVMsS0FBSyxRQUFRLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDckMsS0FBSyxFQUFFLE9BQU87d0JBQ2QsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLFVBQVUsRUFBRSxLQUFLO3FCQUNsQixDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUEwQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7d0JBQ1gsU0FBUyxLQUFLLE9BQU8sSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNwQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU87NEJBQ2hCLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQzt3QkFDSCxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ3JDLEtBQUssRUFBRSxFQUFFOzRCQUNULE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTzs0QkFDbEIsVUFBVSxFQUFFLEtBQUs7eUJBQ2xCLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ1o7WUFDSCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDUixTQUFTLEtBQUssT0FBTyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3BDLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUM7Z0JBQ0gsU0FBUyxLQUFLLFFBQVEsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNyQyxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCLENBQUMsQ0FBQztnQkFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsR0FBVyxFQUFFLE9BQXlCO0lBQ2pELE9BQU8sU0FBUyxjQUNYLE9BQU8sSUFDVixNQUFNLEVBQUUsS0FBSyxFQUNiLEdBQUcsS0FBQSxJQUNILENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsT0FBeUI7SUFDckUsT0FBTyxTQUFTLGNBQ1gsT0FBTyxJQUNWLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxLQUFBO1FBQ0gsSUFBSSxNQUFBLElBQ0osQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxHQUFXLEVBQUUsSUFBaUIsRUFBRSxPQUF5QjtJQUNwRSxPQUFPLFNBQVMsY0FDWCxPQUFPLElBQ1YsTUFBTSxFQUFFLEtBQUssRUFDYixHQUFHLEtBQUE7UUFDSCxJQUFJLE1BQUEsSUFDSixDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFpQixFQUFFLE9BQXlCO0lBQ3BFLE9BQU8sU0FBUyxjQUNYLE9BQU8sSUFDVixNQUFNLEVBQUUsUUFBUSxFQUNoQixHQUFHLEtBQUE7UUFDSCxJQUFJLE1BQUEsSUFDSixDQUFDO0FBQ0wsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFHO0lBQ2QsU0FBUyxXQUFBO0lBQ1QsR0FBRyxLQUFBO0lBQ0gsSUFBSSxNQUFBO0lBQ0osR0FBRyxLQUFBO0lBQ0gsR0FBRyxLQUFBO0NBQ0osQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSAnLi4vY29uZmlncy9hcGlzJztcblxuZXhwb3J0IGludGVyZmFjZSBJV1hSZXF1ZXN0T3B0aW9ucyB7XG4gIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnO1xuICB1cmw6IHN0cmluZzsgLy8gJy8nIOW8gOWktOeahCBhcGkuYmFzZSDkuYvlkI7nmoQgVVJMXG4gIGRhdGE/OiBJQW55T2JqZWN0O1xuICBoZWFkZXI/OiBJQW55T2JqZWN0O1xuICBsb2FkaW5nVGV4dD86IHN0cmluZzsgLy8g5Yqg6L295Lit55qE5paH5qGI77yM5YC85Li65pyJ5pWI5a2X56ym5Liy5pe25pi+56S6XG4gIGF1dG9FcnJvcj86ICdub25lJyB8ICd0b2FzdCcgfCAnZGlhbG9nJzsgLy8g6ZSZ6K+v5pe255qE6Ieq5Yqo5o+Q56S677yM5Y+v6YCJIHRvYXN0IOaIliBkaWFsb2cg5qih5byP44CC6buY6K6k5Li6IGRpYWxvZ1xufVxuXG5leHBvcnQgdHlwZSBJUmVxdWVzdE9wdGlvbnMgPSBQaWNrPElXWFJlcXVlc3RPcHRpb25zLCAnaGVhZGVyJyB8ICdsb2FkaW5nVGV4dCcgfCAnYXV0b0Vycm9yJz47XG5cbi8qKlxuICogYmFzZSB3eFJlcXVlc3RcbiAqIEBwYXJhbSB7SVdYUmVxdWVzdE9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtQcm9taXNlPElBbnlPYmplY3Q+fVxuICovXG5mdW5jdGlvbiB3eFJlcXVlc3Qob3B0aW9uczogSVdYUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPElBcGlSZXNwb25zZTxJQXBpUmVzcG9uc2VEYXRhVHlwZT4+IHtcbiAgY29uc3QgaGVhZGVyID0gb3B0aW9ucy5oZWFkZXIgfHwge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH07XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge307XG4gIG9wdGlvbnMubG9hZGluZ1RleHQgJiYgd3guc2hvd0xvYWRpbmcoe1xuICAgIHRpdGxlOiBvcHRpb25zLmxvYWRpbmdUZXh0LFxuICB9KTtcbiAgY29uc3QgYXV0b0Vycm9yID0gb3B0aW9ucy5hdXRvRXJyb3IgfHwgJ2RpYWxvZyc7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGFwaS5iYXNlICsgb3B0aW9ucy51cmwsXG4gICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgZGF0YSxcbiAgICAgIGhlYWRlcixcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID49IDUwMCkge1xuICAgICAgICAgIGF1dG9FcnJvciA9PT0gJ3RvYXN0JyAmJiB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmnI3liqHlmajplJnor6/vvIzor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXV0b0Vycm9yID09PSAnZGlhbG9nJyAmJiB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmnI3liqHlmajplJnor68nLFxuICAgICAgICAgICAgY29udGVudDogJ+ivt+eojeWQjuWGjeivlScsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZWplY3QocmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkID0gcmVzLmRhdGEgYXMgSUFwaVJlc3BvbnNlPElBcGlSZXNwb25zZURhdGFUeXBlPjtcbiAgICAgICAgICBpZiAoZC5lcnJvcikge1xuICAgICAgICAgICAgYXV0b0Vycm9yID09PSAndG9hc3QnICYmIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBkLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF1dG9FcnJvciA9PT0gJ2RpYWxvZycgJiYgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICBjb250ZW50OiBkLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgIGF1dG9FcnJvciA9PT0gJ3RvYXN0JyAmJiB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5pyq55+l6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBhdXRvRXJyb3IgPT09ICdkaWFsb2cnICYmIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmnKrnn6XplJnor68nLFxuICAgICAgICAgIGNvbnRlbnQ6ICfor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgb3B0aW9ucy5sb2FkaW5nVGV4dCAmJiB3eC5oaWRlTG9hZGluZyh7fSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICB1cmwsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gd3hSZXF1ZXN0KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHVybCxcbiAgICBkYXRhLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHV0KHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gd3hSZXF1ZXN0KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgdXJsLFxuICAgIGRhdGEsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWwodXJsOiBzdHJpbmcsIGRhdGE/OiBJQW55T2JqZWN0LCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbmNvbnN0IHJlcXVlc3QgPSB7XG4gIHd4UmVxdWVzdCxcbiAgZ2V0LFxuICBwb3N0LFxuICBwdXQsXG4gIGRlbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG4iXX0=