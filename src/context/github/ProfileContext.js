import { createContext, useReducer } from "react";
import profileReducer from "./ProfileReducer";
const ProfileContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const ProfileProvider = ({children}) =>{ 
    const initialState = {
        users: [],
        loading:  false
    }


    const [state,dispatch ] = useReducer(profileReducer,initialState)
    
    const searchUsers = async (text) => {    
       
        setLoading()

        const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`,
        {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        
        const {items} = await response.json()

        dispatch({
            type:'GET_USERS',
            payload: items,// from playload , datasctucure 
        })

    }


    const clearUsers = () => {
       const users = []

        dispatch({
            type:'CLEAR_USERS',
            payload: users
        })
    }

    //LOADING SPINNER
    const setLoading = () => dispatch({  type:'SET_LOADING'  })

    return <ProfileContext.Provider value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers 
        }}>
        {children}
    </ProfileContext.Provider>


}
export default ProfileContext