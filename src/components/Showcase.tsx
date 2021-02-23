import React, { ReactChild } from 'react';
import './Showcase.scss';

interface Props {
    children: ReactChild;
    footnote?: string;
    header?: string;
}

function Showcase( props: Props ) {
    return (
        <div className={ `showcase` }>
            { props.header ?
                <>
                    <div className={ `header` }> 
                        { props.header }
                    </div>
                    { props.children }
                </> : 
                <>
                    { props.children }
                    <div className={ `footnote` }>
                        { props.footnote }
                    </div>
                </>
            }

            
        </div>
    )
}

export default Showcase;