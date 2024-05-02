import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaDownload } from "react-icons/fa";

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);



    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await axios.get('http://localhost:5000/images');
          setImages(response.data);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
  
      fetchImages();
    }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file');
      return;
    }

    setLoading(true);
    setError(null);
    
  

    try {
      const formData = new FormData();
      formData.append('images', selectedFile);

      const response = await axios.post('http://localhost:5000/upload', formData);
      console.log(response);

      setUploadedImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Failed to upload image');
    } finally {
      setLoading(false);
    }
  };

  


  const downloadImage = async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'image.jpg');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

      {uploadedImageUrl && (
        <div style={{ marginTop: '20px' }}>
          <h2>Uploaded Image:</h2>
          <a className='text-[blue]' href={uploadedImageUrl}>{uploadedImageUrl}</a>
          <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          <button onClick={downloadImage} style={{ marginTop: '10px', fontSize:'30px' }}></button>
        </div>
      )}
 <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', position:'relative' }}>
        {images.map((image, index) => (
          <>
          <img key={index} src={image.image} alt={`Image ${index}`} style={{ width: '200px', height: '200px', margin: '5px' }} />
          <button onClick={() => downloadImage(image.image)} style={{display:'flex', justifyContent:'flex-start'}} >< FaDownload/></button>
          </> ))}
      </div>
    </div>

    </div>
  );
}

export default UploadImage;
 