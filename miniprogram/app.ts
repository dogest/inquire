import pages from './configs/pages';
import storage from './utils/storage';
import * as moment from './libs/moment/index';
import { ICOutputDormitoryEnergy, ICOutputDormitoryHealth } from './contracts/dormitory';
import { ICOutputScore } from './contracts/score';
import { ICOutputSchedule } from './contracts/schedule';
import { ICOutputLibraryBorrow } from './contracts/library';
import { ICOutputCardBalance } from './contracts/card';

export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void;
  globalData: {
    resp: {
      libraryBorrow: ICOutputLibraryBorrow | null;
      dormitoryEnergy: ICOutputDormitoryEnergy | null;
      dormitoryHealth: ICOutputDormitoryHealth | null;
      score: ICOutputScore | null;
      schedule: ICOutputSchedule | null;
    },
  };
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
    moment.locale('zh-cn');
  },
  globalData: {
    resp: {
      libraryBorrow: null,
      dormitoryEnergy: null,
      dormitoryHealth: null,
      score: null,
      schedule: null,
    },
  },
});
