import React, { useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core/'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import search from '../../images/icons/search.svg'
import cart from '../../images/icons/cart.svg'
import account from '../../images/icons/account-header.svg'
import menu from '../../images/icons/menu.svg'

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: '#fff'
  },
  logoText: {
    color: theme.palette.common.offBlack
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  icon: {
    height: '5rem',
    width: '5rem'
  }

}));

const Header = ({ categories }) => {
  const classes = useStyles()
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false)

  const iOS = process.browser && /iPad|iPhone|iPad/.test(navigator.userAgent);

  const routes = [...categories, { node: { name: "Contact Us", strapiId: "Contact" } }]

  const tabs = (
        <Tabs value={0} classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}>
          {routes.map(route => (
            <Tab label={route.node.name} key={route.node.strapiId} />
          ))}
        </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      disableBackdropTransition={!iOS} disableDiscovery={iOS}
    >
      <List disablePadding>
          {routes.map(route => (
            <ListItem divider button key={route.node.strapiId}>
              <ListItemText primary={route.node.name}/>
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1"><span className={classes.logoText}>Var</span> X</Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        <IconButton classes={{root: classes.icon}}>
          <img 
            src={search} alt="search" />
        </IconButton>
        <IconButton classes={{root: classes.icon}}>
          <img 
            src={cart} alt="cart" />
        </IconButton>
        <IconButton classes={{root: classes.icon}}
          onClick={() => matchesMD ? setDrawerOpen(true) : null}
        >
          <img 
            src={matchesMD ? menu : account}
            alt={matchesMD ? "menu" : "account"}
          />
          </IconButton>
      </Toolbar>
    </AppBar>
  )
};

export default Header;