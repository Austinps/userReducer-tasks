import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { TaskProvider } from './contexts/TaskContext';
import Layout from './components/Layout';
import theme from './theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TaskProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </TaskProvider>
    </ChakraProvider>
  </React.StrictMode>
);
