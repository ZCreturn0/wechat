// components/show-text/show-text.js
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
  }
})
