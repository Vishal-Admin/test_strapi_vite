import axios from "axios"
import { useState } from "react"

const UnauthentictedUplads = () => {
  const [video, setVideo] = useState(null)
  const [img, setImg] = useState(null)
  const [loading, setLoading] = useState(false)

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === 'image' ? img : video);
    data.append("upload_preset", type === "image"? 'image_preset':'video_preset')

    try {
      let cloudName = "dzuypksww";
      let resourceType = type;
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`

      const res = await axios.post(api,data);
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const imgUrl = await uploadFile('image')
      const videoUrl = await uploadFile('video')
      console.log(imgUrl, videoUrl);
      setImg(null);
      setVideo(null);
      setLoading(null);
    } catch (err) {
      console.error(err)
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video">Video:</label>
          <br/>
          {/* <input
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideo(()=>e.target.files[0])}
          /> */}
          <br />
          <label htmlFor="img">Image:</label>
          <br/>
          <input
            type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setImg(()=>e.target.files[0])}
          />
        </div>
        <br/>
        <button type="submit">Upload</button>
      </form>
      {loading&&<div>...Loading</div>}
    </div>
  )
}

export default UnauthentictedUplads
