import React, { ReactChild } from 'react';
import './Subheading.scss';

interface Props {
    children: ReactChild
}

function Subheading ( props: Props ) {
    return (
        <div className={`sub-heading`}>
            { props.children }
        </div>
    )
}

export default Subheading;