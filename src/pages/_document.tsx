import React, { ReactElement } from 'react'
import Document, { DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='modal-portal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}
