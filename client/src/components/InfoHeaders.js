// import React from 'react'
import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    background: '#f44336',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginTop: 110,
    marginBottom:35,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Image = styled('img')({
    height: 34,
    width: '95px',
    '&:last-child': {
        margin: '0 50px 0 10px'
    }
})

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
  margin-left: 50px;
  font-family: 'Roboto',sans-serif;
`;

const InfoHeaders = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
            <Text position="static">
                For the best experience use inshorts app on your smartphone
            </Text>
            <Box style={{ display: 'flex', marginLeft: 'auto' }}>
                <Image src={appleStore} alt='appleStore' />
                <Image src={googleStore} alt='googleStore' />
            </Box>
        </Container>
    )
}

export default InfoHeaders;
