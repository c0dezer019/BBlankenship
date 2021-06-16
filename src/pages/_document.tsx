import Document, {DocumentContext} from 'next/document'

class MyDocument extends Document {
   static getInitialProps(ctx: DocumentContext) {
      const originalRenderPage = ctx.renderPage

      ctx.renderPage = () =>
         originalRenderPage({
            // useful for wrapping the whole react tree
            enhanceApp: (App) => App,
            // useful for wrapping in a per-page basis
            enhanceComponent: (Component) => Component,
         })

      // const initialProps = await Document.getInitialProps(ctx)

      return Document.getInitialProps(ctx)
   }
}

export default MyDocument
