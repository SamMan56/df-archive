<script setup lang="ts">
import { Forum } from '../../types';

const forum_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://uur2hszs56s6tcpevofalli5na0qaucv.lambda-url.eu-west-2.on.aws/?forum_id=${forum_id}`);
const forums_raw = await res.json();
var forum = {title: "Forum not found..."};
if (forums_raw.length > 0) {
    const forum_raw: Forum = forums_raw[0];
    forum = 
        {
            title: forum_raw.forum_name
        };
    document.title = forum.title;
}
</script>

<template>
    <h1>{{ forum.title }}</h1>
</template>