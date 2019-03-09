var util = require('../../utils/util.js'); 
Page({
  data: {
    modalHidden: true,
    date_start: '',
    date_end: ''
  },

  bindDateChange_start(e) {
    this.setData({
      date_start: e.detail.value,
    })
  },

  bindDateChange_end(e) {
    this.setData({
      date_end: e.detail.value
    })
  },

  modalTap:function(){

    var start1 = this.data.date_start;
    var end1 = this.data.date_end;
    var start = new Date(start1.replace(/-/g,"/"));
    var end = new Date(end1.replace(/-/g,"/"));

    if(start1 == "" || start1 == null || start1 == undefined)
    {
      start1 = util.formatTime(new Date())
    }
    if(end1 == "" || end1 == null || end1 == undefined)
    {
      end1 = util.formatTime(new Date())
    }

    if (end.getTime() - start.getTime() < 0) {
      wx.navigateTo({
        url: '../consumption_detail/consumption_detail?start=' + end1 + '&end=' + start1
      })
      }
    else{
    wx.navigateTo({
      url: '../consumption_detail/consumption_detail?start=' + start1 + '&end=' + end1
    })
    }
  }

})