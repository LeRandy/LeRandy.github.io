import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Showcase from "../../../Showcase";
import './Notifications.scss'
import Subheading from "../../../Subheading";
import films from "./films";
import DisplayCard from "../../../DisplayCard";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import favoriteMovies from './favoriteMovies';
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// fix speed dial icon size
// add card component for favorite movies? idk **
// add temporary drawer
// add menu component
// figure out css for these mui components

function Notifications() {
    return (
        <div className={ `notifications` }>
            <Subheading>Movie Select Dropdown</Subheading>
			<p>Here is a personalized dropdown of movies.</p>
            <Showcase footnote="material-ui: autocomplete">
              { /* change color of this */}
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={ films }
                  disableClearable
                  sx={ { width: 350 } }
                  renderInput={ ( params ) => <TextField { ...params } label="Movie" />}
                  onChange={ ( _event, newValue ) => { ( window as any ).createNotification( newValue?.label + ` (${newValue.year})` ) } }
              />
            </Showcase>
            <br/>
            <br/>
            <Subheading>Card</Subheading>
			<p>These are some of my favorite movies!</p>
            <Showcase footnote="material-ui: card">
            	<Grid container spacing={ 2 }>
					{ favoriteMovies.map( movie => 
						<Grid key={ movie.title } xs={ 4 } >
							<DisplayCard
								// width={ 350 }
								title={ movie.title }
								media={ {
									name: movie.title,
									image: movie.image,
									height: "150"
								} }
								description={ movie.description }
								cardActions={ [ { 
									// name: "Icon",
									icon: <ArrowOutwardRoundedIcon/>,
									callback: () => { window.open( movie.imdbLink, "_blank" ) }
								} ] }
								/>
						</Grid>
					) }
              	</Grid>
            </Showcase>
        </div>
    )
}

export default Notifications;