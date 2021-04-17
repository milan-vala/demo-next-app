import React, { Component } from "react";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";

// function MyApp({ Component, pageProps }) {

//   return (
//     // <Provider store={store}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     // </Provider>
//   )
// }

// export default MyApp

class App extends Component {
  
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return {pageProps: pageProps};
  }

  render() {
    const {Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

const makeStore = () => store;
export default withRedux(makeStore)(App);