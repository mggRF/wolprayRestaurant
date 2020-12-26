import  {createMuiTheme} from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen'
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

const TemaConfig = createMuiTheme({

    palette: {
        primary:lightGreen,
        secondary:red,
        info:blue

    }
})

export default TemaConfig;