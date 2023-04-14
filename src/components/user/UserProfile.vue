<script setup lang="ts">
import { APIResponse, User } from '../../types';

const user_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://europe-west2-df-archive.cloudfunctions.net/getUser?user_id=${user_id}`);
const json: APIResponse = await res.json();

var user: User | undefined = undefined
if (json.type === "user") {
    user = json.data
    document.title = `${json.data.username ?? json.data.id}'s profile`
}
</script>

<template>
    <h1>{{ user?.username ?? user?.id }}</h1>
    <p>Threads: {{ user?.threads }}</p>
    <p>Posts: {{ user?.posts }}</p>
    <p>Votes Given: {{ user?.votes_given }}</p>
    <p>Votes Received: {{ user?.votes_received }}</p>
</template>