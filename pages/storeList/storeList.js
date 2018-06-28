const utils = require('../../utils/utils.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys: [
      { id: "1", name: "全部", isSelect: true },
      { id: "2", name: "中餐", isSelect: false },
      { id: "3", name: "西餐", isSelect: false },
      { id: "4", name: "火锅", isSelect: false },
      { id: "5", name: "烧烤", isSelect: false },
      { id: "6", name: "小吃", isSelect: false },
      { id: "7", name: "快餐", isSelect: false },
    ],
    content: "全部",
    menu: [
      { id: '1', name: '王婆大虾', price: 80, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '2', orderNum: 0 },
      { id: '2', name: '澳洲大酒店', price: 20, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '3', orderNum: 0 },
      { id: '3', name: '香溢小厨', price: 20, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '4', orderNum: 0 },
      { id: '4', name: '大缸烧烤', price: 70, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '5', orderNum: 0 },
      { id: '5', name: '宋楼大酒店', price: 20, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '6', orderNum: 0 },
      { id: '6', name: '宋楼宾馆', price: 20.5, saleCount: '1000', imgUrl: '/images/bg.png', storeId: '1', categoryId: '7', orderNum: 0 },
    ],
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


  //设置页头参数  start
  setHeader: function () {
    let that = this
    let header = utils.header
    let returnShow = 'header.returnShow'
    let scanShow = 'header.scanShow'
    
    let title ='header.title'
    let returnText='header.returnText'
    that.setData({
      header,
      [returnText]:'首页',
      [scanShow]:false,
      [returnShow]:false,
      [title]:'优选商家',

    })
  },

  goBack:function(e){
    wx.switchTab({
      url: '/pages/index/index',
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
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that =this
    that.setHeader()
    that.setNav()
    
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