//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
changeToTest11() {
    wx.navigateTo({
      url: '../electro-register/electro-register'
    })
  },
  changeToTest12() {
    wx.navigateTo({
      url: '../health/health'
    })
  },
})
