var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statu: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var user = null
    if (options.statu) {
      this.setData({
        statu: options.statu
      })
    } else {
      this.setData({
        statu: '努力加载中...',
      })
    }

    //检查是否已授权
    wx.getSetting({
      success: (res) => {
        //已授权
        if (res.authSetting['scope.userInfo']) {
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
        //未授权
        else {
          //重定向到授权页面
          wx.redirectTo({
            url: '/pages/welcome/welcome',
          })
        }
      },

    })

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