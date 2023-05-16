import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import reportWebVitals from './reportWebVitals';
import apolloClient from "./apollo";
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import Router from './Router';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
  </ApolloProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
