import React,{ useState} from 'react'
import { storage } from '../firebase/firebase.utils'

const UploadFile = () => {
     const [image, setImage] = useState(null)
     const [url, setUrl] = useState('')
     const [folder, setFolder] = useState('')
     const [progress, setProgress] = useState(0)
     
     const handleChange = e => {
          if (e.target.files[0]) {
               setImage(e.target.files[0])
          }
         
     }

     const handleFolder = e => {
          if (e.target.value) {
               setFolder(e.target.value);    
          }
          // const value = e.target.value
     }

     const handleUpload = () => {
          const chosenFolder = folder

          const uploadTask = storage.ref(`${chosenFolder}${image.name}`).put(image)

          uploadTask.on(
               'state_changed',
               snapshot => {
                    const progress = Math.round(
                         ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
                    )
                    setProgress(progress)
                    // console.log(progress)
                },
               error => {
                    console.log(error);
               },
               () => {
                    storage
                         .ref(`${chosenFolder}`)
                         .child(image.name)
                         .getDownloadURL()
                         .then(url => {
                              setUrl(url)
                              console.log(url);
                         })
                    
               }
          )
          setProgress(0)
     }
     // console.log(image);
     
     return (
          <div>
               <h1>
                    UploadFile
               </h1>
               <br />
               <label>Selecciona una carpeta:</label>
               <select id="cars" onChange={handleFolder}>
                    <option value="altera/tcu/">TCU</option>
                    <option value="altera/unired/">Unired</option>
                    <option value="ofertas_unimarc/">Ofertas Unimarc</option>
               </select>
              
               <br />
               

               {
                    progress > 0 ?
                         (
                              <div><progress value={progress} max="100" /><br /><h2>{progress}%</h2></div>
                         ) : ''
               }
               <br />
               <input type="file" onChange={ handleChange }/>
               <button onClick={handleUpload}>Upload</button>
               <br />

              
               {url}
          </div>
     )
}

export default UploadFile
