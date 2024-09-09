import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";
import "./App.css"
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false, /\.(jpg)$/));


function App() {

  const imageItems = images.map((image, index) => ({
    original: image,
    thumbnail: image
  }))


  return (
    <>
      <h1>The best Gallery Ever</h1>
      <ImageGallery
        items={imageItems}
        showThumbnails={true}
        autoPlay={true}
        showFullscreenButton={false}
        showNav={false}
        showBullets={true}

        />;
    
    </>
  );
}

export default App;
