import NestedBoxes from '../../../NestedBoxes';
import Showcase from '../../../Showcase';
import data from './data';

function NestedContent() {
    return (
        <div>
            <p>I'm an NBA basketball fan. Although I can't play any basketball due to bad cardio 🙃</p>
            <p>Here are some of my favorite teams.</p>
            <Showcase footnote={ `nested-boxes: react-spring` }>
                <NestedBoxes data={ data } initialImage={ `https://www.edigitalagency.com.au/wp-content/uploads/NBA-logo-png.png` }/>
            </Showcase>
        </div>
    )
}

export default NestedContent;