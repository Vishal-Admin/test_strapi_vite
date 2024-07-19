import axios from "axios"
import { useState } from "react"

const SecureUpload = () => {
  const [video, setVideo] = useState(null)
  const [img, setImg] = useState(null)
  const [loading, setLoading] = useState(false)
  const token = "5961b55355c0fcb3ca941a5e63cf15f2185f85b55c66d79320602b536067b74e7e0a16ae66cce86587791ae6d8a39280d210d1b52d1c497b24d2cad976ae271f7f41ce798cf2c6ca137ff7e4e701d363e5d27c5f931a29798b6d87824e3b2f6489df0acc6ca10f3ba2a7004097801955995bc3ad7fdf808ca020e4c9ec36a938"

  const uploadFile = async (type, timestamp, signature) => {
    const folder = type === 'image'? 'images':'videos'
    const data = new FormData();
    data.append("file", type === 'image' ? img : video);
    data.append("timestamp", timestamp)
    data.append("signature", signature)
    data.append("api_key", "867998155768346")
    data.append("folder", folder)

    try {
      let cloudName = "dzuypksww";
      let resourceType = type;
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`

      const res = await axios.post(api,data);
      return res.data.secure_url;
    } catch (err) {
      console.error(err);
    }
  }

  const getSignatureForUpload = async (folder) => {
    try {
      const res = await axios.post(`http://localhost:1337/api/uility/upload-sign`, {folder}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data
    } catch (err) {
      console.log(err);
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const{timestamp: imgTimestamp, signature: imgSignature} = await getSignatureForUpload('images');
      const{timestamp: videoTimestamp, signature: videoSignature} = await getSignatureForUpload('videos');

      console.log("imgTimestamp", imgTimestamp, "imgSignature", imgSignature);
      console.log("videoTimestamp", videoTimestamp, "videoSignature", videoSignature);
      

      const imgUrl = await uploadFile('image', imgTimestamp, imgSignature)
      const videoUrl = await uploadFile('video', videoTimestamp, videoSignature)
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
          <input
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideo(()=>e.target.files[0])}
          />
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

export default SecureUpload
