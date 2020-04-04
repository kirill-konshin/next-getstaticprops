import React from "react";
import App from "next/app";

class WrappedApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    console.log("App.getInitialProps");
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        Wrapped.
        <Component {...pageProps} />
      </div>
    );
  }
}

export default WrappedApp;
