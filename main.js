var app = new Vue({
    el: '#app',
    data: {
        description: "lorem Ipsum",
        product: "Longaniza de Brocolli",
        img: "./assets/index.jpg",
        lnk: "./longaniza.html",
        stock: 12,
        details: ["500 gr", "organica", "libre de colesterol"],
        variants: [{
                id: 1,
                type: "Rojas",
                img: "./assets/index.jpg"
            },
            {
                id: 2,
                type: "Blancas",
                img: "./assets/blanca.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        updateImg(img) {
            this.img = img;
        },
        addToCart() {
            if (this.stock != 0) {
                this.cart += 1;
                this.stock -= 1;
            }
        },
        removeFromCart() {
            debugger
            if (this.cart > 0) {
                this.cart -= 1;
                this.stock += 1;
            }
        }
    },
    computed: {
        inStock() {
            return this.stock > 0 ? true : false;

        }
    }
})