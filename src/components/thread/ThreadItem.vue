<script lang="ts">

export default {
    props: {
        author: String,
        content: String,
        date: Date
    },

    computed: {
        dateString() {
            return `${this.date?.toLocaleTimeString()} ${this.date?.toLocaleDateString()}`
        }
    }
}
</script>

<template>
<v-card :title=author :subtitle=dateString>
    <v-card-text><div class="text-left content" v-html="content"/></v-card-text>
</v-card>
</template>

<style>
blockquote {
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: gray solid 4px;
    font-style: italic;
}

img {
    max-width: 100%;
}
</style>

<style scoped>
.content {
    white-space: pre-wrap;
}
</style>