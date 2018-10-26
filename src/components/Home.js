import React, { Component } from 'react';
import './css/App.css';
//Components
import GalleryContainer from './GalleryContainer';
import CarouselIntro from './CarouselIntro';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from "react-parallax";
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import Featured_Gallery from './PhotoProjects/Featured_Gallery.js'
import ProjectContainer from './Projects/ProjectContainer'
import LazyLoad from 'react-lazy-load';
import Featured from './PhotoProjects/Featured_Portfolio'

//unused
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigationBar from './NavigationBar';
import FooterPage from './Footer';
import Slideshow from './Slideshow';
import BlogPage from './BlogPage'
import Routes from './Routes'
import All_Projects from './Projects/All_Projects'
import AboutPage from './AboutPage'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
   

    render() {
        // Parallax Images will be local 
        const image4 = require('../images/Featured_Portfolio/Travel/Travel-10.jpg');
        return (
            <div>
                <div id="section1">
                    <Parallax strength={500}>
                        <ScrollAnimation delay={700} animateIn="fadeIn" animateOnce={true}>
                            <CarouselIntro />
                        </ScrollAnimation>
                    </Parallax>
                </div>

                <div id="section2">
                    {/* <Parallax strength={500}> */}
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <ProjectContainer
                            showFilter={true}
                            imageArray={Featured.imageArray}
                            headerInfo={Featured.projectHeader}
                            renderType="feature"
                            // style={"container containerMarginTopFeature"}
                        />
                    </ScrollAnimation>
                    {/* </Parallax> */}
                </div>

                <div id="section4">
                    <Parallax bgImage={image4} strength={500}>
                        <div style={{ height: 500 }}>
                        </div>
                    </Parallax>
                </div>
                {/* Slow due to loading images on web */}
                {/* <div id="section3">
                    <LazyLoad>
                        <AboutPage />
                    </LazyLoad>
                </div> */}
            </div>

        );
    }
}

export default Home;

