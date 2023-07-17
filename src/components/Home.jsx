import React, { Fragment } from 'react'
import svg from '../assets/2.webp'
import {AiFillGoogleCircle,
     AiFillAmazonCircle, 
     AiFillInstagram, AiFillYoutube,
    } from 'react-icons/ai'


const Home = () => {
  return (
    <Fragment>
    <div className='home' id='home'>
    <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problem</p>
    </main>
    </div>

    <div className="home2">
        <img src={svg} alt="graphics" />
        <div>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas distinctio rerum repudiandae? Harum, ullam. Labore facilis quis ad aperiam, tempore suscipit nemo dolores voluptatibus? Suscipit, nemo modi dolore sequi aspernatur culpa, repellendus unde reiciendis quidem eaque mollitia dolores non!</p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem enim odit laudantium qui cupiditate non accusantium saepe modi obcaecati debitis aliquam a quaerat aut doloribus ipsam optio, porro id atque dignissimos molestiae magni. Nulla, excepturi repellendus? Porro, totam quidem. Commodi, ad vitae necessitatibus voluptate quasi, libero dolore sit, iusto tempore vel laudantium molestias amet accusamus at iure? Error exercitationem iure enim magni, assumenda, esse voluptatum necessitatibus commodi id asperiores consectetur doloribus nobis quod quam soluta voluptates nemo ratione maiores.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay: "0.7s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                <div style={{animationDelay: "0.9s"}}>
                    <AiFillYoutube/>
                    <p>Google</p>
                </div>
            </article>
        </div>
    </div>

    </Fragment>
  )
}

export default Home
