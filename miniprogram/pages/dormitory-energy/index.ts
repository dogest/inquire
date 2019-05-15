import { IMyApp } from '../../app';
import { ICOutputDormitoryEnergy } from '../../contracts/dormitory';

const app = getApp<IMyApp>();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dormitoryEnergy: null as ICOutputDormitoryEnergy | null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    const d = app.globalData.resp.dormitoryEnergy;
    if (d) {
      this.setData!({
        dormitoryEnergy: d,
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