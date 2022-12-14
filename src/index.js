import React    from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router }        from 'react-router-dom';
import { ApolloProvider, createHttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache }    from '@apollo/client';
import { onError }     from 'apollo-link-error';
import { ApolloLink }  from 'apollo-link';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './App.css';
import './index.css';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});
const httpLink = createHttpLink({
  uri: 'https://bite2.inforkom.ru/graphql',
});
const link = ApolloLink.from([errorLink, httpLink]);
export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App /> 
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
