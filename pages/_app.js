import React from "react";
import App from "next/app";

class WrappedApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    console.log("App.getInitialProps");
    return {
      pageProps: {
        pathname: ctx.pathname,
      }
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        Wrapped {JSON.stringify(pageProps)}
        <Component {...pageProps} />
      </div>
    );
  }
}

export default WrappedApp;
