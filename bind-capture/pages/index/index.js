//index.js
//获取应用实例
// 事件系统  WXS响应事件   使用WXS函数响应事件
const app = getApp()

Page({
  data: {
    
  },
  taped(event){
    console.log(event);
    const query = wx.createSelectorQuery();
    query.select("#target").boundingClientRect(function(res){
      console.log(res.top);
    });
    query.selectViewport().scrollOffset(function(res){
      console.log(res.scrollTop);
    });
    query.exec();
  }
})
