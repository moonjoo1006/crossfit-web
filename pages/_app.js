import React from "react";
import Head from "next/head"
import {SWRConfig} from "swr";
import {RecoilRoot} from "recoil";
import {getApi} from "@src/api";
import CrossfitMain from "@src/component/CrossfitMain";

import "@src/css/h.css"

function CrossfitApp(props) {
    return (
        <>
            <Head>
                <title>크로스핏</title>
            </Head>
            <SWRConfig value={{fetcher: getApi}}>
                <RecoilRoot>
                    <CrossfitMain {...props}/>
                </RecoilRoot>
            </SWRConfig>
        </>
    )
}

export default CrossfitApp