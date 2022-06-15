import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Layout/Header/Header";
// import gsap from "gsap";

function Story() {
  let images = document.querySelectorAll(".image");
  const root = document.documentElement;
  const elements = [".image-1", ".image-2", ".image-3", ".image-4", ".image-5"];
  const totalImages = images.length;

  let currentImage = 1;
  let nextImage = currentImage + 1;
  let upcomingImage = nextImage + 1;

  const filterActiveImages = (image1: any, image2: any) => {
    const filteredResult = elements.filter(
      (element) => element !== image1 && element !== image2
    );
    return filteredResult;
  };

  const slideImage = (
    currentImage: any,
    nextImage: any,
    upcomingImage: any
  ) => {
    let tl = gsap.timeline({
      defaults: { duration: 0.8, ease: Power1.easeInOut },
    });
    tl.to(`.image-${currentImage}`, { rotation: -10, xPercent: -100 })
      .to(`.image-${currentImage}`, { rotation: 0, xPercent: 0 })
      .to(`.image-${nextImage}`, { zIndex: 2 }, "-=1.6")
      .to(`.image-${currentImage}`, { zIndex: -1 }, "-=1.6")
      .to(`.image-${upcomingImage}`, { zIndex: 1 }, "-=1.6")
      .to(
        filterActiveImages(`.image-${nextImage}`, `.image-${currentImage}`),
        { zIndex: 0 },
        "-=2.4"
      );
    tl.timeScale(2);
    return tl;
  };

  const nextAnimation = () => {
    slideImage(currentImage, nextImage, upcomingImage);

    currentImage = nextImage;
    nextImage = currentImage - 1;

    if (currentImage === 1) {
      nextImage = totalImages;
    }

    if (nextImage === 1) {
      upcomingImage = totalImages;
    } else {
      upcomingImage = nextImage - 1;
    }
  };
  return (
    <>
      <div id='loader-wrapper'>
        <div className='loader-txt'>
          <div id='loader' data-text='LOADING...'>
            LOADING...
          </div>
        </div>
        <div className='loader-section section-left'></div>
        <div className='loader-section section-right'></div>
      </div>
      <div className='rotate-img'>
        <div className='data-img' data-img='rotate.svg'></div>
      </div>
      <Header />
      <header className='home-header-bg animation-section'>
        <div
          className='parallax-window'
          data-image-src='assets/img/about-me/webp-banner-blog.webp'></div>
        <a href='index.html' className='header-logo'>
          <img className='logo' src='assets/img/zippo-logo.png' alt='logo' />
        </a>
        <div className='header-page-container'>
          <div className='header-page-content an-el-wrap'>
            <h1 className='main-title animation-header-title' data-splitting>
              OUR STORY
            </h1>
            <div className='w-line el'></div>
          </div>
        </div>
        <div className='social-icon py-5'>
          <span className='social-icon-text text-white'>Follow Me: </span>
          <div className='s-link'>
            <a href='https://twitter.com/ArtifyNftClub' className='wrap-link'>
              <div className='link-text'>
                <span className='text-white'>
                  <i className='fa fa-twitter'></i>
                </span>
                <span className='link-hover text-white'>
                  <i className='fa fa-twitter'></i>
                </span>
              </div>
            </a>
          </div>
          <div className='s-link'>
            <a
              href='https://www.instagram.com/zippoversenfts/'
              className='wrap-link'>
              <div className='link-text'>
                <span className='text-white'>
                  <i className='fa fa-instagram'></i>
                </span>
                <span className='link-hover text-white'>
                  <i className='fa fa-instagram'></i>
                </span>
              </div>
            </a>
          </div>
          <div className='s-link'>
            <a
              href='https://discord.com/invite/RwasdYSXXd'
              className='wrap-link'>
              <div className='link-text'>
                <span className='text-white'>
                  <svg
                    style={{ backgroundColor: "white" }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path d='M0 0v24h24v-24h-24zm19.642 14.791l-4.179 4.179h-3.104l-2.031 2.03h-2.149v-2.03h-3.821v-11.224l1.075-2.746h14.209v9.791zm-9.672 3.701l2.03-2.03h3.821l2.388-2.388v-7.641h-11.463v10.03h3.224v2.029zm4.418-9.313h1.433v4.175h-1.433v-4.175zm-3.821 0h1.433v4.175h-1.433v-4.175z' />
                  </svg>
                </span>
                <span className='link-hover text-white'>
                  <svg
                    style={{ backgroundColor: "white" }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path d='M0 0v24h24v-24h-24zm19.642 14.791l-4.179 4.179h-3.104l-2.031 2.03h-2.149v-2.03h-3.821v-11.224l1.075-2.746h14.209v9.791zm-9.672 3.701l2.03-2.03h3.821l2.388-2.388v-7.641h-11.463v10.03h3.224v2.029zm4.418-9.313h1.433v4.175h-1.433v-4.175zm-3.821 0h1.433v4.175h-1.433v-4.175z' />
                  </svg>
                </span>
              </div>
            </a>
          </div>
          <div className='s-link'>
            <a
              href='https://opensea.io/collection/zippo-verse'
              className='wrap-link'>
              <div className='link-text'>
                <span className='text-white'>
                  <img
                    className='img-fluid'
                    style={{ width: "20px" }}
                    src='assets/img/opensea.svg'
                  />
                </span>
                <span className='link-hover text-white'>
                  <img
                    className='img-fluid'
                    style={{ width: "20px" }}
                    src='assets/img/opensea.svg'
                  />
                </span>
              </div>
            </a>
          </div>
        </div>
        <div id='scroll-down'></div>
      </header>
      <section className='about-us-sec animation-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2 className='' data-splitting>
                Our Story
              </h2>
              <p className='text-left' data-splitting>
                ZippoVerse is a world of natural beauty, mystic, myths and a lot
                of mysteries, According to The Ancient ZippoVerse history the
                ZippoVerse was created by a most powerful energy named the Prism
                god "Arcrozma" he created the "ZippoVerse" with the power of the
                prism, the prism placed on his eyes, And Arcrozma chose another
                powerful and loyal friend name "Shadow Coyote" to take care of
                the prism until he wake up from the spiritual sleep, Coyote use
                the Prism power for good and results of the Prism power usage by
                Coyote was a beautiful world in universe, ZippoVerse has a lot
                of different and unique creatures namely "Zippos" ! Some Zippo's
                are cute, some are kind, some are angry and happiest but all of
                them living with happiness, joy and peace until the dragon lord
                "zekyuoram" and his servants the shadow warriors didn't make
                their return to Zippoverse, Dragon lord stole the prism from
                Coyote and made himself more powerful, defensive and vicious one
                of all time, Coyote lost his all powers and self control with
                prism and start turning into the "Rage Shadow Warrior" but
                before turning into a rageful evil he sent a message via the
                god's bird to "King Z" the king Zippo who was ruling the
                ZippoVerse at that time, "King Z" got Shadow Coyote's message
                from God's bird and decided to make a force (energy) to stop and
                defeat the dragon lord Zekyuoram and his shadow warriors, King Z
                chose some Zippos namely Wingle, Floral, Zappy, Forest, Solar,
                Lunar, Firey and Ghost to go on adventure to find the Mystic six
                who can help them to reach "Arcrozma" and awake the god to stop
                all this destruction by Zekyuoram. Will the Zippos chosen by the
                king Z save ZippoVerse successfully from the dragon lord
                Zekyuoram? Will Arcrozma wake again after 1000 years & return to
                save ZippoVerse ? Will Shadow Coyote ever turn into a good
                warrior again? What's the future of ZippoVerse?Who are the
                shadow warriors? Who are the mystic six?And what's the origin of
                Zekyuoram where he came from? We will find out as the journey
                continue........
              </p>
            </div>

            <div className='col-md-6' style={{ marginBottom: "300px" }}>
              <div className='container' style={{ overflow: "hidden" }}>
                <div className='image image-1'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (1).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>

                <div className='image image-2'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (2).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>

                <div className='image image-3'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (3).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>

                <div className='image image-4'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (4).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>

                <div className='image image-5'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (5).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>
                <div className='image image-6'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (6).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>
                <div className='image image-8'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (8).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>
                <div className='image image-10'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (10).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>
                <div className='image image-11'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (11).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>
                <div className='image image-12'>
                  <img
                    className='img-fluid'
                    src='assets/img/story/story (12).jpg'
                    width='600px;'
                    alt='image 1'
                  />
                </div>
              </div>

              <button
                role='button'
                className='button button-next'
                onClick={() => nextAnimation()}>
                -
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className='footer-height'></div>
      <footer>
        <div className='container'>
          <div className='logo'>
            <img className='logo' src='assets/img/zippo-logo.png' alt='logo' />
          </div>
          <h3 className='title-logo'>Zippoverse</h3>
          <div className='w-line'></div>
          <div className='social-icon py-5'>
            <span className='social-icon-text text-white'>Follow Me: </span>
            <div className='s-link'>
              <a href='https://twitter.com/ArtifyNftClub' className='wrap-link'>
                <div className='link-text'>
                  <span className='text-white'>
                    <i className='fa fa-twitter'></i>
                  </span>
                  <span className='link-hover text-white'>
                    <i className='fa fa-twitter'></i>
                  </span>
                </div>
              </a>
            </div>
            <div className='s-link'>
              <a
                href='https://www.instagram.com/zippoversenfts/'
                className='wrap-link'>
                <div className='link-text'>
                  <span className='text-white'>
                    <i className='fa fa-instagram'></i>
                  </span>
                  <span className='link-hover text-white'>
                    <i className='fa fa-instagram'></i>
                  </span>
                </div>
              </a>
            </div>
            <div className='s-link'>
              <a
                href='https://discord.com/invite/RwasdYSXXd'
                className='wrap-link'>
                <div className='link-text'>
                  <span className='text-white'>
                    <svg
                      style={{ backgroundColor: "white" }}
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'>
                      <path d='M0 0v24h24v-24h-24zm19.642 14.791l-4.179 4.179h-3.104l-2.031 2.03h-2.149v-2.03h-3.821v-11.224l1.075-2.746h14.209v9.791zm-9.672 3.701l2.03-2.03h3.821l2.388-2.388v-7.641h-11.463v10.03h3.224v2.029zm4.418-9.313h1.433v4.175h-1.433v-4.175zm-3.821 0h1.433v4.175h-1.433v-4.175z' />
                    </svg>
                  </span>
                  <span className='link-hover text-white'>
                    <svg
                      style={{ backgroundColor: "white" }}
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'>
                      <path d='M0 0v24h24v-24h-24zm19.642 14.791l-4.179 4.179h-3.104l-2.031 2.03h-2.149v-2.03h-3.821v-11.224l1.075-2.746h14.209v9.791zm-9.672 3.701l2.03-2.03h3.821l2.388-2.388v-7.641h-11.463v10.03h3.224v2.029zm4.418-9.313h1.433v4.175h-1.433v-4.175zm-3.821 0h1.433v4.175h-1.433v-4.175z' />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className='s-link'>
              <a
                href='https://opensea.io/collection/zippo-verse'
                className='wrap-link'>
                <div className='link-text'>
                  <span className='text-white'>
                    <img
                      className='img-fluid'
                      style={{ width: "20px" }}
                      src='assets/img/opensea.svg'
                    />
                  </span>
                  <span className='link-hover text-white'>
                    <img
                      className='img-fluid'
                      style={{ width: "20px" }}
                      src='assets/img/opensea.svg'
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>&copy; 2022 Zippoverse ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      {/* <Helmet>
        
        <script src='assets/js/scripts.min.js'></script>
        <script
          type='text/javascript'
          src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/gsap.min.js'></script>
      </Helmet> */}
    </>
  );
}

export default Story;
