import {createSlice, nanoid} from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
    id: "1",
    title: 'Learning Redux Toolkid', 
    content: 'I have heard good things about redux toolkit',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
    }

    },
    {
        id: "2", 
        title: 'Slices...', 
        content: 'What the f are slices ...',
        date: sub(new Date(), {minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }

    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        postAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content, usersId){
                return {
                    payload: {
                        id: nanoid(),
                        title: title,
                        content: content,
                        date: new Date().toISOString(),
                        usersId: usersId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }                        
                    }
                }
            }
    },
    reactionAdded(state, action){
        const {postId, reaction} = action.payload;
        const existingPost = state.find(post => post.id === postId)
        if(existingPost){
            existingPost.reactions[reaction]++
        }

    }
},
    

})

export const selectAllPosts = (state) => state.posts;

export const {postAdded, reactionAdded} = postsSlice.actions;

export default postsSlice.reducer 