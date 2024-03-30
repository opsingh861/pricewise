import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Google Tag Manager */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-WX7WK2Q5K4"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-WX7WK2Q5K4');
              `,
                        }}
                    />
                    {/* End Google Tag Manager */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
