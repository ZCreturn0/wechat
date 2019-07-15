// components/list-ul/list-ul.js
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
    // 获取所有子组件
    getAll(){
      var nodes = this.getRelationNodes('../list-li/list-li');
      console.log(nodes);
    }
  },
  ready(){
    this.getAll();
  },
  /**
   *  关系
   */
  relations: {
    '../list-li/list-li': {
      type: 'child',
      // 插入,target是该节点实例对象，触发在该节点attached生命周期之后
      linked: function(target){
        console.log('one child node added');
      },
      // 移动
      linkChanged: function(target){
        console.log('one child node moved');
      },
      // 删除
      unlinked: function(target){
        console.log('one child node removed');
      }
    }
  }
})
