<template>
<div class="block__cart">
        <table>
        <tr v-for="product in getCartList" :key="product.id">
            <td>{{ product.title }}</td>
            <td>{{ product.count }}</td>
            <td>{{getCurrentCarrencyPrice(product.price).toFixed(2)}}</td>
            <td><button @click="removeCartProduct(product.id)" class="delete-button">Видалити</button></td>
        </tr>
        <tr>
            <td>Разом до оплати - {{getCartSum.toFixed(2)}}</td>
        </tr>
    </table>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CartProductList',
    computed: {
        ...mapGetters(['getCartList','getCurrentCarrencyPrice','getCartSum',
        'getCountProductCart'])
    },
    methods: {
        ...mapActions(['removeCartProduct'])
    },
}
</script>

<style lang="css" scoped>
.block__cart{
    width: 80%;
}

table {
    width: 100%;
    text-align: inherit;
}
tr {
    background-color: #f2f2f2; 
}
.delete-button {
    background-color: #f44336; 
    color: #ffffff; 
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>