import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import Checkout from "./Checkout";
import "./Home.css";
import { sizing } from "@material-ui/core";
import Product from "./Product";

const Home = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          className="home__image"
        />
        <div className="home__row" style={{ marginTop: "300px" }}>
          <Product
            id="12849"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600`}
            rating={5}
          />
          <Product
            id="3534345"
            title="Samsung phone with(8GB + 512GB)"
            price={99.99}
            image={`https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY200_.jpg`}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="24242"
            title="I Phone 11 (8GB + 512GB)"
            price={499.99}
            image={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000`}
            rating={5}
          />
          <Product
            id="23553647"
            title="Mac Book Pro"
            price={929.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/71UItVa0VmL._AC_SL1500_.jpg`}
            rating={5}
          />
          <Product
            id="359473"
            title="The Most helpful Mixer in the world, this Mixer gives you an excellent experience in chopping and mixing food items and leaves no marks for disappointment"
            price={29.99}
            image={`https://www.reliancedigital.in/medias/Bajaj-Classic-Mixer-Grinder-491281343-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzODc5ODB8aW1hZ2UvcG5nfGltYWdlcy9oZWMvaDMwLzg5MzA2ODc3Nzg4NDYucG5nfDU5OTI5YmZmMTQwN2M1NzcwN2EzOTAwY2RiNmJjYTczMDIwNTljOTg0M2QyZjU4NmUwODA3MDI1YmY5MWE3OGE`}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4839274"
            title="4K Samsung TV"
            price={300.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/61ZUa9Vk-HL._AC_SY355_.jpg`}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
