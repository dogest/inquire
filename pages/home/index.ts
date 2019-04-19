import { contractCardBalance } from '../../contracts/card';
import { EnumApiStatus } from '../../enums/index';
import { contractLibraryBorrow } from '../../contracts/library';
import { contractScore } from '../../contracts/score';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: {
      card: EnumApiStatus.fetching,
      library: EnumApiStatus.fetching,
      score: EnumApiStatus.fetching,
    },
    balance: undefined,
    borrowNum: undefined,
    score: undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    this.fetchCard();
    this.fetchLibrary();
    this.fetchScore();
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
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  async fetchCard() {
    this.setData!({
      'status.card': EnumApiStatus.fetching,
    });
    try {
      const ret = await contractCardBalance(undefined, {
        autoError: 'none',
      });
      console.log(ret);
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
      console.log(ret);
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
      console.log(ret);
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
});
