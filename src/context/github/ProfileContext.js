import { createContext, useState } from "react";

const ProfileContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const ProfileProvider = ({children}) =>{ 
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)


    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`,
        {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        
        const data = await response.json()
       
        setUsers(data)
        setLoading(false)
    }


    return <ProfileContext.Provider value={{
            users,
            loading,
            fetchUsers
        }}>
        {children}
    </ProfileContext.Provider>


}
export default ProfileContext