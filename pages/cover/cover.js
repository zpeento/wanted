//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title:'最想见到的那个她',
    author:'小丫',
    date:'2017-05-20',
    intro:'那是一个阳光明媚的日子，我踏着轻快的步伐来到校园。在这个熟悉地不能再熟悉地地方......'

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
