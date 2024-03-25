import React, { useState } from "react";
import "./RightSide.css";
import ShareModal from "../ShareModal/ShareModal";
import Events from "../Events/Events"

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
    <div className="navIcons">
      <img src="https://th.bing.com/th/id/R.55fb09fab2dfc08b5cfa86f2d0c67251?rik=Es%2brEEpmjTxgjw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_153382.png&ehk=NENAQIQRYFSXIjQGh0v7pZ0VFvawbaiHqYmivfTO%2fmA%3d&risl=&pid=ImgRaw&r=0" alt='home'/>
      <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" alt='setting'/>
      <img src="https://cdn-icons-png.flaticon.com/512/2529/2529521.png" alt='Notification'/>
      <img src="https://cdn-icons-png.flaticon.com/512/3884/3884366.png" alt='message'/>
    </div>

    <Events/>     

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;