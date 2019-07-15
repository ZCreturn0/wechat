// components/my-form/my-form.js
var myBehavior = require('../../behaviors/my-behavior.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  relations: {
    'myBehavior': {
      type: 'descendant', // 关联的目标节点应为子孙节点
      target: myBehavior
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
