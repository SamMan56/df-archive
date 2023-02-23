<script setup lang="ts">
const res = await fetch("https://27bnue6v6r2eggynvihuc7xi2q0pclzl.lambda-url.eu-west-2.on.aws/");
const categories_raw: [{
    category_id: number,
    category_name: string
}] = await res.json();
const categories = categories_raw.map(category_raw => {
    return {
        name: category_raw.category_name,
        url: `#/category/${category_raw.category_id}`
    }
})
</script>

<template>
    <div class="categories">
        <a v-for="category in categories" :href="category.url">{{ category.name }}</a>
    </div>
</template>

<style scoped>
    .categories {
        display: flex;
        flex-direction: column;
    }
</style>