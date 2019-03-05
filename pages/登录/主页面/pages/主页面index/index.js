//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  page{
    height: 100 %;
  }
    .container{
    height: 100 %;
    width: 100 %;
    background: red;
    display: flex;
    flex-flow: row wrap;/*flex-direction和flex-wrap的简写 */
    justify-content: space-around;/*元素的对齐方式 默认左对齐 */
    align-items: flex-end;
  }
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  const initData = '© 2017 Developed by MeiK\nFront-end style designed by bLue'
})
