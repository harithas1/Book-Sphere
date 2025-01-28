function Jg(n, o) {
  for (var i = 0; i < o.length; i++) {
    const s = o[i];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const u in s)
        if (u !== "default" && !(u in n)) {
          const c = Object.getOwnPropertyDescriptor(s, u);
          c &&
            Object.defineProperty(
              n,
              u,
              c.get ? c : { enumerable: !0, get: () => s[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const c of u)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(u) {
    const c = {};
    return (
      u.integrity && (c.integrity = u.integrity),
      u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const c = i(u);
    fetch(u.href, c);
  }
})();
function op(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var ha = { exports: {} },
  po = {},
  ma = { exports: {} },
  ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var df;
function Zg() {
  if (df) return ce;
  df = 1;
  var n = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function E(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (C && j[C]) || j["@@iterator"]),
        typeof j == "function" ? j : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    S = {};
  function k(j, z, ue) {
    (this.props = j),
      (this.context = z),
      (this.refs = S),
      (this.updater = ue || T);
  }
  (k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (j, z) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, j, z, "setState");
    }),
    (k.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    });
  function P() {}
  P.prototype = k.prototype;
  function L(j, z, ue) {
    (this.props = j),
      (this.context = z),
      (this.refs = S),
      (this.updater = ue || T);
  }
  var F = (L.prototype = new P());
  (F.constructor = L), R(F, k.prototype), (F.isPureReactComponent = !0);
  var $ = Array.isArray,
    H = Object.prototype.hasOwnProperty,
    V = { current: null },
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(j, z, ue) {
    var de,
      he = {},
      me = null,
      Se = null;
    if (z != null)
      for (de in (z.ref !== void 0 && (Se = z.ref),
      z.key !== void 0 && (me = "" + z.key),
      z))
        H.call(z, de) && !Q.hasOwnProperty(de) && (he[de] = z[de]);
    var ye = arguments.length - 2;
    if (ye === 1) he.children = ue;
    else if (1 < ye) {
      for (var be = Array(ye), ct = 0; ct < ye; ct++)
        be[ct] = arguments[ct + 2];
      he.children = be;
    }
    if (j && j.defaultProps)
      for (de in ((ye = j.defaultProps), ye))
        he[de] === void 0 && (he[de] = ye[de]);
    return {
      $$typeof: n,
      type: j,
      key: me,
      ref: Se,
      props: he,
      _owner: V.current,
    };
  }
  function se(j, z) {
    return {
      $$typeof: n,
      type: j.type,
      key: z,
      ref: j.ref,
      props: j.props,
      _owner: j._owner,
    };
  }
  function ve(j) {
    return typeof j == "object" && j !== null && j.$$typeof === n;
  }
  function De(j) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      j.replace(/[=:]/g, function (ue) {
        return z[ue];
      })
    );
  }
  var ae = /\/+/g;
  function I(j, z) {
    return typeof j == "object" && j !== null && j.key != null
      ? De("" + j.key)
      : z.toString(36);
  }
  function Fe(j, z, ue, de, he) {
    var me = typeof j;
    (me === "undefined" || me === "boolean") && (j = null);
    var Se = !1;
    if (j === null) Se = !0;
    else
      switch (me) {
        case "string":
        case "number":
          Se = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case n:
            case o:
              Se = !0;
          }
      }
    if (Se)
      return (
        (Se = j),
        (he = he(Se)),
        (j = de === "" ? "." + I(Se, 0) : de),
        $(he)
          ? ((ue = ""),
            j != null && (ue = j.replace(ae, "$&/") + "/"),
            Fe(he, z, ue, "", function (ct) {
              return ct;
            }))
          : he != null &&
            (ve(he) &&
              (he = se(
                he,
                ue +
                  (!he.key || (Se && Se.key === he.key)
                    ? ""
                    : ("" + he.key).replace(ae, "$&/") + "/") +
                  j
              )),
            z.push(he)),
        1
      );
    if (((Se = 0), (de = de === "" ? "." : de + ":"), $(j)))
      for (var ye = 0; ye < j.length; ye++) {
        me = j[ye];
        var be = de + I(me, ye);
        Se += Fe(me, z, ue, be, he);
      }
    else if (((be = E(j)), typeof be == "function"))
      for (j = be.call(j), ye = 0; !(me = j.next()).done; )
        (me = me.value), (be = de + I(me, ye++)), (Se += Fe(me, z, ue, be, he));
    else if (me === "object")
      throw (
        ((z = String(j)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(j).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Se;
  }
  function Je(j, z, ue) {
    if (j == null) return j;
    var de = [],
      he = 0;
    return (
      Fe(j, de, "", "", function (me) {
        return z.call(ue, me, he++);
      }),
      de
    );
  }
  function xe(j) {
    if (j._status === -1) {
      var z = j._result;
      (z = z()),
        z.then(
          function (ue) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 1), (j._result = ue));
          },
          function (ue) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 2), (j._result = ue));
          }
        ),
        j._status === -1 && ((j._status = 0), (j._result = z));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var Ce = { current: null },
    K = { transition: null },
    te = {
      ReactCurrentDispatcher: Ce,
      ReactCurrentBatchConfig: K,
      ReactCurrentOwner: V,
    };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ce.Children = {
      map: Je,
      forEach: function (j, z, ue) {
        Je(
          j,
          function () {
            z.apply(this, arguments);
          },
          ue
        );
      },
      count: function (j) {
        var z = 0;
        return (
          Je(j, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (j) {
        return (
          Je(j, function (z) {
            return z;
          }) || []
        );
      },
      only: function (j) {
        if (!ve(j))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return j;
      },
    }),
    (ce.Component = k),
    (ce.Fragment = i),
    (ce.Profiler = u),
    (ce.PureComponent = L),
    (ce.StrictMode = s),
    (ce.Suspense = y),
    (ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te),
    (ce.act = q),
    (ce.cloneElement = function (j, z, ue) {
      if (j == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            j +
            "."
        );
      var de = R({}, j.props),
        he = j.key,
        me = j.ref,
        Se = j._owner;
      if (z != null) {
        if (
          (z.ref !== void 0 && ((me = z.ref), (Se = V.current)),
          z.key !== void 0 && (he = "" + z.key),
          j.type && j.type.defaultProps)
        )
          var ye = j.type.defaultProps;
        for (be in z)
          H.call(z, be) &&
            !Q.hasOwnProperty(be) &&
            (de[be] = z[be] === void 0 && ye !== void 0 ? ye[be] : z[be]);
      }
      var be = arguments.length - 2;
      if (be === 1) de.children = ue;
      else if (1 < be) {
        ye = Array(be);
        for (var ct = 0; ct < be; ct++) ye[ct] = arguments[ct + 2];
        de.children = ye;
      }
      return {
        $$typeof: n,
        type: j.type,
        key: he,
        ref: me,
        props: de,
        _owner: Se,
      };
    }),
    (ce.createContext = function (j) {
      return (
        (j = {
          $$typeof: f,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (j.Provider = { $$typeof: c, _context: j }),
        (j.Consumer = j)
      );
    }),
    (ce.createElement = ee),
    (ce.createFactory = function (j) {
      var z = ee.bind(null, j);
      return (z.type = j), z;
    }),
    (ce.createRef = function () {
      return { current: null };
    }),
    (ce.forwardRef = function (j) {
      return { $$typeof: p, render: j };
    }),
    (ce.isValidElement = ve),
    (ce.lazy = function (j) {
      return { $$typeof: w, _payload: { _status: -1, _result: j }, _init: xe };
    }),
    (ce.memo = function (j, z) {
      return { $$typeof: g, type: j, compare: z === void 0 ? null : z };
    }),
    (ce.startTransition = function (j) {
      var z = K.transition;
      K.transition = {};
      try {
        j();
      } finally {
        K.transition = z;
      }
    }),
    (ce.unstable_act = q),
    (ce.useCallback = function (j, z) {
      return Ce.current.useCallback(j, z);
    }),
    (ce.useContext = function (j) {
      return Ce.current.useContext(j);
    }),
    (ce.useDebugValue = function () {}),
    (ce.useDeferredValue = function (j) {
      return Ce.current.useDeferredValue(j);
    }),
    (ce.useEffect = function (j, z) {
      return Ce.current.useEffect(j, z);
    }),
    (ce.useId = function () {
      return Ce.current.useId();
    }),
    (ce.useImperativeHandle = function (j, z, ue) {
      return Ce.current.useImperativeHandle(j, z, ue);
    }),
    (ce.useInsertionEffect = function (j, z) {
      return Ce.current.useInsertionEffect(j, z);
    }),
    (ce.useLayoutEffect = function (j, z) {
      return Ce.current.useLayoutEffect(j, z);
    }),
    (ce.useMemo = function (j, z) {
      return Ce.current.useMemo(j, z);
    }),
    (ce.useReducer = function (j, z, ue) {
      return Ce.current.useReducer(j, z, ue);
    }),
    (ce.useRef = function (j) {
      return Ce.current.useRef(j);
    }),
    (ce.useState = function (j) {
      return Ce.current.useState(j);
    }),
    (ce.useSyncExternalStore = function (j, z, ue) {
      return Ce.current.useSyncExternalStore(j, z, ue);
    }),
    (ce.useTransition = function () {
      return Ce.current.useTransition();
    }),
    (ce.version = "18.3.1"),
    ce
  );
}
var ff;
function qa() {
  return ff || ((ff = 1), (ma.exports = Zg())), ma.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf;
function ev() {
  if (pf) return po;
  pf = 1;
  var n = qa(),
    o = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, y, g) {
    var w,
      C = {},
      E = null,
      T = null;
    g !== void 0 && (E = "" + g),
      y.key !== void 0 && (E = "" + y.key),
      y.ref !== void 0 && (T = y.ref);
    for (w in y) s.call(y, w) && !c.hasOwnProperty(w) && (C[w] = y[w]);
    if (p && p.defaultProps)
      for (w in ((y = p.defaultProps), y)) C[w] === void 0 && (C[w] = y[w]);
    return {
      $$typeof: o,
      type: p,
      key: E,
      ref: T,
      props: C,
      _owner: u.current,
    };
  }
  return (po.Fragment = i), (po.jsx = f), (po.jsxs = f), po;
}
var hf;
function tv() {
  return hf || ((hf = 1), (ha.exports = ev())), ha.exports;
}
var m = tv(),
  v = qa();
const Sn = op(v),
  nv = Jg({ __proto__: null, default: Sn }, [v]);
var Ui = {},
  ga = { exports: {} },
  at = {},
  va = { exports: {} },
  ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mf;
function rv() {
  return (
    mf ||
      ((mf = 1),
      (function (n) {
        function o(K, te) {
          var q = K.length;
          K.push(te);
          e: for (; 0 < q; ) {
            var j = (q - 1) >>> 1,
              z = K[j];
            if (0 < u(z, te)) (K[j] = te), (K[q] = z), (q = j);
            else break e;
          }
        }
        function i(K) {
          return K.length === 0 ? null : K[0];
        }
        function s(K) {
          if (K.length === 0) return null;
          var te = K[0],
            q = K.pop();
          if (q !== te) {
            K[0] = q;
            e: for (var j = 0, z = K.length, ue = z >>> 1; j < ue; ) {
              var de = 2 * (j + 1) - 1,
                he = K[de],
                me = de + 1,
                Se = K[me];
              if (0 > u(he, q))
                me < z && 0 > u(Se, he)
                  ? ((K[j] = Se), (K[me] = q), (j = me))
                  : ((K[j] = he), (K[de] = q), (j = de));
              else if (me < z && 0 > u(Se, q))
                (K[j] = Se), (K[me] = q), (j = me);
              else break e;
            }
          }
          return te;
        }
        function u(K, te) {
          var q = K.sortIndex - te.sortIndex;
          return q !== 0 ? q : K.id - te.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var y = [],
          g = [],
          w = 1,
          C = null,
          E = 3,
          T = !1,
          R = !1,
          S = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function F(K) {
          for (var te = i(g); te !== null; ) {
            if (te.callback === null) s(g);
            else if (te.startTime <= K)
              s(g), (te.sortIndex = te.expirationTime), o(y, te);
            else break;
            te = i(g);
          }
        }
        function $(K) {
          if (((S = !1), F(K), !R))
            if (i(y) !== null) (R = !0), xe(H);
            else {
              var te = i(g);
              te !== null && Ce($, te.startTime - K);
            }
        }
        function H(K, te) {
          (R = !1), S && ((S = !1), P(ee), (ee = -1)), (T = !0);
          var q = E;
          try {
            for (
              F(te), C = i(y);
              C !== null && (!(C.expirationTime > te) || (K && !De()));

            ) {
              var j = C.callback;
              if (typeof j == "function") {
                (C.callback = null), (E = C.priorityLevel);
                var z = j(C.expirationTime <= te);
                (te = n.unstable_now()),
                  typeof z == "function"
                    ? (C.callback = z)
                    : C === i(y) && s(y),
                  F(te);
              } else s(y);
              C = i(y);
            }
            if (C !== null) var ue = !0;
            else {
              var de = i(g);
              de !== null && Ce($, de.startTime - te), (ue = !1);
            }
            return ue;
          } finally {
            (C = null), (E = q), (T = !1);
          }
        }
        var V = !1,
          Q = null,
          ee = -1,
          se = 5,
          ve = -1;
        function De() {
          return !(n.unstable_now() - ve < se);
        }
        function ae() {
          if (Q !== null) {
            var K = n.unstable_now();
            ve = K;
            var te = !0;
            try {
              te = Q(!0, K);
            } finally {
              te ? I() : ((V = !1), (Q = null));
            }
          } else V = !1;
        }
        var I;
        if (typeof L == "function")
          I = function () {
            L(ae);
          };
        else if (typeof MessageChannel < "u") {
          var Fe = new MessageChannel(),
            Je = Fe.port2;
          (Fe.port1.onmessage = ae),
            (I = function () {
              Je.postMessage(null);
            });
        } else
          I = function () {
            k(ae, 0);
          };
        function xe(K) {
          (Q = K), V || ((V = !0), I());
        }
        function Ce(K, te) {
          ee = k(function () {
            K(n.unstable_now());
          }, te);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (K) {
            K.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            R || T || ((R = !0), xe(H));
          }),
          (n.unstable_forceFrameRate = function (K) {
            0 > K || 125 < K
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (se = 0 < K ? Math.floor(1e3 / K) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return i(y);
          }),
          (n.unstable_next = function (K) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var te = 3;
                break;
              default:
                te = E;
            }
            var q = E;
            E = te;
            try {
              return K();
            } finally {
              E = q;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (K, te) {
            switch (K) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                K = 3;
            }
            var q = E;
            E = K;
            try {
              return te();
            } finally {
              E = q;
            }
          }),
          (n.unstable_scheduleCallback = function (K, te, q) {
            var j = n.unstable_now();
            switch (
              (typeof q == "object" && q !== null
                ? ((q = q.delay),
                  (q = typeof q == "number" && 0 < q ? j + q : j))
                : (q = j),
              K)
            ) {
              case 1:
                var z = -1;
                break;
              case 2:
                z = 250;
                break;
              case 5:
                z = 1073741823;
                break;
              case 4:
                z = 1e4;
                break;
              default:
                z = 5e3;
            }
            return (
              (z = q + z),
              (K = {
                id: w++,
                callback: te,
                priorityLevel: K,
                startTime: q,
                expirationTime: z,
                sortIndex: -1,
              }),
              q > j
                ? ((K.sortIndex = q),
                  o(g, K),
                  i(y) === null &&
                    K === i(g) &&
                    (S ? (P(ee), (ee = -1)) : (S = !0), Ce($, q - j)))
                : ((K.sortIndex = z), o(y, K), R || T || ((R = !0), xe(H))),
              K
            );
          }),
          (n.unstable_shouldYield = De),
          (n.unstable_wrapCallback = function (K) {
            var te = E;
            return function () {
              var q = E;
              E = te;
              try {
                return K.apply(this, arguments);
              } finally {
                E = q;
              }
            };
          });
      })(ya)),
    ya
  );
}
var gf;
function ov() {
  return gf || ((gf = 1), (va.exports = rv())), va.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf;
function iv() {
  if (vf) return at;
  vf = 1;
  var n = qa(),
    o = ov();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    u = {};
  function c(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    y = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    C = {};
  function E(e) {
    return y.call(C, e)
      ? !0
      : y.call(w, e)
      ? !1
      : g.test(e)
      ? (C[e] = !0)
      : ((w[e] = !0), !1);
  }
  function T(e, t, r, l) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function R(e, t, r, l) {
    if (t === null || typeof t > "u" || T(e, t, r, l)) return !0;
    if (l) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function S(e, t, r, l, a, d, h) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = h);
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      k[e] = new S(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      k[t] = new S(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      k[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      k[e] = new S(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        k[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      k[e] = new S(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      k[e] = new S(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      k[e] = new S(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      k[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var P = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(P, L);
      k[t] = new S(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(P, L);
        k[t] = new S(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(P, L);
      k[t] = new S(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      k[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (k.xlinkHref = new S(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      k[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function F(e, t, r, l) {
    var a = k.hasOwnProperty(t) ? k[t] : null;
    (a !== null
      ? a.type !== 0
      : l ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (R(t, r, a, l) && (r = null),
      l || a === null
        ? E(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
        : ((t = a.attributeName),
          (l = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
              l ? e.setAttributeNS(l, t, r) : e.setAttribute(t, r))));
  }
  var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    H = Symbol.for("react.element"),
    V = Symbol.for("react.portal"),
    Q = Symbol.for("react.fragment"),
    ee = Symbol.for("react.strict_mode"),
    se = Symbol.for("react.profiler"),
    ve = Symbol.for("react.provider"),
    De = Symbol.for("react.context"),
    ae = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    Fe = Symbol.for("react.suspense_list"),
    Je = Symbol.for("react.memo"),
    xe = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.offscreen"),
    K = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (K && e[K]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var q = Object.assign,
    j;
  function z(e) {
    if (j === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        j = (t && t[1]) || "";
      }
    return (
      `
` +
      j +
      e
    );
  }
  var ue = !1;
  function de(e, t) {
    if (!e || ue) return "";
    ue = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (A) {
            var l = A;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (A) {
            l = A;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          l = A;
        }
        e();
      }
    } catch (A) {
      if (A && l && typeof A.stack == "string") {
        for (
          var a = A.stack.split(`
`),
            d = l.stack.split(`
`),
            h = a.length - 1,
            x = d.length - 1;
          1 <= h && 0 <= x && a[h] !== d[x];

        )
          x--;
        for (; 1 <= h && 0 <= x; h--, x--)
          if (a[h] !== d[x]) {
            if (h !== 1 || x !== 1)
              do
                if ((h--, x--, 0 > x || a[h] !== d[x])) {
                  var N =
                    `
` + a[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= h && 0 <= x);
            break;
          }
      }
    } finally {
      (ue = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function he(e) {
    switch (e.tag) {
      case 5:
        return z(e.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = de(e.type, !1)), e;
      case 11:
        return (e = de(e.type.render, !1)), e;
      case 1:
        return (e = de(e.type, !0)), e;
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Q:
        return "Fragment";
      case V:
        return "Portal";
      case se:
        return "Profiler";
      case ee:
        return "StrictMode";
      case I:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case De:
          return (e.displayName || "Context") + ".Consumer";
        case ve:
          return (e._context.displayName || "Context") + ".Provider";
        case ae:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Je:
          return (
            (t = e.displayName || null), t !== null ? t : me(e.type) || "Memo"
          );
        case xe:
          (t = e._payload), (e = e._init);
          try {
            return me(e(t));
          } catch {}
      }
    return null;
  }
  function Se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return me(t);
      case 8:
        return t === ee ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ye(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function be(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ct(e) {
    var t = be(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        d = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (h) {
            (l = "" + h), d.call(this, h);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (h) {
            l = "" + h;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function _o(e) {
    e._valueTracker || (e._valueTracker = ct(e));
  }
  function gu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      l = "";
    return (
      e && (l = be(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Oo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Sl(e, t) {
    var r = t.checked;
    return q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function vu(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    (r = ye(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function yu(e, t) {
    (t = t.checked), t != null && F(e, "checked", t, !1);
  }
  function El(e, t) {
    yu(e, t);
    var r = ye(t.value),
      l = t.type;
    if (r != null)
      l === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Cl(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && Cl(e, t.type, ye(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function wu(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function Cl(e, t, r) {
    (t !== "number" || Oo(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var br = Array.isArray;
  function Hn(e, t, r, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + ye(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          (e[a].selected = !0), l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function xu(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(i(92));
        if (br(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: ye(r) };
  }
  function Su(e, t) {
    var r = ye(t.value),
      l = ye(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      l != null && (e.defaultValue = "" + l);
  }
  function Eu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Cu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Cu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Lo,
    ku = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, l, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, l, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Lo = Lo || document.createElement("div"),
            Lo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Lo.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Pr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Tr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    nm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Tr).forEach(function (e) {
    nm.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]);
    });
  });
  function Ru(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Nu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var l = r.indexOf("--") === 0,
          a = Ru(r, t[r], l);
        r === "float" && (r = "cssFloat"), l ? e.setProperty(r, a) : (e[r] = a);
      }
  }
  var rm = q(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Nl(e, t) {
    if (t) {
      if (rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function bl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Pl = null;
  function Tl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var jl = null,
    Kn = null,
    Gn = null;
  function bu(e) {
    if ((e = Xr(e))) {
      if (typeof jl != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = ni(t)), jl(e.stateNode, e.type, t));
    }
  }
  function Pu(e) {
    Kn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Kn = e);
  }
  function Tu() {
    if (Kn) {
      var e = Kn,
        t = Gn;
      if (((Gn = Kn = null), bu(e), t)) for (e = 0; e < t.length; e++) bu(t[e]);
    }
  }
  function ju(e, t) {
    return e(t);
  }
  function _u() {}
  var _l = !1;
  function Ou(e, t, r) {
    if (_l) return e(t, r);
    _l = !0;
    try {
      return ju(e, t, r);
    } finally {
      (_l = !1), (Kn !== null || Gn !== null) && (_u(), Tu());
    }
  }
  function jr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = ni(r);
    if (l === null) return null;
    r = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(i(231, t, typeof r));
    return r;
  }
  var Ol = !1;
  if (p)
    try {
      var _r = {};
      Object.defineProperty(_r, "passive", {
        get: function () {
          Ol = !0;
        },
      }),
        window.addEventListener("test", _r, _r),
        window.removeEventListener("test", _r, _r);
    } catch {
      Ol = !1;
    }
  function om(e, t, r, l, a, d, h, x, N) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, A);
    } catch (B) {
      this.onError(B);
    }
  }
  var Or = !1,
    Ao = null,
    Do = !1,
    Ll = null,
    im = {
      onError: function (e) {
        (Or = !0), (Ao = e);
      },
    };
  function lm(e, t, r, l, a, d, h, x, N) {
    (Or = !1), (Ao = null), om.apply(im, arguments);
  }
  function sm(e, t, r, l, a, d, h, x, N) {
    if ((lm.apply(this, arguments), Or)) {
      if (Or) {
        var A = Ao;
        (Or = !1), (Ao = null);
      } else throw Error(i(198));
      Do || ((Do = !0), (Ll = A));
    }
  }
  function Nn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Lu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Au(e) {
    if (Nn(e) !== e) throw Error(i(188));
  }
  function am(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Nn(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var r = e, l = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var d = a.alternate;
      if (d === null) {
        if (((l = a.return), l !== null)) {
          r = l;
          continue;
        }
        break;
      }
      if (a.child === d.child) {
        for (d = a.child; d; ) {
          if (d === r) return Au(a), e;
          if (d === l) return Au(a), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== l.return) (r = a), (l = d);
      else {
        for (var h = !1, x = a.child; x; ) {
          if (x === r) {
            (h = !0), (r = a), (l = d);
            break;
          }
          if (x === l) {
            (h = !0), (l = a), (r = d);
            break;
          }
          x = x.sibling;
        }
        if (!h) {
          for (x = d.child; x; ) {
            if (x === r) {
              (h = !0), (r = d), (l = a);
              break;
            }
            if (x === l) {
              (h = !0), (l = d), (r = a);
              break;
            }
            x = x.sibling;
          }
          if (!h) throw Error(i(189));
        }
      }
      if (r.alternate !== l) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : t;
  }
  function Du(e) {
    return (e = am(e)), e !== null ? Iu(e) : null;
  }
  function Iu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Iu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Fu = o.unstable_scheduleCallback,
    Mu = o.unstable_cancelCallback,
    um = o.unstable_shouldYield,
    cm = o.unstable_requestPaint,
    Le = o.unstable_now,
    dm = o.unstable_getCurrentPriorityLevel,
    Al = o.unstable_ImmediatePriority,
    zu = o.unstable_UserBlockingPriority,
    Io = o.unstable_NormalPriority,
    fm = o.unstable_LowPriority,
    Bu = o.unstable_IdlePriority,
    Fo = null,
    Lt = null;
  function pm(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function")
      try {
        Lt.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Et = Math.clz32 ? Math.clz32 : gm,
    hm = Math.log,
    mm = Math.LN2;
  function gm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((hm(e) / mm) | 0)) | 0;
  }
  var Mo = 64,
    zo = 4194304;
  function Lr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Bo(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var l = 0,
      a = e.suspendedLanes,
      d = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var x = h & ~a;
      x !== 0 ? (l = Lr(x)) : ((d &= h), d !== 0 && (l = Lr(d)));
    } else (h = r & ~a), h !== 0 ? (l = Lr(h)) : d !== 0 && (l = Lr(d));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      !(t & a) &&
      ((a = l & -l), (d = t & -t), a >= d || (a === 16 && (d & 4194240) !== 0))
    )
      return t;
    if ((l & 4 && (l |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t; )
        (r = 31 - Et(t)), (a = 1 << r), (l |= e[r]), (t &= ~a);
    return l;
  }
  function vm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ym(e, t) {
    for (
      var r = e.suspendedLanes,
        l = e.pingedLanes,
        a = e.expirationTimes,
        d = e.pendingLanes;
      0 < d;

    ) {
      var h = 31 - Et(d),
        x = 1 << h,
        N = a[h];
      N === -1
        ? (!(x & r) || x & l) && (a[h] = vm(x, t))
        : N <= t && (e.expiredLanes |= x),
        (d &= ~x);
    }
  }
  function Dl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Uu() {
    var e = Mo;
    return (Mo <<= 1), !(Mo & 4194240) && (Mo = 64), e;
  }
  function Il(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Ar(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Et(t)),
      (e[t] = r);
  }
  function wm(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - Et(r),
        d = 1 << a;
      (t[a] = 0), (l[a] = -1), (e[a] = -1), (r &= ~d);
    }
  }
  function Fl(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var l = 31 - Et(r),
        a = 1 << l;
      (a & t) | (e[l] & t) && (e[l] |= t), (r &= ~a);
    }
  }
  var we = 0;
  function $u(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Wu,
    Ml,
    Vu,
    Hu,
    Ku,
    zl = !1,
    Uo = [],
    Zt = null,
    en = null,
    tn = null,
    Dr = new Map(),
    Ir = new Map(),
    nn = [],
    xm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Gu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zt = null;
        break;
      case "dragenter":
      case "dragleave":
        en = null;
        break;
      case "mouseover":
      case "mouseout":
        tn = null;
        break;
      case "pointerover":
      case "pointerout":
        Dr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ir.delete(t.pointerId);
    }
  }
  function Fr(e, t, r, l, a, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: l,
          nativeEvent: d,
          targetContainers: [a],
        }),
        t !== null && ((t = Xr(t)), t !== null && Ml(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Sm(e, t, r, l, a) {
    switch (t) {
      case "focusin":
        return (Zt = Fr(Zt, e, t, r, l, a)), !0;
      case "dragenter":
        return (en = Fr(en, e, t, r, l, a)), !0;
      case "mouseover":
        return (tn = Fr(tn, e, t, r, l, a)), !0;
      case "pointerover":
        var d = a.pointerId;
        return Dr.set(d, Fr(Dr.get(d) || null, e, t, r, l, a)), !0;
      case "gotpointercapture":
        return (
          (d = a.pointerId), Ir.set(d, Fr(Ir.get(d) || null, e, t, r, l, a)), !0
        );
    }
    return !1;
  }
  function Qu(e) {
    var t = bn(e.target);
    if (t !== null) {
      var r = Nn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Lu(r)), t !== null)) {
            (e.blockedOn = t),
              Ku(e.priority, function () {
                Vu(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function $o(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        (Pl = l), r.target.dispatchEvent(l), (Pl = null);
      } else return (t = Xr(r)), t !== null && Ml(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function qu(e, t, r) {
    $o(e) && r.delete(t);
  }
  function Em() {
    (zl = !1),
      Zt !== null && $o(Zt) && (Zt = null),
      en !== null && $o(en) && (en = null),
      tn !== null && $o(tn) && (tn = null),
      Dr.forEach(qu),
      Ir.forEach(qu);
  }
  function Mr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      zl ||
        ((zl = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, Em)));
  }
  function zr(e) {
    function t(a) {
      return Mr(a, e);
    }
    if (0 < Uo.length) {
      Mr(Uo[0], e);
      for (var r = 1; r < Uo.length; r++) {
        var l = Uo[r];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      Zt !== null && Mr(Zt, e),
        en !== null && Mr(en, e),
        tn !== null && Mr(tn, e),
        Dr.forEach(t),
        Ir.forEach(t),
        r = 0;
      r < nn.length;
      r++
    )
      (l = nn[r]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < nn.length && ((r = nn[0]), r.blockedOn === null); )
      Qu(r), r.blockedOn === null && nn.shift();
  }
  var Qn = $.ReactCurrentBatchConfig,
    Wo = !0;
  function Cm(e, t, r, l) {
    var a = we,
      d = Qn.transition;
    Qn.transition = null;
    try {
      (we = 1), Bl(e, t, r, l);
    } finally {
      (we = a), (Qn.transition = d);
    }
  }
  function km(e, t, r, l) {
    var a = we,
      d = Qn.transition;
    Qn.transition = null;
    try {
      (we = 4), Bl(e, t, r, l);
    } finally {
      (we = a), (Qn.transition = d);
    }
  }
  function Bl(e, t, r, l) {
    if (Wo) {
      var a = Ul(e, t, r, l);
      if (a === null) os(e, t, l, Vo, r), Gu(e, l);
      else if (Sm(a, e, t, r, l)) l.stopPropagation();
      else if ((Gu(e, l), t & 4 && -1 < xm.indexOf(e))) {
        for (; a !== null; ) {
          var d = Xr(a);
          if (
            (d !== null && Wu(d),
            (d = Ul(e, t, r, l)),
            d === null && os(e, t, l, Vo, r),
            d === a)
          )
            break;
          a = d;
        }
        a !== null && l.stopPropagation();
      } else os(e, t, l, null, r);
    }
  }
  var Vo = null;
  function Ul(e, t, r, l) {
    if (((Vo = null), (e = Tl(l)), (e = bn(e)), e !== null))
      if (((t = Nn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Lu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Vo = e), null;
  }
  function Yu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (dm()) {
          case Al:
            return 1;
          case zu:
            return 4;
          case Io:
          case fm:
            return 16;
          case Bu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var rn = null,
    $l = null,
    Ho = null;
  function Xu() {
    if (Ho) return Ho;
    var e,
      t = $l,
      r = t.length,
      l,
      a = "value" in rn ? rn.value : rn.textContent,
      d = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (l = 1; l <= h && t[r - l] === a[d - l]; l++);
    return (Ho = a.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Ko(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Go() {
    return !0;
  }
  function Ju() {
    return !1;
  }
  function dt(e) {
    function t(r, l, a, d, h) {
      (this._reactName = r),
        (this._targetInst = a),
        (this.type = l),
        (this.nativeEvent = d),
        (this.target = h),
        (this.currentTarget = null);
      for (var x in e)
        e.hasOwnProperty(x) && ((r = e[x]), (this[x] = r ? r(d) : d[x]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Go
          : Ju),
        (this.isPropagationStopped = Ju),
        this
      );
    }
    return (
      q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Go));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Go));
        },
        persist: function () {},
        isPersistent: Go,
      }),
      t
    );
  }
  var qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wl = dt(qn),
    Br = q({}, qn, { view: 0, detail: 0 }),
    Rm = dt(Br),
    Vl,
    Hl,
    Ur,
    Qo = q({}, Br, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ur &&
              (Ur && e.type === "mousemove"
                ? ((Vl = e.screenX - Ur.screenX), (Hl = e.screenY - Ur.screenY))
                : (Hl = Vl = 0),
              (Ur = e)),
            Vl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Hl;
      },
    }),
    Zu = dt(Qo),
    Nm = q({}, Qo, { dataTransfer: 0 }),
    bm = dt(Nm),
    Pm = q({}, Br, { relatedTarget: 0 }),
    Kl = dt(Pm),
    Tm = q({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jm = dt(Tm),
    _m = q({}, qn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Om = dt(_m),
    Lm = q({}, qn, { data: 0 }),
    ec = dt(Lm),
    Am = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Dm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Im = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Fm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Im[e])
      ? !!t[e]
      : !1;
  }
  function Gl() {
    return Fm;
  }
  var Mm = q({}, Br, {
      key: function (e) {
        if (e.key) {
          var t = Am[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ko(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Dm[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gl,
      charCode: function (e) {
        return e.type === "keypress" ? Ko(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ko(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    zm = dt(Mm),
    Bm = q({}, Qo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    tc = dt(Bm),
    Um = q({}, Br, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gl,
    }),
    $m = dt(Um),
    Wm = q({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vm = dt(Wm),
    Hm = q({}, Qo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Km = dt(Hm),
    Gm = [9, 13, 27, 32],
    Ql = p && "CompositionEvent" in window,
    $r = null;
  p && "documentMode" in document && ($r = document.documentMode);
  var Qm = p && "TextEvent" in window && !$r,
    nc = p && (!Ql || ($r && 8 < $r && 11 >= $r)),
    rc = " ",
    oc = !1;
  function ic(e, t) {
    switch (e) {
      case "keyup":
        return Gm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Yn = !1;
  function qm(e, t) {
    switch (e) {
      case "compositionend":
        return lc(t);
      case "keypress":
        return t.which !== 32 ? null : ((oc = !0), rc);
      case "textInput":
        return (e = t.data), e === rc && oc ? null : e;
      default:
        return null;
    }
  }
  function Ym(e, t) {
    if (Yn)
      return e === "compositionend" || (!Ql && ic(e, t))
        ? ((e = Xu()), (Ho = $l = rn = null), (Yn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return nc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Xm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xm[e.type] : t === "textarea";
  }
  function ac(e, t, r, l) {
    Pu(l),
      (t = Zo(t, "onChange")),
      0 < t.length &&
        ((r = new Wl("onChange", "change", null, r, l)),
        e.push({ event: r, listeners: t }));
  }
  var Wr = null,
    Vr = null;
  function Jm(e) {
    Nc(e, 0);
  }
  function qo(e) {
    var t = tr(e);
    if (gu(t)) return e;
  }
  function Zm(e, t) {
    if (e === "change") return t;
  }
  var uc = !1;
  if (p) {
    var ql;
    if (p) {
      var Yl = "oninput" in document;
      if (!Yl) {
        var cc = document.createElement("div");
        cc.setAttribute("oninput", "return;"),
          (Yl = typeof cc.oninput == "function");
      }
      ql = Yl;
    } else ql = !1;
    uc = ql && (!document.documentMode || 9 < document.documentMode);
  }
  function dc() {
    Wr && (Wr.detachEvent("onpropertychange", fc), (Vr = Wr = null));
  }
  function fc(e) {
    if (e.propertyName === "value" && qo(Vr)) {
      var t = [];
      ac(t, Vr, e, Tl(e)), Ou(Jm, t);
    }
  }
  function eg(e, t, r) {
    e === "focusin"
      ? (dc(), (Wr = t), (Vr = r), Wr.attachEvent("onpropertychange", fc))
      : e === "focusout" && dc();
  }
  function tg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return qo(Vr);
  }
  function ng(e, t) {
    if (e === "click") return qo(t);
  }
  function rg(e, t) {
    if (e === "input" || e === "change") return qo(t);
  }
  function og(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ct = typeof Object.is == "function" ? Object.is : og;
  function Hr(e, t) {
    if (Ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      l = Object.keys(t);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var a = r[l];
      if (!y.call(t, a) || !Ct(e[a], t[a])) return !1;
    }
    return !0;
  }
  function pc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hc(e, t) {
    var r = pc(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (((l = e + r.textContent.length), e <= t && l >= t))
          return { node: r, offset: t - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = pc(r);
    }
  }
  function mc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? mc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function gc() {
    for (var e = window, t = Oo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Oo(e.document);
    }
    return t;
  }
  function Xl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function ig(e) {
    var t = gc(),
      r = e.focusedElem,
      l = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      mc(r.ownerDocument.documentElement, r)
    ) {
      if (l !== null && Xl(r)) {
        if (
          ((t = l.start),
          (e = l.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            d = Math.min(l.start, a);
          (l = l.end === void 0 ? d : Math.min(l.end, a)),
            !e.extend && d > l && ((a = l), (l = d), (d = a)),
            (a = hc(r, d));
          var h = hc(r, l);
          a &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            d > l
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var lg = p && "documentMode" in document && 11 >= document.documentMode,
    Xn = null,
    Jl = null,
    Kr = null,
    Zl = !1;
  function vc(e, t, r) {
    var l =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Zl ||
      Xn == null ||
      Xn !== Oo(l) ||
      ((l = Xn),
      "selectionStart" in l && Xl(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Kr && Hr(Kr, l)) ||
        ((Kr = l),
        (l = Zo(Jl, "onSelect")),
        0 < l.length &&
          ((t = new Wl("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: l }),
          (t.target = Xn))));
  }
  function Yo(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Jn = {
      animationend: Yo("Animation", "AnimationEnd"),
      animationiteration: Yo("Animation", "AnimationIteration"),
      animationstart: Yo("Animation", "AnimationStart"),
      transitionend: Yo("Transition", "TransitionEnd"),
    },
    es = {},
    yc = {};
  p &&
    ((yc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Jn.animationend.animation,
      delete Jn.animationiteration.animation,
      delete Jn.animationstart.animation),
    "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Xo(e) {
    if (es[e]) return es[e];
    if (!Jn[e]) return e;
    var t = Jn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in yc) return (es[e] = t[r]);
    return e;
  }
  var wc = Xo("animationend"),
    xc = Xo("animationiteration"),
    Sc = Xo("animationstart"),
    Ec = Xo("transitionend"),
    Cc = new Map(),
    kc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function on(e, t) {
    Cc.set(e, t), c(t, [e]);
  }
  for (var ts = 0; ts < kc.length; ts++) {
    var ns = kc[ts],
      sg = ns.toLowerCase(),
      ag = ns[0].toUpperCase() + ns.slice(1);
    on(sg, "on" + ag);
  }
  on(wc, "onAnimationEnd"),
    on(xc, "onAnimationIteration"),
    on(Sc, "onAnimationStart"),
    on("dblclick", "onDoubleClick"),
    on("focusin", "onFocus"),
    on("focusout", "onBlur"),
    on(Ec, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Gr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ug = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Gr)
    );
  function Rc(e, t, r) {
    var l = e.type || "unknown-event";
    (e.currentTarget = r), sm(l, t, void 0, e), (e.currentTarget = null);
  }
  function Nc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r],
        a = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var h = l.length - 1; 0 <= h; h--) {
            var x = l[h],
              N = x.instance,
              A = x.currentTarget;
            if (((x = x.listener), N !== d && a.isPropagationStopped()))
              break e;
            Rc(a, x, A), (d = N);
          }
        else
          for (h = 0; h < l.length; h++) {
            if (
              ((x = l[h]),
              (N = x.instance),
              (A = x.currentTarget),
              (x = x.listener),
              N !== d && a.isPropagationStopped())
            )
              break e;
            Rc(a, x, A), (d = N);
          }
      }
    }
    if (Do) throw ((e = Ll), (Do = !1), (Ll = null), e);
  }
  function ke(e, t) {
    var r = t[cs];
    r === void 0 && (r = t[cs] = new Set());
    var l = e + "__bubble";
    r.has(l) || (bc(t, e, 2, !1), r.add(l));
  }
  function rs(e, t, r) {
    var l = 0;
    t && (l |= 4), bc(r, e, l, t);
  }
  var Jo = "_reactListening" + Math.random().toString(36).slice(2);
  function Qr(e) {
    if (!e[Jo]) {
      (e[Jo] = !0),
        s.forEach(function (r) {
          r !== "selectionchange" && (ug.has(r) || rs(r, !1, e), rs(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jo] || ((t[Jo] = !0), rs("selectionchange", !1, t));
    }
  }
  function bc(e, t, r, l) {
    switch (Yu(t)) {
      case 1:
        var a = Cm;
        break;
      case 4:
        a = km;
        break;
      default:
        a = Bl;
    }
    (r = a.bind(null, t, r, e)),
      (a = void 0),
      !Ol ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      l
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1);
  }
  function os(e, t, r, l, a) {
    var d = l;
    if (!(t & 1) && !(t & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var h = l.tag;
        if (h === 3 || h === 4) {
          var x = l.stateNode.containerInfo;
          if (x === a || (x.nodeType === 8 && x.parentNode === a)) break;
          if (h === 4)
            for (h = l.return; h !== null; ) {
              var N = h.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = h.stateNode.containerInfo),
                N === a || (N.nodeType === 8 && N.parentNode === a))
              )
                return;
              h = h.return;
            }
          for (; x !== null; ) {
            if (((h = bn(x)), h === null)) return;
            if (((N = h.tag), N === 5 || N === 6)) {
              l = d = h;
              continue e;
            }
            x = x.parentNode;
          }
        }
        l = l.return;
      }
    Ou(function () {
      var A = d,
        B = Tl(r),
        U = [];
      e: {
        var M = Cc.get(e);
        if (M !== void 0) {
          var G = Wl,
            X = e;
          switch (e) {
            case "keypress":
              if (Ko(r) === 0) break e;
            case "keydown":
            case "keyup":
              G = zm;
              break;
            case "focusin":
              (X = "focus"), (G = Kl);
              break;
            case "focusout":
              (X = "blur"), (G = Kl);
              break;
            case "beforeblur":
            case "afterblur":
              G = Kl;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = Zu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = bm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = $m;
              break;
            case wc:
            case xc:
            case Sc:
              G = jm;
              break;
            case Ec:
              G = Vm;
              break;
            case "scroll":
              G = Rm;
              break;
            case "wheel":
              G = Km;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Om;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = tc;
          }
          var J = (t & 4) !== 0,
            Ae = !J && e === "scroll",
            _ = J ? (M !== null ? M + "Capture" : null) : M;
          J = [];
          for (var b = A, O; b !== null; ) {
            O = b;
            var W = O.stateNode;
            if (
              (O.tag === 5 &&
                W !== null &&
                ((O = W),
                _ !== null &&
                  ((W = jr(b, _)), W != null && J.push(qr(b, W, O)))),
              Ae)
            )
              break;
            b = b.return;
          }
          0 < J.length &&
            ((M = new G(M, X, null, r, B)), U.push({ event: M, listeners: J }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((M = e === "mouseover" || e === "pointerover"),
            (G = e === "mouseout" || e === "pointerout"),
            M &&
              r !== Pl &&
              (X = r.relatedTarget || r.fromElement) &&
              (bn(X) || X[$t]))
          )
            break e;
          if (
            (G || M) &&
            ((M =
              B.window === B
                ? B
                : (M = B.ownerDocument)
                ? M.defaultView || M.parentWindow
                : window),
            G
              ? ((X = r.relatedTarget || r.toElement),
                (G = A),
                (X = X ? bn(X) : null),
                X !== null &&
                  ((Ae = Nn(X)), X !== Ae || (X.tag !== 5 && X.tag !== 6)) &&
                  (X = null))
              : ((G = null), (X = A)),
            G !== X)
          ) {
            if (
              ((J = Zu),
              (W = "onMouseLeave"),
              (_ = "onMouseEnter"),
              (b = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = tc),
                (W = "onPointerLeave"),
                (_ = "onPointerEnter"),
                (b = "pointer")),
              (Ae = G == null ? M : tr(G)),
              (O = X == null ? M : tr(X)),
              (M = new J(W, b + "leave", G, r, B)),
              (M.target = Ae),
              (M.relatedTarget = O),
              (W = null),
              bn(B) === A &&
                ((J = new J(_, b + "enter", X, r, B)),
                (J.target = O),
                (J.relatedTarget = Ae),
                (W = J)),
              (Ae = W),
              G && X)
            )
              t: {
                for (J = G, _ = X, b = 0, O = J; O; O = Zn(O)) b++;
                for (O = 0, W = _; W; W = Zn(W)) O++;
                for (; 0 < b - O; ) (J = Zn(J)), b--;
                for (; 0 < O - b; ) (_ = Zn(_)), O--;
                for (; b--; ) {
                  if (J === _ || (_ !== null && J === _.alternate)) break t;
                  (J = Zn(J)), (_ = Zn(_));
                }
                J = null;
              }
            else J = null;
            G !== null && Pc(U, M, G, J, !1),
              X !== null && Ae !== null && Pc(U, Ae, X, J, !0);
          }
        }
        e: {
          if (
            ((M = A ? tr(A) : window),
            (G = M.nodeName && M.nodeName.toLowerCase()),
            G === "select" || (G === "input" && M.type === "file"))
          )
            var Z = Zm;
          else if (sc(M))
            if (uc) Z = rg;
            else {
              Z = tg;
              var ne = eg;
            }
          else
            (G = M.nodeName) &&
              G.toLowerCase() === "input" &&
              (M.type === "checkbox" || M.type === "radio") &&
              (Z = ng);
          if (Z && (Z = Z(e, A))) {
            ac(U, Z, r, B);
            break e;
          }
          ne && ne(e, M, A),
            e === "focusout" &&
              (ne = M._wrapperState) &&
              ne.controlled &&
              M.type === "number" &&
              Cl(M, "number", M.value);
        }
        switch (((ne = A ? tr(A) : window), e)) {
          case "focusin":
            (sc(ne) || ne.contentEditable === "true") &&
              ((Xn = ne), (Jl = A), (Kr = null));
            break;
          case "focusout":
            Kr = Jl = Xn = null;
            break;
          case "mousedown":
            Zl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Zl = !1), vc(U, r, B);
            break;
          case "selectionchange":
            if (lg) break;
          case "keydown":
          case "keyup":
            vc(U, r, B);
        }
        var re;
        if (Ql)
          e: {
            switch (e) {
              case "compositionstart":
                var oe = "onCompositionStart";
                break e;
              case "compositionend":
                oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                oe = "onCompositionUpdate";
                break e;
            }
            oe = void 0;
          }
        else
          Yn
            ? ic(e, r) && (oe = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (oe = "onCompositionStart");
        oe &&
          (nc &&
            r.locale !== "ko" &&
            (Yn || oe !== "onCompositionStart"
              ? oe === "onCompositionEnd" && Yn && (re = Xu())
              : ((rn = B),
                ($l = "value" in rn ? rn.value : rn.textContent),
                (Yn = !0))),
          (ne = Zo(A, oe)),
          0 < ne.length &&
            ((oe = new ec(oe, e, null, r, B)),
            U.push({ event: oe, listeners: ne }),
            re
              ? (oe.data = re)
              : ((re = lc(r)), re !== null && (oe.data = re)))),
          (re = Qm ? qm(e, r) : Ym(e, r)) &&
            ((A = Zo(A, "onBeforeInput")),
            0 < A.length &&
              ((B = new ec("onBeforeInput", "beforeinput", null, r, B)),
              U.push({ event: B, listeners: A }),
              (B.data = re)));
      }
      Nc(U, t);
    });
  }
  function qr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Zo(e, t) {
    for (var r = t + "Capture", l = []; e !== null; ) {
      var a = e,
        d = a.stateNode;
      a.tag === 5 &&
        d !== null &&
        ((a = d),
        (d = jr(e, r)),
        d != null && l.unshift(qr(e, d, a)),
        (d = jr(e, t)),
        d != null && l.push(qr(e, d, a))),
        (e = e.return);
    }
    return l;
  }
  function Zn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Pc(e, t, r, l, a) {
    for (var d = t._reactName, h = []; r !== null && r !== l; ) {
      var x = r,
        N = x.alternate,
        A = x.stateNode;
      if (N !== null && N === l) break;
      x.tag === 5 &&
        A !== null &&
        ((x = A),
        a
          ? ((N = jr(r, d)), N != null && h.unshift(qr(r, N, x)))
          : a || ((N = jr(r, d)), N != null && h.push(qr(r, N, x)))),
        (r = r.return);
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var cg = /\r\n?/g,
    dg = /\u0000|\uFFFD/g;
  function Tc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        cg,
        `
`
      )
      .replace(dg, "");
  }
  function ei(e, t, r) {
    if (((t = Tc(t)), Tc(e) !== t && r)) throw Error(i(425));
  }
  function ti() {}
  var is = null,
    ls = null;
  function ss(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var as = typeof setTimeout == "function" ? setTimeout : void 0,
    fg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jc = typeof Promise == "function" ? Promise : void 0,
    pg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jc < "u"
        ? function (e) {
            return jc.resolve(null).then(e).catch(hg);
          }
        : as;
  function hg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function us(e, t) {
    var r = t,
      l = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (l === 0) {
            e.removeChild(a), zr(t);
            return;
          }
          l--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || l++;
      r = a;
    } while (r);
    zr(t);
  }
  function ln(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function _c(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var er = Math.random().toString(36).slice(2),
    At = "__reactFiber$" + er,
    Yr = "__reactProps$" + er,
    $t = "__reactContainer$" + er,
    cs = "__reactEvents$" + er,
    mg = "__reactListeners$" + er,
    gg = "__reactHandles$" + er;
  function bn(e) {
    var t = e[At];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[$t] || r[At])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = _c(e); e !== null; ) {
            if ((r = e[At])) return r;
            e = _c(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Xr(e) {
    return (
      (e = e[At] || e[$t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ni(e) {
    return e[Yr] || null;
  }
  var ds = [],
    nr = -1;
  function sn(e) {
    return { current: e };
  }
  function Re(e) {
    0 > nr || ((e.current = ds[nr]), (ds[nr] = null), nr--);
  }
  function Ee(e, t) {
    nr++, (ds[nr] = e.current), (e.current = t);
  }
  var an = {},
    Ke = sn(an),
    rt = sn(!1),
    Pn = an;
  function rr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return an;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      d;
    for (d in r) a[d] = t[d];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function ot(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ri() {
    Re(rt), Re(Ke);
  }
  function Oc(e, t, r) {
    if (Ke.current !== an) throw Error(i(168));
    Ee(Ke, t), Ee(rt, r);
  }
  function Lc(e, t, r) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
      return r;
    l = l.getChildContext();
    for (var a in l) if (!(a in t)) throw Error(i(108, Se(e) || "Unknown", a));
    return q({}, r, l);
  }
  function oi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        an),
      (Pn = Ke.current),
      Ee(Ke, e),
      Ee(rt, rt.current),
      !0
    );
  }
  function Ac(e, t, r) {
    var l = e.stateNode;
    if (!l) throw Error(i(169));
    r
      ? ((e = Lc(e, t, Pn)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        Re(rt),
        Re(Ke),
        Ee(Ke, e))
      : Re(rt),
      Ee(rt, r);
  }
  var Wt = null,
    ii = !1,
    fs = !1;
  function Dc(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
  }
  function vg(e) {
    (ii = !0), Dc(e);
  }
  function un() {
    if (!fs && Wt !== null) {
      fs = !0;
      var e = 0,
        t = we;
      try {
        var r = Wt;
        for (we = 1; e < r.length; e++) {
          var l = r[e];
          do l = l(!0);
          while (l !== null);
        }
        (Wt = null), (ii = !1);
      } catch (a) {
        throw (Wt !== null && (Wt = Wt.slice(e + 1)), Fu(Al, un), a);
      } finally {
        (we = t), (fs = !1);
      }
    }
    return null;
  }
  var or = [],
    ir = 0,
    li = null,
    si = 0,
    gt = [],
    vt = 0,
    Tn = null,
    Vt = 1,
    Ht = "";
  function jn(e, t) {
    (or[ir++] = si), (or[ir++] = li), (li = e), (si = t);
  }
  function Ic(e, t, r) {
    (gt[vt++] = Vt), (gt[vt++] = Ht), (gt[vt++] = Tn), (Tn = e);
    var l = Vt;
    e = Ht;
    var a = 32 - Et(l) - 1;
    (l &= ~(1 << a)), (r += 1);
    var d = 32 - Et(t) + a;
    if (30 < d) {
      var h = a - (a % 5);
      (d = (l & ((1 << h) - 1)).toString(32)),
        (l >>= h),
        (a -= h),
        (Vt = (1 << (32 - Et(t) + a)) | (r << a) | l),
        (Ht = d + e);
    } else (Vt = (1 << d) | (r << a) | l), (Ht = e);
  }
  function ps(e) {
    e.return !== null && (jn(e, 1), Ic(e, 1, 0));
  }
  function hs(e) {
    for (; e === li; )
      (li = or[--ir]), (or[ir] = null), (si = or[--ir]), (or[ir] = null);
    for (; e === Tn; )
      (Tn = gt[--vt]),
        (gt[vt] = null),
        (Ht = gt[--vt]),
        (gt[vt] = null),
        (Vt = gt[--vt]),
        (gt[vt] = null);
  }
  var ft = null,
    pt = null,
    Pe = !1,
    kt = null;
  function Fc(e, t) {
    var r = St(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Mc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ft = e), (pt = ln(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (pt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Tn !== null ? { id: Vt, overflow: Ht } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = St(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (ft = e),
              (pt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ms(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function gs(e) {
    if (Pe) {
      var t = pt;
      if (t) {
        var r = t;
        if (!Mc(e, t)) {
          if (ms(e)) throw Error(i(418));
          t = ln(r.nextSibling);
          var l = ft;
          t && Mc(e, t)
            ? Fc(l, r)
            : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (ft = e));
        }
      } else {
        if (ms(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (Pe = !1), (ft = e);
      }
    }
  }
  function zc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ft = e;
  }
  function ai(e) {
    if (e !== ft) return !1;
    if (!Pe) return zc(e), (Pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ss(e.type, e.memoizedProps))),
      t && (t = pt))
    ) {
      if (ms(e)) throw (Bc(), Error(i(418)));
      for (; t; ) Fc(e, t), (t = ln(t.nextSibling));
    }
    if ((zc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                pt = ln(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        pt = null;
      }
    } else pt = ft ? ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bc() {
    for (var e = pt; e; ) e = ln(e.nextSibling);
  }
  function lr() {
    (pt = ft = null), (Pe = !1);
  }
  function vs(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  var yg = $.ReactCurrentBatchConfig;
  function Jr(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(i(309));
          var l = r.stateNode;
        }
        if (!l) throw Error(i(147, e));
        var a = l,
          d = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === d
          ? t.ref
          : ((t = function (h) {
              var x = a.refs;
              h === null ? delete x[d] : (x[d] = h);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!r._owner) throw Error(i(290, e));
    }
    return e;
  }
  function ui(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Uc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $c(e) {
    function t(_, b) {
      if (e) {
        var O = _.deletions;
        O === null ? ((_.deletions = [b]), (_.flags |= 16)) : O.push(b);
      }
    }
    function r(_, b) {
      if (!e) return null;
      for (; b !== null; ) t(_, b), (b = b.sibling);
      return null;
    }
    function l(_, b) {
      for (_ = new Map(); b !== null; )
        b.key !== null ? _.set(b.key, b) : _.set(b.index, b), (b = b.sibling);
      return _;
    }
    function a(_, b) {
      return (_ = vn(_, b)), (_.index = 0), (_.sibling = null), _;
    }
    function d(_, b, O) {
      return (
        (_.index = O),
        e
          ? ((O = _.alternate),
            O !== null
              ? ((O = O.index), O < b ? ((_.flags |= 2), b) : O)
              : ((_.flags |= 2), b))
          : ((_.flags |= 1048576), b)
      );
    }
    function h(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function x(_, b, O, W) {
      return b === null || b.tag !== 6
        ? ((b = aa(O, _.mode, W)), (b.return = _), b)
        : ((b = a(b, O)), (b.return = _), b);
    }
    function N(_, b, O, W) {
      var Z = O.type;
      return Z === Q
        ? B(_, b, O.props.children, W, O.key)
        : b !== null &&
          (b.elementType === Z ||
            (typeof Z == "object" &&
              Z !== null &&
              Z.$$typeof === xe &&
              Uc(Z) === b.type))
        ? ((W = a(b, O.props)), (W.ref = Jr(_, b, O)), (W.return = _), W)
        : ((W = Li(O.type, O.key, O.props, null, _.mode, W)),
          (W.ref = Jr(_, b, O)),
          (W.return = _),
          W);
    }
    function A(_, b, O, W) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== O.containerInfo ||
        b.stateNode.implementation !== O.implementation
        ? ((b = ua(O, _.mode, W)), (b.return = _), b)
        : ((b = a(b, O.children || [])), (b.return = _), b);
    }
    function B(_, b, O, W, Z) {
      return b === null || b.tag !== 7
        ? ((b = Mn(O, _.mode, W, Z)), (b.return = _), b)
        : ((b = a(b, O)), (b.return = _), b);
    }
    function U(_, b, O) {
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return (b = aa("" + b, _.mode, O)), (b.return = _), b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case H:
            return (
              (O = Li(b.type, b.key, b.props, null, _.mode, O)),
              (O.ref = Jr(_, null, b)),
              (O.return = _),
              O
            );
          case V:
            return (b = ua(b, _.mode, O)), (b.return = _), b;
          case xe:
            var W = b._init;
            return U(_, W(b._payload), O);
        }
        if (br(b) || te(b))
          return (b = Mn(b, _.mode, O, null)), (b.return = _), b;
        ui(_, b);
      }
      return null;
    }
    function M(_, b, O, W) {
      var Z = b !== null ? b.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return Z !== null ? null : x(_, b, "" + O, W);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case H:
            return O.key === Z ? N(_, b, O, W) : null;
          case V:
            return O.key === Z ? A(_, b, O, W) : null;
          case xe:
            return (Z = O._init), M(_, b, Z(O._payload), W);
        }
        if (br(O) || te(O)) return Z !== null ? null : B(_, b, O, W, null);
        ui(_, O);
      }
      return null;
    }
    function G(_, b, O, W, Z) {
      if ((typeof W == "string" && W !== "") || typeof W == "number")
        return (_ = _.get(O) || null), x(b, _, "" + W, Z);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case H:
            return (
              (_ = _.get(W.key === null ? O : W.key) || null), N(b, _, W, Z)
            );
          case V:
            return (
              (_ = _.get(W.key === null ? O : W.key) || null), A(b, _, W, Z)
            );
          case xe:
            var ne = W._init;
            return G(_, b, O, ne(W._payload), Z);
        }
        if (br(W) || te(W)) return (_ = _.get(O) || null), B(b, _, W, Z, null);
        ui(b, W);
      }
      return null;
    }
    function X(_, b, O, W) {
      for (
        var Z = null, ne = null, re = b, oe = (b = 0), $e = null;
        re !== null && oe < O.length;
        oe++
      ) {
        re.index > oe ? (($e = re), (re = null)) : ($e = re.sibling);
        var ge = M(_, re, O[oe], W);
        if (ge === null) {
          re === null && (re = $e);
          break;
        }
        e && re && ge.alternate === null && t(_, re),
          (b = d(ge, b, oe)),
          ne === null ? (Z = ge) : (ne.sibling = ge),
          (ne = ge),
          (re = $e);
      }
      if (oe === O.length) return r(_, re), Pe && jn(_, oe), Z;
      if (re === null) {
        for (; oe < O.length; oe++)
          (re = U(_, O[oe], W)),
            re !== null &&
              ((b = d(re, b, oe)),
              ne === null ? (Z = re) : (ne.sibling = re),
              (ne = re));
        return Pe && jn(_, oe), Z;
      }
      for (re = l(_, re); oe < O.length; oe++)
        ($e = G(re, _, oe, O[oe], W)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              re.delete($e.key === null ? oe : $e.key),
            (b = d($e, b, oe)),
            ne === null ? (Z = $e) : (ne.sibling = $e),
            (ne = $e));
      return (
        e &&
          re.forEach(function (yn) {
            return t(_, yn);
          }),
        Pe && jn(_, oe),
        Z
      );
    }
    function J(_, b, O, W) {
      var Z = te(O);
      if (typeof Z != "function") throw Error(i(150));
      if (((O = Z.call(O)), O == null)) throw Error(i(151));
      for (
        var ne = (Z = null), re = b, oe = (b = 0), $e = null, ge = O.next();
        re !== null && !ge.done;
        oe++, ge = O.next()
      ) {
        re.index > oe ? (($e = re), (re = null)) : ($e = re.sibling);
        var yn = M(_, re, ge.value, W);
        if (yn === null) {
          re === null && (re = $e);
          break;
        }
        e && re && yn.alternate === null && t(_, re),
          (b = d(yn, b, oe)),
          ne === null ? (Z = yn) : (ne.sibling = yn),
          (ne = yn),
          (re = $e);
      }
      if (ge.done) return r(_, re), Pe && jn(_, oe), Z;
      if (re === null) {
        for (; !ge.done; oe++, ge = O.next())
          (ge = U(_, ge.value, W)),
            ge !== null &&
              ((b = d(ge, b, oe)),
              ne === null ? (Z = ge) : (ne.sibling = ge),
              (ne = ge));
        return Pe && jn(_, oe), Z;
      }
      for (re = l(_, re); !ge.done; oe++, ge = O.next())
        (ge = G(re, _, oe, ge.value, W)),
          ge !== null &&
            (e &&
              ge.alternate !== null &&
              re.delete(ge.key === null ? oe : ge.key),
            (b = d(ge, b, oe)),
            ne === null ? (Z = ge) : (ne.sibling = ge),
            (ne = ge));
      return (
        e &&
          re.forEach(function (Xg) {
            return t(_, Xg);
          }),
        Pe && jn(_, oe),
        Z
      );
    }
    function Ae(_, b, O, W) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === Q &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case H:
            e: {
              for (var Z = O.key, ne = b; ne !== null; ) {
                if (ne.key === Z) {
                  if (((Z = O.type), Z === Q)) {
                    if (ne.tag === 7) {
                      r(_, ne.sibling),
                        (b = a(ne, O.props.children)),
                        (b.return = _),
                        (_ = b);
                      break e;
                    }
                  } else if (
                    ne.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === xe &&
                      Uc(Z) === ne.type)
                  ) {
                    r(_, ne.sibling),
                      (b = a(ne, O.props)),
                      (b.ref = Jr(_, ne, O)),
                      (b.return = _),
                      (_ = b);
                    break e;
                  }
                  r(_, ne);
                  break;
                } else t(_, ne);
                ne = ne.sibling;
              }
              O.type === Q
                ? ((b = Mn(O.props.children, _.mode, W, O.key)),
                  (b.return = _),
                  (_ = b))
                : ((W = Li(O.type, O.key, O.props, null, _.mode, W)),
                  (W.ref = Jr(_, b, O)),
                  (W.return = _),
                  (_ = W));
            }
            return h(_);
          case V:
            e: {
              for (ne = O.key; b !== null; ) {
                if (b.key === ne)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === O.containerInfo &&
                    b.stateNode.implementation === O.implementation
                  ) {
                    r(_, b.sibling),
                      (b = a(b, O.children || [])),
                      (b.return = _),
                      (_ = b);
                    break e;
                  } else {
                    r(_, b);
                    break;
                  }
                else t(_, b);
                b = b.sibling;
              }
              (b = ua(O, _.mode, W)), (b.return = _), (_ = b);
            }
            return h(_);
          case xe:
            return (ne = O._init), Ae(_, b, ne(O._payload), W);
        }
        if (br(O)) return X(_, b, O, W);
        if (te(O)) return J(_, b, O, W);
        ui(_, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          b !== null && b.tag === 6
            ? (r(_, b.sibling), (b = a(b, O)), (b.return = _), (_ = b))
            : (r(_, b), (b = aa(O, _.mode, W)), (b.return = _), (_ = b)),
          h(_))
        : r(_, b);
    }
    return Ae;
  }
  var sr = $c(!0),
    Wc = $c(!1),
    ci = sn(null),
    di = null,
    ar = null,
    ys = null;
  function ws() {
    ys = ar = di = null;
  }
  function xs(e) {
    var t = ci.current;
    Re(ci), (e._currentValue = t);
  }
  function Ss(e, t, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function ur(e, t) {
    (di = e),
      (ys = ar = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (it = !0), (e.firstContext = null));
  }
  function yt(e) {
    var t = e._currentValue;
    if (ys !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ar === null)) {
        if (di === null) throw Error(i(308));
        (ar = e), (di.dependencies = { lanes: 0, firstContext: e });
      } else ar = ar.next = e;
    return t;
  }
  var _n = null;
  function Es(e) {
    _n === null ? (_n = [e]) : _n.push(e);
  }
  function Vc(e, t, r, l) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), Es(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Kt(e, l)
    );
  }
  function Kt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var cn = !1;
  function Cs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Hc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Gt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function dn(e, t, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), fe & 2)) {
      var a = l.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (l.pending = t),
        Kt(e, r)
      );
    }
    return (
      (a = l.interleaved),
      a === null ? ((t.next = t), Es(l)) : ((t.next = a.next), (a.next = t)),
      (l.interleaved = t),
      Kt(e, r)
    );
  }
  function fi(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), Fl(e, r);
    }
  }
  function Kc(e, t) {
    var r = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), r === l)) {
      var a = null,
        d = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var h = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          d === null ? (a = d = h) : (d = d.next = h), (r = r.next);
        } while (r !== null);
        d === null ? (a = d = t) : (d = d.next = t);
      } else a = d = t;
      (r = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: d,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function pi(e, t, r, l) {
    var a = e.updateQueue;
    cn = !1;
    var d = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      x = a.shared.pending;
    if (x !== null) {
      a.shared.pending = null;
      var N = x,
        A = N.next;
      (N.next = null), h === null ? (d = A) : (h.next = A), (h = N);
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (x = B.lastBaseUpdate),
        x !== h &&
          (x === null ? (B.firstBaseUpdate = A) : (x.next = A),
          (B.lastBaseUpdate = N)));
    }
    if (d !== null) {
      var U = a.baseState;
      (h = 0), (B = A = N = null), (x = d);
      do {
        var M = x.lane,
          G = x.eventTime;
        if ((l & M) === M) {
          B !== null &&
            (B = B.next =
              {
                eventTime: G,
                lane: 0,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null,
              });
          e: {
            var X = e,
              J = x;
            switch (((M = t), (G = r), J.tag)) {
              case 1:
                if (((X = J.payload), typeof X == "function")) {
                  U = X.call(G, U, M);
                  break e;
                }
                U = X;
                break e;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = J.payload),
                  (M = typeof X == "function" ? X.call(G, U, M) : X),
                  M == null)
                )
                  break e;
                U = q({}, U, M);
                break e;
              case 2:
                cn = !0;
            }
          }
          x.callback !== null &&
            x.lane !== 0 &&
            ((e.flags |= 64),
            (M = a.effects),
            M === null ? (a.effects = [x]) : M.push(x));
        } else
          (G = {
            eventTime: G,
            lane: M,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            B === null ? ((A = B = G), (N = U)) : (B = B.next = G),
            (h |= M);
        if (((x = x.next), x === null)) {
          if (((x = a.shared.pending), x === null)) break;
          (M = x),
            (x = M.next),
            (M.next = null),
            (a.lastBaseUpdate = M),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (B === null && (N = U),
        (a.baseState = N),
        (a.firstBaseUpdate = A),
        (a.lastBaseUpdate = B),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do (h |= a.lane), (a = a.next);
        while (a !== t);
      } else d === null && (a.shared.lanes = 0);
      (An |= h), (e.lanes = h), (e.memoizedState = U);
    }
  }
  function Gc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          a = l.callback;
        if (a !== null) {
          if (((l.callback = null), (l = r), typeof a != "function"))
            throw Error(i(191, a));
          a.call(l);
        }
      }
  }
  var Zr = {},
    Dt = sn(Zr),
    eo = sn(Zr),
    to = sn(Zr);
  function On(e) {
    if (e === Zr) throw Error(i(174));
    return e;
  }
  function ks(e, t) {
    switch ((Ee(to, t), Ee(eo, e), Ee(Dt, Zr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Rl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Rl(t, e));
    }
    Re(Dt), Ee(Dt, t);
  }
  function cr() {
    Re(Dt), Re(eo), Re(to);
  }
  function Qc(e) {
    On(to.current);
    var t = On(Dt.current),
      r = Rl(t, e.type);
    t !== r && (Ee(eo, e), Ee(Dt, r));
  }
  function Rs(e) {
    eo.current === e && (Re(Dt), Re(eo));
  }
  var je = sn(0);
  function hi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ns = [];
  function bs() {
    for (var e = 0; e < Ns.length; e++)
      Ns[e]._workInProgressVersionPrimary = null;
    Ns.length = 0;
  }
  var mi = $.ReactCurrentDispatcher,
    Ps = $.ReactCurrentBatchConfig,
    Ln = 0,
    _e = null,
    Me = null,
    Be = null,
    gi = !1,
    no = !1,
    ro = 0,
    wg = 0;
  function Ge() {
    throw Error(i(321));
  }
  function Ts(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Ct(e[r], t[r])) return !1;
    return !0;
  }
  function js(e, t, r, l, a, d) {
    if (
      ((Ln = d),
      (_e = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (mi.current = e === null || e.memoizedState === null ? Cg : kg),
      (e = r(l, a)),
      no)
    ) {
      d = 0;
      do {
        if (((no = !1), (ro = 0), 25 <= d)) throw Error(i(301));
        (d += 1),
          (Be = Me = null),
          (t.updateQueue = null),
          (mi.current = Rg),
          (e = r(l, a));
      } while (no);
    }
    if (
      ((mi.current = wi),
      (t = Me !== null && Me.next !== null),
      (Ln = 0),
      (Be = Me = _e = null),
      (gi = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function _s() {
    var e = ro !== 0;
    return (ro = 0), e;
  }
  function It() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Be === null ? (_e.memoizedState = Be = e) : (Be = Be.next = e), Be;
  }
  function wt() {
    if (Me === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Be === null ? _e.memoizedState : Be.next;
    if (t !== null) (Be = t), (Me = e);
    else {
      if (e === null) throw Error(i(310));
      (Me = e),
        (e = {
          memoizedState: Me.memoizedState,
          baseState: Me.baseState,
          baseQueue: Me.baseQueue,
          queue: Me.queue,
          next: null,
        }),
        Be === null ? (_e.memoizedState = Be = e) : (Be = Be.next = e);
    }
    return Be;
  }
  function oo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Os(e) {
    var t = wt(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var l = Me,
      a = l.baseQueue,
      d = r.pending;
    if (d !== null) {
      if (a !== null) {
        var h = a.next;
        (a.next = d.next), (d.next = h);
      }
      (l.baseQueue = a = d), (r.pending = null);
    }
    if (a !== null) {
      (d = a.next), (l = l.baseState);
      var x = (h = null),
        N = null,
        A = d;
      do {
        var B = A.lane;
        if ((Ln & B) === B)
          N !== null &&
            (N = N.next =
              {
                lane: 0,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null,
              }),
            (l = A.hasEagerState ? A.eagerState : e(l, A.action));
        else {
          var U = {
            lane: B,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null,
          };
          N === null ? ((x = N = U), (h = l)) : (N = N.next = U),
            (_e.lanes |= B),
            (An |= B);
        }
        A = A.next;
      } while (A !== null && A !== d);
      N === null ? (h = l) : (N.next = x),
        Ct(l, t.memoizedState) || (it = !0),
        (t.memoizedState = l),
        (t.baseState = h),
        (t.baseQueue = N),
        (r.lastRenderedState = l);
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do (d = a.lane), (_e.lanes |= d), (An |= d), (a = a.next);
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Ls(e) {
    var t = wt(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch,
      a = r.pending,
      d = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var h = (a = a.next);
      do (d = e(d, h.action)), (h = h.next);
      while (h !== a);
      Ct(d, t.memoizedState) || (it = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (r.lastRenderedState = d);
    }
    return [d, l];
  }
  function qc() {}
  function Yc(e, t) {
    var r = _e,
      l = wt(),
      a = t(),
      d = !Ct(l.memoizedState, a);
    if (
      (d && ((l.memoizedState = a), (it = !0)),
      (l = l.queue),
      As(Zc.bind(null, r, l, e), [e]),
      l.getSnapshot !== t || d || (Be !== null && Be.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        io(9, Jc.bind(null, r, l, a, t), void 0, null),
        Ue === null)
      )
        throw Error(i(349));
      Ln & 30 || Xc(r, t, a);
    }
    return a;
  }
  function Xc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Jc(e, t, r, l) {
    (t.value = r), (t.getSnapshot = l), ed(t) && td(e);
  }
  function Zc(e, t, r) {
    return r(function () {
      ed(t) && td(e);
    });
  }
  function ed(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ct(e, r);
    } catch {
      return !0;
    }
  }
  function td(e) {
    var t = Kt(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function nd(e) {
    var t = It();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Eg.bind(null, _e, e)),
      [t.memoizedState, e]
    );
  }
  function io(e, t, r, l) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: l, next: null }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((l = r.next), (r.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function rd() {
    return wt().memoizedState;
  }
  function vi(e, t, r, l) {
    var a = It();
    (_e.flags |= e),
      (a.memoizedState = io(1 | t, r, void 0, l === void 0 ? null : l));
  }
  function yi(e, t, r, l) {
    var a = wt();
    l = l === void 0 ? null : l;
    var d = void 0;
    if (Me !== null) {
      var h = Me.memoizedState;
      if (((d = h.destroy), l !== null && Ts(l, h.deps))) {
        a.memoizedState = io(t, r, d, l);
        return;
      }
    }
    (_e.flags |= e), (a.memoizedState = io(1 | t, r, d, l));
  }
  function od(e, t) {
    return vi(8390656, 8, e, t);
  }
  function As(e, t) {
    return yi(2048, 8, e, t);
  }
  function id(e, t) {
    return yi(4, 2, e, t);
  }
  function ld(e, t) {
    return yi(4, 4, e, t);
  }
  function sd(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ad(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), yi(4, 4, sd.bind(null, t, e), r)
    );
  }
  function Ds() {}
  function ud(e, t) {
    var r = wt();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return l !== null && t !== null && Ts(t, l[1])
      ? l[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function cd(e, t) {
    var r = wt();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return l !== null && t !== null && Ts(t, l[1])
      ? l[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function dd(e, t, r) {
    return Ln & 21
      ? (Ct(r, t) ||
          ((r = Uu()), (_e.lanes |= r), (An |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = r));
  }
  function xg(e, t) {
    var r = we;
    (we = r !== 0 && 4 > r ? r : 4), e(!0);
    var l = Ps.transition;
    Ps.transition = {};
    try {
      e(!1), t();
    } finally {
      (we = r), (Ps.transition = l);
    }
  }
  function fd() {
    return wt().memoizedState;
  }
  function Sg(e, t, r) {
    var l = mn(e);
    if (
      ((r = {
        lane: l,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      pd(e))
    )
      hd(t, r);
    else if (((r = Vc(e, t, r, l)), r !== null)) {
      var a = et();
      Pt(r, e, l, a), md(r, t, l);
    }
  }
  function Eg(e, t, r) {
    var l = mn(e),
      a = {
        lane: l,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (pd(e)) hd(t, a);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var h = t.lastRenderedState,
            x = d(h, r);
          if (((a.hasEagerState = !0), (a.eagerState = x), Ct(x, h))) {
            var N = t.interleaved;
            N === null
              ? ((a.next = a), Es(t))
              : ((a.next = N.next), (N.next = a)),
              (t.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (r = Vc(e, t, a, l)),
        r !== null && ((a = et()), Pt(r, e, l, a), md(r, t, l));
    }
  }
  function pd(e) {
    var t = e.alternate;
    return e === _e || (t !== null && t === _e);
  }
  function hd(e, t) {
    no = gi = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function md(e, t, r) {
    if (r & 4194240) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), Fl(e, r);
    }
  }
  var wi = {
      readContext: yt,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useInsertionEffect: Ge,
      useLayoutEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useMutableSource: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      unstable_isNewReconciler: !1,
    },
    Cg = {
      readContext: yt,
      useCallback: function (e, t) {
        return (It().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: yt,
      useEffect: od,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          vi(4194308, 4, sd.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return vi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return vi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = It();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var l = It();
        return (
          (t = r !== void 0 ? r(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = Sg.bind(null, _e, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = It();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: nd,
      useDebugValue: Ds,
      useDeferredValue: function (e) {
        return (It().memoizedState = e);
      },
      useTransition: function () {
        var e = nd(!1),
          t = e[0];
        return (e = xg.bind(null, e[1])), (It().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var l = _e,
          a = It();
        if (Pe) {
          if (r === void 0) throw Error(i(407));
          r = r();
        } else {
          if (((r = t()), Ue === null)) throw Error(i(349));
          Ln & 30 || Xc(l, t, r);
        }
        a.memoizedState = r;
        var d = { value: r, getSnapshot: t };
        return (
          (a.queue = d),
          od(Zc.bind(null, l, d, e), [e]),
          (l.flags |= 2048),
          io(9, Jc.bind(null, l, d, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = It(),
          t = Ue.identifierPrefix;
        if (Pe) {
          var r = Ht,
            l = Vt;
          (r = (l & ~(1 << (32 - Et(l) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = ro++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = wg++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    kg = {
      readContext: yt,
      useCallback: ud,
      useContext: yt,
      useEffect: As,
      useImperativeHandle: ad,
      useInsertionEffect: id,
      useLayoutEffect: ld,
      useMemo: cd,
      useReducer: Os,
      useRef: rd,
      useState: function () {
        return Os(oo);
      },
      useDebugValue: Ds,
      useDeferredValue: function (e) {
        var t = wt();
        return dd(t, Me.memoizedState, e);
      },
      useTransition: function () {
        var e = Os(oo)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: qc,
      useSyncExternalStore: Yc,
      useId: fd,
      unstable_isNewReconciler: !1,
    },
    Rg = {
      readContext: yt,
      useCallback: ud,
      useContext: yt,
      useEffect: As,
      useImperativeHandle: ad,
      useInsertionEffect: id,
      useLayoutEffect: ld,
      useMemo: cd,
      useReducer: Ls,
      useRef: rd,
      useState: function () {
        return Ls(oo);
      },
      useDebugValue: Ds,
      useDeferredValue: function (e) {
        var t = wt();
        return Me === null ? (t.memoizedState = e) : dd(t, Me.memoizedState, e);
      },
      useTransition: function () {
        var e = Ls(oo)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: qc,
      useSyncExternalStore: Yc,
      useId: fd,
      unstable_isNewReconciler: !1,
    };
  function Rt(e, t) {
    if (e && e.defaultProps) {
      (t = q({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Is(e, t, r, l) {
    (t = e.memoizedState),
      (r = r(l, t)),
      (r = r == null ? t : q({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var xi = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Nn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var l = et(),
        a = mn(e),
        d = Gt(l, a);
      (d.payload = t),
        r != null && (d.callback = r),
        (t = dn(e, d, a)),
        t !== null && (Pt(t, e, a, l), fi(t, e, a));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var l = et(),
        a = mn(e),
        d = Gt(l, a);
      (d.tag = 1),
        (d.payload = t),
        r != null && (d.callback = r),
        (t = dn(e, d, a)),
        t !== null && (Pt(t, e, a, l), fi(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = et(),
        l = mn(e),
        a = Gt(r, l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = dn(e, a, l)),
        t !== null && (Pt(t, e, l, r), fi(t, e, l));
    },
  };
  function gd(e, t, r, l, a, d, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, d, h)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Hr(r, l) || !Hr(a, d)
        : !0
    );
  }
  function vd(e, t, r) {
    var l = !1,
      a = an,
      d = t.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = yt(d))
        : ((a = ot(t) ? Pn : Ke.current),
          (l = t.contextTypes),
          (d = (l = l != null) ? rr(e, a) : an)),
      (t = new t(r, d)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = xi),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function yd(e, t, r, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, l),
      t.state !== e && xi.enqueueReplaceState(t, t.state, null);
  }
  function Fs(e, t, r, l) {
    var a = e.stateNode;
    (a.props = r), (a.state = e.memoizedState), (a.refs = {}), Cs(e);
    var d = t.contextType;
    typeof d == "object" && d !== null
      ? (a.context = yt(d))
      : ((d = ot(t) ? Pn : Ke.current), (a.context = rr(e, d))),
      (a.state = e.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == "function" && (Is(e, t, d, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && xi.enqueueReplaceState(a, a.state, null),
        pi(e, r, a, l),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function dr(e, t) {
    try {
      var r = "",
        l = t;
      do (r += he(l)), (l = l.return);
      while (l);
      var a = r;
    } catch (d) {
      a =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Ms(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function zs(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Ng = typeof WeakMap == "function" ? WeakMap : Map;
  function wd(e, t, r) {
    (r = Gt(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var l = t.value;
    return (
      (r.callback = function () {
        bi || ((bi = !0), (ea = l)), zs(e, t);
      }),
      r
    );
  }
  function xd(e, t, r) {
    (r = Gt(-1, r)), (r.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var a = t.value;
      (r.payload = function () {
        return l(a);
      }),
        (r.callback = function () {
          zs(e, t);
        });
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (r.callback = function () {
          zs(e, t),
            typeof l != "function" &&
              (pn === null ? (pn = new Set([this])) : pn.add(this));
          var h = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: h !== null ? h : "",
          });
        }),
      r
    );
  }
  function Sd(e, t, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Ng();
      var a = new Set();
      l.set(t, a);
    } else (a = l.get(t)), a === void 0 && ((a = new Set()), l.set(t, a));
    a.has(r) || (a.add(r), (e = Bg.bind(null, e, t, r)), t.then(e, e));
  }
  function Ed(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Cd(e, t, r, l, a) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Gt(-1, 1)), (t.tag = 2), dn(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var bg = $.ReactCurrentOwner,
    it = !1;
  function Ze(e, t, r, l) {
    t.child = e === null ? Wc(t, null, r, l) : sr(t, e.child, r, l);
  }
  function kd(e, t, r, l, a) {
    r = r.render;
    var d = t.ref;
    return (
      ur(t, a),
      (l = js(e, t, r, l, d, a)),
      (r = _s()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Qt(e, t, a))
        : (Pe && r && ps(t), (t.flags |= 1), Ze(e, t, l, a), t.child)
    );
  }
  function Rd(e, t, r, l, a) {
    if (e === null) {
      var d = r.type;
      return typeof d == "function" &&
        !sa(d) &&
        d.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), Nd(e, t, d, l, a))
        : ((e = Li(r.type, null, l, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), !(e.lanes & a))) {
      var h = d.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Hr), r(h, l) && e.ref === t.ref)
      )
        return Qt(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = vn(d, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Nd(e, t, r, l, a) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Hr(d, l) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = l = d), (e.lanes & a) !== 0))
          e.flags & 131072 && (it = !0);
        else return (t.lanes = e.lanes), Qt(e, t, a);
    }
    return Bs(e, t, r, l, a);
  }
  function bd(e, t, r) {
    var l = t.pendingProps,
      a = l.children,
      d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ee(pr, ht),
          (ht |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = d !== null ? d.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ee(pr, ht),
            (ht |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = d !== null ? d.baseLanes : r),
          Ee(pr, ht),
          (ht |= l);
      }
    else
      d !== null ? ((l = d.baseLanes | r), (t.memoizedState = null)) : (l = r),
        Ee(pr, ht),
        (ht |= l);
    return Ze(e, t, a, r), t.child;
  }
  function Pd(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Bs(e, t, r, l, a) {
    var d = ot(r) ? Pn : Ke.current;
    return (
      (d = rr(t, d)),
      ur(t, a),
      (r = js(e, t, r, l, d, a)),
      (l = _s()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Qt(e, t, a))
        : (Pe && l && ps(t), (t.flags |= 1), Ze(e, t, r, a), t.child)
    );
  }
  function Td(e, t, r, l, a) {
    if (ot(r)) {
      var d = !0;
      oi(t);
    } else d = !1;
    if ((ur(t, a), t.stateNode === null))
      Ei(e, t), vd(t, r, l), Fs(t, r, l, a), (l = !0);
    else if (e === null) {
      var h = t.stateNode,
        x = t.memoizedProps;
      h.props = x;
      var N = h.context,
        A = r.contextType;
      typeof A == "object" && A !== null
        ? (A = yt(A))
        : ((A = ot(r) ? Pn : Ke.current), (A = rr(t, A)));
      var B = r.getDerivedStateFromProps,
        U =
          typeof B == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function";
      U ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((x !== l || N !== A) && yd(t, h, l, A)),
        (cn = !1);
      var M = t.memoizedState;
      (h.state = M),
        pi(t, l, h, a),
        (N = t.memoizedState),
        x !== l || M !== N || rt.current || cn
          ? (typeof B == "function" && (Is(t, r, B, l), (N = t.memoizedState)),
            (x = cn || gd(t, r, x, l, M, N, A))
              ? (U ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = N)),
            (h.props = l),
            (h.state = N),
            (h.context = A),
            (l = x))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (h = t.stateNode),
        Hc(e, t),
        (x = t.memoizedProps),
        (A = t.type === t.elementType ? x : Rt(t.type, x)),
        (h.props = A),
        (U = t.pendingProps),
        (M = h.context),
        (N = r.contextType),
        typeof N == "object" && N !== null
          ? (N = yt(N))
          : ((N = ot(r) ? Pn : Ke.current), (N = rr(t, N)));
      var G = r.getDerivedStateFromProps;
      (B =
        typeof G == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((x !== U || M !== N) && yd(t, h, l, N)),
        (cn = !1),
        (M = t.memoizedState),
        (h.state = M),
        pi(t, l, h, a);
      var X = t.memoizedState;
      x !== U || M !== X || rt.current || cn
        ? (typeof G == "function" && (Is(t, r, G, l), (X = t.memoizedState)),
          (A = cn || gd(t, r, A, l, M, X, N) || !1)
            ? (B ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(l, X, N),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(l, X, N)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (x === e.memoizedProps && M === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && M === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = X)),
          (h.props = l),
          (h.state = X),
          (h.context = N),
          (l = A))
        : (typeof h.componentDidUpdate != "function" ||
            (x === e.memoizedProps && M === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && M === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return Us(e, t, r, l, d, a);
  }
  function Us(e, t, r, l, a, d) {
    Pd(e, t);
    var h = (t.flags & 128) !== 0;
    if (!l && !h) return a && Ac(t, r, !1), Qt(e, t, d);
    (l = t.stateNode), (bg.current = t);
    var x =
      h && typeof r.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = sr(t, e.child, null, d)), (t.child = sr(t, null, x, d)))
        : Ze(e, t, x, d),
      (t.memoizedState = l.state),
      a && Ac(t, r, !0),
      t.child
    );
  }
  function jd(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Oc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Oc(e, t.context, !1),
      ks(e, t.containerInfo);
  }
  function _d(e, t, r, l, a) {
    return lr(), vs(a), (t.flags |= 256), Ze(e, t, r, l), t.child;
  }
  var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ws(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Od(e, t, r) {
    var l = t.pendingProps,
      a = je.current,
      d = !1,
      h = (t.flags & 128) !== 0,
      x;
    if (
      ((x = h) ||
        (x = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      x
        ? ((d = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      Ee(je, a & 1),
      e === null)
    )
      return (
        gs(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((h = l.children),
            (e = l.fallback),
            d
              ? ((l = t.mode),
                (d = t.child),
                (h = { mode: "hidden", children: h }),
                !(l & 1) && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = h))
                  : (d = Ai(h, l, 0, null)),
                (e = Mn(e, l, r, null)),
                (d.return = t),
                (e.return = t),
                (d.sibling = e),
                (t.child = d),
                (t.child.memoizedState = Ws(r)),
                (t.memoizedState = $s),
                e)
              : Vs(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((x = a.dehydrated), x !== null)))
      return Pg(e, t, h, l, x, a, r);
    if (d) {
      (d = l.fallback), (h = t.mode), (a = e.child), (x = a.sibling);
      var N = { mode: "hidden", children: l.children };
      return (
        !(h & 1) && t.child !== a
          ? ((l = t.child),
            (l.childLanes = 0),
            (l.pendingProps = N),
            (t.deletions = null))
          : ((l = vn(a, N)), (l.subtreeFlags = a.subtreeFlags & 14680064)),
        x !== null ? (d = vn(x, d)) : ((d = Mn(d, h, r, null)), (d.flags |= 2)),
        (d.return = t),
        (l.return = t),
        (l.sibling = d),
        (t.child = l),
        (l = d),
        (d = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Ws(r)
            : {
                baseLanes: h.baseLanes | r,
                cachePool: null,
                transitions: h.transitions,
              }),
        (d.memoizedState = h),
        (d.childLanes = e.childLanes & ~r),
        (t.memoizedState = $s),
        l
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (l = vn(d, { mode: "visible", children: l.children })),
      !(t.mode & 1) && (l.lanes = r),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Vs(e, t) {
    return (
      (t = Ai({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Si(e, t, r, l) {
    return (
      l !== null && vs(l),
      sr(t, e.child, null, r),
      (e = Vs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Pg(e, t, r, l, a, d, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (l = Ms(Error(i(422)))), Si(e, t, h, l))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((d = l.fallback),
          (a = t.mode),
          (l = Ai({ mode: "visible", children: l.children }, a, 0, null)),
          (d = Mn(d, a, h, null)),
          (d.flags |= 2),
          (l.return = t),
          (d.return = t),
          (l.sibling = d),
          (t.child = l),
          t.mode & 1 && sr(t, e.child, null, h),
          (t.child.memoizedState = Ws(h)),
          (t.memoizedState = $s),
          d);
    if (!(t.mode & 1)) return Si(e, t, h, null);
    if (a.data === "$!") {
      if (((l = a.nextSibling && a.nextSibling.dataset), l)) var x = l.dgst;
      return (
        (l = x), (d = Error(i(419))), (l = Ms(d, l, void 0)), Si(e, t, h, l)
      );
    }
    if (((x = (h & e.childLanes) !== 0), it || x)) {
      if (((l = Ue), l !== null)) {
        switch (h & -h) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        (a = a & (l.suspendedLanes | h) ? 0 : a),
          a !== 0 &&
            a !== d.retryLane &&
            ((d.retryLane = a), Kt(e, a), Pt(l, e, a, -1));
      }
      return la(), (l = Ms(Error(i(421)))), Si(e, t, h, l);
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ug.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = d.treeContext),
        (pt = ln(a.nextSibling)),
        (ft = t),
        (Pe = !0),
        (kt = null),
        e !== null &&
          ((gt[vt++] = Vt),
          (gt[vt++] = Ht),
          (gt[vt++] = Tn),
          (Vt = e.id),
          (Ht = e.overflow),
          (Tn = t)),
        (t = Vs(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Ld(e, t, r) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Ss(e.return, t, r);
  }
  function Hs(e, t, r, l, a) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: r,
          tailMode: a,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = r),
        (d.tailMode = a));
  }
  function Ad(e, t, r) {
    var l = t.pendingProps,
      a = l.revealOrder,
      d = l.tail;
    if ((Ze(e, t, l.children, r), (l = je.current), l & 2))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ld(e, r, t);
          else if (e.tag === 19) Ld(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((Ee(je, l), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null; )
            (e = r.alternate),
              e !== null && hi(e) === null && (a = r),
              (r = r.sibling);
          (r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            Hs(t, !1, a, r, d);
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && hi(e) === null)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = r), (r = a), (a = e);
          }
          Hs(t, !0, r, null, d);
          break;
        case "together":
          Hs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ei(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Qt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (An |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, r = vn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = vn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Tg(e, t, r) {
    switch (t.tag) {
      case 3:
        jd(t), lr();
        break;
      case 5:
        Qc(t);
        break;
      case 1:
        ot(t.type) && oi(t);
        break;
      case 4:
        ks(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          a = t.memoizedProps.value;
        Ee(ci, l._currentValue), (l._currentValue = a);
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ee(je, je.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? Od(e, t, r)
            : (Ee(je, je.current & 1),
              (e = Qt(e, t, r)),
              e !== null ? e.sibling : null);
        Ee(je, je.current & 1);
        break;
      case 19:
        if (((l = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (l) return Ad(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Ee(je, je.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), bd(e, t, r);
    }
    return Qt(e, t, r);
  }
  var Dd, Ks, Id, Fd;
  (Dd = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Ks = function () {}),
    (Id = function (e, t, r, l) {
      var a = e.memoizedProps;
      if (a !== l) {
        (e = t.stateNode), On(Dt.current);
        var d = null;
        switch (r) {
          case "input":
            (a = Sl(e, a)), (l = Sl(e, l)), (d = []);
            break;
          case "select":
            (a = q({}, a, { value: void 0 })),
              (l = q({}, l, { value: void 0 })),
              (d = []);
            break;
          case "textarea":
            (a = kl(e, a)), (l = kl(e, l)), (d = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = ti);
        }
        Nl(r, l);
        var h;
        r = null;
        for (A in a)
          if (!l.hasOwnProperty(A) && a.hasOwnProperty(A) && a[A] != null)
            if (A === "style") {
              var x = a[A];
              for (h in x) x.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              A !== "dangerouslySetInnerHTML" &&
                A !== "children" &&
                A !== "suppressContentEditableWarning" &&
                A !== "suppressHydrationWarning" &&
                A !== "autoFocus" &&
                (u.hasOwnProperty(A)
                  ? d || (d = [])
                  : (d = d || []).push(A, null));
        for (A in l) {
          var N = l[A];
          if (
            ((x = a != null ? a[A] : void 0),
            l.hasOwnProperty(A) && N !== x && (N != null || x != null))
          )
            if (A === "style")
              if (x) {
                for (h in x)
                  !x.hasOwnProperty(h) ||
                    (N && N.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in N)
                  N.hasOwnProperty(h) &&
                    x[h] !== N[h] &&
                    (r || (r = {}), (r[h] = N[h]));
              } else r || (d || (d = []), d.push(A, r)), (r = N);
            else
              A === "dangerouslySetInnerHTML"
                ? ((N = N ? N.__html : void 0),
                  (x = x ? x.__html : void 0),
                  N != null && x !== N && (d = d || []).push(A, N))
                : A === "children"
                ? (typeof N != "string" && typeof N != "number") ||
                  (d = d || []).push(A, "" + N)
                : A !== "suppressContentEditableWarning" &&
                  A !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(A)
                    ? (N != null && A === "onScroll" && ke("scroll", e),
                      d || x === N || (d = []))
                    : (d = d || []).push(A, N));
        }
        r && (d = d || []).push("style", r);
        var A = d;
        (t.updateQueue = A) && (t.flags |= 4);
      }
    }),
    (Fd = function (e, t, r, l) {
      r !== l && (t.flags |= 4);
    });
  function lo(e, t) {
    if (!Pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), (r = r.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags & 14680064),
          (l |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags),
          (l |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = r), t;
  }
  function jg(e, t, r) {
    var l = t.pendingProps;
    switch ((hs(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qe(t), null;
      case 1:
        return ot(t.type) && ri(), Qe(t), null;
      case 3:
        return (
          (l = t.stateNode),
          cr(),
          Re(rt),
          Re(Ke),
          bs(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (ai(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), kt !== null && (ra(kt), (kt = null)))),
          Ks(e, t),
          Qe(t),
          null
        );
      case 5:
        Rs(t);
        var a = On(to.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          Id(e, t, r, l, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return Qe(t), null;
          }
          if (((e = On(Dt.current)), ai(t))) {
            (l = t.stateNode), (r = t.type);
            var d = t.memoizedProps;
            switch (((l[At] = t), (l[Yr] = d), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                ke("cancel", l), ke("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", l);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Gr.length; a++) ke(Gr[a], l);
                break;
              case "source":
                ke("error", l);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", l), ke("load", l);
                break;
              case "details":
                ke("toggle", l);
                break;
              case "input":
                vu(l, d), ke("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!d.multiple }),
                  ke("invalid", l);
                break;
              case "textarea":
                xu(l, d), ke("invalid", l);
            }
            Nl(r, d), (a = null);
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var x = d[h];
                h === "children"
                  ? typeof x == "string"
                    ? l.textContent !== x &&
                      (d.suppressHydrationWarning !== !0 &&
                        ei(l.textContent, x, e),
                      (a = ["children", x]))
                    : typeof x == "number" &&
                      l.textContent !== "" + x &&
                      (d.suppressHydrationWarning !== !0 &&
                        ei(l.textContent, x, e),
                      (a = ["children", "" + x]))
                  : u.hasOwnProperty(h) &&
                    x != null &&
                    h === "onScroll" &&
                    ke("scroll", l);
              }
            switch (r) {
              case "input":
                _o(l), wu(l, d, !0);
                break;
              case "textarea":
                _o(l), Eu(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (l.onclick = ti);
            }
            (l = a), (t.updateQueue = l), l !== null && (t.flags |= 4);
          } else {
            (h = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Cu(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                  ? (e = h.createElement(r, { is: l.is }))
                  : ((e = h.createElement(r)),
                    r === "select" &&
                      ((h = e),
                      l.multiple
                        ? (h.multiple = !0)
                        : l.size && (h.size = l.size)))
                : (e = h.createElementNS(e, r)),
              (e[At] = t),
              (e[Yr] = l),
              Dd(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((h = bl(r, l)), r)) {
                case "dialog":
                  ke("cancel", e), ke("close", e), (a = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), (a = l);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Gr.length; a++) ke(Gr[a], e);
                  a = l;
                  break;
                case "source":
                  ke("error", e), (a = l);
                  break;
                case "img":
                case "image":
                case "link":
                  ke("error", e), ke("load", e), (a = l);
                  break;
                case "details":
                  ke("toggle", e), (a = l);
                  break;
                case "input":
                  vu(e, l), (a = Sl(e, l)), ke("invalid", e);
                  break;
                case "option":
                  a = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (a = q({}, l, { value: void 0 })),
                    ke("invalid", e);
                  break;
                case "textarea":
                  xu(e, l), (a = kl(e, l)), ke("invalid", e);
                  break;
                default:
                  a = l;
              }
              Nl(r, a), (x = a);
              for (d in x)
                if (x.hasOwnProperty(d)) {
                  var N = x[d];
                  d === "style"
                    ? Nu(e, N)
                    : d === "dangerouslySetInnerHTML"
                    ? ((N = N ? N.__html : void 0), N != null && ku(e, N))
                    : d === "children"
                    ? typeof N == "string"
                      ? (r !== "textarea" || N !== "") && Pr(e, N)
                      : typeof N == "number" && Pr(e, "" + N)
                    : d !== "suppressContentEditableWarning" &&
                      d !== "suppressHydrationWarning" &&
                      d !== "autoFocus" &&
                      (u.hasOwnProperty(d)
                        ? N != null && d === "onScroll" && ke("scroll", e)
                        : N != null && F(e, d, N, h));
                }
              switch (r) {
                case "input":
                  _o(e), wu(e, l, !1);
                  break;
                case "textarea":
                  _o(e), Eu(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + ye(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (d = l.value),
                    d != null
                      ? Hn(e, !!l.multiple, d, !1)
                      : l.defaultValue != null &&
                        Hn(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = ti);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null) Fd(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (((r = On(to.current)), On(Dt.current), ai(t))) {
            if (
              ((l = t.stateNode),
              (r = t.memoizedProps),
              (l[At] = t),
              (d = l.nodeValue !== r) && ((e = ft), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ei(l.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ei(l.nodeValue, r, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            (l = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(l)),
              (l[At] = t),
              (t.stateNode = l);
        }
        return Qe(t), null;
      case 13:
        if (
          (Re(je),
          (l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Pe && pt !== null && t.mode & 1 && !(t.flags & 128))
            Bc(), lr(), (t.flags |= 98560), (d = !1);
          else if (((d = ai(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (
                ((d = t.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(i(317));
              d[At] = t;
            } else
              lr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Qe(t), (d = !1);
          } else kt !== null && (ra(kt), (kt = null)), (d = !0);
          if (!d) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || je.current & 1 ? ze === 0 && (ze = 3) : la())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (
          cr(),
          Ks(e, t),
          e === null && Qr(t.stateNode.containerInfo),
          Qe(t),
          null
        );
      case 10:
        return xs(t.type._context), Qe(t), null;
      case 17:
        return ot(t.type) && ri(), Qe(t), null;
      case 19:
        if ((Re(je), (d = t.memoizedState), d === null)) return Qe(t), null;
        if (((l = (t.flags & 128) !== 0), (h = d.rendering), h === null))
          if (l) lo(d, !1);
          else {
            if (ze !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((h = hi(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      lo(d, !1),
                      l = h.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = r,
                      r = t.child;
                    r !== null;

                  )
                    (d = r),
                      (e = l),
                      (d.flags &= 14680066),
                      (h = d.alternate),
                      h === null
                        ? ((d.childLanes = 0),
                          (d.lanes = e),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = h.childLanes),
                          (d.lanes = h.lanes),
                          (d.child = h.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = h.memoizedProps),
                          (d.memoizedState = h.memoizedState),
                          (d.updateQueue = h.updateQueue),
                          (d.type = h.type),
                          (e = h.dependencies),
                          (d.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Ee(je, (je.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null &&
              Le() > hr &&
              ((t.flags |= 128), (l = !0), lo(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = hi(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                lo(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !h.alternate &&
                  !Pe)
              )
                return Qe(t), null;
            } else
              2 * Le() - d.renderingStartTime > hr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (l = !0), lo(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((r = d.last),
              r !== null ? (r.sibling = h) : (t.child = h),
              (d.last = h));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = Le()),
            (t.sibling = null),
            (r = je.current),
            Ee(je, l ? (r & 1) | 2 : r & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          ia(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && t.mode & 1
            ? ht & 1073741824 &&
              (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function _g(e, t) {
    switch ((hs(t), t.tag)) {
      case 1:
        return (
          ot(t.type) && ri(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          cr(),
          Re(rt),
          Re(Ke),
          bs(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Rs(t), null;
      case 13:
        if (
          (Re(je), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          lr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Re(je), null;
      case 4:
        return cr(), null;
      case 10:
        return xs(t.type._context), null;
      case 22:
      case 23:
        return ia(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ci = !1,
    qe = !1,
    Og = typeof WeakSet == "function" ? WeakSet : Set,
    Y = null;
  function fr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (l) {
          Oe(e, t, l);
        }
      else r.current = null;
  }
  function Gs(e, t, r) {
    try {
      r();
    } catch (l) {
      Oe(e, t, l);
    }
  }
  var Md = !1;
  function Lg(e, t) {
    if (((is = Wo), (e = gc()), Xl(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var a = l.anchorOffset,
              d = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, d.nodeType;
            } catch {
              r = null;
              break e;
            }
            var h = 0,
              x = -1,
              N = -1,
              A = 0,
              B = 0,
              U = e,
              M = null;
            t: for (;;) {
              for (
                var G;
                U !== r || (a !== 0 && U.nodeType !== 3) || (x = h + a),
                  U !== d || (l !== 0 && U.nodeType !== 3) || (N = h + l),
                  U.nodeType === 3 && (h += U.nodeValue.length),
                  (G = U.firstChild) !== null;

              )
                (M = U), (U = G);
              for (;;) {
                if (U === e) break t;
                if (
                  (M === r && ++A === a && (x = h),
                  M === d && ++B === l && (N = h),
                  (G = U.nextSibling) !== null)
                )
                  break;
                (U = M), (M = U.parentNode);
              }
              U = G;
            }
            r = x === -1 || N === -1 ? null : { start: x, end: N };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      ls = { focusedElem: e, selectionRange: r }, Wo = !1, Y = t;
      Y !== null;

    )
      if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Y = e);
      else
        for (; Y !== null; ) {
          t = Y;
          try {
            var X = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (X !== null) {
                    var J = X.memoizedProps,
                      Ae = X.memoizedState,
                      _ = t.stateNode,
                      b = _.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? J : Rt(t.type, J),
                        Ae
                      );
                    _.__reactInternalSnapshotBeforeUpdate = b;
                  }
                  break;
                case 3:
                  var O = t.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (W) {
            Oe(t, t.return, W);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Y = e);
            break;
          }
          Y = t.return;
        }
    return (X = Md), (Md = !1), X;
  }
  function so(e, t, r) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var a = (l = l.next);
      do {
        if ((a.tag & e) === e) {
          var d = a.destroy;
          (a.destroy = void 0), d !== void 0 && Gs(t, r, d);
        }
        a = a.next;
      } while (a !== l);
    }
  }
  function ki(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var l = r.create;
          r.destroy = l();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Qs(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function zd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), zd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[At],
          delete t[Yr],
          delete t[cs],
          delete t[mg],
          delete t[gg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Bd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ud(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function qs(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = ti));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (qs(e, t, r), e = e.sibling; e !== null; )
        qs(e, t, r), (e = e.sibling);
  }
  function Ys(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Ys(e, t, r), e = e.sibling; e !== null; )
        Ys(e, t, r), (e = e.sibling);
  }
  var We = null,
    Nt = !1;
  function fn(e, t, r) {
    for (r = r.child; r !== null; ) $d(e, t, r), (r = r.sibling);
  }
  function $d(e, t, r) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function")
      try {
        Lt.onCommitFiberUnmount(Fo, r);
      } catch {}
    switch (r.tag) {
      case 5:
        qe || fr(r, t);
      case 6:
        var l = We,
          a = Nt;
        (We = null),
          fn(e, t, r),
          (We = l),
          (Nt = a),
          We !== null &&
            (Nt
              ? ((e = We),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : We.removeChild(r.stateNode));
        break;
      case 18:
        We !== null &&
          (Nt
            ? ((e = We),
              (r = r.stateNode),
              e.nodeType === 8
                ? us(e.parentNode, r)
                : e.nodeType === 1 && us(e, r),
              zr(e))
            : us(We, r.stateNode));
        break;
      case 4:
        (l = We),
          (a = Nt),
          (We = r.stateNode.containerInfo),
          (Nt = !0),
          fn(e, t, r),
          (We = l),
          (Nt = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !qe &&
          ((l = r.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          a = l = l.next;
          do {
            var d = a,
              h = d.destroy;
            (d = d.tag),
              h !== void 0 && (d & 2 || d & 4) && Gs(r, t, h),
              (a = a.next);
          } while (a !== l);
        }
        fn(e, t, r);
        break;
      case 1:
        if (
          !qe &&
          (fr(r, t),
          (l = r.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = r.memoizedProps),
              (l.state = r.memoizedState),
              l.componentWillUnmount();
          } catch (x) {
            Oe(r, t, x);
          }
        fn(e, t, r);
        break;
      case 21:
        fn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((qe = (l = qe) || r.memoizedState !== null), fn(e, t, r), (qe = l))
          : fn(e, t, r);
        break;
      default:
        fn(e, t, r);
    }
  }
  function Wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Og()),
        t.forEach(function (l) {
          var a = $g.bind(null, e, l);
          r.has(l) || (r.add(l), l.then(a, a));
        });
    }
  }
  function bt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var a = r[l];
        try {
          var d = e,
            h = t,
            x = h;
          e: for (; x !== null; ) {
            switch (x.tag) {
              case 5:
                (We = x.stateNode), (Nt = !1);
                break e;
              case 3:
                (We = x.stateNode.containerInfo), (Nt = !0);
                break e;
              case 4:
                (We = x.stateNode.containerInfo), (Nt = !0);
                break e;
            }
            x = x.return;
          }
          if (We === null) throw Error(i(160));
          $d(d, h, a), (We = null), (Nt = !1);
          var N = a.alternate;
          N !== null && (N.return = null), (a.return = null);
        } catch (A) {
          Oe(a, t, A);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Vd(t, e), (t = t.sibling);
  }
  function Vd(e, t) {
    var r = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((bt(t, e), Ft(e), l & 4)) {
          try {
            so(3, e, e.return), ki(3, e);
          } catch (J) {
            Oe(e, e.return, J);
          }
          try {
            so(5, e, e.return);
          } catch (J) {
            Oe(e, e.return, J);
          }
        }
        break;
      case 1:
        bt(t, e), Ft(e), l & 512 && r !== null && fr(r, r.return);
        break;
      case 5:
        if (
          (bt(t, e),
          Ft(e),
          l & 512 && r !== null && fr(r, r.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            Pr(a, "");
          } catch (J) {
            Oe(e, e.return, J);
          }
        }
        if (l & 4 && ((a = e.stateNode), a != null)) {
          var d = e.memoizedProps,
            h = r !== null ? r.memoizedProps : d,
            x = e.type,
            N = e.updateQueue;
          if (((e.updateQueue = null), N !== null))
            try {
              x === "input" && d.type === "radio" && d.name != null && yu(a, d),
                bl(x, h);
              var A = bl(x, d);
              for (h = 0; h < N.length; h += 2) {
                var B = N[h],
                  U = N[h + 1];
                B === "style"
                  ? Nu(a, U)
                  : B === "dangerouslySetInnerHTML"
                  ? ku(a, U)
                  : B === "children"
                  ? Pr(a, U)
                  : F(a, B, U, A);
              }
              switch (x) {
                case "input":
                  El(a, d);
                  break;
                case "textarea":
                  Su(a, d);
                  break;
                case "select":
                  var M = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!d.multiple;
                  var G = d.value;
                  G != null
                    ? Hn(a, !!d.multiple, G, !1)
                    : M !== !!d.multiple &&
                      (d.defaultValue != null
                        ? Hn(a, !!d.multiple, d.defaultValue, !0)
                        : Hn(a, !!d.multiple, d.multiple ? [] : "", !1));
              }
              a[Yr] = d;
            } catch (J) {
              Oe(e, e.return, J);
            }
        }
        break;
      case 6:
        if ((bt(t, e), Ft(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (a = e.stateNode), (d = e.memoizedProps);
          try {
            a.nodeValue = d;
          } catch (J) {
            Oe(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          (bt(t, e), Ft(e), l & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            zr(t.containerInfo);
          } catch (J) {
            Oe(e, e.return, J);
          }
        break;
      case 4:
        bt(t, e), Ft(e);
        break;
      case 13:
        bt(t, e),
          Ft(e),
          (a = e.child),
          a.flags & 8192 &&
            ((d = a.memoizedState !== null),
            (a.stateNode.isHidden = d),
            !d ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (Zs = Le())),
          l & 4 && Wd(e);
        break;
      case 22:
        if (
          ((B = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((qe = (A = qe) || B), bt(t, e), (qe = A)) : bt(t, e),
          Ft(e),
          l & 8192)
        ) {
          if (
            ((A = e.memoizedState !== null),
            (e.stateNode.isHidden = A) && !B && e.mode & 1)
          )
            for (Y = e, B = e.child; B !== null; ) {
              for (U = Y = B; Y !== null; ) {
                switch (((M = Y), (G = M.child), M.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    so(4, M, M.return);
                    break;
                  case 1:
                    fr(M, M.return);
                    var X = M.stateNode;
                    if (typeof X.componentWillUnmount == "function") {
                      (l = M), (r = M.return);
                      try {
                        (t = l),
                          (X.props = t.memoizedProps),
                          (X.state = t.memoizedState),
                          X.componentWillUnmount();
                      } catch (J) {
                        Oe(l, r, J);
                      }
                    }
                    break;
                  case 5:
                    fr(M, M.return);
                    break;
                  case 22:
                    if (M.memoizedState !== null) {
                      Gd(U);
                      continue;
                    }
                }
                G !== null ? ((G.return = M), (Y = G)) : Gd(U);
              }
              B = B.sibling;
            }
          e: for (B = null, U = e; ; ) {
            if (U.tag === 5) {
              if (B === null) {
                B = U;
                try {
                  (a = U.stateNode),
                    A
                      ? ((d = a.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : ((x = U.stateNode),
                        (N = U.memoizedProps.style),
                        (h =
                          N != null && N.hasOwnProperty("display")
                            ? N.display
                            : null),
                        (x.style.display = Ru("display", h)));
                } catch (J) {
                  Oe(e, e.return, J);
                }
              }
            } else if (U.tag === 6) {
              if (B === null)
                try {
                  U.stateNode.nodeValue = A ? "" : U.memoizedProps;
                } catch (J) {
                  Oe(e, e.return, J);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === e) &&
              U.child !== null
            ) {
              (U.child.return = U), (U = U.child);
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              B === U && (B = null), (U = U.return);
            }
            B === U && (B = null),
              (U.sibling.return = U.return),
              (U = U.sibling);
          }
        }
        break;
      case 19:
        bt(t, e), Ft(e), l & 4 && Wd(e);
        break;
      case 21:
        break;
      default:
        bt(t, e), Ft(e);
    }
  }
  function Ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Bd(r)) {
              var l = r;
              break e;
            }
            r = r.return;
          }
          throw Error(i(160));
        }
        switch (l.tag) {
          case 5:
            var a = l.stateNode;
            l.flags & 32 && (Pr(a, ""), (l.flags &= -33));
            var d = Ud(e);
            Ys(e, d, a);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              x = Ud(e);
            qs(e, x, h);
            break;
          default:
            throw Error(i(161));
        }
      } catch (N) {
        Oe(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ag(e, t, r) {
    (Y = e), Hd(e);
  }
  function Hd(e, t, r) {
    for (var l = (e.mode & 1) !== 0; Y !== null; ) {
      var a = Y,
        d = a.child;
      if (a.tag === 22 && l) {
        var h = a.memoizedState !== null || Ci;
        if (!h) {
          var x = a.alternate,
            N = (x !== null && x.memoizedState !== null) || qe;
          x = Ci;
          var A = qe;
          if (((Ci = h), (qe = N) && !A))
            for (Y = a; Y !== null; )
              (h = Y),
                (N = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Qd(a)
                  : N !== null
                  ? ((N.return = h), (Y = N))
                  : Qd(a);
          for (; d !== null; ) (Y = d), Hd(d), (d = d.sibling);
          (Y = a), (Ci = x), (qe = A);
        }
        Kd(e);
      } else
        a.subtreeFlags & 8772 && d !== null ? ((d.return = a), (Y = d)) : Kd(e);
    }
  }
  function Kd(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                qe || ki(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !qe)
                  if (r === null) l.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Rt(t.type, r.memoizedProps);
                    l.componentDidUpdate(
                      a,
                      r.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var d = t.updateQueue;
                d !== null && Gc(t, d, l);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Gc(t, h, r);
                }
                break;
              case 5:
                var x = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = x;
                  var N = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && r.focus();
                      break;
                    case "img":
                      N.src && (r.src = N.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var A = t.alternate;
                  if (A !== null) {
                    var B = A.memoizedState;
                    if (B !== null) {
                      var U = B.dehydrated;
                      U !== null && zr(U);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          qe || (t.flags & 512 && Qs(t));
        } catch (M) {
          Oe(t, t.return, M);
        }
      }
      if (t === e) {
        Y = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (Y = r);
        break;
      }
      Y = t.return;
    }
  }
  function Gd(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t === e) {
        Y = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (Y = r);
        break;
      }
      Y = t.return;
    }
  }
  function Qd(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ki(4, t);
            } catch (N) {
              Oe(t, r, N);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var a = t.return;
              try {
                l.componentDidMount();
              } catch (N) {
                Oe(t, a, N);
              }
            }
            var d = t.return;
            try {
              Qs(t);
            } catch (N) {
              Oe(t, d, N);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Qs(t);
            } catch (N) {
              Oe(t, h, N);
            }
        }
      } catch (N) {
        Oe(t, t.return, N);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        (x.return = t.return), (Y = x);
        break;
      }
      Y = t.return;
    }
  }
  var Dg = Math.ceil,
    Ri = $.ReactCurrentDispatcher,
    Xs = $.ReactCurrentOwner,
    xt = $.ReactCurrentBatchConfig,
    fe = 0,
    Ue = null,
    Ie = null,
    Ve = 0,
    ht = 0,
    pr = sn(0),
    ze = 0,
    ao = null,
    An = 0,
    Ni = 0,
    Js = 0,
    uo = null,
    lt = null,
    Zs = 0,
    hr = 1 / 0,
    qt = null,
    bi = !1,
    ea = null,
    pn = null,
    Pi = !1,
    hn = null,
    Ti = 0,
    co = 0,
    ta = null,
    ji = -1,
    _i = 0;
  function et() {
    return fe & 6 ? Le() : ji !== -1 ? ji : (ji = Le());
  }
  function mn(e) {
    return e.mode & 1
      ? fe & 2 && Ve !== 0
        ? Ve & -Ve
        : yg.transition !== null
        ? (_i === 0 && (_i = Uu()), _i)
        : ((e = we),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yu(e.type))),
          e)
      : 1;
  }
  function Pt(e, t, r, l) {
    if (50 < co) throw ((co = 0), (ta = null), Error(i(185)));
    Ar(e, r, l),
      (!(fe & 2) || e !== Ue) &&
        (e === Ue && (!(fe & 2) && (Ni |= r), ze === 4 && gn(e, Ve)),
        st(e, l),
        r === 1 &&
          fe === 0 &&
          !(t.mode & 1) &&
          ((hr = Le() + 500), ii && un()));
  }
  function st(e, t) {
    var r = e.callbackNode;
    ym(e, t);
    var l = Bo(e, e === Ue ? Ve : 0);
    if (l === 0)
      r !== null && Mu(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((r != null && Mu(r), t === 1))
        e.tag === 0 ? vg(Yd.bind(null, e)) : Dc(Yd.bind(null, e)),
          pg(function () {
            !(fe & 6) && un();
          }),
          (r = null);
      else {
        switch ($u(l)) {
          case 1:
            r = Al;
            break;
          case 4:
            r = zu;
            break;
          case 16:
            r = Io;
            break;
          case 536870912:
            r = Bu;
            break;
          default:
            r = Io;
        }
        r = of(r, qd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function qd(e, t) {
    if (((ji = -1), (_i = 0), fe & 6)) throw Error(i(327));
    var r = e.callbackNode;
    if (mr() && e.callbackNode !== r) return null;
    var l = Bo(e, e === Ue ? Ve : 0);
    if (l === 0) return null;
    if (l & 30 || l & e.expiredLanes || t) t = Oi(e, l);
    else {
      t = l;
      var a = fe;
      fe |= 2;
      var d = Jd();
      (Ue !== e || Ve !== t) && ((qt = null), (hr = Le() + 500), In(e, t));
      do
        try {
          Mg();
          break;
        } catch (x) {
          Xd(e, x);
        }
      while (!0);
      ws(),
        (Ri.current = d),
        (fe = a),
        Ie !== null ? (t = 0) : ((Ue = null), (Ve = 0), (t = ze));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = Dl(e)), a !== 0 && ((l = a), (t = na(e, a)))),
        t === 1)
      )
        throw ((r = ao), In(e, 0), gn(e, l), st(e, Le()), r);
      if (t === 6) gn(e, l);
      else {
        if (
          ((a = e.current.alternate),
          !(l & 30) &&
            !Ig(a) &&
            ((t = Oi(e, l)),
            t === 2 && ((d = Dl(e)), d !== 0 && ((l = d), (t = na(e, d)))),
            t === 1))
        )
          throw ((r = ao), In(e, 0), gn(e, l), st(e, Le()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Fn(e, lt, qt);
            break;
          case 3:
            if (
              (gn(e, l),
              (l & 130023424) === l && ((t = Zs + 500 - Le()), 10 < t))
            ) {
              if (Bo(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & l) !== l)) {
                et(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = as(Fn.bind(null, e, lt, qt), t);
              break;
            }
            Fn(e, lt, qt);
            break;
          case 4:
            if ((gn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, a = -1; 0 < l; ) {
              var h = 31 - Et(l);
              (d = 1 << h), (h = t[h]), h > a && (a = h), (l &= ~d);
            }
            if (
              ((l = a),
              (l = Le() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * Dg(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = as(Fn.bind(null, e, lt, qt), l);
              break;
            }
            Fn(e, lt, qt);
            break;
          case 5:
            Fn(e, lt, qt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return st(e, Le()), e.callbackNode === r ? qd.bind(null, e) : null;
  }
  function na(e, t) {
    var r = uo;
    return (
      e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
      (e = Oi(e, t)),
      e !== 2 && ((t = lt), (lt = r), t !== null && ra(t)),
      e
    );
  }
  function ra(e) {
    lt === null ? (lt = e) : lt.push.apply(lt, e);
  }
  function Ig(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var l = 0; l < r.length; l++) {
            var a = r[l],
              d = a.getSnapshot;
            a = a.value;
            try {
              if (!Ct(d(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function gn(e, t) {
    for (
      t &= ~Js,
        t &= ~Ni,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Et(t),
        l = 1 << r;
      (e[r] = -1), (t &= ~l);
    }
  }
  function Yd(e) {
    if (fe & 6) throw Error(i(327));
    mr();
    var t = Bo(e, 0);
    if (!(t & 1)) return st(e, Le()), null;
    var r = Oi(e, t);
    if (e.tag !== 0 && r === 2) {
      var l = Dl(e);
      l !== 0 && ((t = l), (r = na(e, l)));
    }
    if (r === 1) throw ((r = ao), In(e, 0), gn(e, t), st(e, Le()), r);
    if (r === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Fn(e, lt, qt),
      st(e, Le()),
      null
    );
  }
  function oa(e, t) {
    var r = fe;
    fe |= 1;
    try {
      return e(t);
    } finally {
      (fe = r), fe === 0 && ((hr = Le() + 500), ii && un());
    }
  }
  function Dn(e) {
    hn !== null && hn.tag === 0 && !(fe & 6) && mr();
    var t = fe;
    fe |= 1;
    var r = xt.transition,
      l = we;
    try {
      if (((xt.transition = null), (we = 1), e)) return e();
    } finally {
      (we = l), (xt.transition = r), (fe = t), !(fe & 6) && un();
    }
  }
  function ia() {
    (ht = pr.current), Re(pr);
  }
  function In(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), fg(r)), Ie !== null))
      for (r = Ie.return; r !== null; ) {
        var l = r;
        switch ((hs(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && ri();
            break;
          case 3:
            cr(), Re(rt), Re(Ke), bs();
            break;
          case 5:
            Rs(l);
            break;
          case 4:
            cr();
            break;
          case 13:
            Re(je);
            break;
          case 19:
            Re(je);
            break;
          case 10:
            xs(l.type._context);
            break;
          case 22:
          case 23:
            ia();
        }
        r = r.return;
      }
    if (
      ((Ue = e),
      (Ie = e = vn(e.current, null)),
      (Ve = ht = t),
      (ze = 0),
      (ao = null),
      (Js = Ni = An = 0),
      (lt = uo = null),
      _n !== null)
    ) {
      for (t = 0; t < _n.length; t++)
        if (((r = _n[t]), (l = r.interleaved), l !== null)) {
          r.interleaved = null;
          var a = l.next,
            d = r.pending;
          if (d !== null) {
            var h = d.next;
            (d.next = a), (l.next = h);
          }
          r.pending = l;
        }
      _n = null;
    }
    return e;
  }
  function Xd(e, t) {
    do {
      var r = Ie;
      try {
        if ((ws(), (mi.current = wi), gi)) {
          for (var l = _e.memoizedState; l !== null; ) {
            var a = l.queue;
            a !== null && (a.pending = null), (l = l.next);
          }
          gi = !1;
        }
        if (
          ((Ln = 0),
          (Be = Me = _e = null),
          (no = !1),
          (ro = 0),
          (Xs.current = null),
          r === null || r.return === null)
        ) {
          (ze = 1), (ao = t), (Ie = null);
          break;
        }
        e: {
          var d = e,
            h = r.return,
            x = r,
            N = t;
          if (
            ((t = Ve),
            (x.flags |= 32768),
            N !== null && typeof N == "object" && typeof N.then == "function")
          ) {
            var A = N,
              B = x,
              U = B.tag;
            if (!(B.mode & 1) && (U === 0 || U === 11 || U === 15)) {
              var M = B.alternate;
              M
                ? ((B.updateQueue = M.updateQueue),
                  (B.memoizedState = M.memoizedState),
                  (B.lanes = M.lanes))
                : ((B.updateQueue = null), (B.memoizedState = null));
            }
            var G = Ed(h);
            if (G !== null) {
              (G.flags &= -257),
                Cd(G, h, x, d, t),
                G.mode & 1 && Sd(d, A, t),
                (t = G),
                (N = A);
              var X = t.updateQueue;
              if (X === null) {
                var J = new Set();
                J.add(N), (t.updateQueue = J);
              } else X.add(N);
              break e;
            } else {
              if (!(t & 1)) {
                Sd(d, A, t), la();
                break e;
              }
              N = Error(i(426));
            }
          } else if (Pe && x.mode & 1) {
            var Ae = Ed(h);
            if (Ae !== null) {
              !(Ae.flags & 65536) && (Ae.flags |= 256),
                Cd(Ae, h, x, d, t),
                vs(dr(N, x));
              break e;
            }
          }
          (d = N = dr(N, x)),
            ze !== 4 && (ze = 2),
            uo === null ? (uo = [d]) : uo.push(d),
            (d = h);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                var _ = wd(d, N, t);
                Kc(d, _);
                break e;
              case 1:
                x = N;
                var b = d.type,
                  O = d.stateNode;
                if (
                  !(d.flags & 128) &&
                  (typeof b.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (pn === null || !pn.has(O))))
                ) {
                  (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                  var W = xd(d, x, t);
                  Kc(d, W);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ef(r);
      } catch (Z) {
        (t = Z), Ie === r && r !== null && (Ie = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Jd() {
    var e = Ri.current;
    return (Ri.current = wi), e === null ? wi : e;
  }
  function la() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      Ue === null || (!(An & 268435455) && !(Ni & 268435455)) || gn(Ue, Ve);
  }
  function Oi(e, t) {
    var r = fe;
    fe |= 2;
    var l = Jd();
    (Ue !== e || Ve !== t) && ((qt = null), In(e, t));
    do
      try {
        Fg();
        break;
      } catch (a) {
        Xd(e, a);
      }
    while (!0);
    if ((ws(), (fe = r), (Ri.current = l), Ie !== null)) throw Error(i(261));
    return (Ue = null), (Ve = 0), ze;
  }
  function Fg() {
    for (; Ie !== null; ) Zd(Ie);
  }
  function Mg() {
    for (; Ie !== null && !um(); ) Zd(Ie);
  }
  function Zd(e) {
    var t = rf(e.alternate, e, ht);
    (e.memoizedProps = e.pendingProps),
      t === null ? ef(e) : (Ie = t),
      (Xs.current = null);
  }
  function ef(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = _g(r, t)), r !== null)) {
          (r.flags &= 32767), (Ie = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ze = 6), (Ie = null);
          return;
        }
      } else if (((r = jg(r, t, ht)), r !== null)) {
        Ie = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function Fn(e, t, r) {
    var l = we,
      a = xt.transition;
    try {
      (xt.transition = null), (we = 1), zg(e, t, r, l);
    } finally {
      (xt.transition = a), (we = l);
    }
    return null;
  }
  function zg(e, t, r, l) {
    do mr();
    while (hn !== null);
    if (fe & 6) throw Error(i(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var d = r.lanes | r.childLanes;
    if (
      (wm(e, d),
      e === Ue && ((Ie = Ue = null), (Ve = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        Pi ||
        ((Pi = !0),
        of(Io, function () {
          return mr(), null;
        })),
      (d = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || d)
    ) {
      (d = xt.transition), (xt.transition = null);
      var h = we;
      we = 1;
      var x = fe;
      (fe |= 4),
        (Xs.current = null),
        Lg(e, r),
        Vd(r, e),
        ig(ls),
        (Wo = !!is),
        (ls = is = null),
        (e.current = r),
        Ag(r),
        cm(),
        (fe = x),
        (we = h),
        (xt.transition = d);
    } else e.current = r;
    if (
      (Pi && ((Pi = !1), (hn = e), (Ti = a)),
      (d = e.pendingLanes),
      d === 0 && (pn = null),
      pm(r.stateNode),
      st(e, Le()),
      t !== null)
    )
      for (l = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]), l(a.value, { componentStack: a.stack, digest: a.digest });
    if (bi) throw ((bi = !1), (e = ea), (ea = null), e);
    return (
      Ti & 1 && e.tag !== 0 && mr(),
      (d = e.pendingLanes),
      d & 1 ? (e === ta ? co++ : ((co = 0), (ta = e))) : (co = 0),
      un(),
      null
    );
  }
  function mr() {
    if (hn !== null) {
      var e = $u(Ti),
        t = xt.transition,
        r = we;
      try {
        if (((xt.transition = null), (we = 16 > e ? 16 : e), hn === null))
          var l = !1;
        else {
          if (((e = hn), (hn = null), (Ti = 0), fe & 6)) throw Error(i(331));
          var a = fe;
          for (fe |= 4, Y = e.current; Y !== null; ) {
            var d = Y,
              h = d.child;
            if (Y.flags & 16) {
              var x = d.deletions;
              if (x !== null) {
                for (var N = 0; N < x.length; N++) {
                  var A = x[N];
                  for (Y = A; Y !== null; ) {
                    var B = Y;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        so(8, B, d);
                    }
                    var U = B.child;
                    if (U !== null) (U.return = B), (Y = U);
                    else
                      for (; Y !== null; ) {
                        B = Y;
                        var M = B.sibling,
                          G = B.return;
                        if ((zd(B), B === A)) {
                          Y = null;
                          break;
                        }
                        if (M !== null) {
                          (M.return = G), (Y = M);
                          break;
                        }
                        Y = G;
                      }
                  }
                }
                var X = d.alternate;
                if (X !== null) {
                  var J = X.child;
                  if (J !== null) {
                    X.child = null;
                    do {
                      var Ae = J.sibling;
                      (J.sibling = null), (J = Ae);
                    } while (J !== null);
                  }
                }
                Y = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null) (h.return = d), (Y = h);
            else
              e: for (; Y !== null; ) {
                if (((d = Y), d.flags & 2048))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      so(9, d, d.return);
                  }
                var _ = d.sibling;
                if (_ !== null) {
                  (_.return = d.return), (Y = _);
                  break e;
                }
                Y = d.return;
              }
          }
          var b = e.current;
          for (Y = b; Y !== null; ) {
            h = Y;
            var O = h.child;
            if (h.subtreeFlags & 2064 && O !== null) (O.return = h), (Y = O);
            else
              e: for (h = b; Y !== null; ) {
                if (((x = Y), x.flags & 2048))
                  try {
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ki(9, x);
                    }
                  } catch (Z) {
                    Oe(x, x.return, Z);
                  }
                if (x === h) {
                  Y = null;
                  break e;
                }
                var W = x.sibling;
                if (W !== null) {
                  (W.return = x.return), (Y = W);
                  break e;
                }
                Y = x.return;
              }
          }
          if (
            ((fe = a),
            un(),
            Lt && typeof Lt.onPostCommitFiberRoot == "function")
          )
            try {
              Lt.onPostCommitFiberRoot(Fo, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (we = r), (xt.transition = t);
      }
    }
    return !1;
  }
  function tf(e, t, r) {
    (t = dr(r, t)),
      (t = wd(e, t, 1)),
      (e = dn(e, t, 1)),
      (t = et()),
      e !== null && (Ar(e, 1, t), st(e, t));
  }
  function Oe(e, t, r) {
    if (e.tag === 3) tf(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          tf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (pn === null || !pn.has(l)))
          ) {
            (e = dr(r, e)),
              (e = xd(t, e, 1)),
              (t = dn(t, e, 1)),
              (e = et()),
              t !== null && (Ar(t, 1, e), st(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bg(e, t, r) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (t = et()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Ue === e &&
        (Ve & r) === r &&
        (ze === 4 || (ze === 3 && (Ve & 130023424) === Ve && 500 > Le() - Zs)
          ? In(e, 0)
          : (Js |= r)),
      st(e, t);
  }
  function nf(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = zo), (zo <<= 1), !(zo & 130023424) && (zo = 4194304))
        : (t = 1));
    var r = et();
    (e = Kt(e, t)), e !== null && (Ar(e, t, r), st(e, r));
  }
  function Ug(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), nf(e, r);
  }
  function $g(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(t), nf(e, r);
  }
  var rf;
  rf = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || rt.current) it = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (it = !1), Tg(e, t, r);
        it = !!(e.flags & 131072);
      }
    else (it = !1), Pe && t.flags & 1048576 && Ic(t, si, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        Ei(e, t), (e = t.pendingProps);
        var a = rr(t, Ke.current);
        ur(t, r), (a = js(null, t, l, e, a, r));
        var d = _s();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ot(l) ? ((d = !0), oi(t)) : (d = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              Cs(t),
              (a.updater = xi),
              (t.stateNode = a),
              (a._reactInternals = t),
              Fs(t, l, e, r),
              (t = Us(null, t, l, !0, d, r)))
            : ((t.tag = 0), Pe && d && ps(t), Ze(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (Ei(e, t),
            (e = t.pendingProps),
            (a = l._init),
            (l = a(l._payload)),
            (t.type = l),
            (a = t.tag = Vg(l)),
            (e = Rt(l, e)),
            a)
          ) {
            case 0:
              t = Bs(null, t, l, e, r);
              break e;
            case 1:
              t = Td(null, t, l, e, r);
              break e;
            case 11:
              t = kd(null, t, l, e, r);
              break e;
            case 14:
              t = Rd(null, t, l, Rt(l.type, e), r);
              break e;
          }
          throw Error(i(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : Rt(l, a)),
          Bs(e, t, l, a, r)
        );
      case 1:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : Rt(l, a)),
          Td(e, t, l, a, r)
        );
      case 3:
        e: {
          if ((jd(t), e === null)) throw Error(i(387));
          (l = t.pendingProps),
            (d = t.memoizedState),
            (a = d.element),
            Hc(e, t),
            pi(t, l, null, r);
          var h = t.memoizedState;
          if (((l = h.element), d.isDehydrated))
            if (
              ((d = {
                element: l,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              (a = dr(Error(i(423)), t)), (t = _d(e, t, l, r, a));
              break e;
            } else if (l !== a) {
              (a = dr(Error(i(424)), t)), (t = _d(e, t, l, r, a));
              break e;
            } else
              for (
                pt = ln(t.stateNode.containerInfo.firstChild),
                  ft = t,
                  Pe = !0,
                  kt = null,
                  r = Wc(t, null, l, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((lr(), l === a)) {
              t = Qt(e, t, r);
              break e;
            }
            Ze(e, t, l, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Qc(t),
          e === null && gs(t),
          (l = t.type),
          (a = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (h = a.children),
          ss(l, a) ? (h = null) : d !== null && ss(l, d) && (t.flags |= 32),
          Pd(e, t),
          Ze(e, t, h, r),
          t.child
        );
      case 6:
        return e === null && gs(t), null;
      case 13:
        return Od(e, t, r);
      case 4:
        return (
          ks(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = sr(t, null, l, r)) : Ze(e, t, l, r),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : Rt(l, a)),
          kd(e, t, l, a, r)
        );
      case 7:
        return Ze(e, t, t.pendingProps, r), t.child;
      case 8:
        return Ze(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Ze(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (a = t.pendingProps),
            (d = t.memoizedProps),
            (h = a.value),
            Ee(ci, l._currentValue),
            (l._currentValue = h),
            d !== null)
          )
            if (Ct(d.value, h)) {
              if (d.children === a.children && !rt.current) {
                t = Qt(e, t, r);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var x = d.dependencies;
                if (x !== null) {
                  h = d.child;
                  for (var N = x.firstContext; N !== null; ) {
                    if (N.context === l) {
                      if (d.tag === 1) {
                        (N = Gt(-1, r & -r)), (N.tag = 2);
                        var A = d.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var B = A.pending;
                          B === null
                            ? (N.next = N)
                            : ((N.next = B.next), (B.next = N)),
                            (A.pending = N);
                        }
                      }
                      (d.lanes |= r),
                        (N = d.alternate),
                        N !== null && (N.lanes |= r),
                        Ss(d.return, r, t),
                        (x.lanes |= r);
                      break;
                    }
                    N = N.next;
                  }
                } else if (d.tag === 10) h = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((h = d.return), h === null)) throw Error(i(341));
                  (h.lanes |= r),
                    (x = h.alternate),
                    x !== null && (x.lanes |= r),
                    Ss(h, r, t),
                    (h = d.sibling);
                } else h = d.child;
                if (h !== null) h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((d = h.sibling), d !== null)) {
                      (d.return = h.return), (h = d);
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          Ze(e, t, a.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (l = t.pendingProps.children),
          ur(t, r),
          (a = yt(a)),
          (l = l(a)),
          (t.flags |= 1),
          Ze(e, t, l, r),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (a = Rt(l, t.pendingProps)),
          (a = Rt(l.type, a)),
          Rd(e, t, l, a, r)
        );
      case 15:
        return Nd(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : Rt(l, a)),
          Ei(e, t),
          (t.tag = 1),
          ot(l) ? ((e = !0), oi(t)) : (e = !1),
          ur(t, r),
          vd(t, l, a),
          Fs(t, l, a, r),
          Us(null, t, l, !0, e, r)
        );
      case 19:
        return Ad(e, t, r);
      case 22:
        return bd(e, t, r);
    }
    throw Error(i(156, t.tag));
  };
  function of(e, t) {
    return Fu(e, t);
  }
  function Wg(e, t, r, l) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function St(e, t, r, l) {
    return new Wg(e, t, r, l);
  }
  function sa(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Vg(e) {
    if (typeof e == "function") return sa(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ae)) return 11;
      if (e === Je) return 14;
    }
    return 2;
  }
  function vn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = St(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Li(e, t, r, l, a, d) {
    var h = 2;
    if (((l = e), typeof e == "function")) sa(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case Q:
          return Mn(r.children, a, d, t);
        case ee:
          (h = 8), (a |= 8);
          break;
        case se:
          return (
            (e = St(12, r, t, a | 2)), (e.elementType = se), (e.lanes = d), e
          );
        case I:
          return (e = St(13, r, t, a)), (e.elementType = I), (e.lanes = d), e;
        case Fe:
          return (e = St(19, r, t, a)), (e.elementType = Fe), (e.lanes = d), e;
        case Ce:
          return Ai(r, a, d, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ve:
                h = 10;
                break e;
              case De:
                h = 9;
                break e;
              case ae:
                h = 11;
                break e;
              case Je:
                h = 14;
                break e;
              case xe:
                (h = 16), (l = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = St(h, r, t, a)), (t.elementType = e), (t.type = l), (t.lanes = d), t
    );
  }
  function Mn(e, t, r, l) {
    return (e = St(7, e, l, t)), (e.lanes = r), e;
  }
  function Ai(e, t, r, l) {
    return (
      (e = St(22, e, l, t)),
      (e.elementType = Ce),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function aa(e, t, r) {
    return (e = St(6, e, null, t)), (e.lanes = r), e;
  }
  function ua(e, t, r) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Hg(e, t, r, l, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Il(0)),
      (this.expirationTimes = Il(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Il(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ca(e, t, r, l, a, d, h, x, N) {
    return (
      (e = new Hg(e, t, r, x, N)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = St(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: l,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Cs(d),
      e
    );
  }
  function Kg(e, t, r) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function lf(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ot(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (ot(r)) return Lc(e, r, t);
    }
    return t;
  }
  function sf(e, t, r, l, a, d, h, x, N) {
    return (
      (e = ca(r, l, !0, e, a, d, h, x, N)),
      (e.context = lf(null)),
      (r = e.current),
      (l = et()),
      (a = mn(r)),
      (d = Gt(l, a)),
      (d.callback = t ?? null),
      dn(r, d, a),
      (e.current.lanes = a),
      Ar(e, a, l),
      st(e, l),
      e
    );
  }
  function Di(e, t, r, l) {
    var a = t.current,
      d = et(),
      h = mn(a);
    return (
      (r = lf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Gt(d, h)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = dn(a, t, h)),
      e !== null && (Pt(e, a, h, d), fi(e, a, h)),
      h
    );
  }
  function Ii(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function af(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function da(e, t) {
    af(e, t), (e = e.alternate) && af(e, t);
  }
  function Gg() {
    return null;
  }
  var uf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function fa(e) {
    this._internalRoot = e;
  }
  (Fi.prototype.render = fa.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Di(e, t, null, null);
    }),
    (Fi.prototype.unmount = fa.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Dn(function () {
            Di(null, e, null, null);
          }),
            (t[$t] = null);
        }
      });
  function Fi(e) {
    this._internalRoot = e;
  }
  Fi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Hu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < nn.length && t !== 0 && t < nn[r].priority; r++);
      nn.splice(r, 0, e), r === 0 && Qu(e);
    }
  };
  function pa(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Mi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function cf() {}
  function Qg(e, t, r, l, a) {
    if (a) {
      if (typeof l == "function") {
        var d = l;
        l = function () {
          var A = Ii(h);
          d.call(A);
        };
      }
      var h = sf(t, l, e, 0, null, !1, !1, "", cf);
      return (
        (e._reactRootContainer = h),
        (e[$t] = h.current),
        Qr(e.nodeType === 8 ? e.parentNode : e),
        Dn(),
        h
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof l == "function") {
      var x = l;
      l = function () {
        var A = Ii(N);
        x.call(A);
      };
    }
    var N = ca(e, 0, !1, null, null, !1, !1, "", cf);
    return (
      (e._reactRootContainer = N),
      (e[$t] = N.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      Dn(function () {
        Di(t, N, r, l);
      }),
      N
    );
  }
  function zi(e, t, r, l, a) {
    var d = r._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof a == "function") {
        var x = a;
        a = function () {
          var N = Ii(h);
          x.call(N);
        };
      }
      Di(t, h, e, a);
    } else h = Qg(r, t, e, a, l);
    return Ii(h);
  }
  (Wu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Lr(t.pendingLanes);
          r !== 0 &&
            (Fl(t, r | 1), st(t, Le()), !(fe & 6) && ((hr = Le() + 500), un()));
        }
        break;
      case 13:
        Dn(function () {
          var l = Kt(e, 1);
          if (l !== null) {
            var a = et();
            Pt(l, e, 1, a);
          }
        }),
          da(e, 1);
    }
  }),
    (Ml = function (e) {
      if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
          var r = et();
          Pt(t, e, 134217728, r);
        }
        da(e, 134217728);
      }
    }),
    (Vu = function (e) {
      if (e.tag === 13) {
        var t = mn(e),
          r = Kt(e, t);
        if (r !== null) {
          var l = et();
          Pt(r, e, t, l);
        }
        da(e, t);
      }
    }),
    (Hu = function () {
      return we;
    }),
    (Ku = function (e, t) {
      var r = we;
      try {
        return (we = e), t();
      } finally {
        we = r;
      }
    }),
    (jl = function (e, t, r) {
      switch (t) {
        case "input":
          if ((El(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var l = r[t];
              if (l !== e && l.form === e.form) {
                var a = ni(l);
                if (!a) throw Error(i(90));
                gu(l), El(l, a);
              }
            }
          }
          break;
        case "textarea":
          Su(e, r);
          break;
        case "select":
          (t = r.value), t != null && Hn(e, !!r.multiple, t, !1);
      }
    }),
    (ju = oa),
    (_u = Dn);
  var qg = { usingClientEntryPoint: !1, Events: [Xr, tr, ni, Pu, Tu, oa] },
    fo = {
      findFiberByHostInstance: bn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Yg = {
      bundleType: fo.bundleType,
      version: fo.version,
      rendererPackageName: fo.rendererPackageName,
      rendererConfig: fo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: $.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Du(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: fo.findFiberByHostInstance || Gg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bi.isDisabled && Bi.supportsFiber)
      try {
        (Fo = Bi.inject(Yg)), (Lt = Bi);
      } catch {}
  }
  return (
    (at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qg),
    (at.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!pa(t)) throw Error(i(200));
      return Kg(e, t, null, r);
    }),
    (at.createRoot = function (e, t) {
      if (!pa(e)) throw Error(i(299));
      var r = !1,
        l = "",
        a = uf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = ca(e, 1, !1, null, null, r, !1, l, a)),
        (e[$t] = t.current),
        Qr(e.nodeType === 8 ? e.parentNode : e),
        new fa(t)
      );
    }),
    (at.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = Du(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (at.flushSync = function (e) {
      return Dn(e);
    }),
    (at.hydrate = function (e, t, r) {
      if (!Mi(t)) throw Error(i(200));
      return zi(null, e, t, !0, r);
    }),
    (at.hydrateRoot = function (e, t, r) {
      if (!pa(e)) throw Error(i(405));
      var l = (r != null && r.hydratedSources) || null,
        a = !1,
        d = "",
        h = uf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (d = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = sf(t, null, e, 1, r ?? null, a, !1, d, h)),
        (e[$t] = t.current),
        Qr(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (r = l[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new Fi(t);
    }),
    (at.render = function (e, t, r) {
      if (!Mi(t)) throw Error(i(200));
      return zi(null, e, t, !1, r);
    }),
    (at.unmountComponentAtNode = function (e) {
      if (!Mi(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Dn(function () {
            zi(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[$t] = null);
            });
          }),
          !0)
        : !1;
    }),
    (at.unstable_batchedUpdates = oa),
    (at.unstable_renderSubtreeIntoContainer = function (e, t, r, l) {
      if (!Mi(r)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return zi(e, t, r, !1, l);
    }),
    (at.version = "18.3.1-next-f1338f8080-20240426"),
    at
  );
}
var yf;
function ip() {
  if (yf) return ga.exports;
  yf = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), (ga.exports = iv()), ga.exports;
}
var wf;
function lv() {
  if (wf) return Ui;
  wf = 1;
  var n = ip();
  return (Ui.createRoot = n.createRoot), (Ui.hydrateRoot = n.hydrateRoot), Ui;
}
var sv = lv(),
  ho = {},
  xf;
function av() {
  if (xf) return ho;
  (xf = 1),
    Object.defineProperty(ho, "__esModule", { value: !0 }),
    (ho.parse = f),
    (ho.serialize = g);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    i =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    u = Object.prototype.toString,
    c = (() => {
      const E = function () {};
      return (E.prototype = Object.create(null)), E;
    })();
  function f(E, T) {
    const R = new c(),
      S = E.length;
    if (S < 2) return R;
    const k = (T == null ? void 0 : T.decode) || w;
    let P = 0;
    do {
      const L = E.indexOf("=", P);
      if (L === -1) break;
      const F = E.indexOf(";", P),
        $ = F === -1 ? S : F;
      if (L > $) {
        P = E.lastIndexOf(";", L - 1) + 1;
        continue;
      }
      const H = p(E, P, L),
        V = y(E, L, H),
        Q = E.slice(H, V);
      if (R[Q] === void 0) {
        let ee = p(E, L + 1, $),
          se = y(E, $, ee);
        const ve = k(E.slice(ee, se));
        R[Q] = ve;
      }
      P = $ + 1;
    } while (P < S);
    return R;
  }
  function p(E, T, R) {
    do {
      const S = E.charCodeAt(T);
      if (S !== 32 && S !== 9) return T;
    } while (++T < R);
    return R;
  }
  function y(E, T, R) {
    for (; T > R; ) {
      const S = E.charCodeAt(--T);
      if (S !== 32 && S !== 9) return T + 1;
    }
    return R;
  }
  function g(E, T, R) {
    const S = (R == null ? void 0 : R.encode) || encodeURIComponent;
    if (!n.test(E)) throw new TypeError(`argument name is invalid: ${E}`);
    const k = S(T);
    if (!o.test(k)) throw new TypeError(`argument val is invalid: ${T}`);
    let P = E + "=" + k;
    if (!R) return P;
    if (R.maxAge !== void 0) {
      if (!Number.isInteger(R.maxAge))
        throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);
      P += "; Max-Age=" + R.maxAge;
    }
    if (R.domain) {
      if (!i.test(R.domain))
        throw new TypeError(`option domain is invalid: ${R.domain}`);
      P += "; Domain=" + R.domain;
    }
    if (R.path) {
      if (!s.test(R.path))
        throw new TypeError(`option path is invalid: ${R.path}`);
      P += "; Path=" + R.path;
    }
    if (R.expires) {
      if (!C(R.expires) || !Number.isFinite(R.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${R.expires}`);
      P += "; Expires=" + R.expires.toUTCString();
    }
    if (
      (R.httpOnly && (P += "; HttpOnly"),
      R.secure && (P += "; Secure"),
      R.partitioned && (P += "; Partitioned"),
      R.priority)
    )
      switch (
        typeof R.priority == "string" ? R.priority.toLowerCase() : void 0
      ) {
        case "low":
          P += "; Priority=Low";
          break;
        case "medium":
          P += "; Priority=Medium";
          break;
        case "high":
          P += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${R.priority}`);
      }
    if (R.sameSite)
      switch (
        typeof R.sameSite == "string" ? R.sameSite.toLowerCase() : R.sameSite
      ) {
        case !0:
        case "strict":
          P += "; SameSite=Strict";
          break;
        case "lax":
          P += "; SameSite=Lax";
          break;
        case "none":
          P += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${R.sameSite}`);
      }
    return P;
  }
  function w(E) {
    if (E.indexOf("%") === -1) return E;
    try {
      return decodeURIComponent(E);
    } catch {
      return E;
    }
  }
  function C(E) {
    return u.call(E) === "[object Date]";
  }
  return ho;
}
av();
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Sf = "popstate";
function uv(n = {}) {
  function o(s, u) {
    let { pathname: c, search: f, hash: p } = s.location;
    return Da(
      "",
      { pathname: c, search: f, hash: p },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || "default"
    );
  }
  function i(s, u) {
    return typeof u == "string" ? u : Co(u);
  }
  return dv(o, i, null, n);
}
function Te(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o);
}
function Tt(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function cv() {
  return Math.random().toString(36).substring(2, 10);
}
function Ef(n, o) {
  return { usr: n.state, key: n.key, idx: o };
}
function Da(n, o, i = null, s) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? Sr(o) : o),
    state: i,
    key: (o && o.key) || s || cv(),
  };
}
function Co({ pathname: n = "/", search: o = "", hash: i = "" }) {
  return (
    o && o !== "?" && (n += o.charAt(0) === "?" ? o : "?" + o),
    i && i !== "#" && (n += i.charAt(0) === "#" ? i : "#" + i),
    n
  );
}
function Sr(n) {
  let o = {};
  if (n) {
    let i = n.indexOf("#");
    i >= 0 && ((o.hash = n.substring(i)), (n = n.substring(0, i)));
    let s = n.indexOf("?");
    s >= 0 && ((o.search = n.substring(s)), (n = n.substring(0, s))),
      n && (o.pathname = n);
  }
  return o;
}
function dv(n, o, i, s = {}) {
  let { window: u = document.defaultView, v5Compat: c = !1 } = s,
    f = u.history,
    p = "POP",
    y = null,
    g = w();
  g == null && ((g = 0), f.replaceState({ ...f.state, idx: g }, ""));
  function w() {
    return (f.state || { idx: null }).idx;
  }
  function C() {
    p = "POP";
    let k = w(),
      P = k == null ? null : k - g;
    (g = k), y && y({ action: p, location: S.location, delta: P });
  }
  function E(k, P) {
    p = "PUSH";
    let L = Da(S.location, k, P);
    g = w() + 1;
    let F = Ef(L, g),
      $ = S.createHref(L);
    try {
      f.pushState(F, "", $);
    } catch (H) {
      if (H instanceof DOMException && H.name === "DataCloneError") throw H;
      u.location.assign($);
    }
    c && y && y({ action: p, location: S.location, delta: 1 });
  }
  function T(k, P) {
    p = "REPLACE";
    let L = Da(S.location, k, P);
    g = w();
    let F = Ef(L, g),
      $ = S.createHref(L);
    f.replaceState(F, "", $),
      c && y && y({ action: p, location: S.location, delta: 0 });
  }
  function R(k) {
    let P = u.location.origin !== "null" ? u.location.origin : u.location.href,
      L = typeof k == "string" ? k : Co(k);
    return (
      (L = L.replace(/ $/, "%20")),
      Te(
        P,
        `No window.location.(origin|href) available to create URL for href: ${L}`
      ),
      new URL(L, P)
    );
  }
  let S = {
    get action() {
      return p;
    },
    get location() {
      return n(u, f);
    },
    listen(k) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(Sf, C),
        (y = k),
        () => {
          u.removeEventListener(Sf, C), (y = null);
        }
      );
    },
    createHref(k) {
      return o(u, k);
    },
    createURL: R,
    encodeLocation(k) {
      let P = R(k);
      return { pathname: P.pathname, search: P.search, hash: P.hash };
    },
    push: E,
    replace: T,
    go(k) {
      return f.go(k);
    },
  };
  return S;
}
function lp(n, o, i = "/") {
  return fv(n, o, i, !1);
}
function fv(n, o, i, s) {
  let u = typeof o == "string" ? Sr(o) : o,
    c = Cn(u.pathname || "/", i);
  if (c == null) return null;
  let f = sp(n);
  pv(f);
  let p = null;
  for (let y = 0; p == null && y < f.length; ++y) {
    let g = kv(c);
    p = Ev(f[y], g, s);
  }
  return p;
}
function sp(n, o = [], i = [], s = "") {
  let u = (c, f, p) => {
    let y = {
      relativePath: p === void 0 ? c.path || "" : p,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    y.relativePath.startsWith("/") &&
      (Te(
        y.relativePath.startsWith(s),
        `Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (y.relativePath = y.relativePath.slice(s.length)));
    let g = Jt([s, y.relativePath]),
      w = i.concat(y);
    c.children &&
      c.children.length > 0 &&
      (Te(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      sp(c.children, o, w, g)),
      !(c.path == null && !c.index) &&
        o.push({ path: g, score: xv(g, c.index), routesMeta: w });
  };
  return (
    n.forEach((c, f) => {
      var p;
      if (c.path === "" || !((p = c.path) != null && p.includes("?"))) u(c, f);
      else for (let y of ap(c.path)) u(c, f, y);
    }),
    o
  );
}
function ap(n) {
  let o = n.split("/");
  if (o.length === 0) return [];
  let [i, ...s] = o,
    u = i.endsWith("?"),
    c = i.replace(/\?$/, "");
  if (s.length === 0) return u ? [c, ""] : [c];
  let f = ap(s.join("/")),
    p = [];
  return (
    p.push(...f.map((y) => (y === "" ? c : [c, y].join("/")))),
    u && p.push(...f),
    p.map((y) => (n.startsWith("/") && y === "" ? "/" : y))
  );
}
function pv(n) {
  n.sort((o, i) =>
    o.score !== i.score
      ? i.score - o.score
      : Sv(
          o.routesMeta.map((s) => s.childrenIndex),
          i.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
var hv = /^:[\w-]+$/,
  mv = 3,
  gv = 2,
  vv = 1,
  yv = 10,
  wv = -2,
  Cf = (n) => n === "*";
function xv(n, o) {
  let i = n.split("/"),
    s = i.length;
  return (
    i.some(Cf) && (s += wv),
    o && (s += gv),
    i
      .filter((u) => !Cf(u))
      .reduce((u, c) => u + (hv.test(c) ? mv : c === "" ? vv : yv), s)
  );
}
function Sv(n, o) {
  return n.length === o.length && n.slice(0, -1).every((s, u) => s === o[u])
    ? n[n.length - 1] - o[o.length - 1]
    : 0;
}
function Ev(n, o, i = !1) {
  let { routesMeta: s } = n,
    u = {},
    c = "/",
    f = [];
  for (let p = 0; p < s.length; ++p) {
    let y = s[p],
      g = p === s.length - 1,
      w = c === "/" ? o : o.slice(c.length) || "/",
      C = ol(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: g },
        w
      ),
      E = y.route;
    if (
      (!C &&
        g &&
        i &&
        !s[s.length - 1].route.index &&
        (C = ol(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          w
        )),
      !C)
    )
      return null;
    Object.assign(u, C.params),
      f.push({
        params: u,
        pathname: Jt([c, C.pathname]),
        pathnameBase: Pv(Jt([c, C.pathnameBase])),
        route: E,
      }),
      C.pathnameBase !== "/" && (c = Jt([c, C.pathnameBase]));
  }
  return f;
}
function ol(n, o) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [i, s] = Cv(n.path, n.caseSensitive, n.end),
    u = o.match(i);
  if (!u) return null;
  let c = u[0],
    f = c.replace(/(.)\/+$/, "$1"),
    p = u.slice(1);
  return {
    params: s.reduce((g, { paramName: w, isOptional: C }, E) => {
      if (w === "*") {
        let R = p[E] || "";
        f = c.slice(0, c.length - R.length).replace(/(.)\/+$/, "$1");
      }
      const T = p[E];
      return (
        C && !T ? (g[w] = void 0) : (g[w] = (T || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: n,
  };
}
function Cv(n, o = !1, i = !0) {
  Tt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let s = [],
    u =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, p, y) => (
            s.push({ paramName: p, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (u += "\\/*$")
      : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, o ? void 0 : "i"), s]
  );
}
function kv(n) {
  try {
    return n
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      Tt(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      n
    );
  }
}
function Cn(n, o) {
  if (o === "/") return n;
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null;
  let i = o.endsWith("/") ? o.length - 1 : o.length,
    s = n.charAt(i);
  return s && s !== "/" ? null : n.slice(i) || "/";
}
function Rv(n, o = "/") {
  let {
    pathname: i,
    search: s = "",
    hash: u = "",
  } = typeof n == "string" ? Sr(n) : n;
  return {
    pathname: i ? (i.startsWith("/") ? i : Nv(i, o)) : o,
    search: Tv(s),
    hash: jv(u),
  };
}
function Nv(n, o) {
  let i = o.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((u) => {
      u === ".." ? i.length > 1 && i.pop() : u !== "." && i.push(u);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function wa(n, o, i, s) {
  return `Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function bv(n) {
  return n.filter(
    (o, i) => i === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function Ya(n) {
  let o = bv(n);
  return o.map((i, s) => (s === o.length - 1 ? i.pathname : i.pathnameBase));
}
function Xa(n, o, i, s = !1) {
  let u;
  typeof n == "string"
    ? (u = Sr(n))
    : ((u = { ...n }),
      Te(
        !u.pathname || !u.pathname.includes("?"),
        wa("?", "pathname", "search", u)
      ),
      Te(
        !u.pathname || !u.pathname.includes("#"),
        wa("#", "pathname", "hash", u)
      ),
      Te(!u.search || !u.search.includes("#"), wa("#", "search", "hash", u)));
  let c = n === "" || u.pathname === "",
    f = c ? "/" : u.pathname,
    p;
  if (f == null) p = i;
  else {
    let C = o.length - 1;
    if (!s && f.startsWith("..")) {
      let E = f.split("/");
      for (; E[0] === ".."; ) E.shift(), (C -= 1);
      u.pathname = E.join("/");
    }
    p = C >= 0 ? o[C] : "/";
  }
  let y = Rv(u, p),
    g = f && f !== "/" && f.endsWith("/"),
    w = (c || f === ".") && i.endsWith("/");
  return !y.pathname.endsWith("/") && (g || w) && (y.pathname += "/"), y;
}
var Jt = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Pv = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Tv = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  jv = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function _v(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var up = ["POST", "PUT", "PATCH", "DELETE"];
new Set(up);
var Ov = ["GET", ...up];
new Set(Ov);
var Er = v.createContext(null);
Er.displayName = "DataRouter";
var ul = v.createContext(null);
ul.displayName = "DataRouterState";
var cp = v.createContext({ isTransitioning: !1 });
cp.displayName = "ViewTransition";
var Lv = v.createContext(new Map());
Lv.displayName = "Fetchers";
var Av = v.createContext(null);
Av.displayName = "Await";
var jt = v.createContext(null);
jt.displayName = "Navigation";
var No = v.createContext(null);
No.displayName = "Location";
var Ut = v.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ut.displayName = "Route";
var Ja = v.createContext(null);
Ja.displayName = "RouteError";
function Dv(n, { relative: o } = {}) {
  Te(
    Cr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: s } = v.useContext(jt),
    { hash: u, pathname: c, search: f } = bo(n, { relative: o }),
    p = c;
  return (
    i !== "/" && (p = c === "/" ? i : Jt([i, c])),
    s.createHref({ pathname: p, search: f, hash: u })
  );
}
function Cr() {
  return v.useContext(No) != null;
}
function Rn() {
  return (
    Te(
      Cr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    v.useContext(No).location
  );
}
var dp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function fp(n) {
  v.useContext(jt).static || v.useLayoutEffect(n);
}
function cl() {
  let { isDataRoute: n } = v.useContext(Ut);
  return n ? Qv() : Iv();
}
function Iv() {
  Te(
    Cr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = v.useContext(Er),
    { basename: o, navigator: i } = v.useContext(jt),
    { matches: s } = v.useContext(Ut),
    { pathname: u } = Rn(),
    c = JSON.stringify(Ya(s)),
    f = v.useRef(!1);
  return (
    fp(() => {
      f.current = !0;
    }),
    v.useCallback(
      (y, g = {}) => {
        if ((Tt(f.current, dp), !f.current)) return;
        if (typeof y == "number") {
          i.go(y);
          return;
        }
        let w = Xa(y, JSON.parse(c), u, g.relative === "path");
        n == null &&
          o !== "/" &&
          (w.pathname = w.pathname === "/" ? o : Jt([o, w.pathname])),
          (g.replace ? i.replace : i.push)(w, g.state, g);
      },
      [o, i, c, u, n]
    )
  );
}
v.createContext(null);
function bo(n, { relative: o } = {}) {
  let { matches: i } = v.useContext(Ut),
    { pathname: s } = Rn(),
    u = JSON.stringify(Ya(i));
  return v.useMemo(() => Xa(n, JSON.parse(u), s, o === "path"), [n, u, s, o]);
}
function Fv(n, o) {
  return pp(n, o);
}
function pp(n, o, i, s) {
  var P;
  Te(
    Cr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: u } = v.useContext(jt),
    { matches: c } = v.useContext(Ut),
    f = c[c.length - 1],
    p = f ? f.params : {},
    y = f ? f.pathname : "/",
    g = f ? f.pathnameBase : "/",
    w = f && f.route;
  {
    let L = (w && w.path) || "";
    hp(
      y,
      !w || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${
        L === "/" ? "*" : `${L}/*`
      }">.`
    );
  }
  let C = Rn(),
    E;
  if (o) {
    let L = typeof o == "string" ? Sr(o) : o;
    Te(
      g === "/" || ((P = L.pathname) == null ? void 0 : P.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`
    ),
      (E = L);
  } else E = C;
  let T = E.pathname || "/",
    R = T;
  if (g !== "/") {
    let L = g.replace(/^\//, "").split("/");
    R = "/" + T.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let S = lp(n, { pathname: R });
  Tt(
    w || S != null,
    `No routes matched location "${E.pathname}${E.search}${E.hash}" `
  ),
    Tt(
      S == null ||
        S[S.length - 1].route.element !== void 0 ||
        S[S.length - 1].route.Component !== void 0 ||
        S[S.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let k = $v(
    S &&
      S.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, p, L.params),
          pathname: Jt([
            g,
            u.encodeLocation
              ? u.encodeLocation(L.pathname).pathname
              : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === "/"
              ? g
              : Jt([
                  g,
                  u.encodeLocation
                    ? u.encodeLocation(L.pathnameBase).pathname
                    : L.pathnameBase,
                ]),
        })
      ),
    c,
    i,
    s
  );
  return o && k
    ? v.createElement(
        No.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...E,
            },
            navigationType: "POP",
          },
        },
        k
      )
    : k;
}
function Mv() {
  let n = Gv(),
    o = _v(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    i = n instanceof Error ? n.stack : null,
    s = "rgba(200,200,200, 0.5)",
    u = { padding: "0.5rem", backgroundColor: s },
    c = { padding: "2px 4px", backgroundColor: s },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (f = v.createElement(
      v.Fragment,
      null,
      v.createElement("p", null, "💿 Hey developer 👋"),
      v.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        v.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        v.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    v.createElement(
      v.Fragment,
      null,
      v.createElement("h2", null, "Unexpected Application Error!"),
      v.createElement("h3", { style: { fontStyle: "italic" } }, o),
      i ? v.createElement("pre", { style: u }, i) : null,
      f
    )
  );
}
var zv = v.createElement(Mv, null),
  Bv = class extends v.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, o) {
      return o.location !== n.location ||
        (o.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : o.error,
            location: o.location,
            revalidation: n.revalidation || o.revalidation,
          };
    }
    componentDidCatch(n, o) {
      console.error(
        "React Router caught the following error during render",
        n,
        o
      );
    }
    render() {
      return this.state.error !== void 0
        ? v.createElement(
            Ut.Provider,
            { value: this.props.routeContext },
            v.createElement(Ja.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Uv({ routeContext: n, match: o, children: i }) {
  let s = v.useContext(Er);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = o.route.id),
    v.createElement(Ut.Provider, { value: n }, i)
  );
}
function $v(n, o = [], i = null, s = null) {
  if (n == null) {
    if (!i) return null;
    if (i.errors) n = i.matches;
    else if (o.length === 0 && !i.initialized && i.matches.length > 0)
      n = i.matches;
    else return null;
  }
  let u = n,
    c = i == null ? void 0 : i.errors;
  if (c != null) {
    let y = u.findIndex(
      (g) => g.route.id && (c == null ? void 0 : c[g.route.id]) !== void 0
    );
    Te(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ),
      (u = u.slice(0, Math.min(u.length, y + 1)));
  }
  let f = !1,
    p = -1;
  if (i)
    for (let y = 0; y < u.length; y++) {
      let g = u[y];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (p = y),
        g.route.id)
      ) {
        let { loaderData: w, errors: C } = i,
          E =
            g.route.loader &&
            !w.hasOwnProperty(g.route.id) &&
            (!C || C[g.route.id] === void 0);
        if (g.route.lazy || E) {
          (f = !0), p >= 0 ? (u = u.slice(0, p + 1)) : (u = [u[0]]);
          break;
        }
      }
    }
  return u.reduceRight((y, g, w) => {
    let C,
      E = !1,
      T = null,
      R = null;
    i &&
      ((C = c && g.route.id ? c[g.route.id] : void 0),
      (T = g.route.errorElement || zv),
      f &&
        (p < 0 && w === 0
          ? (hp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (E = !0),
            (R = null))
          : p === w &&
            ((E = !0), (R = g.route.hydrateFallbackElement || null))));
    let S = o.concat(u.slice(0, w + 1)),
      k = () => {
        let P;
        return (
          C
            ? (P = T)
            : E
            ? (P = R)
            : g.route.Component
            ? (P = v.createElement(g.route.Component, null))
            : g.route.element
            ? (P = g.route.element)
            : (P = y),
          v.createElement(Uv, {
            match: g,
            routeContext: { outlet: y, matches: S, isDataRoute: i != null },
            children: P,
          })
        );
      };
    return i && (g.route.ErrorBoundary || g.route.errorElement || w === 0)
      ? v.createElement(Bv, {
          location: i.location,
          revalidation: i.revalidation,
          component: T,
          error: C,
          children: k(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : k();
  }, null);
}
function Za(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Wv(n) {
  let o = v.useContext(Er);
  return Te(o, Za(n)), o;
}
function Vv(n) {
  let o = v.useContext(ul);
  return Te(o, Za(n)), o;
}
function Hv(n) {
  let o = v.useContext(Ut);
  return Te(o, Za(n)), o;
}
function eu(n) {
  let o = Hv(n),
    i = o.matches[o.matches.length - 1];
  return (
    Te(
      i.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    i.route.id
  );
}
function Kv() {
  return eu("useRouteId");
}
function Gv() {
  var s;
  let n = v.useContext(Ja),
    o = Vv("useRouteError"),
    i = eu("useRouteError");
  return n !== void 0 ? n : (s = o.errors) == null ? void 0 : s[i];
}
function Qv() {
  let { router: n } = Wv("useNavigate"),
    o = eu("useNavigate"),
    i = v.useRef(!1);
  return (
    fp(() => {
      i.current = !0;
    }),
    v.useCallback(
      async (u, c = {}) => {
        Tt(i.current, dp),
          i.current &&
            (typeof u == "number"
              ? n.navigate(u)
              : await n.navigate(u, { fromRouteId: o, ...c }));
      },
      [n, o]
    )
  );
}
var kf = {};
function hp(n, o, i) {
  !o && !kf[n] && ((kf[n] = !0), Tt(!1, i));
}
v.memo(qv);
function qv({ routes: n, future: o, state: i }) {
  return pp(n, void 0, i, o);
}
function Rf({ to: n, replace: o, state: i, relative: s }) {
  Te(
    Cr(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: u } = v.useContext(jt);
  Tt(
    !u,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: c } = v.useContext(Ut),
    { pathname: f } = Rn(),
    p = cl(),
    y = Xa(n, Ya(c), f, s === "path"),
    g = JSON.stringify(y);
  return (
    v.useEffect(() => {
      p(JSON.parse(g), { replace: o, state: i, relative: s });
    }, [p, g, s, o, i]),
    null
  );
}
function zn(n) {
  Te(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Yv({
  basename: n = "/",
  children: o = null,
  location: i,
  navigationType: s = "POP",
  navigator: u,
  static: c = !1,
}) {
  Te(
    !Cr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = n.replace(/^\/*/, "/"),
    p = v.useMemo(
      () => ({ basename: f, navigator: u, static: c, future: {} }),
      [f, u, c]
    );
  typeof i == "string" && (i = Sr(i));
  let {
      pathname: y = "/",
      search: g = "",
      hash: w = "",
      state: C = null,
      key: E = "default",
    } = i,
    T = v.useMemo(() => {
      let R = Cn(y, f);
      return R == null
        ? null
        : {
            location: { pathname: R, search: g, hash: w, state: C, key: E },
            navigationType: s,
          };
    }, [f, y, g, w, C, E, s]);
  return (
    Tt(
      T != null,
      `<Router basename="${f}"> is not able to match the URL "${y}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    T == null
      ? null
      : v.createElement(
          jt.Provider,
          { value: p },
          v.createElement(No.Provider, { children: o, value: T })
        )
  );
}
function Xv({ children: n, location: o }) {
  return Fv(Ia(n), o);
}
function Ia(n, o = []) {
  let i = [];
  return (
    v.Children.forEach(n, (s, u) => {
      if (!v.isValidElement(s)) return;
      let c = [...o, u];
      if (s.type === v.Fragment) {
        i.push.apply(i, Ia(s.props.children, c));
        return;
      }
      Te(
        s.type === zn,
        `[${
          typeof s.type == "string" ? s.type : s.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Te(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes."
        );
      let f = {
        id: s.props.id || c.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (f.children = Ia(s.props.children, c)), i.push(f);
    }),
    i
  );
}
var Qi = "get",
  qi = "application/x-www-form-urlencoded";
function dl(n) {
  return n != null && typeof n.tagName == "string";
}
function Jv(n) {
  return dl(n) && n.tagName.toLowerCase() === "button";
}
function Zv(n) {
  return dl(n) && n.tagName.toLowerCase() === "form";
}
function ey(n) {
  return dl(n) && n.tagName.toLowerCase() === "input";
}
function ty(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function ny(n, o) {
  return n.button === 0 && (!o || o === "_self") && !ty(n);
}
var $i = null;
function ry() {
  if ($i === null)
    try {
      new FormData(document.createElement("form"), 0), ($i = !1);
    } catch {
      $i = !0;
    }
  return $i;
}
var oy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function xa(n) {
  return n != null && !oy.has(n)
    ? (Tt(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qi}"`
      ),
      null)
    : n;
}
function iy(n, o) {
  let i, s, u, c, f;
  if (Zv(n)) {
    let p = n.getAttribute("action");
    (s = p ? Cn(p, o) : null),
      (i = n.getAttribute("method") || Qi),
      (u = xa(n.getAttribute("enctype")) || qi),
      (c = new FormData(n));
  } else if (Jv(n) || (ey(n) && (n.type === "submit" || n.type === "image"))) {
    let p = n.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = n.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((s = y ? Cn(y, o) : null),
      (i = n.getAttribute("formmethod") || p.getAttribute("method") || Qi),
      (u =
        xa(n.getAttribute("formenctype")) ||
        xa(p.getAttribute("enctype")) ||
        qi),
      (c = new FormData(p, n)),
      !ry())
    ) {
      let { name: g, type: w, value: C } = n;
      if (w === "image") {
        let E = g ? `${g}.` : "";
        c.append(`${E}x`, "0"), c.append(`${E}y`, "0");
      } else g && c.append(g, C);
    }
  } else {
    if (dl(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (i = Qi), (s = null), (u = qi), (f = n);
  }
  return (
    c && u === "text/plain" && ((f = c), (c = void 0)),
    { action: s, method: i.toLowerCase(), encType: u, formData: c, body: f }
  );
}
function tu(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o);
}
async function ly(n, o) {
  if (n.id in o) return o[n.id];
  try {
    let i = await import(n.module);
    return (o[n.id] = i), i;
  } catch (i) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(i),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function sy(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function ay(n, o, i) {
  let s = await Promise.all(
    n.map(async (u) => {
      let c = o.routes[u.route.id];
      if (c) {
        let f = await ly(c, i);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return fy(
    s
      .flat(1)
      .filter(sy)
      .filter((u) => u.rel === "stylesheet" || u.rel === "preload")
      .map((u) =>
        u.rel === "stylesheet"
          ? { ...u, rel: "prefetch", as: "style" }
          : { ...u, rel: "prefetch" }
      )
  );
}
function Nf(n, o, i, s, u, c) {
  let f = (y, g) => (i[g] ? y.route.id !== i[g].route.id : !0),
    p = (y, g) => {
      var w;
      return (
        i[g].pathname !== y.pathname ||
        (((w = i[g].route.path) == null ? void 0 : w.endsWith("*")) &&
          i[g].params["*"] !== y.params["*"])
      );
    };
  return c === "assets"
    ? o.filter((y, g) => f(y, g) || p(y, g))
    : c === "data"
    ? o.filter((y, g) => {
        var C;
        let w = s.routes[y.route.id];
        if (!w || !w.hasLoader) return !1;
        if (f(y, g) || p(y, g)) return !0;
        if (y.route.shouldRevalidate) {
          let E = y.route.shouldRevalidate({
            currentUrl: new URL(u.pathname + u.search + u.hash, window.origin),
            currentParams: ((C = i[0]) == null ? void 0 : C.params) || {},
            nextUrl: new URL(n, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof E == "boolean") return E;
        }
        return !0;
      })
    : [];
}
function uy(n, o) {
  return cy(
    n
      .map((i) => {
        let s = o.routes[i.route.id];
        if (!s) return [];
        let u = [s.module];
        return s.imports && (u = u.concat(s.imports)), u;
      })
      .flat(1)
  );
}
function cy(n) {
  return [...new Set(n)];
}
function dy(n) {
  let o = {},
    i = Object.keys(n).sort();
  for (let s of i) o[s] = n[s];
  return o;
}
function fy(n, o) {
  let i = new Set();
  return (
    new Set(o),
    n.reduce((s, u) => {
      let c = JSON.stringify(dy(u));
      return i.has(c) || (i.add(c), s.push({ key: c, link: u })), s;
    }, [])
  );
}
function py(n) {
  let o =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    o.pathname === "/"
      ? (o.pathname = "_root.data")
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.data`),
    o
  );
}
function hy() {
  let n = v.useContext(Er);
  return (
    tu(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function my() {
  let n = v.useContext(ul);
  return (
    tu(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var nu = v.createContext(void 0);
nu.displayName = "FrameworkContext";
function mp() {
  let n = v.useContext(nu);
  return (
    tu(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function gy(n, o) {
  let i = v.useContext(nu),
    [s, u] = v.useState(!1),
    [c, f] = v.useState(!1),
    {
      onFocus: p,
      onBlur: y,
      onMouseEnter: g,
      onMouseLeave: w,
      onTouchStart: C,
    } = o,
    E = v.useRef(null);
  v.useEffect(() => {
    if ((n === "render" && f(!0), n === "viewport")) {
      let S = (P) => {
          P.forEach((L) => {
            f(L.isIntersecting);
          });
        },
        k = new IntersectionObserver(S, { threshold: 0.5 });
      return (
        E.current && k.observe(E.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [n]),
    v.useEffect(() => {
      if (s) {
        let S = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [s]);
  let T = () => {
      u(!0);
    },
    R = () => {
      u(!1), f(!1);
    };
  return i
    ? n !== "intent"
      ? [c, E, {}]
      : [
          c,
          E,
          {
            onFocus: mo(p, T),
            onBlur: mo(y, R),
            onMouseEnter: mo(g, T),
            onMouseLeave: mo(w, R),
            onTouchStart: mo(C, T),
          },
        ]
    : [!1, E, {}];
}
function mo(n, o) {
  return (i) => {
    n && n(i), i.defaultPrevented || o(i);
  };
}
function vy({ page: n, ...o }) {
  let { router: i } = hy(),
    s = v.useMemo(() => lp(i.routes, n, i.basename), [i.routes, n, i.basename]);
  return s ? v.createElement(wy, { page: n, matches: s, ...o }) : null;
}
function yy(n) {
  let { manifest: o, routeModules: i } = mp(),
    [s, u] = v.useState([]);
  return (
    v.useEffect(() => {
      let c = !1;
      return (
        ay(n, o, i).then((f) => {
          c || u(f);
        }),
        () => {
          c = !0;
        }
      );
    }, [n, o, i]),
    s
  );
}
function wy({ page: n, matches: o, ...i }) {
  let s = Rn(),
    { manifest: u, routeModules: c } = mp(),
    { loaderData: f, matches: p } = my(),
    y = v.useMemo(() => Nf(n, o, p, u, s, "data"), [n, o, p, u, s]),
    g = v.useMemo(() => Nf(n, o, p, u, s, "assets"), [n, o, p, u, s]),
    w = v.useMemo(() => {
      if (n === s.pathname + s.search + s.hash) return [];
      let T = new Set(),
        R = !1;
      if (
        (o.forEach((k) => {
          var L;
          let P = u.routes[k.route.id];
          !P ||
            !P.hasLoader ||
            ((!y.some((F) => F.route.id === k.route.id) &&
              k.route.id in f &&
              (L = c[k.route.id]) != null &&
              L.shouldRevalidate) ||
            P.hasClientLoader
              ? (R = !0)
              : T.add(k.route.id));
        }),
        T.size === 0)
      )
        return [];
      let S = py(n);
      return (
        R &&
          T.size > 0 &&
          S.searchParams.set(
            "_routes",
            o
              .filter((k) => T.has(k.route.id))
              .map((k) => k.route.id)
              .join(",")
          ),
        [S.pathname + S.search]
      );
    }, [f, s, u, y, o, n, c]),
    C = v.useMemo(() => uy(g, u), [g, u]),
    E = yy(g);
  return v.createElement(
    v.Fragment,
    null,
    w.map((T) =>
      v.createElement("link", {
        key: T,
        rel: "prefetch",
        as: "fetch",
        href: T,
        ...i,
      })
    ),
    C.map((T) =>
      v.createElement("link", { key: T, rel: "modulepreload", href: T, ...i })
    ),
    E.map(({ key: T, link: R }) => v.createElement("link", { key: T, ...R }))
  );
}
function xy(...n) {
  return (o) => {
    n.forEach((i) => {
      typeof i == "function" ? i(o) : i != null && (i.current = o);
    });
  };
}
var gp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  gp && (window.__reactRouterVersion = "7.1.3");
} catch {}
function Sy({ basename: n, children: o, window: i }) {
  let s = v.useRef();
  s.current == null && (s.current = uv({ window: i, v5Compat: !0 }));
  let u = s.current,
    [c, f] = v.useState({ action: u.action, location: u.location }),
    p = v.useCallback(
      (y) => {
        v.startTransition(() => f(y));
      },
      [f]
    );
  return (
    v.useLayoutEffect(() => u.listen(p), [u, p]),
    v.createElement(Yv, {
      basename: n,
      children: o,
      location: c.location,
      navigationType: c.action,
      navigator: u,
    })
  );
}
var vp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Bn = v.forwardRef(function (
    {
      onClick: o,
      discover: i = "render",
      prefetch: s = "none",
      relative: u,
      reloadDocument: c,
      replace: f,
      state: p,
      target: y,
      to: g,
      preventScrollReset: w,
      viewTransition: C,
      ...E
    },
    T
  ) {
    let { basename: R } = v.useContext(jt),
      S = typeof g == "string" && vp.test(g),
      k,
      P = !1;
    if (typeof g == "string" && S && ((k = g), gp))
      try {
        let se = new URL(window.location.href),
          ve = g.startsWith("//") ? new URL(se.protocol + g) : new URL(g),
          De = Cn(ve.pathname, R);
        ve.origin === se.origin && De != null
          ? (g = De + ve.search + ve.hash)
          : (P = !0);
      } catch {
        Tt(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let L = Dv(g, { relative: u }),
      [F, $, H] = gy(s, E),
      V = Ry(g, {
        replace: f,
        state: p,
        target: y,
        preventScrollReset: w,
        relative: u,
        viewTransition: C,
      });
    function Q(se) {
      o && o(se), se.defaultPrevented || V(se);
    }
    let ee = v.createElement("a", {
      ...E,
      ...H,
      href: k || L,
      onClick: P || c ? o : Q,
      ref: xy(T, $),
      target: y,
      "data-discover": !S && i === "render" ? "true" : void 0,
    });
    return F && !S
      ? v.createElement(v.Fragment, null, ee, v.createElement(vy, { page: L }))
      : ee;
  });
Bn.displayName = "Link";
var Ey = v.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: i = !1,
    className: s = "",
    end: u = !1,
    style: c,
    to: f,
    viewTransition: p,
    children: y,
    ...g
  },
  w
) {
  let C = bo(f, { relative: g.relative }),
    E = Rn(),
    T = v.useContext(ul),
    { navigator: R, basename: S } = v.useContext(jt),
    k = T != null && jy(C) && p === !0,
    P = R.encodeLocation ? R.encodeLocation(C).pathname : C.pathname,
    L = E.pathname,
    F =
      T && T.navigation && T.navigation.location
        ? T.navigation.location.pathname
        : null;
  i ||
    ((L = L.toLowerCase()),
    (F = F ? F.toLowerCase() : null),
    (P = P.toLowerCase())),
    F && S && (F = Cn(F, S) || F);
  const $ = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
  let H = L === P || (!u && L.startsWith(P) && L.charAt($) === "/"),
    V =
      F != null &&
      (F === P || (!u && F.startsWith(P) && F.charAt(P.length) === "/")),
    Q = { isActive: H, isPending: V, isTransitioning: k },
    ee = H ? o : void 0,
    se;
  typeof s == "function"
    ? (se = s(Q))
    : (se = [
        s,
        H ? "active" : null,
        V ? "pending" : null,
        k ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ve = typeof c == "function" ? c(Q) : c;
  return v.createElement(
    Bn,
    {
      ...g,
      "aria-current": ee,
      className: se,
      ref: w,
      style: ve,
      to: f,
      viewTransition: p,
    },
    typeof y == "function" ? y(Q) : y
  );
});
Ey.displayName = "NavLink";
var Cy = v.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: o,
      navigate: i,
      reloadDocument: s,
      replace: u,
      state: c,
      method: f = Qi,
      action: p,
      onSubmit: y,
      relative: g,
      preventScrollReset: w,
      viewTransition: C,
      ...E
    },
    T
  ) => {
    let R = Py(),
      S = Ty(p, { relative: g }),
      k = f.toLowerCase() === "get" ? "get" : "post",
      P = typeof p == "string" && vp.test(p),
      L = (F) => {
        if ((y && y(F), F.defaultPrevented)) return;
        F.preventDefault();
        let $ = F.nativeEvent.submitter,
          H = ($ == null ? void 0 : $.getAttribute("formmethod")) || f;
        R($ || F.currentTarget, {
          fetcherKey: o,
          method: H,
          navigate: i,
          replace: u,
          state: c,
          relative: g,
          preventScrollReset: w,
          viewTransition: C,
        });
      };
    return v.createElement("form", {
      ref: T,
      method: k,
      action: S,
      onSubmit: s ? y : L,
      ...E,
      "data-discover": !P && n === "render" ? "true" : void 0,
    });
  }
);
Cy.displayName = "Form";
function ky(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yp(n) {
  let o = v.useContext(Er);
  return Te(o, ky(n)), o;
}
function Ry(
  n,
  {
    target: o,
    replace: i,
    state: s,
    preventScrollReset: u,
    relative: c,
    viewTransition: f,
  } = {}
) {
  let p = cl(),
    y = Rn(),
    g = bo(n, { relative: c });
  return v.useCallback(
    (w) => {
      if (ny(w, o)) {
        w.preventDefault();
        let C = i !== void 0 ? i : Co(y) === Co(g);
        p(n, {
          replace: C,
          state: s,
          preventScrollReset: u,
          relative: c,
          viewTransition: f,
        });
      }
    },
    [y, p, g, i, s, o, n, u, c, f]
  );
}
var Ny = 0,
  by = () => `__${String(++Ny)}__`;
function Py() {
  let { router: n } = yp("useSubmit"),
    { basename: o } = v.useContext(jt),
    i = Kv();
  return v.useCallback(
    async (s, u = {}) => {
      let { action: c, method: f, encType: p, formData: y, body: g } = iy(s, o);
      if (u.navigate === !1) {
        let w = u.fetcherKey || by();
        await n.fetch(w, i, u.action || c, {
          preventScrollReset: u.preventScrollReset,
          formData: y,
          body: g,
          formMethod: u.method || f,
          formEncType: u.encType || p,
          flushSync: u.flushSync,
        });
      } else
        await n.navigate(u.action || c, {
          preventScrollReset: u.preventScrollReset,
          formData: y,
          body: g,
          formMethod: u.method || f,
          formEncType: u.encType || p,
          replace: u.replace,
          state: u.state,
          fromRouteId: i,
          flushSync: u.flushSync,
          viewTransition: u.viewTransition,
        });
    },
    [n, o, i]
  );
}
function Ty(n, { relative: o } = {}) {
  let { basename: i } = v.useContext(jt),
    s = v.useContext(Ut);
  Te(s, "useFormAction must be used inside a RouteContext");
  let [u] = s.matches.slice(-1),
    c = { ...bo(n || ".", { relative: o }) },
    f = Rn();
  if (n == null) {
    c.search = f.search;
    let p = new URLSearchParams(c.search),
      y = p.getAll("index");
    if (y.some((w) => w === "")) {
      p.delete("index"),
        y.filter((C) => C).forEach((C) => p.append("index", C));
      let w = p.toString();
      c.search = w ? `?${w}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      u.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (c.pathname = c.pathname === "/" ? i : Jt([i, c.pathname])),
    Co(c)
  );
}
function jy(n, o = {}) {
  let i = v.useContext(cp);
  Te(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = yp("useViewTransitionState"),
    u = bo(n, { relative: o.relative });
  if (!i.isTransitioning) return !1;
  let c = Cn(i.currentLocation.pathname, s) || i.currentLocation.pathname,
    f = Cn(i.nextLocation.pathname, s) || i.nextLocation.pathname;
  return ol(u.pathname, f) != null || ol(u.pathname, c) != null;
}
new TextEncoder();
var wp = ip();
const _y = op(wp);
function Oy(n, o) {
  typeof n == "function" ? n(o) : n != null && (n.current = o);
}
function Ly(...n) {
  return (o) => n.forEach((i) => Oy(i, o));
}
var xp = v.forwardRef((n, o) => {
  const { children: i, ...s } = n,
    u = v.Children.toArray(i),
    c = u.find(Dy);
  if (c) {
    const f = c.props.children,
      p = u.map((y) =>
        y === c
          ? v.Children.count(f) > 1
            ? v.Children.only(null)
            : v.isValidElement(f)
            ? f.props.children
            : null
          : y
      );
    return m.jsx(Fa, {
      ...s,
      ref: o,
      children: v.isValidElement(f) ? v.cloneElement(f, void 0, p) : null,
    });
  }
  return m.jsx(Fa, { ...s, ref: o, children: i });
});
xp.displayName = "Slot";
var Fa = v.forwardRef((n, o) => {
  const { children: i, ...s } = n;
  if (v.isValidElement(i)) {
    const u = Fy(i);
    return v.cloneElement(i, { ...Iy(s, i.props), ref: o ? Ly(o, u) : u });
  }
  return v.Children.count(i) > 1 ? v.Children.only(null) : null;
});
Fa.displayName = "SlotClone";
var Ay = ({ children: n }) => m.jsx(m.Fragment, { children: n });
function Dy(n) {
  return v.isValidElement(n) && n.type === Ay;
}
function Iy(n, o) {
  const i = { ...o };
  for (const s in o) {
    const u = n[s],
      c = o[s];
    /^on[A-Z]/.test(s)
      ? u && c
        ? (i[s] = (...p) => {
            c(...p), u(...p);
          })
        : u && (i[s] = u)
      : s === "style"
      ? (i[s] = { ...u, ...c })
      : s === "className" && (i[s] = [u, c].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function Fy(n) {
  var s, u;
  let o =
      (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
        ? void 0
        : s.get,
    i = o && "isReactWarning" in o && o.isReactWarning;
  return i
    ? n.ref
    : ((o =
        (u = Object.getOwnPropertyDescriptor(n, "ref")) == null
          ? void 0
          : u.get),
      (i = o && "isReactWarning" in o && o.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
function Sp(n) {
  var o,
    i,
    s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var u = n.length;
      for (o = 0; o < u; o++)
        n[o] && (i = Sp(n[o])) && (s && (s += " "), (s += i));
    } else for (i in n) n[i] && (s && (s += " "), (s += i));
  return s;
}
function Ep() {
  for (var n, o, i = 0, s = "", u = arguments.length; i < u; i++)
    (n = arguments[i]) && (o = Sp(n)) && (s && (s += " "), (s += o));
  return s;
}
const bf = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  Pf = Ep,
  My = (n, o) => (i) => {
    var s;
    if ((o == null ? void 0 : o.variants) == null)
      return Pf(
        n,
        i == null ? void 0 : i.class,
        i == null ? void 0 : i.className
      );
    const { variants: u, defaultVariants: c } = o,
      f = Object.keys(u).map((g) => {
        const w = i == null ? void 0 : i[g],
          C = c == null ? void 0 : c[g];
        if (w === null) return null;
        const E = bf(w) || bf(C);
        return u[g][E];
      }),
      p =
        i &&
        Object.entries(i).reduce((g, w) => {
          let [C, E] = w;
          return E === void 0 || (g[C] = E), g;
        }, {}),
      y =
        o == null || (s = o.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((g, w) => {
              let { class: C, className: E, ...T } = w;
              return Object.entries(T).every((R) => {
                let [S, k] = R;
                return Array.isArray(k)
                  ? k.includes({ ...c, ...p }[S])
                  : { ...c, ...p }[S] === k;
              })
                ? [...g, C, E]
                : g;
            }, []);
    return Pf(
      n,
      f,
      y,
      i == null ? void 0 : i.class,
      i == null ? void 0 : i.className
    );
  },
  ru = "-",
  zy = (n) => {
    const o = Uy(n),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: s } = n;
    return {
      getClassGroupId: (f) => {
        const p = f.split(ru);
        return p[0] === "" && p.length !== 1 && p.shift(), Cp(p, o) || By(f);
      },
      getConflictingClassGroupIds: (f, p) => {
        const y = i[f] || [];
        return p && s[f] ? [...y, ...s[f]] : y;
      },
    };
  },
  Cp = (n, o) => {
    var f;
    if (n.length === 0) return o.classGroupId;
    const i = n[0],
      s = o.nextPart.get(i),
      u = s ? Cp(n.slice(1), s) : void 0;
    if (u) return u;
    if (o.validators.length === 0) return;
    const c = n.join(ru);
    return (f = o.validators.find(({ validator: p }) => p(c))) == null
      ? void 0
      : f.classGroupId;
  },
  Tf = /^\[(.+)\]$/,
  By = (n) => {
    if (Tf.test(n)) {
      const o = Tf.exec(n)[1],
        i = o == null ? void 0 : o.substring(0, o.indexOf(":"));
      if (i) return "arbitrary.." + i;
    }
  },
  Uy = (n) => {
    const { theme: o, prefix: i } = n,
      s = { nextPart: new Map(), validators: [] };
    return (
      Wy(Object.entries(n.classGroups), i).forEach(([c, f]) => {
        Ma(f, s, c, o);
      }),
      s
    );
  },
  Ma = (n, o, i, s) => {
    n.forEach((u) => {
      if (typeof u == "string") {
        const c = u === "" ? o : jf(o, u);
        c.classGroupId = i;
        return;
      }
      if (typeof u == "function") {
        if ($y(u)) {
          Ma(u(s), o, i, s);
          return;
        }
        o.validators.push({ validator: u, classGroupId: i });
        return;
      }
      Object.entries(u).forEach(([c, f]) => {
        Ma(f, jf(o, c), i, s);
      });
    });
  },
  jf = (n, o) => {
    let i = n;
    return (
      o.split(ru).forEach((s) => {
        i.nextPart.has(s) ||
          i.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(s));
      }),
      i
    );
  },
  $y = (n) => n.isThemeGetter,
  Wy = (n, o) =>
    o
      ? n.map(([i, s]) => {
          const u = s.map((c) =>
            typeof c == "string"
              ? o + c
              : typeof c == "object"
              ? Object.fromEntries(
                  Object.entries(c).map(([f, p]) => [o + f, p])
                )
              : c
          );
          return [i, u];
        })
      : n,
  Vy = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      i = new Map(),
      s = new Map();
    const u = (c, f) => {
      i.set(c, f), o++, o > n && ((o = 0), (s = i), (i = new Map()));
    };
    return {
      get(c) {
        let f = i.get(c);
        if (f !== void 0) return f;
        if ((f = s.get(c)) !== void 0) return u(c, f), f;
      },
      set(c, f) {
        i.has(c) ? i.set(c, f) : u(c, f);
      },
    };
  },
  kp = "!",
  Hy = (n) => {
    const { separator: o, experimentalParseClassName: i } = n,
      s = o.length === 1,
      u = o[0],
      c = o.length,
      f = (p) => {
        const y = [];
        let g = 0,
          w = 0,
          C;
        for (let k = 0; k < p.length; k++) {
          let P = p[k];
          if (g === 0) {
            if (P === u && (s || p.slice(k, k + c) === o)) {
              y.push(p.slice(w, k)), (w = k + c);
              continue;
            }
            if (P === "/") {
              C = k;
              continue;
            }
          }
          P === "[" ? g++ : P === "]" && g--;
        }
        const E = y.length === 0 ? p : p.substring(w),
          T = E.startsWith(kp),
          R = T ? E.substring(1) : E,
          S = C && C > w ? C - w : void 0;
        return {
          modifiers: y,
          hasImportantModifier: T,
          baseClassName: R,
          maybePostfixModifierPosition: S,
        };
      };
    return i ? (p) => i({ className: p, parseClassName: f }) : f;
  },
  Ky = (n) => {
    if (n.length <= 1) return n;
    const o = [];
    let i = [];
    return (
      n.forEach((s) => {
        s[0] === "[" ? (o.push(...i.sort(), s), (i = [])) : i.push(s);
      }),
      o.push(...i.sort()),
      o
    );
  },
  Gy = (n) => ({ cache: Vy(n.cacheSize), parseClassName: Hy(n), ...zy(n) }),
  Qy = /\s+/,
  qy = (n, o) => {
    const {
        parseClassName: i,
        getClassGroupId: s,
        getConflictingClassGroupIds: u,
      } = o,
      c = [],
      f = n.trim().split(Qy);
    let p = "";
    for (let y = f.length - 1; y >= 0; y -= 1) {
      const g = f[y],
        {
          modifiers: w,
          hasImportantModifier: C,
          baseClassName: E,
          maybePostfixModifierPosition: T,
        } = i(g);
      let R = !!T,
        S = s(R ? E.substring(0, T) : E);
      if (!S) {
        if (!R) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((S = s(E)), !S)) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        R = !1;
      }
      const k = Ky(w).join(":"),
        P = C ? k + kp : k,
        L = P + S;
      if (c.includes(L)) continue;
      c.push(L);
      const F = u(S, R);
      for (let $ = 0; $ < F.length; ++$) {
        const H = F[$];
        c.push(P + H);
      }
      p = g + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function Yy() {
  let n = 0,
    o,
    i,
    s = "";
  for (; n < arguments.length; )
    (o = arguments[n++]) && (i = Rp(o)) && (s && (s += " "), (s += i));
  return s;
}
const Rp = (n) => {
  if (typeof n == "string") return n;
  let o,
    i = "";
  for (let s = 0; s < n.length; s++)
    n[s] && (o = Rp(n[s])) && (i && (i += " "), (i += o));
  return i;
};
function Xy(n, ...o) {
  let i,
    s,
    u,
    c = f;
  function f(y) {
    const g = o.reduce((w, C) => C(w), n());
    return (i = Gy(g)), (s = i.cache.get), (u = i.cache.set), (c = p), p(y);
  }
  function p(y) {
    const g = s(y);
    if (g) return g;
    const w = qy(y, i);
    return u(y, w), w;
  }
  return function () {
    return c(Yy.apply(null, arguments));
  };
}
const Ne = (n) => {
    const o = (i) => i[n] || [];
    return (o.isThemeGetter = !0), o;
  },
  Np = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Jy = /^\d+\/\d+$/,
  Zy = new Set(["px", "full", "screen"]),
  e0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  t0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  n0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  r0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  o0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Yt = (n) => wr(n) || Zy.has(n) || Jy.test(n),
  wn = (n) => kr(n, "length", f0),
  wr = (n) => !!n && !Number.isNaN(Number(n)),
  Sa = (n) => kr(n, "number", wr),
  go = (n) => !!n && Number.isInteger(Number(n)),
  i0 = (n) => n.endsWith("%") && wr(n.slice(0, -1)),
  le = (n) => Np.test(n),
  xn = (n) => e0.test(n),
  l0 = new Set(["length", "size", "percentage"]),
  s0 = (n) => kr(n, l0, bp),
  a0 = (n) => kr(n, "position", bp),
  u0 = new Set(["image", "url"]),
  c0 = (n) => kr(n, u0, h0),
  d0 = (n) => kr(n, "", p0),
  vo = () => !0,
  kr = (n, o, i) => {
    const s = Np.exec(n);
    return s
      ? s[1]
        ? typeof o == "string"
          ? s[1] === o
          : o.has(s[1])
        : i(s[2])
      : !1;
  },
  f0 = (n) => t0.test(n) && !n0.test(n),
  bp = () => !1,
  p0 = (n) => r0.test(n),
  h0 = (n) => o0.test(n),
  m0 = () => {
    const n = Ne("colors"),
      o = Ne("spacing"),
      i = Ne("blur"),
      s = Ne("brightness"),
      u = Ne("borderColor"),
      c = Ne("borderRadius"),
      f = Ne("borderSpacing"),
      p = Ne("borderWidth"),
      y = Ne("contrast"),
      g = Ne("grayscale"),
      w = Ne("hueRotate"),
      C = Ne("invert"),
      E = Ne("gap"),
      T = Ne("gradientColorStops"),
      R = Ne("gradientColorStopPositions"),
      S = Ne("inset"),
      k = Ne("margin"),
      P = Ne("opacity"),
      L = Ne("padding"),
      F = Ne("saturate"),
      $ = Ne("scale"),
      H = Ne("sepia"),
      V = Ne("skew"),
      Q = Ne("space"),
      ee = Ne("translate"),
      se = () => ["auto", "contain", "none"],
      ve = () => ["auto", "hidden", "clip", "visible", "scroll"],
      De = () => ["auto", le, o],
      ae = () => [le, o],
      I = () => ["", Yt, wn],
      Fe = () => ["auto", wr, le],
      Je = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      xe = () => ["solid", "dashed", "dotted", "double", "none"],
      Ce = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      K = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      te = () => ["", "0", le],
      q = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      j = () => [wr, le];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [vo],
        spacing: [Yt, wn],
        blur: ["none", "", xn, le],
        brightness: j(),
        borderColor: [n],
        borderRadius: ["none", "", "full", xn, le],
        borderSpacing: ae(),
        borderWidth: I(),
        contrast: j(),
        grayscale: te(),
        hueRotate: j(),
        invert: te(),
        gap: ae(),
        gradientColorStops: [n],
        gradientColorStopPositions: [i0, wn],
        inset: De(),
        margin: De(),
        opacity: j(),
        padding: ae(),
        saturate: j(),
        scale: j(),
        sepia: te(),
        skew: j(),
        space: ae(),
        translate: ae(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", le] }],
        container: ["container"],
        columns: [{ columns: [xn] }],
        "break-after": [{ "break-after": q() }],
        "break-before": [{ "break-before": q() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Je(), le] }],
        overflow: [{ overflow: ve() }],
        "overflow-x": [{ "overflow-x": ve() }],
        "overflow-y": [{ "overflow-y": ve() }],
        overscroll: [{ overscroll: se() }],
        "overscroll-x": [{ "overscroll-x": se() }],
        "overscroll-y": [{ "overscroll-y": se() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [S] }],
        "inset-x": [{ "inset-x": [S] }],
        "inset-y": [{ "inset-y": [S] }],
        start: [{ start: [S] }],
        end: [{ end: [S] }],
        top: [{ top: [S] }],
        right: [{ right: [S] }],
        bottom: [{ bottom: [S] }],
        left: [{ left: [S] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", go, le] }],
        basis: [{ basis: De() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", le] }],
        grow: [{ grow: te() }],
        shrink: [{ shrink: te() }],
        order: [{ order: ["first", "last", "none", go, le] }],
        "grid-cols": [{ "grid-cols": [vo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", go, le] }, le] }],
        "col-start": [{ "col-start": Fe() }],
        "col-end": [{ "col-end": Fe() }],
        "grid-rows": [{ "grid-rows": [vo] }],
        "row-start-end": [{ row: ["auto", { span: [go, le] }, le] }],
        "row-start": [{ "row-start": Fe() }],
        "row-end": [{ "row-end": Fe() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", le] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", le] }],
        gap: [{ gap: [E] }],
        "gap-x": [{ "gap-x": [E] }],
        "gap-y": [{ "gap-y": [E] }],
        "justify-content": [{ justify: ["normal", ...K()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...K(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...K(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [L] }],
        px: [{ px: [L] }],
        py: [{ py: [L] }],
        ps: [{ ps: [L] }],
        pe: [{ pe: [L] }],
        pt: [{ pt: [L] }],
        pr: [{ pr: [L] }],
        pb: [{ pb: [L] }],
        pl: [{ pl: [L] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [Q] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [Q] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, o] }],
        "min-w": [{ "min-w": [le, o, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              le,
              o,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [xn] },
              xn,
            ],
          },
        ],
        h: [{ h: [le, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [le, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [le, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [le, o, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", xn, wn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Sa,
            ],
          },
        ],
        "font-family": [{ font: [vo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              le,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", wr, Sa] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Yt,
              le,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", le] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", le] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [P] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [P] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...xe(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Yt, wn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Yt, le] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: ae() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              le,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", le] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [P] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Je(), a0] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", s0] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              c0,
            ],
          },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [R] }],
        "gradient-via-pos": [{ via: [R] }],
        "gradient-to-pos": [{ to: [R] }],
        "gradient-from": [{ from: [T] }],
        "gradient-via": [{ via: [T] }],
        "gradient-to": [{ to: [T] }],
        rounded: [{ rounded: [c] }],
        "rounded-s": [{ "rounded-s": [c] }],
        "rounded-e": [{ "rounded-e": [c] }],
        "rounded-t": [{ "rounded-t": [c] }],
        "rounded-r": [{ "rounded-r": [c] }],
        "rounded-b": [{ "rounded-b": [c] }],
        "rounded-l": [{ "rounded-l": [c] }],
        "rounded-ss": [{ "rounded-ss": [c] }],
        "rounded-se": [{ "rounded-se": [c] }],
        "rounded-ee": [{ "rounded-ee": [c] }],
        "rounded-es": [{ "rounded-es": [c] }],
        "rounded-tl": [{ "rounded-tl": [c] }],
        "rounded-tr": [{ "rounded-tr": [c] }],
        "rounded-br": [{ "rounded-br": [c] }],
        "rounded-bl": [{ "rounded-bl": [c] }],
        "border-w": [{ border: [p] }],
        "border-w-x": [{ "border-x": [p] }],
        "border-w-y": [{ "border-y": [p] }],
        "border-w-s": [{ "border-s": [p] }],
        "border-w-e": [{ "border-e": [p] }],
        "border-w-t": [{ "border-t": [p] }],
        "border-w-r": [{ "border-r": [p] }],
        "border-w-b": [{ "border-b": [p] }],
        "border-w-l": [{ "border-l": [p] }],
        "border-opacity": [{ "border-opacity": [P] }],
        "border-style": [{ border: [...xe(), "hidden"] }],
        "divide-x": [{ "divide-x": [p] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [p] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [P] }],
        "divide-style": [{ divide: xe() }],
        "border-color": [{ border: [u] }],
        "border-color-x": [{ "border-x": [u] }],
        "border-color-y": [{ "border-y": [u] }],
        "border-color-s": [{ "border-s": [u] }],
        "border-color-e": [{ "border-e": [u] }],
        "border-color-t": [{ "border-t": [u] }],
        "border-color-r": [{ "border-r": [u] }],
        "border-color-b": [{ "border-b": [u] }],
        "border-color-l": [{ "border-l": [u] }],
        "divide-color": [{ divide: [u] }],
        "outline-style": [{ outline: ["", ...xe()] }],
        "outline-offset": [{ "outline-offset": [Yt, le] }],
        "outline-w": [{ outline: [Yt, wn] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: I() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [P] }],
        "ring-offset-w": [{ "ring-offset": [Yt, wn] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", xn, d0] }],
        "shadow-color": [{ shadow: [vo] }],
        opacity: [{ opacity: [P] }],
        "mix-blend": [
          { "mix-blend": [...Ce(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": Ce() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [i] }],
        brightness: [{ brightness: [s] }],
        contrast: [{ contrast: [y] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", xn, le] }],
        grayscale: [{ grayscale: [g] }],
        "hue-rotate": [{ "hue-rotate": [w] }],
        invert: [{ invert: [C] }],
        saturate: [{ saturate: [F] }],
        sepia: [{ sepia: [H] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [i] }],
        "backdrop-brightness": [{ "backdrop-brightness": [s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [y] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [g] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [w] }],
        "backdrop-invert": [{ "backdrop-invert": [C] }],
        "backdrop-opacity": [{ "backdrop-opacity": [P] }],
        "backdrop-saturate": [{ "backdrop-saturate": [F] }],
        "backdrop-sepia": [{ "backdrop-sepia": [H] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [f] }],
        "border-spacing-x": [{ "border-spacing-x": [f] }],
        "border-spacing-y": [{ "border-spacing-y": [f] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              le,
            ],
          },
        ],
        duration: [{ duration: j() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", le] }],
        delay: [{ delay: j() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", le] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [$] }],
        "scale-x": [{ "scale-x": [$] }],
        "scale-y": [{ "scale-y": [$] }],
        rotate: [{ rotate: [go, le] }],
        "translate-x": [{ "translate-x": [ee] }],
        "translate-y": [{ "translate-y": [ee] }],
        "skew-x": [{ "skew-x": [V] }],
        "skew-y": [{ "skew-y": [V] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              le,
            ],
          },
        ],
        accent: [{ accent: ["auto", n] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              le,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": ae() }],
        "scroll-mx": [{ "scroll-mx": ae() }],
        "scroll-my": [{ "scroll-my": ae() }],
        "scroll-ms": [{ "scroll-ms": ae() }],
        "scroll-me": [{ "scroll-me": ae() }],
        "scroll-mt": [{ "scroll-mt": ae() }],
        "scroll-mr": [{ "scroll-mr": ae() }],
        "scroll-mb": [{ "scroll-mb": ae() }],
        "scroll-ml": [{ "scroll-ml": ae() }],
        "scroll-p": [{ "scroll-p": ae() }],
        "scroll-px": [{ "scroll-px": ae() }],
        "scroll-py": [{ "scroll-py": ae() }],
        "scroll-ps": [{ "scroll-ps": ae() }],
        "scroll-pe": [{ "scroll-pe": ae() }],
        "scroll-pt": [{ "scroll-pt": ae() }],
        "scroll-pr": [{ "scroll-pr": ae() }],
        "scroll-pb": [{ "scroll-pb": ae() }],
        "scroll-pl": [{ "scroll-pl": ae() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", le] },
        ],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [Yt, wn, Sa] }],
        stroke: [{ stroke: [n, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  g0 = Xy(m0);
function Xe(...n) {
  return g0(Ep(n));
}
const v0 = My(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Xt = v.forwardRef(
    ({ className: n, variant: o, size: i, asChild: s = !1, ...u }, c) => {
      const f = s ? xp : "button";
      return m.jsx(f, {
        className: Xe(v0({ variant: o, size: i, className: n })),
        ref: c,
        ...u,
      });
    }
  );
Xt.displayName = "Button";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y0 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Pp = (...n) =>
    n
      .filter((o, i, s) => !!o && o.trim() !== "" && s.indexOf(o) === i)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var w0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x0 = v.forwardRef(
  (
    {
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: u = "",
      children: c,
      iconNode: f,
      ...p
    },
    y
  ) =>
    v.createElement(
      "svg",
      {
        ref: y,
        ...w0,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: s ? (Number(i) * 24) / Number(o) : i,
        className: Pp("lucide", u),
        ...p,
      },
      [
        ...f.map(([g, w]) => v.createElement(g, w)),
        ...(Array.isArray(c) ? c : [c]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ou = (n, o) => {
  const i = v.forwardRef(({ className: s, ...u }, c) =>
    v.createElement(x0, {
      ref: c,
      iconNode: o,
      className: Pp(`lucide-${y0(n)}`, s),
      ...u,
    })
  );
  return (i.displayName = `${n}`), i;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S0 = ou("AlignJustify", [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E0 = ou("CirclePlus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C0 = ou("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  k0 = () => {
    const [n, o] = v.useState(!1);
    return m.jsxs("header", {
      className:
        "w-full p-4 bg-gray-900 text-white flex justify-between items-center border-b border-gray-700",
      children: [
        m.jsxs("section", {
          className: "flex justify-between items-center w-full p-4",
          children: [
            m.jsxs("h1", {
              className: "text-4xl font-extrabold tracking-wider text-white",
              children: [
                "📚 Book",
                m.jsx("span", {
                  className: "text-teal-400",
                  children: "Sphere",
                }),
              ],
            }),
            m.jsx(S0, {
              className:
                "text-white hover:text-teal-400 cursor-pointer transition-all md:hidden",
              onClick: () => o(!n),
              size: 32,
            }),
          ],
        }),
        n &&
          m.jsxs("nav", {
            className:
              "absolute top-40 right-12 z-50 md:hidden p-5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-600 shadow-2xl",
            children: [
              m.jsx("div", {
                className:
                  "absolute top-0 left-0 w-4 h-full bg-gray-500 rounded-l-lg",
              }),
              m.jsxs("ul", {
                className: "flex flex-col items-center gap-4 p-6",
                children: [
                  m.jsx("li", {
                    children: m.jsx("a", {
                      href: "#features",
                      className:
                        "text-lg font-semibold hover:text-teal-400 transition",
                      onClick: () => o(!1),
                      children: "Features",
                    }),
                  }),
                  m.jsx("li", {
                    children: m.jsx("a", {
                      href: "#books",
                      className:
                        "text-lg font-semibold hover:text-teal-400 transition",
                      onClick: () => o(!1),
                      children: "Books",
                    }),
                  }),
                  m.jsx("li", {
                    children: m.jsx("a", {
                      href: "#contact",
                      className:
                        "text-lg font-semibold hover:text-teal-400 transition",
                      onClick: () => o(!1),
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            ],
          }),
        m.jsx("nav", {
          className: "hidden md:flex",
          children: m.jsxs("ul", {
            className: "flex gap-6",
            children: [
              m.jsx("li", {
                children: m.jsx("a", {
                  href: "#features",
                  className: "hover:text-teal-400 transition",
                  children: "Features",
                }),
              }),
              m.jsx("li", {
                children: m.jsx("a", {
                  href: "#books",
                  className: "hover:text-teal-400 transition",
                  children: "Books",
                }),
              }),
              m.jsx("li", {
                children: m.jsx("a", {
                  href: "#contact",
                  className: "hover:text-teal-400 transition",
                  children: "Contact",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  R0 = () => {
    const n = cl();
    return m.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-4",
      children: [
        m.jsx(k0, {}),
        m.jsxs("section", {
          className: "w-full py-20 px-6 text-center",
          children: [
            m.jsx("h2", {
              className:
                "text-5xl font-extrabold tracking-wider leading-tight text-teal-400",
              children: "Welcome to the World of Endless Knowledge",
            }),
            m.jsx("p", {
              className: "mt-6 text-lg text-gray-300",
              children:
                "Dive into our curated collection of books and explore infinite possibilities.",
            }),
            m.jsx("div", {
              className: "mt-10",
              children: m.jsx(Xt, {
                onClick: () => n("/books"),
                className:
                  "px-10 py-4 bg-teal-400 text-gray-900 font-semibold text-lg rounded-full shadow-lg hover:bg-teal-300 transition-all",
                children: "Start Exploring",
              }),
            }),
          ],
        }),
        m.jsxs("section", {
          id: "books",
          className: "w-full py-20 px-6 flex flex-wrap justify-center gap-8",
          children: [
            m.jsxs("div", {
              className:
                "relative w-40 h-60 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-lg shadow-2xl hover:scale-105 transition-all",
              children: [
                m.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-4 h-full bg-indigo-700 rounded-l-lg",
                }),
                m.jsx("h3", {
                  className:
                    "absolute bottom-6 left-6 text-lg font-semibold text-gray-100",
                  children: "Fictional Tales",
                }),
              ],
            }),
            m.jsxs("div", {
              className:
                "relative w-40 h-60 bg-gradient-to-br from-pink-600 to-pink-400 rounded-lg shadow-2xl hover:scale-105 transition-all",
              children: [
                m.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-4 h-full bg-pink-700 rounded-l-lg",
                }),
                m.jsx("h3", {
                  className:
                    "absolute bottom-6 left-6 text-lg font-semibold text-gray-100",
                  children: "Mystery & Thriller",
                }),
              ],
            }),
            m.jsxs("div", {
              className:
                "relative w-40 h-60 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-lg shadow-2xl hover:scale-105 transition-all",
              children: [
                m.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-4 h-full bg-emerald-700 rounded-l-lg",
                }),
                m.jsx("h3", {
                  className:
                    "absolute bottom-6 left-6 text-lg font-semibold text-gray-100",
                  children: "Romance Reads",
                }),
              ],
            }),
            m.jsxs("div", {
              className:
                "relative w-40 h-60 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg shadow-2xl hover:scale-105 transition-all",
              children: [
                m.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-4 h-full bg-orange-700 rounded-l-lg",
                }),
                m.jsx("h3", {
                  className:
                    "absolute bottom-6 left-6 text-lg font-semibold text-gray-100",
                  children: "Self-Help",
                }),
              ],
            }),
            m.jsxs("div", {
              className:
                "relative w-40 h-60 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-lg shadow-2xl hover:scale-105 transition-all",
              children: [
                m.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-4 h-full bg-cyan-700 rounded-l-lg",
                }),
                m.jsx("h3", {
                  className:
                    "absolute bottom-6 left-6 text-lg font-semibold text-gray-100",
                  children: "Sci-Fi Adventures",
                }),
              ],
            }),
          ],
        }),
        m.jsxs("section", {
          className:
            "w-full bg-teal-400 py-16 px-6 text-center rounded-tl-[100px]",
          children: [
            m.jsx("h3", {
              className: "text-4xl font-bold text-gray-900",
              children: "Join Our Book Lovers' Community",
            }),
            m.jsx("p", {
              className: "mt-4 text-lg text-gray-800",
              children:
                "Get exclusive deals, access to rare titles, and so much more!",
            }),
            m.jsx("div", {
              className: "mt-8",
              children: m.jsx(Xt, {
                onClick: () => n("/register"),
                className:
                  "px-10 py-4 bg-gray-900 text-teal-400 text-lg font-semibold rounded-full shadow-md hover:bg-gray-800 transition-all",
                children: "Become a Member",
              }),
            }),
          ],
        }),
        m.jsx("footer", {
          className: "w-full bg-gray-800 py-8",
          children: m.jsx("div", {
            className: "max-w-7xl mx-auto text-center",
            children: m.jsxs("p", {
              className: "text-gray-500",
              children: [
                "© ",
                new Date().getFullYear(),
                " BookSphere. All Rights Reserved.",
              ],
            }),
          }),
        }),
      ],
    });
  };
function Tp(n, o) {
  return function () {
    return n.apply(o, arguments);
  };
}
const { toString: N0 } = Object.prototype,
  { getPrototypeOf: iu } = Object,
  fl = ((n) => (o) => {
    const i = N0.call(o);
    return n[i] || (n[i] = i.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _t = (n) => ((n = n.toLowerCase()), (o) => fl(o) === n),
  pl = (n) => (o) => typeof o === n,
  { isArray: Rr } = Array,
  ko = pl("undefined");
function b0(n) {
  return (
    n !== null &&
    !ko(n) &&
    n.constructor !== null &&
    !ko(n.constructor) &&
    mt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const jp = _t("ArrayBuffer");
function P0(n) {
  let o;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (o = ArrayBuffer.isView(n))
      : (o = n && n.buffer && jp(n.buffer)),
    o
  );
}
const T0 = pl("string"),
  mt = pl("function"),
  _p = pl("number"),
  hl = (n) => n !== null && typeof n == "object",
  j0 = (n) => n === !0 || n === !1,
  Yi = (n) => {
    if (fl(n) !== "object") return !1;
    const o = iu(n);
    return (
      (o === null ||
        o === Object.prototype ||
        Object.getPrototypeOf(o) === null) &&
      !(Symbol.toStringTag in n) &&
      !(Symbol.iterator in n)
    );
  },
  _0 = _t("Date"),
  O0 = _t("File"),
  L0 = _t("Blob"),
  A0 = _t("FileList"),
  D0 = (n) => hl(n) && mt(n.pipe),
  I0 = (n) => {
    let o;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (mt(n.append) &&
          ((o = fl(n)) === "formdata" ||
            (o === "object" &&
              mt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  F0 = _t("URLSearchParams"),
  [M0, z0, B0, U0] = ["ReadableStream", "Request", "Response", "Headers"].map(
    _t
  ),
  $0 = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Po(n, o, { allOwnKeys: i = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let s, u;
  if ((typeof n != "object" && (n = [n]), Rr(n)))
    for (s = 0, u = n.length; s < u; s++) o.call(null, n[s], s, n);
  else {
    const c = i ? Object.getOwnPropertyNames(n) : Object.keys(n),
      f = c.length;
    let p;
    for (s = 0; s < f; s++) (p = c[s]), o.call(null, n[p], p, n);
  }
}
function Op(n, o) {
  o = o.toLowerCase();
  const i = Object.keys(n);
  let s = i.length,
    u;
  for (; s-- > 0; ) if (((u = i[s]), o === u.toLowerCase())) return u;
  return null;
}
const Un =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Lp = (n) => !ko(n) && n !== Un;
function za() {
  const { caseless: n } = (Lp(this) && this) || {},
    o = {},
    i = (s, u) => {
      const c = (n && Op(o, u)) || u;
      Yi(o[c]) && Yi(s)
        ? (o[c] = za(o[c], s))
        : Yi(s)
        ? (o[c] = za({}, s))
        : Rr(s)
        ? (o[c] = s.slice())
        : (o[c] = s);
    };
  for (let s = 0, u = arguments.length; s < u; s++)
    arguments[s] && Po(arguments[s], i);
  return o;
}
const W0 = (n, o, i, { allOwnKeys: s } = {}) => (
    Po(
      o,
      (u, c) => {
        i && mt(u) ? (n[c] = Tp(u, i)) : (n[c] = u);
      },
      { allOwnKeys: s }
    ),
    n
  ),
  V0 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  H0 = (n, o, i, s) => {
    (n.prototype = Object.create(o.prototype, s)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: o.prototype }),
      i && Object.assign(n.prototype, i);
  },
  K0 = (n, o, i, s) => {
    let u, c, f;
    const p = {};
    if (((o = o || {}), n == null)) return o;
    do {
      for (u = Object.getOwnPropertyNames(n), c = u.length; c-- > 0; )
        (f = u[c]), (!s || s(f, n, o)) && !p[f] && ((o[f] = n[f]), (p[f] = !0));
      n = i !== !1 && iu(n);
    } while (n && (!i || i(n, o)) && n !== Object.prototype);
    return o;
  },
  G0 = (n, o, i) => {
    (n = String(n)),
      (i === void 0 || i > n.length) && (i = n.length),
      (i -= o.length);
    const s = n.indexOf(o, i);
    return s !== -1 && s === i;
  },
  Q0 = (n) => {
    if (!n) return null;
    if (Rr(n)) return n;
    let o = n.length;
    if (!_p(o)) return null;
    const i = new Array(o);
    for (; o-- > 0; ) i[o] = n[o];
    return i;
  },
  q0 = (
    (n) => (o) =>
      n && o instanceof n
  )(typeof Uint8Array < "u" && iu(Uint8Array)),
  Y0 = (n, o) => {
    const s = (n && n[Symbol.iterator]).call(n);
    let u;
    for (; (u = s.next()) && !u.done; ) {
      const c = u.value;
      o.call(n, c[0], c[1]);
    }
  },
  X0 = (n, o) => {
    let i;
    const s = [];
    for (; (i = n.exec(o)) !== null; ) s.push(i);
    return s;
  },
  J0 = _t("HTMLFormElement"),
  Z0 = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, s, u) {
      return s.toUpperCase() + u;
    }),
  _f = (
    ({ hasOwnProperty: n }) =>
    (o, i) =>
      n.call(o, i)
  )(Object.prototype),
  ew = _t("RegExp"),
  Ap = (n, o) => {
    const i = Object.getOwnPropertyDescriptors(n),
      s = {};
    Po(i, (u, c) => {
      let f;
      (f = o(u, c, n)) !== !1 && (s[c] = f || u);
    }),
      Object.defineProperties(n, s);
  },
  tw = (n) => {
    Ap(n, (o, i) => {
      if (mt(n) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
        return !1;
      const s = n[i];
      if (mt(s)) {
        if (((o.enumerable = !1), "writable" in o)) {
          o.writable = !1;
          return;
        }
        o.set ||
          (o.set = () => {
            throw Error("Can not rewrite read-only method '" + i + "'");
          });
      }
    });
  },
  nw = (n, o) => {
    const i = {},
      s = (u) => {
        u.forEach((c) => {
          i[c] = !0;
        });
      };
    return Rr(n) ? s(n) : s(String(n).split(o)), i;
  },
  rw = () => {},
  ow = (n, o) => (n != null && Number.isFinite((n = +n)) ? n : o),
  Ea = "abcdefghijklmnopqrstuvwxyz",
  Of = "0123456789",
  Dp = { DIGIT: Of, ALPHA: Ea, ALPHA_DIGIT: Ea + Ea.toUpperCase() + Of },
  iw = (n = 16, o = Dp.ALPHA_DIGIT) => {
    let i = "";
    const { length: s } = o;
    for (; n--; ) i += o[(Math.random() * s) | 0];
    return i;
  };
function lw(n) {
  return !!(
    n &&
    mt(n.append) &&
    n[Symbol.toStringTag] === "FormData" &&
    n[Symbol.iterator]
  );
}
const sw = (n) => {
    const o = new Array(10),
      i = (s, u) => {
        if (hl(s)) {
          if (o.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            o[u] = s;
            const c = Rr(s) ? [] : {};
            return (
              Po(s, (f, p) => {
                const y = i(f, u + 1);
                !ko(y) && (c[p] = y);
              }),
              (o[u] = void 0),
              c
            );
          }
        }
        return s;
      };
    return i(n, 0);
  },
  aw = _t("AsyncFunction"),
  uw = (n) => n && (hl(n) || mt(n)) && mt(n.then) && mt(n.catch),
  Ip = ((n, o) =>
    n
      ? setImmediate
      : o
      ? ((i, s) => (
          Un.addEventListener(
            "message",
            ({ source: u, data: c }) => {
              u === Un && c === i && s.length && s.shift()();
            },
            !1
          ),
          (u) => {
            s.push(u), Un.postMessage(i, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (i) => setTimeout(i))(
    typeof setImmediate == "function",
    mt(Un.postMessage)
  ),
  cw =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Un)
      : (typeof process < "u" && process.nextTick) || Ip,
  D = {
    isArray: Rr,
    isArrayBuffer: jp,
    isBuffer: b0,
    isFormData: I0,
    isArrayBufferView: P0,
    isString: T0,
    isNumber: _p,
    isBoolean: j0,
    isObject: hl,
    isPlainObject: Yi,
    isReadableStream: M0,
    isRequest: z0,
    isResponse: B0,
    isHeaders: U0,
    isUndefined: ko,
    isDate: _0,
    isFile: O0,
    isBlob: L0,
    isRegExp: ew,
    isFunction: mt,
    isStream: D0,
    isURLSearchParams: F0,
    isTypedArray: q0,
    isFileList: A0,
    forEach: Po,
    merge: za,
    extend: W0,
    trim: $0,
    stripBOM: V0,
    inherits: H0,
    toFlatObject: K0,
    kindOf: fl,
    kindOfTest: _t,
    endsWith: G0,
    toArray: Q0,
    forEachEntry: Y0,
    matchAll: X0,
    isHTMLForm: J0,
    hasOwnProperty: _f,
    hasOwnProp: _f,
    reduceDescriptors: Ap,
    freezeMethods: tw,
    toObjectSet: nw,
    toCamelCase: Z0,
    noop: rw,
    toFiniteNumber: ow,
    findKey: Op,
    global: Un,
    isContextDefined: Lp,
    ALPHABET: Dp,
    generateString: iw,
    isSpecCompliantForm: lw,
    toJSONObject: sw,
    isAsyncFn: aw,
    isThenable: uw,
    setImmediate: Ip,
    asap: cw,
  };
function ie(n, o, i, s, u) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    o && (this.code = o),
    i && (this.config = i),
    s && (this.request = s),
    u && ((this.response = u), (this.status = u.status ? u.status : null));
}
D.inherits(ie, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: D.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Fp = ie.prototype,
  Mp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  Mp[n] = { value: n };
});
Object.defineProperties(ie, Mp);
Object.defineProperty(Fp, "isAxiosError", { value: !0 });
ie.from = (n, o, i, s, u, c) => {
  const f = Object.create(Fp);
  return (
    D.toFlatObject(
      n,
      f,
      function (y) {
        return y !== Error.prototype;
      },
      (p) => p !== "isAxiosError"
    ),
    ie.call(f, n.message, o, i, s, u),
    (f.cause = n),
    (f.name = n.name),
    c && Object.assign(f, c),
    f
  );
};
const dw = null;
function Ba(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function zp(n) {
  return D.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Lf(n, o, i) {
  return n
    ? n
        .concat(o)
        .map(function (u, c) {
          return (u = zp(u)), !i && c ? "[" + u + "]" : u;
        })
        .join(i ? "." : "")
    : o;
}
function fw(n) {
  return D.isArray(n) && !n.some(Ba);
}
const pw = D.toFlatObject(D, {}, null, function (o) {
  return /^is[A-Z]/.test(o);
});
function ml(n, o, i) {
  if (!D.isObject(n)) throw new TypeError("target must be an object");
  (o = o || new FormData()),
    (i = D.toFlatObject(
      i,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, k) {
        return !D.isUndefined(k[S]);
      }
    ));
  const s = i.metaTokens,
    u = i.visitor || w,
    c = i.dots,
    f = i.indexes,
    y = (i.Blob || (typeof Blob < "u" && Blob)) && D.isSpecCompliantForm(o);
  if (!D.isFunction(u)) throw new TypeError("visitor must be a function");
  function g(R) {
    if (R === null) return "";
    if (D.isDate(R)) return R.toISOString();
    if (!y && D.isBlob(R))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(R) || D.isTypedArray(R)
      ? y && typeof Blob == "function"
        ? new Blob([R])
        : Buffer.from(R)
      : R;
  }
  function w(R, S, k) {
    let P = R;
    if (R && !k && typeof R == "object") {
      if (D.endsWith(S, "{}"))
        (S = s ? S : S.slice(0, -2)), (R = JSON.stringify(R));
      else if (
        (D.isArray(R) && fw(R)) ||
        ((D.isFileList(R) || D.endsWith(S, "[]")) && (P = D.toArray(R)))
      )
        return (
          (S = zp(S)),
          P.forEach(function (F, $) {
            !(D.isUndefined(F) || F === null) &&
              o.append(
                f === !0 ? Lf([S], $, c) : f === null ? S : S + "[]",
                g(F)
              );
          }),
          !1
        );
    }
    return Ba(R) ? !0 : (o.append(Lf(k, S, c), g(R)), !1);
  }
  const C = [],
    E = Object.assign(pw, {
      defaultVisitor: w,
      convertValue: g,
      isVisitable: Ba,
    });
  function T(R, S) {
    if (!D.isUndefined(R)) {
      if (C.indexOf(R) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      C.push(R),
        D.forEach(R, function (P, L) {
          (!(D.isUndefined(P) || P === null) &&
            u.call(o, P, D.isString(L) ? L.trim() : L, S, E)) === !0 &&
            T(P, S ? S.concat(L) : [L]);
        }),
        C.pop();
    }
  }
  if (!D.isObject(n)) throw new TypeError("data must be an object");
  return T(n), o;
}
function Af(n) {
  const o = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (s) {
    return o[s];
  });
}
function lu(n, o) {
  (this._pairs = []), n && ml(n, this, o);
}
const Bp = lu.prototype;
Bp.append = function (o, i) {
  this._pairs.push([o, i]);
};
Bp.toString = function (o) {
  const i = o
    ? function (s) {
        return o.call(this, s, Af);
      }
    : Af;
  return this._pairs
    .map(function (u) {
      return i(u[0]) + "=" + i(u[1]);
    }, "")
    .join("&");
};
function hw(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Up(n, o, i) {
  if (!o) return n;
  const s = (i && i.encode) || hw;
  D.isFunction(i) && (i = { serialize: i });
  const u = i && i.serialize;
  let c;
  if (
    (u
      ? (c = u(o, i))
      : (c = D.isURLSearchParams(o) ? o.toString() : new lu(o, i).toString(s)),
    c)
  ) {
    const f = n.indexOf("#");
    f !== -1 && (n = n.slice(0, f)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return n;
}
class Df {
  constructor() {
    this.handlers = [];
  }
  use(o, i, s) {
    return (
      this.handlers.push({
        fulfilled: o,
        rejected: i,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(o) {
    this.handlers[o] && (this.handlers[o] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(o) {
    D.forEach(this.handlers, function (s) {
      s !== null && o(s);
    });
  }
}
const $p = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  mw = typeof URLSearchParams < "u" ? URLSearchParams : lu,
  gw = typeof FormData < "u" ? FormData : null,
  vw = typeof Blob < "u" ? Blob : null,
  yw = {
    isBrowser: !0,
    classes: { URLSearchParams: mw, FormData: gw, Blob: vw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  su = typeof window < "u" && typeof document < "u",
  Ua = (typeof navigator == "object" && navigator) || void 0,
  ww =
    su &&
    (!Ua || ["ReactNative", "NativeScript", "NS"].indexOf(Ua.product) < 0),
  xw =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Sw = (su && window.location.href) || "http://localhost",
  Ew = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: su,
        hasStandardBrowserEnv: ww,
        hasStandardBrowserWebWorkerEnv: xw,
        navigator: Ua,
        origin: Sw,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ye = { ...Ew, ...yw };
function Cw(n, o) {
  return ml(
    n,
    new Ye.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (i, s, u, c) {
          return Ye.isNode && D.isBuffer(i)
            ? (this.append(s, i.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      o
    )
  );
}
function kw(n) {
  return D.matchAll(/\w+|\[(\w*)]/g, n).map((o) =>
    o[0] === "[]" ? "" : o[1] || o[0]
  );
}
function Rw(n) {
  const o = {},
    i = Object.keys(n);
  let s;
  const u = i.length;
  let c;
  for (s = 0; s < u; s++) (c = i[s]), (o[c] = n[c]);
  return o;
}
function Wp(n) {
  function o(i, s, u, c) {
    let f = i[c++];
    if (f === "__proto__") return !0;
    const p = Number.isFinite(+f),
      y = c >= i.length;
    return (
      (f = !f && D.isArray(u) ? u.length : f),
      y
        ? (D.hasOwnProp(u, f) ? (u[f] = [u[f], s]) : (u[f] = s), !p)
        : ((!u[f] || !D.isObject(u[f])) && (u[f] = []),
          o(i, s, u[f], c) && D.isArray(u[f]) && (u[f] = Rw(u[f])),
          !p)
    );
  }
  if (D.isFormData(n) && D.isFunction(n.entries)) {
    const i = {};
    return (
      D.forEachEntry(n, (s, u) => {
        o(kw(s), u, i, 0);
      }),
      i
    );
  }
  return null;
}
function Nw(n, o, i) {
  if (D.isString(n))
    try {
      return (o || JSON.parse)(n), D.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (0, JSON.stringify)(n);
}
const To = {
  transitional: $p,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (o, i) {
      const s = i.getContentType() || "",
        u = s.indexOf("application/json") > -1,
        c = D.isObject(o);
      if ((c && D.isHTMLForm(o) && (o = new FormData(o)), D.isFormData(o)))
        return u ? JSON.stringify(Wp(o)) : o;
      if (
        D.isArrayBuffer(o) ||
        D.isBuffer(o) ||
        D.isStream(o) ||
        D.isFile(o) ||
        D.isBlob(o) ||
        D.isReadableStream(o)
      )
        return o;
      if (D.isArrayBufferView(o)) return o.buffer;
      if (D.isURLSearchParams(o))
        return (
          i.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          o.toString()
        );
      let p;
      if (c) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return Cw(o, this.formSerializer).toString();
        if ((p = D.isFileList(o)) || s.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return ml(
            p ? { "files[]": o } : o,
            y && new y(),
            this.formSerializer
          );
        }
      }
      return c || u ? (i.setContentType("application/json", !1), Nw(o)) : o;
    },
  ],
  transformResponse: [
    function (o) {
      const i = this.transitional || To.transitional,
        s = i && i.forcedJSONParsing,
        u = this.responseType === "json";
      if (D.isResponse(o) || D.isReadableStream(o)) return o;
      if (o && D.isString(o) && ((s && !this.responseType) || u)) {
        const f = !(i && i.silentJSONParsing) && u;
        try {
          return JSON.parse(o);
        } catch (p) {
          if (f)
            throw p.name === "SyntaxError"
              ? ie.from(p, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : p;
        }
      }
      return o;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ye.classes.FormData, Blob: Ye.classes.Blob },
  validateStatus: function (o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
D.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  To.headers[n] = {};
});
const bw = D.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Pw = (n) => {
    const o = {};
    let i, s, u;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (f) {
            (u = f.indexOf(":")),
              (i = f.substring(0, u).trim().toLowerCase()),
              (s = f.substring(u + 1).trim()),
              !(!i || (o[i] && bw[i])) &&
                (i === "set-cookie"
                  ? o[i]
                    ? o[i].push(s)
                    : (o[i] = [s])
                  : (o[i] = o[i] ? o[i] + ", " + s : s));
          }),
      o
    );
  },
  If = Symbol("internals");
function yo(n) {
  return n && String(n).trim().toLowerCase();
}
function Xi(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(Xi) : String(n);
}
function Tw(n) {
  const o = Object.create(null),
    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = i.exec(n)); ) o[s[1]] = s[2];
  return o;
}
const jw = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Ca(n, o, i, s, u) {
  if (D.isFunction(s)) return s.call(this, o, i);
  if ((u && (o = i), !!D.isString(o))) {
    if (D.isString(s)) return o.indexOf(s) !== -1;
    if (D.isRegExp(s)) return s.test(o);
  }
}
function _w(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (o, i, s) => i.toUpperCase() + s);
}
function Ow(n, o) {
  const i = D.toCamelCase(" " + o);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(n, s + i, {
      value: function (u, c, f) {
        return this[s].call(this, o, u, c, f);
      },
      configurable: !0,
    });
  });
}
class ut {
  constructor(o) {
    o && this.set(o);
  }
  set(o, i, s) {
    const u = this;
    function c(p, y, g) {
      const w = yo(y);
      if (!w) throw new Error("header name must be a non-empty string");
      const C = D.findKey(u, w);
      (!C || u[C] === void 0 || g === !0 || (g === void 0 && u[C] !== !1)) &&
        (u[C || y] = Xi(p));
    }
    const f = (p, y) => D.forEach(p, (g, w) => c(g, w, y));
    if (D.isPlainObject(o) || o instanceof this.constructor) f(o, i);
    else if (D.isString(o) && (o = o.trim()) && !jw(o)) f(Pw(o), i);
    else if (D.isHeaders(o)) for (const [p, y] of o.entries()) c(y, p, s);
    else o != null && c(i, o, s);
    return this;
  }
  get(o, i) {
    if (((o = yo(o)), o)) {
      const s = D.findKey(this, o);
      if (s) {
        const u = this[s];
        if (!i) return u;
        if (i === !0) return Tw(u);
        if (D.isFunction(i)) return i.call(this, u, s);
        if (D.isRegExp(i)) return i.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(o, i) {
    if (((o = yo(o)), o)) {
      const s = D.findKey(this, o);
      return !!(s && this[s] !== void 0 && (!i || Ca(this, this[s], s, i)));
    }
    return !1;
  }
  delete(o, i) {
    const s = this;
    let u = !1;
    function c(f) {
      if (((f = yo(f)), f)) {
        const p = D.findKey(s, f);
        p && (!i || Ca(s, s[p], p, i)) && (delete s[p], (u = !0));
      }
    }
    return D.isArray(o) ? o.forEach(c) : c(o), u;
  }
  clear(o) {
    const i = Object.keys(this);
    let s = i.length,
      u = !1;
    for (; s--; ) {
      const c = i[s];
      (!o || Ca(this, this[c], c, o, !0)) && (delete this[c], (u = !0));
    }
    return u;
  }
  normalize(o) {
    const i = this,
      s = {};
    return (
      D.forEach(this, (u, c) => {
        const f = D.findKey(s, c);
        if (f) {
          (i[f] = Xi(u)), delete i[c];
          return;
        }
        const p = o ? _w(c) : String(c).trim();
        p !== c && delete i[c], (i[p] = Xi(u)), (s[p] = !0);
      }),
      this
    );
  }
  concat(...o) {
    return this.constructor.concat(this, ...o);
  }
  toJSON(o) {
    const i = Object.create(null);
    return (
      D.forEach(this, (s, u) => {
        s != null && s !== !1 && (i[u] = o && D.isArray(s) ? s.join(", ") : s);
      }),
      i
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([o, i]) => o + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(o) {
    return o instanceof this ? o : new this(o);
  }
  static concat(o, ...i) {
    const s = new this(o);
    return i.forEach((u) => s.set(u)), s;
  }
  static accessor(o) {
    const s = (this[If] = this[If] = { accessors: {} }).accessors,
      u = this.prototype;
    function c(f) {
      const p = yo(f);
      s[p] || (Ow(u, f), (s[p] = !0));
    }
    return D.isArray(o) ? o.forEach(c) : c(o), this;
  }
}
ut.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
D.reduceDescriptors(ut.prototype, ({ value: n }, o) => {
  let i = o[0].toUpperCase() + o.slice(1);
  return {
    get: () => n,
    set(s) {
      this[i] = s;
    },
  };
});
D.freezeMethods(ut);
function ka(n, o) {
  const i = this || To,
    s = o || i,
    u = ut.from(s.headers);
  let c = s.data;
  return (
    D.forEach(n, function (p) {
      c = p.call(i, c, u.normalize(), o ? o.status : void 0);
    }),
    u.normalize(),
    c
  );
}
function Vp(n) {
  return !!(n && n.__CANCEL__);
}
function Nr(n, o, i) {
  ie.call(this, n ?? "canceled", ie.ERR_CANCELED, o, i),
    (this.name = "CanceledError");
}
D.inherits(Nr, ie, { __CANCEL__: !0 });
function Hp(n, o, i) {
  const s = i.config.validateStatus;
  !i.status || !s || s(i.status)
    ? n(i)
    : o(
        new ie(
          "Request failed with status code " + i.status,
          [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][
            Math.floor(i.status / 100) - 4
          ],
          i.config,
          i.request,
          i
        )
      );
}
function Lw(n) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (o && o[1]) || "";
}
function Aw(n, o) {
  n = n || 10;
  const i = new Array(n),
    s = new Array(n);
  let u = 0,
    c = 0,
    f;
  return (
    (o = o !== void 0 ? o : 1e3),
    function (y) {
      const g = Date.now(),
        w = s[c];
      f || (f = g), (i[u] = y), (s[u] = g);
      let C = c,
        E = 0;
      for (; C !== u; ) (E += i[C++]), (C = C % n);
      if (((u = (u + 1) % n), u === c && (c = (c + 1) % n), g - f < o)) return;
      const T = w && g - w;
      return T ? Math.round((E * 1e3) / T) : void 0;
    }
  );
}
function Dw(n, o) {
  let i = 0,
    s = 1e3 / o,
    u,
    c;
  const f = (g, w = Date.now()) => {
    (i = w), (u = null), c && (clearTimeout(c), (c = null)), n.apply(null, g);
  };
  return [
    (...g) => {
      const w = Date.now(),
        C = w - i;
      C >= s
        ? f(g, w)
        : ((u = g),
          c ||
            (c = setTimeout(() => {
              (c = null), f(u);
            }, s - C)));
    },
    () => u && f(u),
  ];
}
const il = (n, o, i = 3) => {
    let s = 0;
    const u = Aw(50, 250);
    return Dw((c) => {
      const f = c.loaded,
        p = c.lengthComputable ? c.total : void 0,
        y = f - s,
        g = u(y),
        w = f <= p;
      s = f;
      const C = {
        loaded: f,
        total: p,
        progress: p ? f / p : void 0,
        bytes: y,
        rate: g || void 0,
        estimated: g && p && w ? (p - f) / g : void 0,
        event: c,
        lengthComputable: p != null,
        [o ? "download" : "upload"]: !0,
      };
      n(C);
    }, i);
  },
  Ff = (n, o) => {
    const i = n != null;
    return [(s) => o[0]({ lengthComputable: i, total: n, loaded: s }), o[1]];
  },
  Mf =
    (n) =>
    (...o) =>
      D.asap(() => n(...o)),
  Iw = Ye.hasStandardBrowserEnv
    ? ((n, o) => (i) => (
        (i = new URL(i, Ye.origin)),
        n.protocol === i.protocol &&
          n.host === i.host &&
          (o || n.port === i.port)
      ))(
        new URL(Ye.origin),
        Ye.navigator && /(msie|trident)/i.test(Ye.navigator.userAgent)
      )
    : () => !0,
  Fw = Ye.hasStandardBrowserEnv
    ? {
        write(n, o, i, s, u, c) {
          const f = [n + "=" + encodeURIComponent(o)];
          D.isNumber(i) && f.push("expires=" + new Date(i).toGMTString()),
            D.isString(s) && f.push("path=" + s),
            D.isString(u) && f.push("domain=" + u),
            c === !0 && f.push("secure"),
            (document.cookie = f.join("; "));
        },
        read(n) {
          const o = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return o ? decodeURIComponent(o[3]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Mw(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function zw(n, o) {
  return o ? n.replace(/\/?\/$/, "") + "/" + o.replace(/^\/+/, "") : n;
}
function Kp(n, o) {
  return n && !Mw(o) ? zw(n, o) : o;
}
const zf = (n) => (n instanceof ut ? { ...n } : n);
function Wn(n, o) {
  o = o || {};
  const i = {};
  function s(g, w, C, E) {
    return D.isPlainObject(g) && D.isPlainObject(w)
      ? D.merge.call({ caseless: E }, g, w)
      : D.isPlainObject(w)
      ? D.merge({}, w)
      : D.isArray(w)
      ? w.slice()
      : w;
  }
  function u(g, w, C, E) {
    if (D.isUndefined(w)) {
      if (!D.isUndefined(g)) return s(void 0, g, C, E);
    } else return s(g, w, C, E);
  }
  function c(g, w) {
    if (!D.isUndefined(w)) return s(void 0, w);
  }
  function f(g, w) {
    if (D.isUndefined(w)) {
      if (!D.isUndefined(g)) return s(void 0, g);
    } else return s(void 0, w);
  }
  function p(g, w, C) {
    if (C in o) return s(g, w);
    if (C in n) return s(void 0, g);
  }
  const y = {
    url: c,
    method: c,
    data: c,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: p,
    headers: (g, w, C) => u(zf(g), zf(w), C, !0),
  };
  return (
    D.forEach(Object.keys(Object.assign({}, n, o)), function (w) {
      const C = y[w] || u,
        E = C(n[w], o[w], w);
      (D.isUndefined(E) && C !== p) || (i[w] = E);
    }),
    i
  );
}
const Gp = (n) => {
    const o = Wn({}, n);
    let {
      data: i,
      withXSRFToken: s,
      xsrfHeaderName: u,
      xsrfCookieName: c,
      headers: f,
      auth: p,
    } = o;
    (o.headers = f = ut.from(f)),
      (o.url = Up(Kp(o.baseURL, o.url), n.params, n.paramsSerializer)),
      p &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (p.username || "") +
                ":" +
                (p.password ? unescape(encodeURIComponent(p.password)) : "")
            )
        );
    let y;
    if (D.isFormData(i)) {
      if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if ((y = f.getContentType()) !== !1) {
        const [g, ...w] = y
          ? y
              .split(";")
              .map((C) => C.trim())
              .filter(Boolean)
          : [];
        f.setContentType([g || "multipart/form-data", ...w].join("; "));
      }
    }
    if (
      Ye.hasStandardBrowserEnv &&
      (s && D.isFunction(s) && (s = s(o)), s || (s !== !1 && Iw(o.url)))
    ) {
      const g = u && c && Fw.read(c);
      g && f.set(u, g);
    }
    return o;
  },
  Bw = typeof XMLHttpRequest < "u",
  Uw =
    Bw &&
    function (n) {
      return new Promise(function (i, s) {
        const u = Gp(n);
        let c = u.data;
        const f = ut.from(u.headers).normalize();
        let { responseType: p, onUploadProgress: y, onDownloadProgress: g } = u,
          w,
          C,
          E,
          T,
          R;
        function S() {
          T && T(),
            R && R(),
            u.cancelToken && u.cancelToken.unsubscribe(w),
            u.signal && u.signal.removeEventListener("abort", w);
        }
        let k = new XMLHttpRequest();
        k.open(u.method.toUpperCase(), u.url, !0), (k.timeout = u.timeout);
        function P() {
          if (!k) return;
          const F = ut.from(
              "getAllResponseHeaders" in k && k.getAllResponseHeaders()
            ),
            H = {
              data:
                !p || p === "text" || p === "json"
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: F,
              config: n,
              request: k,
            };
          Hp(
            function (Q) {
              i(Q), S();
            },
            function (Q) {
              s(Q), S();
            },
            H
          ),
            (k = null);
        }
        "onloadend" in k
          ? (k.onloadend = P)
          : (k.onreadystatechange = function () {
              !k ||
                k.readyState !== 4 ||
                (k.status === 0 &&
                  !(k.responseURL && k.responseURL.indexOf("file:") === 0)) ||
                setTimeout(P);
            }),
          (k.onabort = function () {
            k &&
              (s(new ie("Request aborted", ie.ECONNABORTED, n, k)), (k = null));
          }),
          (k.onerror = function () {
            s(new ie("Network Error", ie.ERR_NETWORK, n, k)), (k = null);
          }),
          (k.ontimeout = function () {
            let $ = u.timeout
              ? "timeout of " + u.timeout + "ms exceeded"
              : "timeout exceeded";
            const H = u.transitional || $p;
            u.timeoutErrorMessage && ($ = u.timeoutErrorMessage),
              s(
                new ie(
                  $,
                  H.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  n,
                  k
                )
              ),
              (k = null);
          }),
          c === void 0 && f.setContentType(null),
          "setRequestHeader" in k &&
            D.forEach(f.toJSON(), function ($, H) {
              k.setRequestHeader(H, $);
            }),
          D.isUndefined(u.withCredentials) ||
            (k.withCredentials = !!u.withCredentials),
          p && p !== "json" && (k.responseType = u.responseType),
          g && (([E, R] = il(g, !0)), k.addEventListener("progress", E)),
          y &&
            k.upload &&
            (([C, T] = il(y)),
            k.upload.addEventListener("progress", C),
            k.upload.addEventListener("loadend", T)),
          (u.cancelToken || u.signal) &&
            ((w = (F) => {
              k &&
                (s(!F || F.type ? new Nr(null, n, k) : F),
                k.abort(),
                (k = null));
            }),
            u.cancelToken && u.cancelToken.subscribe(w),
            u.signal &&
              (u.signal.aborted ? w() : u.signal.addEventListener("abort", w)));
        const L = Lw(u.url);
        if (L && Ye.protocols.indexOf(L) === -1) {
          s(new ie("Unsupported protocol " + L + ":", ie.ERR_BAD_REQUEST, n));
          return;
        }
        k.send(c || null);
      });
    },
  $w = (n, o) => {
    const { length: i } = (n = n ? n.filter(Boolean) : []);
    if (o || i) {
      let s = new AbortController(),
        u;
      const c = function (g) {
        if (!u) {
          (u = !0), p();
          const w = g instanceof Error ? g : this.reason;
          s.abort(
            w instanceof ie ? w : new Nr(w instanceof Error ? w.message : w)
          );
        }
      };
      let f =
        o &&
        setTimeout(() => {
          (f = null), c(new ie(`timeout ${o} of ms exceeded`, ie.ETIMEDOUT));
        }, o);
      const p = () => {
        n &&
          (f && clearTimeout(f),
          (f = null),
          n.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(c)
              : g.removeEventListener("abort", c);
          }),
          (n = null));
      };
      n.forEach((g) => g.addEventListener("abort", c));
      const { signal: y } = s;
      return (y.unsubscribe = () => D.asap(p)), y;
    }
  },
  Ww = function* (n, o) {
    let i = n.byteLength;
    if (i < o) {
      yield n;
      return;
    }
    let s = 0,
      u;
    for (; s < i; ) (u = s + o), yield n.slice(s, u), (s = u);
  },
  Vw = async function* (n, o) {
    for await (const i of Hw(n)) yield* Ww(i, o);
  },
  Hw = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const o = n.getReader();
    try {
      for (;;) {
        const { done: i, value: s } = await o.read();
        if (i) break;
        yield s;
      }
    } finally {
      await o.cancel();
    }
  },
  Bf = (n, o, i, s) => {
    const u = Vw(n, o);
    let c = 0,
      f,
      p = (y) => {
        f || ((f = !0), s && s(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: g, value: w } = await u.next();
            if (g) {
              p(), y.close();
              return;
            }
            let C = w.byteLength;
            if (i) {
              let E = (c += C);
              i(E);
            }
            y.enqueue(new Uint8Array(w));
          } catch (g) {
            throw (p(g), g);
          }
        },
        cancel(y) {
          return p(y), u.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  gl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Qp = gl && typeof ReadableStream == "function",
  Kw =
    gl &&
    (typeof TextEncoder == "function"
      ? (
          (n) => (o) =>
            n.encode(o)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  qp = (n, ...o) => {
    try {
      return !!n(...o);
    } catch {
      return !1;
    }
  },
  Gw =
    Qp &&
    qp(() => {
      let n = !1;
      const o = new Request(Ye.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (n = !0), "half";
        },
      }).headers.has("Content-Type");
      return n && !o;
    }),
  Uf = 64 * 1024,
  $a = Qp && qp(() => D.isReadableStream(new Response("").body)),
  ll = { stream: $a && ((n) => n.body) };
gl &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((o) => {
      !ll[o] &&
        (ll[o] = D.isFunction(n[o])
          ? (i) => i[o]()
          : (i, s) => {
              throw new ie(
                `Response type '${o}' is not supported`,
                ie.ERR_NOT_SUPPORT,
                s
              );
            });
    });
  })(new Response());
const Qw = async (n) => {
    if (n == null) return 0;
    if (D.isBlob(n)) return n.size;
    if (D.isSpecCompliantForm(n))
      return (
        await new Request(Ye.origin, { method: "POST", body: n }).arrayBuffer()
      ).byteLength;
    if (D.isArrayBufferView(n) || D.isArrayBuffer(n)) return n.byteLength;
    if ((D.isURLSearchParams(n) && (n = n + ""), D.isString(n)))
      return (await Kw(n)).byteLength;
  },
  qw = async (n, o) => {
    const i = D.toFiniteNumber(n.getContentLength());
    return i ?? Qw(o);
  },
  Yw =
    gl &&
    (async (n) => {
      let {
        url: o,
        method: i,
        data: s,
        signal: u,
        cancelToken: c,
        timeout: f,
        onDownloadProgress: p,
        onUploadProgress: y,
        responseType: g,
        headers: w,
        withCredentials: C = "same-origin",
        fetchOptions: E,
      } = Gp(n);
      g = g ? (g + "").toLowerCase() : "text";
      let T = $w([u, c && c.toAbortSignal()], f),
        R;
      const S =
        T &&
        T.unsubscribe &&
        (() => {
          T.unsubscribe();
        });
      let k;
      try {
        if (
          y &&
          Gw &&
          i !== "get" &&
          i !== "head" &&
          (k = await qw(w, s)) !== 0
        ) {
          let H = new Request(o, { method: "POST", body: s, duplex: "half" }),
            V;
          if (
            (D.isFormData(s) &&
              (V = H.headers.get("content-type")) &&
              w.setContentType(V),
            H.body)
          ) {
            const [Q, ee] = Ff(k, il(Mf(y)));
            s = Bf(H.body, Uf, Q, ee);
          }
        }
        D.isString(C) || (C = C ? "include" : "omit");
        const P = "credentials" in Request.prototype;
        R = new Request(o, {
          ...E,
          signal: T,
          method: i.toUpperCase(),
          headers: w.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: P ? C : void 0,
        });
        let L = await fetch(R);
        const F = $a && (g === "stream" || g === "response");
        if ($a && (p || (F && S))) {
          const H = {};
          ["status", "statusText", "headers"].forEach((se) => {
            H[se] = L[se];
          });
          const V = D.toFiniteNumber(L.headers.get("content-length")),
            [Q, ee] = (p && Ff(V, il(Mf(p), !0))) || [];
          L = new Response(
            Bf(L.body, Uf, Q, () => {
              ee && ee(), S && S();
            }),
            H
          );
        }
        g = g || "text";
        let $ = await ll[D.findKey(ll, g) || "text"](L, n);
        return (
          !F && S && S(),
          await new Promise((H, V) => {
            Hp(H, V, {
              data: $,
              headers: ut.from(L.headers),
              status: L.status,
              statusText: L.statusText,
              config: n,
              request: R,
            });
          })
        );
      } catch (P) {
        throw (
          (S && S(),
          P && P.name === "TypeError" && /fetch/i.test(P.message)
            ? Object.assign(new ie("Network Error", ie.ERR_NETWORK, n, R), {
                cause: P.cause || P,
              })
            : ie.from(P, P && P.code, n, R))
        );
      }
    }),
  Wa = { http: dw, xhr: Uw, fetch: Yw };
D.forEach(Wa, (n, o) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: o });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: o });
  }
});
const $f = (n) => `- ${n}`,
  Xw = (n) => D.isFunction(n) || n === null || n === !1,
  Yp = {
    getAdapter: (n) => {
      n = D.isArray(n) ? n : [n];
      const { length: o } = n;
      let i, s;
      const u = {};
      for (let c = 0; c < o; c++) {
        i = n[c];
        let f;
        if (
          ((s = i),
          !Xw(i) && ((s = Wa[(f = String(i)).toLowerCase()]), s === void 0))
        )
          throw new ie(`Unknown adapter '${f}'`);
        if (s) break;
        u[f || "#" + c] = s;
      }
      if (!s) {
        const c = Object.entries(u).map(
          ([p, y]) =>
            `adapter ${p} ` +
            (y === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let f = o
          ? c.length > 1
            ? `since :
` +
              c.map($f).join(`
`)
            : " " + $f(c[0])
          : "as no adapter specified";
        throw new ie(
          "There is no suitable adapter to dispatch the request " + f,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: Wa,
  };
function Ra(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Nr(null, n);
}
function Wf(n) {
  return (
    Ra(n),
    (n.headers = ut.from(n.headers)),
    (n.data = ka.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Yp.getAdapter(n.adapter || To.adapter)(n).then(
      function (s) {
        return (
          Ra(n),
          (s.data = ka.call(n, n.transformResponse, s)),
          (s.headers = ut.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Vp(s) ||
            (Ra(n),
            s &&
              s.response &&
              ((s.response.data = ka.call(n, n.transformResponse, s.response)),
              (s.response.headers = ut.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const Xp = "1.7.9",
  vl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, o) => {
    vl[n] = function (s) {
      return typeof s === n || "a" + (o < 1 ? "n " : " ") + n;
    };
  }
);
const Vf = {};
vl.transitional = function (o, i, s) {
  function u(c, f) {
    return (
      "[Axios v" +
      Xp +
      "] Transitional option '" +
      c +
      "'" +
      f +
      (s ? ". " + s : "")
    );
  }
  return (c, f, p) => {
    if (o === !1)
      throw new ie(
        u(f, " has been removed" + (i ? " in " + i : "")),
        ie.ERR_DEPRECATED
      );
    return (
      i &&
        !Vf[f] &&
        ((Vf[f] = !0),
        console.warn(
          u(
            f,
            " has been deprecated since v" +
              i +
              " and will be removed in the near future"
          )
        )),
      o ? o(c, f, p) : !0
    );
  };
};
vl.spelling = function (o) {
  return (i, s) => (console.warn(`${s} is likely a misspelling of ${o}`), !0);
};
function Jw(n, o, i) {
  if (typeof n != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let u = s.length;
  for (; u-- > 0; ) {
    const c = s[u],
      f = o[c];
    if (f) {
      const p = n[c],
        y = p === void 0 || f(p, c, n);
      if (y !== !0)
        throw new ie("option " + c + " must be " + y, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new ie("Unknown option " + c, ie.ERR_BAD_OPTION);
  }
}
const Ji = { assertOptions: Jw, validators: vl },
  Mt = Ji.validators;
class $n {
  constructor(o) {
    (this.defaults = o),
      (this.interceptors = { request: new Df(), response: new Df() });
  }
  async request(o, i) {
    try {
      return await this._request(o, i);
    } catch (s) {
      if (s instanceof Error) {
        let u = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(u)
          : (u = new Error());
        const c = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? c &&
              !String(s.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + c)
            : (s.stack = c);
        } catch {}
      }
      throw s;
    }
  }
  _request(o, i) {
    typeof o == "string" ? ((i = i || {}), (i.url = o)) : (i = o || {}),
      (i = Wn(this.defaults, i));
    const { transitional: s, paramsSerializer: u, headers: c } = i;
    s !== void 0 &&
      Ji.assertOptions(
        s,
        {
          silentJSONParsing: Mt.transitional(Mt.boolean),
          forcedJSONParsing: Mt.transitional(Mt.boolean),
          clarifyTimeoutError: Mt.transitional(Mt.boolean),
        },
        !1
      ),
      u != null &&
        (D.isFunction(u)
          ? (i.paramsSerializer = { serialize: u })
          : Ji.assertOptions(
              u,
              { encode: Mt.function, serialize: Mt.function },
              !0
            )),
      Ji.assertOptions(
        i,
        {
          baseUrl: Mt.spelling("baseURL"),
          withXsrfToken: Mt.spelling("withXSRFToken"),
        },
        !0
      ),
      (i.method = (i.method || this.defaults.method || "get").toLowerCase());
    let f = c && D.merge(c.common, c[i.method]);
    c &&
      D.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (R) => {
          delete c[R];
        }
      ),
      (i.headers = ut.concat(f, c));
    const p = [];
    let y = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(i) === !1) ||
        ((y = y && S.synchronous), p.unshift(S.fulfilled, S.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (S) {
      g.push(S.fulfilled, S.rejected);
    });
    let w,
      C = 0,
      E;
    if (!y) {
      const R = [Wf.bind(this), void 0];
      for (
        R.unshift.apply(R, p),
          R.push.apply(R, g),
          E = R.length,
          w = Promise.resolve(i);
        C < E;

      )
        w = w.then(R[C++], R[C++]);
      return w;
    }
    E = p.length;
    let T = i;
    for (C = 0; C < E; ) {
      const R = p[C++],
        S = p[C++];
      try {
        T = R(T);
      } catch (k) {
        S.call(this, k);
        break;
      }
    }
    try {
      w = Wf.call(this, T);
    } catch (R) {
      return Promise.reject(R);
    }
    for (C = 0, E = g.length; C < E; ) w = w.then(g[C++], g[C++]);
    return w;
  }
  getUri(o) {
    o = Wn(this.defaults, o);
    const i = Kp(o.baseURL, o.url);
    return Up(i, o.params, o.paramsSerializer);
  }
}
D.forEach(["delete", "get", "head", "options"], function (o) {
  $n.prototype[o] = function (i, s) {
    return this.request(
      Wn(s || {}, { method: o, url: i, data: (s || {}).data })
    );
  };
});
D.forEach(["post", "put", "patch"], function (o) {
  function i(s) {
    return function (c, f, p) {
      return this.request(
        Wn(p || {}, {
          method: o,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: f,
        })
      );
    };
  }
  ($n.prototype[o] = i()), ($n.prototype[o + "Form"] = i(!0));
});
class au {
  constructor(o) {
    if (typeof o != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function (c) {
      i = c;
    });
    const s = this;
    this.promise.then((u) => {
      if (!s._listeners) return;
      let c = s._listeners.length;
      for (; c-- > 0; ) s._listeners[c](u);
      s._listeners = null;
    }),
      (this.promise.then = (u) => {
        let c;
        const f = new Promise((p) => {
          s.subscribe(p), (c = p);
        }).then(u);
        return (
          (f.cancel = function () {
            s.unsubscribe(c);
          }),
          f
        );
      }),
      o(function (c, f, p) {
        s.reason || ((s.reason = new Nr(c, f, p)), i(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(o) {
    if (this.reason) {
      o(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(o) : (this._listeners = [o]);
  }
  unsubscribe(o) {
    if (!this._listeners) return;
    const i = this._listeners.indexOf(o);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const o = new AbortController(),
      i = (s) => {
        o.abort(s);
      };
    return (
      this.subscribe(i),
      (o.signal.unsubscribe = () => this.unsubscribe(i)),
      o.signal
    );
  }
  static source() {
    let o;
    return {
      token: new au(function (u) {
        o = u;
      }),
      cancel: o,
    };
  }
}
function Zw(n) {
  return function (i) {
    return n.apply(null, i);
  };
}
function ex(n) {
  return D.isObject(n) && n.isAxiosError === !0;
}
const Va = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Va).forEach(([n, o]) => {
  Va[o] = n;
});
function Jp(n) {
  const o = new $n(n),
    i = Tp($n.prototype.request, o);
  return (
    D.extend(i, $n.prototype, o, { allOwnKeys: !0 }),
    D.extend(i, o, null, { allOwnKeys: !0 }),
    (i.create = function (u) {
      return Jp(Wn(n, u));
    }),
    i
  );
}
const pe = Jp(To);
pe.Axios = $n;
pe.CanceledError = Nr;
pe.CancelToken = au;
pe.isCancel = Vp;
pe.VERSION = Xp;
pe.toFormData = ml;
pe.AxiosError = ie;
pe.Cancel = pe.CanceledError;
pe.all = function (o) {
  return Promise.all(o);
};
pe.spread = Zw;
pe.isAxiosError = ex;
pe.mergeConfig = Wn;
pe.AxiosHeaders = ut;
pe.formToJSON = (n) => Wp(D.isHTMLForm(n) ? new FormData(n) : n);
pe.getAdapter = Yp.getAdapter;
pe.HttpStatusCode = Va;
pe.default = pe;
const tx = ({ token: n, role: o, id: i }) => {
  const [s, u] = v.useState(null),
    [c, f] = v.useState([]),
    [p, y] = v.useState([]),
    [g, w] = v.useState(null),
    [C, E] = v.useState(!0),
    [T, R] = v.useState("details"),
    [S, k] = v.useState(!1),
    P = async () => {
      try {
        const V = await pe.get(`https://book-sphere-1.onrender.com/user/${i}`, {
          headers: { Authorization: `Bearer ${n}` },
        });
        u(V.data), console.log(V.data);
      } catch (V) {
        w(V.message);
      } finally {
        E(!1);
      }
    },
    L = async () => {
      try {
        const V = await pe.get(
          `https://book-sphere-1.onrender.com/user/${i}/rentals`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        f(V.data), console.log(V.data);
      } catch (V) {
        w(V.message);
      }
    },
    F = async () => {
      try {
        const V = await pe.get(
          `https://book-sphere-1.onrender.com/user/${i}/books`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        console.log(V.data), y(V.data);
      } catch (V) {
        w(V.message);
      }
    },
    $ = async (V) => {
      k(!0);
      try {
        await pe.post(
          `https://book-sphere-1.onrender.com/user/${i}/rentbook`,
          { bookId: V },
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          F(),
          L();
      } catch (Q) {
        w(Q.message);
      } finally {
        k(!1);
      }
    };
  if (
    (v.useEffect(() => {
      n &&
        i &&
        (E(!0),
        (async () => {
          try {
            await P(), await L(), await F();
          } catch (Q) {
            w(Q.message);
          } finally {
            E(!1);
          }
        })());
    }, [n, i]),
    C)
  )
    return m.jsx("div", { children: "Loading..." });
  if (g) return m.jsxs("div", { children: ["Error: ", g] });
  const H = (V) =>
    T === V
      ? "border-b-2 border-blue-500 px-6 py-3 text-lg text-gray-700 focus:outline-none hover:text-blue-600"
      : "px-6 py-3 text-lg text-gray-700 focus:outline-none hover:text-blue-600";
  return m.jsxs("div", {
    className: "max-w-4xl mx-auto p-6",
    children: [
      m.jsxs("div", {
        className: "flex border-b-2 border-gray-300 mb-6",
        children: [
          m.jsx("button", {
            onClick: () => R("details"),
            className: H("details"),
            children: "User Details",
          }),
          m.jsx("button", {
            onClick: () => R("history"),
            className: H("history"),
            children: "Rental History",
          }),
          m.jsx("button", {
            onClick: () => R("rent"),
            className: H("rent"),
            children: "Rent Books",
          }),
        ],
      }),
      T === "details" &&
        m.jsxs("div", {
          className: "bg-white p-6 rounded-lg shadow-lg mb-6",
          children: [
            m.jsx("h1", {
              className: "text-2xl font-bold mb-4",
              children: "User Details",
            }),
            s
              ? m.jsxs(m.Fragment, {
                  children: [
                    m.jsxs("p", {
                      className: "mb-2",
                      children: [
                        m.jsx("strong", { children: "Name:" }),
                        " ",
                        s.name,
                      ],
                    }),
                    m.jsxs("p", {
                      className: "mb-2",
                      children: [
                        m.jsx("strong", { children: "Phone:" }),
                        " ",
                        s.phone,
                      ],
                    }),
                    m.jsxs("p", {
                      className: "mb-2",
                      children: [
                        m.jsx("strong", { children: "Role:" }),
                        " ",
                        o,
                      ],
                    }),
                    m.jsxs("p", {
                      className: "mb-2",
                      children: [
                        m.jsx("strong", { children: " Member Since: " }),
                        new Date(s.created_at).toLocaleDateString(),
                      ],
                    }),
                  ],
                })
              : m.jsx("p", { children: "Loading user data..." }),
          ],
        }),
      T === "history" &&
        m.jsxs("div", {
          className: "bg-white p-6 rounded-lg shadow-lg mb-6",
          children: [
            m.jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Rental History",
            }),
            c.length > 0
              ? m.jsx("ul", {
                  className: "space-y-4",
                  children: c.map((V) =>
                    m.jsxs(
                      "li",
                      {
                        className:
                          "p-4 border-2 border-gray-300 rounded-lg bg-gray-50",
                        children: [
                          m.jsxs("p", {
                            className: "font-semibold text-gray-700",
                            children: ["Book Title: ", V.book_title],
                          }),
                          m.jsxs("p", {
                            children: [
                              "Rent Date: ",
                              new Date(V.rent_date).toLocaleDateString(),
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              "Return Date:",
                              " ",
                              V.return_date
                                ? new Date(V.return_date).toLocaleDateString()
                                : "Not returned",
                            ],
                          }),
                          m.jsxs("p", {
                            children: ["Returned: ", `${V.returned}`],
                          }),
                        ],
                      },
                      V.rental_id
                    )
                  ),
                })
              : m.jsx("p", { children: "No rental history." }),
          ],
        }),
      T === "rent" &&
        m.jsxs("div", {
          className: "bg-white p-6 rounded-lg shadow-lg mb-6",
          children: [
            m.jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Rent a Book",
            }),
            p.length > 0
              ? m.jsx("ul", {
                  className: "space-y-4",
                  children: p.map((V) =>
                    m.jsxs(
                      "li",
                      {
                        className:
                          "flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-lg bg-green-100",
                        children: [
                          m.jsxs("p", {
                            children: [
                              "Book ID:",
                              " ",
                              m.jsx("span", {
                                className: "font-bold text-fuchsia-500",
                                children: V.id,
                              }),
                            ],
                          }),
                          m.jsxs("p", { children: ["Book Title: ", V.title] }),
                          m.jsxs("p", { children: ["Author: ", V.author] }),
                          m.jsxs("p", { children: ["Genre: ", V.genre] }),
                          m.jsxs("p", {
                            children: [
                              "Available Copies: ",
                              V.available_copies,
                            ],
                          }),
                          m.jsx("button", {
                            className:
                              "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600",
                            onClick: () => $(V.id),
                            disabled: S,
                            children: S ? "Renting..." : "Rent",
                          }),
                        ],
                      },
                      V.id
                    )
                  ),
                })
              : m.jsx("p", { children: "No available books." }),
          ],
        }),
    ],
  });
};
function He(n, o, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (u) {
    if ((n == null || n(u), i === !1 || !u.defaultPrevented))
      return o == null ? void 0 : o(u);
  };
}
function nx(n, o) {
  const i = v.createContext(o),
    s = (c) => {
      const { children: f, ...p } = c,
        y = v.useMemo(() => p, Object.values(p));
      return m.jsx(i.Provider, { value: y, children: f });
    };
  s.displayName = n + "Provider";
  function u(c) {
    const f = v.useContext(i);
    if (f) return f;
    if (o !== void 0) return o;
    throw new Error(`\`${c}\` must be used within \`${n}\``);
  }
  return [s, u];
}
function yl(n, o = []) {
  let i = [];
  function s(c, f) {
    const p = v.createContext(f),
      y = i.length;
    i = [...i, f];
    const g = (C) => {
      var P;
      const { scope: E, children: T, ...R } = C,
        S = ((P = E == null ? void 0 : E[n]) == null ? void 0 : P[y]) || p,
        k = v.useMemo(() => R, Object.values(R));
      return m.jsx(S.Provider, { value: k, children: T });
    };
    g.displayName = c + "Provider";
    function w(C, E) {
      var S;
      const T = ((S = E == null ? void 0 : E[n]) == null ? void 0 : S[y]) || p,
        R = v.useContext(T);
      if (R) return R;
      if (f !== void 0) return f;
      throw new Error(`\`${C}\` must be used within \`${c}\``);
    }
    return [g, w];
  }
  const u = () => {
    const c = i.map((f) => v.createContext(f));
    return function (p) {
      const y = (p == null ? void 0 : p[n]) || c;
      return v.useMemo(() => ({ [`__scope${n}`]: { ...p, [n]: y } }), [p, y]);
    };
  };
  return (u.scopeName = n), [s, rx(u, ...o)];
}
function rx(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const i = () => {
    const s = n.map((u) => ({ useScope: u(), scopeName: u.scopeName }));
    return function (c) {
      const f = s.reduce((p, { useScope: y, scopeName: g }) => {
        const C = y(c)[`__scope${g}`];
        return { ...p, ...C };
      }, {});
      return v.useMemo(() => ({ [`__scope${o.scopeName}`]: f }), [f]);
    };
  };
  return (i.scopeName = o.scopeName), i;
}
function Hf(n, o) {
  if (typeof n == "function") return n(o);
  n != null && (n.current = o);
}
function Zp(...n) {
  return (o) => {
    let i = !1;
    const s = n.map((u) => {
      const c = Hf(u, o);
      return !i && typeof c == "function" && (i = !0), c;
    });
    if (i)
      return () => {
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          typeof c == "function" ? c() : Hf(n[u], null);
        }
      };
  };
}
function Bt(...n) {
  return v.useCallback(Zp(...n), n);
}
var Ro = v.forwardRef((n, o) => {
  const { children: i, ...s } = n,
    u = v.Children.toArray(i),
    c = u.find(ix);
  if (c) {
    const f = c.props.children,
      p = u.map((y) =>
        y === c
          ? v.Children.count(f) > 1
            ? v.Children.only(null)
            : v.isValidElement(f)
            ? f.props.children
            : null
          : y
      );
    return m.jsx(Ha, {
      ...s,
      ref: o,
      children: v.isValidElement(f) ? v.cloneElement(f, void 0, p) : null,
    });
  }
  return m.jsx(Ha, { ...s, ref: o, children: i });
});
Ro.displayName = "Slot";
var Ha = v.forwardRef((n, o) => {
  const { children: i, ...s } = n;
  if (v.isValidElement(i)) {
    const u = sx(i);
    return v.cloneElement(i, { ...lx(s, i.props), ref: o ? Zp(o, u) : u });
  }
  return v.Children.count(i) > 1 ? v.Children.only(null) : null;
});
Ha.displayName = "SlotClone";
var ox = ({ children: n }) => m.jsx(m.Fragment, { children: n });
function ix(n) {
  return v.isValidElement(n) && n.type === ox;
}
function lx(n, o) {
  const i = { ...o };
  for (const s in o) {
    const u = n[s],
      c = o[s];
    /^on[A-Z]/.test(s)
      ? u && c
        ? (i[s] = (...p) => {
            c(...p), u(...p);
          })
        : u && (i[s] = u)
      : s === "style"
      ? (i[s] = { ...u, ...c })
      : s === "className" && (i[s] = [u, c].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function sx(n) {
  var s, u;
  let o =
      (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
        ? void 0
        : s.get,
    i = o && "isReactWarning" in o && o.isReactWarning;
  return i
    ? n.ref
    : ((o =
        (u = Object.getOwnPropertyDescriptor(n, "ref")) == null
          ? void 0
          : u.get),
      (i = o && "isReactWarning" in o && o.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
function ax(n) {
  const o = n + "CollectionProvider",
    [i, s] = yl(o),
    [u, c] = i(o, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (T) => {
      const { scope: R, children: S } = T,
        k = Sn.useRef(null),
        P = Sn.useRef(new Map()).current;
      return m.jsx(u, { scope: R, itemMap: P, collectionRef: k, children: S });
    };
  f.displayName = o;
  const p = n + "CollectionSlot",
    y = Sn.forwardRef((T, R) => {
      const { scope: S, children: k } = T,
        P = c(p, S),
        L = Bt(R, P.collectionRef);
      return m.jsx(Ro, { ref: L, children: k });
    });
  y.displayName = p;
  const g = n + "CollectionItemSlot",
    w = "data-radix-collection-item",
    C = Sn.forwardRef((T, R) => {
      const { scope: S, children: k, ...P } = T,
        L = Sn.useRef(null),
        F = Bt(R, L),
        $ = c(g, S);
      return (
        Sn.useEffect(
          () => (
            $.itemMap.set(L, { ref: L, ...P }), () => void $.itemMap.delete(L)
          )
        ),
        m.jsx(Ro, { [w]: "", ref: F, children: k })
      );
    });
  C.displayName = g;
  function E(T) {
    const R = c(n + "CollectionConsumer", T);
    return Sn.useCallback(() => {
      const k = R.collectionRef.current;
      if (!k) return [];
      const P = Array.from(k.querySelectorAll(`[${w}]`));
      return Array.from(R.itemMap.values()).sort(
        ($, H) => P.indexOf($.ref.current) - P.indexOf(H.ref.current)
      );
    }, [R.collectionRef, R.itemMap]);
  }
  return [{ Provider: f, Slot: y, ItemSlot: C }, E, s];
}
var sl =
    globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  ux = nv.useId || (() => {}),
  cx = 0;
function Eo(n) {
  const [o, i] = v.useState(ux());
  return (
    sl(() => {
      n || i((s) => s ?? String(cx++));
    }, [n]),
    n || (o ? `radix-${o}` : "")
  );
}
var dx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  nt = dx.reduce((n, o) => {
    const i = v.forwardRef((s, u) => {
      const { asChild: c, ...f } = s,
        p = c ? Ro : o;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        m.jsx(p, { ...f, ref: u })
      );
    });
    return (i.displayName = `Primitive.${o}`), { ...n, [o]: i };
  }, {});
function fx(n, o) {
  n && wp.flushSync(() => n.dispatchEvent(o));
}
function kn(n) {
  const o = v.useRef(n);
  return (
    v.useEffect(() => {
      o.current = n;
    }),
    v.useMemo(
      () =>
        (...i) => {
          var s;
          return (s = o.current) == null ? void 0 : s.call(o, ...i);
        },
      []
    )
  );
}
function uu({ prop: n, defaultProp: o, onChange: i = () => {} }) {
  const [s, u] = px({ defaultProp: o, onChange: i }),
    c = n !== void 0,
    f = c ? n : s,
    p = kn(i),
    y = v.useCallback(
      (g) => {
        if (c) {
          const C = typeof g == "function" ? g(n) : g;
          C !== n && p(C);
        } else u(g);
      },
      [c, n, u, p]
    );
  return [f, y];
}
function px({ defaultProp: n, onChange: o }) {
  const i = v.useState(n),
    [s] = i,
    u = v.useRef(s),
    c = kn(o);
  return (
    v.useEffect(() => {
      u.current !== s && (c(s), (u.current = s));
    }, [s, u, c]),
    i
  );
}
var hx = v.createContext(void 0);
function eh(n) {
  const o = v.useContext(hx);
  return n || o || "ltr";
}
var Na = "rovingFocusGroup.onEntryFocus",
  mx = { bubbles: !1, cancelable: !0 },
  wl = "RovingFocusGroup",
  [Ka, th, gx] = ax(wl),
  [vx, nh] = yl(wl, [gx]),
  [yx, wx] = vx(wl),
  rh = v.forwardRef((n, o) =>
    m.jsx(Ka.Provider, {
      scope: n.__scopeRovingFocusGroup,
      children: m.jsx(Ka.Slot, {
        scope: n.__scopeRovingFocusGroup,
        children: m.jsx(xx, { ...n, ref: o }),
      }),
    })
  );
rh.displayName = wl;
var xx = v.forwardRef((n, o) => {
    const {
        __scopeRovingFocusGroup: i,
        orientation: s,
        loop: u = !1,
        dir: c,
        currentTabStopId: f,
        defaultCurrentTabStopId: p,
        onCurrentTabStopIdChange: y,
        onEntryFocus: g,
        preventScrollOnEntryFocus: w = !1,
        ...C
      } = n,
      E = v.useRef(null),
      T = Bt(o, E),
      R = eh(c),
      [S = null, k] = uu({ prop: f, defaultProp: p, onChange: y }),
      [P, L] = v.useState(!1),
      F = kn(g),
      $ = th(i),
      H = v.useRef(!1),
      [V, Q] = v.useState(0);
    return (
      v.useEffect(() => {
        const ee = E.current;
        if (ee)
          return (
            ee.addEventListener(Na, F), () => ee.removeEventListener(Na, F)
          );
      }, [F]),
      m.jsx(yx, {
        scope: i,
        orientation: s,
        dir: R,
        loop: u,
        currentTabStopId: S,
        onItemFocus: v.useCallback((ee) => k(ee), [k]),
        onItemShiftTab: v.useCallback(() => L(!0), []),
        onFocusableItemAdd: v.useCallback(() => Q((ee) => ee + 1), []),
        onFocusableItemRemove: v.useCallback(() => Q((ee) => ee - 1), []),
        children: m.jsx(nt.div, {
          tabIndex: P || V === 0 ? -1 : 0,
          "data-orientation": s,
          ...C,
          ref: T,
          style: { outline: "none", ...n.style },
          onMouseDown: He(n.onMouseDown, () => {
            H.current = !0;
          }),
          onFocus: He(n.onFocus, (ee) => {
            const se = !H.current;
            if (ee.target === ee.currentTarget && se && !P) {
              const ve = new CustomEvent(Na, mx);
              if ((ee.currentTarget.dispatchEvent(ve), !ve.defaultPrevented)) {
                const De = $().filter((xe) => xe.focusable),
                  ae = De.find((xe) => xe.active),
                  I = De.find((xe) => xe.id === S),
                  Je = [ae, I, ...De]
                    .filter(Boolean)
                    .map((xe) => xe.ref.current);
                lh(Je, w);
              }
            }
            H.current = !1;
          }),
          onBlur: He(n.onBlur, () => L(!1)),
        }),
      })
    );
  }),
  oh = "RovingFocusGroupItem",
  ih = v.forwardRef((n, o) => {
    const {
        __scopeRovingFocusGroup: i,
        focusable: s = !0,
        active: u = !1,
        tabStopId: c,
        ...f
      } = n,
      p = Eo(),
      y = c || p,
      g = wx(oh, i),
      w = g.currentTabStopId === y,
      C = th(i),
      { onFocusableItemAdd: E, onFocusableItemRemove: T } = g;
    return (
      v.useEffect(() => {
        if (s) return E(), () => T();
      }, [s, E, T]),
      m.jsx(Ka.ItemSlot, {
        scope: i,
        id: y,
        focusable: s,
        active: u,
        children: m.jsx(nt.span, {
          tabIndex: w ? 0 : -1,
          "data-orientation": g.orientation,
          ...f,
          ref: o,
          onMouseDown: He(n.onMouseDown, (R) => {
            s ? g.onItemFocus(y) : R.preventDefault();
          }),
          onFocus: He(n.onFocus, () => g.onItemFocus(y)),
          onKeyDown: He(n.onKeyDown, (R) => {
            if (R.key === "Tab" && R.shiftKey) {
              g.onItemShiftTab();
              return;
            }
            if (R.target !== R.currentTarget) return;
            const S = Cx(R, g.orientation, g.dir);
            if (S !== void 0) {
              if (R.metaKey || R.ctrlKey || R.altKey || R.shiftKey) return;
              R.preventDefault();
              let P = C()
                .filter((L) => L.focusable)
                .map((L) => L.ref.current);
              if (S === "last") P.reverse();
              else if (S === "prev" || S === "next") {
                S === "prev" && P.reverse();
                const L = P.indexOf(R.currentTarget);
                P = g.loop ? kx(P, L + 1) : P.slice(L + 1);
              }
              setTimeout(() => lh(P));
            }
          }),
        }),
      })
    );
  });
ih.displayName = oh;
var Sx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function Ex(n, o) {
  return o !== "rtl"
    ? n
    : n === "ArrowLeft"
    ? "ArrowRight"
    : n === "ArrowRight"
    ? "ArrowLeft"
    : n;
}
function Cx(n, o, i) {
  const s = Ex(n.key, i);
  if (
    !(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) &&
    !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s))
  )
    return Sx[s];
}
function lh(n, o = !1) {
  const i = document.activeElement;
  for (const s of n)
    if (
      s === i ||
      (s.focus({ preventScroll: o }), document.activeElement !== i)
    )
      return;
}
function kx(n, o) {
  return n.map((i, s) => n[(o + s) % n.length]);
}
var Rx = rh,
  Nx = ih;
function bx(n, o) {
  return v.useReducer((i, s) => o[i][s] ?? i, n);
}
var jo = (n) => {
  const { present: o, children: i } = n,
    s = Px(o),
    u =
      typeof i == "function" ? i({ present: s.isPresent }) : v.Children.only(i),
    c = Bt(s.ref, Tx(u));
  return typeof i == "function" || s.isPresent
    ? v.cloneElement(u, { ref: c })
    : null;
};
jo.displayName = "Presence";
function Px(n) {
  const [o, i] = v.useState(),
    s = v.useRef({}),
    u = v.useRef(n),
    c = v.useRef("none"),
    f = n ? "mounted" : "unmounted",
    [p, y] = bx(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const g = Wi(s.current);
      c.current = p === "mounted" ? g : "none";
    }, [p]),
    sl(() => {
      const g = s.current,
        w = u.current;
      if (w !== n) {
        const E = c.current,
          T = Wi(g);
        n
          ? y("MOUNT")
          : T === "none" || (g == null ? void 0 : g.display) === "none"
          ? y("UNMOUNT")
          : y(w && E !== T ? "ANIMATION_OUT" : "UNMOUNT"),
          (u.current = n);
      }
    }, [n, y]),
    sl(() => {
      if (o) {
        let g;
        const w = o.ownerDocument.defaultView ?? window,
          C = (T) => {
            const S = Wi(s.current).includes(T.animationName);
            if (T.target === o && S && (y("ANIMATION_END"), !u.current)) {
              const k = o.style.animationFillMode;
              (o.style.animationFillMode = "forwards"),
                (g = w.setTimeout(() => {
                  o.style.animationFillMode === "forwards" &&
                    (o.style.animationFillMode = k);
                }));
            }
          },
          E = (T) => {
            T.target === o && (c.current = Wi(s.current));
          };
        return (
          o.addEventListener("animationstart", E),
          o.addEventListener("animationcancel", C),
          o.addEventListener("animationend", C),
          () => {
            w.clearTimeout(g),
              o.removeEventListener("animationstart", E),
              o.removeEventListener("animationcancel", C),
              o.removeEventListener("animationend", C);
          }
        );
      } else y("ANIMATION_END");
    }, [o, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(p),
      ref: v.useCallback((g) => {
        g && (s.current = getComputedStyle(g)), i(g);
      }, []),
    }
  );
}
function Wi(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function Tx(n) {
  var s, u;
  let o =
      (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
        ? void 0
        : s.get,
    i = o && "isReactWarning" in o && o.isReactWarning;
  return i
    ? n.ref
    : ((o =
        (u = Object.getOwnPropertyDescriptor(n, "ref")) == null
          ? void 0
          : u.get),
      (i = o && "isReactWarning" in o && o.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var cu = "Tabs",
  [jx, lS] = yl(cu, [nh]),
  sh = nh(),
  [_x, du] = jx(cu),
  ah = v.forwardRef((n, o) => {
    const {
        __scopeTabs: i,
        value: s,
        onValueChange: u,
        defaultValue: c,
        orientation: f = "horizontal",
        dir: p,
        activationMode: y = "automatic",
        ...g
      } = n,
      w = eh(p),
      [C, E] = uu({ prop: s, onChange: u, defaultProp: c });
    return m.jsx(_x, {
      scope: i,
      baseId: Eo(),
      value: C,
      onValueChange: E,
      orientation: f,
      dir: w,
      activationMode: y,
      children: m.jsx(nt.div, { dir: w, "data-orientation": f, ...g, ref: o }),
    });
  });
ah.displayName = cu;
var uh = "TabsList",
  ch = v.forwardRef((n, o) => {
    const { __scopeTabs: i, loop: s = !0, ...u } = n,
      c = du(uh, i),
      f = sh(i);
    return m.jsx(Rx, {
      asChild: !0,
      ...f,
      orientation: c.orientation,
      dir: c.dir,
      loop: s,
      children: m.jsx(nt.div, {
        role: "tablist",
        "aria-orientation": c.orientation,
        ...u,
        ref: o,
      }),
    });
  });
ch.displayName = uh;
var dh = "TabsTrigger",
  fh = v.forwardRef((n, o) => {
    const { __scopeTabs: i, value: s, disabled: u = !1, ...c } = n,
      f = du(dh, i),
      p = sh(i),
      y = mh(f.baseId, s),
      g = gh(f.baseId, s),
      w = s === f.value;
    return m.jsx(Nx, {
      asChild: !0,
      ...p,
      focusable: !u,
      active: w,
      children: m.jsx(nt.button, {
        type: "button",
        role: "tab",
        "aria-selected": w,
        "aria-controls": g,
        "data-state": w ? "active" : "inactive",
        "data-disabled": u ? "" : void 0,
        disabled: u,
        id: y,
        ...c,
        ref: o,
        onMouseDown: He(n.onMouseDown, (C) => {
          !u && C.button === 0 && C.ctrlKey === !1
            ? f.onValueChange(s)
            : C.preventDefault();
        }),
        onKeyDown: He(n.onKeyDown, (C) => {
          [" ", "Enter"].includes(C.key) && f.onValueChange(s);
        }),
        onFocus: He(n.onFocus, () => {
          const C = f.activationMode !== "manual";
          !w && !u && C && f.onValueChange(s);
        }),
      }),
    });
  });
fh.displayName = dh;
var ph = "TabsContent",
  hh = v.forwardRef((n, o) => {
    const { __scopeTabs: i, value: s, forceMount: u, children: c, ...f } = n,
      p = du(ph, i),
      y = mh(p.baseId, s),
      g = gh(p.baseId, s),
      w = s === p.value,
      C = v.useRef(w);
    return (
      v.useEffect(() => {
        const E = requestAnimationFrame(() => (C.current = !1));
        return () => cancelAnimationFrame(E);
      }, []),
      m.jsx(jo, {
        present: u || w,
        children: ({ present: E }) =>
          m.jsx(nt.div, {
            "data-state": w ? "active" : "inactive",
            "data-orientation": p.orientation,
            role: "tabpanel",
            "aria-labelledby": y,
            hidden: !E,
            id: g,
            tabIndex: 0,
            ...f,
            ref: o,
            style: { ...n.style, animationDuration: C.current ? "0s" : void 0 },
            children: E && c,
          }),
      })
    );
  });
hh.displayName = ph;
function mh(n, o) {
  return `${n}-trigger-${o}`;
}
function gh(n, o) {
  return `${n}-content-${o}`;
}
var Ox = ah,
  vh = ch,
  yh = fh,
  wh = hh;
const Lx = Ox,
  xh = v.forwardRef(({ className: n, ...o }, i) =>
    m.jsx(vh, {
      ref: i,
      className: Xe(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        n
      ),
      ...o,
    })
  );
xh.displayName = vh.displayName;
const wo = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx(yh, {
    ref: i,
    className: Xe(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      n
    ),
    ...o,
  })
);
wo.displayName = yh.displayName;
const xo = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx(wh, {
    ref: i,
    className: Xe(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      n
    ),
    ...o,
  })
);
xo.displayName = wh.displayName;
const So = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx("div", {
    ref: i,
    className: Xe("rounded-xl border bg-card text-card-foreground shadow", n),
    ...o,
  })
);
So.displayName = "Card";
const Ax = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx("div", {
    ref: i,
    className: Xe("flex flex-col space-y-1.5 p-6", n),
    ...o,
  })
);
Ax.displayName = "CardHeader";
const Dx = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx("div", {
    ref: i,
    className: Xe("font-semibold leading-none tracking-tight", n),
    ...o,
  })
);
Dx.displayName = "CardTitle";
const Ix = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx("div", {
    ref: i,
    className: Xe("text-sm text-muted-foreground", n),
    ...o,
  })
);
Ix.displayName = "CardDescription";
const Fx = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx("div", { ref: i, className: Xe("p-6 pt-0", n), ...o })
);
Fx.displayName = "CardContent";
const Mx = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx("div", { ref: i, className: Xe("flex items-center p-6 pt-0", n), ...o })
);
Mx.displayName = "CardFooter";
const tt = v.forwardRef(({ className: n, type: o, ...i }, s) =>
  m.jsx("input", {
    type: o,
    className: Xe(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      n
    ),
    ref: s,
    ...i,
  })
);
tt.displayName = "Input";
function zx(n, o = globalThis == null ? void 0 : globalThis.document) {
  const i = kn(n);
  v.useEffect(() => {
    const s = (u) => {
      u.key === "Escape" && i(u);
    };
    return (
      o.addEventListener("keydown", s, { capture: !0 }),
      () => o.removeEventListener("keydown", s, { capture: !0 })
    );
  }, [i, o]);
}
var Bx = "DismissableLayer",
  Ga = "dismissableLayer.update",
  Ux = "dismissableLayer.pointerDownOutside",
  $x = "dismissableLayer.focusOutside",
  Kf,
  Sh = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Eh = v.forwardRef((n, o) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: u,
        onFocusOutside: c,
        onInteractOutside: f,
        onDismiss: p,
        ...y
      } = n,
      g = v.useContext(Sh),
      [w, C] = v.useState(null),
      E =
        (w == null ? void 0 : w.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, T] = v.useState({}),
      R = Bt(o, (Q) => C(Q)),
      S = Array.from(g.layers),
      [k] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
      P = S.indexOf(k),
      L = w ? S.indexOf(w) : -1,
      F = g.layersWithOutsidePointerEventsDisabled.size > 0,
      $ = L >= P,
      H = Hx((Q) => {
        const ee = Q.target,
          se = [...g.branches].some((ve) => ve.contains(ee));
        !$ ||
          se ||
          (u == null || u(Q),
          f == null || f(Q),
          Q.defaultPrevented || p == null || p());
      }, E),
      V = Kx((Q) => {
        const ee = Q.target;
        [...g.branches].some((ve) => ve.contains(ee)) ||
          (c == null || c(Q),
          f == null || f(Q),
          Q.defaultPrevented || p == null || p());
      }, E);
    return (
      zx((Q) => {
        L === g.layers.size - 1 &&
          (s == null || s(Q),
          !Q.defaultPrevented && p && (Q.preventDefault(), p()));
      }, E),
      v.useEffect(() => {
        if (w)
          return (
            i &&
              (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Kf = E.body.style.pointerEvents),
                (E.body.style.pointerEvents = "none")),
              g.layersWithOutsidePointerEventsDisabled.add(w)),
            g.layers.add(w),
            Gf(),
            () => {
              i &&
                g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (E.body.style.pointerEvents = Kf);
            }
          );
      }, [w, E, i, g]),
      v.useEffect(
        () => () => {
          w &&
            (g.layers.delete(w),
            g.layersWithOutsidePointerEventsDisabled.delete(w),
            Gf());
        },
        [w, g]
      ),
      v.useEffect(() => {
        const Q = () => T({});
        return (
          document.addEventListener(Ga, Q),
          () => document.removeEventListener(Ga, Q)
        );
      }, []),
      m.jsx(nt.div, {
        ...y,
        ref: R,
        style: {
          pointerEvents: F ? ($ ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: He(n.onFocusCapture, V.onFocusCapture),
        onBlurCapture: He(n.onBlurCapture, V.onBlurCapture),
        onPointerDownCapture: He(
          n.onPointerDownCapture,
          H.onPointerDownCapture
        ),
      })
    );
  });
Eh.displayName = Bx;
var Wx = "DismissableLayerBranch",
  Vx = v.forwardRef((n, o) => {
    const i = v.useContext(Sh),
      s = v.useRef(null),
      u = Bt(o, s);
    return (
      v.useEffect(() => {
        const c = s.current;
        if (c)
          return (
            i.branches.add(c),
            () => {
              i.branches.delete(c);
            }
          );
      }, [i.branches]),
      m.jsx(nt.div, { ...n, ref: u })
    );
  });
Vx.displayName = Wx;
function Hx(n, o = globalThis == null ? void 0 : globalThis.document) {
  const i = kn(n),
    s = v.useRef(!1),
    u = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const c = (p) => {
          if (p.target && !s.current) {
            let y = function () {
              Ch(Ux, i, g, { discrete: !0 });
            };
            const g = { originalEvent: p };
            p.pointerType === "touch"
              ? (o.removeEventListener("click", u.current),
                (u.current = y),
                o.addEventListener("click", u.current, { once: !0 }))
              : y();
          } else o.removeEventListener("click", u.current);
          s.current = !1;
        },
        f = window.setTimeout(() => {
          o.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        window.clearTimeout(f),
          o.removeEventListener("pointerdown", c),
          o.removeEventListener("click", u.current);
      };
    }, [o, i]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function Kx(n, o = globalThis == null ? void 0 : globalThis.document) {
  const i = kn(n),
    s = v.useRef(!1);
  return (
    v.useEffect(() => {
      const u = (c) => {
        c.target &&
          !s.current &&
          Ch($x, i, { originalEvent: c }, { discrete: !1 });
      };
      return (
        o.addEventListener("focusin", u),
        () => o.removeEventListener("focusin", u)
      );
    }, [o, i]),
    {
      onFocusCapture: () => (s.current = !0),
      onBlurCapture: () => (s.current = !1),
    }
  );
}
function Gf() {
  const n = new CustomEvent(Ga);
  document.dispatchEvent(n);
}
function Ch(n, o, i, { discrete: s }) {
  const u = i.originalEvent.target,
    c = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: i });
  o && u.addEventListener(n, o, { once: !0 }),
    s ? fx(u, c) : u.dispatchEvent(c);
}
var ba = "focusScope.autoFocusOnMount",
  Pa = "focusScope.autoFocusOnUnmount",
  Qf = { bubbles: !1, cancelable: !0 },
  Gx = "FocusScope",
  kh = v.forwardRef((n, o) => {
    const {
        loop: i = !1,
        trapped: s = !1,
        onMountAutoFocus: u,
        onUnmountAutoFocus: c,
        ...f
      } = n,
      [p, y] = v.useState(null),
      g = kn(u),
      w = kn(c),
      C = v.useRef(null),
      E = Bt(o, (S) => y(S)),
      T = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    v.useEffect(() => {
      if (s) {
        let S = function (F) {
            if (T.paused || !p) return;
            const $ = F.target;
            p.contains($) ? (C.current = $) : En(C.current, { select: !0 });
          },
          k = function (F) {
            if (T.paused || !p) return;
            const $ = F.relatedTarget;
            $ !== null && (p.contains($) || En(C.current, { select: !0 }));
          },
          P = function (F) {
            if (document.activeElement === document.body)
              for (const H of F) H.removedNodes.length > 0 && En(p);
          };
        document.addEventListener("focusin", S),
          document.addEventListener("focusout", k);
        const L = new MutationObserver(P);
        return (
          p && L.observe(p, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", S),
              document.removeEventListener("focusout", k),
              L.disconnect();
          }
        );
      }
    }, [s, p, T.paused]),
      v.useEffect(() => {
        if (p) {
          Yf.add(T);
          const S = document.activeElement;
          if (!p.contains(S)) {
            const P = new CustomEvent(ba, Qf);
            p.addEventListener(ba, g),
              p.dispatchEvent(P),
              P.defaultPrevented ||
                (Qx(Zx(Rh(p)), { select: !0 }),
                document.activeElement === S && En(p));
          }
          return () => {
            p.removeEventListener(ba, g),
              setTimeout(() => {
                const P = new CustomEvent(Pa, Qf);
                p.addEventListener(Pa, w),
                  p.dispatchEvent(P),
                  P.defaultPrevented || En(S ?? document.body, { select: !0 }),
                  p.removeEventListener(Pa, w),
                  Yf.remove(T);
              }, 0);
          };
        }
      }, [p, g, w, T]);
    const R = v.useCallback(
      (S) => {
        if ((!i && !s) || T.paused) return;
        const k = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey,
          P = document.activeElement;
        if (k && P) {
          const L = S.currentTarget,
            [F, $] = qx(L);
          F && $
            ? !S.shiftKey && P === $
              ? (S.preventDefault(), i && En(F, { select: !0 }))
              : S.shiftKey &&
                P === F &&
                (S.preventDefault(), i && En($, { select: !0 }))
            : P === L && S.preventDefault();
        }
      },
      [i, s, T.paused]
    );
    return m.jsx(nt.div, { tabIndex: -1, ...f, ref: E, onKeyDown: R });
  });
kh.displayName = Gx;
function Qx(n, { select: o = !1 } = {}) {
  const i = document.activeElement;
  for (const s of n)
    if ((En(s, { select: o }), document.activeElement !== i)) return;
}
function qx(n) {
  const o = Rh(n),
    i = qf(o, n),
    s = qf(o.reverse(), n);
  return [i, s];
}
function Rh(n) {
  const o = [],
    i = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (s) => {
        const u = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || u
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; i.nextNode(); ) o.push(i.currentNode);
  return o;
}
function qf(n, o) {
  for (const i of n) if (!Yx(i, { upTo: o })) return i;
}
function Yx(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (o !== void 0 && n === o) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function Xx(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function En(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const i = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== i && Xx(n) && o && n.select();
  }
}
var Yf = Jx();
function Jx() {
  let n = [];
  return {
    add(o) {
      const i = n[0];
      o !== i && (i == null || i.pause()), (n = Xf(n, o)), n.unshift(o);
    },
    remove(o) {
      var i;
      (n = Xf(n, o)), (i = n[0]) == null || i.resume();
    },
  };
}
function Xf(n, o) {
  const i = [...n],
    s = i.indexOf(o);
  return s !== -1 && i.splice(s, 1), i;
}
function Zx(n) {
  return n.filter((o) => o.tagName !== "A");
}
var e1 = "Portal",
  Nh = v.forwardRef((n, o) => {
    var p;
    const { container: i, ...s } = n,
      [u, c] = v.useState(!1);
    sl(() => c(!0), []);
    const f =
      i ||
      (u &&
        ((p = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : p.body));
    return f ? _y.createPortal(m.jsx(nt.div, { ...s, ref: o }), f) : null;
  });
Nh.displayName = e1;
var Ta = 0;
function t1() {
  v.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", n[0] ?? Jf()),
      document.body.insertAdjacentElement("beforeend", n[1] ?? Jf()),
      Ta++,
      () => {
        Ta === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((o) => o.remove()),
          Ta--;
      }
    );
  }, []);
}
function Jf() {
  const n = document.createElement("span");
  return (
    n.setAttribute("data-radix-focus-guard", ""),
    (n.tabIndex = 0),
    (n.style.outline = "none"),
    (n.style.opacity = "0"),
    (n.style.position = "fixed"),
    (n.style.pointerEvents = "none"),
    n
  );
}
var zt = function () {
  return (
    (zt =
      Object.assign ||
      function (o) {
        for (var i, s = 1, u = arguments.length; s < u; s++) {
          i = arguments[s];
          for (var c in i)
            Object.prototype.hasOwnProperty.call(i, c) && (o[c] = i[c]);
        }
        return o;
      }),
    zt.apply(this, arguments)
  );
};
function bh(n, o) {
  var i = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) &&
      o.indexOf(s) < 0 &&
      (i[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, s = Object.getOwnPropertySymbols(n); u < s.length; u++)
      o.indexOf(s[u]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, s[u]) &&
        (i[s[u]] = n[s[u]]);
  return i;
}
function n1(n, o, i) {
  if (i || arguments.length === 2)
    for (var s = 0, u = o.length, c; s < u; s++)
      (c || !(s in o)) &&
        (c || (c = Array.prototype.slice.call(o, 0, s)), (c[s] = o[s]));
  return n.concat(c || Array.prototype.slice.call(o));
}
var Zi = "right-scroll-bar-position",
  el = "width-before-scroll-bar",
  r1 = "with-scroll-bars-hidden",
  o1 = "--removed-body-scroll-bar-size";
function ja(n, o) {
  return typeof n == "function" ? n(o) : n && (n.current = o), n;
}
function i1(n, o) {
  var i = v.useState(function () {
    return {
      value: n,
      callback: o,
      facade: {
        get current() {
          return i.value;
        },
        set current(s) {
          var u = i.value;
          u !== s && ((i.value = s), i.callback(s, u));
        },
      },
    };
  })[0];
  return (i.callback = o), i.facade;
}
var l1 = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  Zf = new WeakMap();
function s1(n, o) {
  var i = i1(null, function (s) {
    return n.forEach(function (u) {
      return ja(u, s);
    });
  });
  return (
    l1(
      function () {
        var s = Zf.get(i);
        if (s) {
          var u = new Set(s),
            c = new Set(n),
            f = i.current;
          u.forEach(function (p) {
            c.has(p) || ja(p, null);
          }),
            c.forEach(function (p) {
              u.has(p) || ja(p, f);
            });
        }
        Zf.set(i, n);
      },
      [n]
    ),
    i
  );
}
function a1(n) {
  return n;
}
function u1(n, o) {
  o === void 0 && (o = a1);
  var i = [],
    s = !1,
    u = {
      read: function () {
        if (s)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return i.length ? i[i.length - 1] : n;
      },
      useMedium: function (c) {
        var f = o(c, s);
        return (
          i.push(f),
          function () {
            i = i.filter(function (p) {
              return p !== f;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (s = !0; i.length; ) {
          var f = i;
          (i = []), f.forEach(c);
        }
        i = {
          push: function (p) {
            return c(p);
          },
          filter: function () {
            return i;
          },
        };
      },
      assignMedium: function (c) {
        s = !0;
        var f = [];
        if (i.length) {
          var p = i;
          (i = []), p.forEach(c), (f = i);
        }
        var y = function () {
            var w = f;
            (f = []), w.forEach(c);
          },
          g = function () {
            return Promise.resolve().then(y);
          };
        g(),
          (i = {
            push: function (w) {
              f.push(w), g();
            },
            filter: function (w) {
              return (f = f.filter(w)), i;
            },
          });
      },
    };
  return u;
}
function c1(n) {
  n === void 0 && (n = {});
  var o = u1(null);
  return (o.options = zt({ async: !0, ssr: !1 }, n)), o;
}
var Ph = function (n) {
  var o = n.sideCar,
    i = bh(n, ["sideCar"]);
  if (!o)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var s = o.read();
  if (!s) throw new Error("Sidecar medium not found");
  return v.createElement(s, zt({}, i));
};
Ph.isSideCarExport = !0;
function d1(n, o) {
  return n.useMedium(o), Ph;
}
var Th = c1(),
  _a = function () {},
  xl = v.forwardRef(function (n, o) {
    var i = v.useRef(null),
      s = v.useState({
        onScrollCapture: _a,
        onWheelCapture: _a,
        onTouchMoveCapture: _a,
      }),
      u = s[0],
      c = s[1],
      f = n.forwardProps,
      p = n.children,
      y = n.className,
      g = n.removeScrollBar,
      w = n.enabled,
      C = n.shards,
      E = n.sideCar,
      T = n.noIsolation,
      R = n.inert,
      S = n.allowPinchZoom,
      k = n.as,
      P = k === void 0 ? "div" : k,
      L = n.gapMode,
      F = bh(n, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      $ = E,
      H = s1([i, o]),
      V = zt(zt({}, F), u);
    return v.createElement(
      v.Fragment,
      null,
      w &&
        v.createElement($, {
          sideCar: Th,
          removeScrollBar: g,
          shards: C,
          noIsolation: T,
          inert: R,
          setCallbacks: c,
          allowPinchZoom: !!S,
          lockRef: i,
          gapMode: L,
        }),
      f
        ? v.cloneElement(v.Children.only(p), zt(zt({}, V), { ref: H }))
        : v.createElement(P, zt({}, V, { className: y, ref: H }), p)
    );
  });
xl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
xl.classNames = { fullWidth: el, zeroRight: Zi };
var f1 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function p1() {
  if (!document) return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var o = f1();
  return o && n.setAttribute("nonce", o), n;
}
function h1(n, o) {
  n.styleSheet
    ? (n.styleSheet.cssText = o)
    : n.appendChild(document.createTextNode(o));
}
function m1(n) {
  var o = document.head || document.getElementsByTagName("head")[0];
  o.appendChild(n);
}
var g1 = function () {
    var n = 0,
      o = null;
    return {
      add: function (i) {
        n == 0 && (o = p1()) && (h1(o, i), m1(o)), n++;
      },
      remove: function () {
        n--,
          !n && o && (o.parentNode && o.parentNode.removeChild(o), (o = null));
      },
    };
  },
  v1 = function () {
    var n = g1();
    return function (o, i) {
      v.useEffect(
        function () {
          return (
            n.add(o),
            function () {
              n.remove();
            }
          );
        },
        [o && i]
      );
    };
  },
  jh = function () {
    var n = v1(),
      o = function (i) {
        var s = i.styles,
          u = i.dynamic;
        return n(s, u), null;
      };
    return o;
  },
  y1 = { left: 0, top: 0, right: 0, gap: 0 },
  Oa = function (n) {
    return parseInt(n || "", 10) || 0;
  },
  w1 = function (n) {
    var o = window.getComputedStyle(document.body),
      i = o[n === "padding" ? "paddingLeft" : "marginLeft"],
      s = o[n === "padding" ? "paddingTop" : "marginTop"],
      u = o[n === "padding" ? "paddingRight" : "marginRight"];
    return [Oa(i), Oa(s), Oa(u)];
  },
  x1 = function (n) {
    if ((n === void 0 && (n = "margin"), typeof window > "u")) return y1;
    var o = w1(n),
      i = document.documentElement.clientWidth,
      s = window.innerWidth;
    return {
      left: o[0],
      top: o[1],
      right: o[2],
      gap: Math.max(0, s - i + o[2] - o[0]),
    };
  },
  S1 = jh(),
  xr = "data-scroll-locked",
  E1 = function (n, o, i, s) {
    var u = n.left,
      c = n.top,
      f = n.right,
      p = n.gap;
    return (
      i === void 0 && (i = "margin"),
      `
  .`
        .concat(
          r1,
          ` {
   overflow: hidden `
        )
        .concat(
          s,
          `;
   padding-right: `
        )
        .concat(p, "px ")
        .concat(
          s,
          `;
  }
  body[`
        )
        .concat(
          xr,
          `] {
    overflow: hidden `
        )
        .concat(
          s,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            o && "position: relative ".concat(s, ";"),
            i === "margin" &&
              `
    padding-left: `
                .concat(
                  u,
                  `px;
    padding-top: `
                )
                .concat(
                  c,
                  `px;
    padding-right: `
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(p, "px ")
                .concat(
                  s,
                  `;
    `
                ),
            i === "padding" &&
              "padding-right: ".concat(p, "px ").concat(s, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Zi,
          ` {
    right: `
        )
        .concat(p, "px ")
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(
          el,
          ` {
    margin-right: `
        )
        .concat(p, "px ")
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(Zi, " .")
        .concat(
          Zi,
          ` {
    right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(el, " .")
        .concat(
          el,
          ` {
    margin-right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  body[`
        )
        .concat(
          xr,
          `] {
    `
        )
        .concat(o1, ": ")
        .concat(
          p,
          `px;
  }
`
        )
    );
  },
  ep = function () {
    var n = parseInt(document.body.getAttribute(xr) || "0", 10);
    return isFinite(n) ? n : 0;
  },
  C1 = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(xr, (ep() + 1).toString()),
        function () {
          var n = ep() - 1;
          n <= 0
            ? document.body.removeAttribute(xr)
            : document.body.setAttribute(xr, n.toString());
        }
      );
    }, []);
  },
  k1 = function (n) {
    var o = n.noRelative,
      i = n.noImportant,
      s = n.gapMode,
      u = s === void 0 ? "margin" : s;
    C1();
    var c = v.useMemo(
      function () {
        return x1(u);
      },
      [u]
    );
    return v.createElement(S1, { styles: E1(c, !o, u, i ? "" : "!important") });
  },
  Qa = !1;
if (typeof window < "u")
  try {
    var Vi = Object.defineProperty({}, "passive", {
      get: function () {
        return (Qa = !0), !0;
      },
    });
    window.addEventListener("test", Vi, Vi),
      window.removeEventListener("test", Vi, Vi);
  } catch {
    Qa = !1;
  }
var gr = Qa ? { passive: !1 } : !1,
  R1 = function (n) {
    return n.tagName === "TEXTAREA";
  },
  _h = function (n, o) {
    if (!(n instanceof Element)) return !1;
    var i = window.getComputedStyle(n);
    return (
      i[o] !== "hidden" &&
      !(i.overflowY === i.overflowX && !R1(n) && i[o] === "visible")
    );
  },
  N1 = function (n) {
    return _h(n, "overflowY");
  },
  b1 = function (n) {
    return _h(n, "overflowX");
  },
  tp = function (n, o) {
    var i = o.ownerDocument,
      s = o;
    do {
      typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
      var u = Oh(n, s);
      if (u) {
        var c = Lh(n, s),
          f = c[1],
          p = c[2];
        if (f > p) return !0;
      }
      s = s.parentNode;
    } while (s && s !== i.body);
    return !1;
  },
  P1 = function (n) {
    var o = n.scrollTop,
      i = n.scrollHeight,
      s = n.clientHeight;
    return [o, i, s];
  },
  T1 = function (n) {
    var o = n.scrollLeft,
      i = n.scrollWidth,
      s = n.clientWidth;
    return [o, i, s];
  },
  Oh = function (n, o) {
    return n === "v" ? N1(o) : b1(o);
  },
  Lh = function (n, o) {
    return n === "v" ? P1(o) : T1(o);
  },
  j1 = function (n, o) {
    return n === "h" && o === "rtl" ? -1 : 1;
  },
  _1 = function (n, o, i, s, u) {
    var c = j1(n, window.getComputedStyle(o).direction),
      f = c * s,
      p = i.target,
      y = o.contains(p),
      g = !1,
      w = f > 0,
      C = 0,
      E = 0;
    do {
      var T = Lh(n, p),
        R = T[0],
        S = T[1],
        k = T[2],
        P = S - k - c * R;
      (R || P) && Oh(n, p) && ((C += P), (E += R)),
        p instanceof ShadowRoot ? (p = p.host) : (p = p.parentNode);
    } while ((!y && p !== document.body) || (y && (o.contains(p) || o === p)));
    return (
      ((w && (Math.abs(C) < 1 || !u)) || (!w && (Math.abs(E) < 1 || !u))) &&
        (g = !0),
      g
    );
  },
  Hi = function (n) {
    return "changedTouches" in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  np = function (n) {
    return [n.deltaX, n.deltaY];
  },
  rp = function (n) {
    return n && "current" in n ? n.current : n;
  },
  O1 = function (n, o) {
    return n[0] === o[0] && n[1] === o[1];
  },
  L1 = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        n,
        ` {pointer-events: all;}
`
      );
  },
  A1 = 0,
  vr = [];
function D1(n) {
  var o = v.useRef([]),
    i = v.useRef([0, 0]),
    s = v.useRef(),
    u = v.useState(A1++)[0],
    c = v.useState(jh)[0],
    f = v.useRef(n);
  v.useEffect(
    function () {
      f.current = n;
    },
    [n]
  ),
    v.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add("block-interactivity-".concat(u));
          var S = n1([n.lockRef.current], (n.shards || []).map(rp), !0).filter(
            Boolean
          );
          return (
            S.forEach(function (k) {
              return k.classList.add("allow-interactivity-".concat(u));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(u)),
                S.forEach(function (k) {
                  return k.classList.remove("allow-interactivity-".concat(u));
                });
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards]
    );
  var p = v.useCallback(function (S, k) {
      if (
        ("touches" in S && S.touches.length === 2) ||
        (S.type === "wheel" && S.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var P = Hi(S),
        L = i.current,
        F = "deltaX" in S ? S.deltaX : L[0] - P[0],
        $ = "deltaY" in S ? S.deltaY : L[1] - P[1],
        H,
        V = S.target,
        Q = Math.abs(F) > Math.abs($) ? "h" : "v";
      if ("touches" in S && Q === "h" && V.type === "range") return !1;
      var ee = tp(Q, V);
      if (!ee) return !0;
      if ((ee ? (H = Q) : ((H = Q === "v" ? "h" : "v"), (ee = tp(Q, V))), !ee))
        return !1;
      if (
        (!s.current && "changedTouches" in S && (F || $) && (s.current = H), !H)
      )
        return !0;
      var se = s.current || H;
      return _1(se, k, S, se === "h" ? F : $, !0);
    }, []),
    y = v.useCallback(function (S) {
      var k = S;
      if (!(!vr.length || vr[vr.length - 1] !== c)) {
        var P = "deltaY" in k ? np(k) : Hi(k),
          L = o.current.filter(function (H) {
            return (
              H.name === k.type &&
              (H.target === k.target || k.target === H.shadowParent) &&
              O1(H.delta, P)
            );
          })[0];
        if (L && L.should) {
          k.cancelable && k.preventDefault();
          return;
        }
        if (!L) {
          var F = (f.current.shards || [])
              .map(rp)
              .filter(Boolean)
              .filter(function (H) {
                return H.contains(k.target);
              }),
            $ = F.length > 0 ? p(k, F[0]) : !f.current.noIsolation;
          $ && k.cancelable && k.preventDefault();
        }
      }
    }, []),
    g = v.useCallback(function (S, k, P, L) {
      var F = { name: S, delta: k, target: P, should: L, shadowParent: I1(P) };
      o.current.push(F),
        setTimeout(function () {
          o.current = o.current.filter(function ($) {
            return $ !== F;
          });
        }, 1);
    }, []),
    w = v.useCallback(function (S) {
      (i.current = Hi(S)), (s.current = void 0);
    }, []),
    C = v.useCallback(function (S) {
      g(S.type, np(S), S.target, p(S, n.lockRef.current));
    }, []),
    E = v.useCallback(function (S) {
      g(S.type, Hi(S), S.target, p(S, n.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      vr.push(c),
      n.setCallbacks({
        onScrollCapture: C,
        onWheelCapture: C,
        onTouchMoveCapture: E,
      }),
      document.addEventListener("wheel", y, gr),
      document.addEventListener("touchmove", y, gr),
      document.addEventListener("touchstart", w, gr),
      function () {
        (vr = vr.filter(function (S) {
          return S !== c;
        })),
          document.removeEventListener("wheel", y, gr),
          document.removeEventListener("touchmove", y, gr),
          document.removeEventListener("touchstart", w, gr);
      }
    );
  }, []);
  var T = n.removeScrollBar,
    R = n.inert;
  return v.createElement(
    v.Fragment,
    null,
    R ? v.createElement(c, { styles: L1(u) }) : null,
    T ? v.createElement(k1, { gapMode: n.gapMode }) : null
  );
}
function I1(n) {
  for (var o = null; n !== null; )
    n instanceof ShadowRoot && ((o = n.host), (n = n.host)), (n = n.parentNode);
  return o;
}
const F1 = d1(Th, D1);
var Ah = v.forwardRef(function (n, o) {
  return v.createElement(xl, zt({}, n, { ref: o, sideCar: F1 }));
});
Ah.classNames = xl.classNames;
var M1 = function (n) {
    if (typeof document > "u") return null;
    var o = Array.isArray(n) ? n[0] : n;
    return o.ownerDocument.body;
  },
  yr = new WeakMap(),
  Ki = new WeakMap(),
  Gi = {},
  La = 0,
  Dh = function (n) {
    return n && (n.host || Dh(n.parentNode));
  },
  z1 = function (n, o) {
    return o
      .map(function (i) {
        if (n.contains(i)) return i;
        var s = Dh(i);
        return s && n.contains(s)
          ? s
          : (console.error(
              "aria-hidden",
              i,
              "in not contained inside",
              n,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (i) {
        return !!i;
      });
  },
  B1 = function (n, o, i, s) {
    var u = z1(o, Array.isArray(n) ? n : [n]);
    Gi[i] || (Gi[i] = new WeakMap());
    var c = Gi[i],
      f = [],
      p = new Set(),
      y = new Set(u),
      g = function (C) {
        !C || p.has(C) || (p.add(C), g(C.parentNode));
      };
    u.forEach(g);
    var w = function (C) {
      !C ||
        y.has(C) ||
        Array.prototype.forEach.call(C.children, function (E) {
          if (p.has(E)) w(E);
          else
            try {
              var T = E.getAttribute(s),
                R = T !== null && T !== "false",
                S = (yr.get(E) || 0) + 1,
                k = (c.get(E) || 0) + 1;
              yr.set(E, S),
                c.set(E, k),
                f.push(E),
                S === 1 && R && Ki.set(E, !0),
                k === 1 && E.setAttribute(i, "true"),
                R || E.setAttribute(s, "true");
            } catch (P) {
              console.error("aria-hidden: cannot operate on ", E, P);
            }
        });
    };
    return (
      w(o),
      p.clear(),
      La++,
      function () {
        f.forEach(function (C) {
          var E = yr.get(C) - 1,
            T = c.get(C) - 1;
          yr.set(C, E),
            c.set(C, T),
            E || (Ki.has(C) || C.removeAttribute(s), Ki.delete(C)),
            T || C.removeAttribute(i);
        }),
          La--,
          La ||
            ((yr = new WeakMap()),
            (yr = new WeakMap()),
            (Ki = new WeakMap()),
            (Gi = {}));
      }
    );
  },
  U1 = function (n, o, i) {
    i === void 0 && (i = "data-aria-hidden");
    var s = Array.from(Array.isArray(n) ? n : [n]),
      u = M1(n);
    return u
      ? (s.push.apply(s, Array.from(u.querySelectorAll("[aria-live]"))),
        B1(s, u, i, "aria-hidden"))
      : function () {
          return null;
        };
  },
  fu = "Dialog",
  [Ih, sS] = yl(fu),
  [$1, Ot] = Ih(fu),
  Fh = (n) => {
    const {
        __scopeDialog: o,
        children: i,
        open: s,
        defaultOpen: u,
        onOpenChange: c,
        modal: f = !0,
      } = n,
      p = v.useRef(null),
      y = v.useRef(null),
      [g = !1, w] = uu({ prop: s, defaultProp: u, onChange: c });
    return m.jsx($1, {
      scope: o,
      triggerRef: p,
      contentRef: y,
      contentId: Eo(),
      titleId: Eo(),
      descriptionId: Eo(),
      open: g,
      onOpenChange: w,
      onOpenToggle: v.useCallback(() => w((C) => !C), [w]),
      modal: f,
      children: i,
    });
  };
Fh.displayName = fu;
var Mh = "DialogTrigger",
  W1 = v.forwardRef((n, o) => {
    const { __scopeDialog: i, ...s } = n,
      u = Ot(Mh, i),
      c = Bt(o, u.triggerRef);
    return m.jsx(nt.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": u.open,
      "aria-controls": u.contentId,
      "data-state": mu(u.open),
      ...s,
      ref: c,
      onClick: He(n.onClick, u.onOpenToggle),
    });
  });
W1.displayName = Mh;
var pu = "DialogPortal",
  [V1, zh] = Ih(pu, { forceMount: void 0 }),
  Bh = (n) => {
    const { __scopeDialog: o, forceMount: i, children: s, container: u } = n,
      c = Ot(pu, o);
    return m.jsx(V1, {
      scope: o,
      forceMount: i,
      children: v.Children.map(s, (f) =>
        m.jsx(jo, {
          present: i || c.open,
          children: m.jsx(Nh, { asChild: !0, container: u, children: f }),
        })
      ),
    });
  };
Bh.displayName = pu;
var al = "DialogOverlay",
  Uh = v.forwardRef((n, o) => {
    const i = zh(al, n.__scopeDialog),
      { forceMount: s = i.forceMount, ...u } = n,
      c = Ot(al, n.__scopeDialog);
    return c.modal
      ? m.jsx(jo, {
          present: s || c.open,
          children: m.jsx(H1, { ...u, ref: o }),
        })
      : null;
  });
Uh.displayName = al;
var H1 = v.forwardRef((n, o) => {
    const { __scopeDialog: i, ...s } = n,
      u = Ot(al, i);
    return m.jsx(Ah, {
      as: Ro,
      allowPinchZoom: !0,
      shards: [u.contentRef],
      children: m.jsx(nt.div, {
        "data-state": mu(u.open),
        ...s,
        ref: o,
        style: { pointerEvents: "auto", ...s.style },
      }),
    });
  }),
  Vn = "DialogContent",
  $h = v.forwardRef((n, o) => {
    const i = zh(Vn, n.__scopeDialog),
      { forceMount: s = i.forceMount, ...u } = n,
      c = Ot(Vn, n.__scopeDialog);
    return m.jsx(jo, {
      present: s || c.open,
      children: c.modal
        ? m.jsx(K1, { ...u, ref: o })
        : m.jsx(G1, { ...u, ref: o }),
    });
  });
$h.displayName = Vn;
var K1 = v.forwardRef((n, o) => {
    const i = Ot(Vn, n.__scopeDialog),
      s = v.useRef(null),
      u = Bt(o, i.contentRef, s);
    return (
      v.useEffect(() => {
        const c = s.current;
        if (c) return U1(c);
      }, []),
      m.jsx(Wh, {
        ...n,
        ref: u,
        trapFocus: i.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: He(n.onCloseAutoFocus, (c) => {
          var f;
          c.preventDefault(), (f = i.triggerRef.current) == null || f.focus();
        }),
        onPointerDownOutside: He(n.onPointerDownOutside, (c) => {
          const f = c.detail.originalEvent,
            p = f.button === 0 && f.ctrlKey === !0;
          (f.button === 2 || p) && c.preventDefault();
        }),
        onFocusOutside: He(n.onFocusOutside, (c) => c.preventDefault()),
      })
    );
  }),
  G1 = v.forwardRef((n, o) => {
    const i = Ot(Vn, n.__scopeDialog),
      s = v.useRef(!1),
      u = v.useRef(!1);
    return m.jsx(Wh, {
      ...n,
      ref: o,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        var f, p;
        (f = n.onCloseAutoFocus) == null || f.call(n, c),
          c.defaultPrevented ||
            (s.current || (p = i.triggerRef.current) == null || p.focus(),
            c.preventDefault()),
          (s.current = !1),
          (u.current = !1);
      },
      onInteractOutside: (c) => {
        var y, g;
        (y = n.onInteractOutside) == null || y.call(n, c),
          c.defaultPrevented ||
            ((s.current = !0),
            c.detail.originalEvent.type === "pointerdown" && (u.current = !0));
        const f = c.target;
        ((g = i.triggerRef.current) == null ? void 0 : g.contains(f)) &&
          c.preventDefault(),
          c.detail.originalEvent.type === "focusin" &&
            u.current &&
            c.preventDefault();
      },
    });
  }),
  Wh = v.forwardRef((n, o) => {
    const {
        __scopeDialog: i,
        trapFocus: s,
        onOpenAutoFocus: u,
        onCloseAutoFocus: c,
        ...f
      } = n,
      p = Ot(Vn, i),
      y = v.useRef(null),
      g = Bt(o, y);
    return (
      t1(),
      m.jsxs(m.Fragment, {
        children: [
          m.jsx(kh, {
            asChild: !0,
            loop: !0,
            trapped: s,
            onMountAutoFocus: u,
            onUnmountAutoFocus: c,
            children: m.jsx(Eh, {
              role: "dialog",
              id: p.contentId,
              "aria-describedby": p.descriptionId,
              "aria-labelledby": p.titleId,
              "data-state": mu(p.open),
              ...f,
              ref: g,
              onDismiss: () => p.onOpenChange(!1),
            }),
          }),
          m.jsxs(m.Fragment, {
            children: [
              m.jsx(Q1, { titleId: p.titleId }),
              m.jsx(Y1, { contentRef: y, descriptionId: p.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  hu = "DialogTitle",
  Vh = v.forwardRef((n, o) => {
    const { __scopeDialog: i, ...s } = n,
      u = Ot(hu, i);
    return m.jsx(nt.h2, { id: u.titleId, ...s, ref: o });
  });
Vh.displayName = hu;
var Hh = "DialogDescription",
  Kh = v.forwardRef((n, o) => {
    const { __scopeDialog: i, ...s } = n,
      u = Ot(Hh, i);
    return m.jsx(nt.p, { id: u.descriptionId, ...s, ref: o });
  });
Kh.displayName = Hh;
var Gh = "DialogClose",
  Qh = v.forwardRef((n, o) => {
    const { __scopeDialog: i, ...s } = n,
      u = Ot(Gh, i);
    return m.jsx(nt.button, {
      type: "button",
      ...s,
      ref: o,
      onClick: He(n.onClick, () => u.onOpenChange(!1)),
    });
  });
Qh.displayName = Gh;
function mu(n) {
  return n ? "open" : "closed";
}
var qh = "DialogTitleWarning",
  [aS, Yh] = nx(qh, { contentName: Vn, titleName: hu, docsSlug: "dialog" }),
  Q1 = ({ titleId: n }) => {
    const o = Yh(qh),
      i = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
    return (
      v.useEffect(() => {
        n && (document.getElementById(n) || console.error(i));
      }, [i, n]),
      null
    );
  },
  q1 = "DialogDescriptionWarning",
  Y1 = ({ contentRef: n, descriptionId: o }) => {
    const s = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      Yh(q1).contentName
    }}.`;
    return (
      v.useEffect(() => {
        var c;
        const u =
          (c = n.current) == null ? void 0 : c.getAttribute("aria-describedby");
        o && u && (document.getElementById(o) || console.warn(s));
      }, [s, n, o]),
      null
    );
  },
  X1 = Fh,
  J1 = Bh,
  Xh = Uh,
  Jh = $h,
  Zh = Vh,
  em = Kh,
  Z1 = Qh;
const Aa = X1,
  eS = J1,
  tm = v.forwardRef(({ className: n, ...o }, i) =>
    m.jsx(Xh, {
      ref: i,
      className: Xe(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        n
      ),
      ...o,
    })
  );
tm.displayName = Xh.displayName;
const tl = v.forwardRef(({ className: n, children: o, ...i }, s) =>
  m.jsxs(eS, {
    children: [
      m.jsx(tm, {}),
      m.jsxs(Jh, {
        ref: s,
        className: Xe(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          n
        ),
        ...i,
        children: [
          o,
          m.jsxs(Z1, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              m.jsx(C0, { className: "h-4 w-4" }),
              m.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
tl.displayName = Jh.displayName;
const nl = ({ className: n, ...o }) =>
  m.jsx("div", {
    className: Xe("flex flex-col space-y-1.5 text-center sm:text-left", n),
    ...o,
  });
nl.displayName = "DialogHeader";
const rl = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx(Zh, {
    ref: i,
    className: Xe("text-lg font-semibold leading-none tracking-tight", n),
    ...o,
  })
);
rl.displayName = Zh.displayName;
const tS = v.forwardRef(({ className: n, ...o }, i) =>
  m.jsx(em, { ref: i, className: Xe("text-sm text-muted-foreground", n), ...o })
);
tS.displayName = em.displayName;
function nS({ token: n, role: o, id: i }) {
  const [s, u] = v.useState([]),
    [c, f] = v.useState([]),
    [p, y] = v.useState([]),
    [g, w] = v.useState([]),
    [C, E] = v.useState("adminDetails"),
    [T, R] = v.useState(null),
    [S, k] = v.useState(null),
    [P, L] = v.useState({
      title: "",
      author: "",
      genre: "",
      copies: "",
      price: "",
    }),
    [F, $] = v.useState(!1),
    H = async () => {
      try {
        const I = await pe.get(`https://book-sphere-1.onrender.com/${o}/${i}`, {
          headers: { Authorization: `Bearer ${n}` },
        });
        u(I.data);
      } catch (I) {
        console.error(I);
      }
    },
    V = async () => {
      try {
        const I = await pe.get(
          `https://book-sphere-1.onrender.com/${o}/${i}/users`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        f(I.data);
      } catch (I) {
        console.error(I);
      }
    },
    Q = async () => {
      try {
        await pe.put(
          `https://book-sphere-1.onrender.com/${o}/${i}/user/edit/${S.id}`,
          S,
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          alert("User details updated successfully!"),
          k(null);
      } catch (I) {
        console.error(I), alert("Failed to reset user details.");
      }
    },
    ee = async () => {
      try {
        const I = await pe.get(
          `https://book-sphere-1.onrender.com/${o}/${i}/books`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        console.log(I.data), y(I.data);
      } catch (I) {
        console.error(I);
      }
    },
    se = async () => {
      console.log(T);
      try {
        await pe.put(
          `https://book-sphere-1.onrender.com/${o}/${i}/book/edit/${T.id}`,
          {
            title: T.title,
            author: T.author,
            genre: T.genre,
            price: T.price,
            copies: T.copies,
          },
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          alert("Book details updated successfully!"),
          R(null);
      } catch (I) {
        console.error(I), alert("Failed to update book details.");
      }
    },
    ve = async (I) => {
      try {
        await pe.delete(
          `https://book-sphere-1.onrender.com/${o}/${i}/book/${I}`,
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          alert("Book deleted successfully!"),
          ee();
      } catch (Fe) {
        console.error(Fe), alert("Failed to delete book.");
      }
    },
    De = async () => {
      try {
        const I = await pe.get(
          `https://book-sphere-1.onrender.com/${o}/${i}/rentals/details`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        w(I.data);
      } catch (I) {
        console.error(I);
      }
    },
    ae = async () => {
      console.log(P);
      try {
        await pe.post(
          `https://book-sphere-1.onrender.com/${o}/${i}/book/add`,
          {
            title: P.title,
            author: P.author,
            genre: P.genre,
            copies: P.copies,
            price: P.price,
          },
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          alert("Book added successfully!"),
          L({ title: "", author: "", genre: "", copies: "", price: "" }),
          $(!1),
          ee();
      } catch (I) {
        console.error(I), alert("Failed to add book.");
      }
    };
  return (
    v.useEffect(() => {
      H(), V(), ee(), De();
    }, []),
    m.jsxs("div", {
      className: "max-w-4xl mx-auto p-6",
      children: [
        m.jsxs(Lx, {
          value: C,
          onValueChange: E,
          children: [
            m.jsxs(xh, {
              className:
                "mb-4 lg:block justify-center sm:block md:block max-sm: hidden",
              children: [
                m.jsx(wo, { value: "adminDetails", children: "Admin Details" }),
                m.jsx(wo, {
                  value: "usersDetails",
                  children: "Customers Details",
                }),
                m.jsx(wo, { value: "books", children: "All Books" }),
                m.jsx(wo, { value: "rent", children: "Rented Books Details" }),
              ],
            }),
            m.jsxs("select", {
              className:
                "lg:hidden sm:hidden md:hidden max-sm: block px-4 py-2 w-full",
              name: "tabs",
              id: "tabs",
              value: C,
              onChange: (I) => E(I.target.value),
              children: [
                m.jsx("option", {
                  value: "adminDetails",
                  children: "Admin Details",
                }),
                m.jsx("option", {
                  value: "usersDetails",
                  children: "Customers Details",
                }),
                m.jsx("option", { value: "books", children: "All Books" }),
                m.jsx("option", {
                  value: "rent",
                  children: "Rented Books Details",
                }),
              ],
            }),
            m.jsxs(xo, {
              value: "adminDetails",
              children: [
                m.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "Admin Details",
                }),
                m.jsxs(So, {
                  className: "p-4",
                  children: [
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "ID:" }),
                        " ",
                        s.id,
                      ],
                    }),
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "Name:" }),
                        " ",
                        s.name,
                      ],
                    }),
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "Phone:" }),
                        " ",
                        s.phone,
                      ],
                    }),
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "Role:" }),
                        " ",
                        s.role,
                      ],
                    }),
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "Admin since:" }),
                        " ",
                        s.created_at && new Date(s.created_at).toDateString(),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs(xo, {
              value: "usersDetails",
              children: [
                m.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "Customers Details",
                }),
                m.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: c.map((I) =>
                    m.jsxs(
                      So,
                      {
                        className: "p-4 flex ",
                        children: [
                          m.jsxs("section", {
                            children: [
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "ID:" }),
                                  " ",
                                  I.id,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Name:" }),
                                  " ",
                                  I.name,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Phone:" }),
                                  " ",
                                  I.phone,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Role:" }),
                                  " ",
                                  I.role,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", {
                                    children: "Customer since:",
                                  }),
                                  " ",
                                  new Date(I.created_at).toLocaleDateString(),
                                ],
                              }),
                            ],
                          }),
                          m.jsx(Xt, {
                            className: "ml-auto bg-green-600",
                            onClick: () =>
                              k({
                                ...I,
                                id: I.id,
                                name: I.name,
                                phone: I.phone,
                                role: I.role,
                                newPassword: "",
                              }),
                            children: "Edit",
                          }),
                        ],
                      },
                      I.id
                    )
                  ),
                }),
              ],
            }),
            m.jsxs(xo, {
              value: "books",
              children: [
                m.jsxs("section", {
                  className: "flex justify-between items-center mb-4",
                  children: [
                    m.jsx("h2", {
                      className: "text-2xl font-semibold mb-4",
                      children: "All Books",
                    }),
                    m.jsx(E0, {
                      onClick: () => $(!F),
                      className:
                        "cursor-pointer text-teal-600 hover:text-teal-800 transition-all size-12",
                    }),
                  ],
                }),
                m.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: p.map((I) =>
                    m.jsxs(
                      So,
                      {
                        className: "p-4",
                        children: [
                          m.jsxs("section", {
                            className: "mb-4",
                            children: [
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "ID:" }),
                                  " ",
                                  I.id,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Title:" }),
                                  " ",
                                  I.title,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Author:" }),
                                  " ",
                                  I.author,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Genre:" }),
                                  " ",
                                  I.genre,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Price:" }),
                                  " ",
                                  I.price,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", {
                                    children: "Total Copies:",
                                  }),
                                  " ",
                                  I.copies,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", {
                                    children: "Available Copies:",
                                  }),
                                  " ",
                                  I.available_copies,
                                ],
                              }),
                            ],
                          }),
                          m.jsxs("section", {
                            className: "flex gap-2 justify-between",
                            children: [
                              m.jsx(Xt, {
                                variant: "destructive",
                                onClick: () => ve(I.id),
                                children: "Delete",
                              }),
                              m.jsx(Xt, {
                                variant: "outline",
                                onClick: () => R(I),
                                children: "Edit",
                              }),
                            ],
                          }),
                        ],
                      },
                      I.id
                    )
                  ),
                }),
              ],
            }),
            m.jsxs(xo, {
              value: "rent",
              children: [
                m.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "Rented Books Details",
                }),
                m.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: g.map((I) =>
                    m.jsxs(
                      So,
                      {
                        className: "p-4",
                        children: [
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Rental ID:" }),
                              " ",
                              I.rental_id,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Book ID:" }),
                              " ",
                              I.book_id,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Book Title:" }),
                              " ",
                              I.book_title,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "User ID:" }),
                              " ",
                              I.user_id,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Customer Name:" }),
                              " ",
                              I.customer_name,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Customer Phone:" }),
                              " ",
                              I.customer_phone,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Rent Date:" }),
                              " ",
                              I.rent_date &&
                                new Date(I.rent_date).toLocaleDateString(),
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Return Date:" }),
                              " ",
                              I.return_date
                                ? new Date(I.return_date).toLocaleDateString()
                                : "Not yet returned",
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Returned:" }),
                              " ",
                              I.returned
                                ? m.jsx("span", {
                                    className: "text-green-600 font-bold",
                                    children: "Yes",
                                  })
                                : m.jsx("span", {
                                    className: "text-red-600 font-bold",
                                    children: "No",
                                  }),
                            ],
                          }),
                        ],
                      },
                      I.rental_id
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        T &&
          m.jsx(Aa, {
            open: !!T,
            onOpenChange: () => R(null),
            children: m.jsxs(tl, {
              children: [
                m.jsx(nl, { children: m.jsx(rl, { children: "Edit Book" }) }),
                m.jsx(tt, {
                  value: T.title,
                  onChange: (I) => R({ ...T, title: I.target.value }),
                  placeholder: "Title",
                }),
                m.jsx(tt, {
                  type: "text",
                  value: T.author,
                  onChange: (I) => R({ ...T, author: I.target.value }),
                  placeholder: "Author",
                }),
                m.jsx(tt, {
                  type: "text",
                  value: T.genre,
                  onChange: (I) => R({ ...T, genre: I.target.value }),
                  placeholder: "Genre",
                }),
                m.jsx(tt, {
                  type: "number",
                  value: T.price,
                  onChange: (I) => R({ ...T, price: parseInt(I.target.value) }),
                  placeholder: "Price",
                }),
                m.jsx(tt, {
                  type: "number",
                  value: T.copies,
                  onChange: (I) =>
                    R({ ...T, copies: parseInt(I.target.value), id: T.id }),
                  placeholder: "Total Copies",
                }),
                m.jsx(Xt, { onClick: se, children: "Update" }),
              ],
            }),
          }),
        S &&
          m.jsx(Aa, {
            open: !!S,
            onOpenChange: () => k(null),
            children: m.jsxs(tl, {
              children: [
                m.jsx(nl, {
                  children: m.jsx(rl, { children: "Reset User Details" }),
                }),
                m.jsx(tt, { value: S.id, readOnly: !0 }),
                m.jsx(tt, {
                  value: S.name,
                  onChange: (I) => k({ ...S, name: I.target.value }),
                  placeholder: "Name",
                }),
                m.jsx(tt, {
                  value: S.phone,
                  onChange: (I) => k({ ...S, phone: I.target.value }),
                  placeholder: "Phone",
                }),
                m.jsxs("select", {
                  className: "w-full p-2 border border-gray-300 rounded-md",
                  defaultValue: S.role,
                  onChange: (I) => k({ ...S, role: I.target.value }),
                  children: [
                    m.jsx("option", { value: "user", children: "User" }),
                    m.jsx("option", { value: "admin", children: "Admin" }),
                  ],
                }),
                m.jsx(tt, {
                  value: S.newPassword,
                  onChange: (I) => k({ ...S, newPassword: I.target.value }),
                  placeholder: "New Password",
                  type: "password",
                }),
                m.jsx(Xt, { onClick: Q, children: "Reset" }),
              ],
            }),
          }),
        F &&
          m.jsx(Aa, {
            open: !!F,
            onOpenChange: () => $(!1),
            children: m.jsxs(tl, {
              children: [
                m.jsx(nl, {
                  children: m.jsx(rl, { children: "Add New Book" }),
                }),
                m.jsx(tt, {
                  value: P.title,
                  onChange: (I) => L({ ...P, title: I.target.value }),
                  placeholder: "Title",
                }),
                m.jsx(tt, {
                  value: P.author,
                  onChange: (I) => L({ ...P, author: I.target.value }),
                  placeholder: "Author",
                }),
                m.jsx(tt, {
                  value: P.genre,
                  onChange: (I) => L({ ...P, genre: I.target.value }),
                  placeholder: "Genre",
                }),
                m.jsx(tt, {
                  value: P.price,
                  onChange: (I) => L({ ...P, price: parseInt(I.target.value) }),
                  placeholder: "Price",
                }),
                m.jsx(tt, {
                  value: P.copies,
                  onChange: (I) =>
                    L({ ...P, copies: parseInt(I.target.value) }),
                  placeholder: "Total Copies",
                }),
                m.jsx(Xt, { onClick: ae, children: "Add" }),
              ],
            }),
          }),
      ],
    })
  );
}
function rS({ setRole: n, setToken: o, setId: i }) {
  const [s, u] = v.useState({ name: "", password: "", role: "user" }),
    [c, f] = v.useState(""),
    p = cl(),
    y = async (g) => {
      var w, C;
      if ((g.preventDefault(), !s.name || !s.password)) {
        f("All fields are required!");
        return;
      }
      try {
        const E = await pe.post("https://book-sphere-1.onrender.com/login", s);
        f(""),
          o(E.data.token),
          n(E.data.user.role),
          i(E.data.user.id),
          localStorage.setItem("token", E.data.token),
          localStorage.setItem("role", E.data.user.role),
          localStorage.setItem("id", E.data.user.id),
          E.data.user.role === "admin"
            ? p("/admin")
            : p(`/user/${E.data.user.id}`);
      } catch (E) {
        f(
          ((C = (w = E.response) == null ? void 0 : w.data) == null
            ? void 0
            : C.error) || "Something went wrong! Please try again."
        );
      }
    };
  return m.jsx("div", {
    className: "bg-[url('../src/assets/bookloginbg.avif')] bg-cover h-screen",
    children: m.jsxs("section", {
      className:
        "text-sky-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col border border-cyan-800 bg-opacity-20 backdrop-blur-sm bg-purple-800 gap-4 p-10 place-items-center rounded-2xl",
      children: [
        m.jsxs("form", {
          className: "flex flex-col gap-8 items-center text-black",
          onSubmit: y,
          children: [
            m.jsx("input", {
              className: "p-2 rounded-lg",
              type: "text",
              placeholder: "Name",
              value: s.name,
              onChange: (g) => u({ ...s, name: g.target.value }),
              required: !0,
            }),
            m.jsx("input", {
              className: "p-2 rounded-lg",
              type: "password",
              placeholder: "Password",
              value: s.password,
              onChange: (g) => u({ ...s, password: g.target.value }),
              required: !0,
            }),
            m.jsxs("select", {
              className: "p-2 rounded-lg w-full",
              value: s.role,
              onChange: (g) => u({ ...s, role: g.target.value }),
              children: [
                m.jsx("option", { value: "user", children: "User" }),
                m.jsx("option", { value: "admin", children: "Admin" }),
              ],
            }),
            m.jsx("button", {
              type: "submit",
              className: "bg-red-500 text-white p-3 font-bold rounded-lg",
              children: "Login",
            }),
            m.jsx("a", {
              className: "text-white",
              href: "/register",
              children: "Register",
            }),
          ],
        }),
        c && m.jsx("div", { className: "text-red-500 mt-2", children: c }),
      ],
    }),
  });
}
function oS() {
  const [n, o] = v.useState({
      name: "",
      phone: "",
      password: "",
      role: "user",
    }),
    [i, s] = v.useState(""),
    u = async (c) => {
      var f, p;
      c.preventDefault();
      try {
        const y = await pe.post(
          "https://book-sphere-1.onrender.com/register",
          n
        );
        console.log("Registration successful:", y.data), s("");
      } catch (y) {
        s(
          ((p = (f = y.response) == null ? void 0 : f.data) == null
            ? void 0
            : p.error) || "Something went wrong!"
        );
      }
    };
  return m.jsx("div", {
    className: "bg-[url('../src/assets/bookloginbg.avif')] bg-cover h-screen",
    children: m.jsxs("section", {
      className:
        "text-sky-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col border border-cyan-800 bg-opacity-20 backdrop-blur-sm bg-purple-800 gap-4 p-10 place-items-center rounded-2xl",
      children: [
        m.jsxs("form", {
          className: "flex flex-col gap-8 items-center text-black",
          onSubmit: u,
          children: [
            m.jsx("input", {
              className: "p-2 ",
              type: "text",
              placeholder: "name",
              value: n.name,
              onChange: (c) => o({ ...n, name: c.target.value }),
              required: !0,
            }),
            m.jsx("input", {
              className: "p-2",
              type: "text",
              placeholder: "Phone",
              value: n.phone,
              onChange: (c) => o({ ...n, phone: c.target.value }),
              required: !0,
            }),
            m.jsx("input", {
              className: "p-2",
              type: "password",
              placeholder: "Password",
              value: n.password,
              onChange: (c) => o({ ...n, password: c.target.value }),
              required: !0,
            }),
            m.jsxs("select", {
              className: "p-2 w-full",
              value: n.role,
              onChange: (c) => o({ ...n, role: c.target.value }),
              children: [
                m.jsx("option", {
                  value: "",
                  disabled: !0,
                  children: "Select Role",
                }),
                m.jsx("option", { value: "user", children: "user" }),
                m.jsx("option", { value: "admin", children: "admin" }),
              ],
            }),
            m.jsx("button", {
              className: "bg-red-600 p-3 text-white rounded-lg",
              type: "submit",
              children: "Register",
            }),
            m.jsx("a", {
              className: "text-white",
              href: "/login",
              children: "Login",
            }),
          ],
        }),
        m.jsx("div", {
          children: i && m.jsx("p", { className: "text-red-500", children: i }),
        }),
      ],
    }),
  });
}
function iS() {
  const [n, o] = v.useState(""),
    [i, s] = v.useState(""),
    [u, c] = v.useState("");
  v.useState("details");
  const f = () => {
    o(""),
      s(""),
      c(""),
      localStorage.removeItem("token"),
      localStorage.removeItem("role"),
      localStorage.removeItem("id");
  };
  return (
    v.useEffect(() => {
      const p = localStorage.getItem("token"),
        y = localStorage.getItem("role"),
        g = localStorage.getItem("id");
      p && (o(p), s(y), c(g));
    }, []),
    m.jsxs(Sy, {
      children: [
        m.jsx("nav", {
          className:
            "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4 shadow-lg",
          children: m.jsxs("div", {
            className: "container mx-auto flex justify-between items-center",
            children: [
              m.jsx("div", { className: "text-white text-2xl font-extrabold" }),
              m.jsxs("div", {
                className: "flex items-center space-x-6 text-white text-lg",
                children: [
                  m.jsx(Bn, {
                    to: "/",
                    className:
                      "hover:text-indigo-200 transition-colors duration-200",
                    children: "Home",
                  }),
                  !n &&
                    m.jsxs(m.Fragment, {
                      children: [
                        m.jsx(Bn, {
                          to: "/login",
                          className:
                            "hover:text-indigo-200 transition-colors duration-200",
                          children: "Login",
                        }),
                        m.jsx(Bn, {
                          to: "/register",
                          className:
                            "hover:text-indigo-200 transition-colors duration-200",
                          children: "Register",
                        }),
                      ],
                    }),
                  i === "admin" &&
                    m.jsx(Bn, {
                      to: "/admin",
                      className:
                        "hover:text-indigo-200 transition-colors duration-200",
                      children: "Admin",
                    }),
                  i === "user" &&
                    u &&
                    m.jsx(Bn, {
                      to: `/user/${u}`,
                      className:
                        "hover:text-indigo-200 transition-colors duration-200",
                      children: "User Dashboard",
                    }),
                  i &&
                    n &&
                    m.jsx("button", {
                      onClick: f,
                      className:
                        "bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded-lg transition-colors duration-300",
                      children: "Logout",
                    }),
                ],
              }),
            ],
          }),
        }),
        m.jsxs(Xv, {
          children: [
            m.jsx(zn, { path: "/", element: m.jsx(R0, {}) }),
            m.jsx(zn, { path: "/register", element: m.jsx(oS, {}) }),
            m.jsx(zn, {
              path: "/login",
              element: m.jsx(rS, { setRole: s, setToken: o, setId: c }),
            }),
            m.jsx(zn, {
              path: "/admin",
              element:
                i === "admin" && n
                  ? m.jsx(nS, { token: n, role: i, id: u })
                  : m.jsx("div", {
                      className: "text-red-500 text-center mt-20",
                      children: "Access Denied. Please log in as an admin.",
                    }),
            }),
            m.jsx(zn, {
              path: `/user/${u}`,
              element:
                i === "user" && n && u
                  ? m.jsx(tx, { token: n, role: i, id: u })
                  : m.jsx(Rf, { to: "/login" }),
            }),
            m.jsx(zn, { path: "*", element: m.jsx(Rf, { to: "/" }) }),
          ],
        }),
      ],
    })
  );
}
sv.createRoot(document.getElementById("root")).render(
  m.jsx(v.StrictMode, { children: m.jsx(iS, {}) })
);
