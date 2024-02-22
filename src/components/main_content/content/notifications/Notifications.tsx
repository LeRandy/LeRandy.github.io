import { Autocomplete, SpeedDial, SpeedDialIcon } from "@mui/material";
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TextField from "@mui/material/TextField";
import Showcase from "../../../Showcase";
import './Notifications.scss'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Subheading from "../../../Subheading";
import films from "./films";

// fix speed dial icon size
// add slide transition snackbar
// add card component for favorite movies? idk
// add temporary drawer
// add menu component
// figure out css for these mui components

function Notifications() {
    return (
        <div className={ `notifications` }>
            <Subheading>Movie Select Dropdown</Subheading>
            <Showcase footnote="material-ui: autocomplete">
              { /* change color of this */}
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={ films }
                  disableClearable
                  blurOnSelect
                  sx={ { width: 350 } }
                  renderInput={ ( params ) => <TextField { ...params } label="Movie" />}
                  onChange={ ( _event, newValue ) => { ( window as any ).createNotification( newValue?.label + ` (${newValue.year})` ) } }
              />
            </Showcase>
            <br/>
            <br/>
            { /* <Subheading>Speed Dial</Subheading>
            <Showcase footnote="material-ui: speed-dial">
              <SpeedDial
                ariaLabel="SpeedDial"
                icon={<SpeedDialIcon/>}
                direction="right"
              >
                { buttons.map( ( button ) => (
                  <SpeedDialAction
                    key={ button.name }
                    icon={ button.icon }
                    sx={ { height: `0.8em` } }
                    tooltipTitle={ button.name }
                  />
                ) ) }
              </SpeedDial>
            </Showcase>
            */ }
        </div>
    )
}

export default Notifications;

const buttons = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];