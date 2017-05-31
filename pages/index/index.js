//index.js
Page({
  data: {
    motto: 'Hello World',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    console.log('onLoad')
  },
  imagePreview(event) {
    let target = event.currentTarget;
    wx.previewImage({
      current: target.dataset['idx'],
      urls: this.data.imgUrls,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
