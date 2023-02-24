import { Button, Icon } from '@mui/material'
import React from 'react'

export const MainBanner = () => {
  return (
    <div>
        <h2>Guillermo Godoy</h2>
        <h3>System Analyst</h3>

        <Button
        variant="contained"
        startIcon={<Icon>
            room
            </Icon>}
        >
        Boton como vos
        </Button>
    </div>
  )
}
