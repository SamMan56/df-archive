export type Vote = {
    user_id: string,
    username: string,
    votetype_id: string
}

export type Post = {
    id: string,
    content: string,
    time: number,
    user_id: string,
    username: string,
    last_edit_time: number,
    last_edit_user: string,
    thread_id: string,
    thread_name: string,
    votes: Vote[],
    admin_hidden: boolean
}

export type Thread = {
    id: string,
    forum_id: string,
    category_id: string,
    subject: string,
    views: string,
    author_id: string,
    author_username: string,
    time: string,
    is_locked: boolean,
    is_pinned: boolean,
}

export type User = {
    id: string,
    posts: number,
    threads: number,
    votes_given: number,
    votes_received: number,
    username?: string
}

export type APIResponse = {
    type: "post",
    structure: "single",
    data: Post
} | {
    type: "post",
    structure: "list",
    data: Post[],
    last_key?: number
} | {
    type: "thread",
    structure: "single",
    data: Thread
} | {
    type: "thread",
    structure: "list",
    data: Thread[],
    last_key?: number
} | {
    type: "user",
    structure: "single",
    data: User
} | {
    type: "user",
    structure: "list",
    data: User[],
    last_key?: number
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