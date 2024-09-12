(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2711: function (e) {
      var t;
      (t = function () {
        return (function (e) {
          function t(n) {
            if (o[n]) return o[n].exports;
            var r = (o[n] = { exports: {}, id: n, loaded: !1 });
            return (
              e[n].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports
            );
          }
          var o = {};
          return (t.m = e), (t.c = o), (t.p = "dist/"), t(0);
        })([
          function (e, t, o) {
            "use strict";
            function n(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var r =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var n in o)
                      Object.prototype.hasOwnProperty.call(o, n) &&
                        (e[n] = o[n]);
                  }
                  return e;
                },
              a = (n(o(1)), o(6)),
              i = n(a),
              l = n(o(7)),
              c = n(o(8)),
              u = n(o(9)),
              p = n(o(10)),
              s = n(o(11)),
              d = n(o(14)),
              f = [],
              m = !1,
              h = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              v = function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if ((e && (m = !0), m))
                  return (
                    (f = (0, s.default)(f, h)), (0, p.default)(f, h.once), f
                  );
              },
              g = function () {
                (f = (0, d.default)()), v();
              },
              b = function () {
                f.forEach(function (e, t) {
                  e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay");
                });
              },
              y = function (e) {
                (h = r(h, e)), (f = (0, d.default)());
                var t,
                  o = document.all && !window.atob;
                return !0 === (t = h.disable) ||
                  ("mobile" === t && u.default.mobile()) ||
                  ("phone" === t && u.default.phone()) ||
                  ("tablet" === t && u.default.tablet()) ||
                  ("function" == typeof t && !0 === t()) ||
                  o
                  ? b()
                  : (h.disableMutationObserver ||
                      c.default.isSupported() ||
                      (console.info(
                        '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    ',
                      ),
                      (h.disableMutationObserver = !0)),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", h.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", h.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", h.delay),
                    "DOMContentLoaded" === h.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1
                      ? v(!0)
                      : "load" === h.startEvent
                        ? window.addEventListener(h.startEvent, function () {
                            v(!0);
                          })
                        : document.addEventListener(h.startEvent, function () {
                            v(!0);
                          }),
                    window.addEventListener(
                      "resize",
                      (0, l.default)(v, h.debounceDelay, !0),
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, l.default)(v, h.debounceDelay, !0),
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, i.default)(function () {
                        (0, p.default)(f, h.once);
                      }, h.throttleDelay),
                    ),
                    h.disableMutationObserver ||
                      c.default.ready("[data-aos]", g),
                    f);
              };
            e.exports = { init: y, refresh: v, refreshHard: g };
          },
          function (e, t) {},
          ,
          ,
          ,
          ,
          function (e, t) {
            (function (t) {
              "use strict";
              function o(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return !!e && ("object" == t || "function" == t);
              }
              function n(e) {
                if ("number" == typeof e) return e;
                if (
                  "symbol" == (void 0 === (t = e) ? "undefined" : r(t)) ||
                  ((n = t) &&
                    "object" == (void 0 === n ? "undefined" : r(n)) &&
                    v.call(t) == l)
                )
                  return i;
                if (o(e)) {
                  var t,
                    n,
                    a = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = o(a) ? a + "" : a;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                var f = p.test((e = e.replace(c, "")));
                return f || s.test(e)
                  ? d(e.slice(2), f ? 2 : 8)
                  : u.test(e)
                    ? i
                    : +e;
              }
              var r =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                a = "Expected a function",
                i = NaN,
                l = "[object Symbol]",
                c = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                d = parseInt,
                f =
                  "object" == (void 0 === t ? "undefined" : r(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                m =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : r(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                h = f || m || Function("return this")(),
                v = Object.prototype.toString,
                g = Math.max,
                b = Math.min,
                y = function () {
                  return h.Date.now();
                };
              e.exports = function (e, t, r) {
                var i = !0,
                  l = !0;
                if ("function" != typeof e) throw TypeError(a);
                return (
                  o(r) &&
                    ((i = "leading" in r ? !!r.leading : i),
                    (l = "trailing" in r ? !!r.trailing : l)),
                  (function (e, t, r) {
                    function i(t) {
                      var o = s,
                        n = d;
                      return (s = d = void 0), (k = t), (m = e.apply(n, o));
                    }
                    function l(e) {
                      var o = e - v,
                        n = e - k;
                      return void 0 === v || o >= t || o < 0 || (E && n >= f);
                    }
                    function c() {
                      var e,
                        o,
                        n,
                        r = y();
                      return l(r)
                        ? u(r)
                        : void (h = setTimeout(
                            c,
                            ((e = r - v),
                            (o = r - k),
                            (n = t - e),
                            E ? b(n, f - o) : n),
                          ));
                    }
                    function u(e) {
                      return (
                        (h = void 0), G && s ? i(e) : ((s = d = void 0), m)
                      );
                    }
                    function p() {
                      var e,
                        o = y(),
                        n = l(o);
                      if (((s = arguments), (d = this), (v = o), n)) {
                        if (void 0 === h)
                          return (
                            (k = e = v), (h = setTimeout(c, t)), w ? i(e) : m
                          );
                        if (E) return (h = setTimeout(c, t)), i(v);
                      }
                      return void 0 === h && (h = setTimeout(c, t)), m;
                    }
                    var s,
                      d,
                      f,
                      m,
                      h,
                      v,
                      k = 0,
                      w = !1,
                      E = !1,
                      G = !0;
                    if ("function" != typeof e) throw TypeError(a);
                    return (
                      (t = n(t) || 0),
                      o(r) &&
                        ((w = !!r.leading),
                        (f = (E = "maxWait" in r)
                          ? g(n(r.maxWait) || 0, t)
                          : f),
                        (G = "trailing" in r ? !!r.trailing : G)),
                      (p.cancel = function () {
                        void 0 !== h && clearTimeout(h),
                          (k = 0),
                          (s = v = d = h = void 0);
                      }),
                      (p.flush = function () {
                        return void 0 === h ? m : u(y());
                      }),
                      p
                    );
                  })(e, t, { leading: i, maxWait: t, trailing: l })
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })(),
            );
          },
          function (e, t) {
            (function (t) {
              "use strict";
              function o(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return !!e && ("object" == t || "function" == t);
              }
              function n(e) {
                if ("number" == typeof e) return e;
                if (
                  "symbol" == (void 0 === (t = e) ? "undefined" : r(t)) ||
                  ((n = t) &&
                    "object" == (void 0 === n ? "undefined" : r(n)) &&
                    h.call(t) == i)
                )
                  return a;
                if (o(e)) {
                  var t,
                    n,
                    d = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = o(d) ? d + "" : d;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                var f = u.test((e = e.replace(l, "")));
                return f || p.test(e)
                  ? s(e.slice(2), f ? 2 : 8)
                  : c.test(e)
                    ? a
                    : +e;
              }
              var r =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                a = NaN,
                i = "[object Symbol]",
                l = /^\s+|\s+$/g,
                c = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                s = parseInt,
                d =
                  "object" == (void 0 === t ? "undefined" : r(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                f =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : r(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                m = d || f || Function("return this")(),
                h = Object.prototype.toString,
                v = Math.max,
                g = Math.min,
                b = function () {
                  return m.Date.now();
                };
              e.exports = function (e, t, r) {
                function a(t) {
                  var o = p,
                    n = s;
                  return (p = s = void 0), (y = t), (f = e.apply(n, o));
                }
                function i(e) {
                  var o = e - h,
                    n = e - y;
                  return void 0 === h || o >= t || o < 0 || (w && n >= d);
                }
                function l() {
                  var e,
                    o,
                    n,
                    r = b();
                  return i(r)
                    ? c(r)
                    : void (m = setTimeout(
                        l,
                        ((e = r - h),
                        (o = r - y),
                        (n = t - e),
                        w ? g(n, d - o) : n),
                      ));
                }
                function c(e) {
                  return (m = void 0), E && p ? a(e) : ((p = s = void 0), f);
                }
                function u() {
                  var e,
                    o = b(),
                    n = i(o);
                  if (((p = arguments), (s = this), (h = o), n)) {
                    if (void 0 === m)
                      return (y = e = h), (m = setTimeout(l, t)), k ? a(e) : f;
                    if (w) return (m = setTimeout(l, t)), a(h);
                  }
                  return void 0 === m && (m = setTimeout(l, t)), f;
                }
                var p,
                  s,
                  d,
                  f,
                  m,
                  h,
                  y = 0,
                  k = !1,
                  w = !1,
                  E = !0;
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return (
                  (t = n(t) || 0),
                  o(r) &&
                    ((k = !!r.leading),
                    (d = (w = "maxWait" in r) ? v(n(r.maxWait) || 0, t) : d),
                    (E = "trailing" in r ? !!r.trailing : E)),
                  (u.cancel = function () {
                    void 0 !== m && clearTimeout(m),
                      (y = 0),
                      (p = h = s = m = void 0);
                  }),
                  (u.flush = function () {
                    return void 0 === m ? f : c(b());
                  }),
                  u
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })(),
            );
          },
          function (e, t) {
            "use strict";
            function o() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function n(e) {
              e &&
                e.forEach(function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                    o = Array.prototype.slice.call(e.removedNodes);
                  if (
                    (function e(t) {
                      var o = void 0,
                        n = void 0;
                      for (o = 0; o < t.length; o += 1)
                        if (
                          ((n = t[o]).dataset && n.dataset.aos) ||
                          (n.children && e(n.children))
                        )
                          return !0;
                      return !1;
                    })(t.concat(o))
                  )
                    return r();
                });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = function () {};
            t.default = {
              isSupported: function () {
                return !!o();
              },
              ready: function (e, t) {
                var a = window.document,
                  i = new (o())(n);
                (r = t),
                  i.observe(a.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              },
            };
          },
          function (e, t) {
            "use strict";
            function o() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ""
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function () {
                function e(e, t) {
                  for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, o, n) {
                  return o && e(t.prototype, o), n && e(t, n), t;
                };
              })(),
              r =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              a =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              i =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              l =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              c = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  n(e, [
                    {
                      key: "phone",
                      value: function () {
                        var e = o();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "mobile",
                      value: function () {
                        var e = o();
                        return !(!i.test(e) && !l.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "tablet",
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = new c();
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function (e, t, o) {
                var n = e.node.getAttribute("data-aos-once");
                t > e.position
                  ? e.node.classList.add("aos-animate")
                  : void 0 === n ||
                    ("false" !== n && (o || "true" === n)) ||
                    e.node.classList.remove("aos-animate");
              },
              n = function (e, t) {
                var n = window.pageYOffset,
                  r = window.innerHeight;
                e.forEach(function (e, a) {
                  o(e, r + n, t);
                });
              };
            t.default = n;
          },
          function (e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n,
              r = (n = o(12)) && n.__esModule ? n : { default: n },
              a = function (e, t) {
                return (
                  e.forEach(function (e, o) {
                    e.node.classList.add("aos-init"),
                      (e.position = (0, r.default)(e.node, t.offset));
                  }),
                  e
                );
              };
            t.default = a;
          },
          function (e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n,
              r = (n = o(13)) && n.__esModule ? n : { default: n },
              a = function (e, t) {
                var o = 0,
                  n = 0,
                  a = window.innerHeight,
                  i = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute(
                      "data-aos-anchor-placement",
                    ),
                  };
                switch (
                  (i.offset && !isNaN(i.offset) && (n = parseInt(i.offset)),
                  i.anchor &&
                    document.querySelectorAll(i.anchor) &&
                    (e = document.querySelectorAll(i.anchor)[0]),
                  (o = (0, r.default)(e).top),
                  i.anchorPlacement)
                ) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    o += e.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    o += e.offsetHeight;
                    break;
                  case "top-center":
                    o += a / 2;
                    break;
                  case "bottom-center":
                    o += a / 2 + e.offsetHeight;
                    break;
                  case "center-center":
                    o += a / 2 + e.offsetHeight / 2;
                    break;
                  case "top-top":
                    o += a;
                    break;
                  case "bottom-top":
                    o += e.offsetHeight + a;
                    break;
                  case "center-top":
                    o += e.offsetHeight / 2 + a;
                }
                return (
                  i.anchorPlacement || i.offset || isNaN(t) || (n = t), o + n
                );
              };
            t.default = a;
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function (e) {
              for (
                var t = 0, o = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                  (o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return { top: o, left: t };
            };
            t.default = o;
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function (e) {
              return (
                (e = e || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(e, function (e) {
                  return { node: e };
                })
              );
            };
            t.default = o;
          },
        ]);
      }),
        (e.exports = t());
    },
    1296: function (e, t, o) {
      var n = 0 / 0,
        r = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt,
        u = "object" == typeof o.g && o.g && o.g.Object === Object && o.g,
        p = "object" == typeof self && self && self.Object === Object && self,
        s = u || p || Function("return this")(),
        d = Object.prototype.toString,
        f = Math.max,
        m = Math.min,
        h = function () {
          return s.Date.now();
        };
      function v(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function g(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          ((o = t) && "object" == typeof o && "[object Symbol]" == d.call(t))
        )
          return n;
        if (v(e)) {
          var t,
            o,
            u = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = v(u) ? u + "" : u;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var p = i.test(e);
        return p || l.test(e) ? c(e.slice(2), p ? 2 : 8) : a.test(e) ? n : +e;
      }
      e.exports = function (e, t, o) {
        var n,
          r,
          a,
          i,
          l,
          c,
          u = 0,
          p = !1,
          s = !1,
          d = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function b(t) {
          var o = n,
            a = r;
          return (n = r = void 0), (u = t), (i = e.apply(a, o));
        }
        function y(e) {
          var o = e - c,
            n = e - u;
          return void 0 === c || o >= t || o < 0 || (s && n >= a);
        }
        function k() {
          var e,
            o,
            n,
            r = h();
          if (y(r)) return w(r);
          l = setTimeout(
            k,
            ((e = r - c), (o = r - u), (n = t - e), s ? m(n, a - o) : n),
          );
        }
        function w(e) {
          return ((l = void 0), d && n) ? b(e) : ((n = r = void 0), i);
        }
        function E() {
          var e,
            o = h(),
            a = y(o);
          if (((n = arguments), (r = this), (c = o), a)) {
            if (void 0 === l)
              return (u = e = c), (l = setTimeout(k, t)), p ? b(e) : i;
            if (s) return (l = setTimeout(k, t)), b(c);
          }
          return void 0 === l && (l = setTimeout(k, t)), i;
        }
        return (
          (t = g(t) || 0),
          v(o) &&
            ((p = !!o.leading),
            (a = (s = "maxWait" in o) ? f(g(o.maxWait) || 0, t) : a),
            (d = "trailing" in o ? !!o.trailing : d)),
          (E.cancel = function () {
            void 0 !== l && clearTimeout(l), (u = 0), (n = c = r = l = void 0);
          }),
          (E.flush = function () {
            return void 0 === l ? i : w(h());
          }),
          E
        );
      };
    },
    6840: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return o(4917);
        },
      ]);
    },
    4917: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return k;
          },
        });
      var n = o(5893);
      o(6130), o(6774);
      var r = o(2711),
        a = o.n(r),
        i = o(9008),
        l = o.n(i),
        c = o(7294);
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var p = ["keyOverride"],
        s = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        d = function (e, t, o) {
          void 0 === t && (t = []);
          var n = void 0 === o ? {} : o,
            r = n.defaultWidth,
            a = n.defaultHeight;
          return t.reduce(function (t, o, n) {
            return (
              t.push(
                c.createElement("meta", {
                  key: "og:" + e + ":0" + n,
                  property: "og:" + e,
                  content: o.url,
                }),
              ),
              o.alt &&
                t.push(
                  c.createElement("meta", {
                    key: "og:" + e + ":alt0" + n,
                    property: "og:" + e + ":alt",
                    content: o.alt,
                  }),
                ),
              o.secureUrl &&
                t.push(
                  c.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + n,
                    property: "og:" + e + ":secure_url",
                    content: o.secureUrl.toString(),
                  }),
                ),
              o.type &&
                t.push(
                  c.createElement("meta", {
                    key: "og:" + e + ":type0" + n,
                    property: "og:" + e + ":type",
                    content: o.type.toString(),
                  }),
                ),
              o.width
                ? t.push(
                    c.createElement("meta", {
                      key: "og:" + e + ":width0" + n,
                      property: "og:" + e + ":width",
                      content: o.width.toString(),
                    }),
                  )
                : r &&
                  t.push(
                    c.createElement("meta", {
                      key: "og:" + e + ":width0" + n,
                      property: "og:" + e + ":width",
                      content: r.toString(),
                    }),
                  ),
              o.height
                ? t.push(
                    c.createElement("meta", {
                      key: "og:" + e + ":height" + n,
                      property: "og:" + e + ":height",
                      content: o.height.toString(),
                    }),
                  )
                : a &&
                  t.push(
                    c.createElement("meta", {
                      key: "og:" + e + ":height" + n,
                      property: "og:" + e + ":height",
                      content: a.toString(),
                    }),
                  ),
              t
            );
          }, []);
        },
        f = function (e) {
          var t,
            o,
            n,
            r,
            a,
            i = [];
          e.titleTemplate && (s.templateTitle = e.titleTemplate);
          var l = "";
          e.title
            ? ((l = e.title),
              s.templateTitle &&
                (l = s.templateTitle.replace(/%s/g, function () {
                  return l;
                })))
            : e.defaultTitle && (l = e.defaultTitle),
            l && i.push(c.createElement("title", { key: "title" }, l));
          var f = e.noindex || s.noindex || e.dangerouslySetAllPagesToNoIndex,
            m = e.nofollow || s.nofollow || e.dangerouslySetAllPagesToNoFollow,
            h = "";
          if (e.robotsProps) {
            var v = e.robotsProps,
              g = v.nosnippet,
              b = v.maxSnippet,
              y = v.maxImagePreview,
              k = v.maxVideoPreview,
              w = v.noarchive,
              E = v.noimageindex,
              G = v.notranslate,
              x = v.unavailableAfter;
            h =
              (g ? ",nosnippet" : "") +
              (b ? ",max-snippet:" + b : "") +
              (y ? ",max-image-preview:" + y : "") +
              (w ? ",noarchive" : "") +
              (x ? ",unavailable_after:" + x : "") +
              (E ? ",noimageindex" : "") +
              (k ? ",max-video-preview:" + k : "") +
              (G ? ",notranslate" : "");
          }
          if (
            (f || m
              ? (e.dangerouslySetAllPagesToNoIndex && (s.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (s.nofollow = !0),
                i.push(
                  c.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (f ? "noindex" : "index") +
                      "," +
                      (m ? "nofollow" : "follow") +
                      h,
                  }),
                ))
              : i.push(
                  c.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + h,
                  }),
                ),
            e.description &&
              i.push(
                c.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                }),
              ),
            e.themeColor &&
              i.push(
                c.createElement("meta", {
                  key: "theme-color",
                  name: "theme-color",
                  content: e.themeColor,
                }),
              ),
            e.mobileAlternate &&
              i.push(
                c.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                }),
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                i.push(
                  c.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  }),
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                i.push(
                  c.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  }),
                ),
              e.twitter.site &&
                i.push(
                  c.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  }),
                ),
              e.twitter.handle &&
                i.push(
                  c.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  }),
                )),
            e.facebook &&
              e.facebook.appId &&
              i.push(
                c.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                }),
              ),
            ((null != (t = e.openGraph) && t.title) || l) &&
              i.push(
                c.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (r = e.openGraph) ? void 0 : r.title) || l,
                }),
              ),
            ((null != (o = e.openGraph) && o.description) || e.description) &&
              i.push(
                c.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (a = e.openGraph) ? void 0 : a.description) ||
                    e.description,
                }),
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                i.push(
                  c.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  }),
                ),
              e.openGraph.type)
            ) {
              var O = e.openGraph.type.toLowerCase();
              i.push(
                c.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: O,
                }),
              ),
                "profile" === O && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      i.push(
                        c.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        }),
                      ),
                    e.openGraph.profile.lastName &&
                      i.push(
                        c.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        }),
                      ),
                    e.openGraph.profile.username &&
                      i.push(
                        c.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        }),
                      ),
                    e.openGraph.profile.gender &&
                      i.push(
                        c.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        }),
                      ))
                  : "book" === O && e.openGraph.book
                    ? (e.openGraph.book.authors &&
                        e.openGraph.book.authors.length &&
                        e.openGraph.book.authors.forEach(function (e, t) {
                          i.push(
                            c.createElement("meta", {
                              key: "book:author:0" + t,
                              property: "book:author",
                              content: e,
                            }),
                          );
                        }),
                      e.openGraph.book.isbn &&
                        i.push(
                          c.createElement("meta", {
                            key: "book:isbn",
                            property: "book:isbn",
                            content: e.openGraph.book.isbn,
                          }),
                        ),
                      e.openGraph.book.releaseDate &&
                        i.push(
                          c.createElement("meta", {
                            key: "book:release_date",
                            property: "book:release_date",
                            content: e.openGraph.book.releaseDate,
                          }),
                        ),
                      e.openGraph.book.tags &&
                        e.openGraph.book.tags.length &&
                        e.openGraph.book.tags.forEach(function (e, t) {
                          i.push(
                            c.createElement("meta", {
                              key: "book:tag:0" + t,
                              property: "book:tag",
                              content: e,
                            }),
                          );
                        }))
                    : "article" === O && e.openGraph.article
                      ? (e.openGraph.article.publishedTime &&
                          i.push(
                            c.createElement("meta", {
                              key: "article:published_time",
                              property: "article:published_time",
                              content: e.openGraph.article.publishedTime,
                            }),
                          ),
                        e.openGraph.article.modifiedTime &&
                          i.push(
                            c.createElement("meta", {
                              key: "article:modified_time",
                              property: "article:modified_time",
                              content: e.openGraph.article.modifiedTime,
                            }),
                          ),
                        e.openGraph.article.expirationTime &&
                          i.push(
                            c.createElement("meta", {
                              key: "article:expiration_time",
                              property: "article:expiration_time",
                              content: e.openGraph.article.expirationTime,
                            }),
                          ),
                        e.openGraph.article.authors &&
                          e.openGraph.article.authors.length &&
                          e.openGraph.article.authors.forEach(function (e, t) {
                            i.push(
                              c.createElement("meta", {
                                key: "article:author:0" + t,
                                property: "article:author",
                                content: e,
                              }),
                            );
                          }),
                        e.openGraph.article.section &&
                          i.push(
                            c.createElement("meta", {
                              key: "article:section",
                              property: "article:section",
                              content: e.openGraph.article.section,
                            }),
                          ),
                        e.openGraph.article.tags &&
                          e.openGraph.article.tags.length &&
                          e.openGraph.article.tags.forEach(function (e, t) {
                            i.push(
                              c.createElement("meta", {
                                key: "article:tag:0" + t,
                                property: "article:tag",
                                content: e,
                              }),
                            );
                          }))
                      : ("video.movie" === O ||
                          "video.episode" === O ||
                          "video.tv_show" === O ||
                          "video.other" === O) &&
                        e.openGraph.video &&
                        (e.openGraph.video.actors &&
                          e.openGraph.video.actors.length &&
                          e.openGraph.video.actors.forEach(function (e, t) {
                            e.profile &&
                              i.push(
                                c.createElement("meta", {
                                  key: "video:actor:0" + t,
                                  property: "video:actor",
                                  content: e.profile,
                                }),
                              ),
                              e.role &&
                                i.push(
                                  c.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role,
                                  }),
                                );
                          }),
                        e.openGraph.video.directors &&
                          e.openGraph.video.directors.length &&
                          e.openGraph.video.directors.forEach(function (e, t) {
                            i.push(
                              c.createElement("meta", {
                                key: "video:director:0" + t,
                                property: "video:director",
                                content: e,
                              }),
                            );
                          }),
                        e.openGraph.video.writers &&
                          e.openGraph.video.writers.length &&
                          e.openGraph.video.writers.forEach(function (e, t) {
                            i.push(
                              c.createElement("meta", {
                                key: "video:writer:0" + t,
                                property: "video:writer",
                                content: e,
                              }),
                            );
                          }),
                        e.openGraph.video.duration &&
                          i.push(
                            c.createElement("meta", {
                              key: "video:duration",
                              property: "video:duration",
                              content: e.openGraph.video.duration.toString(),
                            }),
                          ),
                        e.openGraph.video.releaseDate &&
                          i.push(
                            c.createElement("meta", {
                              key: "video:release_date",
                              property: "video:release_date",
                              content: e.openGraph.video.releaseDate,
                            }),
                          ),
                        e.openGraph.video.tags &&
                          e.openGraph.video.tags.length &&
                          e.openGraph.video.tags.forEach(function (e, t) {
                            i.push(
                              c.createElement("meta", {
                                key: "video:tag:0" + t,
                                property: "video:tag",
                                content: e,
                              }),
                            );
                          }),
                        e.openGraph.video.series &&
                          i.push(
                            c.createElement("meta", {
                              key: "video:series",
                              property: "video:series",
                              content: e.openGraph.video.series,
                            }),
                          ));
            }
            e.defaultOpenGraphImageWidth &&
              (s.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (s.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                i.push.apply(
                  i,
                  d("image", e.openGraph.images, {
                    defaultWidth: s.defaultOpenGraphImageWidth,
                    defaultHeight: s.defaultOpenGraphImageHeight,
                  }),
                ),
              e.defaultOpenGraphVideoWidth &&
                (s.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (s.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                i.push.apply(
                  i,
                  d("video", e.openGraph.videos, {
                    defaultWidth: s.defaultOpenGraphVideoWidth,
                    defaultHeight: s.defaultOpenGraphVideoHeight,
                  }),
                ),
              e.openGraph.audio &&
                i.push.apply(i, d("audio", e.openGraph.audio)),
              e.openGraph.locale &&
                i.push(
                  c.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  }),
                ),
              (e.openGraph.siteName || e.openGraph.site_name) &&
                i.push(
                  c.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name,
                  }),
                );
          }
          return (
            e.canonical &&
              i.push(
                c.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                }),
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t,
                  o,
                  n = e.keyOverride,
                  r = (function (e, t) {
                    if (null == e) return {};
                    var o,
                      n,
                      r = {},
                      a = Object.keys(e);
                    for (n = 0; n < a.length; n++)
                      (o = a[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
                    return r;
                  })(e, p);
                i.push(
                  c.createElement(
                    "meta",
                    u(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null != (o = null != n ? n : r.name)
                              ? o
                              : r.property)
                            ? t
                            : r.httpEquiv),
                      },
                      r,
                    ),
                  ),
                );
              }),
            null != (n = e.additionalLinkTags) &&
              n.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                i.push(
                  c.createElement(
                    "link",
                    u(
                      {
                        key:
                          "link" +
                          (null != (t = e.keyOverride) ? t : e.href) +
                          e.rel,
                      },
                      e,
                    ),
                  ),
                );
              }),
            i
          );
        },
        m = function (e) {
          return c.createElement(l(), null, f(e));
        },
        h = function (e) {
          var t = e.title,
            o = e.themeColor,
            n = e.noindex,
            r = void 0 !== n && n,
            a = e.nofollow,
            i = e.robotsProps,
            l = e.description,
            u = e.canonical,
            p = e.openGraph,
            s = e.facebook,
            d = e.twitter,
            h = e.additionalMetaTags,
            v = e.titleTemplate,
            g = e.defaultTitle,
            b = e.mobileAlternate,
            y = e.languageAlternates,
            k = e.additionalLinkTags,
            w = e.useAppDir;
          return c.createElement(
            c.Fragment,
            null,
            void 0 !== w && w
              ? f({
                  title: t,
                  themeColor: o,
                  noindex: r,
                  nofollow: a,
                  robotsProps: i,
                  description: l,
                  canonical: u,
                  facebook: s,
                  openGraph: p,
                  additionalMetaTags: h,
                  twitter: d,
                  titleTemplate: v,
                  defaultTitle: g,
                  mobileAlternate: b,
                  languageAlternates: y,
                  additionalLinkTags: k,
                })
              : c.createElement(m, {
                  title: t,
                  themeColor: o,
                  noindex: r,
                  nofollow: a,
                  robotsProps: i,
                  description: l,
                  canonical: u,
                  facebook: s,
                  openGraph: p,
                  additionalMetaTags: h,
                  twitter: d,
                  titleTemplate: v,
                  defaultTitle: g,
                  mobileAlternate: b,
                  languageAlternates: y,
                  additionalLinkTags: k,
                }),
          );
        };
      RegExp(
        "[" +
          Object.keys(
            Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
            }),
          ).join("") +
          "]",
        "g",
      );
      var v = o(9661);
      let g = "Vivid — Build visually. Code faster.",
        b =
          "Make CSS styling a breeze with Vivid's in-browser visual editor that automatically updates your code.",
        y = (e) => {
          let { Component: t, pageProps: o } = e,
            { isDarkMode: r, toggle: i } = (0, v.vs)();
          return (
            (0, c.useEffect)(() => {
              r
                ? (document.documentElement.classList.add("dark"),
                  document.documentElement.style.setProperty(
                    "color-scheme",
                    "dark",
                  ))
                : (document.documentElement.classList.remove("dark"),
                  document.documentElement.style.setProperty(
                    "color-scheme",
                    "light",
                  ));
            }, [r]),
            (0, v.qR)(() => {
              a().init({
                once: !0,
                disable: "phone",
                duration: 700,
                easing: "ease-out-cubic",
              });
            }),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)(l(), {
                  children: [
                    (0, n.jsx)("link", {
                      rel: "apple-touch-icon",
                      sizes: "180x180",
                      href: "/apple-touch-icon.png",
                    }),
                    (0, n.jsx)("link", {
                      rel: "icon",
                      href: "/icons/favicon.ico",
                    }),
                    (0, n.jsx)("meta", {
                      property: "og:image",
                      content: "https://vivid.lol/images/landing-page.png",
                    }),
                  ],
                }),
                (0, n.jsx)(h, {
                  title: g,
                  description: b,
                  themeColor: r ? "#18181b" : "#fafafa",
                  openGraph: { title: g, description: b },
                }),
                (0, n.jsx)(t, { ...o, isDarkMode: r, toggleDarkMode: i }),
              ],
            })
          );
        };
      var k = y;
    },
    6130: function () {},
    6774: function () {},
    9008: function (e, t, o) {
      e.exports = o(3121);
    },
    9661: function (e, t, o) {
      "use strict";
      o.d(t, {
        OR: function () {
          return a;
        },
        qR: function () {
          return p;
        },
        vs: function () {
          return u;
        },
      });
      var n = o(7294);
      o(1296);
      var r = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect;
      function a(e, t, o, a) {
        let i = (0, n.useRef)(t);
        r(() => {
          i.current = t;
        }, [t]),
          (0, n.useEffect)(() => {
            let t = (null == o ? void 0 : o.current) ?? window;
            if (!(t && t.addEventListener)) return;
            let n = (e) => {
              i.current(e);
            };
            return (
              t.addEventListener(e, n, a),
              () => {
                t.removeEventListener(e, n, a);
              }
            );
          }, [e, o, a]);
      }
      var i = "undefined" == typeof window,
        l = "undefined" == typeof window,
        c = "usehooks-ts-dark-mode";
      function u(e, t = c) {
        let o = (0, n.useRef)(0);
        o.current++;
        let u = "boolean" == typeof e ? e : null == e ? void 0 : e.defaultValue,
          p =
            "boolean" == typeof e
              ? (t ?? c)
              : ((null == e ? void 0 : e.localStorageKey) ?? c),
          s =
            "boolean" == typeof e
              ? void 0
              : ((null == e ? void 0 : e.initializeWithValue) ?? void 0),
          d = (function (e, t) {
            let o =
                "boolean" == typeof t
                  ? t
                  : ((null == t ? void 0 : t.defaultValue) ?? !1),
              a =
                "boolean" == typeof t
                  ? void 0
                  : ((null == t ? void 0 : t.initializeWithValue) ?? void 0),
              i = (e) => (l ? o : window.matchMedia(e).matches),
              [c, u] = (0, n.useState)(() => (a ? i(e) : o));
            function p() {
              u(i(e));
            }
            return (
              r(() => {
                let t = window.matchMedia(e);
                return (
                  p(),
                  t.addListener
                    ? t.addListener(p)
                    : t.addEventListener("change", p),
                  () => {
                    t.removeListener
                      ? t.removeListener(p)
                      : t.removeEventListener("change", p);
                  }
                );
              }, [e]),
              c
            );
          })("(prefers-color-scheme: dark)", {
            initializeWithValue: s,
            defaultValue: u,
          }),
          [f, m] = (function (e, t, o = {}) {
            let { initializeWithValue: l = !0 } = o,
              c = (0, n.useCallback)(
                (e) => (o.serializer ? o.serializer(e) : JSON.stringify(e)),
                [o],
              ),
              u = (0, n.useCallback)(
                (e) => {
                  let n;
                  if (o.deserializer) return o.deserializer(e);
                  if ("undefined" === e) return;
                  let r = t instanceof Function ? t() : t;
                  try {
                    n = JSON.parse(e);
                  } catch (a) {
                    return console.error("Error parsing JSON:", a), r;
                  }
                  return n;
                },
                [o, t],
              ),
              p = (0, n.useCallback)(() => {
                let o = t instanceof Function ? t() : t;
                if (i) return o;
                try {
                  let n = window.localStorage.getItem(e);
                  return n ? u(n) : o;
                } catch (r) {
                  return (
                    console.warn(
                      `Error reading localStorage key \u201C${e}\u201D:`,
                      r,
                    ),
                    o
                  );
                }
              }, [t, e, u]),
              [s, d] = (0, n.useState)(() =>
                l ? p() : t instanceof Function ? t() : t,
              ),
              f = (function (e) {
                let t = (0, n.useRef)(() => {
                  throw Error("Cannot call an event handler while rendering.");
                });
                return (
                  r(() => {
                    t.current = e;
                  }, [e]),
                  (0, n.useCallback)((...e) => t.current(...e), [t])
                );
              })((t) => {
                i &&
                  console.warn(
                    `Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`,
                  );
                try {
                  let o = t instanceof Function ? t(p()) : t;
                  window.localStorage.setItem(e, c(o)),
                    d(o),
                    window.dispatchEvent(
                      new StorageEvent("local-storage", { key: e }),
                    );
                } catch (n) {
                  console.warn(
                    `Error setting localStorage key \u201C${e}\u201D:`,
                    n,
                  );
                }
              });
            (0, n.useEffect)(() => {
              d(p());
            }, [e]);
            let m = (0, n.useCallback)(
              (t) => {
                (null != t && t.key && t.key !== e) || d(p());
              },
              [e, p],
            );
            return a("storage", m), a("local-storage", m), [s, f];
          })(p, u ?? d ?? !1, { initializeWithValue: s });
        return (
          r(() => {
            d !== f && m(d);
          }, [d]),
          {
            isDarkMode: f,
            toggle() {
              m((e) => !e);
            },
            enable() {
              m(!0);
            },
            disable() {
              m(!1);
            },
            set(e) {
              m(e);
            },
          }
        );
      }
      function p(e) {
        (0, n.useEffect)(e, []);
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(880);
    }),
      (_N_E = e.O());
  },
]);
