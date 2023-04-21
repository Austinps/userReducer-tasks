import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ActiveListProvider } from './contexts/activeListContext';
import { TaskProvider } from './contexts/TaskContext';
import Layout from './components/Layout';
import App from './App';
import theme from './style/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActiveListProvider>
      <TaskProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <App />
            </Layout>
          </BrowserRouter>
        </ChakraProvider>
      </TaskProvider>
    </ActiveListProvider>
  </React.StrictMode>
);
