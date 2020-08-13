Vue.component("review-detail", {
  template: "#template-detail",
  props: {
    details: {
      type: Array,
      required: true
    }
  }
})