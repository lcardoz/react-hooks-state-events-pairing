import React from 'react';

const VideoComments = ({comments}) => {

    const commentsArray = comments.map( (commentObj) => {
        return (
        <>
            <h4>{commentObj.user}</h4>
            <p>{commentObj.comment}</p>
        </>
        )
    })

    return (
        <>
            <h3> {commentsArray.length} Comments</h3>
            {commentsArray}
        </>
    )
}

export default VideoComments;