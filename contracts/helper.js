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
var request_1 = require("../utils/request");
var storages_1 = require("../configs/storages");
var camelize = require("../libs/camelize/index");
function postprocess(ret) {
    return camelize(ret);
}
function generalReq(url, data, options) {
    return request_1.default.post(url, data, options).then(postprocess);
}
function genNormalContract(url) {
    return function (data, options) {
        return generalReq(url, data, options);
    };
}
exports.genNormalContract = genNormalContract;
function genTokenContract(url) {
    return function (data, options) {
        var token;
        try {
            token = wx.getStorageSync(storages_1.default.token);
        }
        catch (e) { }
        return generalReq(url, __assign({ token: token }, data), options);
    };
}
exports.genTokenContract = genTokenContract;
function genTokenAndUserIdContract(url) {
    return function (data, options) {
        var token;
        var userId;
        try {
            token = wx.getStorageSync(storages_1.default.token);
            userId = wx.getStorageSync(storages_1.default.userId);
        }
        catch (e) { }
        return generalReq(url, __assign({ token: token, userid: userId }, data), options);
    };
}
exports.genTokenAndUserIdContract = genTokenAndUserIdContract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEQ7QUFDNUQsZ0RBQTZDO0FBQzdDLGlEQUFtRDtBQUVuRCxTQUFTLFdBQVcsQ0FBQyxHQUF1QztJQUMxRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsT0FBeUI7SUFDM0UsT0FBTyxpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQW9DLEdBQVc7SUFDOUUsT0FBTyxVQUFTLElBQU8sRUFBRSxPQUF5QjtRQUNoRCxPQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBNkIsQ0FBQztJQUNwRSxDQUFDLENBQUM7QUFDSixDQUFDO0FBSkQsOENBSUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBb0MsR0FBVztJQUM3RSxPQUFPLFVBQVMsSUFBUSxFQUFFLE9BQXlCO1FBQ2pELElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSTtZQUNGLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGtCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBQ2QsT0FBTyxVQUFVLENBQUMsR0FBRyxhQUFJLEtBQUssT0FBQSxJQUFLLElBQUksR0FBSSxPQUFPLENBQTZCLENBQUM7SUFDbEYsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVJELDRDQVFDO0FBRUQsU0FBZ0IseUJBQXlCLENBQW9DLEdBQVc7SUFDdEYsT0FBTyxVQUFTLElBQVEsRUFBRSxPQUF5QjtRQUNqRCxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGtCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQztRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7UUFDZCxPQUFPLFVBQVUsQ0FBQyxHQUFHLGFBQUksS0FBSyxPQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sSUFBSyxJQUFJLEdBQUksT0FBTyxDQUE2QixDQUFDO0lBQ2xHLENBQUMsQ0FBQztBQUNKLENBQUM7QUFWRCw4REFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0LCB7IElSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHN0b3JhZ2VLZXkgZnJvbSAnLi4vY29uZmlncy9zdG9yYWdlcyc7XG5pbXBvcnQgKiBhcyBjYW1lbGl6ZSBmcm9tICcuLi9saWJzL2NhbWVsaXplL2luZGV4JztcblxuZnVuY3Rpb24gcG9zdHByb2Nlc3MocmV0OiBJQXBpUmVzcG9uc2U8SUFwaVJlc3BvbnNlRGF0YVR5cGU+KTogSUFwaVJlc3BvbnNlPElBcGlSZXNwb25zZURhdGFUeXBlPiB7XG4gIHJldHVybiBjYW1lbGl6ZShyZXQpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmFsUmVxKHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gcmVxdWVzdC5wb3N0KHVybCwgZGF0YSwgb3B0aW9ucykudGhlbihwb3N0cHJvY2Vzcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Ob3JtYWxDb250cmFjdDxJLCBPIGV4dGVuZHMgSUFwaVJlc3BvbnNlRGF0YVR5cGU+KHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbihkYXRhOiBJLCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gICAgcmV0dXJuIGdlbmVyYWxSZXEodXJsLCBkYXRhLCBvcHRpb25zKSBhcyBQcm9taXNlPElBcGlSZXNwb25zZTxPPj47XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Ub2tlbkNvbnRyYWN0PEksIE8gZXh0ZW5kcyBJQXBpUmVzcG9uc2VEYXRhVHlwZT4odXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRhdGE/OiBJLCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxJQXBpUmVzcG9uc2U8Tz4+IHtcbiAgICBsZXQgdG9rZW47XG4gICAgdHJ5IHtcbiAgICAgIHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoc3RvcmFnZUtleS50b2tlbik7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZ2VuZXJhbFJlcSh1cmwsIHsgdG9rZW4sIC4uLmRhdGEgfSwgb3B0aW9ucykgYXMgUHJvbWlzZTxJQXBpUmVzcG9uc2U8Tz4+O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuVG9rZW5BbmRVc2VySWRDb250cmFjdDxJLCBPIGV4dGVuZHMgSUFwaVJlc3BvbnNlRGF0YVR5cGU+KHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbihkYXRhPzogSSwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8SUFwaVJlc3BvbnNlPE8+PiB7XG4gICAgbGV0IHRva2VuO1xuICAgIGxldCB1c2VySWQ7XG4gICAgdHJ5IHtcbiAgICAgIHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoc3RvcmFnZUtleS50b2tlbik7XG4gICAgICB1c2VySWQgPSB3eC5nZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5LnVzZXJJZCk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZ2VuZXJhbFJlcSh1cmwsIHsgdG9rZW4sIHVzZXJpZDogdXNlcklkLCAuLi5kYXRhIH0sIG9wdGlvbnMpIGFzIFByb21pc2U8SUFwaVJlc3BvbnNlPE8+PjtcbiAgfTtcbn1cbiJdfQ==