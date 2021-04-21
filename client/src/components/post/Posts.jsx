import React from "react";
import post1 from "../../images/dashboard2.jpg";
import post2 from "../../images/redux.png";
import post3 from "../../images/gloriosa.jpg";
import post4 from "../../images/iPad.jpg";
import post5 from "../../images/todoist.webp";
import post6 from "../../images/dashboard.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import {useSelector,useDispatch} from 'react-redux';
import {LIKE,UNLIKE,DISLIKE,REMOVELIKE} from '../redux/actions.js';

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector(state=>state);
  const post = state.post;
  const colors = ['btn btn-outline-dark','btn btn-outline-primary','btn btn-outline-warning','btn btn-outline-info','btn btn-outline-danger','btn btn-outline-success']
  const like = ['naveed',"ali Hadami"," Hadamirehmani",'afaq','netGeo',"mosh Hadami","viral Posts","memes page",'naveed'," Hadamiali ","rehmani ",'afaq','netGeo',"mosh Hadami","viral Posts","memes page",'naveed'," Hadamiali ","rehmani ",]
  const dislike = ['netGeo',"mosh Hadami","viral Posts","memes page",'naveed'," Hadamiali ","rehmani naveed",'afaq','netGeo',"mosh Hadami","viral Posts","memes page"," Hadami ali",'afaq']
  let c = -1;
  // HANDLE LIKES ------------------------------------------------------------------------
  const handleLikes=(element)=>{
    var exists = element.likedBy.includes(state.currentlyLoggedUser.name);
    if(exists){
      element.likedBy = element.likedBy.filter((element)=>element !== state.currentlyLoggedUser.name)
      dispatch(UNLIKE(element))
    }else{
      element.likedBy.push(state.currentlyLoggedUser.name);
      dispatch(LIKE(element))
    };
  }
  //HANDLE DISLIKES --------------------------------------------------------------------------
  const handleDislike=(element)=>{
    var exists = element.dislikedBy.includes(state.currentlyLoggedUser.name);
    if(exists){
      element.dislikedBy = element.dislikedBy.filter((element)=>element !== state.currentlyLoggedUser.name)
      dispatch(DISLIKE(element))
    }else{
      element.dislikedBy.push(state.currentlyLoggedUser.name);
      dispatch(REMOVELIKE(element))
  }
}
// FINDING THE LOGGED IN USER FROM THE USERS LIST--------------------------
 const user = state.users.find((element)=>{
   return element.name == state.currentlyLoggedUser.name;
 })

  return (

    <>
    <div
          // key={element.id}
          className="card mt-3"
          style={{ width: "100%", boxShadow: "0px 0px 5px grey" }}
        >
          <div className="card-body">
            <h5 className="card-title">Team ChatPin</h5>
            <img src={post5} className="card-img-top" alt="..." />
            <p className="card-text mt-2">
            Welcome to ChatPin this is a dammy post made by team ChatPin your captions of the posts will appear here. <br/>
            Remember your friends can see who likes or dislikes a post.
            </p>
            <button 
            style={{fontSize:"0.9rem"}} 
            className="btn btn-primary mr-1">
              <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> | 
              likes | 432
            </button>
            <button 
            style={{fontSize:"0.9rem"}} 
            className="btn btn-dark m-1">
              <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> | 
              dislikes | 53
            </button>
            <div >
              <h6 className="mt-2">LIKED BY</h6>
              {like.map((element)=>{
                c++;
                if(c==6){c=0}
                return <button className={colors[c]} style={{borderRadius:"20px",padding:"0px 4px 0px 4px",margin:"1px",fontSize:"0.9rem"}}>{element}</button>
              })}
              <h6 className="mt-2">DISLIKED BY</h6>
              {dislike.map((element)=>{
                c++;
                if(c==6){c=0}
                return <button className={colors[c]} style={{borderRadius:"20px",padding:"0px 4px 0px 4px",margin:"1px",fontSize:"0.9rem"}}>{element}</button>
              })}
            </div>
          </div>
        </div>

        {post.map((element)=>{
          for(let friends of user.friends){
            // console.log(friends)
            if(friends == element.from || state.currentlyLoggedUser.name == element.from){
          return <div
          key={element.id}
          className="card mt-3"
          style={{ width: "100%", boxShadow: "0px 0px 5px grey" }}
        >
          <div className="card-body">
            <h5 className="card-title">{element.from}</h5>
            <img src={element.picture} className="card-img-top" alt="..." />
            <p className="card-text mt-2">
            {element.bio}
            </p>
            <button
            onClick={()=>handleLikes(element)}
            className="btn btn-success mr-1"
            style={{fontSize:"0.9rem"}} 
            >
              <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> | 
              likes | {element.likedBy.length}
            </button>
            <button
            onClick={()=>handleDislike(element)}
            className="btn btn-danger m-1"
            style={{fontSize:"0.9rem"}} 
            >
              <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> | 
              dislikes | {element.dislikedBy.length}
            </button>
            <div >
              <h6 className="mt-2">LIKES</h6>
              {element.likedBy.map((element)=>{
                c++;
                if(c==6){c=0}
                return <button className={colors[c]} style={{borderRadius:"20px",padding:"0px 4px 0px 4px",margin:"1px",fontSize:"0.9rem"}}>{element}</button>
              })}
              <h6 className="mt-2">DISLIKES</h6>
              {element.dislikedBy.map((element)=>{
                c++;
                if(c==6){c=0}
                return <button className={colors[c]} style={{borderRadius:"20px",padding:"0px 4px 0px 4px",margin:"1px",fontSize:"0.9rem"}}>{element}</button>
              })}
            </div>
          </div>
        </div> 

            }
          }
        })}
      
    </>
  );
};

export default Posts;
