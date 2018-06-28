var app=getApp()
const utils = require('../../utils/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header: {
      //标题
      title: "个人中心",
      //搜索按钮显示信息
      searchText: "搜本店",
      //背景图片
      bg: '/images/bg.png',
      //是否显示位置图标
      locationShow: false,
      //是否显示搜索框
      searchBoxShow: false,

    },
    

  },

  /**
  * tabbar 点击实现
  */
  tabTo: function (e) {

    //console.log(e)
    let that = this

    //获取当前页面绝对路径
    let curroute = '/' + that.route
    //console.log(curroute)

    //获取被点击的下标
    let index = e.currentTarget.id
    //console.log(index)

    //根据下标获取tab对应的页面路径
    let tarroute = that.data.tabbar.unselect[index].page
    //console.log(tarroute)

    //判断当前路径与目标路径是否一致
    if (curroute === tarroute) {
      //一致不做任何处理
      //console.log('success')
    } else {
      //不一致的处理
      wx.navigateTo({
        url: tarroute,
      })
    }
  },
 
  /**
    * 设置自定义Tabbar
    */
  setTab: function () {
    /**
    * //页面加载时  设置tabbar参数satart
    */
    let that = this
    let tabbar = utils.tabbar

    that.setData({
      tabbar
    })
    //获取当前页面绝对路径
    let curroute = '/' + that.route

    //循环查询列表
    let length = that.data.tabbar.unselect.length
    //console.log(length)
    for (var i = 0; i < length; i++) {
      //console.log(i)
      if (that.data.tabbar.unselect[i].page === curroute) {
        //console.log('bingo')
        let img = 'tabbar.unselect[' + i + '].img'
        let color = 'tabbar.unselect[' + i + '].color'
        that.setData({
          [img]: that.data.tabbar.selected[i].img,
          [color]: that.data.tabbar.selected[i].color,
        })
        break

      }

    }
  },

    //设置tabbar参数end

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this 
    that.setTab()

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