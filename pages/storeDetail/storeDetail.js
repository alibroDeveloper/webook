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
    var scene = decodeURIComponent(options.scene)

    var that=this
    that.setHeader();
    //that.setNav();
    that.setBanner();
    that.setList();

    var store=options.store;
   
    //参数赋值

    //如果传过来的是store对象
    if (store != null) {
      console.log('storeDetail页面==》接收url传递对象==>from index')
      // //获取传入参数
      var store = JSON.parse(options.store)
      let title = 'header.title';
      that.setData({
        store: store,
        [title]: store.storeName,
      })//end setData
      wx.getStorage({
        key: 'tables',
        success: function(res) {
          console.log(res.data)
          if(res.data!=null && res.data!=''&& res.data[0].storeId==store.id){
            console.log('从缓存获取桌台列表==》')
            var tables='list.models'
            that.setData({
              [tables]:res.data
            })
          }else{

            console.log('发送服务器请求，获取桌台列表==》')

            // //根据对象id发送服务器请求获取店铺桌台信息
            wx.request({
              url: 'https://www.deltatech.top/wxapp/api/store/getTables.action',
              data: {
                storeId: store.id
              },
              method: 'POST',
              header: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              success: (res) => {
                console.log('====服务器返回桌台列表====')
                //console.log(res)
                let tables = 'list.models'
                that.setData({
                  [tables]: res.data.tables
                });
                wx.setStorage({
                  key: 'tables',
                  data: res.data.tables,
                });
              }
            });//end request

          }
        },
        fail:(res)=>{
          console.log('发送服务器请求，获取桌台列表==》')

          // //根据对象id发送服务器请求获取店铺桌台信息
          wx.request({
            url: 'https://www.deltatech.top/wxapp/api/store/getTables.action',
            data: {
              storeId: store.id
            },
            method: 'POST',
            header: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            success: (res) => {
              console.log('====服务器返回桌台列表====')
              //console.log(res)
              let tables = 'list.models'
              that.setData({
                [tables]: res.data.tables
              });
              wx.setStorage({
                key: 'tables',
                data: res.data.tables,
              });
            }
          });//end request
        }
      })
     
    }//end if

    // 如果传过来的是 storeid
    if (options.storeId != null) {
      console.log('storeDetail页面==》接收店铺id查询缓存==>from....')
      wx.getStorage({
        key: 'stores',
        success: function (res) {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].id == options.storeId) {
              console.log('查询缓存成功==')
              let title = 'header.title'
              that.setData({
                store: res.data[i],

                [title]: res.data[i].storename,

              })//end setData
              wx.setStorage({
                key: 'store',
                data: res.data[i],
              })
              //获取桌台列表
              // //根据对象id发送服务器请求获取店铺桌台信息
              wx.request({
                url: 'https://www.deltatech.top/wxapp/api/store/getTables.action',
                data: {
                  storeId: options.storeId
                },
                method: 'POST',
                header: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                success: (res) => {
                  console.log('====服务器返回桌台列表====')
                  //console.log(res)
                  let tables = 'list.models'
                  that.setData({
                    [tables]: res.data.tables
                  })
                  wx.setStorage({
                    key: 'tables',
                    data: res.data.tables,
                  })
                }
              })//end request
              break
            }//end if
          }//end for

          

        },//end success
      })//end getStorage
    }// if
    //从缓存获取
    if(options.tableId!=null){
      console.log('storeDetail页面==》接收tableid查询缓存==>from table页面')
      var storeId=''
      wx.getStorage({
        key: 'table',
        success: function(res) {
          storeId=res.data.storeId
          wx.getStorage({
            key: 'tables',
            success: function(res) {
              var tables=res.data

              if (tables!=null && tables[0].storeId==storeId){
                var models='list.models'
                that.setData({
                  [models]:tables

                })
              }else{


                //获取桌台列表
                // //根据对象id发送服务器请求获取店铺桌台信息
                wx.request({
                  url: 'https://www.deltatech.top/wxapp/api/store/getTables.action',
                  data: {
                    storeId: storeId
                  },
                  method: 'POST',
                  header: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  success: (res) => {
                    console.log('====服务器返回桌台列表====')
                    //console.log(res)
                    let tables = 'list.models'
                    that.setData({
                      [tables]: res.data.tables
                    })
                    wx.setStorage({
                      key: 'tables',
                      data: res.data.tables,
                    })
                  }
                })//end request

              }//end if / else
            },//end success
            fail:(res)=>{
              //获取桌台列表
              // //根据对象id发送服务器请求获取店铺桌台信息
              wx.request({
                url: 'https://www.deltatech.top/wxapp/api/store/getTables.action',
                data: {
                  storeId: storeId
                },
                method: 'POST',
                header: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                success: (res) => {
                  console.log('====服务器返回桌台列表====')
                  //console.log(res)
                  let tables = 'list.models'
                  that.setData({
                    [tables]: res.data.tables
                  })
                  wx.setStorage({
                    key: 'tables',
                    data: res.data.tables,
                  })
                }
              })//end request

            }
          })//end getstorage


        },
      })
    }
    else{
      let title = 'header.title'
      wx.getStorage({
        key: 'store',
        success: function(res) {
          that.setData({
            store: res.data,

            [title]: res.data.storeName,

          })//end setData
        },
      })
      
    }//end else 
   
     

   

    
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

  //设置页头参数  start
  setHeader: function () {
    let that = this
    let header = utils.header
    let locationShow ='header.locationShow'
    let scanShow ='header.scanShow'
    let returnShow ='header.returnShow'
    let height='header.height'
    let returnText = 'header.returnText'
    that.setData({
      header,
      [returnText]:'首页',
      [locationShow]:false,
      [scanShow]:false,
      [returnShow]:true,
      [height]:'238rpx',
      
    })
  },
  //设置页头参数 end

  //设置导航栏参数 start
  setNav: function () {
    let that = this
    let nav = utils.nav
    let marginTop='nav.marginTop'
    that.setData({
      nav,
      [marginTop]:230,
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
    let title='list.subTitle.title'
    that.setData({
      list,
      [title]:'桌台列表',
    })
  },
  //设置列表参数  end






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

  

  /**
   * 跳转到桌台页面
   */
  toTabletrue:function(e){
    var that=this
    //console.log(e)
    let index=e.currentTarget.id
    //console.log(index)
    let table=that.data.list.models[index]
    let tableStr=JSON.stringify(table)
    //console.log(tableStr)
    wx.navigateTo({
      url: '/pages/table/table?table='+tableStr,
    })
    wx.setStorage({
      key: 'table',
      data: table,
    })
  },
  toTablefalse:function(){
    wx.showToast({
      title: '很抱歉，请选择其他桌台',
      icon:'none',
      duration:1000

    })
  },

  goBack:function(e){
    wx.switchTab({
      url: '/pages/index/index',
    })
  }

})