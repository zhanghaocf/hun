// pages/firework/firework.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('cas')

    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 100)
    ctx.setGlobalAlpha(0.9)
    ctx.setFillStyle('red')
    ctx.fillRect(20, 20, 150, 100)
    ctx.setGlobalAlpha(0.8)
    ctx.setFillStyle('red')
    ctx.fillRect(30, 30, 150, 100)
    ctx.setGlobalAlpha(0.7)
    ctx.setFillStyle('red')
    ctx.fillRect(40, 40, 150, 100)
    ctx.setGlobalAlpha(0.6)
    ctx.setFillStyle('red')
    ctx.fillRect(50, 50, 150, 100)
    ctx.setGlobalAlpha(0.5)
    ctx.setFillStyle('red')
    ctx.fillRect(60, 60, 150, 100)
    ctx.setGlobalAlpha(0.4)
    ctx.setFillStyle('red')
    ctx.fillRect(70, 70, 150, 100)
    ctx.draw()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})