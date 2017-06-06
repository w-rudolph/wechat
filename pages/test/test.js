// pages/test/test.js.js
Page({
    data: {
        imgSrc: '',
        latitude: '',
        longitude: '',
        date: '2016-09-01',
        items: [
            { name: 'USA', value: '美国' },
            { name: 'CHN', value: '中国', checked: 'true' },
            { name: 'BRA', value: '巴西' },
            { name: 'JPN', value: '日本' },
            { name: 'ENG', value: '英国' },
            { name: 'TUR', value: '法国' },
        ]
    },
    showToast() {
        wx.showToast({
            title: '成功',
            icon: 'loading',
            duration: 1000,
            fail() {
                console.log('fail')
            },
            success() {
                console.log('success');
            }
        })
    },
    showModal() {
        wx.showModal({
            title: 'title',
            content: 'Hello world!',
            success(res) {
                if (res.confirm) {
                    console.log('confirm')
                } else if (res.cancel) {
                    console.log('cancel')
                }
            }
        })
    },
    showActionSheet() {
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            itemColor: '',
            success: function (res) {
                console.log(res.tapIndex)
            }
        })
    },
    onShow() {
        wx.showNavigationBarLoading()
        setTimeout(() => {
            wx.hideNavigationBarLoading()
        }, 1000)
    },
    showTabbar() {
        wx.switchTab({
            url: '../index/index',
        })
    },
    chooseImage() {
        wx.chooseImage({
            count: 1,
            sourceType: ['camera', 'albumn'],
            success: (res) => {
                let tempFilePaths = res.tempFilePaths;
                this.setData({
                    imgSrc: tempFilePaths
                })
            }
        })
    },
    startRecord() {
        wx.startRecord({
            success(res) {
                var tempFilePath = res.tempFilePath
                wx.playVoice({
                    filePath: tempFilePath
                })
            }
        })
    },
    stopRecord() {
        wx.stopRecord();
    },
    qrcode() {
        wx.scanCode({
            success(res) {
                wx.showModal({
                    title: 'code',
                    content: JSON.stringify(res, null, 2),
                })
            }
        })
    },
    checkboxChange(e) {
        console.log(e.detail.value);
    },
    bindDateChange(e) {
        console.log(e.detail.value);
        this.setData({ date: e.detail.value })
    },
    onReady() {
        this.mapCtx = wx.createMapContext('myMap');
        /*wx.getLocation({
            type: 'gcj02',
            success: (res) => {
                var latitude = res.latitude
                var longitude = res.longitude
                //this.setData({ latitude, longitude})
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 28
                })
            }
        })*/
    },
    moveToLocation() {
        this.mapCtx.moveToLocation();
    },
    bindtap(e) {
        console.log(e);
    },
    makertap: function (e) {
        var that = this;
        var id = e.markerId;
        that.showSearchInfo(wxMarkerData, id);
    },
    getCenterLocation() {
        this.mapCtx.getCenterLocation({
            success(res) {
                wx.showModal({
                    title: 'location',
                    content: JSON.stringify(res, null, 2),
                })
            }
        });
    }
})