import { createContext, useReducer } from "react";
import profilReducer from "./ProfilReducer";
const ProfileContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const ProfileProvider = ({children}) =>{ 
    const initialState = {
        users: [],
        loading:  false
    }


    const [state,dispatch ] = useReducer(profilReducer,initialState)


      
    const fetchUsers = async () => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users`,
        {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        
        const data = await response.json()
       
        dispatch({
            type:'GET_USERS',
            payload: data,// from fetch 
        })
    }

    const setLoading = () => dispatch({
        type:'SET_LOADING'
    })

    return <ProfileContext.Provider value={{
            users:state.users,
            loading:state.loading,
            fetchUsers
        }}>
        {children}
    </ProfileContext.Provider>


}
export default ProfileContext