//app.ts
import storageKey from './configs/storages';
import pages from './configs/pages';
import { contractUserTokenExist } from './contracts/user';

export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void;
  globalData: {};
}

App<IMyApp>({
  async onLaunch() {
    let hasValidToken = false;
    try {
      const token = wx.getStorageSync(storageKey.token);
      console.log('get token', token);
      if (token) {
        // has token
        console.log('has token, begin req');
        const ret = await contractUserTokenExist({
          token,
        }, {
          autoError: 'none',
        });
        console.log('resp', ret);
        if (!ret.error) {
          hasValidToken = true;
        }
      }
    } catch (e) {}
    console.log('hasValidToken', hasValidToken);
    console.log('redirect', hasValidToken ? pages.home : pages.login);
    wx.redirectTo({
      url: hasValidToken ? pages.home : pages.login,
    });
  },
  globalData: {
  },
});
