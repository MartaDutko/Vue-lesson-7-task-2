<template>
    <div>
        <select-currency @selectCurrency="currentRate" />
        <product-list/>
        <cart-product-list/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CartProductList from './CartProductList.vue'
import ProductList from './ProductList.vue'
import SelectCurrency from './SelectCurrency.vue'

export default {
    components: { ProductList, SelectCurrency, CartProductList },
    name: 'ProductsPage',
    methods: {
        ...mapActions(['selectCurrentRate']),
        currentRate(rate) {
            let res = (rate === 'uah') ? 1 : (1 / 39)
            this.selectCurrentRate(res)
        },
    },
}
</script>

<style lang="css" scoped>
</style>