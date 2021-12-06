import axios from "axios";
import { useState } from "react";
import banner from "../mountainBanner.jpg";
export const HeroBanner = () => {
  const [img, setImg] = useState<any>(banner);
  const [btnPresent, setBtnPresent] = useState<boolean>(false);
  const [surprisePresent, setSurprisePresent] = useState<boolean>(false);

  const getSurprise = async () => {
    if (surprisePresent) { setBtnPresent(false) }
    setSurprisePresent(!surprisePresent);
    const imgBlob = (await axios.get('/api/spongebob', { responseType: 'blob' }));
    setImg(URL.createObjectURL((imgBlob.data)));
  }
  return (
    <div className="d-flex justify-content-center">
      {!surprisePresent ? <img src={banner} className="w-100 banner" alt="banner" height="350px" />
        : <img src={img} className="w-100 sponge" alt="sponge" height="1000px" />}
      <h1 className={`${surprisePresent ? 'font-weight-bold' : 'display-3'} text-center position-absolute mt-4`}>
        SQLite-Node/Express.js-React Countries <span onClick={() => setBtnPresent(true)}>App</span>
      </h1>
      {btnPresent ? <button onClick={() => getSurprise()} className="align-self-end mb-4 position-absolute btn btn-success">{!surprisePresent ? 'Fetch Surprise' : 'Hide Surprise'}</button> : null}
    </div>
  );
};
