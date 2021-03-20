import { LinkIcon } from 'evergreen-ui';
import React, { ReactChild } from 'react';
import './Link.scss';

interface Props {
    link: string;
    children: ReactChild;
}

function Link ( props: Props ) {
    return (
        <div className={ `link` }>
            <a className={ `link` } href={ props.link } target="_blank">
                { props.children }
                <LinkIcon size={ 24 } style={ { paddingLeft: `5px` } }/>
            </a>
        </div>
    )
}

export default Link;