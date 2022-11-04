import React, {useState} from 'react';
import videoData from "../data/video.js";

import VideoComponent from "./VideoComponent";
import VideoDetails from "./VideoDetails";
// import VideoComments from "./VideoComments";

function App() {

  const [toggleComments, setToggleComments] = useState(true)
  // console.log(toggleComments)

  const handleToggle = () => {

      setToggleComments(!toggleComments)
  
  }

  return (
    <div className="App">
      <VideoComponent videoUrl={videoData.embedUrl} title={videoData.title}/>
      <VideoDetails views={videoData.views} createdAt={videoData.createdAt} upvotes={videoData.upvotes} downvotes={videoData.downvotes} comments={videoData.comments} handleToggle={handleToggle} toggleComments={toggleComments} setToggleComments={setToggleComments}/>
      {/* <VideoComments comments={videoData.comments} /> */}
    </div>
  );
}

export default App;