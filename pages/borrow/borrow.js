// pages/borrow/borrow.js
Page({
  onShareAppMessage() {
    return {
      title: '当前借阅',
      path: '/pages/borrow/borrow'
    }
  },
  data: {
      item_now: [
        {
          "id":"day1",
          "title": "图书名：",
          "author": "图书作者：",
          "borrow_date": "借阅时间：",
          "back_date": "应还时间：",
          "borrow_cnt": "续借次数：",
          "site": "借书地址："
        },
        {
          "id": "day2",
          "title": "图书名：",
          "author": "图书作者：",
          "borrow_date": "借阅时间：",
          "back_date": "应还时间：",
          "borrow_cnt": "续借次数：",
          "site": "借书地址："
        },
        {
          "id": "day3",
          "title": "图书名：",
          "author": "图书作者：",
          "borrow_date": "借阅时间：",
          "back_date": "应还时间：",
          "borrow_cnt": "续借次数：",
          "site": "借书地址："
        },
        {
          "id": "day4",
          "title": "图书名：",
          "author": "图书作者：",
          "borrow_date": "借阅时间：",
          "back_date": "应还时间：",
          "borrow_cnt": "续借次数：",
          "site": "借书地址："
        },
        {
          "id": "day5",
          "title": "图书名：",
          "author": "图书作者：",
          "borrow_date": "借阅时间：",
          "back_date": "应还时间：",
          "borrow_cnt": "续借次数：",
          "site": "借书地址："
        },
        {
          "id": "day6",
          "title": "图书名：",
          "author": "图书作者：",
          "borrow_date": "借阅时间：",
          "back_date": "应还时间：",
          "borrow_cnt": "续借次数：",
          "site": "借书地址："
        },
        {
          "id": "day7",
          "title": "图书名：",
          "author": "图书作者：",
          "borrow_date": "借阅时间：",
          "back_date": "应还时间：",
          "borrow_cnt": "续借次数：",
          "site": "借书地址："
        },
        {
          "id": "day8",
          "title": "图书名：",
          "author": "图书作者：",
          "borrow_date": "借阅时间：",
          "back_date": "应还时间：",
          "borrow_cnt": "续借次数：",
          "site": "借书地址："
        }
      ]
  },
   modalTap() {
    wx.navigateTo({
      url: '../borrow_history/borrow_history'
    })
  },
  modalTap1() {
    wx.showModal({
      title: '提示',
      content: '没有借阅相关的记录',
      showCancel: false,
      confirmText: '确定'
    })
  }, 
})