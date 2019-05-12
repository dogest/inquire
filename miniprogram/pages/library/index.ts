import { IMyApp } from '../../app';
import { ICOutputLibraryBorrow } from '../../contracts/library';

const app = getApp<IMyApp>();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    d: app.globalData.resp.libraryBorrow,
    info: [] as ICOutputLibraryBorrow['info'],
    infoIdxs: [] as string[],
    history: [] as ICOutputLibraryBorrow['history'],
    historyIdxs: [] as string[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    const d = app.globalData.resp.libraryBorrow;
    if (d) {
      this.setData!({
        d,
        info: d.info,
        infoIdxs: d.info.map((_item, index) => `${index}`),
        history: d.history,
        historyIdxs: d.history.map((_item, index) => `${index}`),
      });
    }
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
});
