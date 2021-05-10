import { AppBar, Toolbar, Typography, IconButton, Icon } from "@material-ui/core";


export const Header = ({ classes ={} }) =>
    <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Icon>home</Icon>
            </IconButton>
            <Typography variant="h6" color="inherit">
                Covid Patient Request
            </Typography>
        </Toolbar>
    </AppBar>
