import React, { useState } from "react";
import Layout from "../components/Layout";
import { createStore } from "redux";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {

  const [initialState, setInitialState] = useState(false);  

  const reducer = (state = initialState, action) => {
    
    switch(action.type) {
      case "USER_LOGIN":
        return { login: true };
      case "USER_LOGOUT":
        return { login: false };
    }
    return state;
  }

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
