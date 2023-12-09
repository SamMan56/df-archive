<script setup lang="ts">
import { all_forums } from '../forums/cached';

const forum_id = window.location.hash.slice(2).split("/")[1]
const found_forums = all_forums.filter(forum => forum.forum_id === forum_id);
var forum = {title: "Forum not found..."};
if (found_forums.length > 0) {
    forum = 
        {
            title: found_forums[0].forum_name
        };
    document.title = forum.title;
}
</script>

<template>
    <h1 class="text-center">{{ forum.title }}</h1>
</template>