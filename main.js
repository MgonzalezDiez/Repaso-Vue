var app = new Vue({
  el: '#app',
  data: {
    description: "ProductoGrarantizado ECamp",
    product: "Longaniza de Brocolli",
    selectedVariant: {},
    link: 'longanizas.html',
    cart: 0,
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
    cart: 0
  },
  methods: {
    updateProduct(variant) {
      this.selectedVariant = variant;
    },
    addToCart() {
      if (this.stock != 0) {
        this.cart += 1;
        this.selectedVariant.stock -= 1;
      }
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
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
    }
  },
  created() {
    this.selectedVariant = this.variants.find(item => item.default === true)
  }
})