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
    }
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

  },
  ready(){
    console.log("parent:", this.properties.fromParent);
  }
})
