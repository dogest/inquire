// pages/borrow_history/borrow_history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_history: [],
  },
 modalTap() {
    wx.showModal({
      title: '提示',
      content: '没有借阅相关的记录',
      showCancel: false,
      confirmText: '确定'
    })
  },
  onShareAppMessage: function () {
    return{
      title:"历史借阅",
      path:"/pages/borrow_history/borrow_history"
    }
  }
})