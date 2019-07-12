module.exports = Behavior({
  behaviors: [],
  properties: {
    property: String
  },
  data: {
    _data: String
  },
  attached: function(){
    console.log('behavior attached');
  },
  lifetimes: {
    attached: function(){
      console.log('now you import this behavior');
    }
  },
  methods: {
    say: function(){
      console.log('you got this behavior');
    }
  }
});