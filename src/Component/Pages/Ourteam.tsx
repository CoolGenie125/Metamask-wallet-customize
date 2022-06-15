import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Layout/Header/Header";

function Ourteam() {
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
      <Header/>
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
              OUR TEAM
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
            <div className='col-md-12 wrap-title-section'>
              <h2 className='title-section animation-1' data-splitting>
                Our Team
              </h2>
              <h4 className='title-section animation-1' data-splitting>
                THE IDEA WAS MADE IN A SECRET MEETING & RAPIDLY BECOMING AN
                ENDLESS VISION. THE TEAM OF ZIPPO VERSE WHO SPECIALISE IN
                CRYPTO, ART & TECHNOLOGY IS WEB3 NERDS.
              </h4>
              <div className='s-line animation-line'></div>
            </div>
          </div>
          <div className='team-sec'>
            <div className='swiper-container team-slider'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='slider-item team-item'>
                    <div className='team-txt'>
                      <img
                        className='img-fluid'
                        src='assets/img/team/3.jpg'
                        alt='img'
                      />
                      <h3>Sam</h3>
                      <h5>
                        Founder of Artify NFT Club (Zippo Verse) & Blockchain
                        Developer
                      </h5>
                      <div className='social-icon'>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>tw</span>
                              <span className='link-hover'>tw</span>
                            </div>
                          </a>
                        </div>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>in</span>
                              <span className='link-hover'>in</span>
                            </div>
                          </a>
                        </div>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>fb</span>
                              <span className='link-hover'>fb</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='slider-item team-item'>
                    <div className='team-txt'>
                      <img
                        className='img-fluid'
                        src='assets/img/team/2.jpg'
                        alt='img'
                      />
                      <h3>Luke</h3>
                      <h5>Animator & Social Media Promoter</h5>
                      <div className='social-icon'>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>tw</span>
                              <span className='link-hover'>tw</span>
                            </div>
                          </a>
                        </div>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>in</span>
                              <span className='link-hover'>in</span>
                            </div>
                          </a>
                        </div>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>fb</span>
                              <span className='link-hover'>fb</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='slider-item team-item'>
                    <div className='team-txt'>
                      <img
                        className='img-fluid'
                        src='assets/img/team/1.jpg'
                        alt='img'
                      />
                      <h3>Jerry</h3>
                      <h5>Proffesional Artist</h5>
                      <div className='social-icon'>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>tw</span>
                              <span className='link-hover'>tw</span>
                            </div>
                          </a>
                        </div>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>in</span>
                              <span className='link-hover'>in</span>
                            </div>
                          </a>
                        </div>
                        <div className='s-link'>
                          <a href='#' className='wrap-link'>
                            <div className='link-text'>
                              <span>fb</span>
                              <span className='link-hover'>fb</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      <Helmet>
        <script src='assets/js/scripts.min.js'></script>
      </Helmet>
    </>
  );
}

export default Ourteam;
