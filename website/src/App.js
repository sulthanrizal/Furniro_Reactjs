import { Box, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import router from './router';
import DashboardContainer from './@components/dashboardContainer';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box className='app-container'>
          <DashboardContainer>
            <Routes>
              {
                router.map(({ path, element }) => {
                  return (
                    <Route path={path} element={element} />
                  )
                })
              }
            </Routes>
          </DashboardContainer>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
