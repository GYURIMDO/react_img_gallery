import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false, /\.(jpg)$/));


function App() {

  const imageItems = images.map((image, index) => ({
    original: image,
    thumbnail: image
  }))


  return (
    <>
      <ImageGallery
        items={imageItems}
        showThumbnails={false}
        autoPlay={true}
        showFullscreenButton={false}
        showNav={false}
        showBullets={true}

        />;
    
    </>
  );
}

export default App;
