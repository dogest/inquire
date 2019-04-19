import storageKey from '../../configs/storages';
import { contractUserToken } from '../../contracts/user';
import pages from '../../configs/pages';
import generalConfigs from '../../configs/general';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {
    const token = wx.getStorageSync(storageKey.token);
    if (token) {
      // ok
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

  onUsernameChange(e) {
    this.setData!({
      username: e.detail.value,
    });
  },

  onPasswordChange(e) {
    this.setData!({
      password: e.detail.value,
    });
  },

  async onSubmit() {
    const ret = await contractUserToken({
      username: this.data.username,
      password: this.data.password,
    });
    console.log(ret);
    if (!ret.error) {
      const token = ret.data.token;
      wx.setStorage({
        key: storageKey.token,
        data: token,
      });
      wx.setStorage({
        key: storageKey.tokenExpires,
        data: `${Date.now() + generalConfigs.tokenLifetime}`,
      });
      wx.setStorage({
        key: storageKey.userId,
        data: this.data.username,
      });
      wx.setStorage({
        key: storageKey.password,
        data: this.data.password,
      });
      wx.showToast({
        title: '绑定成功',
      });
      wx.redirectTo({ url: pages.home });
    }
  },
});
