import request, { IRequestOptions } from '../utils/request';
import * as camelize from '../libs/camelize/index';
import storage from '../utils/storage';

function postprocess(ret: IApiResponse<IApiResponseDataType>): IApiResponse<IApiResponseDataType> {
  return camelize(ret);
}

function generalReq(url: string, data?: IAnyObject, options?: IRequestOptions) {
  return request.post(url, data, options).then(postprocess);
}

export function genNormalContract<I, O extends IApiResponseDataType>(url: string) {
  return function(data: I, options?: IRequestOptions) {
    return generalReq(url, data, options) as Promise<IApiResponse<O>>;
  };
}

export function genTokenContract<I, O extends IApiResponseDataType>(url: string) {
  return async function(data?: I, options?: IRequestOptions): Promise<IApiResponse<O>> {
    let token;
    try {
      token = await storage.getToken();
    } catch (e) {}
    return generalReq(url, { token, ...data }, options) as Promise<IApiResponse<O>>;
  };
}

export function genTokenAndUserIdContract<I, O extends IApiResponseDataType>(url: string) {
  return async function(data?: I, options?: IRequestOptions): Promise<IApiResponse<O>> {
    let token;
    let userId;
    try {
      token = await storage.getToken();
      userId = await storage.getUserId();
    } catch (e) {}
    return generalReq(url, { token, userid: userId, ...data }, options) as Promise<IApiResponse<O>>;
  };
}
