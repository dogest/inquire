import { IMyApp } from '../../app';
import { contractCardConsume, ICOutputCardConsume } from '../../contracts/card';
import { EnumApiStatus, EnumReport } from '../../enums/index';
import { getRandomLoadingText } from '../../utils/util';

const app = getApp<IMyApp>();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    consume: [] as ICOutputCardConsume,
    consumeIdxs: [] as string[],
    status: EnumApiStatus.fetching,
    EnumApiStatus,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    this.fetchCardConsume(true);
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
      await this.fetchCardConsume();
    } catch (e) {
    } finally {
      wx.stopPullDownRefresh({});
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  async fetchCardConsume(showLoading: boolean = false) {
    this.setData!({
      status: EnumApiStatus.fetching,
    });
    let success = false;
    try {
      const ret = await contractCardConsume(undefined, {
        loadingText: showLoading ? getRandomLoadingText() : undefined,
      });
      if (!ret.error) {
        success = true;
        this.setData!({
          consume: ret.data,
          consumeIdxs: ret.data.map((_item, index) => `${index}`),
          status: EnumApiStatus.success,
        });
      }
    } catch (e) {
    } finally {
      if (!success) {
        this.setData!({
          status: EnumApiStatus.fail,
        });
        wx.reportMonitor(EnumReport.cardConsumeFail, 1);
      }
    }
  },
});
