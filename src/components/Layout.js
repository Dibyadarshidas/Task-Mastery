import {
  Divider,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import { useHistory, useLocation } from "react-router-dom";
import NotesIcon from "@material-ui/icons/Notes";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


const drawerWidth = "250px";
const appBarHeight = "75px"
const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: "100%",
      padding: theme.spacing(3),
      marginTop : appBarHeight
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar : {
        position : "fixed",
        width : `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        height : appBarHeight
    },
    avatar : {
        backgroundColor : "orange"
    }
  };
});
const menuItems = [
  {
    title: "Taks",
    icon: <NotesIcon color="primary" />,
    path: "/",
  },
  {
    title: "Create Task",
    icon: <AddCircleOutlineIcon color="primary" />,
    path: "/create",
  },
];

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
        <Avatar className={classes.avatar} >D</Avatar>
    </Typography>
     <Button>Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <Typography className={classes.title} variant="h5">
            Task Mastery
          </Typography>
          <Divider />
          <List>
            {menuItems.map((menu, id) => {
              return (
                <ListItem
                  button
                  onClick={() => {
                    history.push(menu.path);
                  }}
                  className={location.pathname === menu.path && classes.active}
                >
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.title} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <div className={classes.page}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
