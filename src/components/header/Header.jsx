import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import seller1 from '../../assets/seller1.jpg'
import seller2 from '../../assets/seller2.png'
import seller3 from '../../assets/seller3.jpg'
import seller4 from '../../assets/seller4.png'
import seller5 from '../../assets/seller5.png'
import seller6 from '../../assets/seller6.jpg'
import seller7 from '../../assets/seller7.jpg'
import seller8 from '../../assets/seller8.png'
import seller9 from '../../assets/seller9.jpg'
import seller10 from '../../assets/seller10.jpeg'
import nft1 from '../../assets/nft1.jpeg'
import nft2 from '../../assets/nft2.png'
import nft3 from '../../assets/nft3.png'
import nft4 from '../../assets/nft4.jpg'
import nft5 from '../../assets/nft5.jpg'
import nft6 from '../../assets/nft6.webp'
import nft7 from '../../assets/nft7.png'
import nft8 from '../../assets/nft8.png'
import nft9 from '../../assets/nft9.jpg'
import nft10 from '../../assets/nft10.jpg'
import verify from '../../assets/verify.png'
import coin from '../../assets/coin.png'
import coin2 from '../../assets/coin2.png'
import { Link  } from 'react-router-dom';
const Header = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  };
  return (
    <div className='header section__padding'>
      <div className="header-content">
        <div>
          <h1>Discover, collect, and sell extraordinary NFTs</h1>
          <img className='shake-vertical' src={coin2} alt="" />
        </div>
      </div>
      <div className="header-slider">
        <a name="TopSellers"><h1>Top Sellers</h1></a>
       <Slider {...settings} className='slider'>
            <div className='slider-card'>
              <p className='slider-card-number'>1</p>
              <div className="slider-img">
                <img src={seller1} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <p className='slider-card-name'>James Bond</p>
              <p className='slider-card-price'>5.250 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>2</p>
              <div className="slider-img">
                <img src={seller2} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <p className='slider-card-name'>Rian Leon</p>
              <p className='slider-card-price'>4.932 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>3</p>
              <div className="slider-img">
                <img src={seller3} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <p className='slider-card-name'>Mr White</p>
              <p className='slider-card-price'>4.620 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>4</p>
              <div className="slider-img">
                <img src={seller4} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <p className='slider-card-name'>Black Glass</p>
              <p className='slider-card-price'>4.125 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>5</p>
              <div className="slider-img">
                <img src={seller5} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <p className='slider-card-name'>Budhiman</p>
              <p className='slider-card-price'>3.921 <span>ETH</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>6</p>
              <div className="slider-img">
                <img src={seller6} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <p className='slider-card-name'>Alex</p>
              <p className='slider-card-price'>3.548 <span>ETH</span></p>
            </div>
         <div className='slider-card'>
           <p className='slider-card-number'>7</p>
           <div className="slider-img">
             <img src={seller7} alt="" />
             <img src={verify} className='verify' alt="" />
           </div>
             <p className='slider-card-name'>Pepe The Frog</p>
           <p className='slider-card-price'>3.265 <span>ETH</span></p>
         </div>
         <div className='slider-card'>
           <p className='slider-card-number'>8</p>
           <div className="slider-img">
             <img src={seller8} alt="" />
             <img src={verify} className='verify' alt="" />
           </div>
             <p className='slider-card-name'>Rika Omori</p>
           <p className='slider-card-price'>3.098 <span>ETH</span></p>
         </div>
         <div className='slider-card'>
           <p className='slider-card-number'>9</p>
           <div className="slider-img">
             <img src={seller9} alt="" />
             <img src={verify} className='verify' alt="" />
           </div>
           <p className='slider-card-name'>Ghost Rider</p>
           <p className='slider-card-price'>2.871 <span>ETH</span></p>
         </div>
         <div className='slider-card'>
           <p className='slider-card-number'>10</p>
           <div className="slider-img">
             <img src={seller10} alt="" />
             <img src={verify} className='verify' alt="" />
           </div>
           <p className='slider-card-name'>John Fisher</p>
           <p className='slider-card-price'>1.995 <span>ETH</span></p>
         </div>
        </Slider>
      </div>

      <div className="header-slider">
        <a name="TopSellers"><h1>Top NFT</h1></a>
        <Slider {...settings} className='slider'>
          <div className='slider-card'>
            <p className='slider-card-number'>1</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft1} alt="" />
            </div>
            <p className='slider-card-name'>Picasso</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>2</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft2} alt="" />
            </div>
            <p className='slider-card-name'>Cyberpunk Vision</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>3</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft3} alt="" />
            </div>
            <p className='slider-card-name'>Polygon Girl</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>4</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft4} alt="" />
            </div>
            <p className='slider-card-name'>Error Woman</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>5</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft5} alt="" />
            </div>
            <p className='slider-card-name'>Many Faces</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>6</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft6} alt="" />
            </div>
            <p className='slider-card-name'>Nyan Cat</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>7</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft7} alt="" />
            </div>
            <p className='slider-card-name'>Bored Ape</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>8</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft8} alt="" />
            </div>
            <p className='slider-card-name'>Cutie</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>9</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft9} alt="" />
            </div>
            <p className='slider-card-name'>Ghostrunner</p>

          </div>
          <div className='slider-card'>
            <p className='slider-card-number'>10</p>
            <div className="slider-img">
              <img width="77" height="77" src={nft10} alt="" />
            </div>
            <p className='slider-card-name'>Human Infinity</p>

          </div>
        </Slider>
      </div>
      <div className="Futures2">
