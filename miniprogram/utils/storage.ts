import { EnumStorageKey } from '../enums/index';
import { ICOutputUserInfo } from '../contracts/user';

/**
 * wx.getStorage Promise
 * @param {IStorageItem["key"]} key
 * @returns {Promise<IStorageItem["data"]>}
 */
function wxGetStorage(key: IStorageItem['key']): Promise<IStorageItem['data']> {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
}

/**
 * wx.setStorage Promise
 * @param {IStorageItem["key"]} key
 * @param {IStorageItem["data"]} data
 * @returns {Promise<undefined>}
 */
function wxSetStorage(key: IStorageItem['key'], data: IStorageItem['data']): Promise<undefined> {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key,
      data,
      success: (_res) => {
        resolve();
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
}

export interface IStorageItemBase extends IStorageItem {
  key: keyof typeof EnumStorageKey;
}

/**
 * Generate getStorage for specified item
 * @generics {SI} storage item
 * @param {SI["key"]} key
 * @returns {() => Promise<SI["data"] | null>}
 */
function genStorageGet<SI extends IStorageItemBase>(key: SI['key']) {
  return async function() {
    try {
      return await wxGetStorage(key) as SI['data'] || null;
    } catch (e) {
      console.warn('get storage error', key, e);
    }
    return null;
  };
}

/**
 * Generate setStorage for specified item
 * @generics {SI} storage item
 * @param {SI["key"]} key
 * @returns {(data: SI["data"]) => Promise<void>}
 */
function genStorageSet<SI extends IStorageItemBase>(key: SI['key']) {
  return async function(data: SI['data']) {
    try {
      await wxSetStorage(key, data);
    } catch (e) {
      console.warn('set storage error', key, data, e);
    }
  };
}

/**
 * Generate getStorage & setStorage for specified item
 * @generics {SI} storage item
 * @param {SI["key"]} key
 * @returns {{g: () => Promise<SI["data"] | null>; s: (data: SI["data"]) => Promise<void>}}
 */
function genStorageGetAndSet<SI extends IStorageItemBase>(key: SI['key']) {
  return {
    g: genStorageGet<SI>(key),
    s: genStorageSet<SI>(key),
  };
}


// item methods

/**
 * Token
 */

export interface IStorageItemToken extends IStorageItemBase {
  key: EnumStorageKey.token;
  data: string;
}

const {
  g: getToken,
  s: setToken,
} = genStorageGetAndSet<IStorageItemToken>(EnumStorageKey.token);

/**
 * TokenExpires
 */

export interface IStorageItemTokenExpires extends IStorageItemBase {
  key: EnumStorageKey.tokenExpires;
  data: string;
}

const {
  g: getTokenExpires,
  s: setTokenExpires,
} = genStorageGetAndSet<IStorageItemTokenExpires>(EnumStorageKey.tokenExpires);

/**
 * UserId
 */

export interface IStorageItemUserId extends IStorageItemBase {
  key: EnumStorageKey.userId;
  data: string;
}

const {
  g: getUserId,
  s: setUserId,
} = genStorageGetAndSet<IStorageItemUserId>(EnumStorageKey.userId);

/**
 * Password
 */

export interface IStorageItemPassword extends IStorageItemBase {
  key: EnumStorageKey.password;
  data: string;
}

const {
  g: getPassword,
  s: setPassword,
} = genStorageGetAndSet<IStorageItemPassword>(EnumStorageKey.password);

/**
 * UserInfo
 */

export interface IStorageItemUserInfo extends IStorageItemBase {
  key: EnumStorageKey.userInfo;
  data: Pick<ICOutputUserInfo, 'name' | 'department' | 'floor' | 'room'>;
}

const {
  g: getUserInfo,
  s: setUserInfo,
} = genStorageGetAndSet<IStorageItemUserInfo>(EnumStorageKey.userInfo);


const storage = {
  wxGetStorage,
  wxSetStorage,
  getToken,
  setToken,
  getTokenExpires,
  setTokenExpires,
  getUserId,
  setUserId,
  getPassword,
  setPassword,
  getUserInfo,
  setUserInfo,
};

export default storage;
