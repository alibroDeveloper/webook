
const utils = require('../../utils/utils.js')

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
    var that = this
    //console.log('设置头部参数')
    that.setHeader()
    //console.log(that.data.header)
    //console.log('设置头部参数完成')
    that.setNav()
    that.setBanner()
    that.setList()

    var models = 'list.models'
    //检查缓存中是否有数据
    wx.getStorage({
      key: 'stores',
      success: function (res) {
        console.log('获取缓存成功')
        //console.log(res.data)
        that.setData({
          [models]: res.data
        })
      },
      fail: function (res) {
        console.log('获取缓存失败')
        that.getStores((stores) => {
          console.log(stores)
        })
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
    var that = this
   
    //console.log([flag])
    
    that.getStores((stores)=>{
      
    })
    wx.stopPullDownRefresh();



  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //后期优化
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击店铺跳转并把store对象放入缓存
   */
  viewStore: function (e) {
    var that = this
    //console.log(e)
    var index = e.currentTarget.id
    var store = that.data.list.models[index]
    var storestr = JSON.stringify(store)
    //console.log(store)
    //console.log(index)
    wx.setStorage({
      key: 'store',
      data: store,
    })
    wx.navigateTo({
      // url: '/pages/storeDetail/storeDetail',
      url: '/pages/storeDetail/storeDetail?store=' + storestr,
    })
  },
  
 
  scroll: function (e) {
    //console.log(e)
  },


  //设置页头参数  start
  setHeader: function () {
    let that = this
    let header = utils.header
    that.setData({
      header
    })
  },
  //设置页头参数 end

  //设置导航栏参数 start
  setNav: function () {
    let that = this
    let nav = utils.nav
    that.setData({
      nav
    })
  },
  //设置导航栏参数  end

  //设置轮播参数 start
  setBanner: function () {
    let that = this
    let banner = utils.banner
    that.setData({
      banner
    })
  },
  //设置轮播参数  end

  //设置列表参数 start
  setList: function () {
    let that = this
    let list = utils.list
    that.setData({
      list
    })
  },
  //设置列表参数  end

  getStores:function(callback){
    var that=this
    var models = 'list.models'
    let flag = 'header.title'
    //发起服务器请求，获取页面数据
    that.setData({
      [flag]: '加载中...'
    })
    wx.request({
      url: 'https://www.deltatech.top/wxapp/api/getStoreInfo.action',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      success: (res) => {
        //console.log(res)
        //服务器返回数据
        that.setData({
          [models]: res.data.stores,
        })
        //存入缓存
        wx.setStorage({
          key: 'stores',
          data: res.data.stores,
        })
        var stores = res.data.stores
        callback(stores)
      },
      fail: (res) => {
        //console.log('刷新失败')
        wx.showToast({
          title: '刷新失败，请重试',
          icon: 'none',
        })
      },
      complete:(res)=>{
        that.setData({
          [flag]: '微码点单'
        })
      }
    })
    
  },


  /**
   * 轮播时切换背景图片为当前图片
   */
  bindSwiperChange: function (e) {
    var that = this
    //console.log(e)
    var index = e.detail.current
    //console.log(that.data.banner.imgs[index].id)
    let bg = 'banner.bg'
    let currentitemid = 'banner.swiperStyle.currentitemid'
    that.setData({

      [bg]: that.data.banner.imgs[index].imgurl,

      [currentitemid]: that.data.banner.imgs[index].id,


    })
  },//轮播特效end



  viewStoreLis:function(e){
    wx.navigateTo({
      url: '/pages/storeList/storeList',
    })
  }


})