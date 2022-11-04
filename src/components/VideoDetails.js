import React, {useState} from 'react';
import VideoComments from './VideoComments';


const VideoDetails = ({views, createdAt, upvotes, downvotes, comments, handleToggle, toggleComments, setToggleComments}) => {

    const [likeNumber, setLikeNumber] = useState(upvotes)
    //console.log(likeNumber)
    const handleLike = () => {
        setLikeNumber(likeNumber + 1)
    }

    const [dislikeNumber, setDislikeNumber] = useState(downvotes)
    //console.log(dislikeNumber)
    const handleDislike = () => {
        setDislikeNumber(dislikeNumber + 1)
    }

    
    return (
        <>
            <p>{views} Views | Uploaded {createdAt}</p>
            <p>
                <button onClick={handleLike}>{likeNumber}👍</button>
                <button onClick={handleDislike}>{dislikeNumber}👎</button>
            </p>
            <button onClick={handleToggle}>Toggle Comments</button>
            <hr />
            {toggleComments ? <VideoComments comments={comments}/> : null}
        </>
    )
}

export default VideoDetails;