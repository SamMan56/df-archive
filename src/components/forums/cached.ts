import { Forum, Category } from "../../types";

export const categories = 
[
    {
        "category_id": 2425456,
        "category_name": "Community"
    },
    {
        "category_id": 2427417,
        "category_name": "Reports/Ban Appeals"
    }
] as Category[]

export const forums = {
    2425456: [
        {
            "forum_description": "Talk about minigames you or others have made on the server!",
            "category_id": 2425456,
            "forum_name": "Minigame Discussion",
            "forum_type": "normal",
            "forum_id": 5632818
        },
        {
            "forum_description": "Patch notes from some older updates.",
            "category_id": 2425456,
            "forum_name": "Patch Notes",
            "forum_type": "normal",
            "forum_id": 5649497
        },
        {
            "forum_description": "If it doesn't belong in the other forums, it goes here.",
            "category_id": 2425456,
            "forum_name": "Off-Topic",
            "forum_type": "normal",
            "forum_id": 5632813
        },
        {
            "forum_description": "Talk about anything related to the DiamondFire Network!",
            "category_id": 2425456,
            "forum_name": "General Discussion",
            "forum_type": "normal",
            "forum_id": 5583199
        },
        {
            "forum_description": "Find and create helpful DiamondFire tutorials!",
            "category_id": 2425456,
            "forum_name": "Tutorials",
            "forum_type": "normal",
            "forum_id": 5637084
        },
        {
            "forum_description": "Suggest ideas for the server!",
            "category_id": 2425456,
            "forum_name": "Suggestions",
            "forum_type": "normal",
            "forum_id": 6951452
        }
    ] as Forum[],

    2427417: [
        {
            "forum_description": "Request an unban/unmute here.",
            "category_id": 2427417,
            "forum_name": "Punishment Appeals",
            "forum_type": "normal",
            "forum_id": 5632812
        },
        {
            "forum_description": "Report bugs here!",
            "category_id": 2427417,
            "forum_name": "Bug Reports",
            "forum_type": "normal",
            "forum_id": 5633535
        },
        {
            "forum_description": "Report a player here.",
            "category_id": 2427417,
            "forum_name": "Player Reports",
            "forum_type": "normal",
            "forum_id": 5632777
        }
    ] as Forum[]
}