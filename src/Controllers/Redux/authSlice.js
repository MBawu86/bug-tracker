import {createSlice} from '@reduxjs/toolkit'

const slice = ceateSlice({
    name: 'auth',
    initialState:{
        admin: false,
        LoggedIn:False,
    },

    reducers:{
        signIn:(state, action) => {
            const {} = action.payload;
            state.LoggedIn = true;
            state.admin =  true;
        },
        signOut:(state) => {
            state.LoggedIn = false;
            state.admin = false;
        },

        createUser:(state, action) => {

        },
    }
})

export default slice.reducer;

export const {signIn, signOut, createUser} = slice.actions;