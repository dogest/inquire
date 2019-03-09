// pages/consumption_detail/consumption_detail.js
var util = require('../../utils/util.js'); 
Page({
  onShareAppMessage: function () {
    return {
      title: "历史消费",
      path: "/pages/consumption_detail/consumption_detail"
    }
  },
    data: {
      head_start:'',
      head_end: '',
      items: [
        {
          "reason": "消费原因：用水支出",
          "amount": "消费金额：0.13"
        }
      ]
    },
  onLoad: function (option) {
this.setData({
  head_start:option.start,
  head_end:option.end
})
  }
})
 // var num = wx.getStorage('date_start');
    // var sum = wx.getStorage('date_end')
    // if ((num == "" || num == null || num == undefined) && (sum != "" || sum != null || sum != undefined))
    // {
    //   this.setData({
    //     head_start: util.formatTime(new Date()),
    //     head_end:sum
    //   })
    // }
    // else if ((sum == "" || sum == null || sum == undefined) && (num != "" || num != null || num != undefined)) {
    //   this.setData({
    //     head_end: util.formatTime(new Date()),
    //     head_start:num
    //   })
    // }
    // else{
    // this.setData({
    //   head_start: num,
    //   head_end: sum
    // })