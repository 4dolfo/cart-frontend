
import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import { useCart } from '../../providers/context';
import { getProducts } from '../../services/product.service.';

const Products = () => {
  const {add} = useCart();
  
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getProducts()
      .then(products => {
        console.log(products)
        if(mounted) {
          setList(products)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div>
        <Grid container spacing={7}>
                      
                {list.map(item=> ( 
                        <Grid item xs={3} key={item.id}>
                            <Paper >
                            <img src={item.picture} width="150px" height="200px"></img>
                            <p>{item.brand}</p>
                            <p>Preço : <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </p>
                              
                              <Button variant="contained" onClick={()=>add(item)}>Comprar</Button>
                              
                            </Paper>
                        </Grid>
                       
                ))}
            </Grid>
            </div>
  );
}

export default Products;
