Page({
  data: {
    select: 1,//tab默认选中第一个
    detailSelect: 1,//商品详情tab默认选中第一个
    slides: [
      "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/92166/31/4716/108490/5de8d421E9cdb5845/847a9b56d32d7fdf.jpg!q80.dpg",
      "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/85298/16/4768/129947/5de8d424Ebdd9e6a0/a612d7d731210fcb.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/103681/26/4829/42031/5de8d558E36ace6e3/1337fbb33bcf66ed.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/102063/27/4662/40770/5de8d559Eacaf0793/ad24a3f531da5678.jpg!q70.dpg.webp",
      "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/86382/37/4749/111828/5de8d473E324d04d2/b39c3b3c84e2e619.jpg!q70.dpg.webp"
    ],
    tabs: [
      {
        id: 1,
        name: "评论"
      },
      {
        id: 2,
        name: "推荐"
      },
      {
        id: 3,
        name: "详情"
      }
   ],
    commentList: [
      {
        id: 1,
        avatar: "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
        nickname: "詹姆斯",
        comment: "刚送到就迫不及待地打开试了下，外观挺漂亮的，吹出的风比较温和，今天的室内温度有30度，加上水用着还行，不知再热点加冰效果如何。整体来说还行，用一段时间再点评。"
      },
      {
        id: 2,
        avatar: "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
        nickname: "詹姆斯",
        comment: "刚送到就迫不及待地打开试了下，外观挺漂亮的，吹出的风比较温和，今天的室内温度有30度，加上水用着还行，不知再热点加冰效果如何。整体来说还行，用一段时间再点评。"
      },
      {
        id: 2,
        avatar: "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
        nickname: "詹姆斯",
        comment: "刚送到就迫不及待地打开试了下，外观挺漂亮的，吹出的风比较温和，今天的室内温度有30度，加上水用着还行，不知再热点加冰效果如何。整体来说还行，用一段时间再点评。"
      },
      {
        id: 2,
        avatar: "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
        nickname: "詹姆斯",
        comment: "刚送到就迫不及待地打开试了下，外观挺漂亮的。"
      }
    ],
    recommendList: [
      {
        id: 1,
        title: "航嘉（Huntkey） X2471C 23.6曲面显示器hdmi电脑液晶屏24电竞吃鸡游戏144hz 24寸曲面显示器",
        img: "https://img14.360buyimg.com/mobilecms/s270x270_jfs/t18631/280/1815616417/612958/3a9eccc4/5ad7f04fNcc1a030a.png.webp",
        price: "799.00",
      },
      {
        id: 2,
        title: "夏新（Amoi）27英寸电脑显示器超薄高清护眼4K办公家用2K网吧电竞游戏HDMI液晶屏幕 27英寸曲面黑红微边框75hz",
        img: "//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/98849/12/10527/128798/5e1d6831E204f235d/500c605ab4cdfada.jpg!q70.dpg.webp",
        price: "619.00",
      },
      {
        id: 3,
        title: "dostyle22.5英寸IPS16:10 广视角全高清可壁挂办公/家用显示器 显示屏（HDMI版）白色TJ2202B",
        img: "//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/70984/20/10041/411035/5d7a0753Eb5b9e411/f56306f4f0f2d5c7.jpg!q70.dpg.webp",
        price: "549.00",
      },
      {
        id: 4,
        title: "TCL 电脑显示器23.6英寸VA曲面屏 75HZ窄边滤蓝光家用游戏电竞 T24M7C（HDMI）",
        img: "//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/120049/28/402/203108/5eb4c669E560ca122/7f625da9c1ce2f3f.jpg!q70.dpg.webp",
        price: "629.00",
      },
      {
        id: 5,
        title: "飞利浦 27英寸显示器 1500R曲面 HDMI高清 低蓝光不闪屏 75Hz刷新率电竞游戏电脑显示屏 271E1CS",
        img: "//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/122531/27/1137/204399/5eba0d35Ee3e41979/bbc08bd698265c09.jpg!q70.dpg.webp",
        price: "938.00",
      },
      {
        id: 6,
        title: "飞利浦（PHILIPS） 电脑显示器20/22/24/27英寸支持壁挂商务办公家用不闪液晶屏 23.8英寸IPS 75Hz白色 VGA+HDMI",
        img: "//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/113530/27/5758/608712/5eb587eaE451726c7/1f3aa2d1face1260.png.webp",
        price: "689.00",
      }
    ],
    detailTabs: [
      {
      id: 1,
      name: "商品介绍"
      },
      {
      id: 2,
      name: "咨询与售后"
      }
    ]
  },
  /*返回上一页*/
  goBack: function() {
    // console.log('哈哈')
    wx.navigateBack()
  },
  /*点击tab切换*/
  selectTab: function (event) {
    this.setData({
      select: event.currentTarget.id
    })
  },
  /*商品详情tab切换*/
  selectDetailTab: function (event) {
    this.setData({
      detailSelect: event.currentTarget.id
    })
  },
  /*点击加入购物车*/
  addToCart: function (event) {
    // toast提示
    wx.showToast({
      title: '成功加入购物车',
      icon: "success",
      duration: 2000
    })
  },
  /*点击进入详情页*/
  goNext: function (event) {
    wx.navigateTo({
      url: "../goodsDetail/goodsDetail"
    })
  },
  /*点击进入购物车*/
  goCart: function (event) {
    wx.switchTab({
      url: "../../cart/cart"
    })
  },
})