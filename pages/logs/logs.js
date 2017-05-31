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
            title: '下拉加载中...',
        });
        setTimeout(()=>{
            wx.stopPullDownRefresh()
        },1500);
    },
    onReachBottom: function () {
        wx.showToast({
            title: '上拉加载更多',
        })
    },
})
