import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from '@emotion/styled';

const ContainerBlue = styled.div`
  background-color: darkblue ;
  padding: 1em ;
  margin-top: 12em;
  display: flex;  
  justify-content: space-between; 

  
`

export const SocialN = () => {
  return (
    <ContainerBlue>
        <InstagramIcon/>
        <InstagramIcon/>
        <InstagramIcon/>
        <InstagramIcon/>
    </ContainerBlue>
  )
}
