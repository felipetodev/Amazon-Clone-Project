import React from 'react'
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            

                <div className="home__row">
                    <Product 
                        id="51651651"
                        title="The lean startup: How Constant Innovation Creates Radically Successful Business Paperback" 
                        price={29.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"} 
                        rating={5} />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="49561094"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray"
                        price={1199.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/815ztYEEwYL._AC_SL1500_.jpg"
                    />
                    <Product 
                        id="42351094"
                        title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
                        price={74.99}
                        rating={5}
                        image="https://static.bhphoto.com/images/multiple_images/images2500x2500/1572984044_IMG_1271497.jpg"
                    />
                    <Product 
                        id="56751094"
                        title="Apple Watch Series 5 (GPS, 40mm) - Space Gray Aluminum "
                        price={354.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._AC_SX342_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="49561094"
                        title="Samsung LC49rg90ssuxen 49' Curved LED Gaming Monitor"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
