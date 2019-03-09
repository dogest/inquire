
Page({
  data: {
    items:[
      {
        "time":"时间：2018-12-25 17:56",
        "reason":"消费原因：用水支出",
        "amount":"消费金额：0.13",
        "balance":"余额：32.46",
        "position":"消费位置：图书馆直饮水采集",
        "trem-name":"消费终端：图书馆直饮水004"
      }
    ]
  },
  modalTap() {
    wx.navigateTo({
      url: '../pop_up_windows/pop_up_windows'
    })
  },
  onShareAppMessage: function () {
    return {
      title: "消费查询",
      path: "/pages/recent_consumption/recent_consumption"
    }
  }
})