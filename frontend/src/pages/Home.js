import { Carousel } from 'react-carousel-minimal';
import { url } from './../common/constants';
import { Link } from 'react-router-dom';

function Home() {
 const data = [
    {
      image:"https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      caption: "Washing Machine"
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876_960_720.jpg",
      caption: "Tele Visons"
    },
    {
      image: "https://m.media-amazon.com/images/I/41IPHf2Lh1S._SX679_.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://m.media-amazon.com/images/I/61Ik3wKlQXS._SL1410_.jpg",
      caption: "San Francisco"
    },
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
    <div className="App container-fluid w-100">
      <div style={{ textAlign: "center" }}>
        {/* <h2>EazyShopee</h2>
        <p>EazyShopee the home of appliances</p> */}
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

//export default App;

export default Home;