<script lang="ts">
export default {
    props: {
        id: String
    }
}
</script>

<template>
<img v-if="id === '606035'" src="../../assets/spark.png">
<img v-if="id === '606036'" src="../../assets/great_suggestion.png">
</template>