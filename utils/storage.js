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
var index_1 = require("../enums/index");
function wxGetStorage(key) {
    return new Promise(function (resolve, reject) {
        wx.getStorage({
            key: key,
            success: function (res) {
                resolve(res.data);
            },
            fail: function (err) {
                reject(err);
            },
        });
    });
}
function wxSetStorage(key, data) {
    return new Promise(function (resolve, reject) {
        wx.setStorage({
            key: key,
            data: data,
            success: function (_res) {
                resolve();
            },
            fail: function (err) {
                reject(err);
            },
        });
    });
}
function genStorageGet(key) {
    return function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, wxGetStorage(key)];
                    case 1: return [2, (_a.sent()) || null];
                    case 2:
                        e_1 = _a.sent();
                        console.error('get storage error', e_1);
                        return [3, 3];
                    case 3: return [2, null];
                }
            });
        });
    };
}
function genStorageSet(key) {
    return function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, wxSetStorage(key, data)];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error('set storage error', e_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
}
function genStorageGetAndSet(key) {
    return {
        g: genStorageGet(key),
        s: genStorageSet(key),
    };
}
var _a = genStorageGetAndSet(index_1.EnumStorageKey.token), getToken = _a.g, setToken = _a.s;
var _b = genStorageGetAndSet(index_1.EnumStorageKey.tokenExpires), getTokenExpires = _b.g, setTokenExpires = _b.s;
var _c = genStorageGetAndSet(index_1.EnumStorageKey.userId), getUserId = _c.g, setUserId = _c.s;
var _d = genStorageGetAndSet(index_1.EnumStorageKey.password), getPassword = _d.g, setPassword = _d.s;
var _e = genStorageGetAndSet(index_1.EnumStorageKey.userInfo), getUserInfo = _e.g, setUserInfo = _e.s;
var storage = {
    wxGetStorage: wxGetStorage,
    wxSetStorage: wxSetStorage,
    getToken: getToken,
    setToken: setToken,
    getTokenExpires: getTokenExpires,
    setTokenExpires: setTokenExpires,
    getUserId: getUserId,
    setUserId: setUserId,
    getPassword: getPassword,
    setPassword: setPassword,
    getUserInfo: getUserInfo,
    setUserInfo: setUserInfo,
};
exports.default = storage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFnRDtBQVFoRCxTQUFTLFlBQVksQ0FBQyxHQUF3QjtJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsS0FBQTtZQUNILE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDUixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBUUQsU0FBUyxZQUFZLENBQUMsR0FBd0IsRUFBRSxJQUEwQjtJQUN4RSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE9BQU8sRUFBRSxVQUFDLElBQUk7Z0JBQ1osT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDUixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBWUQsU0FBUyxhQUFhLENBQThCLEdBQWM7SUFDaEUsT0FBTzs7Ozs7Ozt3QkFFSSxXQUFNLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBQTs0QkFBOUIsV0FBTyxDQUFBLFNBQXFDLEtBQUksSUFBSSxFQUFDOzs7d0JBRXJELE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsR0FBQyxDQUFDLENBQUM7OzRCQUV4QyxXQUFPLElBQUksRUFBQzs7OztLQUNiLENBQUM7QUFDSixDQUFDO0FBUUQsU0FBUyxhQUFhLENBQThCLEdBQWM7SUFDaEUsT0FBTyxVQUFlLElBQWdCOzs7Ozs7O3dCQUVsQyxXQUFNLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDOzs7O3dCQUU5QixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEdBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFekMsQ0FBQztBQUNKLENBQUM7QUFRRCxTQUFTLG1CQUFtQixDQUE4QixHQUFjO0lBQ3RFLE9BQU87UUFDTCxDQUFDLEVBQUUsYUFBYSxDQUFLLEdBQUcsQ0FBQztRQUN6QixDQUFDLEVBQUUsYUFBYSxDQUFLLEdBQUcsQ0FBQztLQUMxQixDQUFDO0FBQ0osQ0FBQztBQWNLLElBQUEsc0RBRzBELEVBRjlELGVBQVcsRUFDWCxlQUM4RCxDQUFDO0FBVzNELElBQUEsNkRBR3dFLEVBRjVFLHNCQUFrQixFQUNsQixzQkFDNEUsQ0FBQztBQVd6RSxJQUFBLHVEQUc0RCxFQUZoRSxnQkFBWSxFQUNaLGdCQUNnRSxDQUFDO0FBVzdELElBQUEseURBR2dFLEVBRnBFLGtCQUFjLEVBQ2Qsa0JBQ29FLENBQUM7QUFXakUsSUFBQSx5REFHZ0UsRUFGcEUsa0JBQWMsRUFDZCxrQkFDb0UsQ0FBQztBQUd2RSxJQUFNLE9BQU8sR0FBRztJQUNkLFlBQVksY0FBQTtJQUNaLFlBQVksY0FBQTtJQUNaLFFBQVEsVUFBQTtJQUNSLFFBQVEsVUFBQTtJQUNSLGVBQWUsaUJBQUE7SUFDZixlQUFlLGlCQUFBO0lBQ2YsU0FBUyxXQUFBO0lBQ1QsU0FBUyxXQUFBO0lBQ1QsV0FBVyxhQUFBO0lBQ1gsV0FBVyxhQUFBO0lBQ1gsV0FBVyxhQUFBO0lBQ1gsV0FBVyxhQUFBO0NBQ1osQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdG9yYWdlS2V5IH0gZnJvbSAnLi4vZW51bXMvaW5kZXgnO1xuaW1wb3J0IHsgSUNPdXRwdXRVc2VySW5mbyB9IGZyb20gJy4uL2NvbnRyYWN0cy91c2VyJztcblxuLyoqXG4gKiB3eC5nZXRTdG9yYWdlIFByb21pc2VcbiAqIEBwYXJhbSB7SVN0b3JhZ2VJdGVtW1wia2V5XCJdfSBrZXlcbiAqIEByZXR1cm5zIHtQcm9taXNlPElTdG9yYWdlSXRlbVtcImRhdGFcIl0+fVxuICovXG5mdW5jdGlvbiB3eEdldFN0b3JhZ2Uoa2V5OiBJU3RvcmFnZUl0ZW1bJ2tleSddKTogUHJvbWlzZTxJU3RvcmFnZUl0ZW1bJ2RhdGEnXT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5LFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogd3guc2V0U3RvcmFnZSBQcm9taXNlXG4gKiBAcGFyYW0ge0lTdG9yYWdlSXRlbVtcImtleVwiXX0ga2V5XG4gKiBAcGFyYW0ge0lTdG9yYWdlSXRlbVtcImRhdGFcIl19IGRhdGFcbiAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZD59XG4gKi9cbmZ1bmN0aW9uIHd4U2V0U3RvcmFnZShrZXk6IElTdG9yYWdlSXRlbVsna2V5J10sIGRhdGE6IElTdG9yYWdlSXRlbVsnZGF0YSddKTogUHJvbWlzZTx1bmRlZmluZWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgIGtleSxcbiAgICAgIGRhdGEsXG4gICAgICBzdWNjZXNzOiAoX3JlcykgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LFxuICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yYWdlSXRlbUJhc2UgZXh0ZW5kcyBJU3RvcmFnZUl0ZW0ge1xuICBrZXk6IGtleW9mIHR5cGVvZiBFbnVtU3RvcmFnZUtleTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBnZXRTdG9yYWdlIGZvciBzcGVjaWZpZWQgaXRlbVxuICogQGdlbmVyaWNzIHtTSX0gc3RvcmFnZSBpdGVtXG4gKiBAcGFyYW0ge1NJW1wia2V5XCJdfSBrZXlcbiAqIEByZXR1cm5zIHsoKSA9PiBQcm9taXNlPFNJW1wiZGF0YVwiXSB8IG51bGw+fVxuICovXG5mdW5jdGlvbiBnZW5TdG9yYWdlR2V0PFNJIGV4dGVuZHMgSVN0b3JhZ2VJdGVtQmFzZT4oa2V5OiBTSVsna2V5J10pIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgd3hHZXRTdG9yYWdlKGtleSkgYXMgU0lbJ2RhdGEnXSB8fCBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2dldCBzdG9yYWdlIGVycm9yJywgZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHNldFN0b3JhZ2UgZm9yIHNwZWNpZmllZCBpdGVtXG4gKiBAZ2VuZXJpY3Mge1NJfSBzdG9yYWdlIGl0ZW1cbiAqIEBwYXJhbSB7U0lbXCJrZXlcIl19IGtleVxuICogQHJldHVybnMgeyhkYXRhOiBTSVtcImRhdGFcIl0pID0+IFByb21pc2U8dm9pZD59XG4gKi9cbmZ1bmN0aW9uIGdlblN0b3JhZ2VTZXQ8U0kgZXh0ZW5kcyBJU3RvcmFnZUl0ZW1CYXNlPihrZXk6IFNJWydrZXknXSkge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24oZGF0YTogU0lbJ2RhdGEnXSkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB3eFNldFN0b3JhZ2Uoa2V5LCBkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdzZXQgc3RvcmFnZSBlcnJvcicsIGUpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBnZXRTdG9yYWdlICYgc2V0U3RvcmFnZSBmb3Igc3BlY2lmaWVkIGl0ZW1cbiAqIEBnZW5lcmljcyB7U0l9IHN0b3JhZ2UgaXRlbVxuICogQHBhcmFtIHtTSVtcImtleVwiXX0ga2V5XG4gKiBAcmV0dXJucyB7e2c6ICgpID0+IFByb21pc2U8U0lbXCJkYXRhXCJdIHwgbnVsbD47IHM6IChkYXRhOiBTSVtcImRhdGFcIl0pID0+IFByb21pc2U8dm9pZD59fVxuICovXG5mdW5jdGlvbiBnZW5TdG9yYWdlR2V0QW5kU2V0PFNJIGV4dGVuZHMgSVN0b3JhZ2VJdGVtQmFzZT4oa2V5OiBTSVsna2V5J10pIHtcbiAgcmV0dXJuIHtcbiAgICBnOiBnZW5TdG9yYWdlR2V0PFNJPihrZXkpLFxuICAgIHM6IGdlblN0b3JhZ2VTZXQ8U0k+KGtleSksXG4gIH07XG59XG5cblxuLy8gaXRlbSBtZXRob2RzXG5cbi8qKlxuICogVG9rZW5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yYWdlSXRlbVRva2VuIGV4dGVuZHMgSVN0b3JhZ2VJdGVtQmFzZSB7XG4gIGtleTogRW51bVN0b3JhZ2VLZXkudG9rZW47XG4gIGRhdGE6IHN0cmluZztcbn1cblxuY29uc3Qge1xuICBnOiBnZXRUb2tlbixcbiAgczogc2V0VG9rZW4sXG59ID0gZ2VuU3RvcmFnZUdldEFuZFNldDxJU3RvcmFnZUl0ZW1Ub2tlbj4oRW51bVN0b3JhZ2VLZXkudG9rZW4pO1xuXG4vKipcbiAqIFRva2VuRXhwaXJlc1xuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JhZ2VJdGVtVG9rZW5FeHBpcmVzIGV4dGVuZHMgSVN0b3JhZ2VJdGVtQmFzZSB7XG4gIGtleTogRW51bVN0b3JhZ2VLZXkudG9rZW5FeHBpcmVzO1xuICBkYXRhOiBzdHJpbmc7XG59XG5cbmNvbnN0IHtcbiAgZzogZ2V0VG9rZW5FeHBpcmVzLFxuICBzOiBzZXRUb2tlbkV4cGlyZXMsXG59ID0gZ2VuU3RvcmFnZUdldEFuZFNldDxJU3RvcmFnZUl0ZW1Ub2tlbkV4cGlyZXM+KEVudW1TdG9yYWdlS2V5LnRva2VuRXhwaXJlcyk7XG5cbi8qKlxuICogVXNlcklkXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJU3RvcmFnZUl0ZW1Vc2VySWQgZXh0ZW5kcyBJU3RvcmFnZUl0ZW1CYXNlIHtcbiAga2V5OiBFbnVtU3RvcmFnZUtleS51c2VySWQ7XG4gIGRhdGE6IHN0cmluZztcbn1cblxuY29uc3Qge1xuICBnOiBnZXRVc2VySWQsXG4gIHM6IHNldFVzZXJJZCxcbn0gPSBnZW5TdG9yYWdlR2V0QW5kU2V0PElTdG9yYWdlSXRlbVVzZXJJZD4oRW51bVN0b3JhZ2VLZXkudXNlcklkKTtcblxuLyoqXG4gKiBQYXNzd29yZFxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JhZ2VJdGVtUGFzc3dvcmQgZXh0ZW5kcyBJU3RvcmFnZUl0ZW1CYXNlIHtcbiAga2V5OiBFbnVtU3RvcmFnZUtleS5wYXNzd29yZDtcbiAgZGF0YTogc3RyaW5nO1xufVxuXG5jb25zdCB7XG4gIGc6IGdldFBhc3N3b3JkLFxuICBzOiBzZXRQYXNzd29yZCxcbn0gPSBnZW5TdG9yYWdlR2V0QW5kU2V0PElTdG9yYWdlSXRlbVBhc3N3b3JkPihFbnVtU3RvcmFnZUtleS5wYXNzd29yZCk7XG5cbi8qKlxuICogVXNlckluZm9cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yYWdlSXRlbVVzZXJJbmZvIGV4dGVuZHMgSVN0b3JhZ2VJdGVtQmFzZSB7XG4gIGtleTogRW51bVN0b3JhZ2VLZXkudXNlckluZm87XG4gIGRhdGE6IFBpY2s8SUNPdXRwdXRVc2VySW5mbywgJ25hbWUnIHwgJ2RlcGFydG1lbnQnIHwgJ2Zsb29yJyB8ICdyb29tJz47XG59XG5cbmNvbnN0IHtcbiAgZzogZ2V0VXNlckluZm8sXG4gIHM6IHNldFVzZXJJbmZvLFxufSA9IGdlblN0b3JhZ2VHZXRBbmRTZXQ8SVN0b3JhZ2VJdGVtVXNlckluZm8+KEVudW1TdG9yYWdlS2V5LnVzZXJJbmZvKTtcblxuXG5jb25zdCBzdG9yYWdlID0ge1xuICB3eEdldFN0b3JhZ2UsXG4gIHd4U2V0U3RvcmFnZSxcbiAgZ2V0VG9rZW4sXG4gIHNldFRva2VuLFxuICBnZXRUb2tlbkV4cGlyZXMsXG4gIHNldFRva2VuRXhwaXJlcyxcbiAgZ2V0VXNlcklkLFxuICBzZXRVc2VySWQsXG4gIGdldFBhc3N3b3JkLFxuICBzZXRQYXNzd29yZCxcbiAgZ2V0VXNlckluZm8sXG4gIHNldFVzZXJJbmZvLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcbiJdfQ==