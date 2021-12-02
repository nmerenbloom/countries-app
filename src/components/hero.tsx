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
      <img src={surprisePresent ? img : banner} className="" alt="banner" width="100%" height={surprisePresent ? "1000px" : "350px"} />
      <h1 className="display-3 position-absolute mt-4">
        SQLite-Node/Express.js-React Countries <span onClick={() => setBtnPresent(true)}>App</span>
      </h1>
      {btnPresent ? <button onClick={() => getSurprise()} className="align-self-end mb-4 position-absolute btn btn-success">{!surprisePresent ? 'Fetch Surprise' : 'Hide Surprise'}</button> : null}
    </div>
  );
};
