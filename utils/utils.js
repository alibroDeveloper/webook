
// ==================================首页参数设置=========================================》
/**
 * 首页标题栏参数
 */
const header = {
  //标题
  title: "微码点单",
  //位置
  location: "曹县",
  //搜索按钮显示信息
  searchText: "搜索",
  //背景图片
  bg: '/images/bg.png',
  //是否显示位置图标
  locationShow: true,
  searchBoxShow: true,
  //以下两个不能同时为true
  scanShow: true,
  returnShow: false,
  returnText:'返回',

  bgOpacity: 1,//页头背景透明度（0~1）
  height:'249rpx',
}

/**
 * 首页导航栏参数
 */
const nav = {
  category: [
    { id: '1', name: '中餐', imgurl: '/images/hotel.png', },
    { id: '2', name: '西餐', imgurl: '/images/ktv.png' },
    { id: '3', name: '快餐', imgurl: '/images/travel.png' },
    { id: '4', name: '火锅', imgurl: '/images/housework.png' },
    { id: '5', name: '全部', imgurl: '/images/more.png' },

  ],
  bg: {
    img: '/images/bg.png',
    bgColor: 'rgba(12,12,12,0.5)',

  },
  //是否显示导航栏
  show: true,
  marginTop: 249,
  selectedClass:{
    color:'#d81e06',
    borderBottom:'1px solid #d81e06',
  },


}



/**
 * 轮播参数
 */
const banner = {
  //轮播图片信息====图片id，链接，超链接，链接的店铺id
  imgs: [
    { id: '1', imgurl: '/images/bg.png', href: '/pages/index/index', param: '1', paraName: '', },
    { id: '2', imgurl: '/images/1.png', href: '/pages/index/index', param: '2', paraName: '', },
    { id: '3', imgurl: '/images/2.png', href: '/pages/index/index', param: '1', paraName: '', },
  ],
  //背景图片
  bg: '/images/bg.png',
  //轮播属性
  swiperstyle: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1500,
    currentitemid: '',
    circular: true,
  },
  //图片缩放方式
  modeStyle: {
    widthFix: 'widthFix',
    aspectFit: 'aspectFit',
    aspectFill: 'aspectFill',
    scaleToFill: 'scaleToFill',
    center: 'center',
  },
  show: true,
}

/**
 * 首页列表参数
 */
const list = {
  subTitle: {
    show: true,
    title: '附近精选',
  },
  icon: {
    show: true,
    icons: {
      location: '/images/icon/location.png',
      enable: '/images/icon/enable.png',
      booked: '/images/icon/booked.png',
      inuse: '/images/icon/inuse.png',
    },
    models: [],

  }
}



/**
 * =====================自定义导航栏参数列表=====================》
 */
/**
* tabbar data
*/
const tabbar = {
  param:'',
  unselect: [
    {
      img: '/images/icon/home.png',
      title: '首页',
      pagename: 'table',
      page: '/pages/index/index',
    },
    {
      img: '/images/icon/home.png',
      title: '店铺',
      pagename: 'storeDetail',
      page: '/pages/storeDetail/storeDetail',
      
    },
    {
      img: '/images/icon/home.png',
      title: '会员',
      pagename: 'vip',
      page: '/pages/vip/vip',
    },
    {
      img: '/images/icon/home.png',
      title: '已点',
      pagename: 'orderlist',
      page: '/pages/orderList/orderList',
    },
    {
      img: '/images/icon/home.png',
      title: '我的',
      pagename: 'my',
      page: '/pages/my/my',
    },

  ],
  selected: [
    {
      img: '/images/icon/home-on.png',
    },
    {
      img: '/images/icon/home-on.png',
    },
    {
      img: '/images/icon/home-on.png',
    },
    {
      img: '/images/icon/home-on.png',
    },
    {
      img: '/images/icon/home-on.png',
    },
  ],
  unselectColor: '#8a8a8a',
  selectedColor: '#d81e06',
}
//tabbar end


module.exports = {
  header: header,
  nav: nav,
  banner: banner,
  list: list,
  tabbar: tabbar,
}