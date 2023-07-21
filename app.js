let taxRate = 1.23;

const vm = Vue.createApp({
  data() {
    return {
      price: 4,
      items: 0,
      total: 0,
    }
  },

  computed: {
    taxRate() {
      return taxRate;
    },
    withVat() {
      return this.total * taxRate;
    },
  },

  methods: {
    incrementItem() {
      this.items++;
    },
    decrementItem() {
      this.items--;
    },
    incrementPrice() {
      this.price++;
    },
    decrementPrice() {
      this.price--;
    },
    updatePrice() {
      this.total = this.price * this.items;
    }
  }
}).mount('#app');