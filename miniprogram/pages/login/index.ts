import { contractUserInfo, contractUserToken } from '../../contracts/user';
import pages from '../../configs/pages';
import generalConfigs from '../../configs/general';
import storage from '../../utils/storage';
import { getRandomLoadingText } from '../../utils/util';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    password: '',
    loading: false,
    licenseUrl: pages.license,
    helpUrl: pages.help,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(_query: { [queryKey: string]: string }) {
    try {
      const userId = await storage.getUserId() || '';
      const password = await storage.getPassword() || '';
      this.setData!({
        userId,
        password,
      });
      if (userId && password) {
        console.log('auto login');
        this.onSubmit();
      }
    } catch (e) {
      console.error(e);
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

  onUserIdChange(e) {
    this.setData!({
      userId: e.detail.value,
    });
  },

  onPasswordChange(e) {
    this.setData!({
      password: e.detail.value,
    });
  },

  async onSubmit() {
    this.setData!({
      loading: true,
    });
    const loadingText = getRandomLoadingText();
    wx.showLoading({
      title: loadingText,
    });
    let success = false;
    try {
      const ret = await contractUserToken({
        userid: this.data.userId,
        password: this.data.password,
      });
      if (!ret.error) {
        const token = ret.data.token;
        await storage.setToken(token);
        await storage.setTokenExpires(`${Date.now() + generalConfigs.tokenLifetime}`);
        await storage.setUserId(this.data.userId);
        await storage.setPassword(this.data.password);
        // 请求用户信息
        const infoRet = await contractUserInfo();
        if (!infoRet.error) {
          const { name, department, floor, room } = infoRet.data;
          await storage.setUserInfo({ name, department, floor, room });
          success = true;
        }
      }
    } finally {
      this.setData!({
        loading: false,
      });
      wx.hideLoading({});
    }

    if (success) {
      wx.showToast({
        title: '绑定成功',
      });
      wx.redirectTo({ url: pages.home });
    }
  },
});
