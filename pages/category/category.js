// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: 0,
    categories: [
      {
        id: 1,
        name: '推荐商品'
      },
      {
        id: 2,
        name: '今日特价'
      },
      {
        id: 3,
        name: '粮油速食'
      },
      {
        id: 4,
        name: '零食酒水'
      },
      {
        id: 5,
        name: '母婴天地'
      },
      {
        id: 6,
        name: '家庭清洁'
      },
      {
        id: 7,
        name: '床上用品'
      },
      {
        id: 8,
        name: '健身器材'
      },
      {
        id: 9,
        name: '数码电子'
      }, 
      {
        id: 10,
        name: '家居百货'
      },
      {
        id: 11,
        name: '文学经典'
      }
    ],
    goodsList: [
      {
        id: 1,
        title: "口水娃手撕面包整箱500g零食早餐食品充饥速食营养好吃休闲小吃糕点",
        image: "https://z8.tuanimg.com/imagev2/cpc/800x800.870f69e1b56d27cc1edf55878691b1e0.380x380.jpg.webp",
        price: 18.9
      },
      {
        id: 2,
        title: "受益一生五本书全集  狼道全套...",
        image: "https://z8.tuanimg.com/imagev2/cpc/800x800.830f460a380d8b5a9f6d70d1de105b73.380x380.jpg.webp",
        price: 14.8
      },
      {
        id: 3,
        title: "冰丝凉席三件套1.8m床可水洗可折叠1.5米可机洗夏季草席子1.2夏天",
        image: "https://z8.tuanimg.com/imagev2/cpc/800x800.e06744a48f513f536250cc1c89e24968.380x380.jpg.webp",
        price: 21.8
      },
      {
        id: 4,
        title: "手磨豆干多口味 1000g",
        image: "https://z3.tuanimg.com/imagev2/trade/800x800.1c9e72c53b31ffa60fc2337b2a968c3d.380x380.jpg.webp",
        price: 19.9
      },
      {
        id: 5,
        title: "白象方便面大骨面原汁猪骨面牛面红烧牛肉面75g*24包10包袋装泡面",
        image: "https://z3.tuanimg.com/imagev2/cpc/800x800.89d1852f15763a61724e1110fedd1d4f.380x380.jpg.webp",
        price: 22.8
      },
      {
        id: 6,
        title: "宅羊羊软饼干 宝宝零食儿童磨牙棒饼干 幼儿园零食60g非婴儿辅食",
        image: "https://z8.tuanimg.com/imagev2/cpc/800x800.55d97b2943dd63ce3deecb16d1064546.380x380.jpg.webp",
        price: 15.80
      },
      {
        id: 7,
        title: "【正品】增强酵素梅子酵素青梅清净孝素梅酵素乌梅随便果20粒起",
        image: "https://z8.tuanimg.com/imagev2/cpc/750x750.76d6957c3c2a2bf9cea10bea489b3182.380x380.jpg.webp",
        price: 13.8
      },
      {
        id: 8,
        title: "哈尔斯运动水杯子大容量男女便携Tritan塑料杯耐高温户外健身水壶",
        image: "https://z3.tuanimg.com/imagev2/cpc/800x800.5c3e4f3fe2a27ef7d9f1049d204dfe88.380x380.jpg.webp",
        price: 19.9
      },
      {
        id: 9,
        title: "户外双肩包女轻便韩版潮休闲小容量学生书包运动背包男迷你旅行包",
        image: "https://z2.tuanimg.com/imagev2/cpc/800x800.49ae015c19906646deafb7693f878a2d.380x380.jpg.webp",
        price: 14.9
      },
      {
        id: 10,
        title: "文武韩式辣白菜下饭菜酱菜辣朝鲜2250克泡菜韩国泡菜辣白菜小咸菜",
        image: "https://z2.tuanimg.com/imagev2/cpc/800x800.24f140edffc018bc09f037e61a1b9e0a.380x380.jpg.webp",
        price: 15.8
      }
    ],
    imageWidth: "",
    imageHeight: "",
    imageX: "",
    imageY: "",
    wxAppendData: [],
    imageUrl: '',
    btnId: '',
    showImage: false,
    imageStyle: ''
  },    
  /**
   * 选择商品类型
   */ 
  categoryClick: function(event) {
    this.setData({
      select: event.target.id - 1
    })
    // toast提示
    wx.showToast({
      title: "请稍等...",
      icon: "success",
      duration: 2000
    })
  },
  /**
   * 加入购物车提示
   */
  addToCart: function (event) {
    // toast提示
    wx.showToast({
      title: '成功加入购物车',
      icon: "success",
      duration: 2000
    })
  }
})