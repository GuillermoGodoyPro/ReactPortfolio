import React from 'react'
import { Card, CardActionArea, CardMedia} from '@mui/material'
import styled from '@emotion/styled'


const Container = styled.div`
    margin: 0 auto;
    display: flex;      
`
  
export const Services = () => {


    return (
        <Container>
            <Card 
                sx={{ maxWidth: '13em', height: '13em', marginRight:2, opacity: 0.7 }}        
            >
                <CardActionArea>
                    <CardMedia                
                        component="img"
                        height="210em"                    
                        image={require ("../assets/CriptoConversor.png")}
                        alt="cripto"

                    />                    
                </CardActionArea>
            </Card>

            <Card            
                sx={{ maxWidth: '13em', height: '13em', marginRight:2, opacity: 0.7 }}            
            >
                <CardActionArea>
                    <CardMedia                
                        component="img"
                        height="210"                    
                        image={require ("../assets/AdaWines.png")}
                        alt="cripto"                       

                    />
                    
                </CardActionArea>
            </Card>
            
            <Card            
                sx={{ maxWidth: '13em', height: '13em', opacity: 0.7 }}            
            >
                <CardActionArea>
                    <CardMedia                
                        component="img"
                        height="210"                    
                        image={require ("../assets/climareact.png")}
                        alt="cripto"
                        

                    />
                    
                </CardActionArea>
            </Card>
           

        </Container>
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