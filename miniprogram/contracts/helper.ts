import request, { IRequestOptions } from '../utils/request';
import * as camelize from '../libs/camelize/index';
import storage from '../utils/storage';

export type IPostprocessFunction<T extends IApiResponseDataType> = (ret: IApiResponse<T>) => IApiResponse<T>;

const generalPostprocess: IPostprocessFunction<IApiResponseDataType> = (ret) => {
  return camelize(ret);
};

function generalReq<O extends IApiResponseDataType>(url: string, data?: IAnyObject, options?: IRequestOptions, postprocesses: IPostprocessFunction<O>[] = []) {
  return request.post(url, data, options).then((ret) => {
    let r = JSON.parse(JSON.stringify(ret));
    [generalPostprocess, ...postprocesses].forEach(f => r = f(r));
    return r;
  });
}

export function genNormalContract<I, O extends IApiResponseDataType>(url: string, postprocesses?: IPostprocessFunction<O>[]) {
  return function(data: I, options?: IRequestOptions) {
    return generalReq<O>(url, data, options, postprocesses) as Promise<IApiResponse<O>>;
  };
}

export function genTokenContract<I, O extends IApiResponseDataType>(url: string, postprocesses?: IPostprocessFunction<O>[]) {
  return async function(data?: I, options?: IRequestOptions) {
    let token;
    try {
      token = await storage.getToken();
    } catch (e) {}
    return generalReq<O>(url, { token, ...data }, options, postprocesses) as Promise<IApiResponse<O>>;
  };
}

export function genTokenAndUserIdContract<I, O extends IApiResponseDataType>(url: string, postprocesses?: IPostprocessFunction<O>[]) {
  return async function(data?: I, options?: IRequestOptions) {
    let token;
    let userId;
    try {
      token = await storage.getToken();
      userId = await storage.getUserId();
    } catch (e) {}
    return generalReq<O>(url, { token, userid: userId, ...data }, options, postprocesses) as Promise<IApiResponse<O>>;
  };
}
