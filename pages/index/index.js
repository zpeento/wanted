//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    panel:[
      {
        id:'article1',
        imgsrc:'../../images/pic.jpg',
        text:'夏至未至'
      },
      {
        id:'article1',
        imgsrc:'../../images/pic.jpg',
        text:'夏至未至'
      },
      {
        id:'article1',
        imgsrc:'../../images/pic.jpg',
        text:'夏至未至'
      },
      {
        id:'article1',
        imgsrc:'../../images/pic.jpg',
        text:'夏至未至'
      },
      {
        id:'article1',
        imgsrc:'../../images/pic.jpg',
        text:'夏至未至'
      },
      {
        id:'article1',
        imgsrc:'../../images/pic.jpg',
        text:'夏至未至'
      },
      {
        id:'article1',
        imgsrc:'../../images/pic.jpg',
        text:'夏至未至'
      },
      {
        id:'article1',
        imgsrc:'../../images/pic.jpg',
        text:'夏至未至'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../cover/cover'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
