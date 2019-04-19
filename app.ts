//app.ts
import storageKey from './configs/storages';
import pages from './configs/pages';

export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void;
  globalData: {};
}

App<IMyApp>({
  async onLaunch() {
    let hasValidToken = false;
    try {
      const token = wx.getStorageSync(storageKey.token);
      const tokenExpires = +wx.getStorageSync(storageKey.tokenExpires);
      console.log('get token', token, tokenExpires, Date.now());
      if (token && tokenExpires && tokenExpires > Date.now()) {
        hasValidToken = true;
      }
    } catch (e) {}
    console.log('redirect', hasValidToken ? pages.home : pages.login);
    wx.redirectTo({
      url: hasValidToken ? pages.home : pages.login,
    });
  },
  globalData: {
  },
});
