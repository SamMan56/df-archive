export type Thread = {
    id: string,
    forum_id: string,
    category_id: string,
    subject: string,
    views: string,
    status: string[],
    author_id: string,
    author_username: string,
    time: string,
}

export type Forum = {
    forum_id: string,
    category_id: string,
    forum_name: string,
    forum_description: string,
    forum_type: "normal"
}

export type Category = {
    category_id: "2425456" | "2427417",
    category_name: string
}