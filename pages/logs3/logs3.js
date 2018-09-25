// pages/logs2/logs2.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 1, value: '知道/使用过' },
      { name: 2, value: '不知道/没用过'},
      { name: 3, value: '我只知道造福人类' }
    ],
    socurs:0,
    globalScours:0

  },
  radioChange: function (e) {
    
    if (e.detail.value == 1) {
      // getApp().globalData.socurs += 20,
      this.setData({
        socurs: 20
        // getApp().globalData.socurs
      })
    } else if (e.detail.value == 2) {
      // getApp().globalData.socurs += 10,
      this.setData({

        socurs: 10
        // getApp().globalData.socurs
      })
    } else {
      // getApp().globalData.socurs += 0,
      this.setData({
        socurs: 0
        // getApp().globalData.socurs
      })
    };
    
  },
  countScours: function () {
    getApp().globalData.result += this.data.socurs;
    var nowSocurs = getApp().globalData.result;
    this.setData({
      globalScours: nowSocurs
    })
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