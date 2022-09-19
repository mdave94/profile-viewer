const profileReducer = (state,action)  =>{
    switch(action.type ){
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
             
        case 'SET_LOADING':
            return{
                ...state,
                loading:true
            }


        case 'CLEAR_USERS':
            console.log("state")
            console.log(state)
            return{
                ...state, 
                users:action.payload

            }
        default:
            return state
    }
}


export default profileReducer