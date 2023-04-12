import React from 'react';
import Link from '../../../Link';

function LibrariesUsed() {
    return (
        <div className={ `libraries-used` }>
            <Link link={ `https://evergreen.segment.com` }>Evergreen</Link>
            <br/>
            <Link link={ `https://mui.com/material-ui/` }>Material UI</Link>
            <br/>
            <Link link={ `https://react-spring.io` }>react-spring</Link>
        </div>
    )
}

export default LibrariesUsed;