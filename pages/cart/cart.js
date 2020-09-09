// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBlank: true,
    guessList: [
      {
        id: 1,
        img: "https://z3.tuanimg.com/imagev2/cpc/800x800.9c1e62a8fc94270cc52bdadd0c2c41a0.380x380.jpg.webp",
        title: "典富新款婴儿湿巾宝宝手口屁专用湿纸巾大包80抽带盖婴儿专用",
        price: "12.9",
        sold: "227"
      },
      {
        id: 2,
        img: "https://z8.tuanimg.com/imagev2/cpc/760x760.a163c300b2a3d9b706c83d7e9b2b9ef3.380x380.jpg.webp",
        title: "喜之郎果冻布丁草莓香橙果汁果冻多种口味婚庆喜糖果果冻整箱批发",
        price: "7.9",
        sold: "5459"
      },
      {
        id: 3,
        img: "https://z3.tuanimg.com/imagev2/cpc/800x800.fa1e3e57a1db2dc9836df157813c8652.380x380.jpg.webp",
        title: "口罩一次性防护防尘透气 加厚学生成人白色三层男女口鼻罩50只装",
        price: "47.9",
        sold: "127000"
      },
      {
        id: 4,
        img: "https://z2.tuanimg.com/imagev2/cpc/800x800.a18e5a0b83ba09729273c9f6dcc0643c.380x380.jpg.webp",
        title: "牛头奶棒棒糖网红 可爱 创意卡通宝宝奶酪棒棒糖果儿童牛奶片零食",
        price: "13.9",
        sold: "1484"
      }
    ]
  },
  /*点击进入详情页*/
  goDetail: function (event) {
    wx.navigateTo({
      url: "../index/goodsDetail/goodsDetail"
    })
  },
  // 前往分类页
  goMore: function (event) {
    wx.switchTab({
      url: '../category/category',
    })
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
  
  }
})