<section className="Futures">
      <div className="heading_styled__HeadingSecondaryStyled-sc-1v68jda-1 imaOmm"><h1 className="Title">We’ve got you covered</h1>
        <h3 className="Subtitle">shelter.space has everything you need to use Solana ecosystem</h3></div>
      <div className="grid grid-cols-1 gap-5 mt-12 md:mt-20 sm:grid-cols-2">
        <section className="home__DetailTile-sc-1jys7ch-2 cclMjN">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none" viewBox="0 0 72 72">
            <rect width="72" height="72" fill="#000" fill-opacity="0.3" rx="36"></rect>
            <g clip-path="url(#clip0_69_5459)">
              <path fill="#fff"
                    d="M49.65 22.349a9.813 9.813 0 00-13.946-.011c-2.866 2.866-3.718 7.085-2.12 10.814L23.26 43.475c-.309.31-.49.682-.49 1.15l.064 3.645c0 .468.394.969.991.969h6.712c.618 0 1.055-.458 1.055-1.055l-.021-3.835h5.412c.564-.01 1.022-.448 1.022-1.066l.011-5.273c4.539 1.832 8.747 1.161 11.634-1.726a9.829 9.829 0 000-13.935zm-6.477 6.477a2.656 2.656 0 010-3.75 2.637 2.637 0 013.75 0 2.656 2.656 0 010 3.75 2.656 2.656 0 01-3.75 0z"></path>
            </g>
            <defs>
              <clipPath id="clip0_69_5459">
                <path fill="#fff" d="M0 0H48V48H0z" transform="rotate(45 15.515 44.485)"></path>
              </clipPath>
            </defs>
          </svg>
          <h3>Non-Custodial</h3><p>We never have access to any of your data or funds. Ever.</p></section>
        <section className="home__DetailTile-sc-1jys7ch-2 cclMjN">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 72 72">
            <rect width="72" height="72" fill="#000" fill-opacity="0.3" rx="36"></rect>
            <path fill="#fff" stroke="#252629" stroke-width="0.5"
                  d="M28.524 37.385h.607l-.431-.428-7.237-7.172a2.75 2.75 0 01-.005-3.901l7.123-7.096a2.75 2.75 0 013.883.002l21.214 21.175.001.002c1.331 1.372 2.071 3.3 2.071 5.327 0 4.368-3.602 7.956-7.94 7.956H19a2.75 2.75 0 01-2.75-2.75V40.135a2.75 2.75 0 012.75-2.75h9.524zM19.32 49.942v.25h28.49c2.663 0 4.87-2.2 4.87-4.898 0-2.653-2.209-4.852-4.87-4.852H19.322v9.5zm4.693-22.282l-.178.178.179.177 9.38 9.297.073.073h13.279l-.427-.427L30.7 21.35l-.176-.176-.177.176-6.333 6.31zM47.57 47.558c-1.285 0-2.273-1.069-2.273-2.264 0-1.234.979-2.217 2.273-2.217 1.244 0 2.227.98 2.227 2.217 0 1.198-.992 2.264-2.227 2.264z"></path>
          </svg>
          <h3>Ledger Support</h3><p>For additional security you can connect your hardware wallet.</p></section>
        <section className="home__DetailTile-sc-1jys7ch-2 cclMjN">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none" viewBox="0 0 72 72">
            <rect width="72" height="72" fill="#000" fill-opacity="0.3" rx="36"></rect>
            <path fill="#fff" fill-rule="evenodd"
                  d="M46 31v-2c0-5.514-4.486-10-10-10s-10 4.486-10 10v2a2 2 0 00-2 2v15a3 3 0 003 3h18a3 3 0 003-3V33a2 2 0 00-2-2zM34 45h4v-8h-4v8zm8-14H30v-2c0-3.308 2.692-6 6-6s6 2.692 6 6v2z"
                  clip-rule="evenodd"></path>
          </svg>
          <h3>Privacy</h3><p>Phantom doesn’t track any personal identifiable information, your account addresses, or
          asset balances.</p></section>
        <section className="home__DetailTile-sc-1jys7ch-2 cclMjN">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none" viewBox="0 0 72 72">
            <rect width="72" height="72" fill="#000" fill-opacity="0.3" rx="36"></rect>
            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.154"
                  d="M52.002 44.615v4.923A2.462 2.462 0 0149.54 52h-4.923m0-32h4.923a2.462 2.462 0 012.462 2.462v4.923m-32 0v-4.923A2.462 2.462 0 0122.464 20h4.923m0 32h-4.924a2.462 2.462 0 01-2.461-2.462v-4.922m8.615-17.231v4.923m14.768-4.923v4.923m-7.382-2.462v8.616H32.31m-2.462 4.923a8.935 8.935 0 0012.307 0"></path>
          </svg>
          <h3>Biometric authentication</h3><p>Protect your assets on the go with the convenience you expect.</p>
        </section>
      </div>
</section>
    </div>

    </div>
  )
}

export default Header
