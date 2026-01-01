import { useState } from "react";



function Comments(){
  let [comments,setComments] = useState([]);
  let [newComment,setNewComment] = useState("");

  let handleInputChange = (event)=>{
    setNewComment(event.target.value);
  }
  let handleSubmit = ()=>{
    if(newComment==""){
      return
    }
    else{
      setComments([...comments,[newComment]]);
    }
    setNewComment("");
    
  }

  return(
    <>
      <div className="comments">
        {comments.map((comment)=>{
          return <p>{comment}</p>
        })}
      </div>

      <input 
        type="text"
        value = {newComment}
        placeholder="Add Comment"
        onChange={handleInputChange}  
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

    </>
  )
}

export default Comments;