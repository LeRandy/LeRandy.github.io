import React, { ReactChild, useState } from 'react';
import './Showcase.scss';

interface Props {
    children: ReactChild;
    footnote?: string;
    header?: string;
    interaction?: string;
    fitContent?: boolean;
}

function Showcase( props: Props ) {
    return (
        <div className={ `showcase` }>
            { props.header ? 
                <div className={ `header` }> 
                        { props.header }
                </div> : null
            }
            <ContentDisplay/>
            { props.footnote ? 
                <div className={ `footnote` }>
                    { props.footnote }
                </div> : null  
            }
        </div>
    );

    function ContentDisplay () {
        let [ displayInteraction, setDisplayInteraction ] = useState( props.interaction ? true : false );

        if ( displayInteraction ) {
            return (
                <div className={ `content-display${ props.fitContent ? ` fit-content` : `` }` }>
                    <div className={ `spoiler` }>
                        { props.children }
                    </div>
                    <div className={ `interaction` } onMouseOver={ () => setDisplayInteraction( false ) }>
                        { props.interaction }
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    { props.children }
                </> 
            );
        }
    }
}

export default Showcase;