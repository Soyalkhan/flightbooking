import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallary-01.jpg'
import gallery_2 from '../../assets/gallary-02.jpg'
import gallery_3 from '../../assets/gallary-03.jpg'
import gallery_4 from '../../assets/gallary-04.jpg'

const Campus = () => {
  return (
    <div className='campus'>
      {/* <h2 className="gallery-title">Our Campus Gallery</h2> */}
      <div className="gallery">
        <div className="gallery-item">
          <div className="image-container">
            <img src={gallery_1} alt="Gallery 1" />
            <div className="gradient-overlay"></div>
          </div>
          <div className="caption1">
            <div className="text"></div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={gallery_2} alt="Gallery 2" />
            <div className="gradient-overlay"></div>
          </div>
          <div className="caption1">
            <div className="text"></div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={gallery_3} alt="Gallery 3" />
            <div className="gradient-overlay"></div>
          </div>
          <div className="caption1">
            <div className="text"></div>
          </div>
        </div>
        <div className="gallery-item">
          <div className="image-container">
            <img src={gallery_4} alt="Gallery 4" />
            <div className="gradient-overlay"></div>
          </div>
          <div className="caption1">
            <div className="text"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campus




// import React from 'react'
// import './Campus.css'
// import gallery_1 from '../../assets/gallary-01.jpg'
// import gallery_2 from '../../assets/gallary-02.jpg'
// import gallery_3 from '../../assets/gallary-03.jpg'
// import gallery_4 from '../../assets/gallary-04.jpg'
// import white_arrow from '../../assets/white-arrow.png'

// const Campus = () => {
//   return (
//     <div className='campus'>
//       <div className="gallery">
//         <img src={gallery_1} alt="" />
//         <img src={gallery_2} alt="" />
//         <img src={gallery_3} alt="" />
//         <img src={gallery_4} alt="" />
//       </div>
      
//     </div>
//   )
// }

// export default Campus