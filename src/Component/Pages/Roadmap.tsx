/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Layout/Header/Header";

function Roadmap() {
  return (
    <div className='portfolio-tooltip'>
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
              Roadmap
            </h1>
            <div className='w-line el'></div>
            <div className='header-page-text'>
              <p className='el-anime el-words'>
                <span className='el'>
                  Our vision is to create largest decentralized brand for Meta
                  Verse that is bulit & owned by the community.
                </span>
              </p>
            </div>
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
      <section
        className='tooltip-works data-img'
        data-img='assets/img/bg-1.svg'
        style={{ padding: 0 }}>
        <div className='ag-timeline-block'>
          <section className='ag-section' data-img='assets/img/bg-1.svg'>
            <div className='ag-format-container'>
              <div className='js-timeline ag-timeline'>
                <div className='js-timeline_line ag-timeline_line'>
                  <div className='js-timeline_line-progress ag-timeline_line-progress'></div>
                </div>
                <div className='ag-timeline_list'>
                  <div className='js-timeline_item ag-timeline_item'>
                    <div className='ag-timeline-card_box'>
                      <div className='js-timeline-card_point-box ag-timeline-card_point-box'>
                        <div className='ag-timeline-card_point'></div>
                      </div>
                      <div className='ag-timeline-card_meta-box'>
                        <div className='ag-timeline-card_meta'>
                          Goal 500 NFT
                        </div>
                      </div>
                    </div>
                    <div className='ag-timeline-card_item'>
                      <div className='ag-timeline-card_inner'>
                        <div className='ag-timeline-card_img-box'>
                          <img
                            src='assets/img/roadmap/phase 1.png'
                            className='ag-timeline-card_img'
                            width='640'
                            height='360'
                          />
                        </div>
                        <div className='ag-timeline-card_info'>
                          <div className='ag-timeline-card_title'>Phase 1 </div>
                          <div className='ag-timeline-card_desc'>
                            Our First goal is to sell 500 NFT'S to unlock our
                            Zippo Planet & only those members can take part in
                            it who holds our NFT.
                          </div>
                        </div>
                      </div>
                      <div className='ag-timeline-card_arrow'></div>
                    </div>
                  </div>

                  <div className='js-timeline_item ag-timeline_item'>
                    <div className='ag-timeline-card_box'>
                      <div className='ag-timeline-card_meta-box'>
                        <div className='ag-timeline-card_meta'>
                          Goal 2000 NFT
                        </div>
                      </div>
                      <div className='js-timeline-card_point-box ag-timeline-card_point-box'>
                        <div className='ag-timeline-card_point'></div>
                      </div>
                    </div>
                    <div className='ag-timeline-card_item'>
                      <div className='ag-timeline-card_inner'>
                        <div className='ag-timeline-card_img-box'>
                          <img
                            src='assets/img/roadmap/phase 2.png'
                            className='ag-timeline-card_img'
                            width='640'
                            height='360'
                            alt=''
                          />
                        </div>
                        <div className='ag-timeline-card_info'>
                          <div className='ag-timeline-card_title'>
                            Goal 2000 NFT
                          </div>
                          <div className='ag-timeline-card_desc'>
                            Offering our holders Zippo Verse Tshirts after
                            selling 2000 NFT. Note : Only 100 Holders will get
                            Tshirts of Zippo Verse.
                          </div>
                        </div>
                      </div>
                      <div className='ag-timeline-card_arrow'></div>
                    </div>
                  </div>

                  <div className='js-timeline_item ag-timeline_item'>
                    <div className='ag-timeline-card_box'>
                      <div className='js-timeline-card_point-box ag-timeline-card_point-box'>
                        <div className='ag-timeline-card_point'></div>
                      </div>
                      <div className='ag-timeline-card_meta-box'>
                        <div className='ag-timeline-card_meta'>
                          Goal 4000 NFT
                        </div>
                      </div>
                    </div>
                    <div className='ag-timeline-card_item'>
                      <div className='ag-timeline-card_inner'>
                        <div className='ag-timeline-card_img-box'>
                          <img
                            src='assets/img/roadmap/phase 3.png'
                            className='ag-timeline-card_img'
                            width='640'
                            height='360'
                            alt=''
                          />
                        </div>
                        <div className='ag-timeline-card_info'>
                          <div className='ag-timeline-card_title'>
                            Goal 4000 NFT
                          </div>
                          <div className='ag-timeline-card_desc'>
                            We plan to deliver random ETH airdrops to our Zippo
                            Verse Holders. 3 Random Lucky Winners who hold at
                            least 3 NFT will get 2 ETH each in their wallet
                            through airdrops & another 100 random lucky winners
                            will get 100 USDT each in their wallet through
                            airdrops.
                          </div>
                        </div>
                      </div>
                      <div className='ag-timeline-card_arrow'></div>
                    </div>
                  </div>

                  <div className='js-timeline_item ag-timeline_item'>
                    <div className='ag-timeline-card_box'>
                      <div className='ag-timeline-card_meta-box'>
                        <div className='ag-timeline-card_meta'>
                          Goal 5500 NFT
                        </div>
                      </div>
                      <div className='js-timeline-card_point-box ag-timeline-card_point-box'>
                        <div className='ag-timeline-card_point'></div>
                      </div>
                    </div>
                    <div className='ag-timeline-card_item'>
                      <div className='ag-timeline-card_inner'>
                        <div className='ag-timeline-card_img-box'>
                          <img
                            src='assets/img/roadmap/phase 4.png'
                            className='ag-timeline-card_img'
                            width='640'
                            height='360'
                            alt=''
                          />
                        </div>
                        <div className='ag-timeline-card_info'>
                          <div className='ag-timeline-card_title'>
                            Goal 5500 NFT
                          </div>
                          <div className='ag-timeline-card_desc'>
                            Offering Zippo Verse Holders Collectibles Toys. Only
                            200 Random holders will get collectibles toys & If
                            any holders who wants to buy collectibles toys they
                            can buy it in Shop section & Shop section will
                            unlock in Phase 5th.
                          </div>
                        </div>
                      </div>
                      <div className='ag-timeline-card_arrow'></div>
                    </div>
                  </div>

                  <div className='js-timeline_item ag-timeline_item'>
                    <div className='ag-timeline-card_box'>
                      <div className='js-timeline-card_point-box ag-timeline-card_point-box'>
                        <div className='ag-timeline-card_point'></div>
                      </div>
                      <div className='ag-timeline-card_meta-box'>
                        <div className='ag-timeline-card_meta'>
                          Goal 7000 NFT
                        </div>
                      </div>
                    </div>
                    <div className='ag-timeline-card_item'>
                      <div className='ag-timeline-card_inner'>
                        <div className='ag-timeline-card_img-box'>
                          <img
                            src='assets/img/roadmap/phase 5.png'
                            className='ag-timeline-card_img'
                            width='640'
                            height='360'
                            alt=''
                          />
                        </div>
                        <div className='ag-timeline-card_info'>
                          <div className='ag-timeline-card_title'>
                            Goal 7000 NFT
                          </div>
                          <div className='ag-timeline-card_desc'>
                            Our team will launch official Zippo Verse
                            Merchandise section on our Zippo Verse website. A
                            decentralized Store for All.
                          </div>
                        </div>
                      </div>
                      <div className='ag-timeline-card_arrow'></div>
                    </div>
                  </div>

                  <div className='js-timeline_item ag-timeline_item'>
                    <div className='ag-timeline-card_box'>
                      <div className='ag-timeline-card_meta-box'>
                        <div className='ag-timeline-card_meta'>
                          Goal 9000 NFT
                        </div>
                      </div>
                      <div className='js-timeline-card_point-box ag-timeline-card_point-box'>
                        <div className='ag-timeline-card_point'></div>
                      </div>
                    </div>
                    <div className='ag-timeline-card_item'>
                      <div className='ag-timeline-card_inner'>
                        <div className='ag-timeline-card_img-box'>
                          <img
                            src='assets/img/roadmap/phase 6.png'
                            className='ag-timeline-card_img'
                            width='640'
                            height='360'
                            alt=''
                          />
                        </div>
                        <div className='ag-timeline-card_info'>
                          <div className='ag-timeline-card_title'>Season 8</div>
                          <div className='ag-timeline-card_desc'>
                            After selling 9000 NFT our team will work towards
                            digital Future i.e. Meta Verse. While exploring new
                            dimensions. Our aim is to create a virtual space for
                            NFT Holders where they can Meet & Intract will each
                            other.
                          </div>
                        </div>
                      </div>
                      <div className='ag-timeline-card_arrow'></div>
                    </div>
                  </div>

                  <div className='js-timeline_item ag-timeline_item'>
                    <div className='ag-timeline-card_box'>
                      <div className='js-timeline-card_point-box ag-timeline-card_point-box'>
                        <div className='ag-timeline-card_point'></div>
                      </div>
                      <div className='ag-timeline-card_meta-box'>
                        <div className='ag-timeline-card_meta'>
                          Goal 10000 NFT
                        </div>
                      </div>
                    </div>
                    <div className='ag-timeline-card_item'>
                      <div className='ag-timeline-card_inner'>
                        <div className='ag-timeline-card_img-box'>
                          <img
                            src='assets/img/roadmap/phase 7.png'
                            className='ag-timeline-card_img'
                            width='640'
                            height='360'
                            alt=''
                          />
                        </div>
                        <div className='ag-timeline-card_info'>
                          <div className='ag-timeline-card_title'>
                            Goal 10000 NFT
                          </div>
                          <div className='ag-timeline-card_desc'>
                            A Big Surprise for All Zippo holders will come after
                            selling 10000 NFT.
                          </div>
                        </div>
                      </div>
                      <div className='ag-timeline-card_arrow'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
        <script src='assets/js/roadmap.js'></script>
      </Helmet>
    </div>
  );
}

export default Roadmap;
