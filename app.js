const vm = Vue.createApp({
  data() {
    return {
      price: 4,
      items: 0,
      total: 0,
      taxRate: 1.23,
      tax: 0,
    };
  },

  computed: {
    withVat() {
      if (this.items == 0) {
        return 0;
      } else {
        return this.tax + this.total;
      }
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
      this.tax = this.total * (this.taxRate / 10);
    },
  },
}).mount("#app");
