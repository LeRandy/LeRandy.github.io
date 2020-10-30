import React from 'react';
import Card from '../../Card';
import Showcase from '../../Showcase';
import Subheading from '../../Subheading';
// import './About.scss';

function About() {
    return (
        <div>
            Welcome to my website!
            <br/><br/>
            The purpose of this website is for me to help you understand more about who I am with the use of an assortment of different libraries and designs.
            <br/><br/>
            <i>The layout and design of this website is 99% pure HTML/CSS/JavaScript without the use of any out-of-the-box packages or libraries.</i>
            <br/><br/>
            Let's begin!
            <br/><br/><br/>
            <Subheading>Development</Subheading>
            I am a software engineer with experience as a fullstack developer and an affinity/aptitude for front-end development/UX.
            <br/><br/>
            I enjoy making user experiences both exciting and intuitive!
            <br/><br/><br/>
            <Subheading>Education</Subheading>
            In 2018 I earned a Bachelor of Science in Software Engineering from the University of Calgary.
            <br/><br/>
            <Showcase footnote={ `hovering card: react-spring` }>
                <Card image="https://ucalgary.ca/iriss/files/iriss/uc-horz-rgb_0.png"/>
            </Showcase>
            <br/><br/>
            <Subheading>Skills & Experience</Subheading>
            *Insert Simple Transition Here*
        </div>
    )
}

export default About;