import React, { ReactChild } from 'react';
import './Showcase.scss';

interface Props {
    children: ReactChild;
    footnote: string;
}

function Showcase( props: Props ) {
    return (
        <div className={`showcase`} style={ { display: `flex`, flexDirection: `column` } }>
            { props.children }
            <div className={ `footnote` }>
                { props.footnote }
            </div>
        </div>
    )
}

export default Showcase;