Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    cart: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      description: "ProductoGrarantizado ECamp",
      product: "Longaniza de Brocolli",
      selectedVariant: {},
      link: 'longanizas.html',
      details: ["500 gr", "organica", "libre de colesterol"],
      variants: [{
          id: 1,
          type: "Rojas",
          img: "./assets/index.jpg",
          stock: 10,
          default: true
        },
        {
          id: 2,
          type: "Blancas",
          img: "./assets/blanca.jpg",
          stock: 0
        }
      ],
    }
  },
  methods: {

    addToCart() {
      if (this.selectedVariant.stock != 0) {
        this.$emit("add-to-cart", this.selectedVariant);
        this.selectedVariant.stock -= 1;
      }
    },
    removeFromCart() {
      var variantInCart = this.cart.find(product => product == this.selectedVariant)
      if (variantInCart) {
        this.$emit("remove-from-cart", this.selectedVariant);
        this.selectedVariant.stock += 1;
      }
    }
  },
  computed: {
    inStock() {
      return this.stock > 0 ? true : false;
    },
    img() {
      return this.selectedVariant.img;
    },
    stock() {
      return this.selectedVariant.stock;
    },
    shipping() {
      return this.premium == true ? 'Gratis' : "2000";
    }
  },
  created() {
    this.selectedVariant = this.variants.find(item => item.default === true)
  },
  template: '#product-template'
})

var app = new Vue({
  el: '#app',
  data: {
    cart: [],
    premium: true,
    showStyle: {
      display: "block",
      "padding-right": "16px",
      "padding-top": "20px"
    },
    displayCart: false
  },
  methods: {
    addToCart(variant) {
      this.cart.push(variant);
    },
    removeFromCart(variant) {
      var index = this.cart.indexOf(variant);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
  },
  computed: {
    modalStyle() {
      if (this.displayCart) {
        return this.showStyle
      } else {
        return {}
      }
      // return this.displayCart ? this.showStyle : {}
    }
  }
})