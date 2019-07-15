// components/my-input.js
var myBehavior = require('../../behaviors/my-behavior.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  behaviors: [myBehavior],
  relations: {
    '../my-form': {
      type: 'ancestor'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
