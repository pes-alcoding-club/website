import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Editorials</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"></link>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <div>
            {props.children}
        </div>        
    </div>
);

export default Layout;