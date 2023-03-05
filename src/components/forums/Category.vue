<script lang="ts">
import CategoryView from './CategoryView.vue';

export default {
    components: {
        CategoryView: CategoryView
    },
    props: {
        category_id: Number,
        category_name: String,
    }
}
</script>

<template>
    <div class="category">
        <h2>{{ category_name }}</h2>
        <hr/>
        <Suspense>
            <CategoryView :category_id="category_id"/>
            <template #fallback>
                <v-progress-circular indeterminate/>
            </template>
        </Suspense>
    </div>
</template>

<style scoped>
.category {
    padding-bottom: 3rem;
}
</style>