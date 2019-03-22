//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_history: [
      {
        "school": "校区：",
        "number": "公寓号：",
        "number1": "宿舍号：",
        "update": "更新时间：",
        "dump": "剩余电量：",
        "forecastup": "预计使用上限：",
        "forecastbottom": "预计使用下限：",
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
    changeToTest112() {
    wx.navigateTo({
      url: '../electro-register/electro-register'
    })
  },
})