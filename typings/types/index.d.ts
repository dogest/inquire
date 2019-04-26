type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type IApiResponseDataType = undefined | object;

interface IApiResponseSuccessWithoutData {
  error: false;
}

interface IApiResponseSuccessWithData<T extends IApiResponseDataType> {
  error: false;
  data: T;
}

type IApiResponseSuccess<T extends IApiResponseDataType = undefined> = T extends undefined ?
  IApiResponseSuccessWithoutData :
  IApiResponseSuccessWithData<T>;

interface IApiResponseFail {
  error: true;
  message: string;
}

type IApiResponse<T extends IApiResponseDataType = undefined> = IApiResponseSuccess<T> | IApiResponseFail;

interface IContractInputWithToken {
  token?: string;
}

interface IContractInputWithTokenAndUserId extends IContractInputWithToken {
  userid?: string;
}

interface IStorageItem {
  key: string;
  data: IAnyObject | string;
}
