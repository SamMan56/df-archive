<script lang="ts">
import CategoriesView from './CategoriesView.vue';

export default {
    components: {
        CategoriesView
    }
}
</script>

<template>
    <h1>Categories</h1>
    <Suspense>
        <CategoriesView/>
        <template  #fallback>
            Loading...
        </template>
    </Suspense>
</template>