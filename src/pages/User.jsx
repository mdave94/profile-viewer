import {FaCodepen,FaStore,FaUserFriends,FaUsers} from 'react-icons/fa'
import { useEffect,useContext } from "react"
import ProfileContext from "../context/github/ProfileContext"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import Spinner    from '../components/layouts/Spinner'
import RepoList from '../components/repos/RepoList'


const User = () => {
 
const {getUser, user,loading,getRepos,repos} = useContext(ProfileContext)

const params = useParams()

useEffect(()=>{
    getUser(params.login)
    getRepos(params.login)

},[])

//retrusture user obj
const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
} = user

if(loading){
    return <Spinner/>
}else{

}


  return (
    <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
            <Link to='/' className='btn btn-ghost'>
                Go Back
            </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:gird-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
                <div className="rounded-lg shadow-xl card image-full">
                    <figure>
                        <img src={avatar_url} alt ='avatar'/>
                    </figure>
                    <div className="card-body justify-end">
                        <h2 className="card-title mb-0">
                            {name}
                        </h2>
                        <p style={{ flex:"none" }}>{login}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="mb-6">
                    <h1 className="text-3xl card-title">
                    
                        {name}
                        
                        <div className="ml-2 mr-1 badge badge-success">{type}</div>
                        
                            {hireable && ( 
                            <div className="mx-1 badge badge-info">
                                Hirable 
                            </div> )}
                    </h1>
                    <p>{bio}</p>
                    <div className="mt-4 card-actions">
                        <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline'>
                            Visit Github profile
                        </a>
                    </div>
                </div>
                <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                    {location && (
                        <div className="stat">
                            <div className="stat-title text-md">
                                Location
                            </div>
                            <div className="text-lg stat-value">
                                {location}
                            </div>
                        </div>
                    )}
                    {blog && (
                        <div className="stat">
                            <div className="stat-title text-md">
                                Website
                            </div>
                            <div className="text-lg stat-value">
                                <a href={`https://${blog}`} target='_blank' rel='noreferrer'>{blog}</a>
                            </div>
                        </div>
                    )}
                    {twitter_username && (
                        <div className="stat">
                            <div className="stat-title text-md">
                                Twitter
                            </div>
                            <div className="text-lg stat-value">
                                <a href={`https://twitter.com/${twitter_username}`} 
                                target='_blank' rel='noreferrer'>
                                    {twitter_username}</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/* Repolist Component  */}
        <RepoList repos={repos}/>
    </div>
  )
}

export default User