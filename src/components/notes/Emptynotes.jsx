import React from 'react'
import { LightbulbOutlined as Lightbulb } from '@mui/icons-material'
import { Box,  Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Light = styled(Lightbulb)`
    font-size:120px;
    color: #dad9d9;

`
const Text = styled(Typography)`
    color: #80868b;
    font-size:22px;
`
const Container = styled(Box)`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-top:20vh;
`

const Emptynotes = () => {
    return (
        <>
            <Container className='emptybox'>
                <Light />
                <Text className='emptytext'>
                    Notes you add appear here...
                </Text>
            </Container>
        </>
    )
}

export default Emptynotes
