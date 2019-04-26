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
var request_1 = require("../utils/request");
var camelize = require("../libs/camelize/index");
var storage_1 = require("../utils/storage");
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
        return __awaiter(this, void 0, void 0, function () {
            var token, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, storage_1.default.getToken()];
                    case 1:
                        token = _a.sent();
                        return [3, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3, 3];
                    case 3: return [2, generalReq(url, __assign({ token: token }, data), options)];
                }
            });
        });
    };
}
exports.genTokenContract = genTokenContract;
function genTokenAndUserIdContract(url) {
    return function (data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var token, userId, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, storage_1.default.getToken()];
                    case 1:
                        token = _a.sent();
                        return [4, storage_1.default.getUserId()];
                    case 2:
                        userId = _a.sent();
                        return [3, 4];
                    case 3:
                        e_2 = _a.sent();
                        return [3, 4];
                    case 4: return [2, generalReq(url, __assign({ token: token, userid: userId }, data), options)];
                }
            });
        });
    };
}
exports.genTokenAndUserIdContract = genTokenAndUserIdContract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE0RDtBQUM1RCxpREFBbUQ7QUFDbkQsNENBQXVDO0FBRXZDLFNBQVMsV0FBVyxDQUFDLEdBQXVDO0lBQzFELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFXLEVBQUUsSUFBaUIsRUFBRSxPQUF5QjtJQUMzRSxPQUFPLGlCQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBb0MsR0FBVztJQUM5RSxPQUFPLFVBQVMsSUFBTyxFQUFFLE9BQXlCO1FBQ2hELE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUE2QixDQUFDO0lBQ3BFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCw4Q0FJQztBQUVELFNBQWdCLGdCQUFnQixDQUFvQyxHQUFXO0lBQzdFLE9BQU8sVUFBZSxJQUFRLEVBQUUsT0FBeUI7Ozs7Ozs7d0JBRzdDLFdBQU0saUJBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWhDLEtBQUssR0FBRyxTQUF3QixDQUFDOzs7Ozs0QkFFbkMsV0FBTyxVQUFVLENBQUMsR0FBRyxhQUFJLEtBQUssT0FBQSxJQUFLLElBQUksR0FBSSxPQUFPLENBQTZCLEVBQUM7Ozs7S0FDakYsQ0FBQztBQUNKLENBQUM7QUFSRCw0Q0FRQztBQUVELFNBQWdCLHlCQUF5QixDQUFvQyxHQUFXO0lBQ3RGLE9BQU8sVUFBZSxJQUFRLEVBQUUsT0FBeUI7Ozs7Ozs7d0JBSTdDLFdBQU0saUJBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWhDLEtBQUssR0FBRyxTQUF3QixDQUFDO3dCQUN4QixXQUFNLGlCQUFPLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUIsQ0FBQzs7Ozs7NEJBRXJDLFdBQU8sVUFBVSxDQUFDLEdBQUcsYUFBSSxLQUFLLE9BQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFLLElBQUksR0FBSSxPQUFPLENBQTZCLEVBQUM7Ozs7S0FDakcsQ0FBQztBQUNKLENBQUM7QUFWRCw4REFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0LCB7IElSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0ICogYXMgY2FtZWxpemUgZnJvbSAnLi4vbGlicy9jYW1lbGl6ZS9pbmRleCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi91dGlscy9zdG9yYWdlJztcblxuZnVuY3Rpb24gcG9zdHByb2Nlc3MocmV0OiBJQXBpUmVzcG9uc2U8SUFwaVJlc3BvbnNlRGF0YVR5cGU+KTogSUFwaVJlc3BvbnNlPElBcGlSZXNwb25zZURhdGFUeXBlPiB7XG4gIHJldHVybiBjYW1lbGl6ZShyZXQpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmFsUmVxKHVybDogc3RyaW5nLCBkYXRhPzogSUFueU9iamVjdCwgb3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucykge1xuICByZXR1cm4gcmVxdWVzdC5wb3N0KHVybCwgZGF0YSwgb3B0aW9ucykudGhlbihwb3N0cHJvY2Vzcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Ob3JtYWxDb250cmFjdDxJLCBPIGV4dGVuZHMgSUFwaVJlc3BvbnNlRGF0YVR5cGU+KHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbihkYXRhOiBJLCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKSB7XG4gICAgcmV0dXJuIGdlbmVyYWxSZXEodXJsLCBkYXRhLCBvcHRpb25zKSBhcyBQcm9taXNlPElBcGlSZXNwb25zZTxPPj47XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Ub2tlbkNvbnRyYWN0PEksIE8gZXh0ZW5kcyBJQXBpUmVzcG9uc2VEYXRhVHlwZT4odXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKGRhdGE/OiBJLCBvcHRpb25zPzogSVJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxJQXBpUmVzcG9uc2U8Tz4+IHtcbiAgICBsZXQgdG9rZW47XG4gICAgdHJ5IHtcbiAgICAgIHRva2VuID0gYXdhaXQgc3RvcmFnZS5nZXRUb2tlbigpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGdlbmVyYWxSZXEodXJsLCB7IHRva2VuLCAuLi5kYXRhIH0sIG9wdGlvbnMpIGFzIFByb21pc2U8SUFwaVJlc3BvbnNlPE8+PjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlblRva2VuQW5kVXNlcklkQ29udHJhY3Q8SSwgTyBleHRlbmRzIElBcGlSZXNwb25zZURhdGFUeXBlPih1cmw6IHN0cmluZykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24oZGF0YT86IEksIG9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPElBcGlSZXNwb25zZTxPPj4ge1xuICAgIGxldCB0b2tlbjtcbiAgICBsZXQgdXNlcklkO1xuICAgIHRyeSB7XG4gICAgICB0b2tlbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0VG9rZW4oKTtcbiAgICAgIHVzZXJJZCA9IGF3YWl0IHN0b3JhZ2UuZ2V0VXNlcklkKCk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZ2VuZXJhbFJlcSh1cmwsIHsgdG9rZW4sIHVzZXJpZDogdXNlcklkLCAuLi5kYXRhIH0sIG9wdGlvbnMpIGFzIFByb21pc2U8SUFwaVJlc3BvbnNlPE8+PjtcbiAgfTtcbn1cbiJdfQ==