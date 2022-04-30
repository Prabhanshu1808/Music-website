import React from 'react'

function DownloadAds() {
    const downloadImgStyle = "border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"
  return (
    <div className="download">
        <div className="download_images flex">
        <img src={require("../image/App Store.png")} alt=""  className={downloadImgStyle + ` mr-[1rem]`}/>
        <img src={require("../image/Google Play.png")} alt="" className={downloadImgStyle} />
        </div>
    </div>
  )
}

export default DownloadAds