Vue.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: "#template-list"
})