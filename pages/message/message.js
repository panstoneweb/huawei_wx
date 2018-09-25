// pages/message/message.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {name:0,value:'/pages/imgs/0.png'},
      { name: 1, value: '/pages/imgs/1.png' },
      { name: 2, value: '/pages/imgs/2.png' }
    ],
    message:"",
    gender:" "
  },
  radioChange:function(e){
    if(e.detail.value == 0){
      this.setData({
        gender: "女"
      })
    } else if (e.detail.value == 1){
      this.setData({
        gender:"男"
      })
    }else {
      this.setData({
        gender:"不确定"
      })
    }
    
  },
  countScours:function(e){
    this.setData({
      message:e.detail.value
    });
    getApp().globalData.message = this.data.message;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})