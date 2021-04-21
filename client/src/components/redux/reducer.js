import naveed from '../../images/naveed.JPG';
import marquie from '../../images/marquie.jpeg';
import toni from '../../images/toni1.jpg';

const initialState = {
    messages:[
    ],
    users:[
        {name:"Faizan Karim",password:1234,friends:["Marque Elysia","Naveed Ali Rehmani"],requests:['yousof khan',"Karim Picha"],profilePicture:toni},
        {name:"Naveed Ali Rehmani",password:1234,friends:["Marque Elysia","Faizan Karim"],requests:[],profilePicture:naveed},
        {name:"Marque Elysia",password:1234,friends:["Naveed Ali Rehmani","Faizan Karim"],requests:[],profilePicture:marquie},
        {name:"Karim Picha",password:1234,friends:["Faizan Karim","Rahim Khan","Ilyas Karim"],requests:[]},
        {name:"yousof khan",password:1234,friends:["Naveed Ali rehmani","Rahim Khan"],requests:[]},
        {name:"wali Sher",password:1234,friends:["Faizan Karim","Rahim Khan"],requests:[]}
    ],
    post:[],
    isLogIn:true,
    currentlyLoggedIn:false,
    currentlyLoggedUser:{name:"Naveed Ali Rehmani",password:1234,friends:["Marque Elysia","Faizan Karim"],requests:[],profilePicture:naveed},
    chattingWith:false
}

const Reducer = (state=initialState,action)=>{
    switch(action.type){ 
        case "LOG_IN_STATUS":
            return {...state,isLogIn:!state.isLogIn}
        case "CURRENTLY_LOGGED_IN":
            return {...state,currentlyLoggedIn:!state.currentlyLoggedIn}
        case "CURRENTLY_LOGGED_USER":
            return {...state,currentlyLoggedUser:action.payload}
        case "SWITCH_USER":
            return {...state,chattingWith:action.payload}
        case "POST":
            return {
                ...state,
                post:[
                    ...state.post,
                    {
                        bio:action.payload.bio,
                        from:state.currentlyLoggedUser.name,
                        picture:action.payload.picture,
                        id:Math.random().toString(36).substring(7),
                        likedBy:[],
                        dislikedBy:[]
                    },
                ]
            };
            case "LIKE":
                var index = state.post.findIndex((element)=>element.id ==  action.payload.id)
                state.post[index] =  action.payload;
                return {...state}
            case "UNLIKE":
                var index = state.post.findIndex((element)=>element.id ==  action.payload.id)
                state.post[index] =  action.payload;
                return{...state}
            case "DISLIKE":
                var index = state.post.findIndex((element)=>element.id ==  action.payload.id)
                state.post[index] =  action.payload;
                return{...state}
            case "REMOVELIKE":
                var index = state.post.findIndex((element)=>element.id ==  action.payload.id)
                state.post[index] =  action.payload;
                return{...state}
            case "FRIEND_REQUESTS":
                var index = state.users.findIndex((element)=>element.name ==  action.payload.name);
                state.users[index].requests=[...state.users[index].requests,state.currentlyLoggedUser.name];
                return{...state}
            case "ACCEPT_REQUEST":
                var index = state.users.findIndex((element)=>{
                    return element.name == state.currentlyLoggedUser.name});
                state.users[index].requests = state.users[index].requests.filter((element)=>{
                    return element != action.payload
                })
                state.users[index].friends=[...state.users[index].friends,action.payload]
                var indexOfRequestCreator = state.users.findIndex((element)=>{
                    return element.name == action.payload
                })
                state.users[indexOfRequestCreator].friends=[...state.users[indexOfRequestCreator].friends,state.currentlyLoggedUser.name]
                return{...state}    
            case "SIGN_UP":
                
                return {...state,
                    users:[...state.users,
                        {...action.payload,
                            friends:[],
                            requests:[]
                        }]
                       }
            case 'LOGOUT':
                return{...state,currentlyLoggedUser:false}
            case 'MESSAGE':
                return{...state,
                    messages:[
                        ...action.payload
                        ]}
            case 'NEW_MESSAGE':
                return{...state,
                        messages:[...state.messages,
                        ,action.payload
                    ]}
                        
                
        default:
            return state;
    }

}

export default Reducer;