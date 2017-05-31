// pages/test/test.js.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  showToast(){
    wx.showToast({
      title:'成功',
      icon:'loading',
      duration: 1000,
      fail(){
        console.log('fail')
      },
      success(){
        console.log('success');
      }
    })
  },
  showModal(){
    wx.showModal({
      title: 'title',
      content: 'Hello world!',
      success(res){
        if(res.confirm){
          console.log('confirm')
        }else if(res.cancel){
          console.log('cancel')
        }
      }
    })
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['A','B','C'],
      itemColor: '',
      success: function(res) {
        console.log(res.tapIndex)
      }
    })
  },
  onShow(){
    wx.showNavigationBarLoading()
    setTimeout(()=>{
      wx.hideNavigationBarLoading()
    },1000)
  },
  showTabbar(){
    wx.switchTab({
      url: '../index/index',
    })
  }
})