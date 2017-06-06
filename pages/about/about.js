var app = getApp()
Page({
    data: {
        userInfo: {}
    },
    showTabbar() {
        wx.switchTab({
            url: '../index/index',
        })
    },
    onLoad() {
        app.getUserInfo((userInfo) => {
            this.setData({
                userInfo
            })
        })
    }
})