// components/list-li/list-li.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

  },
  /**
   *  关系
   */
  relations: {
    '../list-li/list-ul': {
      type: 'parent',
      // 插入,target是父节点实例对象
      linked: function (target) {
        console.log('one child node added to parent');
      },
      // 移动
      linkChanged: function (target) {
        console.log('one child node moved in parent');
      },
      // 删除
      unlinked: function (target) {
        console.log('one child node removed from parent');
      }
    }
  }
})
