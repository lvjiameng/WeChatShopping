//index.js

Page({
  data: {
    slides: [ "//img1.360buyimg.com/da/s750x366_jfs/t24163/29/833026140/92109/1a7ce0b9/5b444e17Na4a33488.jpg!cr_1125x549_0_72.dpg",
  "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/101141/23/19775/142693/5ea15624E8d6bb6d4/9d31617b237f1069.jpg!cr_1125x445_0_171!q70.jpg.dpg",
 "//imgcps.jd.com/ling4/6533301/56m66LCD5paw5qy-6YCf6YCS/5Lq65rCU55av5oqi5Zeo57-75aSp/p-5e7db7679530ce40bad549b0/a27b91bc/cr_1125x445_0_171/s1125x690/q70.jpg",
  "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/124885/8/652/147025/5eb68c64Ed43e9f7b/19b8661e855063fb.jpg!cr_1125x445_0_171!q70.jpg.dpg",
  "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/112427/28/5853/102243/5eb64727E90debbc7/834dcee263a0cfa7.jpg!cr_1125x445_0_171!q70.jpg.dpg",
    ],
    bargainList: [
      {
        title: "航嘉显示器M2781C 27英寸1800R曲面电竞大型游戏显示器 台式机超清电脑显示屏曲面 黑色",
        img: "//img11.360buyimg.com/n2/s240x240_jfs/t1/92166/31/4716/108490/5de8d421E9cdb5845/847a9b56d32d7fdf.jpg!q70.jpg",
        desc: "仅剩3件",
        basePrice: "699.00",
        originalPrice: "899.00",
        limit: "3"
      },
      {
        title: "泓一提拉米苏夹心蛋糕 早餐面包 下午茶糕点休闲零食小吃摩卡咖啡味550g",
        img: "//img11.360buyimg.com/n2/s240x240_jfs/t1/68492/38/14976/437367/5dc28390E6ea6b2ab/93ba697724f98a84.jpg!q70.jpg",
        desc: "蛋糕 咖啡味",
        basePrice: "24.9",
        originalPrice: "39.9",
        limit: "2789"
      },
      {
        title: "葡记 奶香味鲜切蛋糕1000g 整箱礼盒装 营养早餐代餐 口袋手撕面包 休闲零食小吃 下午茶糕点心",
        img: "//img14.360buyimg.com/n2/s240x240_jfs/t1/78432/33/6872/425453/5d50e81dEd8f00469/36afd6a3e2fd6cfe.jpg!q70.jpg",
        desc: "领券满229减40",
        basePrice: "30.9",
        originalPrice: "49.9",
        limit: "3221"
      },
      {
        title: "越南大青芒玉芒 芒果 精选大果 青皮芒果香芒 进口新鲜水果 京东生鲜 净重9斤 大青芒",
        img: "//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/113718/19/5542/171267/5eb51128Edcece865/b6468a0abdb0e7c5.jpg!q70.dpg.webp",
        desc: "【买5斤送5斤】",
        basePrice: "39.9",
        originalPrice: "69.9",
        limit: "680"
      }
    ],
    firstList: [
      {
        img: "https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/109620/8/15852/210916/5eaee016Ea4bd4e41/228140e16d95affa.jpg!q70.dpg.webp",
        title: "三星 （SAMSUNG）27英寸1000R超曲面 窄边框 75Hz刷新率 立体环绕音响 HDMI接口高清电脑显示器 (C27T550FDC)",
        price: "1799"
      },
      {
        img: "//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/111008/26/5861/377032/5eb69b5dE5e16ea8b/11445fb4031623af.jpg!q70.dpg.webp",
        title: "良品铺子 面筋卷烧烤味烤面筋网红辣条味小零食儿时怀旧小吃120g",
        price: "17.8"
      },
      {
        img: "//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/75874/15/3011/192201/5d147394Ebea858e8/d1da6e68f8d60e9b.jpg!q70.dpg.webp",
        title: "先马（SAMA）黑金刚 黑色 ATX游戏电脑主机箱 宽体五金/钢化玻璃侧透/支持240水冷、长显卡、U3、背部走线",
        price: "139"
      },
      {
        img: "//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/114266/28/5767/251192/5eb61822E58e134ff/13aff453e7ee5658.jpg!q70.dpg.webp",
        title: "三只松鼠海芝脆休闲零食小吃网红食品 夹心海苔海味即食芝麻 海苔夹心脆36g/袋 ",
        price: "26.8"
      }
    ],
    secondList: [
      {
        img: "//img10.360buyimg.com/n2/s240x240_jfs/t21787/47/1918006310/122041/64713649/5b3ded9dN2e344d7c.jpg!q70.jpg",
        title: "CP正大包子 510g 老坛酸菜包 （速冻包子馒头 早餐 速冻食品)",
        price: "35.9"
      },
      {
        img: "//img14.360buyimg.com/n2/s240x240_jfs/t1/105896/3/443/362035/5dae7a32E954f5976/7247fe38d7d745e7.jpg!q70.jpg",
        title: "凤祥食品 生鸡大胸1kg出口日本级 低脂鸡胸肉健身餐鸡胸低脂代餐低脂鸡胸肉健身食品火锅食材",
        price: "34.9"
      },
      {
        img: "//img12.360buyimg.com/mobilecms/s316x316_jfs/t22987/311/1338347164/543151/ed6c40be/5b5aafa0Nf925cf5d.jpg!q70.dpg.webp",
        title: "CP正大 玉米猪肉烧卖 24个广式烧麦早餐小吃",
        price: "39.9"
      },
      {
        img: "//img13.360buyimg.com/mobilecms/s316x316_jfs/t1/19960/40/14941/43082/5cad45c6Efc2a1f9c/a0f33eabde333a35.jpg!q70.dpg.webp",
        title: "新鲜土豆云南红皮黄心小洋芋马铃薯火锅食材新鲜蔬菜 大土豆10斤 ",
        price: "25.8"
      }
    ],
    thirdList: [
      {
        img: "//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/97516/18/16812/244581/5e8077f0Ead9f6d26/9342da3dd189ef05.jpg!q70.dpg.webp",
        title: "榛鲜御品粮油调味方便速食云南过桥米线米粉350克每袋 3袋装",
        price: "19.9"
      },
      {
        img: "//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/22432/11/3201/353282/5c246b8dE8d2899d3/8d956b08a569a7d9.jpg!q70.dpg.webp",
        title: "海底捞京东自营 自热火锅方便速食 酸爽可口番茄牛腩自热食品火锅套餐365g",
        price: "34.9"
      },
      {
        img: "//img13.360buyimg.com/mobilecms/s316x316_jfs/t1/69159/11/3013/738651/5d145292E4f6881b3/ee33552ef8561c33.png.webp",
        title: "榛鲜御品东北特产朝鲜族大冷面延边真空装590g*4袋方便速食粮油调味",
        price: "29.9"
      },
      {
        img: "//img30.360buyimg.com/mobilecms/s316x316_jfs/t1/114202/29/4240/418845/5eac5402Ef1f38c50/3a29885e437b6f83.jpg!q70.dpg.webp",
        title: "饭小宝自热米饭3桶自热饭自助懒人方便速食自热火锅煲仔饭 【爆款经典三味】香菇滑鸡+川味回锅肉+台式卤肉  ",
        price: "67.9"
      }
    ],
    forthList: [
      {
        img: "//img10.360buyimg.com/n2/s240x240_jfs/t1/99715/7/17993/648318/5e8d6834Ec4654e2e/5437ab3a9f3c4e6b.jpg!q70.jpgp",
        title: "法丽兹 曲奇饼干零食大礼包950g整箱礼盒糕点点心办公室下午茶休闲食品",
        price: "69.9"
      },
      {
        img: "//img13.360buyimg.com/mobilecms/s316x316_jfs/t1/104088/27/5419/65697/5dee0339E880b7e81/577822e91d0a488a.jpg!q70.dpg.webp",
        title: "贵州酱香型53度桶装白酒高度原浆酒10斤散装老酒泡酒高粱粮食酒水",
        price: "59.27"
      },
      {
        img: "//img13.360buyimg.com/n2/s240x240_jfs/t1/79412/16/14236/188931/5db816ebE1f736d22/d7fda58c1bae3aa3.jpg!q70.jpg",
        title: "龙舌飞 休闲零食大礼包 牛肚牛蹄筋牛肉干 肉干肉脯 节日礼盒 酒水小吃组合装 香辣味 龙舌飞大礼包榛鲜御品东北特产朝鲜族大冷面延边真空装590g*4袋方便速食粮油调味",
        price: "199"
      },
      {
        img: "//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/102886/10/17176/186884/5e81bc94E3c82e8fb/8af4864508a660cf.jpg!q70.dpg.webp",
        title: "野格鹿头圣鹿利口酒力娇酒德国原装洋酒700ml调酒吧酒水行货",
        price: "291"
      }
    ],
    fifthList: [
      {
        img: "//img14.360buyimg.com/n2/s240x240_jfs/t1/103989/39/16927/449569/5e81868fE4c5a54e2/67069391f0bca8aa.jpg!q70.jpg",
        title: "南极人NanJiren 全棉四件套 简约纯棉床上用品双人被套200*230cm床单枕套 1.51.8米床 雅格",
        price: "139.9"
      },
      {
        img: "//img13.360buyimg.com/mobilecms/s316x316_jfs/t1/115432/33/976/200735/5e9337ebE71e309b9/ee71f33ad3e1e8be.jpg!q70.dpg.webp",
        title: "北极绒床上用品单人上下铺0.9m床单学生三件套1.2m学生宿舍床单被套六件套1.0m员工宿舍床 真爱永恒 0.9-1.2m床三件套（被套150*200）",
        price: "59.00"
      },
      {
        img: "//img12.360buyimg.com/mobilecms/s316x316_jfs/t1/116177/16/694/167208/5e8f6f43E3c0d91a0/386de22dcf3e6fad.jpg!q70.dpg.webp",
        title: "满圆红 纯棉四件套简约北欧床单床笠全棉纯色刺绣被套床上用品 宝石蓝 1.5m床单款",
        price: "259.00"
      },
      {
        img: "//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/122557/12/1002/389077/5eb8bd3fE2f78681b/daa01aca3050b549.jpg!q70.dpg.webp",
        title: "恒源祥 婚庆四件套 粉色公主风提花结婚套件 新婚床单被套被罩 床上用品 喜相逢220*240cm",
        price: "659.00"
      }
    ],
    sixthList: [
      {
        img: "//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/25419/33/9606/101265/5c80c2d1E0938a1fb/77e103c4906c2f73.jpg!q70.dpg.webp",
        title: "艺卓 （EIZO）显示器设计制图专业摄影修图视频后期印刷色彩管理 23.0英 寸 CS 230   黑色",
        price: "4999"
      },
      {
        img: "//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/38722/13/1825/290419/5cbea1d6Eae62aeb8/82bd2ce75e8bc579.jpg!q70.dpg.webp",
        title: "佳能（Canon）EOS 200D II 200D2 迷你单反相机 数码相机（EF-S18-55mm f4-5.6 IS STM）白色 Vlog相机视频",
        price: "4299.00"
      },
      {
        img: "//img12.360buyimg.com/mobilecms/s316x316_jfs/t1/9529/37/13302/168161/5c459adbEbae2467d/cdb460225866bd4a.jpg!q70.dpg.webp",
        title: "京东方（BOE）画屏 数码实木电子相框  APP云享世界名画 AI语音/无损伽马 S2 32英寸新月桦 ",
        price: "2999.00"
      },
      {
        img: "//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/34007/29/10273/170498/5cce3923E10c44565/a371c757ec0804d8.jpg!q70.dpg.webp",
        title: " 小米(MI)5号紫米彩虹电池碱性 血压计血糖仪遥控器挂钟 适用于小米体脂称小米鼠标儿童玩具（10粒装）  ",
        price: "9.90"
      }
    ],
    seventhList: [
      {
        img: "//img10.360buyimg.com/n2/s240x240_jfs/t1/109813/12/16954/294197/5eb65324E52e22081/fe06dee08e82abcf.jpg!q70.jpg",
        title: "五月花 大号刮刮乐免手洗平板拖把 干湿两用拖布 家用墩布网红懒人地拖 2块配布",
        price: "129.8"
      },
      {
        img: "//img10.360buyimg.com/n2/s240x240_jfs/t1/94937/15/7451/403538/5dfb0deeE10049dcd/38321166e2644e93.jpg!q70.jpg",
        title: "雅彩洁（YACAIJIE ）油烟机清洗剂 厨房重油污净500g*2 油污清洁剂 去油污厨房 免拆多功能泡沫油烟净2瓶装",
        price: "35.9"
      },
      {
        img: "//img12.360buyimg.com/mobilecms/s316x316_jfs/t1/115734/24/5880/85988/5eb64989E6f9404c8/5ebea3fbdfa6c6fe.jpg!q70.dpg.webp",
        title: "蓝月亮地板清洁剂2kg瓶 去污除菌 呵护全家健康 柠檬香不刺鼻 木地板瓷砖大理石等多场景适用",
        price: "26.7"
      },
      {
        img: "//img13.360buyimg.com/mobilecms/s316x316_jfs/t3757/62/277233831/176174/88343800/5804cdbbN63549f1d.jpg!q70.dpg.webp",
        title: " 红宝坊宝掸 可伸缩把真鸡毛掸子家用车用除尘掸纯手工不掉毛家庭清洁工具 加厚加长（不含图中瓷瓶） 火驹貢掸(紧致型) 中号毛长40cm总长70cm伸缩后110cm  ",
        price: "160"
      }
    ]

  },
  // 前往详情页
  goDetail: function (event) {
    wx.navigateTo({
      url: './goodsDetail/goodsDetail'
    })
  },
  // 前往分类页
  goMore: function (event) {
    wx.switchTab({
      url: '../category/category',
    })
  },
  // 返回顶部按钮的显示与隐藏
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  // 点击返回顶部
  backTop: function (e){
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
})