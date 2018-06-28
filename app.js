App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //检查是否已授权
    wx.getSetting({
      success: (res) => {
        //已授权
        if (res.authSetting['scope.userInfo']) {
          wx.checkSession({
            success: (res) => {

            },
            fail: (res) => {
              wx.login({
                success: (res) => {
                  var code = res.code
                  //获取encryptedData和iv
                  wx.getUserInfo({
                    success: (res) => {
                      //console.log(res)
                      //发送服务器请求获取并解密用户信息,服务器更新用户信息
                      wx.request({
                        url: 'http://192.168.1.2/wxapp/api/getUserInfo/complex.action',
                        data: {
                          code: code,
                          encryptedData: res.encryptedData,
                          iv: res.iv,
                          isAuthed: true,
                        },
                        method: 'POST',
                        header: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                        success: (res) => {
                          //console.log('服务器返回')
                          //console.log(res)
                          //接收服务器返回数据
                          this.appData.user = res.data.user
                          //用户是否授权过
                          var usedTo = res.data.usedTo
                          wx.setStorage({
                            key: 'user',
                            data: this.appData.user,
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })


        }
      },

    })

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //console.log(options)

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },



  appData: {
    user: {

      appId: "wxd3d61f01871bb43b",
      avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIEIVHzwSgwTxWDpSYPdAmHqklY3UMHibre9fv2KIWhaS2swEPhTykpWWYjuBtmUbCzn5cibnhbQQcw/132",
      city: "Auburn City",
      country: "US",
      county: null,
      email: null,
      gender: 1,
      idNum: null,
      isseller: null,
      nickName: "Delta Tech",
      openId: "oS_hF46ZIKMsUMm1MIDYyhDpvUQ0",
      password: null,
      province: "Washington",
      realName: null,
      sessionKey: "ExrHshEEgxl+UbPD0tSb7A==",
      tel: null,
      unionId: null,
    }
  },


})
