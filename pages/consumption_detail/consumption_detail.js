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