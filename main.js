const app = Vue.createApp({
    data() {
        return {
          cart: 0,
            message: 'Hello Vue!',
            description: 'reaktywny?',
            image: './assets/images/socks_blue.jpg',
            url: 'http://uniqa.pl',
            inventory: 3,
            varProductAvailable: (this.inventory > 0 && this.cart<this.inventory),
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
              ]
        }
    },
    created: function() {
        this.varProductAvailable = (this.inventory > 0 && this.cart<this.inventory);
      },
    methods: {
        addToCart(){
            this.cart += 1;
            this.varProductAvailable = (this.inventory > 0 && this.cart<this.inventory);
        },
        removeCart(){
            if(this.cart > 0){
                this.cart -= 1;
                this.varProductAvailable = (this.inventory > 0 && this.cart<this.inventory);
            }            
        },
        updateImage(variantImage){
            this.image = variantImage;
        }
    },
})

