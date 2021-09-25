import React from 'react';
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
import search from '../../images/icons/search.svg'
import cart from '../../images/icons/cart.svg'
import account from '../../images/icons/account-header.svg'

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

}));

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1"><span className={classes.logoText}>Var</span> X</Typography>
        </Button>
        <Tabs value={0} classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}>
          <Tab label="Hats"></Tab>
          <Tab label="Hoodies"></Tab>
          <Tab label="Shirts"></Tab>
          <Tab label="Contact Us"></Tab>
        </Tabs>
        <IconButton>
          <img src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img src={cart} alt="cart" />
        </IconButton>
        <IconButton>
          <img src={account} alt="account" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
};

export default Header;