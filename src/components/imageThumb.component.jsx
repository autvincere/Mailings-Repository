import React, { Fragment } from 'react'

const ImageThumb = ({ image }) => {

    
     const url = image ? URL.createObjectURL(image) : undefined
     // console.log(url);    

     let contentImage = image === undefined ? 'https://via.placeholder.com/300x400.jpg'  : url
     return (

          <Fragment>

               <img
                    src={contentImage}
                    width="300"
                    height= "400"
                    alt="miniatura"
               />
          </Fragment>

     )
}

export default ImageThumb
