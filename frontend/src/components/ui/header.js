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
} from '@material-ui/core/';
import { Link } from 'gatsby';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
  logoContainer: {
    [theme.breakpoints.down('md')]: {
      marginRight: 'auto'
    }
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 600,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  icon: {
    height: '4rem',
    width: '4rem'
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: "#fff",
  }
}));

const Header = ({ categories }) => {
  const classes = useStyles()
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false)

  const iOS = process.browser && /iPad|iPhone|iPad/.test(navigator.userAgent);

  const activeIndex = () => {
    const found = routes.indexOf(
      routes
        .filter(({ node: { name, link } }) =>
          (link || `/${name.toLowerCase()}`) === window.location.pathname)[0]
    )
    return found === -1 ? false : found
  }

  const routes = [
    ...categories,
    {
      node:
      {
        name: "Contact Us",
        strapiId: "Contact",
        link: '/contact'
      }
    }
  ]

  const tabs = (
        <Tabs value={activeIndex()} classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}>
          {routes.map(route => (
            <Tab
              component={Link} to={route.node.link || `/${route.node.name.toLowerCase()}`}
              classes={{root: classes.tab}}
              label={route.node.name} key={route.node.strapiId}
            />
          ))}
        </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      classes={{paper: classes.drawer }}
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      disableBackdropTransition={!iOS} disableDiscovery={iOS}
    >
      <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              selected = {activeIndex() === index}
              component = {Link} to={route.node.link || `/${route.node.name.toLowerCase()}`}
              divider button key={route.node.strapiId}>
              <ListItemText
                classes={{primary: classes.listItemText}}
                primary={route.node.name} />
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  )

  const actions = [
    { icon: search, alt: 'search', visible: true, onClick : ()=>console.log('Search')},
    { icon: cart, alt: 'cart', visible: true, link: '/cart' },
    { icon: account, alt: 'account', visible: !matchesMD, link: '/account' },
    { icon: menu, alt: 'menu', visible: matchesMD, onClick: () => setDrawerOpen(true)}
  ]

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button
          component={Link} to={"/"}
          classes={{ root: classes.logoContainer }}>
          <Typography variant="h1">
            <span className={classes.logoText}>Var</span> X
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        {actions.map(action => {
          if (action.visible) {
            return (
              <IconButton
                key={action.alt}
                onClick={action.onClick}
                component={action.onClick ? undefined : Link}
                to={action.onClick ? undefined : action.link}
                classes={{ root: classes.icon }}
              >
                <img
                  src={action.icon}
                  alt={action.alt}
                />
              </IconButton>
            )
          }
        })}
      </Toolbar>
    </AppBar>
  )
};

export default Header;