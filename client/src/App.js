// import './App.css';
import { Box, styled } from '@mui/material';

// components 
import Hearder from './components/Hearder';
import InfoHeaders from './components/InfoHeaders';
import Articles from './components/Articles';

const Container = styled(Box)(({ theme }) => ({
  width: '69%',
  margin: '40px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));

function App() {
  return (
    <Box>
      <Hearder />
      <Container>
        <InfoHeaders />
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
