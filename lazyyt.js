function darkMode() {
    localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode"), "darkmode" === localStorage.getItem("mode") ? document.querySelector("#mainContent").classList.add("darkMode") : document.querySelector("#mainContent").classList.remove("darkMode")
};

function gridMode() {
    localStorage.setItem("list", "listmode" === localStorage.getItem("list") ? "grid" : "listmode"), "listmode" === localStorage.getItem("list") ? document.querySelector("#mainContent").classList.add("gridMode") : document.querySelector("#mainContent").classList.remove("gridMode")
};

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 20,
        headerEl = document.getElementById( & #39;header&# 39;);
    if (distanceY > shrinkOn) {
        headerEl.classList.add("show");
    } else {
        headerEl.classList.remove("show");
    }
}
window.addEventListener( & #39;scroll&# 39;, resizeHeaderOnScroll);

function copyFunction() {
    document.getElementById("getlink").select(), document.execCommand("copy"), document.getElementById("shareNotif").innerHTML = "<span>Link copied!</span>"
};
(function () {
    var youtube = document.querySelectorAll(".lazyYoutube");
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        var image = new Image();
        image.setAttribute("class", "lazy");
        image.setAttribute("data-src", source);
        image.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
        image.setAttribute("alt", "Youtube video");
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));
        youtube[i].addEventListener("click", function () {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };
})(); 

