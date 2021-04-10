import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";
import 'bootstrap/dist/css/bootstrap.min.css';

Router.onRouteChangeStart = url => {
    console.log(url);
    Nprogress.start();
}

Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

export default function Nav() {

    return (
        <div>
            
            <Head>
                <title>My app</title>
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
            </Head>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/">
                    <a className="navbar-brand">Home</a>
                </Link>
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link href="/user/add">
                            <a className="nav-item nav-link">Add User <span className="sr-only">(current)</span></a>
                        </Link>
                        <Link href="/user">
                            <a className="nav-item nav-link">Users</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}