var app=getApp()
const utils = require('../../utils/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    store: [
      {
        title: '开始点单',
        englishTitle: 'MENU',
        icon: '/images/icon/image-text.png',
        background: '/images/bg.png',
        catchTap:'orderMenu',
      },
      {
        title: '提前预定',
        englishTitle: 'BOOK',
        icon: '/images/icon/edit.png',
        background: '/images/bg.png'
      },

      {
        title: '呼叫服务',
        englishTitle: 'SERVICE',
        icon: '/images/icon/service.png',
        background: '/images/bg.png'
      },
      {
        title: '结账买单',
        englishTitle: 'PAY',
        icon: '/images/icon/RMB.png',
        background: '/images/bg.png'
      },

    ],
  
    
  },


  /**
   * 跳转到点单页面
   */
  orderMenu:function(e){
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this

    that.setHeader()
    
    //console.log(that.route)
    //接收并设置页头参数start

    let tableStr = options.table
    
    //调取缓存数据
      let title = 'header.title'
    if(tableStr!=null){
      console.log('接收传来对象参数==》')
      console.log(tableStr)
      let table = JSON.parse(tableStr)
      //console.log(tableStr)
      that.setData({
        [title]: table.room + table.num,

      })
      that.setData({
        table:table,
      })
      wx.setStorage({
        key: 'table',
        data: table,
      })
      
    };//end if


    /**
  * 设置自定义Tabbar
  */
   
      let tabbar = utils.tabbar
      let param='tabbar.param'
      that.setData({
        tabbar,
        [param]:that.data.table.id
      });
      
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
          let color = 'tabbar.unselectColor'

          that.setData({
            [img]: that.data.tabbar.selected[i].img,
            [color]: that.data.tabbar.selectedColor,
          })
          break

        }

      }

    //设置tabbar参数end

    
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
      let targrt = '?tableId='+that.data.tabbar.param
      wx.navigateTo({
        url: tarroute+targrt,
      })
    }
  },
  
/**
 * 设置页头参数start
 */
  setHeader:function(){
    var that=this
    var header=utils.header
    var locationShow ='header.locationShow'
    var searchBoxShow ='header.searchBoxShow'
    var scanShow ='header.scanShow'
    var returnShow ='header.returnShow'
    var bgOpacity ='header.bgOpacity'
    var height='header.height'
      that.setData({
          header,
          [locationShow]:false,
          [searchBoxShow]:false,
          [scanShow]:false,
          [bgOpacity]:1,
          [returnShow]:true,
          [height]:'150rpx',
      })
      console.log(header)
      console.log(that.data.header)
  },
  goBack:function(e){
    var that=this
    wx.navigateTo({
      url: '/pages/storeDetail/storeDetail?storeId='+that.data.table.storeId,
    })
  }
  //设置页头参数end
 
})