var Text = {
  view: function(ctrl,arg) {
    return m(".text", {
      key: 'text'+arg.v,
      config: function(el, init, ctx, vdom) {
        if (!init) {
          $(el).animate({marginLeft: 300+'px'}, 10000)
          $(el).on("click", function() {
            $(this).stop().fadeOut(500, function() {
              arr.splice(arg.i,1)
              m.redraw()
            })
          })
        }
      }
    }, 'text'+arg.v)
  }
}

var TextList = {
  view       : function(ctrl){
    return arr.map(function(v,i) {
      return m.component(Text, {v:v, i:i})
    })
  }
}

var arr = [1,2,3,4,5]

m.mount(document.body, TextList)
