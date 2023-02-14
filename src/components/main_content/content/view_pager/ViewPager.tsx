import PageViewer from '../../../PageViewer';
import Showcase from '../../../Showcase';

function ViewPager() {
    const pages = [
        'https://im.vsco.co/aws-us-west-2/148dbe/66644364/63e3eaf101d61e69d6000005/d53bcebf-9107-44e6-87f0-44831615a7cc1142555550289627243.jpg?w=930&dpr=1',
        'https://im.vsco.co/aws-us-west-2/148dbe/66644364/63e3ea6101d61e69d6000001/3b49a21e-feb7-43f3-94ce-38dd88b311f02341673428043107102.jpg?w=930&dpr=1',
        'https://im.vsco.co/aws-us-west-2/148dbe/66644364/63e3eac501d61e69d6000003/49afefc9-027c-497d-bfae-ac1c62fea9ea9187044043997179359.jpg?w=930&dpr=1',
    ]

    return (
        <div>
            <p>I'm a mechanical keyboard enthusiast. Here are some of my keyboard builds.</p>
            <b>Swipe To Reveal More Images</b>
            <Showcase footnote={ `view-pager: react-spring` }>
                <PageViewer pages={ pages }/>
            </Showcase>
        </div>
    )
}

export default ViewPager;