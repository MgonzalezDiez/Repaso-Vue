Vue.component("reviews-form", {
  template: '#template-reviews',
  data() {
    return {
      email: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    saveReview() {
      if (this.review && this.rating && this.email) {
        let productReview = {
          email: this.email,
          review: this.review,
          rating: this.rating
        }
        eventBus.$emit("review-added", productReview);
        this.email = null,
          this.review = null,
          this.rating = null
      } else {
        this.errors.push("Ocurrió un maldito error")
      }
    }
  }
})