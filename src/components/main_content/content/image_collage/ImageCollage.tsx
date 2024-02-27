import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Showcase from "../../../Showcase";
import { InfoSignIcon } from "evergreen-ui";
import itemData from './favoriteGames';

function ImageCollage() {
    return (
        <div className={ `notifications` }>
			<p>One of my hobbies is playing video games. Below are some of my favorite games!</p>
            <Showcase footnote="material-ui: image-list">
                <ImageList
                    sx={ { width: 800 } }
                    variant={ `masonry` }
                    cols={ 3 }
                    gap={ 5 }
                >
                    { itemData.map( ( item ) => (
                        <ImageListItem key={ item.img }>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                                <ImageListItemBar
                                // title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={ { color: 'rgba(255, 255, 255, 0.54)' } }
                                        aria-label={`info about ${item.title}`}
                                        onClick={ () => { window.open( item.link, "_blank" ) } }
                                    >
                                        <InfoSignIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ) ) }
                </ImageList>
            </Showcase>
        </div>
    )
}

export default ImageCollage;