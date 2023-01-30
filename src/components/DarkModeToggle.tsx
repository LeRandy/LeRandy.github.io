import { ContrastIcon } from 'evergreen-ui';
import './DarkModeToggle.scss';

interface Props {
    darkMode: boolean;
    handleDarkModeClick: () => void;
}

function DarkModeToggle ( props: Props ) {


    return (
        <div className={ `dark-mode-toggle` }>
            <ContrastIcon onClick={ props.handleDarkModeClick } size={ 40 } color={ props.darkMode ? `white` : `black` }/>
        </div>
    )
}

export default DarkModeToggle;