!function(e){var t=function(f,D,u){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazy",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=f.lazySizesConfig||f.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=f.HTMLPictureElement,P="addEventListener",$="getAttribute",q=f[P].bind(f),I=f.setTimeout,U=f.requestAnimationFrame||I,o=f.requestIdleCallback,j=/ ^ picture$ / i, r = ["load", "error", "lazyincluded", "_lazyloaded"], a = {}, G = Array.prototype.forEach, J = function (e, t) {
    if (!a[t]) {
        a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")
    }
    return a[t].test(e[$]("class") || "") && a[t]
}, K = function (e, t) {
    if (!J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").trim() + " " + t)
    }
}, Q = function (e, t) {
    var a;
    if (a = J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").replace(a, " "))
    }
}, V = function (t, a, e) {
    var i = e ? P : "removeEventListener";
    if (e) {
        V(t, a)
    }
    r.forEach(function (e) {
        t[i](e, a)
    })
}, X = function (e, t, a, i, r) {
    var n = D.createEvent("Event");
    if (!a) {
        a = {}
    }
    a.instance = k;
    n.initEvent(t, !i, !r);
    n.detail = a;
    e.dispatchEvent(n);
    return n
}, Y = function (e, t) {
    var a;
    if (!i && (a = f.picturefill || H.pf)) {
        if (t && t.src && !e[$]("srcset")) {
            e.setAttribute("srcset", t.src)
        }
        a({
            reevaluate: true,
            elements: [e]
        })
    } else if (t && t.src) {
        e.src = t.src
    }
}, Z = function (e, t) {
    return (getComputedStyle(e, null) || {})[t]
}, s = function (e, t, a) {
    a = a || e.offsetWidth;
    while (a < H.minSize && t && !e._lazysizesWidth) {
        a = t.offsetWidth;
        t = t.parentNode
    }
    return a
}, ee = function () {
    var a, i;
    var t = [];
    var r = [];
    var n = t;
    var s = function () {
        var e = n;
        n = t.length ? r : t;
        a = true;
        i = false;
        while (e.length) {
            e.shift()()
        }
        a = false
    };
    var e = function (e, t) {
        if (a && !t) {
            e.apply(this, arguments)
        } else {
            n.push(e);
            if (!i) {
                i = true;
                (D.hidden ? I : U)(s)
            }
        }
    };
    e._lsFlush = s;
    return e
}(), te = function (a, e) {
    return e ? function () {
        ee(a)
    } : function () {
        var e = this;
        var t = arguments;
        ee(function () {
            a.apply(e, t)
        })
    }
}, ae = function (e) {
    var a;
    var i = 0;
    var r = H.throttleDelay;
    var n = H.ricTimeout;
    var t = function () {
        a = false;
        i = u.now();
        e()
    };
    var s = o && n > 49 ? function () {
        o(t, {
            timeout: n
        });
        if (n !== H.ricTimeout) {
            n = H.ricTimeout
        }
    } : te(function () {
        I(t)
    }, true);
    return function (e) {
        var t;
        if (e = e === true) {
            n = 33
        }
        if (a) {
            return
        }
        a = true;
        t = r - (u.now() - i);
        if (t < 0) {
            t = 0
        }
        if (e || t < 9) {
            s()
        } else {
            I(s, t)
        }
    }
}, ie = function (e) {
    var t, a;
    var i = 99;
    var r = function () {
        t = null;
        e()
    };
    var n = function () {
        var e = u.now() - a;
        if (e < i) {
            I(n, i - e)
        } else {
            (o || r)(r)
        }
    };
    return function () {
        a = u.now();
        if (!t) {
            t = I(n, i)
        }
    }
}, e = function () {
    var v, m, c, h, e;
    var y, z, g, p, C, b, A;
    var n = /^img$/i;
    var d = /^iframe$/i;
    var E = "onscroll" in f && !/(gle|ing)bot/.test(navigator.userAgent);
    var _ = 0;
    var w = 0;
    var M = 0;
    var N = -1;
    var L = function (e) {
        M--;
        if (!e || M < 0 || !e.target) {
            M = 0
        }
    };
    var x = function (e) {
        if (A == null) {
            A = Z(D.body, "visibility") == "hidden"
        }
        return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden")
    };
    var W = function (e, t) {
        var a;
        var i = e;
        var r = x(e);
        g -= t;
        b += t;
        p -= t;
        C += t;
        while (r && (i = i.offsetParent) && i != D.body && i != O) {
            r = (Z(i, "opacity") || 1) > 0;
            if (r && Z(i, "overflow") != "visible") {
                a = i.getBoundingClientRect();
                r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1
            }
        }
        return r
    };
    var t = function () {
        var e, t, a, i, r, n, s, o, l, f, u, c;
        var d = k.elements;
        if ((h = H.loadMode) && M < 8 && (e = d.length)) {
            t = 0;
            N++;
            for (; t < e; t++) {
                if (!d[t] || d[t]._lazyRace) {
                    continue
                }
                if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
                    R(d[t]);
                    continue
                }
                if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
                    n = w
                }
                if (!f) {
                    f = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
                    k._defEx = f;
                    u = f * H.expFactor;
                    c = H.hFac;
                    A = null;
                    if (w < u && M < 1 && N > 2 && h > 2 && !D.hidden) {
                        w = u;
                        N = 0
                    } else if (h > 1 && N > 1 && M < 6) {
                        w = f
                    } else {
                        w = _
                    }
                }
                if (l !== n) {
                    y = innerWidth + n * c;
                    z = innerHeight + n;
                    s = n * -1;
                    l = n
                }
                a = d[t].getBoundingClientRect();
                if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) {
                    R(d[t]);
                    r = true;
                    if (M > 9) {
                        break
                    }
                } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
                    i = v[0] || d[t]
                }
            }
            if (i && !r) {
                R(i)
            }
        }
    };
    var a = ae(t);
    var S = function (e) {
        var t = e.target;
        if (t._lazyCache) {
            delete t._lazyCache;
            return
        }
        L(e);
        K(t, H.loadedClass);
        Q(t, H.loadingClass);
        V(t, B);
        X(t, "lazyloaded")
    };
    var i = te(S);
    var B = function (e) {
        i({
            target: e.target
        })
    };
    var T = function (e, t) {
        var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;
        if (a == 0) {
            e.contentWindow.location.replace(t)
        } else if (a == 1) {
            e.src = t
        }
    };
    var F = function (e) {
        var t;
        var a = e[$](H.srcsetAttr);
        if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
            e.setAttribute("media", t)
        }
        if (a) {
            e.setAttribute("srcset", a)
        }
    };
    var s = te(function (t, e, a, i, r) {
        var n, s, o, l, f, u;
        if (!(f = X(t, "lazybeforeunveil", e)).defaultPrevented) {
            if (i) {
                if (a) {
                    K(t, H.autosizesClass)
                } else {
                    t.setAttribute("sizes", i)
                }
            }
            s = t[$](H.srcsetAttr);
            n = t[$](H.srcAttr);
            if (r) {
                o = t.parentNode;
                l = o && j.test(o.nodeName || "")
            }
            u = e.firesLoad || "src" in t && (s || n || l);
            f = {
                target: t
            };
            K(t, H.loadingClass);
            if (u) {
                clearTimeout(c);
                c = I(L, 2500);
                V(t, B, true)
            }
            if (l) {
                G.call(o.getElementsByTagName("source"), F)
            }
            if (s) {
                t.setAttribute("srcset", s)
            } else if (n && !l) {
                if (d.test(t.nodeName)) {
                    T(t, n)
                } else {
                    t.src = n
                }
            }
            if (r && (s || l)) {
                Y(t, {
                    src: n
                })
            }
        }
        if (t._lazyRace) {
            delete t._lazyRace
        }
        Q(t, H.lazyClass);
        ee(function () {
            var e = t.complete && t.naturalWidth > 1;
            if (!u || e) {
                if (e) {
                    K(t, H.fastLoadedClass)
                }
                S(f);
                t._lazyCache = true;
                I(function () {
                    if ("_lazyCache" in t) {
                        delete t._lazyCache
                    }
                }, 9)
            }
            if (t.loading == "lazy") {
                M--
            }
        }, true)
    });
    var R = function (e) {
        if (e._lazyRace) {
            return
        }
        var t;
        var a = n.test(e.nodeName);
        var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
        var r = i == "auto";
        if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
            return
        }
        t = X(e, "lazyunveilread").detail;
        if (r) {
            re.updateElem(e, true, e.offsetWidth)
        }
        e._lazyRace = true;
        M++;
        s(e, t, r, i, a)
    };
    var r = ie(function () {
        H.loadMode = 3;
        a()
    });
    var o = function () {
        if (H.loadMode == 3) {
            H.loadMode = 2
        }
        r()
    };
    var l = function () {
        if (m) {
            return
        }
        if (u.now() - e < 999) {
            I(l, 999);
            return
        }
        m = true;
        H.loadMode = 3;
        a();
        q("scroll", o, true)
    };
    return {
        _: function () {
            e = u.now();
            k.elements = D.getElementsByClassName(H.lazyClass);
            v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
            q("scroll", a, true);
            q("resize", a, true);
            q("pageshow", function (e) {
                if (e.persisted) {
                    var t = D.querySelectorAll("." + H.loadingClass);
                    if (t.length && t.forEach) {
                        U(function () {
                            t.forEach(function (e) {
                                if (e.complete) {
                                    R(e)
                                }
                            })
                        })
                    }
                }
            });
            if (f.MutationObserver) {
                new MutationObserver(a).observe(O, {
                    childList: true,
                    subtree: true,
                    attributes: true
                })
            } else {
                O[P]("DOMNodeInserted", a, true);
                O[P]("DOMAttrModified", a, true);
                setInterval(a, 999)
            }
            q("hashchange", a, true);
            ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
                D[P](e, a, true)
            });
            if (/d$|^c/.test(D.readyState)) {
                l()
            } else {
                q("load", l);
                D[P]("DOMContentLoaded", a);
                I(l, 2e4)
            }
            if (k.elements.length) {
                t();
                ee._lsFlush()
            } else {
                a()
            }
        },
        checkElems: a,
        unveil: R,
        _aLSL: o
    }
}(), re = function () {
    var a;
    var n = te(function (e, t, a, i) {
        var r, n, s;
        e._lazysizesWidth = i;
        i += "px";
        e.setAttribute("sizes", i);
        if (j.test(t.nodeName || "")) {
            r = t.getElementsByTagName("source");
            for (n = 0, s = r.length; n < s; n++) {
                r[n].setAttribute("sizes", i)
            }
        }
        if (!a.detail.dataAttr) {
            Y(e, a.detail)
        }
    });
    var i = function (e, t, a) {
        var i;
        var r = e.parentNode;
        if (r) {
            a = s(e, r, a);
            i = X(e, "lazybeforesizes", {
                width: a,
                dataAttr: !!t
            });
            if (!i.defaultPrevented) {
                a = i.detail.width;
                if (a && a !== e._lazysizesWidth) {
                    n(e, r, i, a)
                }
            }
        }
    };
    var e = function () {
        var e;
        var t = a.length;
        if (t) {
            e = 0;
            for (; e < t; e++) {
                i(a[e])
            }
        }
    };
    var t = ie(e);
    return {
        _: function () {
            a = D.getElementsByClassName(H.autosizesClass);
            q("resize", t)
        },
        checkElems: t,
        updateElem: i
    }
}(), t = function () {
    if (!t.i && D.getElementsByClassName) {
        t.i = true;
        re._();
        e._()
    }
};
return I(function () {
    H.init && t()
}), k = {
    cfg: H,
    autoSizer: re,
    loader: e,
    init: t,
    uP: Y,
    aC: K,
    rC: Q,
    hC: J,
    fire: X,
    gW: s,
    rAF: ee
}
}(e, e.document, Date);
"object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd ? define(t) : e.lazySizes = t
}(window); < /script> <script>  document.addEventListener(&#39;lazybeforeunveil&#39;, function(e){ var bg = e.target.getAttribute(&#39;data-bg&#39;); if(bg){ e.target.style.backgroundImage = &#39;url(&#39; + bg + &#39;)&#39;; } }); </script > < script > window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.requireJs = function (modules, cb) {
    window.require(modules, cb);
}; < /script> <script>  !function(t,e){t.InfiniteScroll=function(n){function r(t,n){return n=n||e,n.querySelectorAll(t)}function o(t){return void 0!==t}function a(t){return"function"==typeof t}function i(t,e){t=t||{};for(var n in e)t[n]="object"==typeof e[n]?i(t[n],e[n]):e[n];return t}function s(t,e,n){return o(t)?o(e)?void(o(n)?g[t][n]=e:g[t].push(e)):g[t]:g}function d(t,e){o(e)?delete g[t][e]:g[t]=[]}function l(t,e){if(o(g[t]))for(var n in g[t])g[t][n](e)}function c(){return L.innerHTML=p.text.loading,v=!0,M?(y.classList.add(p.state.loading),l("loading",[p]),void u(M,function(t,n){y.className=x+" "+p.state.load,h=e.createElement("div"),h.innerHTML=t;var o=r("title",h),a=r(p.target.post,h),i=r(p.target.anchors+" "+p.target.anchor,h),s=r(p.target.post,H);if(o=o&&o[0]?o[0].innerHTML:"",a.length&&s.length){var d=s[s.length-1];e.title=o,d.insertAdjacentHTML("afterend"," "),h=e.createElement("div");for(var c=0,u=a.length;u>c;++c)h.appendChild(a[c]);d.insertAdjacentHTML("afterend",h.innerHTML),f(),M=i.length?i[0].href:!1,v=!1,q++,l("load",[p,t,n])}},function(t,e){y.classList.add(p.state.error),v=!1,f(1),l("error",[p,t,e])})):(y.classList.add(p.state.loaded),L.innerHTML=p.text.loaded,l("loaded",[p]))}function f(t){if(L.innerHTML="",T){h.innerHTML=p.text[t?"error":"load"];var e=h.firstChild;e.onclick=function(){return 2===p.type&&(T=!1),c(),!1},L.appendChild(e)}}var u="infinite-scroll-state-",p={target:{posts:".posts",post:".post",anchors:".anchors",anchor:".anchor"},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"},state:{load:u+"load",loading:u+"loading",loaded:u+"loaded",error:u+"error"}},g={load:[],loading:[],loaded:[],error:[]};p=i(p,n||{}),p.on=s,p.off=d;var h=null,u=function(e,n,r){if(t.XMLHttpRequest){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)return void(r&&a(r)&&r(o.responseText,o));n&&a(n)&&n(o.responseText,o)}},o.open("GET",e),o.send()}},T=1!==p.type,v=!1,H=r(p.target.posts)[0],L=r(p.target.anchors)[0],M=r(p.target.anchor,L),m=e.body,y=e.documentElement,x=y.className||"",E=H.offsetTop+H.offsetHeight,j=t.innerHeight,A=0,b=null,q=1;if(M.length){M=M[0].href,H.insertAdjacentHTML("afterbegin"," "),h=e.createElement("div"),f();var w=function(){E=H.offsetTop+H.offsetHeight,j=t.innerHeight,A=m.scrollTop||y.scrollTop,v||E>A+j||c()};w(),0!==p.type&&t.addEventListener("scroll",function(){T||(b&&t.clearTimeout(b),b=t.setTimeout(w,200))},!1)}return p}}(window,document); if(typeof InfiniteScroll !== "undefined") { var infinite_scroll = new InfiniteScroll ({ type: 0, target: { posts: ".blogPosts", post: ".hentry", anchors: ".blogPager", anchor: ".olderLink"}, text: { load: "<a class=&#39;jsLoad&#39; data-text=&#39;Load more posts&#39; href=&#39;javascript:;&#39;></a > ", loading: " < div class = & #39;jsLoad wait&# 39;
data - text = & #39;Loading&hellip;&# 39; > < svg viewBox = & #39;0 0 50 50&# 39;
x = & #39;0px&# 39;
y = & #39;0px&# 39; > < path d = & #39;M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z&# 39; > < animateTransform attributeName = & #39;transform&# 39;
attributeType = & #39;xml&# 39;
dur = & #39;0.6s&# 39;
from = & #39;0 25 25&# 39;
repeatCount = & #39;indefinite&# 39;
to = & #39;360 25 25&# 39;
type = & #39;rotate&# 39; > < /animateTransform></path > < /svg></div > ", loaded: " < div class = & #39;jsLoad noPost&# 39;
data - text = & #39;No results found&# 39; > < /div>", error: "<a class=&#39;jsLoad error&#39; data-text=&#39;More&hellip;&#39; href=&#39;javascript:;&#39;></a > "} }); }
