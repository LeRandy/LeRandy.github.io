import { Button, Card, CardActions, CardContent, CardMedia, IconButton, SvgIconProps, Typography } from '@mui/material';
import React from 'react';

import './DisplayCard.scss';

interface Props {
    width?: number;
    height?: number;
    media?: CardMediaProps;
    title?: string;
    description?: string;
    cardActions?: CardActionProps[];
}

interface CardMediaProps {
    name: string;
    image: string;
    height: string;
}

interface CardActionProps {
    name?: string;
    icon?: React.ReactElement<SvgIconProps>;
    callback?: () => void;
}

function DisplayCard ( props: Props ) {
    let { width, height, media, title, description, cardActions } = props;

    return (
        // add a transform/translate effect
        <Card sx={ { maxWidth: width, maxHeight: height } } variant='elevation'>
            { media ? 
                <CardMedia
                    component={ `img` }
                    alt={ media.name }
                    height={ media.height }
                    image={ media.image }
                /> : null }
            <CardContent>
                { title ?
                    <Typography gutterBottom variant='h6' component={ "div" }>
                        { title }
                    </Typography> : null }
                { description ?
                    <Typography variant='body2' color="text.primary">
                        { description }
                    </Typography> : null }
            </CardContent>
            { cardActions ?
                <CardActions>
                    { cardActions.map( ( cardAction, index ) => 
                        <div key={ index }>
                            { cardAction.name ? 
                                <Button size="small" onClick={ cardAction.callback }>
                                    { cardAction.name }
                                </Button> : null }
                            { cardAction.icon ? 
                                <IconButton onClick={ cardAction.callback }>
                                    { cardAction.icon }
                                </IconButton> : null }
                        </div>
                    ) }
                </CardActions> : null }
        </Card>
    );
}

export default DisplayCard;