//article.js
//获取应用实例
var app = getApp()
Page({
  data: {
    article:[
        {
            talker:'../../images/dog.jpg',
            text:'嘿，你在吗？'
        },
        {
            talker:'../../images/dog2.jpg',
            text:'怎么啦嘿，你在吗？嘿，你在吗？嘿，你在吗？嘿，你在吗？嘿，你在吗？嘿，你在吗？'
        },
        {
            talker:'../../images/dog.jpg',
            text:'嘿，你在吗？'
        },
        {
            talker:'../../images/dog2.jpg',
            text:'怎么啦嘿，你在吗？嘿，你在吗？嘿，你在吗？嘿，你在吗？嘿，你在吗？嘿，你在吗？'
        },
        {
            talker:'../../images/dog.jpg',
            text:'嘿，你在吗？'
        }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
