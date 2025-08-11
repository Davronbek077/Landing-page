import React from 'react'
import more from "../../assets/more.png"
import bannerImg from "../../assets/bannerImg.png"
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import mask from "../../assets/mask.png"
import userpic1 from "../../assets/userpic1.png"
import userpic2 from "../../assets/userpic2.png"
import userpic3 from "../../assets/userpic3.png"
import userpic4 from "../../assets/userpic4.png"
import team1 from "../../assets/team1.png"
import team2 from "../../assets/team2.png"
import team3 from "../../assets/team3.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
import dribble from "../../assets/dribble.png"
import email from "../../assets/email.png"
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner'>
      <div className="container">
        <div className="banner-wrap">
          <div className="banner-text">
          <h1>We boost
          growth for your statup business</h1>
          <p>Our goal is top at the heart of creativity services industry 
            as a digital creator. In has a after comment</p>

            <div className="banner-btn">
              <div className="started">
              <a href="#">Get Started</a>
              </div>

              <div className="more">
                <img src={more} alt="" />
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div id='hide' className="banner-wrap">
        <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
          <div className="banner-text">
          <h1>We boost
          growth for your statup business</h1>
          <p>Our goal is top at the heart of creativity services industry 
            as a digital creator. In has a after comment</p>

            <div className="banner-btn">
              <div className="started">
              <a href="#">Get Started</a>
              </div>

              <div className="more">
                <img src={more} alt="" />
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        <div id='about' className="banner-card-wrap">
          <div className="banner-card-text">
            <p>SERVICE</p>
            <h3>Our Vison & Our Goal</h3>
          </div>

          <div className="banner-cards">
            <div className="banner-card">
              <img src={card1} alt="" />

              <h3>Graphic Design</h3>
              <div className="cardp">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque dui mi, bibendum eu erat id, ultricies semper metus. 
                Nunc dapibus laoreet dolor nec imperdiet.</p>
              </div>

                <div className="card-btn">
                  <a href="#">Learn More</a>
                </div>
            </div>
            <div className="banner-card" id='midcard'>
              <img id='vid' src={card2} alt="" />

              <h3>Video Editing</h3>
              <div className="cardp">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque dui mi, bibendum eu erat id, ultricies semper metus. 
                Nunc dapibus laoreet dolor nec imperdiet.</p>
              </div>

                <div className="card-btn" id='midbtn'>
                  <a href="#">Learn More</a>
                </div>
            </div>
            <div className="banner-card">
              <img src={card3} alt="" />

              <h3>Digital Marketing</h3>
              <div className="cardp">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque dui mi, bibendum eu erat id, ultricies semper metus. 
                Nunc dapibus laoreet dolor nec imperdiet.</p>
              </div>

                <div className="card-btn">
                  <a href="#">Learn More</a>
                </div>
            </div>
          </div>
        </div>

        <div className="banner-img-wrap">
          <div className="img-text">
            <h3>Many Blocks and Components</h3>
            <p>Startup Framework contains components and complex blocks which
               can easily be integrated into almost any design. </p>

               <div className="img-btn">
                <a href="#">Explore</a>
               </div>
          </div>

          <div className="banner-img">
            <img src={mask} alt="" />
          </div>
        </div>

        <div className="clients-wrapper">
          <div className="clients-text">
            <p id='title'>TESTMONIALS</p>
            <h3 id='text'>What Clients say about us</h3>

            <div className="clients-wrap">
              <div className="clients1">
              <div className="client">
                <div className="client-imgtext">
                <div className="client-img">
                  <img src={userpic1} alt="" />
                </div>

                <div className="client-text">
                  <p>Get a fully retina ready site when you build with Startup Framework.
                     Websites look sharper and more gorgeous on devices with retina display support</p>
                     <p className='bottom-text'>RAYHAN CURRAN</p>
                </div>
                </div>
              </div>
              <div className="client">
                <div className="client-imgtext">
                <div className="client-img">
                  <img src={userpic2} alt="" />
                </div>

                <div className="client-text">
                  <p>As a business targeting high net worth individuals, we were looking for 
                    a slick, cool and mini-malistic design for our website</p>
                     <p id='kayley' className='bottom-text'>KAYLEY FRAME</p>
                </div>
                </div>

              </div>
              </div>
              <div className="clients2">
              <div className="client">
                <div className="client-imgtext">
                <div className="client-img">
                  <img src={userpic3} alt="" />
                </div>

                <div className="client-text">
                  <p>The most important part of the Startup Framework is the samples</p>
                     <p id='gene' className='bottom-text'>GENE WHITFIELD</p>
                </div>
                </div>

              </div>
              <div className="client">
                <div className="client-imgtext">
                <div className="client-img">
                  <img src={userpic4} alt="" />
                </div>

                <div className="client-text">
                  <p>I’ve built my website with Startup just in one day, and it was ready-to-go. </p>
                     <p id='alan' className='bottom-text'>ALLAN KIM</p>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div id='app' className="team-wrapper">
          <div className="teams-info">
            <p id='team-title'>OUR TEAM</p>
            <h3 id='team-text'>Meet The Team</h3>
          </div>

          <div className="team-wrap">
            <div className="team">
              <div className="team-img">
              <img src={team1} alt="" />
              </div>

              <div className="team-text">
                <h3>Vanessa Laird</h3>
                <p>UI Designer</p>
              </div>

              <div className="team-icon">
                <div className="icon">
                <a href="https://twitter.com" target="_blank"> 
                <img id='tw' src={twitter} alt="Twitter" /></a>
                </div>
                <div className="icon">
                  <a href="https://facebook.com" target="_blank"> 
                  <img src={facebook} alt="Facebook" /></a>
                </div>
                <div className="icon">
                  <a href="https://dribbble.com" target="_blank"> 
                  <img src={dribble} alt="Dribbble" /></a>
                </div>
              </div>
            </div>

            <div className="team">
              <div className="team-img">
              <img src={team2} alt="" />
              </div>

              <div className="team-text">
                <h3>Mason Campbell</h3>
                <p>UI Designer</p>
              </div>

              <div className="team-icon">
                <div className="icon">
                <a href="https://twitter.com" target="_blank"> 
                <img id='tw' src={twitter} alt="Twitter" /></a>
                </div>
                <div className="icon">
                  <a href="https://facebook.com" target="_blank"> 
                  <img src={facebook} alt="Facebook" /></a>
                </div>
                <div className="icon">
                  <a href="https://dribbble.com" target="_blank"> 
                  <img src={dribble} alt="Dribbble" /></a>
                </div>
              </div>
            </div>

            <div className="team">
              <div className="team-img">
              <img src={team3} alt="" />
              </div>

              <div className="team-text">
                <h3>Irea Evans</h3>
                <p>Client Manager</p>
              </div>

              <div className="team-icon">
                <div className="icon">
                  <a href="https://twitter.com" target="_blank"> 
                  <img id='tw' src={twitter} alt="Twitter" /></a>
                </div>
                <div className="icon">
                  <a href="https://facebook.com" target="_blank"> 
                  <img src={facebook} alt="Facebook" /></a>
                </div>
                <div className="icon">
                  <a href="https://dribbble.com" target="_blank"> 
                  <img src={dribble} alt="Dribbble" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='contact' className="news-wrapper">
          <div className="news-text">
            <p>OUR TEAM</p>
            <h3>Subscribe Our Newsleter</h3>
          </div>

          <div className="news-mail">
            <div className="mail-img">
              <img src={email} alt="" />
            </div>

            <div className="mail-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <input type="text" placeholder='Your E-mail here...'/>

                <div className="mail-btn">
                  <button>Subscribe Our Newsletter</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
