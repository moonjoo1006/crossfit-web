import React from "react";
import {Container} from "@material-ui/core";
import Header from "@src/component/layout/Header";
import Footer from "@src/component/layout/Footer"

const CrossfitMain = ({Component, pageProps}) => {
    return (
        <Container maxWidth="sm">
            <Header/>
            <main>
                <Component {...pageProps}/>
            </main>
            <Footer/>
        </Container>
    )
}

export default CrossfitMain