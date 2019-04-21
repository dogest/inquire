import { EnumApiStatus } from '../../enums/index';
import { contractCardBalance } from '../../contracts/card';
import { contractLibraryBorrow } from '../../contracts/library';
import { contractScore } from '../../contracts/score';
import { contractDormitoryEnergy, contractDormitoryHealth, contractDormitoryInfo } from '../../contracts/dormitory';
import storage from '../../utils/storage';
import pages from '../../configs/pages';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: {
      card: EnumApiStatus.fetching,
      library: EnumApiStatus.fetching,
      score: EnumApiStatus.fetching,
      dormitoryHealth: EnumApiStatus.fetching,
      dormitoryEnergy: EnumApiStatus.fetching,
    },
    balance: undefined,
    borrowNum: undefined,
    score: undefined,
    dormitoryHealth: undefined,
    dormitoryHealthWeek: undefined,
    dormitoryEnergy: undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    this.fetchAll();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  async onPullDownRefresh() {
    try {
      await this.fetchAll();
    } finally {
      wx.stopPullDownRefresh({});
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  onShareAppMessage() {
    return {
      title: '抽空查询',
      path: pages.home,
    };
  },

  async fetchCard() {
    this.setData!({
      'status.card': EnumApiStatus.fetching,
    });
    try {
      const ret = await contractCardBalance(undefined, {
        autoError: 'none',
      });
      if (!ret.error) {
        this.setData!({
          balance: ret.data.balance,
          'status.card': EnumApiStatus.success,
        });
      }
    } catch (e) {
      this.setData!({
        'status.card': EnumApiStatus.fail,
      });
    }
  },

  async fetchLibrary() {
    this.setData!({
      'status.library': EnumApiStatus.fetching,
    });
    try {
      const ret = await contractLibraryBorrow(undefined, {
        autoError: 'none',
      });
      if (!ret.error) {
        this.setData!({
          borrowNum: ret.data.info.length,
          'status.library': EnumApiStatus.success,
        });
      }
    } catch (e) {
      this.setData!({
        'status.library': EnumApiStatus.fail,
      });
    }
  },

  async fetchScore() {
    this.setData!({
      'status.score': EnumApiStatus.fetching,
    });
    try {
      const ret = await contractScore(undefined, {
        autoError: 'none',
      });
      if (!ret.error) {
        this.setData!({
          score: ret.data.grade,
          'status.score': EnumApiStatus.success,
        });
      }
    } catch (e) {
      this.setData!({
        'status.score': EnumApiStatus.fail,
      });
    }
  },

  async fetchDormitoryHealth() {
    this.setData!({
      'status.dormitoryHealth': EnumApiStatus.fetching,
    });
    try {
      const ret = await contractDormitoryHealth(undefined, {
        autoError: 'none',
      });
      if (!ret.error) {
        this.setData!({
          dormitoryHealth: ret.data[0] ? ret.data[0].score : null,
          dormitoryHealthWeek: ret.data[0] ? ret.data[0].week : null,
          'status.dormitoryHealth': EnumApiStatus.success,
        });
      }
    } catch (e) {
      this.setData!({
        'status.dormitoryHealth': EnumApiStatus.fail,
      });
    }
  },

  async fetchDormitoryEnergy() {
    this.setData!({
      'status.dormitoryEnergy': EnumApiStatus.fetching,
    });
    try {
      const userInfo = await storage.getUserInfo();
      if (userInfo) {
        const { floor, room } = userInfo;
        const ret = await contractDormitoryEnergy({ floor, room }, {
          autoError: 'none',
        });
        if (!ret.error) {
          this.setData!({
            dormitoryEnergy: ret.data.energy,
            'status.dormitoryEnergy': EnumApiStatus.success,
          });
        }
      }
    } catch (e) {
      this.setData!({
        'status.dormitoryEnergy': EnumApiStatus.fail,
      });
    }
  },

  fetchAll() {
    console.log('fetchAll');
    return Promise.all([
      this.fetchCard(),
      this.fetchLibrary(),
      this.fetchScore(),
      this.fetchDormitoryHealth(),
      this.fetchDormitoryEnergy(),
    ]);
  },
});
