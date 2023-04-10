import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Dude Lelbssd'},
    {id: '1', name: 'Nel Young'},
    {id: '2', name: 'KURAPIKA'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;