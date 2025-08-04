(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[39], {
    36748: (e, r, s) => {
        "use strict";
        s.d(r, {
            cn: () => i
        });
        var t = s(52596)
          , n = s(39688);
        function i() {
            for (var e = arguments.length, r = Array(e), s = 0; s < e; s++)
                r[s] = arguments[s];
            return (0,
            n.QP)((0,
            t.$)(r))
        }
    }
    ,
    72427: (e, r, s) => {
        Promise.resolve().then(s.bind(s, 96678))
    }
    ,
    96678: (e, r, s) => {
        "use strict";
        s.r(r),
        s.d(r, {
            default: () => d
        });
        var t = s(95155)
          , n = s(97168)
          , i = s(6874)
          , a = s.n(i);
        function d(e) {
            let {error: r, reset: s} = e;
            return (0,
            t.jsx)("div", {
                className: "absolute inset-0 grid place-content-center",
                children: (0,
                t.jsxs)("div", {
                    className: "p-4 border border-border rounded-xl max-w-sm",
                    children: [(0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("h1", {
                            className: "text-foreground font-medium text-base",
                            children: "An error occurred"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-muted-foreground text-sm",
                            children: r.message
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "pt-4 flex gap-2",
                        children: [(0,
                        t.jsx)(n.$, {
                            className: "rounded-full flex-1",
                            variant: "secondary",
                            asChild: !0,
                            children: (0,
                            t.jsx)(a(), {
                                href: "https://dev.hume.ai/",
                                target: "_blank",
                                children: "View Documentation"
                            })
                        }), (0,
                        t.jsx)(n.$, {
                            className: "rounded-full flex-1",
                            onClick: s,
                            children: "Try again"
                        })]
                    })]
                })
            })
        }
    }
    ,
    97168: (e, r, s) => {
        "use strict";
        s.d(r, {
            $: () => o
        });
        var t = s(95155);
        s(12115);
        var n = s(66634)
          , i = s(74466)
          , a = s(36748);
        let d = (0,
        i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
        function o(e) {
            let {className: r, variant: s, size: i, asChild: o=!1, ...c} = e
              , l = o ? n.DX : "button";
            return (0,
            t.jsx)(l, {
                "data-slot": "button",
                className: (0,
                a.cn)(d({
                    variant: s,
                    size: i,
                    className: r
                })),
                ...c
            })
        }
    }
}, e => {
    var r = r => e(e.s = r);
    e.O(0, [186, 874, 441, 684, 358], () => r(72427)),
    _N_E = e.O()
}
]);
