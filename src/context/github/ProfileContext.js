import { createContext, useReducer } from "react";
import profileReducer from "./ProfileReducer";


const ProfileContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const ProfileProvider = ({children}) =>{ 
    const initialState = {
        users: [],
        user:{},
        repos:[],
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
    /* GET USER DATAS*/
    const getUser = async (login) => {    
       
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`,
        {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404){
            window.location = '/notfound'
        }else{
            const data = await response.json()

            dispatch({
                type:'GET_USER',
                payload: data,// single user's data  
            })
        }
  
    } 

/*GET REPOS */
const getRepos = async (login) => {    

    setLoading()

    const params = new URLSearchParams({
        sort:'creted',
        per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
    {
        headers:{
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })
    
    const data = await response.json()
    
    dispatch({
        type:'GET_REPOS',
        payload: data,// from playload , datasctucure 
    })

}

/* Clear all user */
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
            repos:state.repos,
            user: state.user,
            searchUsers,
            clearUsers,
            getUser,
            getRepos
            
        }}>
        {children}
    </ProfileContext.Provider>


}
export default ProfileContext