var Modal = {
  controller: function() {
    return {
      isVisible: false,
      onunload:function() {
        console.log(234)
      }
    } //internal state
  },
  view: function(ctrl) {
    return m(".modal", {
      class: ctrl.isVisible ? "modal-visible" : "", //sets visibility via CSS
      config: function(el, init, c,d,e,f) {
        if (!init) {
          console.log(el, init, c,d,e,f)
          //jQuery-exposed API
          $(el).data("modal", {
            toggle: function() {
              m.startComputation()
              $('.modal').fadeOut(1000, function() {
                ctrl.isVisible = !ctrl.isVisible
                m.endComputation()
              })
            }
          })
        }
      }
    }, "modal!")
  }
}

//render the component via Mithril
m.mount(document.body, Modal)

//access it from outside
document.onclick=function() {
  console.log('---------------------',$(".modal:eq(0)").data("modal"))
  $(".modal:eq(0)").data("modal").toggle()
}
