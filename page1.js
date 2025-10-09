import { $, __p, __sC, __SYD, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p1 = () =>{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;padding-top:150px;padding-bottom:20px;display:flex;justify-content:center;background-color:#1E1E1E;border-radius:20px;border:1px solid transparent;margin-bottom:50px;`+__sC["thinBorder"](),//#F3BA2F
            id:"p1"
        },
        [
            __SYD.p1SubHeader()
        ],{legacyName:"p1",genericStyle:["bg_cover"]}
    )
}

__SYD.p1SubHeader = () =>{
    return  $(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:30px;padding:0 ${__p(["p1SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p1SubHeader" , "breakVal"],false) ? "column-reverse" : "row"};justify-content:space-between;`
        },
        [
            $(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p1SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:30px;justify-content:center;`
                },
                [
                    __SYD.p1_mainHeader(),
                    __SYD.p1_subText(),
                    // __SYD.p1_CA_section()
                ]
            ),
            $(
                "div",
                {
                    style:`${__p(["p1SubHeader" , "breakVal"],false) ? "height:300px;width:300px" : "height:500px;width:500px"};display:flex;flex-direction:column;gap:20px;background-position:center 0;border-radius:0%;background-image:url(./assets/bnbhub.jpeg);border-radius:50%;`,
                    // class:"floatMainPic"
                },[
                    // $(
                    //     "canvas",{style:"height:100%;width:100%;background:transparent;"},[],{type:"waveCanvas"}
                    // )
                ],{genericStyle:['bg_cover']}
            )
        ],
        {
            legacyName:"p1SubHeader",
            createState:{
                stateName:"p1SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false}
            }
        }
    )
}

__SYD.p1_mainHeader = () =>{
    return $(
        "div",
        {
            style:`text-shadow:1px 1px 0px #fff,2px 2px 0px #fff,3px 3px 0px #fff,4px 4px 0px #fff;text-align:center;
            text-transform:uppercase;font-weight:900;font-size:${SYD_VAR.page1MainFont_1.get()};text-shadow:1px 1px #0B0B0B,2px 2px #0B0B0B,3px 3px #0B0B0B;color:#F3BA2F;font-family:font1;`
        },
        [
            // $("p" , {} , ["bnbbot"])
            
        ],
        {
            legacyName:"p1_mainHeader"
        }
    )
}

__SYD.p1_subText = () =>{
    return $(
        "div",
        {style:"width:100%;display:flex;justify-content:center;"},
        [
            $("p" , {style:SYD_VAR.pag1SubText.get() + "padding:10px;color: #FFFFFF ;background:#0B0B0B;border-radius:20px;border:2px solid #fd9c00;" , class:"target_div"},["Welcome to BNB Hub—the meme-fueled rocket ship where BNB meets PornHub energy! Stake hard, moon harder. No rug pulls, just wild pumps and community-driven chaos. Trade, laugh, and HODL the vibe. Join the hub, where every dip’s a meme and every bag’s a dream!"])
        ],
        {
            legacyName:"p1_subText"
        }
    )
}

__SYD.p1_CA_section = () =>{
    return $(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:600px;background:#16143a;padding:20px;border-radius:10px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;align-items:center;"
        },
        [
            $(
                "i",
                {
                    style:"min-height:40px;min-width:40px;font-size:20px;color:#fff;background: #8A63F7;border-radius:5px;display:flex;justify-content:center;align-items:center;",
                    class:"fa-solid fa-copy"
                }
            ),
            $(
                "div",
                {
                    style:`font-weight:900;font-size:${__p(["p1SubHeader" , "caTextSize"],"16px")};color:#fff;`
                },
                [
                    SYD_VAR.p1CAText.get()
                ],
                {
                    type:"c_a"
                }
            ),
            __SYD.CA_copyButton()
        ],
        {
            legacyName:"p1_CA_section"
        }
    )
}

__SYD.CA_copyButton = () =>{
    return $(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            $("p",{style:"font-weight:900;"},["copy"])
        ],
        {
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText(SYD_VAR.p1CAText.get())
                    __v['c_a'].textContent = 'Contract Address Copied'

                    const timer = setTimeout(() =>{
                    __v['c_a'].textContent = SYD_VAR.p1CAText.get()
                    clearTimeout(timer)
                    },1500)
                }
            },
            legacyName:"CA_copyButton"
        }
    )
}
