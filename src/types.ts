export type Thread = {
    thread_id: number,
    forum_id: string,
    category_id: string,
    thread_subject: string,
    thread_views: string,
    thread_status: string,
    post_user_id: string,
    post_username: string,
    post_time: string,
}

export type Forum = {
    forum_id: number,
    category_id: number,
    forum_name: string,
    forum_description: string
}