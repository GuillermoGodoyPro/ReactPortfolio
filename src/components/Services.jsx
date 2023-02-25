import '../App'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import React from 'react'



export const Services = () => {
  return (
    <div className="Services">
        <Card            
            sx={{ maxWidth: 250, height: 210,  }}
        
        >
            <CardActionArea>
                <CardMedia                
                    component="img"
                    height="210"                    
                    image={require ("../assets/CriptoConversor.png")}
                    alt="cripto"

                />
                
            </CardActionArea>
        </Card>

        <Card            
            sx={{ maxWidth: 250, height: 210 }}
        
        >
            <CardActionArea>
                <CardMedia                
                    component="img"
                    height="210"                    
                    image={require ("../assets/CriptoConversor.png")}
                    alt="cripto"

                />
                
            </CardActionArea>
        </Card>

    </div>
  )
}

/*
<CardActions
className="Services"
>
<Button
    variant="contained"
    
    startIcon={<Icon>
        room
        </Icon>}
    >
    Boton 
</Button>

</CardActions>
*/