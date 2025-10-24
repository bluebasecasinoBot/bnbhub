import { $, __g, __m, __p, __sC, __SYD, __u, __v, manage_mediaQuery, SYD_VAR, visualTree } from "./sydneyDom_v3.js"

import "./page1.js"
import "./style.js"
import "./variable.js"

__SYD.container = () =>{
    return $(
        "div",
        {
            style:`height:100vh;width:100vw;`
        },
        [
            __SYD.sub_container()
        ],
        {
            createState:{
                stateName:"container",
                state:{count:1}
            },
            legacyName:"container"
        }
    )
}

__SYD.sub_container = () =>{
    return $(
        "div",
        {
            style:`min-height:100vh;width:100vw;background:${" #0B0B0B "};font-family:font2; padding:15px;color:#000;`
        },
        [
            __SYD.p1(),
            $(
                "div",
                {
                    style:__sC["row-center"]({method:"add",style:{gap:"20px",width:"100%",height:"fit-content"}})
                },
                [
                    $(
                        "a",
                        {href:"https://x.com/bnbXhub"},
                        [
                            $(
                                "i",
                                {
                                    style:"height:30px;width:30px;font-size:30px;color:#fd9c00;",
                                    class:"fa-brands fa-x-twitter"
                                }
                            ),
                        ]
                    ),
                    $(
                        "a",
                        {href:"https://t.me/BNBHUB_BCS"},
                        [
                            $(
                                "i",
                                {
                                    style:"height:30px;width:30px;font-size:30px;color:#fd9c00;",
                                    class:"fa-brands fa-telegram"
                                }
                            ),
                        ]
                    ),
                    $(
                        "a",
                        {href:"#"},
                        [
                            $(
                                "i",
                                {
                                    style:"height:30px;width:30px;font-size:30px;color:#fd9c00;",
                                    class:"fa-solid fa-earth-europe"
                                }
                            )
                        ]
                    )
                ]
            )
        ],
        {
            legacyName:"sub_container"
        }
    )
}

__m(__SYD.container() , ()=>{
    manage_mediaQuery(window.innerWidth);

});
