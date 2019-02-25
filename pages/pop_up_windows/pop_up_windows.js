Page({
  onShareAppMessage() {
    return {
      title: '消费查询',
      path: 'pages/pop_up_windows/pop_up_windows'
    }
  },

  data: {
    modalHidden: true,
    date_star: '',
    date_end: ''
  },
  
  modalTap() {
    wx.showModal({
      title: '提示',
      content: '没有消费相关的记录',
      showCancel: false,
      confirmText: '确定'
    })
  },

    bindDateChange_start(e) {
    this.setData({
      date_start: e.detail.value
    })
  },

  bindDateChange_end(e) {
    this.setData({
      date_end: e.detail.value
    })
  }
})
