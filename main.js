const app = Vue.createApp({
    data() {
        return {
          cart: 0,
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
            return (this.inventory > 0 && this.cart < this.inventory);
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
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
            //this.varProductAvailable = (this.inventory > 0 && this.cart<this.inventory);
        },
        removeCart(){
            if(this.cart > 0){
                this.cart -= 1;
                //this.varProductAvailable = (this.inventory > 0 && this.cart<this.inventory);
            }            
        },
        updateVariant(variantIndex){
            if(this.cart == 0 ) {
                this.selectedVariant = variantIndex;
                console.log(variantIndex);
            } else {
                console.log('Zmiana typu niemożliwa')
            }
        }
    },
})

