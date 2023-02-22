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
<v-card :title=author :subtitle=dateString :text=content />
</template>