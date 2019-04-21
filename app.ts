import pages from './configs/pages';
import storage from './utils/storage';

export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void;
  globalData: {};
}

App<IMyApp>({
  async onLaunch() {
    let hasValidToken = false;
    try {
      const token = await storage.getToken();
      const tokenExpires = Number(await storage.getTokenExpires());
      console.log('get token', token, tokenExpires, Date.now());
      if (token && tokenExpires && tokenExpires > Date.now()) {
        hasValidToken = true;
      }
    } catch (e) {}
    console.log('app redirect', hasValidToken ? pages.home : pages.login);
    wx.redirectTo({
      url: hasValidToken ? pages.home : pages.login,
    });
  },
  globalData: {},
});
