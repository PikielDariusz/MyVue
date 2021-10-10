app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
  template:
  /*html */
      `<div class="product-display">
          <div class="product-container">
              <div class="product-image">
                  <img :src="image"
                  :title="description"
                  :class="{ 'out-of-stock-img': !productAvailable}">
              </div>
              <div class="product-info">
                  <h2>{{title}}</h2>
                  <h4>{{sale}}</h4>
                  <p v-if="(inventory-this.$parent.cart) > 10">In stock ( {{(inventory-this.$parent.cart)}} )</p>
                  <p v-else-if="(inventory-this.$parent.cart) <= 10 && (inventory-this.$parent.cart) > 0">Almost sold out! ( {{(inventory-this.$parent.cart)}} )</p>
                  <p v-else>Out of stock</p>
                  
                  <p>Shipping: {{ shipping }}</p>
                  
                  <product-details :details="details"></product-details>
                  
                  <div v-for="(variant, index) in variants"
                      :key="variant.id"
                      @mouseover="updateVariant(index)"
                      class="color-circle"
                      :style="{backgroundColor: variant.color}">
                  </div>                  
                  <button class="button"
                      :disabled="!productAvailable"
                      :class="{ disabledButton: !productAvailable }"
                      @click="addToCart">
                        Add to Cart
                   </button>
                  <button class="button" @click="removeCart" :disabled="this.$parent.cart == 0">Remove Cart</button>
              </div>
          </div>
      </div>`,

    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'reaktywny?',
            selectedVariant: 0,
            url: 'http://uniqa.pl',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 3 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' , quantity: 0},
            { id: 2236, color: 'red', image: './assets/images/socks_blue_red_circle.jpg' , quantity: 15}
            ],
            onSale: true
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        productAvailable() {
            return (this.inventory > 0 && this.$parent.cart < this.inventory);
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inventory(){
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if(this.onSale){
            return this.title + ' is on sale'
            }
        },
        shipping() {
            if(this.premium) {
                return 'Free'
            }
            return '2.99 $'
        }
    },
    methods: {
        addToCart(){
            this.$parent.cart += 1;
        },
        removeCart(){
            if(this.$parent.cart > 0){
                this.$parent.cart -= 1;
            }
        },
        updateVariant(variantIndex){
            if(this.$parent.cart==0) {
                this.selectedVariant = variantIndex;
                console.log(variantIndex);
            }
        }

    }

})