Page({
  data: {
    item_history: [
      {
        "one": "科目一：",
        "two": "科目二：",
      }
    ],
    showView: true
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
  }
  , onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  data: {
    showView1: true,
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView1: (options.showView1 == "true" ? true : false)
  }
  , onChangeShowState1: function () {
    var that = this;
    that.setData({
      showView1: (!that.data.showView1)
    })
  }
})