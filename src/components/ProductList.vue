<template>
<p>Список товарів</p>
    <table>
        <tr v-for="product in getPoductList" :key="product.id">
            <td>{{ product.title }}</td>
            <td>{{getCurrentCarrencyPrice(product.price).toFixed(2) }}</td>
            <td><button @click="buyProduct(product)" class="buy-button">Купити</button></td>
        </tr>
    </table>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
    
    name: 'ProductList',

computed: {
    ...mapGetters(['getPoductList','getCurrentCarrencyPrice']),
},
methods: {
...mapActions(['buyProduct'])
},
}
</script>

<style lang="css" scoped>
table {
    width: 80%;
    text-align: inherit;
}
tr {
    background-color: #f2f2f2;
}
.buy-button {
    background-color: #4caf50;
    color: #ffffff;
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>