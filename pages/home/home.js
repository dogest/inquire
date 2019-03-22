//home.js
//获取应用实例
Page({
  onShareAppMessage() {
    return {
      title: 'inquire查询',
      path: '/pages/home/home'
    }
  },
  //const: initData = '© 2017 Developed by MeiK\nFront-end style designed by bLue',
  changeToTest() {
    wx.navigateTo({
      url: '../borrow/borrow'
    })
  },
  changeToTest1() {
    wx.navigateTo({
      url: '../recent_consumption/recent_consumption'
    })
  },
  changeToTest2() {
    wx.navigateTo({
      url: '../dormitory_select/dormitory_select'
    })
  },
  changeToTest3() {
    wx.navigateTo({
      url: '../grade/grade'
    })
  },
  //const: initData = '© 2017 Developed by MeiK\nFront-end style designed by bLue',
})