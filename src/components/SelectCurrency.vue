<template>
    <div class="block__select">
        <p>Вітаємо на нашому сайті</p>
        <select v-model="selectCurrency" @change="changeSelectCurrency">
            <option value="uah">Гривня</option>
            <option value="dollar">Доллар</option>
        </select>
    </div>
</template>

<script>


export default {
    name: 'SelectCurrency',
    data() {
        return {
            selectCurrency: null,
        }
    },
    methods: {
        changeSelectCurrency() {
            this.$emit('selectCurrency', this.selectCurrency)
        }
    },

}
</script>

<style lang="css" scoped>
.block__select{
    width: 80%;
    display: flex;
    justify-content: space-between;
}
p{
    margin: 0;

}
</style>