import Card from '../../../Card';
import Showcase from '../../../Showcase';
import Subheading from '../../../Subheading';
import Transition from './Transition';
import reactImage from './react.png';
import graphqlImage from './graphql.png';
import typescriptImage from './typescript.png';

function About() {
    return (
        <div>
            <Subheading>Intro</Subheading>
            <p>Welcome to my website!</p>
            <p>The purpose of this website is for me to help you understand more about who I am with the use of an assortment of different libraries and designs.</p>
            <p><i>The layout and design of this website is 99% pure HTML/CSS/JavaScript without the use of any out-of-the-box packages or libraries.</i></p>
            <p>Let's begin!</p>
            <Subheading>Development</Subheading>
            <p>I am a software engineer with full stack experience and an artisinal approach to front-end development.</p>
            <p>I take pride in making user experiences both exciting and intuitive!</p>
            <Subheading>Education</Subheading>
            <p>In 2018, I earned a Bachelor of Science in Software Engineering from the University of Calgary.</p>
            <Showcase footnote={ `hovering card: react-spring` } interaction={`Hover`}>
                <Card image="https://propelenergytech.com/wp-content/uploads/2018/01/University-Of-Calgary-Logo.png"/>
            </Showcase>
            <br/>
            <Subheading>Skills & Experience</Subheading>
            <p>Most of my skill, experience, and interests are in the following libraries/frameworks: React, TypeScript, and GraphQL. However, I'm always keen to learn new technologies!</p>
            <p>Click on the image below!</p>
            <Showcase footnote={ `simple transition: react-spring` }>
                <Transition 
                    images={ [ 
                        reactImage, typescriptImage, graphqlImage
                    ] }
                />
            </Showcase>
        </div>
    )
}

export default About;