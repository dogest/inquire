import { contractCardBalance } from '../../contracts/card';
import { EnumApiStatus } from '../../enums/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: {
      card: EnumApiStatus.fetching,
    },
    balance: undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    this.fetchCard();
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
    try {
      const ret = await contractCardBalance();
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
});
