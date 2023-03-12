import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const Upload=async(data)=>{
// Create the file metadata
console.log(data.file)
/** @type {any} */
const metadata = {
  contentType: 'application/pdf'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, data.folder+data.classId+data.assignId+ (data.file).name);
const uploadTask = uploadBytesResumable(storageRef, data.file, metadata);
// Listen for state changes, errors, and completion of the upload.
return new Promise((resolve) => {
    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    console.log(snapshot.state)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    console.log(downloadURL)
    resolve(downloadURL)
    });
  }
);
})
}
export default Upload 
