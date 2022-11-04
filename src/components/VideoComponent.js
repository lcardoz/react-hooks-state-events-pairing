import React from 'react';

const VideoComponent = ({videoUrl, title}) => {
    return (
        <>
            <iframe
                width="919"
                height="525"
                src={videoUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{title}</h1>
        </>
    )
}

export default VideoComponent;