<script lang="ts">
import CategoriesView from './CategoriesView.vue';

export default {
    components: {
        CategoriesView
    }
}
</script>

<template>
    <h1>Forums</h1>
    <Suspense>
        <CategoriesView/>
        <template  #fallback>
            <v-progress-circular indeterminate/>
        </template>
    </Suspense>
</template>