import React from 'react'
import { Card, CardActionArea, CardMedia} from '@mui/material'
import styled from '@emotion/styled'


const Container = styled.div`
    margin: 0 auto;
    display: flex;   
    background-color: #8169ec;
    
    
`
  
export const Services = () => {


    return (
        <Container>
            <Card 
                sx={{ maxWidth: 250, height: 210, marginRight:2 }}        
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