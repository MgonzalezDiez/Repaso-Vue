Vue.component("product-tabs", {
  props: {
    reviews: {
      type: Array,
      required: true
    },
    send: {
      type: String,
      required: true
    },
    details: {
      type: Array,
      required: true
    }
  },
  template: "#tabs-template",
  data() {
    return {
      tabs: ['Add Review', 'Ver Reviews', 'Envio', 'Detalles'],
      selectedTab: 'Add Review'
    }
  }
})