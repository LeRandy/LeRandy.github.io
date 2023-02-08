import PageViewer from '../../../PageViewer';
import Showcase from '../../../Showcase';

function ViewPager() {
    return (
        <div>
            <p>I'm a mechanical keyboard enthusiast. Here are some of my keyboard builds.</p>
            <Showcase footnote={ `view-pager: react-spring` }>
                <PageViewer/>
            </Showcase>
        </div>
    )
}

export default ViewPager;