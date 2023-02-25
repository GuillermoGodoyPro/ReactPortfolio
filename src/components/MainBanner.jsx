import styled from '@emotion/styled'
import React from 'react'

const FirstTitle = styled.h2`
  text-align: center;
  font-size: 4em;
  margin: 0.93em ;
  text-shadow: -2px -2px 10px rgba(4,158,185,.877), 2px 2px 10px rgba(2,68,80,.76), 0 0 10px #08c5e6;

`
const SecTitle = styled.h3`
  text-align: center;
  font-size: 3em;
  margin: 1em ;
  opacity: 0.8 ;
`

export const MainBanner = () => {
  return (
    <div>
        <FirstTitle>Guillermo Godoy</FirstTitle>
        <SecTitle>System Analyst</SecTitle>               
    </div>
  )
}

/*

  <Button
    variant="contained"
    startIcon={<Icon>
        room
        </Icon>}
    >
    Boton como vos
  </Button>
*/ 