//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    mHidden:true
  },
  onLoad:function(options){

  },
  onReady:function(){

  },
  data:{
    mHidden:true
  },
  changeModel:function(){
    this.setData({
      mHidden:true
    });
  },
  modelCancel:function(){
    this.seData({
      m.Hidden:true
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
