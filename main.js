Vue.component("product", {
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
    updateProduct(variant) {
      this.selectedVariant = variant;
    },
    addToCart() {
      if (this.stock != 0) {
        this.$emit("add-to-cart", 1);
        this.selectedVariant.stock -= 1;
      }
    },
    removeFromCart() {
      this.$emit("remove-from-cart", 1);
      this.selectedVariant.stock += 1;
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
  },
  template: `<div class="row">
          <div class="col">
            <img v-bind:src="img" />
            <!--atributos-->
          </div>
          <div class="col pt-3">
            <h1>{{ product }}</h1>
            <!--contenido etiqueta-->
            <h4>{{ description }}</h4>
            <h4>{{ stock }}</h4>
            <hr>
            <p v-if='stock > 10'>En Stock</p>
            <p v-else-if='stock <= 10 && stock > 0'>Quedan pocas unidades</p>
            <p v-else>Agotado</p>
            <ul>
              <li v-for='(detail, index) in details' :key="index">
                {{ detail }}
              </li>
            </ul>
            <hr>
            <h4>Variedades</h4>
            <div class="pl-3" v-for='variant in variants' :key="variant.id">
              <p v-on:mouseover="updateProduct(variant)">{{ variant.type }}</p>
            </div>

            <a class="a__productos" :href="link">Ver detalle</a>

            <button class="btn btn-info btn-sm" :disabled="!inStock" @click="addToCart">Agregar al Carro</button>
            <button class="btn btn-danger btn-sm" @click="removeFromCart">Sacar del Carro</button>
          </div>
        </div>`
})
var app = new Vue({
  el: '#app',
  data: {
    cart: 0,
  },
  methods: {
    addToCart(cant) {
      this.cart += cant;
    },
    removeFromCart(cant) {
      if (this.cart > 0) {
        this.cart -= cant;
      }
    }
  }
})