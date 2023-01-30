import NestedBoxes from '../../../NestedBoxes';
import Showcase from '../../../Showcase';
import data from './data';
import nbaLogo from './Logo-NBA.png';

function NestedContent() {
    return (
        <div>
            <p>I'm an NBA basketball fan. Although I can't play any basketball due to bad cardio 🙃</p>
            <p>Here are some of my favorite teams.</p>
            <Showcase footnote={ `nested-boxes: react-spring` }>
                <NestedBoxes data={ data } initialImage={ nbaLogo }/>
            </Showcase>
        </div>
    )
}

export default NestedContent;