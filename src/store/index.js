import { createStore } from "vuex";

export default createStore({
  state: {
    productList: [
      {
        "title": "Яблука",
        "id": 1,
        "price": 20,
        "count": 0
      },
      {
        "title": "Молоко",
        "id": 2,
        "price": 25,
        "count": 0
      },
      {
        "title": "Хліб",
        "id": 3,
        "price": 10,
        "count": 0
      },
      {
        "title": "Яйця",
        "id": 4,
        "price": 15,
        "count": 0
      },
      {
        "title": "М'ясо",
        "id": 5,
        "price": 50,
        "count": 0
      },
      {
        "title": "Картопля",
        "id": 6,
        "price": 8,
        "count": 0
      },
      {
        "title": "Сир",
        "id": 7,
        "price": 30,
        "count": 0
      },
      {
        "title": "Рис",
        "id": 8,
        "price": 12,
        "count": 0
      },
      {
        "title": "Олія",
        "id": 9,
        "price": 18,
        "count": 0
      },
      {
        "title": "Сік",
        "id": 10,
        "price": 15,
        "count": 0
      }
    ],
    cartList: [],
    currentCurrency: 1,

  },
  getters: {
    getPoductList: ({ productList }) => productList,
    getCartList: ({ cartList }) => cartList,
    getCurrentCarrencyPrice: ({ currentCurrency }) => (price) => price * currentCurrency,
    getCartSum: (state) => state.cartList.reduce((acc, product) => acc + (product.price * product.count), 0)
      * state.currentCurrency
  },
  mutations: {
    selectCurrentRate(state, val) {
      state.currentCurrency = val
    },
    buyProduct(state, val) {
      let found = state.cartList.find(item => item.id === val.id);
      if (found) found.count++;
      else {
        val.count = 1;
        state.cartList.push(val);
      }
    },
    removeCartProduct(state, id) {
      let found = state.cartList.find(item => item.id === id);
      if(found.count>1)found.count--
      else
      state.cartList = state.cartList.filter((el) => el.id !== id)
    }
  },
  actions: {
    selectCurrentRate({ commit }, val) {
      commit('selectCurrentRate', val)
    },
    buyProduct({ commit }, val) {
      commit('buyProduct', val)
    },
    removeCartProduct({ commit }, id) {
      commit('removeCartProduct', id)
    }
  },
  modules: {},
});
