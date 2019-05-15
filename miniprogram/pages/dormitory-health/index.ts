import { IMyApp } from '../../app';
import { ICOutputDormitoryHealth } from '../../contracts/dormitory';

const app = getApp<IMyApp>();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dormitoryHealth: [] as ICOutputDormitoryHealth,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    const d = app.globalData.resp.dormitoryHealth;
    if (d) {
      const dormitoryHealth: ICOutputDormitoryHealth = [];
      let lastWeek = Number.MAX_SAFE_INTEGER;
      for (const item of d) {
        if (+item.week < lastWeek) {
          dormitoryHealth.push(item);
          lastWeek = +item.week;
        } else {
          break;
        }
      }
      this.setData!({
        dormitoryHealth,
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
