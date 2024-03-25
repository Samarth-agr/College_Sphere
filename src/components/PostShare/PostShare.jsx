import React , {useState, useRef} from 'react'
import './PostShare.css'


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className='PostShare'>
      <img src='https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain'></img>
      <div>
        <input type='text' placeholder='Write Something'></input>
        <div className="postOptions">
          <div className="option" onClick={()=>imageRef.current.click()}>
            <img src='https://cdn-icons-png.flaticon.com/512/1375/1375106.png'></img>
          </div>
          <div className="option">
            <img src='https://cdn-icons-png.flaticon.com/512/1179/1179069.png'></img>
          </div>
          <div className="option">
            icon 1
          </div>
          <div className="option">
            icon 1
          </div>
          <button className='button ps-button'>Share</button>
          <div style={{display:"none"}}>
            <input type="file" name='myImage' ref={imageRef} onChange={onImageChange}/>
          </div>
        </div>
        {image && (
        <div className='previewImage'>
          <h6 onClick={() => setImage(null)} >X</h6>
          <img src={image.image} alt=''/>
        </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;