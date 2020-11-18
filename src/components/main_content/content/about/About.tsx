import React from 'react';
import Card from '../../../Card';
import Showcase from '../../../Showcase';
import Subheading from '../../../Subheading';
import Transition from './Transition';
// import './About.scss';

function About() {
    return (
        <div>
            <p>Welcome to my website!</p>
            <p>The purpose of this website is for me to help you understand more about who I am with the use of an assortment of different libraries and designs.</p>
            <p><i>The layout and design of this website is 99% pure HTML/CSS/JavaScript without the use of any out-of-the-box packages or libraries.</i></p>
            <p>Let's begin!</p>
            <Subheading>Development</Subheading>
            <p>I am a software engineer with fullstack experience and an affinity for front-end development/UX.</p>
            <p>I enjoy making user experiences both exciting and intuitive!</p>
            <Subheading>Education</Subheading>
            <p>In 2018 I earned a Bachelor of Science in Software Engineering from the University of Calgary.</p>
            <Showcase footnote={ `hovering card: react-spring` }>
                <Card image="https://ucalgary.ca/iriss/files/iriss/uc-horz-rgb_0.png"/>
            </Showcase>
            <br/>
            <Subheading>Skills & Experience</Subheading>
            <p>Most of my skill, experience, and interests are in the following libraries/frameworks: React, TypeScript, and GraphQL. Click on the image below!</p>
            <Showcase footnote={ `simple transition: react-spring` }>
                <Transition 
                    isLocal={ true } 
                    images={ [ 
                        `./react.png`, 
                        `./typescript.png`, 
                        `./graphql.png`
                    ] }
                />
            </Showcase>
        </div>
    )
}

export default About;