<script lang="ts">
import CategoryView from './CategoryView.vue';

export default {
    components: {
        CategoryView: CategoryView
    }
}
</script>

<template>
    <h1>Categories</h1>
    <Suspense>
        <CategoryView/>
        <template  #fallback>
            Loading...
        </template>
    </Suspense>
</template>