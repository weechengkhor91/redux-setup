import {FETCH_POSTS, NEW_POSTS} from "./types";

export const fetchPosts = () => (dispatch) => {
console.log('actions post')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then( posts =>  dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}

export const newPosts = (postsData) => (dispatch) => {
    console.log('data',postsData)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postsData)
    })
        .then(res => res.json())
        .then((posts) => dispatch({
            type: NEW_POSTS,
            payload: posts
        }) )
}

