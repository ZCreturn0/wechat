// components/show-text/show-text.js
var myBehavior = require('../../behaviors/my-behavior.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: 'aaaaa'
    },
    fromParent: {
      type: String
    },
    order: String,
    received: String
  },
  /**
   * behaviors
   */
  behaviors: [myBehavior],
  /**
   * 组件的初始数据
   */
  data: {
    innerData: 'aaaa'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendData(){
      var detail = {
        msg: 'ok, back now'
      }
      this.triggerEvent('send', detail, {});
      // 调用behavior里面的方法
      this.say();
    }
  },
  ready(){
    console.log("parent:", this.properties.fromParent);
    // data- 前缀的数据用 this.dataset 获取
    console.log('order:', this.dataset.order);
    // 用 this.setData 给properties赋值
    this.setData({
      received: this.properties.fromParent + ',' + this.dataset.order
    });
    console.log('received:', this.properties.received);
  },
  /**
   * 生命周期
   */
  lifetimes: {
    // 组件创建时,此时不能调用setData
    created: function(){
      console.log("created");
    },
    // 组件进入页面结点,已完全初始化
    attached: function(){
      console.log("attached");
    },
    // 组件从页面移除
    detached: function(){
      console.log("detached");
    }
  }
})
