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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFrQztBQWtCbEMsU0FBUyxTQUFTLENBQUMsT0FBMEI7SUFDM0MsSUFBTSxNQUFNLGdCQUNQLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsSUFDekIsY0FBYyxFQUFFLGtCQUFrQixFQUNsQyxXQUFXLEVBQUUsU0FBUyxHQUN2QixDQUFDO0lBQ0YsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDaEMsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3BDLEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVztLQUMzQixDQUFDLENBQUM7SUFDSCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztJQUNoRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxjQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHO1lBQzNCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixJQUFJLE1BQUE7WUFDSixNQUFNLFFBQUE7WUFDTixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlELFNBQVMsS0FBSyxPQUFPLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDcEMsS0FBSyxFQUFFLGFBQWE7d0JBQ3BCLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxJQUFJ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LEtBQUE7SUFDSCxHQUFHLEtBQUE7Q0FDSixDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tICcuLi9jb25maWdzL2FwaXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElXWFJlcXVlc3RPcHRpb25zIHtcbiAgbWV0aG9kOiAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ0RFTEVURSc7XG4gIHVybDogc3RyaW5nOyAvLyAnLycg5byA5aS055qEIGFwaS5iYXNlIOS5i+WQjueahCBVUkxcbiAgZGF0YT86IElBbnlPYmplY3Q7XG4gIGhlYWRlcj86IElBbnlPYmplY3Q7XG4gIGxvYWRpbmdUZXh0Pzogc3RyaW5nOyAvLyDliqDovb3kuK3nmoTmlofmoYjvvIzlgLzkuLrmnInmlYjlrZfnrKbkuLLml7bmmL7npLpcbiAgYXV0b0Vycm9yPzogJ25vbmUnIHwgJ3RvYXN0JyB8ICdkaWFsb2cnOyAvLyDplJnor6/ml7bnmoToh6rliqjmj5DnpLrvvIzlj6/pgIkgdG9hc3Qg5oiWIGRpYWxvZyDmqKHlvI/jgILpu5jorqTkuLogZGlhbG9nXG59XG5cbmV4cG9ydCB0eXBlIElSZXF1ZXN0T3B0aW9ucyA9IFBpY2s8SVdYUmVxdWVzdE9wdGlvbnMsICdoZWFkZXInIHwgJ2xvYWRpbmdUZXh0JyB8ICdhdXRvRXJyb3InPjtcblxuLyoqXG4gKiBCYXNlIHJlcXVlc3RcbiAqIEBwYXJhbSB7SVdYUmVxdWVzdE9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtQcm9taXNlPElBbnlPYmplY3Q+fVxuICovXG5mdW5jdGlvbiB3eFJlcXVlc3Qob3B0aW9uczogSVdYUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPElBcGlSZXNwb25zZTxJQXBpUmVzcG9uc2VEYXRhVHlwZT4+IHtcbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIC4uLihvcHRpb25zLmhlYWRlciB8fCB7fSksXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnWC1SZWZlcmVyJzogJ0lucXVpcmUnLFxuICB9O1xuICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhIHx8IHt9O1xuICBvcHRpb25zLmxvYWRpbmdUZXh0ICYmIHd4LnNob3dMb2FkaW5nKHtcbiAgICB0aXRsZTogb3B0aW9ucy5sb2FkaW5nVGV4dCxcbiAgfSk7XG4gIGNvbnN0IGF1dG9FcnJvciA9IG9wdGlvbnMuYXV0b0Vycm9yIHx8ICdkaWFsb2cnO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBhcGkuYmFzZSArIG9wdGlvbnMudXJsLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgIGRhdGEsXG4gICAgICBoZWFkZXIsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA+PSA1MDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdyZXEgZmFpbCB3aXRoIGNvZGUnLCByZXMuc3RhdHVzQ29kZSwgcmVzLmRhdGEpO1xuICAgICAgICAgIGF1dG9FcnJvciA9PT0gJ3RvYXN0JyAmJiB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmnI3liqHlmajplJnor6/vvIzor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXV0b0Vycm9yID09PSAnZGlhbG9nJyAmJiB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmnI3liqHlmajplJnor68nLFxuICAgICAgICAgICAgY29udGVudDogJ+ivt+eojeWQjuWGjeivlScsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZWplY3QocmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVxIHN1Y2Nlc3Mgd2l0aCBjb2RlJywgcmVzLnN0YXR1c0NvZGUsIHJlcy5kYXRhKTtcbiAgICAgICAgICBjb25zdCBkID0gcmVzLmRhdGEgYXMgSUFwaVJlc3BvbnNlPElBcGlSZXNwb25zZURhdGFUeXBlPjtcbiAgICAgICAgICBpZiAoZC5lcnJvcikge1xuICAgICAgICAgICAgYXV0b0Vycm9yID09PSAndG9hc3QnICYmIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBkLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF1dG9FcnJvciA9PT0gJ2RpYWxvZycgJiYgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICBjb250ZW50OiBkLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3JlcSBmYWlsJywgZXJyKTtcbiAgICAgICAgYXV0b0Vycm9yID09PSAndG9hc3QnICYmIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmnKrnn6XplJnor6/vvIzor7fnqI3lkI7lho3or5UnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF1dG9FcnJvciA9PT0gJ2RpYWxvZycgJiYgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+acquefpemUmeivrycsXG4gICAgICAgICAgY29udGVudDogJ+ivt+eojeWQjuWGjeivlScsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICBvcHRpb25zLmxvYWRpbmdUZXh0ICYmIHd4LmhpZGVMb2FkaW5nKHt9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMpIHtcbiAgcmV0dXJuIHd4UmVxdWVzdCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHVybCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE/OiBJQW55T2JqZWN0LCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgdXJsLFxuICAgIGRhdGEsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBJQW55T2JqZWN0LCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gIHJldHVybiB3eFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbCh1cmw6IHN0cmluZywgZGF0YT86IElBbnlPYmplY3QsIG9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMpIHtcbiAgcmV0dXJuIHd4UmVxdWVzdCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIHVybCxcbiAgICBkYXRhLFxuICB9KTtcbn1cblxuY29uc3QgcmVxdWVzdCA9IHtcbiAgd3hSZXF1ZXN0LFxuICBnZXQsXG4gIHBvc3QsXG4gIHB1dCxcbiAgZGVsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcbiJdfQ==