import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ActiveListProvider } from './contexts/activeListContext';
import { TaskProvider } from './contexts/TaskContext';
import Layout from './components/Layout';
import App from './App';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ActiveListProvider>
        <TaskProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <BrowserRouter>
            <Layout>
              <App />
            </Layout>
          </BrowserRouter>
        </TaskProvider>
      </ActiveListProvider>
    </ChakraProvider>
  </React.StrictMode>
);
