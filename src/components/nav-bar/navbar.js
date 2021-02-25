import React from 'react';
import NumberFormat from 'react-number-format';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import { useCart } from '../../providers/context';
import { Home } from '@material-ui/icons';
import Button from "@material-ui/core/Button";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Cart from '../cart/cart';
import Products from '../list-products/products';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  
const useStyles = makeStyles((theme) => ({ 
    root: { 
      flexGrow: 1, 
    }, 
    menuButton: { 
      marginRight: theme.spacing(2), 
    }, 
      
    title: { 
      flexGrow: 1, 
      display: 'none', 
      [ 
        theme.breakpoints.up('sm')]: { 
          display: 'block', 
      }, 
    },
    spacingRigth: { 
        marginRight: theme.spacing(2), 
    }, 
       
  })); 
  
const Navbar = ()=>{
    const classes = useStyles();
    const {count, total} = useCart();
  
    
    return(
        
        <Router>
                 
            <div className={classes.root}> 
                <AppBar position="static">
                    <Toolbar>
                        <Link to="/">   
                            <IconButton edge="start" color="inherit" aria-label="home">
                                <Home fontSize="large" />
                            </IconButton>
                        </Link>
                        <Typography className={classes.title} variant="h6" noWrap> 
                            Teste - Carrinho de compras
                        </Typography>
                        <Link to="/cart">   
                            <IconButton className={classes.spacingRigth} aria-label="cart">
                                <StyledBadge badgeContent={count} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$R.'} />
                        
                    </Toolbar>
                </AppBar>
                <Switch>
                <Route path="/cart">
                    <Cart />
                </Route>
                
                <Route path="/">
                    <Products />
                </Route>
                
                </Switch>
            </div>

            
        </Router>
    )
}

export default Navbar;