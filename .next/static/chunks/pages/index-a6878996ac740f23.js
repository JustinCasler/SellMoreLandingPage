(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(419);
        },
      ]);
    },
    419: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return A;
          },
        });
      var l = t(5893),
        r = t(7294),
        a = t(7851);
      let n = (e) => {
          let { grayer: s = !1, ...t } = e;
          return (0, l.jsx)("div", {
            ...t,
            className: (0, a.m)(
              "relative shadow-xl flex-1 border border-gray-300 rounded-lg dark:border-gray-600 ".concat(
                s ? "bg-strong" : "bg-extra-strong",
              ),
              e.className,
            ),
          });
        },
        i = (e) => {
          let {
            webmSrc: s,
            mp4Src: t,
            alt: r,
            roundedCorners: n = !0,
            scaleDown: i = !1,
            ...o
          } = e;
          return (0, l.jsx)("div", {
            ...o,
            className: (0, a.m)(
              "relative col w-full justify-center max-w-2xl overflow-hidden shadow-lg",
              i ? "transform scale-75" : "",
              n ? "rounded-2xl" : "",
              o.className,
            ),
            style: { transformOrigin: "center" },
            children:
              s &&
              t &&
              (0, l.jsxs)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                "aria-label": r,
                tabIndex: -1,
                className: (0, a.m)("object-cover h-full w-full"),
                children: [
                  (0, l.jsx)("source", { src: t, type: "video/mp4" }),
                  (0, l.jsx)("source", { src: s, type: "video/webm" }),
                ],
              }),
          });
        },
        o = (e) =>
          (0, l.jsx)("div", {
            ...e,
            "data-aos": "zoom-y-out",
            "data-aos-delay": "150",
            className: (0, a.m)("body-lg text-light", e.className),
          }),
        c = (e) => {
          let { grayer: s, fullWidth: t, ...r } = e;
          return (0, l.jsx)("section", {
            className: "relative overflow-hidden ".concat(
              s ? "bg-strong" : "bg-extra-strong",
            ),
            children: (0, l.jsx)("div", {
              ...r,
              className: (0, a.m)(
                "relative z-20 py-24 mx-auto col max-w-7xl ".concat(
                  t ? "px-0" : "px-12",
                ),
                e.className,
              ),
            }),
          });
        },
        d = (e) => {
          let { size: s, className: t = "", ...r } = e,
            n = { ...r, "data-aos": "zoom-y-out" };
          return "lg" === s
            ? (0, l.jsx)("h1", {
                ...n,
                className: (0, a.m)(
                  "font-bold leading-tight tracking-tighter title-lg",
                  t,
                ),
              })
            : "md" === s
              ? (0, l.jsx)("h2", {
                  ...n,
                  className: (0, a.m)(
                    "font-bold leading-tight tracking-tighter title-md",
                    t,
                  ),
                })
              : (0, l.jsx)("h3", {
                  ...n,
                  className: (0, a.m)(
                    "leading-tight tracking-tighter title-xs",
                    t,
                  ),
                });
        },
        x = () =>
          (0, l.jsxs)("div", {
            className: "w-32 h-32",
            children: [
              " ",
              (0, l.jsxs)("svg", {
                id: "Layer_1",
                "data-name": "Layer 1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 146.7 98.65",
                className: "w-full h-full",
                children: [
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("style", {
                      children:
                        "\n            .cls-2 {\n              stroke-dasharray: 0 0 12.07 6.03;\n            }\n            .cls-2, .cls-3 {\n              fill: none;\n              stroke-miterlimit: 10;\n              stroke-width: 1px;\n            }\n          ",
                    }),
                  }),
                  (0, l.jsx)("path", {
                    className: "cls-3 stroke-current",
                    d: "m4.01.13s-.96,1.52-1.92,5.66",
                  }),
                  (0, l.jsx)("path", {
                    className: "cls-2 stroke-current",
                    d: "m1.07,11.74c-.56,4.39-.93,10.25-.79,17.96.15,8.26.94,38.89,29.69,39.32s27.75-38.46,12.8-33.18c-14.95,5.28-14.41,26.31,20.51,18.58,34.92-7.72,67.32-27.66,79.13-5.03s-15.86,32.67-31.33,32.5c-19.55-.22-31.76-26.61-45.49-15.02-9.93,8.38-2.36,15.19,2.01,22.7",
                  }),
                  (0, l.jsx)("path", {
                    className: "cls-3 stroke-current",
                    d: "m68.98,92.27c.81,1.88,1.28,3.81,1.12,5.84",
                  }),
                  (0, l.jsx)("polygon", {
                    className: "cls-1 fill-current",
                    points:
                      "68.08 96.38 68.46 96.05 70.07 97.91 71.81 96.17 72.17 96.52 70.05 98.65 68.08 96.38",
                  }),
                ],
              }),
            ],
          }),
        m = (e) => {
          let { children: s } = e;
          return (0, l.jsx)("h3", {
            className: "text-xl font-bold text-strong text-neon-amber",
            children: s,
          });
        },
        h = (e) => {
          let { children: s } = e;
          return (0, l.jsx)("p", { className: "text-light", children: s });
        },
        u = (e) => {
          let { children: s } = e;
          return (0, l.jsx)(n, {
            grayer: !0,
            className: "items-center gap-1 p-6 col",
            children: s,
          });
        },
        p = (e) => {
          let { children: s, grayer: t, right: r, center: a } = e;
          return (0, l.jsx)(c, {
            grayer: t,
            fullWidth: !0,
            className: "flex col items-center ".concat(
              a ? "text-center" : r ? "md:flex-row-reverse" : "md:flex-row",
            ),
            children: s,
          });
        },
        g = (e) => {
          let {
            webmSrc: s,
            mp4Src: t,
            bumpLeft: r,
            center: a,
            alt: n,
            className: o,
            ...c
          } = e;
          return (0, l.jsx)(i, {
            "data-aos": "".concat(
              a ? "zoom-y-out" : r ? "fade-right" : "fade-left",
            ),
            "data-aos-delay": "300",
            webmSrc: s,
            mp4Src: t,
            alt: n,
            roundedCorners: !1,
            scaleDown: !0,
          });
        },
        j = (e) => {
          let { children: s, center: t } = e;
          return (0, l.jsx)("div", {
            className: "w-5/6 col gap-4 text-center mb-8 mx-auto ".concat(
              t ? "md:w-2/3" : "md:w-2/5 md:text-left md:my-auto",
            ),
            children: s,
          });
        },
        w = () =>
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(p, {
                grayer: !0,
                center: !0,
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "bg-neon-pink text-white p-24 rounded-lg mx-auto",
                    children: [
                      (0, l.jsxs)("ul", {
                        className: "list-none space-y-4",
                        children: [
                          (0, l.jsxs)("li", {
                            children: [
                              "- ",
                              (0, l.jsx)("span", {
                                className: "text-neon-blue font-bold",
                                children: "Days",
                              }),
                              " spent brainstorming ✅",
                            ],
                          }),
                          (0, l.jsxs)("li", {
                            children: [
                              "- ",
                              (0, l.jsx)("span", {
                                className: "text-neon-blue font-bold",
                                children: "Weeks",
                              }),
                              " getting your design just right ✅",
                            ],
                          }),
                          (0, l.jsxs)("li", {
                            children: [
                              "- ",
                              (0, l.jsx)("span", {
                                className: "text-neon-blue font-bold",
                                children: "Months",
                              }),
                              " building your product ✅",
                            ],
                          }),
                          (0, l.jsxs)("li", {
                            children: [
                              "- ",
                              (0, l.jsx)("span", {
                                className: "text-neon-blue font-bold",
                                children: "Headaches",
                              }),
                              " figuring out your brand ✅",
                            ],
                          }),
                          (0, l.jsxs)("li", {
                            children: [
                              "- ",
                              (0, l.jsx)("span", {
                                className: "text-neon-blue font-bold",
                                children: "Money",
                              }),
                              " spent on advertising ✅",
                            ],
                          }),
                          (0, l.jsxs)("li", {
                            children: [
                              "- ",
                              (0, l.jsx)("span", {
                                className: "text-neon-blue font-bold",
                                children: "Time",
                              }),
                              " sacrificed to build your company ✅",
                            ],
                          }),
                          (0, l.jsxs)("li", {
                            children: [
                              "- ",
                              (0, l.jsx)("span", {
                                className: "text-neon-blue font-bold",
                                children: "Investments",
                              }),
                              " into growth and sales ✅",
                            ],
                          }),
                          (0, l.jsxs)("li", {
                            children: [
                              "- ",
                              (0, l.jsx)("span", {
                                className: "text-neon-blue font-bold",
                                children: "Customers",
                              }),
                              " make purchases ❌",
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("p", {
                        className: "mt-4 text-center text-md font-bold",
                        children:
                          "You invested too much to not get your rewards",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("p", {
                    className:
                      "mt-12 text-center text-lg text-neon-amber font-bold",
                    children: [
                      "We've Been There. Here's our solution",
                      (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-4 h-4 inline-block ml-2",
                        children: (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z",
                          fill: "currentColor",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)(p, {
                grayer: !0,
                center: !0,
                children: [
                  (0, l.jsxs)(j, {
                    center: !0,
                    children: [
                      (0, l.jsxs)(d, {
                        size: "md",
                        children: [
                          "Remind Your Customer Why They",
                          (0, l.jsx)("span", {
                            className: "bg-neon-amber italic px-1 ml-1 mr-1",
                            style: { lineHeight: "1.2" },
                            children: "NEED",
                          }),
                          "You.",
                        ],
                      }),
                      (0, l.jsx)(o, {
                        children:
                          "Popup's are your way to talk to your customers. Show your value, show your trusted. Make your product a nescessity",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-12 grid items-start gap-6 lg:grid-cols-3",
                    children: [
                      (0, l.jsxs)(u, {
                        children: [
                          (0, l.jsx)(m, { children: "Social Proof" }),
                          (0, l.jsx)(h, {
                            children:
                              "Increase conversion rates by 15% on average",
                          }),
                          (0, l.jsx)("div", {
                            className: "relative mt-4",
                            children: (0, l.jsx)("img", {
                              src: "/images/TrustPopup.png",
                              alt: "Vivid Logo",
                              className: "w-full h-auto rounded-lg shadow-xl",
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)(u, {
                        children: [
                          (0, l.jsx)(m, { children: "Reviews" }),
                          (0, l.jsx)(h, {
                            children: "Build trust by displaying reviews",
                          }),
                          (0, l.jsx)("div", {
                            className: "relative mt-4",
                            children: (0, l.jsx)("img", {
                              src: "/images/ReviewPopup.png",
                              alt: "Vivid Logo",
                              className: "w-full h-auto rounded-lg shadow-xl",
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)(u, {
                        children: [
                          (0, l.jsx)(m, { children: "New Product Notifs" }),
                          (0, l.jsx)(h, {
                            children:
                              "Highlight and direct traffic to new products",
                          }),
                          (0, l.jsx)("div", {
                            className: "relative mt-4",
                            children: (0, l.jsx)("img", {
                              src: "/images/SalePopup.png",
                              alt: "Vivid Logo",
                              className: "w-full h-auto rounded-lg shadow-xl",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)(p, {
                children: [
                  (0, l.jsxs)(j, {
                    children: [
                      (0, l.jsx)(d, {
                        size: "md",
                        children: (0, l.jsx)("span", {
                          className: "text-neon-pink",
                          children: "Set it up in seconds",
                        }),
                      }),
                      (0, l.jsxs)(o, {
                        children: [
                          "No coding needed",
                          (0, l.jsxs)("ul", {
                            className: "list-disc pl-5 mt-2",
                            children: [
                              (0, l.jsx)("li", {
                                children:
                                  "Choose custom text, images, color and more.",
                              }),
                              (0, l.jsx)("li", {
                                children: "Copy and paste our script",
                              }),
                              (0, l.jsx)("li", { children: "Your done!" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-col items-center w-1/2 p-4",
                    children: [
                      (0, l.jsx)(g, {
                        webmSrc: "/videos/terminal.webm",
                        mp4Src: "/videos/terminal.mp4",
                        className: "green-sky",
                        alt: "A video showing Vivid's smart command functionality. By typing smart-center, the user centers all content on screen.",
                        roundedCorners: !1,
                        scaleDown: !0,
                      }),
                      (0, l.jsx)(x, {}),
                      (0, l.jsx)("div", {
                        className: "mt-10 text-center text-lg font-bold",
                        children: "Command C + Command V",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      var f = t(5675),
        b = t.n(f);
      let v = (e) => {
          let { button: s, className: t = "", ...r } = e;
          return s
            ? (0, l.jsx)("button", {
                type: "button",
                ...r,
                className: (0, a.m)(
                  "text-light hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5",
                  t,
                ),
              })
            : (0, l.jsx)("a", {
                ...r,
                className: (0, a.m)(
                  "text-light hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5",
                  t,
                ),
              });
        },
        N = () =>
          (0, l.jsx)("footer", {
            className: "bg-extra-strong",
            children: (0, l.jsxs)("div", {
              className:
                "items-center justify-between px-10 py-4 mx-auto sm:px-6 row max-w-7xl",
              children: [
                (0, l.jsxs)("div", {
                  className: "items-center gap-4 row",
                  children: [
                    (0, l.jsx)(b(), {
                      src: "/images/logo.png",
                      alt: "Vivid Logo",
                      height: "40",
                      width: "40",
                    }),
                    (0, l.jsx)("div", {
                      className: "text-sm text-light",
                      children: "\xa9 Vivid Labs, Inc. 2022",
                    }),
                  ],
                }),
                (0, l.jsx)(v, {
                  href: "https://join.slack.com/t/vivid-jqa6824/shared_invite/zt-1f7tbxl86-wruO1aM7FYmEdNaOOnYCMQ",
                  "aria-label": "Join Slack",
                  children: "Join our Slack!",
                }),
              ],
            }),
          });
      var y = t(1664),
        k = t.n(y),
        C = t(9661);
      let S = () =>
          (0, l.jsxs)("svg", {
            id: "theme-toggle-dark-icon",
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, l.jsx)("title", { children: "Moon icon" }),
              (0, l.jsx)("path", {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z",
              }),
            ],
          }),
        z = () =>
          (0, l.jsxs)("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, l.jsx)("title", { children: "Sun icon" }),
              (0, l.jsx)("path", {
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }),
            ],
          }),
        M = "https://sell-more-3hpd02pjy-justincaslers-projects.vercel.app",
        I = (e) => {
          let { isDarkMode: s, toggleDarkMode: t } = e,
            [a, n] = (0, r.useState)(!0),
            [i, o] = (0, r.useState)(!1),
            [c, d] = (0, r.useState)(!1),
            x = () => {
              n(window.pageYOffset <= 10),
                o(window.pageYOffset > window.innerHeight);
            };
          (0, C.OR)("scroll", x), (0, C.qR)(() => d(!0));
          let m = () =>
              (0, l.jsx)(k(), {
                href: "/",
                children: (0, l.jsx)("div", {
                  className: "items-center block gap-1 row",
                  children: (0, l.jsx)("div", {
                    className: "text-3xl font-bold",
                    children: (0, l.jsx)("span", {
                      className: "text-neon-blue",
                      children: "SellMore",
                    }),
                  }),
                }),
              }),
            h = () =>
              (0, l.jsx)("nav", {
                children: (0, l.jsxs)("ul", {
                  className: "items-center gap-2 row",
                  children: [
                    c
                      ? (0, l.jsx)("li", {
                          children: (0, l.jsx)(v, {
                            button: !0,
                            onClick: t,
                            title: "Toggle dark mode",
                            "aria-label": "Toggle dark mode",
                            children: s ? (0, l.jsx)(S, {}) : (0, l.jsx)(z, {}),
                          }),
                        })
                      : null,
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(v, { href: M, children: "Sign In" }),
                    }),
                  ],
                }),
              });
          return (0, l.jsx)("header", {
            className: "fixed w-full z-30 transition duration-300 ".concat(
              !a &&
                "bg-custom-light/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg",
            ),
            children: (0, l.jsxs)("div", {
              className:
                "items-center justify-between h-16 px-5 mx-auto row md:h-20 max-w-7xl sm:px-6",
              children: [(0, l.jsx)(m, {}), (0, l.jsx)(h, {})],
            }),
          });
        },
        P = (e) => {
          let { onScrollToPricing: s } = e;
          return (0, l.jsxs)(c, {
            className:
              "items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 col md:flex-row",
            children: [
              (0, l.jsxs)("div", {
                className: "z-10 gap-4 text-center col md:text-left",
                children: [
                  (0, l.jsxs)(d, {
                    size: "lg",
                    children: [
                      "We Help You ",
                      (0, l.jsx)("span", {
                        className: "text-neon-blue",
                        children: "Sell More.",
                      }),
                      (0, l.jsx)("br", {}),
                      (0, l.jsx)("u", {
                        children: (0, l.jsx)("i", { children: "that's it." }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(o, {
                    children:
                      "A no code way to increase brand trust and sales. A tool that will pay for itself multiple times over.",
                  }),
                  (0, l.jsx)("button", {
                    className:
                      "mt-6 px-8 py-4 text-lg font-bold text-neon-blue border-2 border-neon-blue rounded-lg bg-transparent hover:bg-neon-blue hover:text-gray-50 transition-colors",
                    onClick: s,
                    children: "Get SellMore",
                  }),
                ],
              }),
              (0, l.jsx)(i, {
                "data-aos": "fade-left",
                webmSrc: "/videos/hero.webm",
                mp4Src: "/videos/hero.mp4",
                alt: "A video showing Vivid's functionality including command palette, style preview, code pane, and mouse resizing",
                roundedCorners: !0,
              }),
            ],
          });
        };
      var W = t(7066);
      let L = (e) =>
          (0, l.jsx)("button", {
            type: "button",
            ...e,
            className: (0, a.m)(
              "text-gray-50 font-bold bg-neon-blue rounded-lg hover:bg-primary-700 w-fit px-4 py-2",
              e.className,
            ),
          }),
        T = (e) =>
          (0, l.jsx)("input", {
            ...e,
            className: (0, a.m)(
              "px-4 py-3 border rounded-lg placeholder-gray-400 dark:placeholder-gray-600 bg-strong first-line:border-gray-200 dark:border-gray-600 text-strong",
              e.className,
            ),
          }),
        _ = (e) => {
          let { id: s, ...t } = e,
            [n, i] = (0, r.useState)(""),
            [o, c] = (0, r.useState)(!1),
            d = async (e) => {
              e.preventDefault(), c(!0);
              let s = await W.Z.post("/api/waitlist", { email: n });
              i(""),
                window.alert('Email "'.concat(s.data.email, '" submitted!'));
            },
            x = () =>
              (0, l.jsx)("p", {
                className: "mt-3 text-sm text-light",
                children: o
                  ? "We'll keep you posted!"
                  : "Be the first to experience Vivid.",
              });
          return (0, l.jsxs)("div", {
            ...t,
            className: (0, a.m)("col", t.className),
            children: [
              (0, l.jsxs)("form", {
                className: "relative gap-2 md:gap-4 row",
                onSubmit: d,
                children: [
                  (0, l.jsx)(T, {
                    type: "email",
                    className: "w-full",
                    placeholder: "richard.hendricks@piedpiper.com",
                    "aria-label": "Your email",
                    name: "email",
                    id: s,
                    onChange: (e) => i(e.target.value),
                    value: n,
                    required: !0,
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "absolute top-0 w-[4.3rem] h-[2px] bg-strong left-3",
                  }),
                  (0, l.jsx)(L, { type: "submit", children: "Waitlist" }),
                ],
              }),
              (0, l.jsx)(x, {}),
            ],
          });
        },
        V = () =>
          (0, l.jsx)("div", {
            className:
              "absolute bottom-0 right-0 hidden pointer-events-none md:block",
            "aria-hidden": "true",
          }),
        Y = () =>
          (0, l.jsx)(c, {
            className: "px-4 dark sm:px-12",
            children: (0, l.jsxs)(n, {
              className: "w-full px-4 py-16 overflow-hidden sm:px-16",
              children: [
                (0, l.jsx)(V, {}),
                (0, l.jsxs)("div", {
                  className: "gap-6 text-center md:text-left col md:w-1/2 ",
                  children: [
                    (0, l.jsx)("h2", {
                      className: "text-3xl font-bold text-gray-100",
                      children: "More Questions?",
                    }),
                    (0, l.jsx)("p", {
                      className: "text-lg text-light",
                      children: "You can reach us here",
                    }),
                    (0, l.jsx)(_, { id: "newsletter-waitlist" }),
                  ],
                }),
              ],
            }),
          }),
        R = () =>
          (0, l.jsx)("svg", {
            className: "w-4 h-4 text-green-500 inline-block",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, l.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M5 13l4 4L19 7",
            }),
          }),
        B = (e) => {
          let {
              title: s,
              oldPrice: t,
              price: r,
              features: a,
              ctaText: i,
              redirectUrl: o,
              isPro: c = !1,
            } = e,
            x = () => {
              window.open(o, "_blank");
            };
          return (0, l.jsxs)(n, {
            className:
              "items-start gap-4 p-8 pt-10 body-lg col text-medium text-left ".concat(
                c ? "border-2 border-neon-amber" : "",
                " w-[24rem] h-96 relative",
              ),
            children: [
              c &&
                (0, l.jsx)("div", {
                  className:
                    "absolute top-[-.75rem] left-1/2 transform -translate-x-1/2 bg-neon-amber text-white text-xs font-bold px-4 py-1 rounded-full",
                  children: "Popular",
                }),
              (0, l.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, l.jsx)(d, { size: "sm", children: s }),
                  (0, l.jsxs)("div", {
                    className: "flex items-baseline",
                    children: [
                      (0, l.jsx)("span", {
                        className: "text-sm line-through text-gray-400",
                        children: t,
                      }),
                      (0, l.jsx)("span", {
                        className: "ml-4 text-2xl font-bold text-black",
                        children: r,
                      }),
                      (0, l.jsx)("span", {
                        className: "ml-1 text-xs text-gray-400",
                        children: "USD",
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)("ul", {
                className: "mb-4 space-y-2",
                children: a.map((e, s) => {
                  let t = c && e.includes("Unlimited"),
                    r = t ? e.split(/(Unlimited)/g) : [e];
                  return (0, l.jsxs)(
                    "li",
                    {
                      className:
                        "text-sm text-light flex items-center space-x-2",
                      children: [
                        (0, l.jsx)(R, {}),
                        (0, l.jsx)("span", {
                          className: "relative",
                          children: r.map((e, s) =>
                            (0, l.jsx)(
                              "span",
                              {
                                className:
                                  "Unlimited" === e && t
                                    ? "bg-neon-pink px-1 rounded"
                                    : "",
                                children: e,
                              },
                              s,
                            ),
                          ),
                        }),
                      ],
                    },
                    s,
                  );
                }),
              }),
              (0, l.jsx)(L, {
                className: "mt-auto w-full bg-neon-blue",
                onClick: x,
                children: i,
              }),
            ],
          });
        },
        E = () =>
          (0, l.jsxs)(c, {
            grayer: !0,
            className: "text-center",
            children: [
              (0, l.jsxs)("div", {
                className: "gap-2 mb-4 col",
                children: [
                  (0, l.jsx)(d, {
                    size: "md",
                    children: "Invest In Your Company",
                  }),
                  (0, l.jsx)(o, { children: "For the price of a dinner" }),
                ],
              }),
              (0, l.jsx)("p", {
                className: "text-lg font-semibold mb-6",
                children: "$10 off for the first 1000 customers",
              }),
              (0, l.jsxs)("div", {
                className: "gap-10 md:gap-4 col md:row mx-auto text-center",
                children: [
                  (0, l.jsx)(B, {
                    title: "Basic",
                    oldPrice: "$25",
                    price: "$18",
                    features: [
                      "Unlimited Popups",
                      "Unlimited Websites",
                      "Monitor Traffic",
                      "Tech Support",
                    ],
                    ctaText: "Get SellMore",
                    redirectUrl: M,
                  }),
                  (0, l.jsx)(B, {
                    title: "Pro",
                    oldPrice: "$35",
                    price: "$25",
                    features: [
                      "Unlimited Popups",
                      "Unlimited Websites",
                      "Monitor Traffic",
                      "Tech Support",
                    ],
                    ctaText: "Get SellMore",
                    redirectUrl: M,
                    isPro: !0,
                  }),
                ],
              }),
            ],
          }),
        O = (e) => {
          let { children: s, grayer: t, right: r, center: a } = e;
          return (0, l.jsx)(c, {
            grayer: t,
            fullWidth: !0,
            className: "flex col items-center ".concat(
              a ? "text-center" : r ? "md:flex-row-reverse" : "md:flex-row",
            ),
            children: s,
          });
        },
        U = (e) => {
          let { question: s, answer: t } = e,
            [a, n] = (0, r.useState)(!1);
          return (0, l.jsxs)("div", {
            className: "border-b border-gray-300 dark:border-gray-700",
            children: [
              (0, l.jsxs)("button", {
                className:
                  "w-full py-4 text-left font-bold text-lg flex justify-between items-center ".concat(
                    a ? "text-neon-blue" : "text-gray-900 dark:text-gray-100",
                    " focus:outline-none",
                  ),
                onClick: () => n(!a),
                children: [
                  (0, l.jsx)("span", { children: s }),
                  (0, l.jsx)("span", {
                    className: "transform transition-transform ".concat(
                      a ? "rotate-180" : "rotate-0",
                    ),
                    children: (0, l.jsx)("svg", {
                      className: "w-5 h-5 text-gray-500 dark:text-gray-400",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, l.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M19 9l-7 7-7-7",
                      }),
                    }),
                  }),
                ],
              }),
              a &&
                (0, l.jsx)("div", {
                  className: "p-4 text-gray-700 dark:text-gray-300",
                  children: (0, l.jsx)("p", { children: t }),
                }),
            ],
          });
        },
        q = () =>
          (0, l.jsx)(O, {
            children: (0, l.jsxs)("div", {
              className: "container mx-auto px-4",
              children: [
                (0, l.jsx)(d, { size: "md", children: "FAQ" }),
                (0, l.jsxs)("div", {
                  className: "mt-8",
                  children: [
                    (0, l.jsx)(U, {
                      question: "Can I track how many visitors my site gets?",
                      answer:
                        "Yes! We track your unique site visitors to display on popups and for your information.",
                    }),
                    (0, l.jsx)(U, {
                      question: "Is it a monthly subscription?",
                      answer: "No! If you purchase, you own it. FOREVER :)",
                    }),
                    (0, l.jsx)(U, {
                      question: "Is it compatible with...",
                      answer:
                        "Wordpress, Shopify, Webflow, Wix, etc. are all supported. If you can add a code snippet (script) to your website, we are good 2 go.",
                    }),
                    (0, l.jsx)(U, {
                      question:
                        "What if I don't know how to add a code snippet?",
                      answer:
                        "Dont worry! It's super simple, each website builder has tutorials, and if those don't work our support team will walk you through where to paste your snippet.",
                    }),
                    (0, l.jsx)(U, {
                      question:
                        "How much controll do I have on the popup design?",
                      answer:
                        "A lot... You can choose the title, body, image, color, transparancy, when and where it comes up, if you want to show # of visitors.",
                    }),
                  ],
                }),
              ],
            }),
          }),
        D = (e) => {
          let { isDarkMode: s, toggleDarkMode: t } = e,
            a = (0, r.useRef)(null),
            n = () => {
              var e;
              null === (e = a.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth" });
            };
          return (0, l.jsxs)("div", {
            className: "overflow-hidden col text-strong",
            children: [
              (0, l.jsx)(I, { isDarkMode: s, toggleDarkMode: t }),
              (0, l.jsxs)("main", {
                children: [
                  (0, l.jsx)(P, { onScrollToPricing: n }),
                  (0, l.jsx)(w, {}),
                  (0, l.jsx)("div", { ref: a, children: (0, l.jsx)(E, {}) }),
                  (0, l.jsx)(q, {}),
                  (0, l.jsx)(Y, {}),
                ],
              }),
              (0, l.jsx)(N, {}),
            ],
          });
        };
      var A = D;
    },
  },
  function (e) {
    e.O(0, [584, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
