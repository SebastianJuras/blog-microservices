import { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content
        })

        setContent('')
    }



    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="comment">New Comment</label>
                <input 
                onChange={e => setContent(e.target.value)} 
                type="text" id="comments"
                value={content} 
                className="form-control"/>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
}

export default CommentCreate;