<script setup lang="ts">
import Category from './Category.vue';
import { categories as categories_raw } from "./cached";

const categories = categories_raw.map(category_raw => {
    return {
        name: category_raw.category_name,
        id: category_raw.category_id
    }
})
</script>

<template>
    <div class="categories">
        <Category v-for="category in categories" :category_id="category.id" :category_name="category.name"/>
    </div>
</template>

<style scoped>
    .categories {
        display: flex;
        flex-direction: column;
    }
</style>