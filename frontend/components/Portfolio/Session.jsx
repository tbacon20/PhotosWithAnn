import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const folderId = "1z4TVr2u4vc4I3RPqKB4sQVjw3rBO0KZh";

function PhotoGallery(folderId) {
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    // Make API request to list files in the specified folder
    // Replace 'folderId' with the actual folder ID
    fetchPhotos(folderId)
      .then((photos) => {
        const photoUrls = photos.map((photo) => {
          // Create a URL for each photo using its file ID
          return `https://drive.google.com/uc?id=${photo.id}`;
        });
        setPhotoUrls(photoUrls);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  async function fetchPhotos(folderId) {
    // Make a Google Drive API request to list files in the specified folder
    const response = await gapi.client.drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/'`,
    });

    // Extract the list of photos
    const photos = response.result.files;

    return photos;
  }

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div className="photo-container">
        {photoUrls.map((url, index) => (
          <img key={index} src={url} alt={`Photo ${index}`} className="photo" />
        ))}
      </div>
    </div>
  );
}

const Session = () => {
  return <PhotoGallery folderId={folderId} />;
};

export default Session;
