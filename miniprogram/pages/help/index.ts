const faq = `
## 我的网上服务大厅密码是什么？

使用前需绑定网上服务大厅帐号。如从未使用，请先修改初始密码，初始密码为身份证后六位。

要前往网上服务大厅，请点击复制下方网址，在手机浏览器中打开。

`;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    faq,
    link: 'http://ehall.sdut.edu.cn/new/ehall.html',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_query: { [queryKey: string]: string }) {

  },

  onTapLink(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.clipboard,
    });
  },
});
