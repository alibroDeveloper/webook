
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户授权标记
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //背景图片链接
    url: "http://img2.imgtn.bdimg.com/it/u=3971194657,2057114547&fm=214&gp=0.jpg",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  bindGetUserInfo: function () {
    //调用login接口获取code，后面换取openId和session_key需要
    wx.login({
      success: (res) => {
        var code = res.code
        //console.log(code+'====code')
        wx.getUserInfo({
          success: (res) => {
            //console.log('getuserinfo')
            //console.log(res)
            //发送服务器请求获取并解密用户信息
            wx.request({
              url: 'https://www.deltatech.top/wxapp/api/getUserInfo/complex.action',
              data: {
                code: code,
                encryptedData: res.encryptedData,
                iv: res.iv,
                isAuthed: false
              },
              method: 'POST',
              header: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              success: (res) => {
                console.log(res)
                app.appData.user = res.data
                var usedTo = res.data.usedTo
                wx.setStorage({
                  key: 'user',
                  data: app.appData.user,
                })
                wx.switchTab({
                  url: '/pages/index/index',
                })

              }
            })
          },
          fail: (res) => {
            wx.showModal({
              title: '提示',
              content: '为了您更好的体验，请授权我们获取您的 头像 和 昵称',
              cancelText: '拒绝',
              cancelColor: 'darkgray',
              confirmText: '好哒',
              success: (res) => {
                //点击确定
                if (res.confirm) {
                  //调用接口转向到授权设置页面
                  wx.openSetting({
                    //授权成功
                    success: (res) => {
                      //获取用户信息
                      wx.getUserInfo({
                        success:(res)=>{
                          //发起网络请求
                          wx.request({
                            url: 'https://www.deltatech.top/wxapp/api/getUserInfo/complex.action',
                            data: {
                              code: code,
                              encryptedData: res.encryptedData,
                              iv: res.iv,
                              isAuthed: false
                            },
                            method: 'POST',
                            header: {
                              "Content-Type": "application/x-www-form-urlencoded",
                            },
                            //成功返回数据
                            success: (res) => {
                              //接收数据
                              //console.log(res)
                              app.appData.user = res.data
                              var usedTo = res.data.usedTo
                              //将用户信息放到缓存
                              wx.setStorage({
                                key: 'user',
                                data: app.appData.user,
                              })
                              //跳转到首页
                              wx.switchTab({
                                url: '/pages/index/index',
                              })

                            }
                          })
                        }
                      })


                    }
                  })
                }
                if (res.cancel) {
                  wx.showToast({
                    title: '感谢您的光临',
                    icon: 'none',
                    mask: true,
                  })
                }
              }
            })
          }
        })
      }
    })
  }
})