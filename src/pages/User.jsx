import { useEffect,useContext } from "react"
import ProfileContext from "../context/github/ProfileContext"
import { useParams } from "react-router-dom"

const User = () => {

const {getUser, user} = useContext(ProfileContext)

const params = useParams()

useEffect(()=>{
    getUser(params.login)

},[])


  return (
    <div>User</div>
  )
}

export default User