(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[177], {
    15851: (e, s, r) => {
        "use strict";
        r.d(s, {
            Toaster: () => i
        });
        var n = r(95155)
          , a = r(51362)
          , t = r(56671);
        let i = e => {
            let {...s} = e
              , {theme: r="light"} = (0,
            a.D)();
            return (0,
            n.jsx)(t.l$, {
                theme: r,
                className: "toaster group",
                style: {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)"
                },
                ...s
            })
        }
    }
    ,
    19324: () => {}
    ,
    26458: (e, s, r) => {
        Promise.resolve().then(r.t.bind(r, 19324, 23)),
        Promise.resolve().then(r.bind(r, 93310)),
        Promise.resolve().then(r.bind(r, 29169)),
        Promise.resolve().then(r.bind(r, 87353)),
        Promise.resolve().then(r.bind(r, 15851)),
        Promise.resolve().then(r.bind(r, 44951)),
        Promise.resolve().then(r.t.bind(r, 69243, 23)),
        Promise.resolve().then(r.t.bind(r, 29412, 23)),
        Promise.resolve().then(r.t.bind(r, 85700, 23))
    }
    ,
    29169: (e, s, r) => {
        "use strict";
        r.d(s, {
            default: () => o
        });
        var n = r(95155)
          , a = r(12115)
          , t = r(97168)
          , i = r(32650)
          , l = r(56671)
          , d = r(36748);
        function o() {
            let e = "51iQqhXi4xPanb2PCSzzu7w94nUz1jvV2wAYw4rHPREV"
              , [s,r] = (0,
            a.useState)(!1)
              , o = async () => {
                try {
                    await navigator.clipboard.writeText(e),
                    r(!0),
                    l.oR.success("Contract address copied to clipboard!"),
                    setTimeout( () => r(!1), 2e3)
                } catch (e) {
                    l.oR.error("Failed to copy address."),
                    console.error("Failed to copy: ", e)
                }
            }
            ;
            return (0,
            n.jsx)("div", {
                className: (0,
                d.cn)("fixed top-0 left-0 w-full text-white text-xs md:text-sm p-2 z-[70]", "flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2", "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"),
                children: (0,
                n.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [(0,
                    n.jsxs)("span", {
                        children: ["Contract Address: ", e]
                    }), (0,
                    n.jsxs)(t.$, {
                        onClick: o,
                        variant: "ghost",
                        size: "sm",
                        className: "text-white hover:bg-white/white/20",
                        children: [(0,
                        n.jsx)(i.A, {
                            className: "size-3 md:size-4"
                        }), (0,
                        n.jsx)("span", {
                            className: "sr-only",
                            children: s ? "Copied!" : "Copy address"
                        })]
                    })]
                })
            })
        }
    }
    ,
    36748: (e, s, r) => {
        "use strict";
        r.d(s, {
            cn: () => t
        });
        var n = r(52596)
          , a = r(39688);
        function t() {
            for (var e = arguments.length, s = Array(e), r = 0; r < e; r++)
                s[r] = arguments[r];
            return (0,
            a.QP)((0,
            n.$)(s))
        }
    }
    ,
    44951: (e, s, r) => {
        "use strict";
        r.d(s, {
            default: () => m
        });
        var n = r(95155)
          , a = r(12115)
          , t = r(4119)
          , i = r(45794)
          , l = r(59021)
          , d = r(48087)
          , o = r(46994)
          , c = r(35699);
        r(23570);
        var h = r(56671);
        function m(e) {
            let {children: s} = e
              , r = l.B.Mainnet
              , m = (0,
            a.useMemo)( () => "https://mainnet.helius-rpc.com/?api-key=23a7a7a3-85a3-4e32-bb14-692756b07bc7", [r])
              , u = (0,
            a.useMemo)( () => [new d.c, new o.d], []);
            return (0,
            n.jsx)(t.S, {
                endpoint: m,
                children: (0,
                n.jsx)(i.r, {
                    wallets: u,
                    autoConnect: !1,
                    onError: e => {
                        console.error("Wallet adapter error:", e),
                        h.oR.error("Wallet error: ".concat(e.message || "An unknown error occurred."))
                    }
                    ,
                    children: (0,
                    n.jsx)(c.I, {
                        children: s
                    })
                })
            })
        }
        r(23669)
    }
    ,
    47790: () => {}
    ,
    87353: (e, s, r) => {
        "use strict";
        r.d(s, {
            ThemeProvider: () => t
        });
        var n = r(95155);
        r(12115);
        var a = r(51362);
        function t(e) {
            let {children: s, ...r} = e;
            return (0,
            n.jsx)(a.N, {
                ...r,
                children: s
            })
        }
    }
    ,
    93310: (e, s, r) => {
        "use strict";
        r.d(s, {
            Nav: () => g
        });
        var n = r(95155)
          , a = r(97168)
          , t = r(18175)
          , i = r(12486)
          , l = r(55868)
          , d = r(57434)
          , o = r(62098)
          , c = r(93509)
          , h = r(51362)
          , m = r(66766)
          , u = r(11392)
          , p = r(12115)
          , x = r(6874)
          , v = r.n(x);
        let g = () => {
            let {theme: e, setTheme: s} = (0,
            h.D)()
              , {connected: r, connecting: x, wallet: g, select: f, disconnect: b} = (0,
            u.v)();
            return (0,
            p.useEffect)( () => {
                console.log("Wallet state changed:", {
                    connected: r,
                    connecting: x,
                    wallet: null == g ? void 0 : g.adapter.name
                })
            }
            , [r, x, g]),
            (0,
            n.jsxs)("div", {
                className: "fixed top-[50px] left-0 w-full px-4 py-2 flex items-center justify-between h-14 z-50",
                children: [(0,
                n.jsx)(v(), {
                    href: "/",
                    className: "flex items-center",
                    children: (0,
                    n.jsx)(m.default, {
                        src: "/images/alpha-logo.png",
                        alt: "Alpha Intelligence Logo",
                        width: 50,
                        height: 50,
                        className: "h-12 w-12"
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-1 justify-end",
                    children: [" ", (0,
                    n.jsxs)(a.$, {
                        onClick: () => {
                            window.open("https://x.com/AlphaAiSolana", "_blank", "noopener noreferrer")
                        }
                        ,
                        variant: "ghost",
                        size: "sm",
                        className: "flex items-center gap-1.5 rounded-full md:size-default",
                        children: [(0,
                        n.jsx)("span", {
                            children: (0,
                            n.jsx)(t.A, {
                                className: "size-4"
                            })
                        }), (0,
                        n.jsx)("span", {
                            className: "hidden md:inline",
                            children: "Twitter"
                        }), " "]
                    }), (0,
                    n.jsxs)(a.$, {
                        onClick: () => {
                            window.open("https://t.me/AlphaAiSOL", "_blank", "noopener noreferrer")
                        }
                        ,
                        variant: "ghost",
                        size: "sm",
                        className: "flex items-center gap-1.5 rounded-full md:size-default",
                        children: [(0,
                        n.jsx)("span", {
                            children: (0,
                            n.jsx)(i.A, {
                                className: "size-4"
                            })
                        }), (0,
                        n.jsx)("span", {
                            className: "hidden md:inline",
                            children: "Telegram"
                        }), " "]
                    }), (0,
                    n.jsxs)(a.$, {
                        onClick: () => {
                            window.open("https://dexscreener.com/solana/5cwpvhjdgmzzfcyanx2ogkahbtbihqxnubcge1xmvbwm", "_blank", "noopener noreferrer")
                        }
                        ,
                        variant: "ghost",
                        size: "sm",
                        className: "flex items-center gap-1.5 rounded-full md:size-default",
                        children: [(0,
                        n.jsx)("span", {
                            children: (0,
                            n.jsx)(l.A, {
                                className: "size-4"
                            })
                        }), (0,
                        n.jsx)("span", {
                            className: "hidden md:inline",
                            children: "Buy Tokens"
                        }), " "]
                    }), (0,
                    n.jsx)(a.$, {
                        asChild: !0,
                        variant: "ghost",
                        size: "sm",
                        className: "flex items-center gap-1.5 rounded-full md:size-default",
                        children: (0,
                        n.jsxs)(v(), {
                            href: "/whitepaper",
                            children: [(0,
                            n.jsx)("span", {
                                children: (0,
                                n.jsx)(d.A, {
                                    className: "size-4"
                                })
                            }), (0,
                            n.jsx)("span", {
                                className: "hidden md:inline",
                                children: "Whitepaper"
                            }), " "]
                        })
                    }), (0,
                    n.jsxs)(a.$, {
                        onClick: () => s("dark" === e ? "light" : "dark"),
                        variant: "ghost",
                        size: "sm",
                        className: "flex items-center gap-1.5 rounded-full md:size-default",
                        children: [(0,
                        n.jsx)("span", {
                            children: "dark" === e ? (0,
                            n.jsx)(o.A, {
                                className: "size-4"
                            }) : (0,
                            n.jsx)(c.A, {
                                className: "size-4"
                            })
                        }), (0,
                        n.jsxs)("span", {
                            className: "hidden md:inline",
                            children: ["dark" === e ? "Light" : "Dark", " Mode"]
                        }), " "]
                    })]
                })]
            })
        }
    }
    ,
    97168: (e, s, r) => {
        "use strict";
        r.d(s, {
            $: () => d
        });
        var n = r(95155);
        r(12115);
        var a = r(66634)
          , t = r(74466)
          , i = r(36748);
        let l = (0,
        t.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                    destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                    outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                    secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-9 px-4 py-2 has-[>svg]:px-3",
                    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                    icon: "size-9"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        });
        function d(e) {
            let {className: s, variant: r, size: t, asChild: d=!1, ...o} = e
              , c = d ? a.DX : "button";
            return (0,
            n.jsx)(c, {
                "data-slot": "button",
                className: (0,
                i.cn)(l({
                    variant: r,
                    size: t,
                    className: s
                })),
                ...o
            })
        }
    }
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [533, 680, 956, 186, 547, 874, 169, 441, 684, 358], () => s(26458)),
    _N_E = e.O()
}
]);
