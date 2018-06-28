var app = getApp()
const utils = require('../../utils/utils.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys: [
      { id: "1", name: "全部", isSelect: true },
      { id: "2", name: "热菜", isSelect: false },
      { id: "3", name: "凉菜", isSelect: false },
      { id: "4", name: "酒水", isSelect: false },
      { id: "5", name: "主食", isSelect: false },
      { id: "6", name: "辅食", isSelect: false },
      { id: "7", name: "特色", isSelect: false },
    ],
    content: "全部",
    menu: [
      { id: '1', name: '牛排', price: 20, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '2', orderNum: 0 },
      { id: '2', name: '牛排', price: 20, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '3', orderNum: 0 },
      { id: '3', name: '牛排', price: 20, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '4', orderNum: 0 },
      { id: '4', name: '牛排', price: '20.00', saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '5', orderNum: 0 },
      { id: '5', name: '牛排', price: 20, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '6', orderNum: 0 },
      { id: '6', name: '牛排', price: 20.5, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '7', orderNum: 0 },
    ],
    menuView:[],
    orderList: [],
    cart: 0,
    totalPrice: 0,
    toView:'menu5',

  },

  /**
   * item点击事件
   */
  onIpItemClick: function (event) {
    //console.log(event);
    var id = event.currentTarget.dataset.item.id;
    var that = this
    var curIndex = 0;
    for (var i = 0; i < that.data.categorys.length; i++) {
      if (id == that.data.categorys[i].id) {
        this.data.categorys[i].isSelect = true;
        curIndex = i;
      } else {
        that.data.categorys[i].isSelect = false;
      }
    }
    that.setData({
      categorys: that.data.categorys,

    });
  },
  ///item点击事件end

  // 加入购物车
  addToCart: function (e) {
    //console.log(e.currentTarget.dataset.set)
    var that = this
    var index = e.currentTarget.dataset.index
    var menu = e.currentTarget.dataset.set
    var id = e.currentTarget.dataset.set.id
    var orderNum = 'menus[' + index + '].orderNum'

    that.setData({
      [orderNum]: that.data.menus[index].orderNum + 1
    })

    //购物车操作
    var orders = []
    for (var i in that.data.menus) {
      if (that.data.menus[i].orderNum > 0) {
        orders.push(that.data.menus[index])
        that.setData({
          orderList: orders
        })
      }
    }

    //console.log(that.data.orderList)
  },// 加入购物车end

  //从购物车移除
  removeFromCart: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var id = e.currentTarget.dataset.set.id
    var orderNum = 'menus[' + index + '].orderNum'
    if (that.data.menus[index].orderNum <= 0) {
      that.setData({
        [orderNum]: 0
      })
    } else {
      that.setData({
        [orderNum]: that.data.menus[index].orderNum - 1
      })
    }

    var orders = []
    for (var i in that.data.menus) {
      if (that.data.menus[i].orderNum > 0) {
        orders.push(that.data.menus[index])
        that.setData({
          orderList: orders
        })
      }
    }
    //console.log(that.data.orderList)
  },//移除购物车end

  setOrderList: function () {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setHeader()
    that.setData({
      menuView: that.data.menu
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

  },

  /**
 * 设置页头参数start
 */
  setHeader: function () {
    var that = this
    var header = utils.header
    var locationShow = 'header.locationShow'
    var searchBoxShow = 'header.searchBoxShow'
    var scanShow = 'header.scanShow'
    var returnShow = 'header.returnShow'
    var bgOpacity = 'header.bgOpacity'
    var height = 'header.height'
    that.setData({
      header,
      [locationShow]: false,
      [searchBoxShow]: false,
      [scanShow]: false,
      [bgOpacity]: 1,
      [returnShow]: true,
      [height]: '148rpx',
    })
    console.log(header)
    console.log(that.data.header)
  },
  goBack: function (e) {
    wx.navigateBack({
      
    })
  },
  //设置页头参数end
})