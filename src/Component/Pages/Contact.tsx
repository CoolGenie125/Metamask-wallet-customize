import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Layout/Header/Header";

function Contact() {
  return (
    <div>
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
      <header className='home-header-bg'>
        <div
          className='parallax-window'
          data-image-src='assets/img/portfolio/big-img/55.jpg'></div>
        <a href='index.html' className='header-logo'>
          <img className='logo' src='assets/img/zippo-logo.png' alt='logo' />
        </a>
        <div className='header-page-container'>
          <div className='header-page-content an-el-wrap'>
            <h1 className='main-title animation-header-title' data-splitting>
              Contacts
            </h1>
            <div className='w-line el'></div>
          </div>
        </div>
        <div className='social-icon'>
          <span className='social-icon-text text-white'>Follow Me: </span>
          <div className='s-link'>
            <a href='#' className='wrap-link'>
              <div className='link-text'>
                <span className='text-white'>tw</span>
                <span className='link-hover text-white'>tw</span>
              </div>
            </a>
          </div>
          <div className='s-link'>
            <a href='#' className='wrap-link'>
              <div className='link-text'>
                <span className='text-white'>in</span>
                <span className='link-hover text-white'>in</span>
              </div>
            </a>
          </div>
          <div className='s-link'>
            <a href='#' className='wrap-link'>
              <div className='link-text'>
                <span className='text-white'>fb</span>
                <span className='link-hover text-white'>fb</span>
              </div>
            </a>
          </div>
        </div>
        <div id='scroll-down'></div>
      </header>
      <section className='blog-single-post animation-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 wrap-title-section'>
              <div className='sub-title-1 animation-1' data-splitting>
                Contacts
              </div>
              <h2 className='title-section animation-1' data-splitting>
                If You Have Questions Write To Us
              </h2>
              <div className='s-line animation-line'></div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 contact-info'>
              <ul>
                <li>
                  <p>
                    <span>Address:</span>Street, City, Country
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>(123) 456 789
                  </p>
                </li>
                <li>
                  <p>
                    <span>E-mail:</span>your-email@mail.com{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className='col-md-6 offset-md-3'>
              <div className='wrap-form'>
                <form
                  id='contactForm'
                  data-toggle='validator'
                  className='shake text-center'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Enter name'
                      required
                      data-error='Please enter your name'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Enter email'
                      required
                      data-error='Please enter your email address'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      id='message'
                      className='form-control'
                      rows={5}
                      placeholder='Enter your message'
                      required
                      data-error='Please enter your message'></textarea>
                    <div className='help-block with-errors'></div>
                  </div>
                  <div className='submit'>
                    <div className='content-button text-center'>
                      <button
                        id='form-submit'
                        className='button-link button node-hover'>
                        <span className='wrap-button-link submit-button'>
                          <i className='button-text'>
                            <span>send message</span>
                            <span className='button-link-hover'>
                              send message
                            </span>
                          </i>
                        </span>
                      </button>
                    </div>
                    <div
                      id='msgSubmit'
                      className='h5 h5 text-danger hidden text-center'></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='footer-height'></div>
      <footer>
        <div className='container'>
          <div className='logo'>
            <img src='assets/img/main-logo.svg' alt='logo' />
          </div>
          <h3 className='title-logo'>Zippo</h3>
          <div className='footer-cotact-info'>
            <p>
              <span>address: </span> Street, City, Country
            </p>
            <p>
              <span>phone: </span> +(123) 456 789
            </p>
            <p>
              <span>e-mail: </span> your-email@mail.com
            </p>
          </div>
          <div className='w-line'></div>
          <div className='social-icon'>
            <div className='s-link'>
              <a href='#' className='wrap-link'>
                <div className='link-text'>
                  <span className='text-white'>tw</span>
                  <span className='link-hover text-white'>tw</span>
                </div>
              </a>
            </div>
            <div className='s-link'>
              <a href='#' className='wrap-link'>
                <div className='link-text'>
                  <span className='text-white'>in</span>
                  <span className='link-hover text-white'>in</span>
                </div>
              </a>
            </div>
            <div className='s-link'>
              <a href='#' className='wrap-link'>
                <div className='link-text'>
                  <span className='text-white'>fb</span>
                  <span className='link-hover text-white'>fb</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>&copy; 2022 Zippo ALL RIGHTS RESERVED</p>
        </div>
      </footer>
      <Helmet>
        <script src='assets/js/scripts.min.js'></script>
      </Helmet>
    </div>
  );
}

export default Contact;
