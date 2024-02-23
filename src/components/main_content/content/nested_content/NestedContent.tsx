import NestedBoxes from '../../../NestedBoxes';
import Showcase from '../../../Showcase';
import teams from './basketball_teams';

function NestedContent() {
    return (
        <div>
            <p>I'm an NBA basketball fan.</p>
            <p>Here are some of my favorite teams.</p>
            <Showcase footnote={ `react-spring: nested-boxes` } interaction={ "Click to Reveal" }>
                <NestedBoxes data={ teams } initialImage={ `https://www.edigitalagency.com.au/wp-content/uploads/NBA-logo-png.png` }/>
            </Showcase>
        </div>
    )
}

export default NestedContent;