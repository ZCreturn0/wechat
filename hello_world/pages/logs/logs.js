//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    lat: 39.905348414898995,
    lng: 116.40717000000001
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  locate: function(){
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        _this.setData({
          lat: res.latitude,
          lng: res.longitude
        });
      }
    })
  }
})
