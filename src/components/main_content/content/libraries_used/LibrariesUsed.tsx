import React from 'react';
import Link from '../../../Link';

function LibrariesUsed() {
    return (
        <div className={ `libraries-used` }>
            <Link link={ `https://react-spring.io` }>react-spring</Link>
            <br/>
            <Link link={ `https://evergreen.segment.com` }>Evergreen</Link>
        </div>
    )
}

export default LibrariesUsed;