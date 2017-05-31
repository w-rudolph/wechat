//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onPullDownRefresh() {
    wx.showToast({
      title: '下拉刷新开始',
    });
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1500);
  },
  onReachBottom: function () {
    wx.showToast({
      title: '上拉事件',
    })
  },
})
