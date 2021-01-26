import React,{useState, useEffect} from 'react'
import { storage } from '../firebase/firebase.utils'


const DownloadFile = () => {
     const [url, setUrl] = useState('')

     function displayImage(imageRef) {
          imageRef.getDownloadURL()
               .then(function (url) {
                    // TODO: Display the image on the UI
                    setUrl(url)
                    console.log(url);
               }).catch(function (error) {
                    console.log(error);
               });
     }

     useEffect(() => {
          let storageRef = storage.ref('altera/unired');
          // console.log(storageRef);

          // Now we get the references of these images
          storageRef.listAll()
               .then(function (result) {
               result.items.map(function (imageRef) {
                    // And finally display them
                    return displayImage(imageRef);
               });
          }).catch(function (error) {
               console.log(error);
          });

         
        
     }, [url])
     return (
          <div>
               {url}
          </div>
     )
}

export default DownloadFile
