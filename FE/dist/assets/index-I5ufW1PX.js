function Ug(n, o) {
  for (var l = 0; l < o.length; l++) {
    const s = o[l];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const u in s)
        if (u !== "default" && !(u in n)) {
          const d = Object.getOwnPropertyDescriptor(s, u);
          d &&
            Object.defineProperty(
              n,
              u,
              d.get ? d : { enumerable: !0, get: () => s[u] }
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
    for (const d of u)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(u) {
    const d = {};
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = l(u);
    fetch(u.href, d);
  }
})();
function qf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var ia = { exports: {} },
  ao = {},
  sa = { exports: {} },
  ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function Bg() {
  if (Zd) return ue;
  Zd = 1;
  var n = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function P(R) {
    return R === null || typeof R != "object"
      ? null
      : ((R = (S && R[S]) || R["@@iterator"]),
        typeof R == "function" ? R : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    E = {};
  function C(R, M, ae) {
    (this.props = R),
      (this.context = M),
      (this.refs = E),
      (this.updater = ae || O);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (R, M) {
      if (typeof R != "object" && typeof R != "function" && R != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, R, M, "setState");
    }),
    (C.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, "forceUpdate");
    });
  function A() {}
  A.prototype = C.prototype;
  function I(R, M, ae) {
    (this.props = R),
      (this.context = M),
      (this.refs = E),
      (this.updater = ae || O);
  }
  var B = (I.prototype = new A());
  (B.constructor = I), b(B, C.prototype), (B.isPureReactComponent = !0);
  var W = Array.isArray,
    K = Object.prototype.hasOwnProperty,
    V = { current: null },
    Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(R, M, ae) {
    var ce,
      pe = {},
      he = null,
      xe = null;
    if (M != null)
      for (ce in (M.ref !== void 0 && (xe = M.ref),
      M.key !== void 0 && (he = "" + M.key),
      M))
        K.call(M, ce) && !Z.hasOwnProperty(ce) && (pe[ce] = M[ce]);
    var ge = arguments.length - 2;
    if (ge === 1) pe.children = ae;
    else if (1 < ge) {
      for (var Re = Array(ge), ct = 0; ct < ge; ct++)
        Re[ct] = arguments[ct + 2];
      pe.children = Re;
    }
    if (R && R.defaultProps)
      for (ce in ((ge = R.defaultProps), ge))
        pe[ce] === void 0 && (pe[ce] = ge[ce]);
    return {
      $$typeof: n,
      type: R,
      key: he,
      ref: xe,
      props: pe,
      _owner: V.current,
    };
  }
  function Se(R, M) {
    return {
      $$typeof: n,
      type: R.type,
      key: M,
      ref: R.ref,
      props: R.props,
      _owner: R._owner,
    };
  }
  function _e(R) {
    return typeof R == "object" && R !== null && R.$$typeof === n;
  }
  function $e(R) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      R.replace(/[=:]/g, function (ae) {
        return M[ae];
      })
    );
  }
  var se = /\/+/g;
  function D(R, M) {
    return typeof R == "object" && R !== null && R.key != null
      ? $e("" + R.key)
      : M.toString(36);
  }
  function Ie(R, M, ae, ce, pe) {
    var he = typeof R;
    (he === "undefined" || he === "boolean") && (R = null);
    var xe = !1;
    if (R === null) xe = !0;
    else
      switch (he) {
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case n:
            case o:
              xe = !0;
          }
      }
    if (xe)
      return (
        (xe = R),
        (pe = pe(xe)),
        (R = ce === "" ? "." + D(xe, 0) : ce),
        W(pe)
          ? ((ae = ""),
            R != null && (ae = R.replace(se, "$&/") + "/"),
            Ie(pe, M, ae, "", function (ct) {
              return ct;
            }))
          : pe != null &&
            (_e(pe) &&
              (pe = Se(
                pe,
                ae +
                  (!pe.key || (xe && xe.key === pe.key)
                    ? ""
                    : ("" + pe.key).replace(se, "$&/") + "/") +
                  R
              )),
            M.push(pe)),
        1
      );
    if (((xe = 0), (ce = ce === "" ? "." : ce + ":"), W(R)))
      for (var ge = 0; ge < R.length; ge++) {
        he = R[ge];
        var Re = ce + D(he, ge);
        xe += Ie(he, M, ae, Re, pe);
      }
    else if (((Re = P(R)), typeof Re == "function"))
      for (R = Re.call(R), ge = 0; !(he = R.next()).done; )
        (he = he.value), (Re = ce + D(he, ge++)), (xe += Ie(he, M, ae, Re, pe));
    else if (he === "object")
      throw (
        ((M = String(R)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(R).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return xe;
  }
  function Ye(R, M, ae) {
    if (R == null) return R;
    var ce = [],
      pe = 0;
    return (
      Ie(R, ce, "", "", function (he) {
        return M.call(ae, he, pe++);
      }),
      ce
    );
  }
  function ye(R) {
    if (R._status === -1) {
      var M = R._result;
      (M = M()),
        M.then(
          function (ae) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 1), (R._result = ae));
          },
          function (ae) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 2), (R._result = ae));
          }
        ),
        R._status === -1 && ((R._status = 0), (R._result = M));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var Ee = { current: null },
    H = { transition: null },
    ee = {
      ReactCurrentDispatcher: Ee,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: V,
    };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ue.Children = {
      map: Ye,
      forEach: function (R, M, ae) {
        Ye(
          R,
          function () {
            M.apply(this, arguments);
          },
          ae
        );
      },
      count: function (R) {
        var M = 0;
        return (
          Ye(R, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (R) {
        return (
          Ye(R, function (M) {
            return M;
          }) || []
        );
      },
      only: function (R) {
        if (!_e(R))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return R;
      },
    }),
    (ue.Component = C),
    (ue.Fragment = l),
    (ue.Profiler = u),
    (ue.PureComponent = I),
    (ue.StrictMode = s),
    (ue.Suspense = y),
    (ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee),
    (ue.act = Q),
    (ue.cloneElement = function (R, M, ae) {
      if (R == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            R +
            "."
        );
      var ce = b({}, R.props),
        pe = R.key,
        he = R.ref,
        xe = R._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((he = M.ref), (xe = V.current)),
          M.key !== void 0 && (pe = "" + M.key),
          R.type && R.type.defaultProps)
        )
          var ge = R.type.defaultProps;
        for (Re in M)
          K.call(M, Re) &&
            !Z.hasOwnProperty(Re) &&
            (ce[Re] = M[Re] === void 0 && ge !== void 0 ? ge[Re] : M[Re]);
      }
      var Re = arguments.length - 2;
      if (Re === 1) ce.children = ae;
      else if (1 < Re) {
        ge = Array(Re);
        for (var ct = 0; ct < Re; ct++) ge[ct] = arguments[ct + 2];
        ce.children = ge;
      }
      return {
        $$typeof: n,
        type: R.type,
        key: pe,
        ref: he,
        props: ce,
        _owner: xe,
      };
    }),
    (ue.createContext = function (R) {
      return (
        (R = {
          $$typeof: f,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (R.Provider = { $$typeof: d, _context: R }),
        (R.Consumer = R)
      );
    }),
    (ue.createElement = re),
    (ue.createFactory = function (R) {
      var M = re.bind(null, R);
      return (M.type = R), M;
    }),
    (ue.createRef = function () {
      return { current: null };
    }),
    (ue.forwardRef = function (R) {
      return { $$typeof: p, render: R };
    }),
    (ue.isValidElement = _e),
    (ue.lazy = function (R) {
      return { $$typeof: w, _payload: { _status: -1, _result: R }, _init: ye };
    }),
    (ue.memo = function (R, M) {
      return { $$typeof: g, type: R, compare: M === void 0 ? null : M };
    }),
    (ue.startTransition = function (R) {
      var M = H.transition;
      H.transition = {};
      try {
        R();
      } finally {
        H.transition = M;
      }
    }),
    (ue.unstable_act = Q),
    (ue.useCallback = function (R, M) {
      return Ee.current.useCallback(R, M);
    }),
    (ue.useContext = function (R) {
      return Ee.current.useContext(R);
    }),
    (ue.useDebugValue = function () {}),
    (ue.useDeferredValue = function (R) {
      return Ee.current.useDeferredValue(R);
    }),
    (ue.useEffect = function (R, M) {
      return Ee.current.useEffect(R, M);
    }),
    (ue.useId = function () {
      return Ee.current.useId();
    }),
    (ue.useImperativeHandle = function (R, M, ae) {
      return Ee.current.useImperativeHandle(R, M, ae);
    }),
    (ue.useInsertionEffect = function (R, M) {
      return Ee.current.useInsertionEffect(R, M);
    }),
    (ue.useLayoutEffect = function (R, M) {
      return Ee.current.useLayoutEffect(R, M);
    }),
    (ue.useMemo = function (R, M) {
      return Ee.current.useMemo(R, M);
    }),
    (ue.useReducer = function (R, M, ae) {
      return Ee.current.useReducer(R, M, ae);
    }),
    (ue.useRef = function (R) {
      return Ee.current.useRef(R);
    }),
    (ue.useState = function (R) {
      return Ee.current.useState(R);
    }),
    (ue.useSyncExternalStore = function (R, M, ae) {
      return Ee.current.useSyncExternalStore(R, M, ae);
    }),
    (ue.useTransition = function () {
      return Ee.current.useTransition();
    }),
    (ue.version = "18.3.1"),
    ue
  );
}
var ef;
function Ba() {
  return ef || ((ef = 1), (sa.exports = Bg())), sa.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tf;
function $g() {
  if (tf) return ao;
  tf = 1;
  var n = Ba(),
    o = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, y, g) {
    var w,
      S = {},
      P = null,
      O = null;
    g !== void 0 && (P = "" + g),
      y.key !== void 0 && (P = "" + y.key),
      y.ref !== void 0 && (O = y.ref);
    for (w in y) s.call(y, w) && !d.hasOwnProperty(w) && (S[w] = y[w]);
    if (p && p.defaultProps)
      for (w in ((y = p.defaultProps), y)) S[w] === void 0 && (S[w] = y[w]);
    return {
      $$typeof: o,
      type: p,
      key: P,
      ref: O,
      props: S,
      _owner: u.current,
    };
  }
  return (ao.Fragment = l), (ao.jsx = f), (ao.jsxs = f), ao;
}
var nf;
function Wg() {
  return nf || ((nf = 1), (ia.exports = $g())), ia.exports;
}
var m = Wg(),
  v = Ba();
const vn = qf(v),
  Xf = Ug({ __proto__: null, default: vn }, [v]);
var Il = {},
  aa = { exports: {} },
  at = {},
  ua = { exports: {} },
  ca = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rf;
function Vg() {
  return (
    rf ||
      ((rf = 1),
      (function (n) {
        function o(H, ee) {
          var Q = H.length;
          H.push(ee);
          e: for (; 0 < Q; ) {
            var R = (Q - 1) >>> 1,
              M = H[R];
            if (0 < u(M, ee)) (H[R] = ee), (H[Q] = M), (Q = R);
            else break e;
          }
        }
        function l(H) {
          return H.length === 0 ? null : H[0];
        }
        function s(H) {
          if (H.length === 0) return null;
          var ee = H[0],
            Q = H.pop();
          if (Q !== ee) {
            H[0] = Q;
            e: for (var R = 0, M = H.length, ae = M >>> 1; R < ae; ) {
              var ce = 2 * (R + 1) - 1,
                pe = H[ce],
                he = ce + 1,
                xe = H[he];
              if (0 > u(pe, Q))
                he < M && 0 > u(xe, pe)
                  ? ((H[R] = xe), (H[he] = Q), (R = he))
                  : ((H[R] = pe), (H[ce] = Q), (R = ce));
              else if (he < M && 0 > u(xe, Q))
                (H[R] = xe), (H[he] = Q), (R = he);
              else break e;
            }
          }
          return ee;
        }
        function u(H, ee) {
          var Q = H.sortIndex - ee.sortIndex;
          return Q !== 0 ? Q : H.id - ee.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
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
          S = null,
          P = 3,
          O = !1,
          b = !1,
          E = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          I = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function B(H) {
          for (var ee = l(g); ee !== null; ) {
            if (ee.callback === null) s(g);
            else if (ee.startTime <= H)
              s(g), (ee.sortIndex = ee.expirationTime), o(y, ee);
            else break;
            ee = l(g);
          }
        }
        function W(H) {
          if (((E = !1), B(H), !b))
            if (l(y) !== null) (b = !0), ye(K);
            else {
              var ee = l(g);
              ee !== null && Ee(W, ee.startTime - H);
            }
        }
        function K(H, ee) {
          (b = !1), E && ((E = !1), A(re), (re = -1)), (O = !0);
          var Q = P;
          try {
            for (
              B(ee), S = l(y);
              S !== null && (!(S.expirationTime > ee) || (H && !$e()));

            ) {
              var R = S.callback;
              if (typeof R == "function") {
                (S.callback = null), (P = S.priorityLevel);
                var M = R(S.expirationTime <= ee);
                (ee = n.unstable_now()),
                  typeof M == "function"
                    ? (S.callback = M)
                    : S === l(y) && s(y),
                  B(ee);
              } else s(y);
              S = l(y);
            }
            if (S !== null) var ae = !0;
            else {
              var ce = l(g);
              ce !== null && Ee(W, ce.startTime - ee), (ae = !1);
            }
            return ae;
          } finally {
            (S = null), (P = Q), (O = !1);
          }
        }
        var V = !1,
          Z = null,
          re = -1,
          Se = 5,
          _e = -1;
        function $e() {
          return !(n.unstable_now() - _e < Se);
        }
        function se() {
          if (Z !== null) {
            var H = n.unstable_now();
            _e = H;
            var ee = !0;
            try {
              ee = Z(!0, H);
            } finally {
              ee ? D() : ((V = !1), (Z = null));
            }
          } else V = !1;
        }
        var D;
        if (typeof I == "function")
          D = function () {
            I(se);
          };
        else if (typeof MessageChannel < "u") {
          var Ie = new MessageChannel(),
            Ye = Ie.port2;
          (Ie.port1.onmessage = se),
            (D = function () {
              Ye.postMessage(null);
            });
        } else
          D = function () {
            C(se, 0);
          };
        function ye(H) {
          (Z = H), V || ((V = !0), D());
        }
        function Ee(H, ee) {
          re = C(function () {
            H(n.unstable_now());
          }, ee);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            b || O || ((b = !0), ye(K));
          }),
          (n.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Se = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(y);
          }),
          (n.unstable_next = function (H) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var ee = 3;
                break;
              default:
                ee = P;
            }
            var Q = P;
            P = ee;
            try {
              return H();
            } finally {
              P = Q;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (H, ee) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var Q = P;
            P = H;
            try {
              return ee();
            } finally {
              P = Q;
            }
          }),
          (n.unstable_scheduleCallback = function (H, ee, Q) {
            var R = n.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? R + Q : R))
                : (Q = R),
              H)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = Q + M),
              (H = {
                id: w++,
                callback: ee,
                priorityLevel: H,
                startTime: Q,
                expirationTime: M,
                sortIndex: -1,
              }),
              Q > R
                ? ((H.sortIndex = Q),
                  o(g, H),
                  l(y) === null &&
                    H === l(g) &&
                    (E ? (A(re), (re = -1)) : (E = !0), Ee(W, Q - R)))
                : ((H.sortIndex = M), o(y, H), b || O || ((b = !0), ye(K))),
              H
            );
          }),
          (n.unstable_shouldYield = $e),
          (n.unstable_wrapCallback = function (H) {
            var ee = P;
            return function () {
              var Q = P;
              P = ee;
              try {
                return H.apply(this, arguments);
              } finally {
                P = Q;
              }
            };
          });
      })(ca)),
    ca
  );
}
var of;
function Hg() {
  return of || ((of = 1), (ua.exports = Vg())), ua.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lf;
function Kg() {
  if (lf) return at;
  lf = 1;
  var n = Ba(),
    o = Hg();
  function l(e) {
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
  function d(e, t) {
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
    S = {};
  function P(e) {
    return y.call(S, e)
      ? !0
      : y.call(w, e)
      ? !1
      : g.test(e)
      ? (S[e] = !0)
      : ((w[e] = !0), !1);
  }
  function O(e, t, r, i) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function b(e, t, r, i) {
    if (t === null || typeof t > "u" || O(e, t, r, i)) return !0;
    if (i) return !1;
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
  function E(e, t, r, i, a, c, h) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = h);
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      C[e] = new E(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      C[t] = new E(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      C[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      C[e] = new E(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        C[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      C[e] = new E(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      C[e] = new E(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      C[e] = new E(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      C[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var A = /[\-:]([a-z])/g;
  function I(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(A, I);
      C[t] = new E(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(A, I);
        C[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(A, I);
      C[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      C[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (C.xlinkHref = new E(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      C[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function B(e, t, r, i) {
    var a = C.hasOwnProperty(t) ? C[t] : null;
    (a !== null
      ? a.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (b(t, r, a, i) && (r = null),
      i || a === null
        ? P(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
        : ((t = a.attributeName),
          (i = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
              i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var W = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    K = Symbol.for("react.element"),
    V = Symbol.for("react.portal"),
    Z = Symbol.for("react.fragment"),
    re = Symbol.for("react.strict_mode"),
    Se = Symbol.for("react.profiler"),
    _e = Symbol.for("react.provider"),
    $e = Symbol.for("react.context"),
    se = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    Ie = Symbol.for("react.suspense_list"),
    Ye = Symbol.for("react.memo"),
    ye = Symbol.for("react.lazy"),
    Ee = Symbol.for("react.offscreen"),
    H = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (H && e[H]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Q = Object.assign,
    R;
  function M(e) {
    if (R === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        R = (t && t[1]) || "";
      }
    return (
      `
` +
      R +
      e
    );
  }
  var ae = !1;
  function ce(e, t) {
    if (!e || ae) return "";
    ae = !0;
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
          } catch (T) {
            var i = T;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (T) {
            i = T;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (T) {
          i = T;
        }
        e();
      }
    } catch (T) {
      if (T && i && typeof T.stack == "string") {
        for (
          var a = T.stack.split(`
`),
            c = i.stack.split(`
`),
            h = a.length - 1,
            x = c.length - 1;
          1 <= h && 0 <= x && a[h] !== c[x];

        )
          x--;
        for (; 1 <= h && 0 <= x; h--, x--)
          if (a[h] !== c[x]) {
            if (h !== 1 || x !== 1)
              do
                if ((h--, x--, 0 > x || a[h] !== c[x])) {
                  var k =
                    `
` + a[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= h && 0 <= x);
            break;
          }
      }
    } finally {
      (ae = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ce(e.type, !1)), e;
      case 11:
        return (e = ce(e.type.render, !1)), e;
      case 1:
        return (e = ce(e.type, !0)), e;
      default:
        return "";
    }
  }
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Z:
        return "Fragment";
      case V:
        return "Portal";
      case Se:
        return "Profiler";
      case re:
        return "StrictMode";
      case D:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $e:
          return (e.displayName || "Context") + ".Consumer";
        case _e:
          return (e._context.displayName || "Context") + ".Provider";
        case se:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ye:
          return (
            (t = e.displayName || null), t !== null ? t : he(e.type) || "Memo"
          );
        case ye:
          (t = e._payload), (e = e._init);
          try {
            return he(e(t));
          } catch {}
      }
    return null;
  }
  function xe(e) {
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
        return he(t);
      case 8:
        return t === re ? "StrictMode" : "Mode";
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
  function ge(e) {
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
  function Re(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ct(e) {
    var t = Re(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        c = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (h) {
            (i = "" + h), c.call(this, h);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (h) {
            i = "" + h;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ro(e) {
    e._valueTracker || (e._valueTracker = ct(e));
  }
  function lu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      i = "";
    return (
      e && (i = Re(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Po(e) {
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
  function pi(e, t) {
    var r = t.checked;
    return Q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function iu(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    (r = ge(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function su(e, t) {
    (t = t.checked), t != null && B(e, "checked", t, !1);
  }
  function hi(e, t) {
    su(e, t);
    var r = ge(t.value),
      i = t.type;
    if (r != null)
      i === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? mi(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && mi(e, t.type, ge(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function au(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (
        !(
          (i !== "submit" && i !== "reset") ||
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
  function mi(e, t, r) {
    (t !== "number" || Po(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Cr = Array.isArray;
  function $n(e, t, r, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + ge(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          (e[a].selected = !0), i && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function gi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return Q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function uu(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(l(92));
        if (Cr(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: ge(r) };
  }
  function cu(e, t) {
    var r = ge(t.value),
      i = ge(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      i != null && (e.defaultValue = "" + i);
  }
  function du(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function fu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function vi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? fu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var jo,
    pu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, i, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, i, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          jo = jo || document.createElement("div"),
            jo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = jo.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function kr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Nr = {
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
    Vh = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Nr).forEach(function (e) {
    Vh.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nr[t] = Nr[e]);
    });
  });
  function hu(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Nr.hasOwnProperty(e) && Nr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function mu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = r.indexOf("--") === 0,
          a = hu(r, t[r], i);
        r === "float" && (r = "cssFloat"), i ? e.setProperty(r, a) : (e[r] = a);
      }
  }
  var Hh = Q(
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
  function yi(e, t) {
    if (t) {
      if (Hh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function xi(e, t) {
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
  var wi = null;
  function Si(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ei = null,
    Wn = null,
    Vn = null;
  function gu(e) {
    if ((e = Gr(e))) {
      if (typeof Ei != "function") throw Error(l(280));
      var t = e.stateNode;
      t && ((t = Jo(t)), Ei(e.stateNode, e.type, t));
    }
  }
  function vu(e) {
    Wn ? (Vn ? Vn.push(e) : (Vn = [e])) : (Wn = e);
  }
  function yu() {
    if (Wn) {
      var e = Wn,
        t = Vn;
      if (((Vn = Wn = null), gu(e), t)) for (e = 0; e < t.length; e++) gu(t[e]);
    }
  }
  function xu(e, t) {
    return e(t);
  }
  function wu() {}
  var Ci = !1;
  function Su(e, t, r) {
    if (Ci) return e(t, r);
    Ci = !0;
    try {
      return xu(e, t, r);
    } finally {
      (Ci = !1), (Wn !== null || Vn !== null) && (wu(), yu());
    }
  }
  function Rr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = Jo(r);
    if (i === null) return null;
    r = i[t];
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
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(l(231, t, typeof r));
    return r;
  }
  var ki = !1;
  if (p)
    try {
      var Pr = {};
      Object.defineProperty(Pr, "passive", {
        get: function () {
          ki = !0;
        },
      }),
        window.addEventListener("test", Pr, Pr),
        window.removeEventListener("test", Pr, Pr);
    } catch {
      ki = !1;
    }
  function Kh(e, t, r, i, a, c, h, x, k) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, T);
    } catch (z) {
      this.onError(z);
    }
  }
  var jr = !1,
    bo = null,
    _o = !1,
    Ni = null,
    Gh = {
      onError: function (e) {
        (jr = !0), (bo = e);
      },
    };
  function Qh(e, t, r, i, a, c, h, x, k) {
    (jr = !1), (bo = null), Kh.apply(Gh, arguments);
  }
  function qh(e, t, r, i, a, c, h, x, k) {
    if ((Qh.apply(this, arguments), jr)) {
      if (jr) {
        var T = bo;
        (jr = !1), (bo = null);
      } else throw Error(l(198));
      _o || ((_o = !0), (Ni = T));
    }
  }
  function kn(e) {
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
  function Eu(e) {
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
  function Cu(e) {
    if (kn(e) !== e) throw Error(l(188));
  }
  function Xh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = kn(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var c = a.alternate;
      if (c === null) {
        if (((i = a.return), i !== null)) {
          r = i;
          continue;
        }
        break;
      }
      if (a.child === c.child) {
        for (c = a.child; c; ) {
          if (c === r) return Cu(a), e;
          if (c === i) return Cu(a), t;
          c = c.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== i.return) (r = a), (i = c);
      else {
        for (var h = !1, x = a.child; x; ) {
          if (x === r) {
            (h = !0), (r = a), (i = c);
            break;
          }
          if (x === i) {
            (h = !0), (i = a), (r = c);
            break;
          }
          x = x.sibling;
        }
        if (!h) {
          for (x = c.child; x; ) {
            if (x === r) {
              (h = !0), (r = c), (i = a);
              break;
            }
            if (x === i) {
              (h = !0), (i = c), (r = a);
              break;
            }
            x = x.sibling;
          }
          if (!h) throw Error(l(189));
        }
      }
      if (r.alternate !== i) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function ku(e) {
    return (e = Xh(e)), e !== null ? Nu(e) : null;
  }
  function Nu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Nu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ru = o.unstable_scheduleCallback,
    Pu = o.unstable_cancelCallback,
    Jh = o.unstable_shouldYield,
    Yh = o.unstable_requestPaint,
    Oe = o.unstable_now,
    Zh = o.unstable_getCurrentPriorityLevel,
    Ri = o.unstable_ImmediatePriority,
    ju = o.unstable_UserBlockingPriority,
    To = o.unstable_NormalPriority,
    em = o.unstable_LowPriority,
    bu = o.unstable_IdlePriority,
    Oo = null,
    Tt = null;
  function tm(e) {
    if (Tt && typeof Tt.onCommitFiberRoot == "function")
      try {
        Tt.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Et = Math.clz32 ? Math.clz32 : om,
    nm = Math.log,
    rm = Math.LN2;
  function om(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((nm(e) / rm) | 0)) | 0;
  }
  var Ao = 64,
    Lo = 4194304;
  function br(e) {
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
  function Do(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0,
      a = e.suspendedLanes,
      c = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var x = h & ~a;
      x !== 0 ? (i = br(x)) : ((c &= h), c !== 0 && (i = br(c)));
    } else (h = r & ~a), h !== 0 ? (i = br(h)) : c !== 0 && (i = br(c));
    if (i === 0) return 0;
    if (
      t !== 0 &&
      t !== i &&
      !(t & a) &&
      ((a = i & -i), (c = t & -t), a >= c || (a === 16 && (c & 4194240) !== 0))
    )
      return t;
    if ((i & 4 && (i |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (r = 31 - Et(t)), (a = 1 << r), (i |= e[r]), (t &= ~a);
    return i;
  }
  function lm(e, t) {
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
  function im(e, t) {
    for (
      var r = e.suspendedLanes,
        i = e.pingedLanes,
        a = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var h = 31 - Et(c),
        x = 1 << h,
        k = a[h];
      k === -1
        ? (!(x & r) || x & i) && (a[h] = lm(x, t))
        : k <= t && (e.expiredLanes |= x),
        (c &= ~x);
    }
  }
  function Pi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function _u() {
    var e = Ao;
    return (Ao <<= 1), !(Ao & 4194240) && (Ao = 64), e;
  }
  function ji(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function _r(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Et(t)),
      (e[t] = r);
  }
  function sm(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - Et(r),
        c = 1 << a;
      (t[a] = 0), (i[a] = -1), (e[a] = -1), (r &= ~c);
    }
  }
  function bi(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var i = 31 - Et(r),
        a = 1 << i;
      (a & t) | (e[i] & t) && (e[i] |= t), (r &= ~a);
    }
  }
  var ve = 0;
  function Tu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ou,
    _i,
    Au,
    Lu,
    Du,
    Ti = !1,
    Io = [],
    qt = null,
    Xt = null,
    Jt = null,
    Tr = new Map(),
    Or = new Map(),
    Yt = [],
    am =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Iu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Xt = null;
        break;
      case "mouseover":
      case "mouseout":
        Jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Tr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Or.delete(t.pointerId);
    }
  }
  function Ar(e, t, r, i, a, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [a],
        }),
        t !== null && ((t = Gr(t)), t !== null && _i(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function um(e, t, r, i, a) {
    switch (t) {
      case "focusin":
        return (qt = Ar(qt, e, t, r, i, a)), !0;
      case "dragenter":
        return (Xt = Ar(Xt, e, t, r, i, a)), !0;
      case "mouseover":
        return (Jt = Ar(Jt, e, t, r, i, a)), !0;
      case "pointerover":
        var c = a.pointerId;
        return Tr.set(c, Ar(Tr.get(c) || null, e, t, r, i, a)), !0;
      case "gotpointercapture":
        return (
          (c = a.pointerId), Or.set(c, Ar(Or.get(c) || null, e, t, r, i, a)), !0
        );
    }
    return !1;
  }
  function Fu(e) {
    var t = Nn(e.target);
    if (t !== null) {
      var r = kn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Eu(r)), t !== null)) {
            (e.blockedOn = t),
              Du(e.priority, function () {
                Au(r);
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
  function Fo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        (wi = i), r.target.dispatchEvent(i), (wi = null);
      } else return (t = Gr(r)), t !== null && _i(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Mu(e, t, r) {
    Fo(e) && r.delete(t);
  }
  function cm() {
    (Ti = !1),
      qt !== null && Fo(qt) && (qt = null),
      Xt !== null && Fo(Xt) && (Xt = null),
      Jt !== null && Fo(Jt) && (Jt = null),
      Tr.forEach(Mu),
      Or.forEach(Mu);
  }
  function Lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ti ||
        ((Ti = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, cm)));
  }
  function Dr(e) {
    function t(a) {
      return Lr(a, e);
    }
    if (0 < Io.length) {
      Lr(Io[0], e);
      for (var r = 1; r < Io.length; r++) {
        var i = Io[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (
      qt !== null && Lr(qt, e),
        Xt !== null && Lr(Xt, e),
        Jt !== null && Lr(Jt, e),
        Tr.forEach(t),
        Or.forEach(t),
        r = 0;
      r < Yt.length;
      r++
    )
      (i = Yt[r]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Yt.length && ((r = Yt[0]), r.blockedOn === null); )
      Fu(r), r.blockedOn === null && Yt.shift();
  }
  var Hn = W.ReactCurrentBatchConfig,
    Mo = !0;
  function dm(e, t, r, i) {
    var a = ve,
      c = Hn.transition;
    Hn.transition = null;
    try {
      (ve = 1), Oi(e, t, r, i);
    } finally {
      (ve = a), (Hn.transition = c);
    }
  }
  function fm(e, t, r, i) {
    var a = ve,
      c = Hn.transition;
    Hn.transition = null;
    try {
      (ve = 4), Oi(e, t, r, i);
    } finally {
      (ve = a), (Hn.transition = c);
    }
  }
  function Oi(e, t, r, i) {
    if (Mo) {
      var a = Ai(e, t, r, i);
      if (a === null) Xi(e, t, i, zo, r), Iu(e, i);
      else if (um(a, e, t, r, i)) i.stopPropagation();
      else if ((Iu(e, i), t & 4 && -1 < am.indexOf(e))) {
        for (; a !== null; ) {
          var c = Gr(a);
          if (
            (c !== null && Ou(c),
            (c = Ai(e, t, r, i)),
            c === null && Xi(e, t, i, zo, r),
            c === a)
          )
            break;
          a = c;
        }
        a !== null && i.stopPropagation();
      } else Xi(e, t, i, null, r);
    }
  }
  var zo = null;
  function Ai(e, t, r, i) {
    if (((zo = null), (e = Si(i)), (e = Nn(e)), e !== null))
      if (((t = kn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Eu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (zo = e), null;
  }
  function zu(e) {
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
        switch (Zh()) {
          case Ri:
            return 1;
          case ju:
            return 4;
          case To:
          case em:
            return 16;
          case bu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zt = null,
    Li = null,
    Uo = null;
  function Uu() {
    if (Uo) return Uo;
    var e,
      t = Li,
      r = t.length,
      i,
      a = "value" in Zt ? Zt.value : Zt.textContent,
      c = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (i = 1; i <= h && t[r - i] === a[c - i]; i++);
    return (Uo = a.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Bo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $o() {
    return !0;
  }
  function Bu() {
    return !1;
  }
  function dt(e) {
    function t(r, i, a, c, h) {
      (this._reactName = r),
        (this._targetInst = a),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = h),
        (this.currentTarget = null);
      for (var x in e)
        e.hasOwnProperty(x) && ((r = e[x]), (this[x] = r ? r(c) : c[x]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? $o
          : Bu),
        (this.isPropagationStopped = Bu),
        this
      );
    }
    return (
      Q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = $o));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = $o));
        },
        persist: function () {},
        isPersistent: $o,
      }),
      t
    );
  }
  var Kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Di = dt(Kn),
    Ir = Q({}, Kn, { view: 0, detail: 0 }),
    pm = dt(Ir),
    Ii,
    Fi,
    Fr,
    Wo = Q({}, Ir, {
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
      getModifierState: zi,
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
          : (e !== Fr &&
              (Fr && e.type === "mousemove"
                ? ((Ii = e.screenX - Fr.screenX), (Fi = e.screenY - Fr.screenY))
                : (Fi = Ii = 0),
              (Fr = e)),
            Ii);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Fi;
      },
    }),
    $u = dt(Wo),
    hm = Q({}, Wo, { dataTransfer: 0 }),
    mm = dt(hm),
    gm = Q({}, Ir, { relatedTarget: 0 }),
    Mi = dt(gm),
    vm = Q({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ym = dt(vm),
    xm = Q({}, Kn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wm = dt(xm),
    Sm = Q({}, Kn, { data: 0 }),
    Wu = dt(Sm),
    Em = {
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
    Cm = {
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
    km = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Nm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = km[e])
      ? !!t[e]
      : !1;
  }
  function zi() {
    return Nm;
  }
  var Rm = Q({}, Ir, {
      key: function (e) {
        if (e.key) {
          var t = Em[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Bo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Cm[e.keyCode] || "Unidentified"
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
      getModifierState: zi,
      charCode: function (e) {
        return e.type === "keypress" ? Bo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Bo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Pm = dt(Rm),
    jm = Q({}, Wo, {
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
    Vu = dt(jm),
    bm = Q({}, Ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zi,
    }),
    _m = dt(bm),
    Tm = Q({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Om = dt(Tm),
    Am = Q({}, Wo, {
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
    Lm = dt(Am),
    Dm = [9, 13, 27, 32],
    Ui = p && "CompositionEvent" in window,
    Mr = null;
  p && "documentMode" in document && (Mr = document.documentMode);
  var Im = p && "TextEvent" in window && !Mr,
    Hu = p && (!Ui || (Mr && 8 < Mr && 11 >= Mr)),
    Ku = " ",
    Gu = !1;
  function Qu(e, t) {
    switch (e) {
      case "keyup":
        return Dm.indexOf(t.keyCode) !== -1;
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
  function qu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Gn = !1;
  function Fm(e, t) {
    switch (e) {
      case "compositionend":
        return qu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Gu = !0), Ku);
      case "textInput":
        return (e = t.data), e === Ku && Gu ? null : e;
      default:
        return null;
    }
  }
  function Mm(e, t) {
    if (Gn)
      return e === "compositionend" || (!Ui && Qu(e, t))
        ? ((e = Uu()), (Uo = Li = Zt = null), (Gn = !1), e)
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
        return Hu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zm = {
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
  function Xu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zm[e.type] : t === "textarea";
  }
  function Ju(e, t, r, i) {
    vu(i),
      (t = Qo(t, "onChange")),
      0 < t.length &&
        ((r = new Di("onChange", "change", null, r, i)),
        e.push({ event: r, listeners: t }));
  }
  var zr = null,
    Ur = null;
  function Um(e) {
    mc(e, 0);
  }
  function Vo(e) {
    var t = Yn(e);
    if (lu(t)) return e;
  }
  function Bm(e, t) {
    if (e === "change") return t;
  }
  var Yu = !1;
  if (p) {
    var Bi;
    if (p) {
      var $i = "oninput" in document;
      if (!$i) {
        var Zu = document.createElement("div");
        Zu.setAttribute("oninput", "return;"),
          ($i = typeof Zu.oninput == "function");
      }
      Bi = $i;
    } else Bi = !1;
    Yu = Bi && (!document.documentMode || 9 < document.documentMode);
  }
  function ec() {
    zr && (zr.detachEvent("onpropertychange", tc), (Ur = zr = null));
  }
  function tc(e) {
    if (e.propertyName === "value" && Vo(Ur)) {
      var t = [];
      Ju(t, Ur, e, Si(e)), Su(Um, t);
    }
  }
  function $m(e, t, r) {
    e === "focusin"
      ? (ec(), (zr = t), (Ur = r), zr.attachEvent("onpropertychange", tc))
      : e === "focusout" && ec();
  }
  function Wm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Vo(Ur);
  }
  function Vm(e, t) {
    if (e === "click") return Vo(t);
  }
  function Hm(e, t) {
    if (e === "input" || e === "change") return Vo(t);
  }
  function Km(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ct = typeof Object.is == "function" ? Object.is : Km;
  function Br(e, t) {
    if (Ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var a = r[i];
      if (!y.call(t, a) || !Ct(e[a], t[a])) return !1;
    }
    return !0;
  }
  function nc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rc(e, t) {
    var r = nc(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (((i = e + r.textContent.length), e <= t && i >= t))
          return { node: r, offset: t - e };
        e = i;
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
      r = nc(r);
    }
  }
  function oc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? oc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function lc() {
    for (var e = window, t = Po(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Po(e.document);
    }
    return t;
  }
  function Wi(e) {
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
  function Gm(e) {
    var t = lc(),
      r = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      oc(r.ownerDocument.documentElement, r)
    ) {
      if (i !== null && Wi(r)) {
        if (
          ((t = i.start),
          (e = i.end),
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
            c = Math.min(i.start, a);
          (i = i.end === void 0 ? c : Math.min(i.end, a)),
            !e.extend && c > i && ((a = i), (i = c), (c = a)),
            (a = rc(r, c));
          var h = rc(r, i);
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
            c > i
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
  var Qm = p && "documentMode" in document && 11 >= document.documentMode,
    Qn = null,
    Vi = null,
    $r = null,
    Hi = !1;
  function ic(e, t, r) {
    var i =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Hi ||
      Qn == null ||
      Qn !== Po(i) ||
      ((i = Qn),
      "selectionStart" in i && Wi(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      ($r && Br($r, i)) ||
        (($r = i),
        (i = Qo(Vi, "onSelect")),
        0 < i.length &&
          ((t = new Di("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: i }),
          (t.target = Qn))));
  }
  function Ho(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var qn = {
      animationend: Ho("Animation", "AnimationEnd"),
      animationiteration: Ho("Animation", "AnimationIteration"),
      animationstart: Ho("Animation", "AnimationStart"),
      transitionend: Ho("Transition", "TransitionEnd"),
    },
    Ki = {},
    sc = {};
  p &&
    ((sc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete qn.animationend.animation,
      delete qn.animationiteration.animation,
      delete qn.animationstart.animation),
    "TransitionEvent" in window || delete qn.transitionend.transition);
  function Ko(e) {
    if (Ki[e]) return Ki[e];
    if (!qn[e]) return e;
    var t = qn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in sc) return (Ki[e] = t[r]);
    return e;
  }
  var ac = Ko("animationend"),
    uc = Ko("animationiteration"),
    cc = Ko("animationstart"),
    dc = Ko("transitionend"),
    fc = new Map(),
    pc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function en(e, t) {
    fc.set(e, t), d(t, [e]);
  }
  for (var Gi = 0; Gi < pc.length; Gi++) {
    var Qi = pc[Gi],
      qm = Qi.toLowerCase(),
      Xm = Qi[0].toUpperCase() + Qi.slice(1);
    en(qm, "on" + Xm);
  }
  en(ac, "onAnimationEnd"),
    en(uc, "onAnimationIteration"),
    en(cc, "onAnimationStart"),
    en("dblclick", "onDoubleClick"),
    en("focusin", "onFocus"),
    en("focusout", "onBlur"),
    en(dc, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Wr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Jm = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Wr)
    );
  function hc(e, t, r) {
    var i = e.type || "unknown-event";
    (e.currentTarget = r), qh(i, t, void 0, e), (e.currentTarget = null);
  }
  function mc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r],
        a = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var h = i.length - 1; 0 <= h; h--) {
            var x = i[h],
              k = x.instance,
              T = x.currentTarget;
            if (((x = x.listener), k !== c && a.isPropagationStopped()))
              break e;
            hc(a, x, T), (c = k);
          }
        else
          for (h = 0; h < i.length; h++) {
            if (
              ((x = i[h]),
              (k = x.instance),
              (T = x.currentTarget),
              (x = x.listener),
              k !== c && a.isPropagationStopped())
            )
              break e;
            hc(a, x, T), (c = k);
          }
      }
    }
    if (_o) throw ((e = Ni), (_o = !1), (Ni = null), e);
  }
  function Ce(e, t) {
    var r = t[ns];
    r === void 0 && (r = t[ns] = new Set());
    var i = e + "__bubble";
    r.has(i) || (gc(t, e, 2, !1), r.add(i));
  }
  function qi(e, t, r) {
    var i = 0;
    t && (i |= 4), gc(r, e, i, t);
  }
  var Go = "_reactListening" + Math.random().toString(36).slice(2);
  function Vr(e) {
    if (!e[Go]) {
      (e[Go] = !0),
        s.forEach(function (r) {
          r !== "selectionchange" && (Jm.has(r) || qi(r, !1, e), qi(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Go] || ((t[Go] = !0), qi("selectionchange", !1, t));
    }
  }
  function gc(e, t, r, i) {
    switch (zu(t)) {
      case 1:
        var a = dm;
        break;
      case 4:
        a = fm;
        break;
      default:
        a = Oi;
    }
    (r = a.bind(null, t, r, e)),
      (a = void 0),
      !ki ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      i
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1);
  }
  function Xi(e, t, r, i, a) {
    var c = i;
    if (!(t & 1) && !(t & 2) && i !== null)
      e: for (;;) {
        if (i === null) return;
        var h = i.tag;
        if (h === 3 || h === 4) {
          var x = i.stateNode.containerInfo;
          if (x === a || (x.nodeType === 8 && x.parentNode === a)) break;
          if (h === 4)
            for (h = i.return; h !== null; ) {
              var k = h.tag;
              if (
                (k === 3 || k === 4) &&
                ((k = h.stateNode.containerInfo),
                k === a || (k.nodeType === 8 && k.parentNode === a))
              )
                return;
              h = h.return;
            }
          for (; x !== null; ) {
            if (((h = Nn(x)), h === null)) return;
            if (((k = h.tag), k === 5 || k === 6)) {
              i = c = h;
              continue e;
            }
            x = x.parentNode;
          }
        }
        i = i.return;
      }
    Su(function () {
      var T = c,
        z = Si(r),
        U = [];
      e: {
        var F = fc.get(e);
        if (F !== void 0) {
          var G = Di,
            X = e;
          switch (e) {
            case "keypress":
              if (Bo(r) === 0) break e;
            case "keydown":
            case "keyup":
              G = Pm;
              break;
            case "focusin":
              (X = "focus"), (G = Mi);
              break;
            case "focusout":
              (X = "blur"), (G = Mi);
              break;
            case "beforeblur":
            case "afterblur":
              G = Mi;
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
              G = $u;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = mm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = _m;
              break;
            case ac:
            case uc:
            case cc:
              G = ym;
              break;
            case dc:
              G = Om;
              break;
            case "scroll":
              G = pm;
              break;
            case "wheel":
              G = Lm;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = wm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Vu;
          }
          var J = (t & 4) !== 0,
            Ae = !J && e === "scroll",
            j = J ? (F !== null ? F + "Capture" : null) : F;
          J = [];
          for (var N = T, _; N !== null; ) {
            _ = N;
            var $ = _.stateNode;
            if (
              (_.tag === 5 &&
                $ !== null &&
                ((_ = $),
                j !== null &&
                  (($ = Rr(N, j)), $ != null && J.push(Hr(N, $, _)))),
              Ae)
            )
              break;
            N = N.return;
          }
          0 < J.length &&
            ((F = new G(F, X, null, r, z)), U.push({ event: F, listeners: J }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (G = e === "mouseout" || e === "pointerout"),
            F &&
              r !== wi &&
              (X = r.relatedTarget || r.fromElement) &&
              (Nn(X) || X[zt]))
          )
            break e;
          if (
            (G || F) &&
            ((F =
              z.window === z
                ? z
                : (F = z.ownerDocument)
                ? F.defaultView || F.parentWindow
                : window),
            G
              ? ((X = r.relatedTarget || r.toElement),
                (G = T),
                (X = X ? Nn(X) : null),
                X !== null &&
                  ((Ae = kn(X)), X !== Ae || (X.tag !== 5 && X.tag !== 6)) &&
                  (X = null))
              : ((G = null), (X = T)),
            G !== X)
          ) {
            if (
              ((J = $u),
              ($ = "onMouseLeave"),
              (j = "onMouseEnter"),
              (N = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = Vu),
                ($ = "onPointerLeave"),
                (j = "onPointerEnter"),
                (N = "pointer")),
              (Ae = G == null ? F : Yn(G)),
              (_ = X == null ? F : Yn(X)),
              (F = new J($, N + "leave", G, r, z)),
              (F.target = Ae),
              (F.relatedTarget = _),
              ($ = null),
              Nn(z) === T &&
                ((J = new J(j, N + "enter", X, r, z)),
                (J.target = _),
                (J.relatedTarget = Ae),
                ($ = J)),
              (Ae = $),
              G && X)
            )
              t: {
                for (J = G, j = X, N = 0, _ = J; _; _ = Xn(_)) N++;
                for (_ = 0, $ = j; $; $ = Xn($)) _++;
                for (; 0 < N - _; ) (J = Xn(J)), N--;
                for (; 0 < _ - N; ) (j = Xn(j)), _--;
                for (; N--; ) {
                  if (J === j || (j !== null && J === j.alternate)) break t;
                  (J = Xn(J)), (j = Xn(j));
                }
                J = null;
              }
            else J = null;
            G !== null && vc(U, F, G, J, !1),
              X !== null && Ae !== null && vc(U, Ae, X, J, !0);
          }
        }
        e: {
          if (
            ((F = T ? Yn(T) : window),
            (G = F.nodeName && F.nodeName.toLowerCase()),
            G === "select" || (G === "input" && F.type === "file"))
          )
            var Y = Bm;
          else if (Xu(F))
            if (Yu) Y = Hm;
            else {
              Y = Wm;
              var te = $m;
            }
          else
            (G = F.nodeName) &&
              G.toLowerCase() === "input" &&
              (F.type === "checkbox" || F.type === "radio") &&
              (Y = Vm);
          if (Y && (Y = Y(e, T))) {
            Ju(U, Y, r, z);
            break e;
          }
          te && te(e, F, T),
            e === "focusout" &&
              (te = F._wrapperState) &&
              te.controlled &&
              F.type === "number" &&
              mi(F, "number", F.value);
        }
        switch (((te = T ? Yn(T) : window), e)) {
          case "focusin":
            (Xu(te) || te.contentEditable === "true") &&
              ((Qn = te), (Vi = T), ($r = null));
            break;
          case "focusout":
            $r = Vi = Qn = null;
            break;
          case "mousedown":
            Hi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Hi = !1), ic(U, r, z);
            break;
          case "selectionchange":
            if (Qm) break;
          case "keydown":
          case "keyup":
            ic(U, r, z);
        }
        var ne;
        if (Ui)
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
          Gn
            ? Qu(e, r) && (oe = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (oe = "onCompositionStart");
        oe &&
          (Hu &&
            r.locale !== "ko" &&
            (Gn || oe !== "onCompositionStart"
              ? oe === "onCompositionEnd" && Gn && (ne = Uu())
              : ((Zt = z),
                (Li = "value" in Zt ? Zt.value : Zt.textContent),
                (Gn = !0))),
          (te = Qo(T, oe)),
          0 < te.length &&
            ((oe = new Wu(oe, e, null, r, z)),
            U.push({ event: oe, listeners: te }),
            ne
              ? (oe.data = ne)
              : ((ne = qu(r)), ne !== null && (oe.data = ne)))),
          (ne = Im ? Fm(e, r) : Mm(e, r)) &&
            ((T = Qo(T, "onBeforeInput")),
            0 < T.length &&
              ((z = new Wu("onBeforeInput", "beforeinput", null, r, z)),
              U.push({ event: z, listeners: T }),
              (z.data = ne)));
      }
      mc(U, t);
    });
  }
  function Hr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Qo(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var a = e,
        c = a.stateNode;
      a.tag === 5 &&
        c !== null &&
        ((a = c),
        (c = Rr(e, r)),
        c != null && i.unshift(Hr(e, c, a)),
        (c = Rr(e, t)),
        c != null && i.push(Hr(e, c, a))),
        (e = e.return);
    }
    return i;
  }
  function Xn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vc(e, t, r, i, a) {
    for (var c = t._reactName, h = []; r !== null && r !== i; ) {
      var x = r,
        k = x.alternate,
        T = x.stateNode;
      if (k !== null && k === i) break;
      x.tag === 5 &&
        T !== null &&
        ((x = T),
        a
          ? ((k = Rr(r, c)), k != null && h.unshift(Hr(r, k, x)))
          : a || ((k = Rr(r, c)), k != null && h.push(Hr(r, k, x)))),
        (r = r.return);
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Ym = /\r\n?/g,
    Zm = /\u0000|\uFFFD/g;
  function yc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ym,
        `
`
      )
      .replace(Zm, "");
  }
  function qo(e, t, r) {
    if (((t = yc(t)), yc(e) !== t && r)) throw Error(l(425));
  }
  function Xo() {}
  var Ji = null,
    Yi = null;
  function Zi(e, t) {
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
  var es = typeof setTimeout == "function" ? setTimeout : void 0,
    eg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    xc = typeof Promise == "function" ? Promise : void 0,
    tg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof xc < "u"
        ? function (e) {
            return xc.resolve(null).then(e).catch(ng);
          }
        : es;
  function ng(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ts(e, t) {
    var r = t,
      i = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (i === 0) {
            e.removeChild(a), Dr(t);
            return;
          }
          i--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || i++;
      r = a;
    } while (r);
    Dr(t);
  }
  function tn(e) {
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
  function wc(e) {
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
  var Jn = Math.random().toString(36).slice(2),
    Ot = "__reactFiber$" + Jn,
    Kr = "__reactProps$" + Jn,
    zt = "__reactContainer$" + Jn,
    ns = "__reactEvents$" + Jn,
    rg = "__reactListeners$" + Jn,
    og = "__reactHandles$" + Jn;
  function Nn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[zt] || r[Ot])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = wc(e); e !== null; ) {
            if ((r = e[Ot])) return r;
            e = wc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Gr(e) {
    return (
      (e = e[Ot] || e[zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Jo(e) {
    return e[Kr] || null;
  }
  var rs = [],
    Zn = -1;
  function nn(e) {
    return { current: e };
  }
  function ke(e) {
    0 > Zn || ((e.current = rs[Zn]), (rs[Zn] = null), Zn--);
  }
  function we(e, t) {
    Zn++, (rs[Zn] = e.current), (e.current = t);
  }
  var rn = {},
    Ke = nn(rn),
    rt = nn(!1),
    Rn = rn;
  function er(e, t) {
    var r = e.type.contextTypes;
    if (!r) return rn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      c;
    for (c in r) a[c] = t[c];
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function ot(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Yo() {
    ke(rt), ke(Ke);
  }
  function Sc(e, t, r) {
    if (Ke.current !== rn) throw Error(l(168));
    we(Ke, t), we(rt, r);
  }
  function Ec(e, t, r) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return r;
    i = i.getChildContext();
    for (var a in i) if (!(a in t)) throw Error(l(108, xe(e) || "Unknown", a));
    return Q({}, r, i);
  }
  function Zo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        rn),
      (Rn = Ke.current),
      we(Ke, e),
      we(rt, rt.current),
      !0
    );
  }
  function Cc(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(l(169));
    r
      ? ((e = Ec(e, t, Rn)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        ke(rt),
        ke(Ke),
        we(Ke, e))
      : ke(rt),
      we(rt, r);
  }
  var Ut = null,
    el = !1,
    os = !1;
  function kc(e) {
    Ut === null ? (Ut = [e]) : Ut.push(e);
  }
  function lg(e) {
    (el = !0), kc(e);
  }
  function on() {
    if (!os && Ut !== null) {
      os = !0;
      var e = 0,
        t = ve;
      try {
        var r = Ut;
        for (ve = 1; e < r.length; e++) {
          var i = r[e];
          do i = i(!0);
          while (i !== null);
        }
        (Ut = null), (el = !1);
      } catch (a) {
        throw (Ut !== null && (Ut = Ut.slice(e + 1)), Ru(Ri, on), a);
      } finally {
        (ve = t), (os = !1);
      }
    }
    return null;
  }
  var tr = [],
    nr = 0,
    tl = null,
    nl = 0,
    gt = [],
    vt = 0,
    Pn = null,
    Bt = 1,
    $t = "";
  function jn(e, t) {
    (tr[nr++] = nl), (tr[nr++] = tl), (tl = e), (nl = t);
  }
  function Nc(e, t, r) {
    (gt[vt++] = Bt), (gt[vt++] = $t), (gt[vt++] = Pn), (Pn = e);
    var i = Bt;
    e = $t;
    var a = 32 - Et(i) - 1;
    (i &= ~(1 << a)), (r += 1);
    var c = 32 - Et(t) + a;
    if (30 < c) {
      var h = a - (a % 5);
      (c = (i & ((1 << h) - 1)).toString(32)),
        (i >>= h),
        (a -= h),
        (Bt = (1 << (32 - Et(t) + a)) | (r << a) | i),
        ($t = c + e);
    } else (Bt = (1 << c) | (r << a) | i), ($t = e);
  }
  function ls(e) {
    e.return !== null && (jn(e, 1), Nc(e, 1, 0));
  }
  function is(e) {
    for (; e === tl; )
      (tl = tr[--nr]), (tr[nr] = null), (nl = tr[--nr]), (tr[nr] = null);
    for (; e === Pn; )
      (Pn = gt[--vt]),
        (gt[vt] = null),
        ($t = gt[--vt]),
        (gt[vt] = null),
        (Bt = gt[--vt]),
        (gt[vt] = null);
  }
  var ft = null,
    pt = null,
    Pe = !1,
    kt = null;
  function Rc(e, t) {
    var r = St(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Pc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ft = e), (pt = tn(t.firstChild)), !0)
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
            ? ((r = Pn !== null ? { id: Bt, overflow: $t } : null),
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
  function ss(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function as(e) {
    if (Pe) {
      var t = pt;
      if (t) {
        var r = t;
        if (!Pc(e, t)) {
          if (ss(e)) throw Error(l(418));
          t = tn(r.nextSibling);
          var i = ft;
          t && Pc(e, t)
            ? Rc(i, r)
            : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (ft = e));
        }
      } else {
        if (ss(e)) throw Error(l(418));
        (e.flags = (e.flags & -4097) | 2), (Pe = !1), (ft = e);
      }
    }
  }
  function jc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ft = e;
  }
  function rl(e) {
    if (e !== ft) return !1;
    if (!Pe) return jc(e), (Pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Zi(e.type, e.memoizedProps))),
      t && (t = pt))
    ) {
      if (ss(e)) throw (bc(), Error(l(418)));
      for (; t; ) Rc(e, t), (t = tn(t.nextSibling));
    }
    if ((jc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                pt = tn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        pt = null;
      }
    } else pt = ft ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function bc() {
    for (var e = pt; e; ) e = tn(e.nextSibling);
  }
  function rr() {
    (pt = ft = null), (Pe = !1);
  }
  function us(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  var ig = W.ReactCurrentBatchConfig;
  function Qr(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(l(309));
          var i = r.stateNode;
        }
        if (!i) throw Error(l(147, e));
        var a = i,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (h) {
              var x = a.refs;
              h === null ? delete x[c] : (x[c] = h);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function ol(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function _c(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Tc(e) {
    function t(j, N) {
      if (e) {
        var _ = j.deletions;
        _ === null ? ((j.deletions = [N]), (j.flags |= 16)) : _.push(N);
      }
    }
    function r(j, N) {
      if (!e) return null;
      for (; N !== null; ) t(j, N), (N = N.sibling);
      return null;
    }
    function i(j, N) {
      for (j = new Map(); N !== null; )
        N.key !== null ? j.set(N.key, N) : j.set(N.index, N), (N = N.sibling);
      return j;
    }
    function a(j, N) {
      return (j = pn(j, N)), (j.index = 0), (j.sibling = null), j;
    }
    function c(j, N, _) {
      return (
        (j.index = _),
        e
          ? ((_ = j.alternate),
            _ !== null
              ? ((_ = _.index), _ < N ? ((j.flags |= 2), N) : _)
              : ((j.flags |= 2), N))
          : ((j.flags |= 1048576), N)
      );
    }
    function h(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function x(j, N, _, $) {
      return N === null || N.tag !== 6
        ? ((N = ea(_, j.mode, $)), (N.return = j), N)
        : ((N = a(N, _)), (N.return = j), N);
    }
    function k(j, N, _, $) {
      var Y = _.type;
      return Y === Z
        ? z(j, N, _.props.children, $, _.key)
        : N !== null &&
          (N.elementType === Y ||
            (typeof Y == "object" &&
              Y !== null &&
              Y.$$typeof === ye &&
              _c(Y) === N.type))
        ? (($ = a(N, _.props)), ($.ref = Qr(j, N, _)), ($.return = j), $)
        : (($ = jl(_.type, _.key, _.props, null, j.mode, $)),
          ($.ref = Qr(j, N, _)),
          ($.return = j),
          $);
    }
    function T(j, N, _, $) {
      return N === null ||
        N.tag !== 4 ||
        N.stateNode.containerInfo !== _.containerInfo ||
        N.stateNode.implementation !== _.implementation
        ? ((N = ta(_, j.mode, $)), (N.return = j), N)
        : ((N = a(N, _.children || [])), (N.return = j), N);
    }
    function z(j, N, _, $, Y) {
      return N === null || N.tag !== 7
        ? ((N = In(_, j.mode, $, Y)), (N.return = j), N)
        : ((N = a(N, _)), (N.return = j), N);
    }
    function U(j, N, _) {
      if ((typeof N == "string" && N !== "") || typeof N == "number")
        return (N = ea("" + N, j.mode, _)), (N.return = j), N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case K:
            return (
              (_ = jl(N.type, N.key, N.props, null, j.mode, _)),
              (_.ref = Qr(j, null, N)),
              (_.return = j),
              _
            );
          case V:
            return (N = ta(N, j.mode, _)), (N.return = j), N;
          case ye:
            var $ = N._init;
            return U(j, $(N._payload), _);
        }
        if (Cr(N) || ee(N))
          return (N = In(N, j.mode, _, null)), (N.return = j), N;
        ol(j, N);
      }
      return null;
    }
    function F(j, N, _, $) {
      var Y = N !== null ? N.key : null;
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return Y !== null ? null : x(j, N, "" + _, $);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case K:
            return _.key === Y ? k(j, N, _, $) : null;
          case V:
            return _.key === Y ? T(j, N, _, $) : null;
          case ye:
            return (Y = _._init), F(j, N, Y(_._payload), $);
        }
        if (Cr(_) || ee(_)) return Y !== null ? null : z(j, N, _, $, null);
        ol(j, _);
      }
      return null;
    }
    function G(j, N, _, $, Y) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return (j = j.get(_) || null), x(N, j, "" + $, Y);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case K:
            return (
              (j = j.get($.key === null ? _ : $.key) || null), k(N, j, $, Y)
            );
          case V:
            return (
              (j = j.get($.key === null ? _ : $.key) || null), T(N, j, $, Y)
            );
          case ye:
            var te = $._init;
            return G(j, N, _, te($._payload), Y);
        }
        if (Cr($) || ee($)) return (j = j.get(_) || null), z(N, j, $, Y, null);
        ol(N, $);
      }
      return null;
    }
    function X(j, N, _, $) {
      for (
        var Y = null, te = null, ne = N, oe = (N = 0), Be = null;
        ne !== null && oe < _.length;
        oe++
      ) {
        ne.index > oe ? ((Be = ne), (ne = null)) : (Be = ne.sibling);
        var me = F(j, ne, _[oe], $);
        if (me === null) {
          ne === null && (ne = Be);
          break;
        }
        e && ne && me.alternate === null && t(j, ne),
          (N = c(me, N, oe)),
          te === null ? (Y = me) : (te.sibling = me),
          (te = me),
          (ne = Be);
      }
      if (oe === _.length) return r(j, ne), Pe && jn(j, oe), Y;
      if (ne === null) {
        for (; oe < _.length; oe++)
          (ne = U(j, _[oe], $)),
            ne !== null &&
              ((N = c(ne, N, oe)),
              te === null ? (Y = ne) : (te.sibling = ne),
              (te = ne));
        return Pe && jn(j, oe), Y;
      }
      for (ne = i(j, ne); oe < _.length; oe++)
        (Be = G(ne, j, oe, _[oe], $)),
          Be !== null &&
            (e &&
              Be.alternate !== null &&
              ne.delete(Be.key === null ? oe : Be.key),
            (N = c(Be, N, oe)),
            te === null ? (Y = Be) : (te.sibling = Be),
            (te = Be));
      return (
        e &&
          ne.forEach(function (hn) {
            return t(j, hn);
          }),
        Pe && jn(j, oe),
        Y
      );
    }
    function J(j, N, _, $) {
      var Y = ee(_);
      if (typeof Y != "function") throw Error(l(150));
      if (((_ = Y.call(_)), _ == null)) throw Error(l(151));
      for (
        var te = (Y = null), ne = N, oe = (N = 0), Be = null, me = _.next();
        ne !== null && !me.done;
        oe++, me = _.next()
      ) {
        ne.index > oe ? ((Be = ne), (ne = null)) : (Be = ne.sibling);
        var hn = F(j, ne, me.value, $);
        if (hn === null) {
          ne === null && (ne = Be);
          break;
        }
        e && ne && hn.alternate === null && t(j, ne),
          (N = c(hn, N, oe)),
          te === null ? (Y = hn) : (te.sibling = hn),
          (te = hn),
          (ne = Be);
      }
      if (me.done) return r(j, ne), Pe && jn(j, oe), Y;
      if (ne === null) {
        for (; !me.done; oe++, me = _.next())
          (me = U(j, me.value, $)),
            me !== null &&
              ((N = c(me, N, oe)),
              te === null ? (Y = me) : (te.sibling = me),
              (te = me));
        return Pe && jn(j, oe), Y;
      }
      for (ne = i(j, ne); !me.done; oe++, me = _.next())
        (me = G(ne, j, oe, me.value, $)),
          me !== null &&
            (e &&
              me.alternate !== null &&
              ne.delete(me.key === null ? oe : me.key),
            (N = c(me, N, oe)),
            te === null ? (Y = me) : (te.sibling = me),
            (te = me));
      return (
        e &&
          ne.forEach(function (zg) {
            return t(j, zg);
          }),
        Pe && jn(j, oe),
        Y
      );
    }
    function Ae(j, N, _, $) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === Z &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case K:
            e: {
              for (var Y = _.key, te = N; te !== null; ) {
                if (te.key === Y) {
                  if (((Y = _.type), Y === Z)) {
                    if (te.tag === 7) {
                      r(j, te.sibling),
                        (N = a(te, _.props.children)),
                        (N.return = j),
                        (j = N);
                      break e;
                    }
                  } else if (
                    te.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === ye &&
                      _c(Y) === te.type)
                  ) {
                    r(j, te.sibling),
                      (N = a(te, _.props)),
                      (N.ref = Qr(j, te, _)),
                      (N.return = j),
                      (j = N);
                    break e;
                  }
                  r(j, te);
                  break;
                } else t(j, te);
                te = te.sibling;
              }
              _.type === Z
                ? ((N = In(_.props.children, j.mode, $, _.key)),
                  (N.return = j),
                  (j = N))
                : (($ = jl(_.type, _.key, _.props, null, j.mode, $)),
                  ($.ref = Qr(j, N, _)),
                  ($.return = j),
                  (j = $));
            }
            return h(j);
          case V:
            e: {
              for (te = _.key; N !== null; ) {
                if (N.key === te)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === _.containerInfo &&
                    N.stateNode.implementation === _.implementation
                  ) {
                    r(j, N.sibling),
                      (N = a(N, _.children || [])),
                      (N.return = j),
                      (j = N);
                    break e;
                  } else {
                    r(j, N);
                    break;
                  }
                else t(j, N);
                N = N.sibling;
              }
              (N = ta(_, j.mode, $)), (N.return = j), (j = N);
            }
            return h(j);
          case ye:
            return (te = _._init), Ae(j, N, te(_._payload), $);
        }
        if (Cr(_)) return X(j, N, _, $);
        if (ee(_)) return J(j, N, _, $);
        ol(j, _);
      }
      return (typeof _ == "string" && _ !== "") || typeof _ == "number"
        ? ((_ = "" + _),
          N !== null && N.tag === 6
            ? (r(j, N.sibling), (N = a(N, _)), (N.return = j), (j = N))
            : (r(j, N), (N = ea(_, j.mode, $)), (N.return = j), (j = N)),
          h(j))
        : r(j, N);
    }
    return Ae;
  }
  var or = Tc(!0),
    Oc = Tc(!1),
    ll = nn(null),
    il = null,
    lr = null,
    cs = null;
  function ds() {
    cs = lr = il = null;
  }
  function fs(e) {
    var t = ll.current;
    ke(ll), (e._currentValue = t);
  }
  function ps(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function ir(e, t) {
    (il = e),
      (cs = lr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (lt = !0), (e.firstContext = null));
  }
  function yt(e) {
    var t = e._currentValue;
    if (cs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), lr === null)) {
        if (il === null) throw Error(l(308));
        (lr = e), (il.dependencies = { lanes: 0, firstContext: e });
      } else lr = lr.next = e;
    return t;
  }
  var bn = null;
  function hs(e) {
    bn === null ? (bn = [e]) : bn.push(e);
  }
  function Ac(e, t, r, i) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), hs(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Wt(e, i)
    );
  }
  function Wt(e, t) {
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
  var ln = !1;
  function ms(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Lc(e, t) {
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
  function Vt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function sn(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), de & 2)) {
      var a = i.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (i.pending = t),
        Wt(e, r)
      );
    }
    return (
      (a = i.interleaved),
      a === null ? ((t.next = t), hs(i)) : ((t.next = a.next), (a.next = t)),
      (i.interleaved = t),
      Wt(e, r)
    );
  }
  function sl(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), bi(e, r);
    }
  }
  function Dc(e, t) {
    var r = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), r === i)) {
      var a = null,
        c = null;
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
          c === null ? (a = c = h) : (c = c.next = h), (r = r.next);
        } while (r !== null);
        c === null ? (a = c = t) : (c = c.next = t);
      } else a = c = t;
      (r = {
        baseState: i.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: c,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function al(e, t, r, i) {
    var a = e.updateQueue;
    ln = !1;
    var c = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      x = a.shared.pending;
    if (x !== null) {
      a.shared.pending = null;
      var k = x,
        T = k.next;
      (k.next = null), h === null ? (c = T) : (h.next = T), (h = k);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (x = z.lastBaseUpdate),
        x !== h &&
          (x === null ? (z.firstBaseUpdate = T) : (x.next = T),
          (z.lastBaseUpdate = k)));
    }
    if (c !== null) {
      var U = a.baseState;
      (h = 0), (z = T = k = null), (x = c);
      do {
        var F = x.lane,
          G = x.eventTime;
        if ((i & F) === F) {
          z !== null &&
            (z = z.next =
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
            switch (((F = t), (G = r), J.tag)) {
              case 1:
                if (((X = J.payload), typeof X == "function")) {
                  U = X.call(G, U, F);
                  break e;
                }
                U = X;
                break e;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = J.payload),
                  (F = typeof X == "function" ? X.call(G, U, F) : X),
                  F == null)
                )
                  break e;
                U = Q({}, U, F);
                break e;
              case 2:
                ln = !0;
            }
          }
          x.callback !== null &&
            x.lane !== 0 &&
            ((e.flags |= 64),
            (F = a.effects),
            F === null ? (a.effects = [x]) : F.push(x));
        } else
          (G = {
            eventTime: G,
            lane: F,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            z === null ? ((T = z = G), (k = U)) : (z = z.next = G),
            (h |= F);
        if (((x = x.next), x === null)) {
          if (((x = a.shared.pending), x === null)) break;
          (F = x),
            (x = F.next),
            (F.next = null),
            (a.lastBaseUpdate = F),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (z === null && (k = U),
        (a.baseState = k),
        (a.firstBaseUpdate = T),
        (a.lastBaseUpdate = z),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do (h |= a.lane), (a = a.next);
        while (a !== t);
      } else c === null && (a.shared.lanes = 0);
      (On |= h), (e.lanes = h), (e.memoizedState = U);
    }
  }
  function Ic(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          a = i.callback;
        if (a !== null) {
          if (((i.callback = null), (i = r), typeof a != "function"))
            throw Error(l(191, a));
          a.call(i);
        }
      }
  }
  var qr = {},
    At = nn(qr),
    Xr = nn(qr),
    Jr = nn(qr);
  function _n(e) {
    if (e === qr) throw Error(l(174));
    return e;
  }
  function gs(e, t) {
    switch ((we(Jr, t), we(Xr, e), we(At, qr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : vi(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = vi(t, e));
    }
    ke(At), we(At, t);
  }
  function sr() {
    ke(At), ke(Xr), ke(Jr);
  }
  function Fc(e) {
    _n(Jr.current);
    var t = _n(At.current),
      r = vi(t, e.type);
    t !== r && (we(Xr, e), we(At, r));
  }
  function vs(e) {
    Xr.current === e && (ke(At), ke(Xr));
  }
  var je = nn(0);
  function ul(e) {
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
  var ys = [];
  function xs() {
    for (var e = 0; e < ys.length; e++)
      ys[e]._workInProgressVersionPrimary = null;
    ys.length = 0;
  }
  var cl = W.ReactCurrentDispatcher,
    ws = W.ReactCurrentBatchConfig,
    Tn = 0,
    be = null,
    Fe = null,
    ze = null,
    dl = !1,
    Yr = !1,
    Zr = 0,
    sg = 0;
  function Ge() {
    throw Error(l(321));
  }
  function Ss(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Ct(e[r], t[r])) return !1;
    return !0;
  }
  function Es(e, t, r, i, a, c) {
    if (
      ((Tn = c),
      (be = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (cl.current = e === null || e.memoizedState === null ? dg : fg),
      (e = r(i, a)),
      Yr)
    ) {
      c = 0;
      do {
        if (((Yr = !1), (Zr = 0), 25 <= c)) throw Error(l(301));
        (c += 1),
          (ze = Fe = null),
          (t.updateQueue = null),
          (cl.current = pg),
          (e = r(i, a));
      } while (Yr);
    }
    if (
      ((cl.current = hl),
      (t = Fe !== null && Fe.next !== null),
      (Tn = 0),
      (ze = Fe = be = null),
      (dl = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function Cs() {
    var e = Zr !== 0;
    return (Zr = 0), e;
  }
  function Lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ze === null ? (be.memoizedState = ze = e) : (ze = ze.next = e), ze;
  }
  function xt() {
    if (Fe === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = ze === null ? be.memoizedState : ze.next;
    if (t !== null) (ze = t), (Fe = e);
    else {
      if (e === null) throw Error(l(310));
      (Fe = e),
        (e = {
          memoizedState: Fe.memoizedState,
          baseState: Fe.baseState,
          baseQueue: Fe.baseQueue,
          queue: Fe.queue,
          next: null,
        }),
        ze === null ? (be.memoizedState = ze = e) : (ze = ze.next = e);
    }
    return ze;
  }
  function eo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ks(e) {
    var t = xt(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var i = Fe,
      a = i.baseQueue,
      c = r.pending;
    if (c !== null) {
      if (a !== null) {
        var h = a.next;
        (a.next = c.next), (c.next = h);
      }
      (i.baseQueue = a = c), (r.pending = null);
    }
    if (a !== null) {
      (c = a.next), (i = i.baseState);
      var x = (h = null),
        k = null,
        T = c;
      do {
        var z = T.lane;
        if ((Tn & z) === z)
          k !== null &&
            (k = k.next =
              {
                lane: 0,
                action: T.action,
                hasEagerState: T.hasEagerState,
                eagerState: T.eagerState,
                next: null,
              }),
            (i = T.hasEagerState ? T.eagerState : e(i, T.action));
        else {
          var U = {
            lane: z,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          };
          k === null ? ((x = k = U), (h = i)) : (k = k.next = U),
            (be.lanes |= z),
            (On |= z);
        }
        T = T.next;
      } while (T !== null && T !== c);
      k === null ? (h = i) : (k.next = x),
        Ct(i, t.memoizedState) || (lt = !0),
        (t.memoizedState = i),
        (t.baseState = h),
        (t.baseQueue = k),
        (r.lastRenderedState = i);
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do (c = a.lane), (be.lanes |= c), (On |= c), (a = a.next);
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Ns(e) {
    var t = xt(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch,
      a = r.pending,
      c = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var h = (a = a.next);
      do (c = e(c, h.action)), (h = h.next);
      while (h !== a);
      Ct(c, t.memoizedState) || (lt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c);
    }
    return [c, i];
  }
  function Mc() {}
  function zc(e, t) {
    var r = be,
      i = xt(),
      a = t(),
      c = !Ct(i.memoizedState, a);
    if (
      (c && ((i.memoizedState = a), (lt = !0)),
      (i = i.queue),
      Rs($c.bind(null, r, i, e), [e]),
      i.getSnapshot !== t || c || (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        to(9, Bc.bind(null, r, i, a, t), void 0, null),
        Ue === null)
      )
        throw Error(l(349));
      Tn & 30 || Uc(r, t, a);
    }
    return a;
  }
  function Uc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = be.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (be.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Bc(e, t, r, i) {
    (t.value = r), (t.getSnapshot = i), Wc(t) && Vc(e);
  }
  function $c(e, t, r) {
    return r(function () {
      Wc(t) && Vc(e);
    });
  }
  function Wc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ct(e, r);
    } catch {
      return !0;
    }
  }
  function Vc(e) {
    var t = Wt(e, 1);
    t !== null && jt(t, e, 1, -1);
  }
  function Hc(e) {
    var t = Lt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: eo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = cg.bind(null, be, e)),
      [t.memoizedState, e]
    );
  }
  function to(e, t, r, i) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: i, next: null }),
      (t = be.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (be.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((i = r.next), (r.next = e), (e.next = i), (t.lastEffect = e))),
      e
    );
  }
  function Kc() {
    return xt().memoizedState;
  }
  function fl(e, t, r, i) {
    var a = Lt();
    (be.flags |= e),
      (a.memoizedState = to(1 | t, r, void 0, i === void 0 ? null : i));
  }
  function pl(e, t, r, i) {
    var a = xt();
    i = i === void 0 ? null : i;
    var c = void 0;
    if (Fe !== null) {
      var h = Fe.memoizedState;
      if (((c = h.destroy), i !== null && Ss(i, h.deps))) {
        a.memoizedState = to(t, r, c, i);
        return;
      }
    }
    (be.flags |= e), (a.memoizedState = to(1 | t, r, c, i));
  }
  function Gc(e, t) {
    return fl(8390656, 8, e, t);
  }
  function Rs(e, t) {
    return pl(2048, 8, e, t);
  }
  function Qc(e, t) {
    return pl(4, 2, e, t);
  }
  function qc(e, t) {
    return pl(4, 4, e, t);
  }
  function Xc(e, t) {
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
  function Jc(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), pl(4, 4, Xc.bind(null, t, e), r)
    );
  }
  function Ps() {}
  function Yc(e, t) {
    var r = xt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && Ss(t, i[1])
      ? i[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function Zc(e, t) {
    var r = xt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && Ss(t, i[1])
      ? i[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function ed(e, t, r) {
    return Tn & 21
      ? (Ct(r, t) ||
          ((r = _u()), (be.lanes |= r), (On |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = r));
  }
  function ag(e, t) {
    var r = ve;
    (ve = r !== 0 && 4 > r ? r : 4), e(!0);
    var i = ws.transition;
    ws.transition = {};
    try {
      e(!1), t();
    } finally {
      (ve = r), (ws.transition = i);
    }
  }
  function td() {
    return xt().memoizedState;
  }
  function ug(e, t, r) {
    var i = dn(e);
    if (
      ((r = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      nd(e))
    )
      rd(t, r);
    else if (((r = Ac(e, t, r, i)), r !== null)) {
      var a = et();
      jt(r, e, i, a), od(r, t, i);
    }
  }
  function cg(e, t, r) {
    var i = dn(e),
      a = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (nd(e)) rd(t, a);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var h = t.lastRenderedState,
            x = c(h, r);
          if (((a.hasEagerState = !0), (a.eagerState = x), Ct(x, h))) {
            var k = t.interleaved;
            k === null
              ? ((a.next = a), hs(t))
              : ((a.next = k.next), (k.next = a)),
              (t.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (r = Ac(e, t, a, i)),
        r !== null && ((a = et()), jt(r, e, i, a), od(r, t, i));
    }
  }
  function nd(e) {
    var t = e.alternate;
    return e === be || (t !== null && t === be);
  }
  function rd(e, t) {
    Yr = dl = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function od(e, t, r) {
    if (r & 4194240) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), bi(e, r);
    }
  }
  var hl = {
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
    dg = {
      readContext: yt,
      useCallback: function (e, t) {
        return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: yt,
      useEffect: Gc,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          fl(4194308, 4, Xc.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return fl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return fl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Lt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var i = Lt();
        return (
          (t = r !== void 0 ? r(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = ug.bind(null, be, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Lt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Hc,
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        return (Lt().memoizedState = e);
      },
      useTransition: function () {
        var e = Hc(!1),
          t = e[0];
        return (e = ag.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var i = be,
          a = Lt();
        if (Pe) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = t()), Ue === null)) throw Error(l(349));
          Tn & 30 || Uc(i, t, r);
        }
        a.memoizedState = r;
        var c = { value: r, getSnapshot: t };
        return (
          (a.queue = c),
          Gc($c.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          to(9, Bc.bind(null, i, c, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Lt(),
          t = Ue.identifierPrefix;
        if (Pe) {
          var r = $t,
            i = Bt;
          (r = (i & ~(1 << (32 - Et(i) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Zr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = sg++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    fg = {
      readContext: yt,
      useCallback: Yc,
      useContext: yt,
      useEffect: Rs,
      useImperativeHandle: Jc,
      useInsertionEffect: Qc,
      useLayoutEffect: qc,
      useMemo: Zc,
      useReducer: ks,
      useRef: Kc,
      useState: function () {
        return ks(eo);
      },
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        var t = xt();
        return ed(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = ks(eo)[0],
          t = xt().memoizedState;
        return [e, t];
      },
      useMutableSource: Mc,
      useSyncExternalStore: zc,
      useId: td,
      unstable_isNewReconciler: !1,
    },
    pg = {
      readContext: yt,
      useCallback: Yc,
      useContext: yt,
      useEffect: Rs,
      useImperativeHandle: Jc,
      useInsertionEffect: Qc,
      useLayoutEffect: qc,
      useMemo: Zc,
      useReducer: Ns,
      useRef: Kc,
      useState: function () {
        return Ns(eo);
      },
      useDebugValue: Ps,
      useDeferredValue: function (e) {
        var t = xt();
        return Fe === null ? (t.memoizedState = e) : ed(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ns(eo)[0],
          t = xt().memoizedState;
        return [e, t];
      },
      useMutableSource: Mc,
      useSyncExternalStore: zc,
      useId: td,
      unstable_isNewReconciler: !1,
    };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      (t = Q({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function js(e, t, r, i) {
    (t = e.memoizedState),
      (r = r(i, t)),
      (r = r == null ? t : Q({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ml = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? kn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var i = et(),
        a = dn(e),
        c = Vt(i, a);
      (c.payload = t),
        r != null && (c.callback = r),
        (t = sn(e, c, a)),
        t !== null && (jt(t, e, a, i), sl(t, e, a));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var i = et(),
        a = dn(e),
        c = Vt(i, a);
      (c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = sn(e, c, a)),
        t !== null && (jt(t, e, a, i), sl(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = et(),
        i = dn(e),
        a = Vt(r, i);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = sn(e, a, i)),
        t !== null && (jt(t, e, i, r), sl(t, e, i));
    },
  };
  function ld(e, t, r, i, a, c, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, c, h)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Br(r, i) || !Br(a, c)
        : !0
    );
  }
  function id(e, t, r) {
    var i = !1,
      a = rn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = yt(c))
        : ((a = ot(t) ? Rn : Ke.current),
          (i = t.contextTypes),
          (c = (i = i != null) ? er(e, a) : rn)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ml),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function sd(e, t, r, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, i),
      t.state !== e && ml.enqueueReplaceState(t, t.state, null);
  }
  function bs(e, t, r, i) {
    var a = e.stateNode;
    (a.props = r), (a.state = e.memoizedState), (a.refs = {}), ms(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (a.context = yt(c))
      : ((c = ot(t) ? Rn : Ke.current), (a.context = er(e, c))),
      (a.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (js(e, t, c, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && ml.enqueueReplaceState(a, a.state, null),
        al(e, r, a, i),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ar(e, t) {
    try {
      var r = "",
        i = t;
      do (r += pe(i)), (i = i.return);
      while (i);
      var a = r;
    } catch (c) {
      a =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function _s(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Ts(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var hg = typeof WeakMap == "function" ? WeakMap : Map;
  function ad(e, t, r) {
    (r = Vt(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var i = t.value;
    return (
      (r.callback = function () {
        El || ((El = !0), (Ks = i)), Ts(e, t);
      }),
      r
    );
  }
  function ud(e, t, r) {
    (r = Vt(-1, r)), (r.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var a = t.value;
      (r.payload = function () {
        return i(a);
      }),
        (r.callback = function () {
          Ts(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (r.callback = function () {
          Ts(e, t),
            typeof i != "function" &&
              (un === null ? (un = new Set([this])) : un.add(this));
          var h = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: h !== null ? h : "",
          });
        }),
      r
    );
  }
  function cd(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new hg();
      var a = new Set();
      i.set(t, a);
    } else (a = i.get(t)), a === void 0 && ((a = new Set()), i.set(t, a));
    a.has(r) || (a.add(r), (e = jg.bind(null, e, t, r)), t.then(e, e));
  }
  function dd(e) {
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
  function fd(e, t, r, i, a) {
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
                : ((t = Vt(-1, 1)), (t.tag = 2), sn(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var mg = W.ReactCurrentOwner,
    lt = !1;
  function Ze(e, t, r, i) {
    t.child = e === null ? Oc(t, null, r, i) : or(t, e.child, r, i);
  }
  function pd(e, t, r, i, a) {
    r = r.render;
    var c = t.ref;
    return (
      ir(t, a),
      (i = Es(e, t, r, i, c, a)),
      (r = Cs()),
      e !== null && !lt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Ht(e, t, a))
        : (Pe && r && ls(t), (t.flags |= 1), Ze(e, t, i, a), t.child)
    );
  }
  function hd(e, t, r, i, a) {
    if (e === null) {
      var c = r.type;
      return typeof c == "function" &&
        !Zs(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), md(e, t, c, i, a))
        : ((e = jl(r.type, null, i, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !(e.lanes & a))) {
      var h = c.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Br), r(h, i) && e.ref === t.ref)
      )
        return Ht(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = pn(c, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function md(e, t, r, i, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Br(c, i) && e.ref === t.ref)
        if (((lt = !1), (t.pendingProps = i = c), (e.lanes & a) !== 0))
          e.flags & 131072 && (lt = !0);
        else return (t.lanes = e.lanes), Ht(e, t, a);
    }
    return Os(e, t, r, i, a);
  }
  function gd(e, t, r) {
    var i = t.pendingProps,
      a = i.children,
      c = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          we(cr, ht),
          (ht |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            we(cr, ht),
            (ht |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = c !== null ? c.baseLanes : r),
          we(cr, ht),
          (ht |= i);
      }
    else
      c !== null ? ((i = c.baseLanes | r), (t.memoizedState = null)) : (i = r),
        we(cr, ht),
        (ht |= i);
    return Ze(e, t, a, r), t.child;
  }
  function vd(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Os(e, t, r, i, a) {
    var c = ot(r) ? Rn : Ke.current;
    return (
      (c = er(t, c)),
      ir(t, a),
      (r = Es(e, t, r, i, c, a)),
      (i = Cs()),
      e !== null && !lt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Ht(e, t, a))
        : (Pe && i && ls(t), (t.flags |= 1), Ze(e, t, r, a), t.child)
    );
  }
  function yd(e, t, r, i, a) {
    if (ot(r)) {
      var c = !0;
      Zo(t);
    } else c = !1;
    if ((ir(t, a), t.stateNode === null))
      vl(e, t), id(t, r, i), bs(t, r, i, a), (i = !0);
    else if (e === null) {
      var h = t.stateNode,
        x = t.memoizedProps;
      h.props = x;
      var k = h.context,
        T = r.contextType;
      typeof T == "object" && T !== null
        ? (T = yt(T))
        : ((T = ot(r) ? Rn : Ke.current), (T = er(t, T)));
      var z = r.getDerivedStateFromProps,
        U =
          typeof z == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function";
      U ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((x !== i || k !== T) && sd(t, h, i, T)),
        (ln = !1);
      var F = t.memoizedState;
      (h.state = F),
        al(t, i, h, a),
        (k = t.memoizedState),
        x !== i || F !== k || rt.current || ln
          ? (typeof z == "function" && (js(t, r, z, i), (k = t.memoizedState)),
            (x = ln || ld(t, r, x, i, F, k, T))
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
                (t.memoizedProps = i),
                (t.memoizedState = k)),
            (h.props = i),
            (h.state = k),
            (h.context = T),
            (i = x))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (h = t.stateNode),
        Lc(e, t),
        (x = t.memoizedProps),
        (T = t.type === t.elementType ? x : Nt(t.type, x)),
        (h.props = T),
        (U = t.pendingProps),
        (F = h.context),
        (k = r.contextType),
        typeof k == "object" && k !== null
          ? (k = yt(k))
          : ((k = ot(r) ? Rn : Ke.current), (k = er(t, k)));
      var G = r.getDerivedStateFromProps;
      (z =
        typeof G == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((x !== U || F !== k) && sd(t, h, i, k)),
        (ln = !1),
        (F = t.memoizedState),
        (h.state = F),
        al(t, i, h, a);
      var X = t.memoizedState;
      x !== U || F !== X || rt.current || ln
        ? (typeof G == "function" && (js(t, r, G, i), (X = t.memoizedState)),
          (T = ln || ld(t, r, T, i, F, X, k) || !1)
            ? (z ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(i, X, k),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(i, X, k)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (x === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = X)),
          (h.props = i),
          (h.state = X),
          (h.context = k),
          (i = T))
        : (typeof h.componentDidUpdate != "function" ||
            (x === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return As(e, t, r, i, c, a);
  }
  function As(e, t, r, i, a, c) {
    vd(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return a && Cc(t, r, !1), Ht(e, t, c);
    (i = t.stateNode), (mg.current = t);
    var x =
      h && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = or(t, e.child, null, c)), (t.child = or(t, null, x, c)))
        : Ze(e, t, x, c),
      (t.memoizedState = i.state),
      a && Cc(t, r, !0),
      t.child
    );
  }
  function xd(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Sc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Sc(e, t.context, !1),
      gs(e, t.containerInfo);
  }
  function wd(e, t, r, i, a) {
    return rr(), us(a), (t.flags |= 256), Ze(e, t, r, i), t.child;
  }
  var Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ds(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Sd(e, t, r) {
    var i = t.pendingProps,
      a = je.current,
      c = !1,
      h = (t.flags & 128) !== 0,
      x;
    if (
      ((x = h) ||
        (x = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      x
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      we(je, a & 1),
      e === null)
    )
      return (
        as(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((h = i.children),
            (e = i.fallback),
            c
              ? ((i = t.mode),
                (c = t.child),
                (h = { mode: "hidden", children: h }),
                !(i & 1) && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = h))
                  : (c = bl(h, i, 0, null)),
                (e = In(e, i, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = Ds(r)),
                (t.memoizedState = Ls),
                e)
              : Is(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((x = a.dehydrated), x !== null)))
      return gg(e, t, h, i, x, a, r);
    if (c) {
      (c = i.fallback), (h = t.mode), (a = e.child), (x = a.sibling);
      var k = { mode: "hidden", children: i.children };
      return (
        !(h & 1) && t.child !== a
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = k),
            (t.deletions = null))
          : ((i = pn(a, k)), (i.subtreeFlags = a.subtreeFlags & 14680064)),
        x !== null ? (c = pn(x, c)) : ((c = In(c, h, r, null)), (c.flags |= 2)),
        (c.return = t),
        (i.return = t),
        (i.sibling = c),
        (t.child = i),
        (i = c),
        (c = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Ds(r)
            : {
                baseLanes: h.baseLanes | r,
                cachePool: null,
                transitions: h.transitions,
              }),
        (c.memoizedState = h),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ls),
        i
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (i = pn(c, { mode: "visible", children: i.children })),
      !(t.mode & 1) && (i.lanes = r),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function Is(e, t) {
    return (
      (t = bl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function gl(e, t, r, i) {
    return (
      i !== null && us(i),
      or(t, e.child, null, r),
      (e = Is(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function gg(e, t, r, i, a, c, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (i = _s(Error(l(422)))), gl(e, t, h, i))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = i.fallback),
          (a = t.mode),
          (i = bl({ mode: "visible", children: i.children }, a, 0, null)),
          (c = In(c, a, h, null)),
          (c.flags |= 2),
          (i.return = t),
          (c.return = t),
          (i.sibling = c),
          (t.child = i),
          t.mode & 1 && or(t, e.child, null, h),
          (t.child.memoizedState = Ds(h)),
          (t.memoizedState = Ls),
          c);
    if (!(t.mode & 1)) return gl(e, t, h, null);
    if (a.data === "$!") {
      if (((i = a.nextSibling && a.nextSibling.dataset), i)) var x = i.dgst;
      return (
        (i = x), (c = Error(l(419))), (i = _s(c, i, void 0)), gl(e, t, h, i)
      );
    }
    if (((x = (h & e.childLanes) !== 0), lt || x)) {
      if (((i = Ue), i !== null)) {
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
        (a = a & (i.suspendedLanes | h) ? 0 : a),
          a !== 0 &&
            a !== c.retryLane &&
            ((c.retryLane = a), Wt(e, a), jt(i, e, a, -1));
      }
      return Ys(), (i = _s(Error(l(421)))), gl(e, t, h, i);
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = bg.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (pt = tn(a.nextSibling)),
        (ft = t),
        (Pe = !0),
        (kt = null),
        e !== null &&
          ((gt[vt++] = Bt),
          (gt[vt++] = $t),
          (gt[vt++] = Pn),
          (Bt = e.id),
          ($t = e.overflow),
          (Pn = t)),
        (t = Is(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function Ed(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), ps(e.return, t, r);
  }
  function Fs(e, t, r, i, a) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: r,
          tailMode: a,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = r),
        (c.tailMode = a));
  }
  function Cd(e, t, r) {
    var i = t.pendingProps,
      a = i.revealOrder,
      c = i.tail;
    if ((Ze(e, t, i.children, r), (i = je.current), i & 2))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ed(e, r, t);
          else if (e.tag === 19) Ed(e, r, t);
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
      i &= 1;
    }
    if ((we(je, i), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null; )
            (e = r.alternate),
              e !== null && ul(e) === null && (a = r),
              (r = r.sibling);
          (r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            Fs(t, !1, a, r, c);
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && ul(e) === null)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = r), (r = a), (a = e);
          }
          Fs(t, !0, r, null, c);
          break;
        case "together":
          Fs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function vl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ht(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (On |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, r = pn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = pn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function vg(e, t, r) {
    switch (t.tag) {
      case 3:
        xd(t), rr();
        break;
      case 5:
        Fc(t);
        break;
      case 1:
        ot(t.type) && Zo(t);
        break;
      case 4:
        gs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          a = t.memoizedProps.value;
        we(ll, i._currentValue), (i._currentValue = a);
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (we(je, je.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? Sd(e, t, r)
            : (we(je, je.current & 1),
              (e = Ht(e, t, r)),
              e !== null ? e.sibling : null);
        we(je, je.current & 1);
        break;
      case 19:
        if (((i = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (i) return Cd(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          we(je, je.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), gd(e, t, r);
    }
    return Ht(e, t, r);
  }
  var kd, Ms, Nd, Rd;
  (kd = function (e, t) {
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
    (Ms = function () {}),
    (Nd = function (e, t, r, i) {
      var a = e.memoizedProps;
      if (a !== i) {
        (e = t.stateNode), _n(At.current);
        var c = null;
        switch (r) {
          case "input":
            (a = pi(e, a)), (i = pi(e, i)), (c = []);
            break;
          case "select":
            (a = Q({}, a, { value: void 0 })),
              (i = Q({}, i, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (a = gi(e, a)), (i = gi(e, i)), (c = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = Xo);
        }
        yi(r, i);
        var h;
        r = null;
        for (T in a)
          if (!i.hasOwnProperty(T) && a.hasOwnProperty(T) && a[T] != null)
            if (T === "style") {
              var x = a[T];
              for (h in x) x.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              T !== "dangerouslySetInnerHTML" &&
                T !== "children" &&
                T !== "suppressContentEditableWarning" &&
                T !== "suppressHydrationWarning" &&
                T !== "autoFocus" &&
                (u.hasOwnProperty(T)
                  ? c || (c = [])
                  : (c = c || []).push(T, null));
        for (T in i) {
          var k = i[T];
          if (
            ((x = a != null ? a[T] : void 0),
            i.hasOwnProperty(T) && k !== x && (k != null || x != null))
          )
            if (T === "style")
              if (x) {
                for (h in x)
                  !x.hasOwnProperty(h) ||
                    (k && k.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in k)
                  k.hasOwnProperty(h) &&
                    x[h] !== k[h] &&
                    (r || (r = {}), (r[h] = k[h]));
              } else r || (c || (c = []), c.push(T, r)), (r = k);
            else
              T === "dangerouslySetInnerHTML"
                ? ((k = k ? k.__html : void 0),
                  (x = x ? x.__html : void 0),
                  k != null && x !== k && (c = c || []).push(T, k))
                : T === "children"
                ? (typeof k != "string" && typeof k != "number") ||
                  (c = c || []).push(T, "" + k)
                : T !== "suppressContentEditableWarning" &&
                  T !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(T)
                    ? (k != null && T === "onScroll" && Ce("scroll", e),
                      c || x === k || (c = []))
                    : (c = c || []).push(T, k));
        }
        r && (c = c || []).push("style", r);
        var T = c;
        (t.updateQueue = T) && (t.flags |= 4);
      }
    }),
    (Rd = function (e, t, r, i) {
      r !== i && (t.flags |= 4);
    });
  function no(e, t) {
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
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), (r = r.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      i = 0;
    if (t)
      for (var a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (i |= a.subtreeFlags & 14680064),
          (i |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (i |= a.subtreeFlags),
          (i |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = r), t;
  }
  function yg(e, t, r) {
    var i = t.pendingProps;
    switch ((is(t), t.tag)) {
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
        return ot(t.type) && Yo(), Qe(t), null;
      case 3:
        return (
          (i = t.stateNode),
          sr(),
          ke(rt),
          ke(Ke),
          xs(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (rl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), kt !== null && (qs(kt), (kt = null)))),
          Ms(e, t),
          Qe(t),
          null
        );
      case 5:
        vs(t);
        var a = _n(Jr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          Nd(e, t, r, i, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166));
            return Qe(t), null;
          }
          if (((e = _n(At.current)), rl(t))) {
            (i = t.stateNode), (r = t.type);
            var c = t.memoizedProps;
            switch (((i[Ot] = t), (i[Kr] = c), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Ce("cancel", i), Ce("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ce("load", i);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Wr.length; a++) Ce(Wr[a], i);
                break;
              case "source":
                Ce("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Ce("error", i), Ce("load", i);
                break;
              case "details":
                Ce("toggle", i);
                break;
              case "input":
                iu(i, c), Ce("invalid", i);
                break;
              case "select":
                (i._wrapperState = { wasMultiple: !!c.multiple }),
                  Ce("invalid", i);
                break;
              case "textarea":
                uu(i, c), Ce("invalid", i);
            }
            yi(r, c), (a = null);
            for (var h in c)
              if (c.hasOwnProperty(h)) {
                var x = c[h];
                h === "children"
                  ? typeof x == "string"
                    ? i.textContent !== x &&
                      (c.suppressHydrationWarning !== !0 &&
                        qo(i.textContent, x, e),
                      (a = ["children", x]))
                    : typeof x == "number" &&
                      i.textContent !== "" + x &&
                      (c.suppressHydrationWarning !== !0 &&
                        qo(i.textContent, x, e),
                      (a = ["children", "" + x]))
                  : u.hasOwnProperty(h) &&
                    x != null &&
                    h === "onScroll" &&
                    Ce("scroll", i);
              }
            switch (r) {
              case "input":
                Ro(i), au(i, c, !0);
                break;
              case "textarea":
                Ro(i), du(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (i.onclick = Xo);
            }
            (i = a), (t.updateQueue = i), i !== null && (t.flags |= 4);
          } else {
            (h = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = fu(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                  ? (e = h.createElement(r, { is: i.is }))
                  : ((e = h.createElement(r)),
                    r === "select" &&
                      ((h = e),
                      i.multiple
                        ? (h.multiple = !0)
                        : i.size && (h.size = i.size)))
                : (e = h.createElementNS(e, r)),
              (e[Ot] = t),
              (e[Kr] = i),
              kd(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((h = xi(r, i)), r)) {
                case "dialog":
                  Ce("cancel", e), Ce("close", e), (a = i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ce("load", e), (a = i);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Wr.length; a++) Ce(Wr[a], e);
                  a = i;
                  break;
                case "source":
                  Ce("error", e), (a = i);
                  break;
                case "img":
                case "image":
                case "link":
                  Ce("error", e), Ce("load", e), (a = i);
                  break;
                case "details":
                  Ce("toggle", e), (a = i);
                  break;
                case "input":
                  iu(e, i), (a = pi(e, i)), Ce("invalid", e);
                  break;
                case "option":
                  a = i;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!i.multiple }),
                    (a = Q({}, i, { value: void 0 })),
                    Ce("invalid", e);
                  break;
                case "textarea":
                  uu(e, i), (a = gi(e, i)), Ce("invalid", e);
                  break;
                default:
                  a = i;
              }
              yi(r, a), (x = a);
              for (c in x)
                if (x.hasOwnProperty(c)) {
                  var k = x[c];
                  c === "style"
                    ? mu(e, k)
                    : c === "dangerouslySetInnerHTML"
                    ? ((k = k ? k.__html : void 0), k != null && pu(e, k))
                    : c === "children"
                    ? typeof k == "string"
                      ? (r !== "textarea" || k !== "") && kr(e, k)
                      : typeof k == "number" && kr(e, "" + k)
                    : c !== "suppressContentEditableWarning" &&
                      c !== "suppressHydrationWarning" &&
                      c !== "autoFocus" &&
                      (u.hasOwnProperty(c)
                        ? k != null && c === "onScroll" && Ce("scroll", e)
                        : k != null && B(e, c, k, h));
                }
              switch (r) {
                case "input":
                  Ro(e), au(e, i, !1);
                  break;
                case "textarea":
                  Ro(e), du(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ge(i.value));
                  break;
                case "select":
                  (e.multiple = !!i.multiple),
                    (c = i.value),
                    c != null
                      ? $n(e, !!i.multiple, c, !1)
                      : i.defaultValue != null &&
                        $n(e, !!i.multiple, i.defaultValue, !0);
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Xo);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null) Rd(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(l(166));
          if (((r = _n(Jr.current)), _n(At.current), rl(t))) {
            if (
              ((i = t.stateNode),
              (r = t.memoizedProps),
              (i[Ot] = t),
              (c = i.nodeValue !== r) && ((e = ft), e !== null))
            )
              switch (e.tag) {
                case 3:
                  qo(i.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    qo(i.nodeValue, r, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i)),
              (i[Ot] = t),
              (t.stateNode = i);
        }
        return Qe(t), null;
      case 13:
        if (
          (ke(je),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Pe && pt !== null && t.mode & 1 && !(t.flags & 128))
            bc(), rr(), (t.flags |= 98560), (c = !1);
          else if (((c = rl(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(l(317));
              c[Ot] = t;
            } else
              rr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Qe(t), (c = !1);
          } else kt !== null && (qs(kt), (kt = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || je.current & 1 ? Me === 0 && (Me = 3) : Ys())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (
          sr(),
          Ms(e, t),
          e === null && Vr(t.stateNode.containerInfo),
          Qe(t),
          null
        );
      case 10:
        return fs(t.type._context), Qe(t), null;
      case 17:
        return ot(t.type) && Yo(), Qe(t), null;
      case 19:
        if ((ke(je), (c = t.memoizedState), c === null)) return Qe(t), null;
        if (((i = (t.flags & 128) !== 0), (h = c.rendering), h === null))
          if (i) no(c, !1);
          else {
            if (Me !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((h = ul(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      no(c, !1),
                      i = h.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = r,
                      r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = i),
                      (c.flags &= 14680066),
                      (h = c.alternate),
                      h === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = h.childLanes),
                          (c.lanes = h.lanes),
                          (c.child = h.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = h.memoizedProps),
                          (c.memoizedState = h.memoizedState),
                          (c.updateQueue = h.updateQueue),
                          (c.type = h.type),
                          (e = h.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return we(je, (je.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Oe() > dr &&
              ((t.flags |= 128), (i = !0), no(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = ul(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                no(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !h.alternate &&
                  !Pe)
              )
                return Qe(t), null;
            } else
              2 * Oe() - c.renderingStartTime > dr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (i = !0), no(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((r = c.last),
              r !== null ? (r.sibling = h) : (t.child = h),
              (c.last = h));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Oe()),
            (t.sibling = null),
            (r = je.current),
            we(je, i ? (r & 1) | 2 : r & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          Js(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && t.mode & 1
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
    throw Error(l(156, t.tag));
  }
  function xg(e, t) {
    switch ((is(t), t.tag)) {
      case 1:
        return (
          ot(t.type) && Yo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          sr(),
          ke(rt),
          ke(Ke),
          xs(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return vs(t), null;
      case 13:
        if (
          (ke(je), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          rr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ke(je), null;
      case 4:
        return sr(), null;
      case 10:
        return fs(t.type._context), null;
      case 22:
      case 23:
        return Js(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yl = !1,
    qe = !1,
    wg = typeof WeakSet == "function" ? WeakSet : Set,
    q = null;
  function ur(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (i) {
          Te(e, t, i);
        }
      else r.current = null;
  }
  function zs(e, t, r) {
    try {
      r();
    } catch (i) {
      Te(e, t, i);
    }
  }
  var Pd = !1;
  function Sg(e, t) {
    if (((Ji = Mo), (e = lc()), Wi(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var a = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, c.nodeType;
            } catch {
              r = null;
              break e;
            }
            var h = 0,
              x = -1,
              k = -1,
              T = 0,
              z = 0,
              U = e,
              F = null;
            t: for (;;) {
              for (
                var G;
                U !== r || (a !== 0 && U.nodeType !== 3) || (x = h + a),
                  U !== c || (i !== 0 && U.nodeType !== 3) || (k = h + i),
                  U.nodeType === 3 && (h += U.nodeValue.length),
                  (G = U.firstChild) !== null;

              )
                (F = U), (U = G);
              for (;;) {
                if (U === e) break t;
                if (
                  (F === r && ++T === a && (x = h),
                  F === c && ++z === i && (k = h),
                  (G = U.nextSibling) !== null)
                )
                  break;
                (U = F), (F = U.parentNode);
              }
              U = G;
            }
            r = x === -1 || k === -1 ? null : { start: x, end: k };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Yi = { focusedElem: e, selectionRange: r }, Mo = !1, q = t;
      q !== null;

    )
      if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (q = e);
      else
        for (; q !== null; ) {
          t = q;
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
                      j = t.stateNode,
                      N = j.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? J : Nt(t.type, J),
                        Ae
                      );
                    j.__reactInternalSnapshotBeforeUpdate = N;
                  }
                  break;
                case 3:
                  var _ = t.stateNode.containerInfo;
                  _.nodeType === 1
                    ? (_.textContent = "")
                    : _.nodeType === 9 &&
                      _.documentElement &&
                      _.removeChild(_.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch ($) {
            Te(t, t.return, $);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (q = e);
            break;
          }
          q = t.return;
        }
    return (X = Pd), (Pd = !1), X;
  }
  function ro(e, t, r) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var a = (i = i.next);
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          (a.destroy = void 0), c !== void 0 && zs(t, r, c);
        }
        a = a.next;
      } while (a !== i);
    }
  }
  function xl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var i = r.create;
          r.destroy = i();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Us(e) {
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
  function jd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), jd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ot],
          delete t[Kr],
          delete t[ns],
          delete t[rg],
          delete t[og])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function bd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function _d(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || bd(e.return)) return null;
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
  function Bs(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Xo));
    else if (i !== 4 && ((e = e.child), e !== null))
      for (Bs(e, t, r), e = e.sibling; e !== null; )
        Bs(e, t, r), (e = e.sibling);
  }
  function $s(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
      for ($s(e, t, r), e = e.sibling; e !== null; )
        $s(e, t, r), (e = e.sibling);
  }
  var We = null,
    Rt = !1;
  function an(e, t, r) {
    for (r = r.child; r !== null; ) Td(e, t, r), (r = r.sibling);
  }
  function Td(e, t, r) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
      try {
        Tt.onCommitFiberUnmount(Oo, r);
      } catch {}
    switch (r.tag) {
      case 5:
        qe || ur(r, t);
      case 6:
        var i = We,
          a = Rt;
        (We = null),
          an(e, t, r),
          (We = i),
          (Rt = a),
          We !== null &&
            (Rt
              ? ((e = We),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : We.removeChild(r.stateNode));
        break;
      case 18:
        We !== null &&
          (Rt
            ? ((e = We),
              (r = r.stateNode),
              e.nodeType === 8
                ? ts(e.parentNode, r)
                : e.nodeType === 1 && ts(e, r),
              Dr(e))
            : ts(We, r.stateNode));
        break;
      case 4:
        (i = We),
          (a = Rt),
          (We = r.stateNode.containerInfo),
          (Rt = !0),
          an(e, t, r),
          (We = i),
          (Rt = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !qe &&
          ((i = r.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          a = i = i.next;
          do {
            var c = a,
              h = c.destroy;
            (c = c.tag),
              h !== void 0 && (c & 2 || c & 4) && zs(r, t, h),
              (a = a.next);
          } while (a !== i);
        }
        an(e, t, r);
        break;
      case 1:
        if (
          !qe &&
          (ur(r, t),
          (i = r.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            (i.props = r.memoizedProps),
              (i.state = r.memoizedState),
              i.componentWillUnmount();
          } catch (x) {
            Te(r, t, x);
          }
        an(e, t, r);
        break;
      case 21:
        an(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((qe = (i = qe) || r.memoizedState !== null), an(e, t, r), (qe = i))
          : an(e, t, r);
        break;
      default:
        an(e, t, r);
    }
  }
  function Od(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new wg()),
        t.forEach(function (i) {
          var a = _g.bind(null, e, i);
          r.has(i) || (r.add(i), i.then(a, a));
        });
    }
  }
  function Pt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var a = r[i];
        try {
          var c = e,
            h = t,
            x = h;
          e: for (; x !== null; ) {
            switch (x.tag) {
              case 5:
                (We = x.stateNode), (Rt = !1);
                break e;
              case 3:
                (We = x.stateNode.containerInfo), (Rt = !0);
                break e;
              case 4:
                (We = x.stateNode.containerInfo), (Rt = !0);
                break e;
            }
            x = x.return;
          }
          if (We === null) throw Error(l(160));
          Td(c, h, a), (We = null), (Rt = !1);
          var k = a.alternate;
          k !== null && (k.return = null), (a.return = null);
        } catch (T) {
          Te(a, t, T);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ad(t, e), (t = t.sibling);
  }
  function Ad(e, t) {
    var r = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Pt(t, e), Dt(e), i & 4)) {
          try {
            ro(3, e, e.return), xl(3, e);
          } catch (J) {
            Te(e, e.return, J);
          }
          try {
            ro(5, e, e.return);
          } catch (J) {
            Te(e, e.return, J);
          }
        }
        break;
      case 1:
        Pt(t, e), Dt(e), i & 512 && r !== null && ur(r, r.return);
        break;
      case 5:
        if (
          (Pt(t, e),
          Dt(e),
          i & 512 && r !== null && ur(r, r.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            kr(a, "");
          } catch (J) {
            Te(e, e.return, J);
          }
        }
        if (i & 4 && ((a = e.stateNode), a != null)) {
          var c = e.memoizedProps,
            h = r !== null ? r.memoizedProps : c,
            x = e.type,
            k = e.updateQueue;
          if (((e.updateQueue = null), k !== null))
            try {
              x === "input" && c.type === "radio" && c.name != null && su(a, c),
                xi(x, h);
              var T = xi(x, c);
              for (h = 0; h < k.length; h += 2) {
                var z = k[h],
                  U = k[h + 1];
                z === "style"
                  ? mu(a, U)
                  : z === "dangerouslySetInnerHTML"
                  ? pu(a, U)
                  : z === "children"
                  ? kr(a, U)
                  : B(a, z, U, T);
              }
              switch (x) {
                case "input":
                  hi(a, c);
                  break;
                case "textarea":
                  cu(a, c);
                  break;
                case "select":
                  var F = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!c.multiple;
                  var G = c.value;
                  G != null
                    ? $n(a, !!c.multiple, G, !1)
                    : F !== !!c.multiple &&
                      (c.defaultValue != null
                        ? $n(a, !!c.multiple, c.defaultValue, !0)
                        : $n(a, !!c.multiple, c.multiple ? [] : "", !1));
              }
              a[Kr] = c;
            } catch (J) {
              Te(e, e.return, J);
            }
        }
        break;
      case 6:
        if ((Pt(t, e), Dt(e), i & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (a = e.stateNode), (c = e.memoizedProps);
          try {
            a.nodeValue = c;
          } catch (J) {
            Te(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          (Pt(t, e), Dt(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Dr(t.containerInfo);
          } catch (J) {
            Te(e, e.return, J);
          }
        break;
      case 4:
        Pt(t, e), Dt(e);
        break;
      case 13:
        Pt(t, e),
          Dt(e),
          (a = e.child),
          a.flags & 8192 &&
            ((c = a.memoizedState !== null),
            (a.stateNode.isHidden = c),
            !c ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (Hs = Oe())),
          i & 4 && Od(e);
        break;
      case 22:
        if (
          ((z = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((qe = (T = qe) || z), Pt(t, e), (qe = T)) : Pt(t, e),
          Dt(e),
          i & 8192)
        ) {
          if (
            ((T = e.memoizedState !== null),
            (e.stateNode.isHidden = T) && !z && e.mode & 1)
          )
            for (q = e, z = e.child; z !== null; ) {
              for (U = q = z; q !== null; ) {
                switch (((F = q), (G = F.child), F.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ro(4, F, F.return);
                    break;
                  case 1:
                    ur(F, F.return);
                    var X = F.stateNode;
                    if (typeof X.componentWillUnmount == "function") {
                      (i = F), (r = F.return);
                      try {
                        (t = i),
                          (X.props = t.memoizedProps),
                          (X.state = t.memoizedState),
                          X.componentWillUnmount();
                      } catch (J) {
                        Te(i, r, J);
                      }
                    }
                    break;
                  case 5:
                    ur(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      Id(U);
                      continue;
                    }
                }
                G !== null ? ((G.return = F), (q = G)) : Id(U);
              }
              z = z.sibling;
            }
          e: for (z = null, U = e; ; ) {
            if (U.tag === 5) {
              if (z === null) {
                z = U;
                try {
                  (a = U.stateNode),
                    T
                      ? ((c = a.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((x = U.stateNode),
                        (k = U.memoizedProps.style),
                        (h =
                          k != null && k.hasOwnProperty("display")
                            ? k.display
                            : null),
                        (x.style.display = hu("display", h)));
                } catch (J) {
                  Te(e, e.return, J);
                }
              }
            } else if (U.tag === 6) {
              if (z === null)
                try {
                  U.stateNode.nodeValue = T ? "" : U.memoizedProps;
                } catch (J) {
                  Te(e, e.return, J);
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
              z === U && (z = null), (U = U.return);
            }
            z === U && (z = null),
              (U.sibling.return = U.return),
              (U = U.sibling);
          }
        }
        break;
      case 19:
        Pt(t, e), Dt(e), i & 4 && Od(e);
        break;
      case 21:
        break;
      default:
        Pt(t, e), Dt(e);
    }
  }
  function Dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (bd(r)) {
              var i = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (i.tag) {
          case 5:
            var a = i.stateNode;
            i.flags & 32 && (kr(a, ""), (i.flags &= -33));
            var c = _d(e);
            $s(e, c, a);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo,
              x = _d(e);
            Bs(e, x, h);
            break;
          default:
            throw Error(l(161));
        }
      } catch (k) {
        Te(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Eg(e, t, r) {
    (q = e), Ld(e);
  }
  function Ld(e, t, r) {
    for (var i = (e.mode & 1) !== 0; q !== null; ) {
      var a = q,
        c = a.child;
      if (a.tag === 22 && i) {
        var h = a.memoizedState !== null || yl;
        if (!h) {
          var x = a.alternate,
            k = (x !== null && x.memoizedState !== null) || qe;
          x = yl;
          var T = qe;
          if (((yl = h), (qe = k) && !T))
            for (q = a; q !== null; )
              (h = q),
                (k = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Fd(a)
                  : k !== null
                  ? ((k.return = h), (q = k))
                  : Fd(a);
          for (; c !== null; ) (q = c), Ld(c), (c = c.sibling);
          (q = a), (yl = x), (qe = T);
        }
        Dd(e);
      } else
        a.subtreeFlags & 8772 && c !== null ? ((c.return = a), (q = c)) : Dd(e);
    }
  }
  function Dd(e) {
    for (; q !== null; ) {
      var t = q;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                qe || xl(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !qe)
                  if (r === null) i.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Nt(t.type, r.memoizedProps);
                    i.componentDidUpdate(
                      a,
                      r.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var c = t.updateQueue;
                c !== null && Ic(t, c, i);
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
                  Ic(t, h, r);
                }
                break;
              case 5:
                var x = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = x;
                  var k = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && r.focus();
                      break;
                    case "img":
                      k.src && (r.src = k.src);
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
                  var T = t.alternate;
                  if (T !== null) {
                    var z = T.memoizedState;
                    if (z !== null) {
                      var U = z.dehydrated;
                      U !== null && Dr(U);
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
                throw Error(l(163));
            }
          qe || (t.flags & 512 && Us(t));
        } catch (F) {
          Te(t, t.return, F);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (q = r);
        break;
      }
      q = t.return;
    }
  }
  function Id(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (q = r);
        break;
      }
      q = t.return;
    }
  }
  function Fd(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              xl(4, t);
            } catch (k) {
              Te(t, r, k);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var a = t.return;
              try {
                i.componentDidMount();
              } catch (k) {
                Te(t, a, k);
              }
            }
            var c = t.return;
            try {
              Us(t);
            } catch (k) {
              Te(t, c, k);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Us(t);
            } catch (k) {
              Te(t, h, k);
            }
        }
      } catch (k) {
        Te(t, t.return, k);
      }
      if (t === e) {
        q = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        (x.return = t.return), (q = x);
        break;
      }
      q = t.return;
    }
  }
  var Cg = Math.ceil,
    wl = W.ReactCurrentDispatcher,
    Ws = W.ReactCurrentOwner,
    wt = W.ReactCurrentBatchConfig,
    de = 0,
    Ue = null,
    De = null,
    Ve = 0,
    ht = 0,
    cr = nn(0),
    Me = 0,
    oo = null,
    On = 0,
    Sl = 0,
    Vs = 0,
    lo = null,
    it = null,
    Hs = 0,
    dr = 1 / 0,
    Kt = null,
    El = !1,
    Ks = null,
    un = null,
    Cl = !1,
    cn = null,
    kl = 0,
    io = 0,
    Gs = null,
    Nl = -1,
    Rl = 0;
  function et() {
    return de & 6 ? Oe() : Nl !== -1 ? Nl : (Nl = Oe());
  }
  function dn(e) {
    return e.mode & 1
      ? de & 2 && Ve !== 0
        ? Ve & -Ve
        : ig.transition !== null
        ? (Rl === 0 && (Rl = _u()), Rl)
        : ((e = ve),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zu(e.type))),
          e)
      : 1;
  }
  function jt(e, t, r, i) {
    if (50 < io) throw ((io = 0), (Gs = null), Error(l(185)));
    _r(e, r, i),
      (!(de & 2) || e !== Ue) &&
        (e === Ue && (!(de & 2) && (Sl |= r), Me === 4 && fn(e, Ve)),
        st(e, i),
        r === 1 &&
          de === 0 &&
          !(t.mode & 1) &&
          ((dr = Oe() + 500), el && on()));
  }
  function st(e, t) {
    var r = e.callbackNode;
    im(e, t);
    var i = Do(e, e === Ue ? Ve : 0);
    if (i === 0)
      r !== null && Pu(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((r != null && Pu(r), t === 1))
        e.tag === 0 ? lg(zd.bind(null, e)) : kc(zd.bind(null, e)),
          tg(function () {
            !(de & 6) && on();
          }),
          (r = null);
      else {
        switch (Tu(i)) {
          case 1:
            r = Ri;
            break;
          case 4:
            r = ju;
            break;
          case 16:
            r = To;
            break;
          case 536870912:
            r = bu;
            break;
          default:
            r = To;
        }
        r = Gd(r, Md.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Md(e, t) {
    if (((Nl = -1), (Rl = 0), de & 6)) throw Error(l(327));
    var r = e.callbackNode;
    if (fr() && e.callbackNode !== r) return null;
    var i = Do(e, e === Ue ? Ve : 0);
    if (i === 0) return null;
    if (i & 30 || i & e.expiredLanes || t) t = Pl(e, i);
    else {
      t = i;
      var a = de;
      de |= 2;
      var c = Bd();
      (Ue !== e || Ve !== t) && ((Kt = null), (dr = Oe() + 500), Ln(e, t));
      do
        try {
          Rg();
          break;
        } catch (x) {
          Ud(e, x);
        }
      while (!0);
      ds(),
        (wl.current = c),
        (de = a),
        De !== null ? (t = 0) : ((Ue = null), (Ve = 0), (t = Me));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = Pi(e)), a !== 0 && ((i = a), (t = Qs(e, a)))),
        t === 1)
      )
        throw ((r = oo), Ln(e, 0), fn(e, i), st(e, Oe()), r);
      if (t === 6) fn(e, i);
      else {
        if (
          ((a = e.current.alternate),
          !(i & 30) &&
            !kg(a) &&
            ((t = Pl(e, i)),
            t === 2 && ((c = Pi(e)), c !== 0 && ((i = c), (t = Qs(e, c)))),
            t === 1))
        )
          throw ((r = oo), Ln(e, 0), fn(e, i), st(e, Oe()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Dn(e, it, Kt);
            break;
          case 3:
            if (
              (fn(e, i),
              (i & 130023424) === i && ((t = Hs + 500 - Oe()), 10 < t))
            ) {
              if (Do(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & i) !== i)) {
                et(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = es(Dn.bind(null, e, it, Kt), t);
              break;
            }
            Dn(e, it, Kt);
            break;
          case 4:
            if ((fn(e, i), (i & 4194240) === i)) break;
            for (t = e.eventTimes, a = -1; 0 < i; ) {
              var h = 31 - Et(i);
              (c = 1 << h), (h = t[h]), h > a && (a = h), (i &= ~c);
            }
            if (
              ((i = a),
              (i = Oe() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                  ? 480
                  : 1080 > i
                  ? 1080
                  : 1920 > i
                  ? 1920
                  : 3e3 > i
                  ? 3e3
                  : 4320 > i
                  ? 4320
                  : 1960 * Cg(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = es(Dn.bind(null, e, it, Kt), i);
              break;
            }
            Dn(e, it, Kt);
            break;
          case 5:
            Dn(e, it, Kt);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return st(e, Oe()), e.callbackNode === r ? Md.bind(null, e) : null;
  }
  function Qs(e, t) {
    var r = lo;
    return (
      e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
      (e = Pl(e, t)),
      e !== 2 && ((t = it), (it = r), t !== null && qs(t)),
      e
    );
  }
  function qs(e) {
    it === null ? (it = e) : it.push.apply(it, e);
  }
  function kg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var i = 0; i < r.length; i++) {
            var a = r[i],
              c = a.getSnapshot;
            a = a.value;
            try {
              if (!Ct(c(), a)) return !1;
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
  function fn(e, t) {
    for (
      t &= ~Vs,
        t &= ~Sl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Et(t),
        i = 1 << r;
      (e[r] = -1), (t &= ~i);
    }
  }
  function zd(e) {
    if (de & 6) throw Error(l(327));
    fr();
    var t = Do(e, 0);
    if (!(t & 1)) return st(e, Oe()), null;
    var r = Pl(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = Pi(e);
      i !== 0 && ((t = i), (r = Qs(e, i)));
    }
    if (r === 1) throw ((r = oo), Ln(e, 0), fn(e, t), st(e, Oe()), r);
    if (r === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Dn(e, it, Kt),
      st(e, Oe()),
      null
    );
  }
  function Xs(e, t) {
    var r = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      (de = r), de === 0 && ((dr = Oe() + 500), el && on());
    }
  }
  function An(e) {
    cn !== null && cn.tag === 0 && !(de & 6) && fr();
    var t = de;
    de |= 1;
    var r = wt.transition,
      i = ve;
    try {
      if (((wt.transition = null), (ve = 1), e)) return e();
    } finally {
      (ve = i), (wt.transition = r), (de = t), !(de & 6) && on();
    }
  }
  function Js() {
    (ht = cr.current), ke(cr);
  }
  function Ln(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), eg(r)), De !== null))
      for (r = De.return; r !== null; ) {
        var i = r;
        switch ((is(i), i.tag)) {
          case 1:
            (i = i.type.childContextTypes), i != null && Yo();
            break;
          case 3:
            sr(), ke(rt), ke(Ke), xs();
            break;
          case 5:
            vs(i);
            break;
          case 4:
            sr();
            break;
          case 13:
            ke(je);
            break;
          case 19:
            ke(je);
            break;
          case 10:
            fs(i.type._context);
            break;
          case 22:
          case 23:
            Js();
        }
        r = r.return;
      }
    if (
      ((Ue = e),
      (De = e = pn(e.current, null)),
      (Ve = ht = t),
      (Me = 0),
      (oo = null),
      (Vs = Sl = On = 0),
      (it = lo = null),
      bn !== null)
    ) {
      for (t = 0; t < bn.length; t++)
        if (((r = bn[t]), (i = r.interleaved), i !== null)) {
          r.interleaved = null;
          var a = i.next,
            c = r.pending;
          if (c !== null) {
            var h = c.next;
            (c.next = a), (i.next = h);
          }
          r.pending = i;
        }
      bn = null;
    }
    return e;
  }
  function Ud(e, t) {
    do {
      var r = De;
      try {
        if ((ds(), (cl.current = hl), dl)) {
          for (var i = be.memoizedState; i !== null; ) {
            var a = i.queue;
            a !== null && (a.pending = null), (i = i.next);
          }
          dl = !1;
        }
        if (
          ((Tn = 0),
          (ze = Fe = be = null),
          (Yr = !1),
          (Zr = 0),
          (Ws.current = null),
          r === null || r.return === null)
        ) {
          (Me = 1), (oo = t), (De = null);
          break;
        }
        e: {
          var c = e,
            h = r.return,
            x = r,
            k = t;
          if (
            ((t = Ve),
            (x.flags |= 32768),
            k !== null && typeof k == "object" && typeof k.then == "function")
          ) {
            var T = k,
              z = x,
              U = z.tag;
            if (!(z.mode & 1) && (U === 0 || U === 11 || U === 15)) {
              var F = z.alternate;
              F
                ? ((z.updateQueue = F.updateQueue),
                  (z.memoizedState = F.memoizedState),
                  (z.lanes = F.lanes))
                : ((z.updateQueue = null), (z.memoizedState = null));
            }
            var G = dd(h);
            if (G !== null) {
              (G.flags &= -257),
                fd(G, h, x, c, t),
                G.mode & 1 && cd(c, T, t),
                (t = G),
                (k = T);
              var X = t.updateQueue;
              if (X === null) {
                var J = new Set();
                J.add(k), (t.updateQueue = J);
              } else X.add(k);
              break e;
            } else {
              if (!(t & 1)) {
                cd(c, T, t), Ys();
                break e;
              }
              k = Error(l(426));
            }
          } else if (Pe && x.mode & 1) {
            var Ae = dd(h);
            if (Ae !== null) {
              !(Ae.flags & 65536) && (Ae.flags |= 256),
                fd(Ae, h, x, c, t),
                us(ar(k, x));
              break e;
            }
          }
          (c = k = ar(k, x)),
            Me !== 4 && (Me = 2),
            lo === null ? (lo = [c]) : lo.push(c),
            (c = h);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var j = ad(c, k, t);
                Dc(c, j);
                break e;
              case 1:
                x = k;
                var N = c.type,
                  _ = c.stateNode;
                if (
                  !(c.flags & 128) &&
                  (typeof N.getDerivedStateFromError == "function" ||
                    (_ !== null &&
                      typeof _.componentDidCatch == "function" &&
                      (un === null || !un.has(_))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var $ = ud(c, x, t);
                  Dc(c, $);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Wd(r);
      } catch (Y) {
        (t = Y), De === r && r !== null && (De = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Bd() {
    var e = wl.current;
    return (wl.current = hl), e === null ? hl : e;
  }
  function Ys() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
      Ue === null || (!(On & 268435455) && !(Sl & 268435455)) || fn(Ue, Ve);
  }
  function Pl(e, t) {
    var r = de;
    de |= 2;
    var i = Bd();
    (Ue !== e || Ve !== t) && ((Kt = null), Ln(e, t));
    do
      try {
        Ng();
        break;
      } catch (a) {
        Ud(e, a);
      }
    while (!0);
    if ((ds(), (de = r), (wl.current = i), De !== null)) throw Error(l(261));
    return (Ue = null), (Ve = 0), Me;
  }
  function Ng() {
    for (; De !== null; ) $d(De);
  }
  function Rg() {
    for (; De !== null && !Jh(); ) $d(De);
  }
  function $d(e) {
    var t = Kd(e.alternate, e, ht);
    (e.memoizedProps = e.pendingProps),
      t === null ? Wd(e) : (De = t),
      (Ws.current = null);
  }
  function Wd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = xg(r, t)), r !== null)) {
          (r.flags &= 32767), (De = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Me = 6), (De = null);
          return;
        }
      } else if (((r = yg(r, t, ht)), r !== null)) {
        De = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function Dn(e, t, r) {
    var i = ve,
      a = wt.transition;
    try {
      (wt.transition = null), (ve = 1), Pg(e, t, r, i);
    } finally {
      (wt.transition = a), (ve = i);
    }
    return null;
  }
  function Pg(e, t, r, i) {
    do fr();
    while (cn !== null);
    if (de & 6) throw Error(l(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(l(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = r.lanes | r.childLanes;
    if (
      (sm(e, c),
      e === Ue && ((De = Ue = null), (Ve = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        Cl ||
        ((Cl = !0),
        Gd(To, function () {
          return fr(), null;
        })),
      (c = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || c)
    ) {
      (c = wt.transition), (wt.transition = null);
      var h = ve;
      ve = 1;
      var x = de;
      (de |= 4),
        (Ws.current = null),
        Sg(e, r),
        Ad(r, e),
        Gm(Yi),
        (Mo = !!Ji),
        (Yi = Ji = null),
        (e.current = r),
        Eg(r),
        Yh(),
        (de = x),
        (ve = h),
        (wt.transition = c);
    } else e.current = r;
    if (
      (Cl && ((Cl = !1), (cn = e), (kl = a)),
      (c = e.pendingLanes),
      c === 0 && (un = null),
      tm(r.stateNode),
      st(e, Oe()),
      t !== null)
    )
      for (i = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]), i(a.value, { componentStack: a.stack, digest: a.digest });
    if (El) throw ((El = !1), (e = Ks), (Ks = null), e);
    return (
      kl & 1 && e.tag !== 0 && fr(),
      (c = e.pendingLanes),
      c & 1 ? (e === Gs ? io++ : ((io = 0), (Gs = e))) : (io = 0),
      on(),
      null
    );
  }
  function fr() {
    if (cn !== null) {
      var e = Tu(kl),
        t = wt.transition,
        r = ve;
      try {
        if (((wt.transition = null), (ve = 16 > e ? 16 : e), cn === null))
          var i = !1;
        else {
          if (((e = cn), (cn = null), (kl = 0), de & 6)) throw Error(l(331));
          var a = de;
          for (de |= 4, q = e.current; q !== null; ) {
            var c = q,
              h = c.child;
            if (q.flags & 16) {
              var x = c.deletions;
              if (x !== null) {
                for (var k = 0; k < x.length; k++) {
                  var T = x[k];
                  for (q = T; q !== null; ) {
                    var z = q;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ro(8, z, c);
                    }
                    var U = z.child;
                    if (U !== null) (U.return = z), (q = U);
                    else
                      for (; q !== null; ) {
                        z = q;
                        var F = z.sibling,
                          G = z.return;
                        if ((jd(z), z === T)) {
                          q = null;
                          break;
                        }
                        if (F !== null) {
                          (F.return = G), (q = F);
                          break;
                        }
                        q = G;
                      }
                  }
                }
                var X = c.alternate;
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
                q = c;
              }
            }
            if (c.subtreeFlags & 2064 && h !== null) (h.return = c), (q = h);
            else
              e: for (; q !== null; ) {
                if (((c = q), c.flags & 2048))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ro(9, c, c.return);
                  }
                var j = c.sibling;
                if (j !== null) {
                  (j.return = c.return), (q = j);
                  break e;
                }
                q = c.return;
              }
          }
          var N = e.current;
          for (q = N; q !== null; ) {
            h = q;
            var _ = h.child;
            if (h.subtreeFlags & 2064 && _ !== null) (_.return = h), (q = _);
            else
              e: for (h = N; q !== null; ) {
                if (((x = q), x.flags & 2048))
                  try {
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xl(9, x);
                    }
                  } catch (Y) {
                    Te(x, x.return, Y);
                  }
                if (x === h) {
                  q = null;
                  break e;
                }
                var $ = x.sibling;
                if ($ !== null) {
                  ($.return = x.return), (q = $);
                  break e;
                }
                q = x.return;
              }
          }
          if (
            ((de = a),
            on(),
            Tt && typeof Tt.onPostCommitFiberRoot == "function")
          )
            try {
              Tt.onPostCommitFiberRoot(Oo, e);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (ve = r), (wt.transition = t);
      }
    }
    return !1;
  }
  function Vd(e, t, r) {
    (t = ar(r, t)),
      (t = ad(e, t, 1)),
      (e = sn(e, t, 1)),
      (t = et()),
      e !== null && (_r(e, 1, t), st(e, t));
  }
  function Te(e, t, r) {
    if (e.tag === 3) Vd(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (un === null || !un.has(i)))
          ) {
            (e = ar(r, e)),
              (e = ud(t, e, 1)),
              (t = sn(t, e, 1)),
              (e = et()),
              t !== null && (_r(t, 1, e), st(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function jg(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (t = et()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Ue === e &&
        (Ve & r) === r &&
        (Me === 4 || (Me === 3 && (Ve & 130023424) === Ve && 500 > Oe() - Hs)
          ? Ln(e, 0)
          : (Vs |= r)),
      st(e, t);
  }
  function Hd(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Lo), (Lo <<= 1), !(Lo & 130023424) && (Lo = 4194304))
        : (t = 1));
    var r = et();
    (e = Wt(e, t)), e !== null && (_r(e, t, r), st(e, r));
  }
  function bg(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Hd(e, r);
  }
  function _g(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    i !== null && i.delete(t), Hd(e, r);
  }
  var Kd;
  Kd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || rt.current) lt = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (lt = !1), vg(e, t, r);
        lt = !!(e.flags & 131072);
      }
    else (lt = !1), Pe && t.flags & 1048576 && Nc(t, nl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        vl(e, t), (e = t.pendingProps);
        var a = er(t, Ke.current);
        ir(t, r), (a = Es(null, t, i, e, a, r));
        var c = Cs();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ot(i) ? ((c = !0), Zo(t)) : (c = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              ms(t),
              (a.updater = ml),
              (t.stateNode = a),
              (a._reactInternals = t),
              bs(t, i, e, r),
              (t = As(null, t, i, !0, c, r)))
            : ((t.tag = 0), Pe && c && ls(t), Ze(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        i = t.elementType;
        e: {
          switch (
            (vl(e, t),
            (e = t.pendingProps),
            (a = i._init),
            (i = a(i._payload)),
            (t.type = i),
            (a = t.tag = Og(i)),
            (e = Nt(i, e)),
            a)
          ) {
            case 0:
              t = Os(null, t, i, e, r);
              break e;
            case 1:
              t = yd(null, t, i, e, r);
              break e;
            case 11:
              t = pd(null, t, i, e, r);
              break e;
            case 14:
              t = hd(null, t, i, Nt(i.type, e), r);
              break e;
          }
          throw Error(l(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (a = t.pendingProps),
          (a = t.elementType === i ? a : Nt(i, a)),
          Os(e, t, i, a, r)
        );
      case 1:
        return (
          (i = t.type),
          (a = t.pendingProps),
          (a = t.elementType === i ? a : Nt(i, a)),
          yd(e, t, i, a, r)
        );
      case 3:
        e: {
          if ((xd(t), e === null)) throw Error(l(387));
          (i = t.pendingProps),
            (c = t.memoizedState),
            (a = c.element),
            Lc(e, t),
            al(t, i, null, r);
          var h = t.memoizedState;
          if (((i = h.element), c.isDehydrated))
            if (
              ((c = {
                element: i,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (a = ar(Error(l(423)), t)), (t = wd(e, t, i, r, a));
              break e;
            } else if (i !== a) {
              (a = ar(Error(l(424)), t)), (t = wd(e, t, i, r, a));
              break e;
            } else
              for (
                pt = tn(t.stateNode.containerInfo.firstChild),
                  ft = t,
                  Pe = !0,
                  kt = null,
                  r = Oc(t, null, i, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((rr(), i === a)) {
              t = Ht(e, t, r);
              break e;
            }
            Ze(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Fc(t),
          e === null && as(t),
          (i = t.type),
          (a = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (h = a.children),
          Zi(i, a) ? (h = null) : c !== null && Zi(i, c) && (t.flags |= 32),
          vd(e, t),
          Ze(e, t, h, r),
          t.child
        );
      case 6:
        return e === null && as(t), null;
      case 13:
        return Sd(e, t, r);
      case 4:
        return (
          gs(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = or(t, null, i, r)) : Ze(e, t, i, r),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (a = t.pendingProps),
          (a = t.elementType === i ? a : Nt(i, a)),
          pd(e, t, i, a, r)
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
            ((i = t.type._context),
            (a = t.pendingProps),
            (c = t.memoizedProps),
            (h = a.value),
            we(ll, i._currentValue),
            (i._currentValue = h),
            c !== null)
          )
            if (Ct(c.value, h)) {
              if (c.children === a.children && !rt.current) {
                t = Ht(e, t, r);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var x = c.dependencies;
                if (x !== null) {
                  h = c.child;
                  for (var k = x.firstContext; k !== null; ) {
                    if (k.context === i) {
                      if (c.tag === 1) {
                        (k = Vt(-1, r & -r)), (k.tag = 2);
                        var T = c.updateQueue;
                        if (T !== null) {
                          T = T.shared;
                          var z = T.pending;
                          z === null
                            ? (k.next = k)
                            : ((k.next = z.next), (z.next = k)),
                            (T.pending = k);
                        }
                      }
                      (c.lanes |= r),
                        (k = c.alternate),
                        k !== null && (k.lanes |= r),
                        ps(c.return, r, t),
                        (x.lanes |= r);
                      break;
                    }
                    k = k.next;
                  }
                } else if (c.tag === 10) h = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((h = c.return), h === null)) throw Error(l(341));
                  (h.lanes |= r),
                    (x = h.alternate),
                    x !== null && (x.lanes |= r),
                    ps(h, r, t),
                    (h = c.sibling);
                } else h = c.child;
                if (h !== null) h.return = c;
                else
                  for (h = c; h !== null; ) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((c = h.sibling), c !== null)) {
                      (c.return = h.return), (h = c);
                      break;
                    }
                    h = h.return;
                  }
                c = h;
              }
          Ze(e, t, a.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (i = t.pendingProps.children),
          ir(t, r),
          (a = yt(a)),
          (i = i(a)),
          (t.flags |= 1),
          Ze(e, t, i, r),
          t.child
        );
      case 14:
        return (
          (i = t.type),
          (a = Nt(i, t.pendingProps)),
          (a = Nt(i.type, a)),
          hd(e, t, i, a, r)
        );
      case 15:
        return md(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (i = t.type),
          (a = t.pendingProps),
          (a = t.elementType === i ? a : Nt(i, a)),
          vl(e, t),
          (t.tag = 1),
          ot(i) ? ((e = !0), Zo(t)) : (e = !1),
          ir(t, r),
          id(t, i, a),
          bs(t, i, a, r),
          As(null, t, i, !0, e, r)
        );
      case 19:
        return Cd(e, t, r);
      case 22:
        return gd(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function Gd(e, t) {
    return Ru(e, t);
  }
  function Tg(e, t, r, i) {
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
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function St(e, t, r, i) {
    return new Tg(e, t, r, i);
  }
  function Zs(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Og(e) {
    if (typeof e == "function") return Zs(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === se)) return 11;
      if (e === Ye) return 14;
    }
    return 2;
  }
  function pn(e, t) {
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
  function jl(e, t, r, i, a, c) {
    var h = 2;
    if (((i = e), typeof e == "function")) Zs(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case Z:
          return In(r.children, a, c, t);
        case re:
          (h = 8), (a |= 8);
          break;
        case Se:
          return (
            (e = St(12, r, t, a | 2)), (e.elementType = Se), (e.lanes = c), e
          );
        case D:
          return (e = St(13, r, t, a)), (e.elementType = D), (e.lanes = c), e;
        case Ie:
          return (e = St(19, r, t, a)), (e.elementType = Ie), (e.lanes = c), e;
        case Ee:
          return bl(r, a, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _e:
                h = 10;
                break e;
              case $e:
                h = 9;
                break e;
              case se:
                h = 11;
                break e;
              case Ye:
                h = 14;
                break e;
              case ye:
                (h = 16), (i = null);
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = St(h, r, t, a)), (t.elementType = e), (t.type = i), (t.lanes = c), t
    );
  }
  function In(e, t, r, i) {
    return (e = St(7, e, i, t)), (e.lanes = r), e;
  }
  function bl(e, t, r, i) {
    return (
      (e = St(22, e, i, t)),
      (e.elementType = Ee),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ea(e, t, r) {
    return (e = St(6, e, null, t)), (e.lanes = r), e;
  }
  function ta(e, t, r) {
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
  function Ag(e, t, r, i, a) {
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
      (this.eventTimes = ji(0)),
      (this.expirationTimes = ji(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ji(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function na(e, t, r, i, a, c, h, x, k) {
    return (
      (e = new Ag(e, t, r, x, k)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = St(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: i,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ms(c),
      e
    );
  }
  function Lg(e, t, r) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Qd(e) {
    if (!e) return rn;
    e = e._reactInternals;
    e: {
      if (kn(e) !== e || e.tag !== 1) throw Error(l(170));
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
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (ot(r)) return Ec(e, r, t);
    }
    return t;
  }
  function qd(e, t, r, i, a, c, h, x, k) {
    return (
      (e = na(r, i, !0, e, a, c, h, x, k)),
      (e.context = Qd(null)),
      (r = e.current),
      (i = et()),
      (a = dn(r)),
      (c = Vt(i, a)),
      (c.callback = t ?? null),
      sn(r, c, a),
      (e.current.lanes = a),
      _r(e, a, i),
      st(e, i),
      e
    );
  }
  function _l(e, t, r, i) {
    var a = t.current,
      c = et(),
      h = dn(a);
    return (
      (r = Qd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Vt(c, h)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = sn(a, t, h)),
      e !== null && (jt(e, a, h, c), sl(e, a, h)),
      h
    );
  }
  function Tl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Xd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function ra(e, t) {
    Xd(e, t), (e = e.alternate) && Xd(e, t);
  }
  function Dg() {
    return null;
  }
  var Jd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function oa(e) {
    this._internalRoot = e;
  }
  (Ol.prototype.render = oa.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      _l(e, t, null, null);
    }),
    (Ol.prototype.unmount = oa.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          An(function () {
            _l(null, e, null, null);
          }),
            (t[zt] = null);
        }
      });
  function Ol(e) {
    this._internalRoot = e;
  }
  Ol.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Lu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Yt.length && t !== 0 && t < Yt[r].priority; r++);
      Yt.splice(r, 0, e), r === 0 && Fu(e);
    }
  };
  function la(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Al(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Yd() {}
  function Ig(e, t, r, i, a) {
    if (a) {
      if (typeof i == "function") {
        var c = i;
        i = function () {
          var T = Tl(h);
          c.call(T);
        };
      }
      var h = qd(t, i, e, 0, null, !1, !1, "", Yd);
      return (
        (e._reactRootContainer = h),
        (e[zt] = h.current),
        Vr(e.nodeType === 8 ? e.parentNode : e),
        An(),
        h
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof i == "function") {
      var x = i;
      i = function () {
        var T = Tl(k);
        x.call(T);
      };
    }
    var k = na(e, 0, !1, null, null, !1, !1, "", Yd);
    return (
      (e._reactRootContainer = k),
      (e[zt] = k.current),
      Vr(e.nodeType === 8 ? e.parentNode : e),
      An(function () {
        _l(t, k, r, i);
      }),
      k
    );
  }
  function Ll(e, t, r, i, a) {
    var c = r._reactRootContainer;
    if (c) {
      var h = c;
      if (typeof a == "function") {
        var x = a;
        a = function () {
          var k = Tl(h);
          x.call(k);
        };
      }
      _l(t, h, e, a);
    } else h = Ig(r, t, e, a, i);
    return Tl(h);
  }
  (Ou = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = br(t.pendingLanes);
          r !== 0 &&
            (bi(t, r | 1), st(t, Oe()), !(de & 6) && ((dr = Oe() + 500), on()));
        }
        break;
      case 13:
        An(function () {
          var i = Wt(e, 1);
          if (i !== null) {
            var a = et();
            jt(i, e, 1, a);
          }
        }),
          ra(e, 1);
    }
  }),
    (_i = function (e) {
      if (e.tag === 13) {
        var t = Wt(e, 134217728);
        if (t !== null) {
          var r = et();
          jt(t, e, 134217728, r);
        }
        ra(e, 134217728);
      }
    }),
    (Au = function (e) {
      if (e.tag === 13) {
        var t = dn(e),
          r = Wt(e, t);
        if (r !== null) {
          var i = et();
          jt(r, e, t, i);
        }
        ra(e, t);
      }
    }),
    (Lu = function () {
      return ve;
    }),
    (Du = function (e, t) {
      var r = ve;
      try {
        return (ve = e), t();
      } finally {
        ve = r;
      }
    }),
    (Ei = function (e, t, r) {
      switch (t) {
        case "input":
          if ((hi(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var a = Jo(i);
                if (!a) throw Error(l(90));
                lu(i), hi(i, a);
              }
            }
          }
          break;
        case "textarea":
          cu(e, r);
          break;
        case "select":
          (t = r.value), t != null && $n(e, !!r.multiple, t, !1);
      }
    }),
    (xu = Xs),
    (wu = An);
  var Fg = { usingClientEntryPoint: !1, Events: [Gr, Yn, Jo, vu, yu, Xs] },
    so = {
      findFiberByHostInstance: Nn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Mg = {
      bundleType: so.bundleType,
      version: so.version,
      rendererPackageName: so.rendererPackageName,
      rendererConfig: so.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: W.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ku(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: so.findFiberByHostInstance || Dg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dl.isDisabled && Dl.supportsFiber)
      try {
        (Oo = Dl.inject(Mg)), (Tt = Dl);
      } catch {}
  }
  return (
    (at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fg),
    (at.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!la(t)) throw Error(l(200));
      return Lg(e, t, null, r);
    }),
    (at.createRoot = function (e, t) {
      if (!la(e)) throw Error(l(299));
      var r = !1,
        i = "",
        a = Jd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = na(e, 1, !1, null, null, r, !1, i, a)),
        (e[zt] = t.current),
        Vr(e.nodeType === 8 ? e.parentNode : e),
        new oa(t)
      );
    }),
    (at.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(l(188))
          : ((e = Object.keys(e).join(",")), Error(l(268, e)));
      return (e = ku(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (at.flushSync = function (e) {
      return An(e);
    }),
    (at.hydrate = function (e, t, r) {
      if (!Al(t)) throw Error(l(200));
      return Ll(null, e, t, !0, r);
    }),
    (at.hydrateRoot = function (e, t, r) {
      if (!la(e)) throw Error(l(405));
      var i = (r != null && r.hydratedSources) || null,
        a = !1,
        c = "",
        h = Jd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = qd(t, null, e, 1, r ?? null, a, !1, c, h)),
        (e[zt] = t.current),
        Vr(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (r = i[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new Ol(t);
    }),
    (at.render = function (e, t, r) {
      if (!Al(t)) throw Error(l(200));
      return Ll(null, e, t, !1, r);
    }),
    (at.unmountComponentAtNode = function (e) {
      if (!Al(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (An(function () {
            Ll(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[zt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (at.unstable_batchedUpdates = Xs),
    (at.unstable_renderSubtreeIntoContainer = function (e, t, r, i) {
      if (!Al(r)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return Ll(e, t, r, !1, i);
    }),
    (at.version = "18.3.1-next-f1338f8080-20240426"),
    at
  );
}
var sf;
function Jf() {
  if (sf) return aa.exports;
  sf = 1;
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
  return n(), (aa.exports = Kg()), aa.exports;
}
var af;
function Gg() {
  if (af) return Il;
  af = 1;
  var n = Jf();
  return (Il.createRoot = n.createRoot), (Il.hydrateRoot = n.hydrateRoot), Il;
}
var Qg = Gg(),
  Yf = Jf();
const qg = qf(Yf);
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yo() {
  return (
    (yo = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var s in l)
              Object.prototype.hasOwnProperty.call(l, s) && (n[s] = l[s]);
          }
          return n;
        }),
    yo.apply(this, arguments)
  );
}
var xn;
(function (n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(xn || (xn = {}));
const uf = "popstate";
function Xg(n) {
  n === void 0 && (n = {});
  function o(s, u) {
    let { pathname: d, search: f, hash: p } = s.location;
    return Ra(
      "",
      { pathname: d, search: f, hash: p },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || "default"
    );
  }
  function l(s, u) {
    return typeof u == "string" ? u : Xl(u);
  }
  return Yg(o, l, null, n);
}
function Le(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o);
}
function Zf(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Jg() {
  return Math.random().toString(36).substr(2, 8);
}
function cf(n, o) {
  return { usr: n.state, key: n.key, idx: o };
}
function Ra(n, o, l, s) {
  return (
    l === void 0 && (l = null),
    yo(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof o == "string" ? yr(o) : o,
      { state: l, key: (o && o.key) || s || Jg() }
    )
  );
}
function Xl(n) {
  let { pathname: o = "/", search: l = "", hash: s = "" } = n;
  return (
    l && l !== "?" && (o += l.charAt(0) === "?" ? l : "?" + l),
    s && s !== "#" && (o += s.charAt(0) === "#" ? s : "#" + s),
    o
  );
}
function yr(n) {
  let o = {};
  if (n) {
    let l = n.indexOf("#");
    l >= 0 && ((o.hash = n.substr(l)), (n = n.substr(0, l)));
    let s = n.indexOf("?");
    s >= 0 && ((o.search = n.substr(s)), (n = n.substr(0, s))),
      n && (o.pathname = n);
  }
  return o;
}
function Yg(n, o, l, s) {
  s === void 0 && (s = {});
  let { window: u = document.defaultView, v5Compat: d = !1 } = s,
    f = u.history,
    p = xn.Pop,
    y = null,
    g = w();
  g == null && ((g = 0), f.replaceState(yo({}, f.state, { idx: g }), ""));
  function w() {
    return (f.state || { idx: null }).idx;
  }
  function S() {
    p = xn.Pop;
    let C = w(),
      A = C == null ? null : C - g;
    (g = C), y && y({ action: p, location: E.location, delta: A });
  }
  function P(C, A) {
    p = xn.Push;
    let I = Ra(E.location, C, A);
    g = w() + 1;
    let B = cf(I, g),
      W = E.createHref(I);
    try {
      f.pushState(B, "", W);
    } catch (K) {
      if (K instanceof DOMException && K.name === "DataCloneError") throw K;
      u.location.assign(W);
    }
    d && y && y({ action: p, location: E.location, delta: 1 });
  }
  function O(C, A) {
    p = xn.Replace;
    let I = Ra(E.location, C, A);
    g = w();
    let B = cf(I, g),
      W = E.createHref(I);
    f.replaceState(B, "", W),
      d && y && y({ action: p, location: E.location, delta: 0 });
  }
  function b(C) {
    let A = u.location.origin !== "null" ? u.location.origin : u.location.href,
      I = typeof C == "string" ? C : Xl(C);
    return (
      (I = I.replace(/ $/, "%20")),
      Le(
        A,
        "No window.location.(origin|href) available to create URL for href: " +
          I
      ),
      new URL(I, A)
    );
  }
  let E = {
    get action() {
      return p;
    },
    get location() {
      return n(u, f);
    },
    listen(C) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(uf, S),
        (y = C),
        () => {
          u.removeEventListener(uf, S), (y = null);
        }
      );
    },
    createHref(C) {
      return o(u, C);
    },
    createURL: b,
    encodeLocation(C) {
      let A = b(C);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: P,
    replace: O,
    go(C) {
      return f.go(C);
    },
  };
  return E;
}
var df;
(function (n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(df || (df = {}));
function Zg(n, o, l) {
  return l === void 0 && (l = "/"), ev(n, o, l, !1);
}
function ev(n, o, l, s) {
  let u = typeof o == "string" ? yr(o) : o,
    d = $a(u.pathname || "/", l);
  if (d == null) return null;
  let f = ep(n);
  tv(f);
  let p = null;
  for (let y = 0; p == null && y < f.length; ++y) {
    let g = fv(d);
    p = cv(f[y], g, s);
  }
  return p;
}
function ep(n, o, l, s) {
  o === void 0 && (o = []), l === void 0 && (l = []), s === void 0 && (s = "");
  let u = (d, f, p) => {
    let y = {
      relativePath: p === void 0 ? d.path || "" : p,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    y.relativePath.startsWith("/") &&
      (Le(
        y.relativePath.startsWith(s),
        'Absolute route path "' +
          y.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (y.relativePath = y.relativePath.slice(s.length)));
    let g = wn([s, y.relativePath]),
      w = l.concat(y);
    d.children &&
      d.children.length > 0 &&
      (Le(
        d.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + g + '".')
      ),
      ep(d.children, o, w, g)),
      !(d.path == null && !d.index) &&
        o.push({ path: g, score: av(g, d.index), routesMeta: w });
  };
  return (
    n.forEach((d, f) => {
      var p;
      if (d.path === "" || !((p = d.path) != null && p.includes("?"))) u(d, f);
      else for (let y of tp(d.path)) u(d, f, y);
    }),
    o
  );
}
function tp(n) {
  let o = n.split("/");
  if (o.length === 0) return [];
  let [l, ...s] = o,
    u = l.endsWith("?"),
    d = l.replace(/\?$/, "");
  if (s.length === 0) return u ? [d, ""] : [d];
  let f = tp(s.join("/")),
    p = [];
  return (
    p.push(...f.map((y) => (y === "" ? d : [d, y].join("/")))),
    u && p.push(...f),
    p.map((y) => (n.startsWith("/") && y === "" ? "/" : y))
  );
}
function tv(n) {
  n.sort((o, l) =>
    o.score !== l.score
      ? l.score - o.score
      : uv(
          o.routesMeta.map((s) => s.childrenIndex),
          l.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const nv = /^:[\w-]+$/,
  rv = 3,
  ov = 2,
  lv = 1,
  iv = 10,
  sv = -2,
  ff = (n) => n === "*";
function av(n, o) {
  let l = n.split("/"),
    s = l.length;
  return (
    l.some(ff) && (s += sv),
    o && (s += ov),
    l
      .filter((u) => !ff(u))
      .reduce((u, d) => u + (nv.test(d) ? rv : d === "" ? lv : iv), s)
  );
}
function uv(n, o) {
  return n.length === o.length && n.slice(0, -1).every((s, u) => s === o[u])
    ? n[n.length - 1] - o[o.length - 1]
    : 0;
}
function cv(n, o, l) {
  let { routesMeta: s } = n,
    u = {},
    d = "/",
    f = [];
  for (let p = 0; p < s.length; ++p) {
    let y = s[p],
      g = p === s.length - 1,
      w = d === "/" ? o : o.slice(d.length) || "/",
      S = pf(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: g },
        w
      ),
      P = y.route;
    if (
      (!S &&
        g &&
        l &&
        !s[s.length - 1].route.index &&
        (S = pf(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          w
        )),
      !S)
    )
      return null;
    Object.assign(u, S.params),
      f.push({
        params: u,
        pathname: wn([d, S.pathname]),
        pathnameBase: gv(wn([d, S.pathnameBase])),
        route: P,
      }),
      S.pathnameBase !== "/" && (d = wn([d, S.pathnameBase]));
  }
  return f;
}
function pf(n, o) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [l, s] = dv(n.path, n.caseSensitive, n.end),
    u = o.match(l);
  if (!u) return null;
  let d = u[0],
    f = d.replace(/(.)\/+$/, "$1"),
    p = u.slice(1);
  return {
    params: s.reduce((g, w, S) => {
      let { paramName: P, isOptional: O } = w;
      if (P === "*") {
        let E = p[S] || "";
        f = d.slice(0, d.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const b = p[S];
      return (
        O && !b ? (g[P] = void 0) : (g[P] = (b || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: d,
    pathnameBase: f,
    pattern: n,
  };
}
function dv(n, o, l) {
  o === void 0 && (o = !1),
    l === void 0 && (l = !0),
    Zf(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
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
      : l
      ? (u += "\\/*$")
      : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, o ? void 0 : "i"), s]
  );
}
function fv(n) {
  try {
    return n
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      Zf(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + o + ").")
      ),
      n
    );
  }
}
function $a(n, o) {
  if (o === "/") return n;
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null;
  let l = o.endsWith("/") ? o.length - 1 : o.length,
    s = n.charAt(l);
  return s && s !== "/" ? null : n.slice(l) || "/";
}
function pv(n, o) {
  o === void 0 && (o = "/");
  let {
    pathname: l,
    search: s = "",
    hash: u = "",
  } = typeof n == "string" ? yr(n) : n;
  return {
    pathname: l ? (l.startsWith("/") ? l : hv(l, o)) : o,
    search: vv(s),
    hash: yv(u),
  };
}
function hv(n, o) {
  let l = o.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((u) => {
      u === ".." ? l.length > 1 && l.pop() : u !== "." && l.push(u);
    }),
    l.length > 1 ? l.join("/") : "/"
  );
}
function da(n, o, l, s) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      o +
      "` field [" +
      JSON.stringify(s) +
      "].  Please separate it out to the ") +
    ("`to." + l + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function mv(n) {
  return n.filter(
    (o, l) => l === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function Wa(n, o) {
  let l = mv(n);
  return o
    ? l.map((s, u) => (u === l.length - 1 ? s.pathname : s.pathnameBase))
    : l.map((s) => s.pathnameBase);
}
function Va(n, o, l, s) {
  s === void 0 && (s = !1);
  let u;
  typeof n == "string"
    ? (u = yr(n))
    : ((u = yo({}, n)),
      Le(
        !u.pathname || !u.pathname.includes("?"),
        da("?", "pathname", "search", u)
      ),
      Le(
        !u.pathname || !u.pathname.includes("#"),
        da("#", "pathname", "hash", u)
      ),
      Le(!u.search || !u.search.includes("#"), da("#", "search", "hash", u)));
  let d = n === "" || u.pathname === "",
    f = d ? "/" : u.pathname,
    p;
  if (f == null) p = l;
  else {
    let S = o.length - 1;
    if (!s && f.startsWith("..")) {
      let P = f.split("/");
      for (; P[0] === ".."; ) P.shift(), (S -= 1);
      u.pathname = P.join("/");
    }
    p = S >= 0 ? o[S] : "/";
  }
  let y = pv(u, p),
    g = f && f !== "/" && f.endsWith("/"),
    w = (d || f === ".") && l.endsWith("/");
  return !y.pathname.endsWith("/") && (g || w) && (y.pathname += "/"), y;
}
const wn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  gv = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  vv = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  yv = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function xv(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const np = ["post", "put", "patch", "delete"];
new Set(np);
const wv = ["get", ...np];
new Set(wv);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var s in l)
              Object.prototype.hasOwnProperty.call(l, s) && (n[s] = l[s]);
          }
          return n;
        }),
    xo.apply(this, arguments)
  );
}
const Ha = v.createContext(null),
  Sv = v.createContext(null),
  En = v.createContext(null),
  ni = v.createContext(null),
  Cn = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  rp = v.createContext(null);
function Ev(n, o) {
  let { relative: l } = o === void 0 ? {} : o;
  xr() || Le(!1);
  let { basename: s, navigator: u } = v.useContext(En),
    { hash: d, pathname: f, search: p } = lp(n, { relative: l }),
    y = f;
  return (
    s !== "/" && (y = f === "/" ? s : wn([s, f])),
    u.createHref({ pathname: y, search: p, hash: d })
  );
}
function xr() {
  return v.useContext(ni) != null;
}
function Eo() {
  return xr() || Le(!1), v.useContext(ni).location;
}
function op(n) {
  v.useContext(En).static || v.useLayoutEffect(n);
}
function ri() {
  let { isDataRoute: n } = v.useContext(Cn);
  return n ? Dv() : Cv();
}
function Cv() {
  xr() || Le(!1);
  let n = v.useContext(Ha),
    { basename: o, future: l, navigator: s } = v.useContext(En),
    { matches: u } = v.useContext(Cn),
    { pathname: d } = Eo(),
    f = JSON.stringify(Wa(u, l.v7_relativeSplatPath)),
    p = v.useRef(!1);
  return (
    op(() => {
      p.current = !0;
    }),
    v.useCallback(
      function (g, w) {
        if ((w === void 0 && (w = {}), !p.current)) return;
        if (typeof g == "number") {
          s.go(g);
          return;
        }
        let S = Va(g, JSON.parse(f), d, w.relative === "path");
        n == null &&
          o !== "/" &&
          (S.pathname = S.pathname === "/" ? o : wn([o, S.pathname])),
          (w.replace ? s.replace : s.push)(S, w.state, w);
      },
      [o, s, f, d, n]
    )
  );
}
function lp(n, o) {
  let { relative: l } = o === void 0 ? {} : o,
    { future: s } = v.useContext(En),
    { matches: u } = v.useContext(Cn),
    { pathname: d } = Eo(),
    f = JSON.stringify(Wa(u, s.v7_relativeSplatPath));
  return v.useMemo(() => Va(n, JSON.parse(f), d, l === "path"), [n, f, d, l]);
}
function kv(n, o) {
  return Nv(n, o);
}
function Nv(n, o, l, s) {
  xr() || Le(!1);
  let { navigator: u } = v.useContext(En),
    { matches: d } = v.useContext(Cn),
    f = d[d.length - 1],
    p = f ? f.params : {};
  f && f.pathname;
  let y = f ? f.pathnameBase : "/";
  f && f.route;
  let g = Eo(),
    w;
  if (o) {
    var S;
    let C = typeof o == "string" ? yr(o) : o;
    y === "/" || ((S = C.pathname) != null && S.startsWith(y)) || Le(!1),
      (w = C);
  } else w = g;
  let P = w.pathname || "/",
    O = P;
  if (y !== "/") {
    let C = y.replace(/^\//, "").split("/");
    O = "/" + P.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let b = Zg(n, { pathname: O }),
    E = _v(
      b &&
        b.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, p, C.params),
            pathname: wn([
              y,
              u.encodeLocation
                ? u.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? y
                : wn([
                    y,
                    u.encodeLocation
                      ? u.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      d,
      l,
      s
    );
  return o && E
    ? v.createElement(
        ni.Provider,
        {
          value: {
            location: xo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              w
            ),
            navigationType: xn.Pop,
          },
        },
        E
      )
    : E;
}
function Rv() {
  let n = Lv(),
    o = xv(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    l = n instanceof Error ? n.stack : null,
    u = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return v.createElement(
    v.Fragment,
    null,
    v.createElement("h2", null, "Unexpected Application Error!"),
    v.createElement("h3", { style: { fontStyle: "italic" } }, o),
    l ? v.createElement("pre", { style: u }, l) : null,
    null
  );
}
const Pv = v.createElement(Rv, null);
class jv extends v.Component {
  constructor(o) {
    super(o),
      (this.state = {
        location: o.location,
        revalidation: o.revalidation,
        error: o.error,
      });
  }
  static getDerivedStateFromError(o) {
    return { error: o };
  }
  static getDerivedStateFromProps(o, l) {
    return l.location !== o.location ||
      (l.revalidation !== "idle" && o.revalidation === "idle")
      ? { error: o.error, location: o.location, revalidation: o.revalidation }
      : {
          error: o.error !== void 0 ? o.error : l.error,
          location: l.location,
          revalidation: o.revalidation || l.revalidation,
        };
  }
  componentDidCatch(o, l) {
    console.error(
      "React Router caught the following error during render",
      o,
      l
    );
  }
  render() {
    return this.state.error !== void 0
      ? v.createElement(
          Cn.Provider,
          { value: this.props.routeContext },
          v.createElement(rp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function bv(n) {
  let { routeContext: o, match: l, children: s } = n,
    u = v.useContext(Ha);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = l.route.id),
    v.createElement(Cn.Provider, { value: o }, s)
  );
}
function _v(n, o, l, s) {
  var u;
  if (
    (o === void 0 && (o = []),
    l === void 0 && (l = null),
    s === void 0 && (s = null),
    n == null)
  ) {
    var d;
    if (!l) return null;
    if (l.errors) n = l.matches;
    else if (
      (d = s) != null &&
      d.v7_partialHydration &&
      o.length === 0 &&
      !l.initialized &&
      l.matches.length > 0
    )
      n = l.matches;
    else return null;
  }
  let f = n,
    p = (u = l) == null ? void 0 : u.errors;
  if (p != null) {
    let w = f.findIndex(
      (S) => S.route.id && (p == null ? void 0 : p[S.route.id]) !== void 0
    );
    w >= 0 || Le(!1), (f = f.slice(0, Math.min(f.length, w + 1)));
  }
  let y = !1,
    g = -1;
  if (l && s && s.v7_partialHydration)
    for (let w = 0; w < f.length; w++) {
      let S = f[w];
      if (
        ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (g = w),
        S.route.id)
      ) {
        let { loaderData: P, errors: O } = l,
          b =
            S.route.loader &&
            P[S.route.id] === void 0 &&
            (!O || O[S.route.id] === void 0);
        if (S.route.lazy || b) {
          (y = !0), g >= 0 ? (f = f.slice(0, g + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((w, S, P) => {
    let O,
      b = !1,
      E = null,
      C = null;
    l &&
      ((O = p && S.route.id ? p[S.route.id] : void 0),
      (E = S.route.errorElement || Pv),
      y &&
        (g < 0 && P === 0
          ? ((b = !0), (C = null))
          : g === P &&
            ((b = !0), (C = S.route.hydrateFallbackElement || null))));
    let A = o.concat(f.slice(0, P + 1)),
      I = () => {
        let B;
        return (
          O
            ? (B = E)
            : b
            ? (B = C)
            : S.route.Component
            ? (B = v.createElement(S.route.Component, null))
            : S.route.element
            ? (B = S.route.element)
            : (B = w),
          v.createElement(bv, {
            match: S,
            routeContext: { outlet: w, matches: A, isDataRoute: l != null },
            children: B,
          })
        );
      };
    return l && (S.route.ErrorBoundary || S.route.errorElement || P === 0)
      ? v.createElement(jv, {
          location: l.location,
          revalidation: l.revalidation,
          component: E,
          error: O,
          children: I(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
        })
      : I();
  }, null);
}
var ip = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      n
    );
  })(ip || {}),
  Jl = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseLoaderData = "useLoaderData"),
      (n.UseActionData = "useActionData"),
      (n.UseRouteError = "useRouteError"),
      (n.UseNavigation = "useNavigation"),
      (n.UseRouteLoaderData = "useRouteLoaderData"),
      (n.UseMatches = "useMatches"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      (n.UseRouteId = "useRouteId"),
      n
    );
  })(Jl || {});
function Tv(n) {
  let o = v.useContext(Ha);
  return o || Le(!1), o;
}
function Ov(n) {
  let o = v.useContext(Sv);
  return o || Le(!1), o;
}
function Av(n) {
  let o = v.useContext(Cn);
  return o || Le(!1), o;
}
function sp(n) {
  let o = Av(),
    l = o.matches[o.matches.length - 1];
  return l.route.id || Le(!1), l.route.id;
}
function Lv() {
  var n;
  let o = v.useContext(rp),
    l = Ov(Jl.UseRouteError),
    s = sp(Jl.UseRouteError);
  return o !== void 0 ? o : (n = l.errors) == null ? void 0 : n[s];
}
function Dv() {
  let { router: n } = Tv(ip.UseNavigateStable),
    o = sp(Jl.UseNavigateStable),
    l = v.useRef(!1);
  return (
    op(() => {
      l.current = !0;
    }),
    v.useCallback(
      function (u, d) {
        d === void 0 && (d = {}),
          l.current &&
            (typeof u == "number"
              ? n.navigate(u)
              : n.navigate(u, xo({ fromRouteId: o }, d)));
      },
      [n, o]
    )
  );
}
function hf(n) {
  let { to: o, replace: l, state: s, relative: u } = n;
  xr() || Le(!1);
  let { future: d, static: f } = v.useContext(En),
    { matches: p } = v.useContext(Cn),
    { pathname: y } = Eo(),
    g = ri(),
    w = Va(o, Wa(p, d.v7_relativeSplatPath), y, u === "path"),
    S = JSON.stringify(w);
  return (
    v.useEffect(
      () => g(JSON.parse(S), { replace: l, state: s, relative: u }),
      [g, S, u, l, s]
    ),
    null
  );
}
function Fn(n) {
  Le(!1);
}
function Iv(n) {
  let {
    basename: o = "/",
    children: l = null,
    location: s,
    navigationType: u = xn.Pop,
    navigator: d,
    static: f = !1,
    future: p,
  } = n;
  xr() && Le(!1);
  let y = o.replace(/^\/*/, "/"),
    g = v.useMemo(
      () => ({
        basename: y,
        navigator: d,
        static: f,
        future: xo({ v7_relativeSplatPath: !1 }, p),
      }),
      [y, p, d, f]
    );
  typeof s == "string" && (s = yr(s));
  let {
      pathname: w = "/",
      search: S = "",
      hash: P = "",
      state: O = null,
      key: b = "default",
    } = s,
    E = v.useMemo(() => {
      let C = $a(w, y);
      return C == null
        ? null
        : {
            location: { pathname: C, search: S, hash: P, state: O, key: b },
            navigationType: u,
          };
    }, [y, w, S, P, O, b, u]);
  return E == null
    ? null
    : v.createElement(
        En.Provider,
        { value: g },
        v.createElement(ni.Provider, { children: l, value: E })
      );
}
function Fv(n) {
  let { children: o, location: l } = n;
  return kv(Pa(o), l);
}
new Promise(() => {});
function Pa(n, o) {
  o === void 0 && (o = []);
  let l = [];
  return (
    v.Children.forEach(n, (s, u) => {
      if (!v.isValidElement(s)) return;
      let d = [...o, u];
      if (s.type === v.Fragment) {
        l.push.apply(l, Pa(s.props.children, d));
        return;
      }
      s.type !== Fn && Le(!1), !s.props.index || !s.props.children || Le(!1);
      let f = {
        id: s.props.id || d.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.ErrorBoundary != null || s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (f.children = Pa(s.props.children, d)), l.push(f);
    }),
    l
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ja() {
  return (
    (ja = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var s in l)
              Object.prototype.hasOwnProperty.call(l, s) && (n[s] = l[s]);
          }
          return n;
        }),
    ja.apply(this, arguments)
  );
}
function Mv(n, o) {
  if (n == null) return {};
  var l = {},
    s = Object.keys(n),
    u,
    d;
  for (d = 0; d < s.length; d++)
    (u = s[d]), !(o.indexOf(u) >= 0) && (l[u] = n[u]);
  return l;
}
function zv(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Uv(n, o) {
  return n.button === 0 && (!o || o === "_self") && !zv(n);
}
const Bv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  $v = "6";
try {
  window.__reactRouterVersion = $v;
} catch {}
const Wv = "startTransition",
  mf = Xf[Wv];
function Vv(n) {
  let { basename: o, children: l, future: s, window: u } = n,
    d = v.useRef();
  d.current == null && (d.current = Xg({ window: u, v5Compat: !0 }));
  let f = d.current,
    [p, y] = v.useState({ action: f.action, location: f.location }),
    { v7_startTransition: g } = s || {},
    w = v.useCallback(
      (S) => {
        g && mf ? mf(() => y(S)) : y(S);
      },
      [y, g]
    );
  return (
    v.useLayoutEffect(() => f.listen(w), [f, w]),
    v.createElement(Iv, {
      basename: o,
      children: l,
      location: p.location,
      navigationType: p.action,
      navigator: f,
      future: s,
    })
  );
}
const Hv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Kv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  uo = v.forwardRef(function (o, l) {
    let {
        onClick: s,
        relative: u,
        reloadDocument: d,
        replace: f,
        state: p,
        target: y,
        to: g,
        preventScrollReset: w,
        unstable_viewTransition: S,
      } = o,
      P = Mv(o, Bv),
      { basename: O } = v.useContext(En),
      b,
      E = !1;
    if (typeof g == "string" && Kv.test(g) && ((b = g), Hv))
      try {
        let B = new URL(window.location.href),
          W = g.startsWith("//") ? new URL(B.protocol + g) : new URL(g),
          K = $a(W.pathname, O);
        W.origin === B.origin && K != null
          ? (g = K + W.search + W.hash)
          : (E = !0);
      } catch {}
    let C = Ev(g, { relative: u }),
      A = Gv(g, {
        replace: f,
        state: p,
        target: y,
        preventScrollReset: w,
        relative: u,
        unstable_viewTransition: S,
      });
    function I(B) {
      s && s(B), B.defaultPrevented || A(B);
    }
    return v.createElement(
      "a",
      ja({}, P, { href: b || C, onClick: E || d ? s : I, ref: l, target: y })
    );
  });
var gf;
(function (n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState");
})(gf || (gf = {}));
var vf;
(function (n) {
  (n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(vf || (vf = {}));
function Gv(n, o) {
  let {
      target: l,
      replace: s,
      state: u,
      preventScrollReset: d,
      relative: f,
      unstable_viewTransition: p,
    } = o === void 0 ? {} : o,
    y = ri(),
    g = Eo(),
    w = lp(n, { relative: f });
  return v.useCallback(
    (S) => {
      if (Uv(S, l)) {
        S.preventDefault();
        let P = s !== void 0 ? s : Xl(g) === Xl(w);
        y(n, {
          replace: P,
          state: u,
          preventScrollReset: d,
          relative: f,
          unstable_viewTransition: p,
        });
      }
    },
    [g, y, w, s, u, l, n, d, f, p]
  );
}
function Qv(n, o) {
  typeof n == "function" ? n(o) : n != null && (n.current = o);
}
function qv(...n) {
  return (o) => n.forEach((l) => Qv(l, o));
}
var ap = v.forwardRef((n, o) => {
  const { children: l, ...s } = n,
    u = v.Children.toArray(l),
    d = u.find(Jv);
  if (d) {
    const f = d.props.children,
      p = u.map((y) =>
        y === d
          ? v.Children.count(f) > 1
            ? v.Children.only(null)
            : v.isValidElement(f)
            ? f.props.children
            : null
          : y
      );
    return m.jsx(ba, {
      ...s,
      ref: o,
      children: v.isValidElement(f) ? v.cloneElement(f, void 0, p) : null,
    });
  }
  return m.jsx(ba, { ...s, ref: o, children: l });
});
ap.displayName = "Slot";
var ba = v.forwardRef((n, o) => {
  const { children: l, ...s } = n;
  if (v.isValidElement(l)) {
    const u = Zv(l);
    return v.cloneElement(l, { ...Yv(s, l.props), ref: o ? qv(o, u) : u });
  }
  return v.Children.count(l) > 1 ? v.Children.only(null) : null;
});
ba.displayName = "SlotClone";
var Xv = ({ children: n }) => m.jsx(m.Fragment, { children: n });
function Jv(n) {
  return v.isValidElement(n) && n.type === Xv;
}
function Yv(n, o) {
  const l = { ...o };
  for (const s in o) {
    const u = n[s],
      d = o[s];
    /^on[A-Z]/.test(s)
      ? u && d
        ? (l[s] = (...p) => {
            d(...p), u(...p);
          })
        : u && (l[s] = u)
      : s === "style"
      ? (l[s] = { ...u, ...d })
      : s === "className" && (l[s] = [u, d].filter(Boolean).join(" "));
  }
  return { ...n, ...l };
}
function Zv(n) {
  var s, u;
  let o =
      (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
        ? void 0
        : s.get,
    l = o && "isReactWarning" in o && o.isReactWarning;
  return l
    ? n.ref
    : ((o =
        (u = Object.getOwnPropertyDescriptor(n, "ref")) == null
          ? void 0
          : u.get),
      (l = o && "isReactWarning" in o && o.isReactWarning),
      l ? n.props.ref : n.props.ref || n.ref);
}
function up(n) {
  var o,
    l,
    s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var u = n.length;
      for (o = 0; o < u; o++)
        n[o] && (l = up(n[o])) && (s && (s += " "), (s += l));
    } else for (l in n) n[l] && (s && (s += " "), (s += l));
  return s;
}
function cp() {
  for (var n, o, l = 0, s = "", u = arguments.length; l < u; l++)
    (n = arguments[l]) && (o = up(n)) && (s && (s += " "), (s += o));
  return s;
}
const yf = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  xf = cp,
  ey = (n, o) => (l) => {
    var s;
    if ((o == null ? void 0 : o.variants) == null)
      return xf(
        n,
        l == null ? void 0 : l.class,
        l == null ? void 0 : l.className
      );
    const { variants: u, defaultVariants: d } = o,
      f = Object.keys(u).map((g) => {
        const w = l == null ? void 0 : l[g],
          S = d == null ? void 0 : d[g];
        if (w === null) return null;
        const P = yf(w) || yf(S);
        return u[g][P];
      }),
      p =
        l &&
        Object.entries(l).reduce((g, w) => {
          let [S, P] = w;
          return P === void 0 || (g[S] = P), g;
        }, {}),
      y =
        o == null || (s = o.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((g, w) => {
              let { class: S, className: P, ...O } = w;
              return Object.entries(O).every((b) => {
                let [E, C] = b;
                return Array.isArray(C)
                  ? C.includes({ ...d, ...p }[E])
                  : { ...d, ...p }[E] === C;
              })
                ? [...g, S, P]
                : g;
            }, []);
    return xf(
      n,
      f,
      y,
      l == null ? void 0 : l.class,
      l == null ? void 0 : l.className
    );
  },
  Ka = "-",
  ty = (n) => {
    const o = ry(n),
      { conflictingClassGroups: l, conflictingClassGroupModifiers: s } = n;
    return {
      getClassGroupId: (f) => {
        const p = f.split(Ka);
        return p[0] === "" && p.length !== 1 && p.shift(), dp(p, o) || ny(f);
      },
      getConflictingClassGroupIds: (f, p) => {
        const y = l[f] || [];
        return p && s[f] ? [...y, ...s[f]] : y;
      },
    };
  },
  dp = (n, o) => {
    var f;
    if (n.length === 0) return o.classGroupId;
    const l = n[0],
      s = o.nextPart.get(l),
      u = s ? dp(n.slice(1), s) : void 0;
    if (u) return u;
    if (o.validators.length === 0) return;
    const d = n.join(Ka);
    return (f = o.validators.find(({ validator: p }) => p(d))) == null
      ? void 0
      : f.classGroupId;
  },
  wf = /^\[(.+)\]$/,
  ny = (n) => {
    if (wf.test(n)) {
      const o = wf.exec(n)[1],
        l = o == null ? void 0 : o.substring(0, o.indexOf(":"));
      if (l) return "arbitrary.." + l;
    }
  },
  ry = (n) => {
    const { theme: o, prefix: l } = n,
      s = { nextPart: new Map(), validators: [] };
    return (
      ly(Object.entries(n.classGroups), l).forEach(([d, f]) => {
        _a(f, s, d, o);
      }),
      s
    );
  },
  _a = (n, o, l, s) => {
    n.forEach((u) => {
      if (typeof u == "string") {
        const d = u === "" ? o : Sf(o, u);
        d.classGroupId = l;
        return;
      }
      if (typeof u == "function") {
        if (oy(u)) {
          _a(u(s), o, l, s);
          return;
        }
        o.validators.push({ validator: u, classGroupId: l });
        return;
      }
      Object.entries(u).forEach(([d, f]) => {
        _a(f, Sf(o, d), l, s);
      });
    });
  },
  Sf = (n, o) => {
    let l = n;
    return (
      o.split(Ka).forEach((s) => {
        l.nextPart.has(s) ||
          l.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (l = l.nextPart.get(s));
      }),
      l
    );
  },
  oy = (n) => n.isThemeGetter,
  ly = (n, o) =>
    o
      ? n.map(([l, s]) => {
          const u = s.map((d) =>
            typeof d == "string"
              ? o + d
              : typeof d == "object"
              ? Object.fromEntries(
                  Object.entries(d).map(([f, p]) => [o + f, p])
                )
              : d
          );
          return [l, u];
        })
      : n,
  iy = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      l = new Map(),
      s = new Map();
    const u = (d, f) => {
      l.set(d, f), o++, o > n && ((o = 0), (s = l), (l = new Map()));
    };
    return {
      get(d) {
        let f = l.get(d);
        if (f !== void 0) return f;
        if ((f = s.get(d)) !== void 0) return u(d, f), f;
      },
      set(d, f) {
        l.has(d) ? l.set(d, f) : u(d, f);
      },
    };
  },
  fp = "!",
  sy = (n) => {
    const { separator: o, experimentalParseClassName: l } = n,
      s = o.length === 1,
      u = o[0],
      d = o.length,
      f = (p) => {
        const y = [];
        let g = 0,
          w = 0,
          S;
        for (let C = 0; C < p.length; C++) {
          let A = p[C];
          if (g === 0) {
            if (A === u && (s || p.slice(C, C + d) === o)) {
              y.push(p.slice(w, C)), (w = C + d);
              continue;
            }
            if (A === "/") {
              S = C;
              continue;
            }
          }
          A === "[" ? g++ : A === "]" && g--;
        }
        const P = y.length === 0 ? p : p.substring(w),
          O = P.startsWith(fp),
          b = O ? P.substring(1) : P,
          E = S && S > w ? S - w : void 0;
        return {
          modifiers: y,
          hasImportantModifier: O,
          baseClassName: b,
          maybePostfixModifierPosition: E,
        };
      };
    return l ? (p) => l({ className: p, parseClassName: f }) : f;
  },
  ay = (n) => {
    if (n.length <= 1) return n;
    const o = [];
    let l = [];
    return (
      n.forEach((s) => {
        s[0] === "[" ? (o.push(...l.sort(), s), (l = [])) : l.push(s);
      }),
      o.push(...l.sort()),
      o
    );
  },
  uy = (n) => ({ cache: iy(n.cacheSize), parseClassName: sy(n), ...ty(n) }),
  cy = /\s+/,
  dy = (n, o) => {
    const {
        parseClassName: l,
        getClassGroupId: s,
        getConflictingClassGroupIds: u,
      } = o,
      d = [],
      f = n.trim().split(cy);
    let p = "";
    for (let y = f.length - 1; y >= 0; y -= 1) {
      const g = f[y],
        {
          modifiers: w,
          hasImportantModifier: S,
          baseClassName: P,
          maybePostfixModifierPosition: O,
        } = l(g);
      let b = !!O,
        E = s(b ? P.substring(0, O) : P);
      if (!E) {
        if (!b) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((E = s(P)), !E)) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        b = !1;
      }
      const C = ay(w).join(":"),
        A = S ? C + fp : C,
        I = A + E;
      if (d.includes(I)) continue;
      d.push(I);
      const B = u(E, b);
      for (let W = 0; W < B.length; ++W) {
        const K = B[W];
        d.push(A + K);
      }
      p = g + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function fy() {
  let n = 0,
    o,
    l,
    s = "";
  for (; n < arguments.length; )
    (o = arguments[n++]) && (l = pp(o)) && (s && (s += " "), (s += l));
  return s;
}
const pp = (n) => {
  if (typeof n == "string") return n;
  let o,
    l = "";
  for (let s = 0; s < n.length; s++)
    n[s] && (o = pp(n[s])) && (l && (l += " "), (l += o));
  return l;
};
function py(n, ...o) {
  let l,
    s,
    u,
    d = f;
  function f(y) {
    const g = o.reduce((w, S) => S(w), n());
    return (l = uy(g)), (s = l.cache.get), (u = l.cache.set), (d = p), p(y);
  }
  function p(y) {
    const g = s(y);
    if (g) return g;
    const w = dy(y, l);
    return u(y, w), w;
  }
  return function () {
    return d(fy.apply(null, arguments));
  };
}
const Ne = (n) => {
    const o = (l) => l[n] || [];
    return (o.isThemeGetter = !0), o;
  },
  hp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  hy = /^\d+\/\d+$/,
  my = new Set(["px", "full", "screen"]),
  gy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  vy =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  yy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  xy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  wy =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Gt = (n) => gr(n) || my.has(n) || hy.test(n),
  mn = (n) => wr(n, "length", jy),
  gr = (n) => !!n && !Number.isNaN(Number(n)),
  fa = (n) => wr(n, "number", gr),
  co = (n) => !!n && Number.isInteger(Number(n)),
  Sy = (n) => n.endsWith("%") && gr(n.slice(0, -1)),
  ie = (n) => hp.test(n),
  gn = (n) => gy.test(n),
  Ey = new Set(["length", "size", "percentage"]),
  Cy = (n) => wr(n, Ey, mp),
  ky = (n) => wr(n, "position", mp),
  Ny = new Set(["image", "url"]),
  Ry = (n) => wr(n, Ny, _y),
  Py = (n) => wr(n, "", by),
  fo = () => !0,
  wr = (n, o, l) => {
    const s = hp.exec(n);
    return s
      ? s[1]
        ? typeof o == "string"
          ? s[1] === o
          : o.has(s[1])
        : l(s[2])
      : !1;
  },
  jy = (n) => vy.test(n) && !yy.test(n),
  mp = () => !1,
  by = (n) => xy.test(n),
  _y = (n) => wy.test(n),
  Ty = () => {
    const n = Ne("colors"),
      o = Ne("spacing"),
      l = Ne("blur"),
      s = Ne("brightness"),
      u = Ne("borderColor"),
      d = Ne("borderRadius"),
      f = Ne("borderSpacing"),
      p = Ne("borderWidth"),
      y = Ne("contrast"),
      g = Ne("grayscale"),
      w = Ne("hueRotate"),
      S = Ne("invert"),
      P = Ne("gap"),
      O = Ne("gradientColorStops"),
      b = Ne("gradientColorStopPositions"),
      E = Ne("inset"),
      C = Ne("margin"),
      A = Ne("opacity"),
      I = Ne("padding"),
      B = Ne("saturate"),
      W = Ne("scale"),
      K = Ne("sepia"),
      V = Ne("skew"),
      Z = Ne("space"),
      re = Ne("translate"),
      Se = () => ["auto", "contain", "none"],
      _e = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $e = () => ["auto", ie, o],
      se = () => [ie, o],
      D = () => ["", Gt, mn],
      Ie = () => ["auto", gr, ie],
      Ye = () => [
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
      ye = () => ["solid", "dashed", "dotted", "double", "none"],
      Ee = () => [
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
      H = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      ee = () => ["", "0", ie],
      Q = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      R = () => [gr, ie];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [fo],
        spacing: [Gt, mn],
        blur: ["none", "", gn, ie],
        brightness: R(),
        borderColor: [n],
        borderRadius: ["none", "", "full", gn, ie],
        borderSpacing: se(),
        borderWidth: D(),
        contrast: R(),
        grayscale: ee(),
        hueRotate: R(),
        invert: ee(),
        gap: se(),
        gradientColorStops: [n],
        gradientColorStopPositions: [Sy, mn],
        inset: $e(),
        margin: $e(),
        opacity: R(),
        padding: se(),
        saturate: R(),
        scale: R(),
        sepia: ee(),
        skew: R(),
        space: se(),
        translate: se(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ie] }],
        container: ["container"],
        columns: [{ columns: [gn] }],
        "break-after": [{ "break-after": Q() }],
        "break-before": [{ "break-before": Q() }],
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
        "object-position": [{ object: [...Ye(), ie] }],
        overflow: [{ overflow: _e() }],
        "overflow-x": [{ "overflow-x": _e() }],
        "overflow-y": [{ "overflow-y": _e() }],
        overscroll: [{ overscroll: Se() }],
        "overscroll-x": [{ "overscroll-x": Se() }],
        "overscroll-y": [{ "overscroll-y": Se() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [E] }],
        "inset-x": [{ "inset-x": [E] }],
        "inset-y": [{ "inset-y": [E] }],
        start: [{ start: [E] }],
        end: [{ end: [E] }],
        top: [{ top: [E] }],
        right: [{ right: [E] }],
        bottom: [{ bottom: [E] }],
        left: [{ left: [E] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", co, ie] }],
        basis: [{ basis: $e() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ie] }],
        grow: [{ grow: ee() }],
        shrink: [{ shrink: ee() }],
        order: [{ order: ["first", "last", "none", co, ie] }],
        "grid-cols": [{ "grid-cols": [fo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", co, ie] }, ie] }],
        "col-start": [{ "col-start": Ie() }],
        "col-end": [{ "col-end": Ie() }],
        "grid-rows": [{ "grid-rows": [fo] }],
        "row-start-end": [{ row: ["auto", { span: [co, ie] }, ie] }],
        "row-start": [{ "row-start": Ie() }],
        "row-end": [{ "row-end": Ie() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ie] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ie] }],
        gap: [{ gap: [P] }],
        "gap-x": [{ "gap-x": [P] }],
        "gap-y": [{ "gap-y": [P] }],
        "justify-content": [{ justify: ["normal", ...H()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...H(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...H(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [I] }],
        px: [{ px: [I] }],
        py: [{ py: [I] }],
        ps: [{ ps: [I] }],
        pe: [{ pe: [I] }],
        pt: [{ pt: [I] }],
        pr: [{ pr: [I] }],
        pb: [{ pb: [I] }],
        pl: [{ pl: [I] }],
        m: [{ m: [C] }],
        mx: [{ mx: [C] }],
        my: [{ my: [C] }],
        ms: [{ ms: [C] }],
        me: [{ me: [C] }],
        mt: [{ mt: [C] }],
        mr: [{ mr: [C] }],
        mb: [{ mb: [C] }],
        ml: [{ ml: [C] }],
        "space-x": [{ "space-x": [Z] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [Z] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ie, o] }],
        "min-w": [{ "min-w": [ie, o, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ie,
              o,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [gn] },
              gn,
            ],
          },
        ],
        h: [{ h: [ie, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ie, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ie, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ie, o, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", gn, mn] }],
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
              fa,
            ],
          },
        ],
        "font-family": [{ font: [fo] }],
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
              ie,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", gr, fa] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Gt,
              ie,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ie] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ie] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [A] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [A] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ye(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Gt, mn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Gt, ie] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: se() }],
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
              ie,
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
        content: [{ content: ["none", ie] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [A] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Ye(), ky] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Cy] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Ry,
            ],
          },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [b] }],
        "gradient-via-pos": [{ via: [b] }],
        "gradient-to-pos": [{ to: [b] }],
        "gradient-from": [{ from: [O] }],
        "gradient-via": [{ via: [O] }],
        "gradient-to": [{ to: [O] }],
        rounded: [{ rounded: [d] }],
        "rounded-s": [{ "rounded-s": [d] }],
        "rounded-e": [{ "rounded-e": [d] }],
        "rounded-t": [{ "rounded-t": [d] }],
        "rounded-r": [{ "rounded-r": [d] }],
        "rounded-b": [{ "rounded-b": [d] }],
        "rounded-l": [{ "rounded-l": [d] }],
        "rounded-ss": [{ "rounded-ss": [d] }],
        "rounded-se": [{ "rounded-se": [d] }],
        "rounded-ee": [{ "rounded-ee": [d] }],
        "rounded-es": [{ "rounded-es": [d] }],
        "rounded-tl": [{ "rounded-tl": [d] }],
        "rounded-tr": [{ "rounded-tr": [d] }],
        "rounded-br": [{ "rounded-br": [d] }],
        "rounded-bl": [{ "rounded-bl": [d] }],
        "border-w": [{ border: [p] }],
        "border-w-x": [{ "border-x": [p] }],
        "border-w-y": [{ "border-y": [p] }],
        "border-w-s": [{ "border-s": [p] }],
        "border-w-e": [{ "border-e": [p] }],
        "border-w-t": [{ "border-t": [p] }],
        "border-w-r": [{ "border-r": [p] }],
        "border-w-b": [{ "border-b": [p] }],
        "border-w-l": [{ "border-l": [p] }],
        "border-opacity": [{ "border-opacity": [A] }],
        "border-style": [{ border: [...ye(), "hidden"] }],
        "divide-x": [{ "divide-x": [p] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [p] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [A] }],
        "divide-style": [{ divide: ye() }],
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
        "outline-style": [{ outline: ["", ...ye()] }],
        "outline-offset": [{ "outline-offset": [Gt, ie] }],
        "outline-w": [{ outline: [Gt, mn] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: D() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [A] }],
        "ring-offset-w": [{ "ring-offset": [Gt, mn] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", gn, Py] }],
        "shadow-color": [{ shadow: [fo] }],
        opacity: [{ opacity: [A] }],
        "mix-blend": [
          { "mix-blend": [...Ee(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": Ee() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [l] }],
        brightness: [{ brightness: [s] }],
        contrast: [{ contrast: [y] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", gn, ie] }],
        grayscale: [{ grayscale: [g] }],
        "hue-rotate": [{ "hue-rotate": [w] }],
        invert: [{ invert: [S] }],
        saturate: [{ saturate: [B] }],
        sepia: [{ sepia: [K] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [l] }],
        "backdrop-brightness": [{ "backdrop-brightness": [s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [y] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [g] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [w] }],
        "backdrop-invert": [{ "backdrop-invert": [S] }],
        "backdrop-opacity": [{ "backdrop-opacity": [A] }],
        "backdrop-saturate": [{ "backdrop-saturate": [B] }],
        "backdrop-sepia": [{ "backdrop-sepia": [K] }],
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
              ie,
            ],
          },
        ],
        duration: [{ duration: R() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ie] }],
        delay: [{ delay: R() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ie] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [W] }],
        "scale-x": [{ "scale-x": [W] }],
        "scale-y": [{ "scale-y": [W] }],
        rotate: [{ rotate: [co, ie] }],
        "translate-x": [{ "translate-x": [re] }],
        "translate-y": [{ "translate-y": [re] }],
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
              ie,
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
              ie,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": se() }],
        "scroll-mx": [{ "scroll-mx": se() }],
        "scroll-my": [{ "scroll-my": se() }],
        "scroll-ms": [{ "scroll-ms": se() }],
        "scroll-me": [{ "scroll-me": se() }],
        "scroll-mt": [{ "scroll-mt": se() }],
        "scroll-mr": [{ "scroll-mr": se() }],
        "scroll-mb": [{ "scroll-mb": se() }],
        "scroll-ml": [{ "scroll-ml": se() }],
        "scroll-p": [{ "scroll-p": se() }],
        "scroll-px": [{ "scroll-px": se() }],
        "scroll-py": [{ "scroll-py": se() }],
        "scroll-ps": [{ "scroll-ps": se() }],
        "scroll-pe": [{ "scroll-pe": se() }],
        "scroll-pt": [{ "scroll-pt": se() }],
        "scroll-pr": [{ "scroll-pr": se() }],
        "scroll-pb": [{ "scroll-pb": se() }],
        "scroll-pl": [{ "scroll-pl": se() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", ie] },
        ],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [Gt, mn, fa] }],
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
  Oy = py(Ty);
function Je(...n) {
  return Oy(cp(n));
}
const Ay = ey(
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
  Qt = v.forwardRef(
    ({ className: n, variant: o, size: l, asChild: s = !1, ...u }, d) => {
      const f = s ? ap : "button";
      return m.jsx(f, {
        className: Je(Ay({ variant: o, size: l, className: n })),
        ref: d,
        ...u,
      });
    }
  );
Qt.displayName = "Button";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ly = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  gp = (...n) =>
    n
      .filter((o, l, s) => !!o && o.trim() !== "" && s.indexOf(o) === l)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Dy = {
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
 */ const Iy = v.forwardRef(
  (
    {
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: s,
      className: u = "",
      children: d,
      iconNode: f,
      ...p
    },
    y
  ) =>
    v.createElement(
      "svg",
      {
        ref: y,
        ...Dy,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: s ? (Number(l) * 24) / Number(o) : l,
        className: gp("lucide", u),
        ...p,
      },
      [
        ...f.map(([g, w]) => v.createElement(g, w)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ga = (n, o) => {
  const l = v.forwardRef(({ className: s, ...u }, d) =>
    v.createElement(Iy, {
      ref: d,
      iconNode: o,
      className: gp(`lucide-${Ly(n)}`, s),
      ...u,
    })
  );
  return (l.displayName = `${n}`), l;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fy = Ga("AlignJustify", [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const My = Ga("CirclePlus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zy = Ga("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Uy = () => {
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
            m.jsx(Fy, {
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
  By = () => {
    const n = ri();
    return m.jsxs("div", {
      className:
        "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-4",
      children: [
        m.jsx(Uy, {}),
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
              children: m.jsx(Qt, {
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
              children: m.jsx(Qt, {
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
function vp(n, o) {
  return function () {
    return n.apply(o, arguments);
  };
}
const { toString: $y } = Object.prototype,
  { getPrototypeOf: Qa } = Object,
  oi = ((n) => (o) => {
    const l = $y.call(o);
    return n[l] || (n[l] = l.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  bt = (n) => ((n = n.toLowerCase()), (o) => oi(o) === n),
  li = (n) => (o) => typeof o === n,
  { isArray: Sr } = Array,
  wo = li("undefined");
function Wy(n) {
  return (
    n !== null &&
    !wo(n) &&
    n.constructor !== null &&
    !wo(n.constructor) &&
    mt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const yp = bt("ArrayBuffer");
function Vy(n) {
  let o;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (o = ArrayBuffer.isView(n))
      : (o = n && n.buffer && yp(n.buffer)),
    o
  );
}
const Hy = li("string"),
  mt = li("function"),
  xp = li("number"),
  ii = (n) => n !== null && typeof n == "object",
  Ky = (n) => n === !0 || n === !1,
  $l = (n) => {
    if (oi(n) !== "object") return !1;
    const o = Qa(n);
    return (
      (o === null ||
        o === Object.prototype ||
        Object.getPrototypeOf(o) === null) &&
      !(Symbol.toStringTag in n) &&
      !(Symbol.iterator in n)
    );
  },
  Gy = bt("Date"),
  Qy = bt("File"),
  qy = bt("Blob"),
  Xy = bt("FileList"),
  Jy = (n) => ii(n) && mt(n.pipe),
  Yy = (n) => {
    let o;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (mt(n.append) &&
          ((o = oi(n)) === "formdata" ||
            (o === "object" &&
              mt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  Zy = bt("URLSearchParams"),
  [e0, t0, n0, r0] = ["ReadableStream", "Request", "Response", "Headers"].map(
    bt
  ),
  o0 = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Co(n, o, { allOwnKeys: l = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let s, u;
  if ((typeof n != "object" && (n = [n]), Sr(n)))
    for (s = 0, u = n.length; s < u; s++) o.call(null, n[s], s, n);
  else {
    const d = l ? Object.getOwnPropertyNames(n) : Object.keys(n),
      f = d.length;
    let p;
    for (s = 0; s < f; s++) (p = d[s]), o.call(null, n[p], p, n);
  }
}
function wp(n, o) {
  o = o.toLowerCase();
  const l = Object.keys(n);
  let s = l.length,
    u;
  for (; s-- > 0; ) if (((u = l[s]), o === u.toLowerCase())) return u;
  return null;
}
const Mn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Sp = (n) => !wo(n) && n !== Mn;
function Ta() {
  const { caseless: n } = (Sp(this) && this) || {},
    o = {},
    l = (s, u) => {
      const d = (n && wp(o, u)) || u;
      $l(o[d]) && $l(s)
        ? (o[d] = Ta(o[d], s))
        : $l(s)
        ? (o[d] = Ta({}, s))
        : Sr(s)
        ? (o[d] = s.slice())
        : (o[d] = s);
    };
  for (let s = 0, u = arguments.length; s < u; s++)
    arguments[s] && Co(arguments[s], l);
  return o;
}
const l0 = (n, o, l, { allOwnKeys: s } = {}) => (
    Co(
      o,
      (u, d) => {
        l && mt(u) ? (n[d] = vp(u, l)) : (n[d] = u);
      },
      { allOwnKeys: s }
    ),
    n
  ),
  i0 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  s0 = (n, o, l, s) => {
    (n.prototype = Object.create(o.prototype, s)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: o.prototype }),
      l && Object.assign(n.prototype, l);
  },
  a0 = (n, o, l, s) => {
    let u, d, f;
    const p = {};
    if (((o = o || {}), n == null)) return o;
    do {
      for (u = Object.getOwnPropertyNames(n), d = u.length; d-- > 0; )
        (f = u[d]), (!s || s(f, n, o)) && !p[f] && ((o[f] = n[f]), (p[f] = !0));
      n = l !== !1 && Qa(n);
    } while (n && (!l || l(n, o)) && n !== Object.prototype);
    return o;
  },
  u0 = (n, o, l) => {
    (n = String(n)),
      (l === void 0 || l > n.length) && (l = n.length),
      (l -= o.length);
    const s = n.indexOf(o, l);
    return s !== -1 && s === l;
  },
  c0 = (n) => {
    if (!n) return null;
    if (Sr(n)) return n;
    let o = n.length;
    if (!xp(o)) return null;
    const l = new Array(o);
    for (; o-- > 0; ) l[o] = n[o];
    return l;
  },
  d0 = (
    (n) => (o) =>
      n && o instanceof n
  )(typeof Uint8Array < "u" && Qa(Uint8Array)),
  f0 = (n, o) => {
    const s = (n && n[Symbol.iterator]).call(n);
    let u;
    for (; (u = s.next()) && !u.done; ) {
      const d = u.value;
      o.call(n, d[0], d[1]);
    }
  },
  p0 = (n, o) => {
    let l;
    const s = [];
    for (; (l = n.exec(o)) !== null; ) s.push(l);
    return s;
  },
  h0 = bt("HTMLFormElement"),
  m0 = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, s, u) {
      return s.toUpperCase() + u;
    }),
  Ef = (
    ({ hasOwnProperty: n }) =>
    (o, l) =>
      n.call(o, l)
  )(Object.prototype),
  g0 = bt("RegExp"),
  Ep = (n, o) => {
    const l = Object.getOwnPropertyDescriptors(n),
      s = {};
    Co(l, (u, d) => {
      let f;
      (f = o(u, d, n)) !== !1 && (s[d] = f || u);
    }),
      Object.defineProperties(n, s);
  },
  v0 = (n) => {
    Ep(n, (o, l) => {
      if (mt(n) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
        return !1;
      const s = n[l];
      if (mt(s)) {
        if (((o.enumerable = !1), "writable" in o)) {
          o.writable = !1;
          return;
        }
        o.set ||
          (o.set = () => {
            throw Error("Can not rewrite read-only method '" + l + "'");
          });
      }
    });
  },
  y0 = (n, o) => {
    const l = {},
      s = (u) => {
        u.forEach((d) => {
          l[d] = !0;
        });
      };
    return Sr(n) ? s(n) : s(String(n).split(o)), l;
  },
  x0 = () => {},
  w0 = (n, o) => (n != null && Number.isFinite((n = +n)) ? n : o),
  pa = "abcdefghijklmnopqrstuvwxyz",
  Cf = "0123456789",
  Cp = { DIGIT: Cf, ALPHA: pa, ALPHA_DIGIT: pa + pa.toUpperCase() + Cf },
  S0 = (n = 16, o = Cp.ALPHA_DIGIT) => {
    let l = "";
    const { length: s } = o;
    for (; n--; ) l += o[(Math.random() * s) | 0];
    return l;
  };
function E0(n) {
  return !!(
    n &&
    mt(n.append) &&
    n[Symbol.toStringTag] === "FormData" &&
    n[Symbol.iterator]
  );
}
const C0 = (n) => {
    const o = new Array(10),
      l = (s, u) => {
        if (ii(s)) {
          if (o.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            o[u] = s;
            const d = Sr(s) ? [] : {};
            return (
              Co(s, (f, p) => {
                const y = l(f, u + 1);
                !wo(y) && (d[p] = y);
              }),
              (o[u] = void 0),
              d
            );
          }
        }
        return s;
      };
    return l(n, 0);
  },
  k0 = bt("AsyncFunction"),
  N0 = (n) => n && (ii(n) || mt(n)) && mt(n.then) && mt(n.catch),
  kp = ((n, o) =>
    n
      ? setImmediate
      : o
      ? ((l, s) => (
          Mn.addEventListener(
            "message",
            ({ source: u, data: d }) => {
              u === Mn && d === l && s.length && s.shift()();
            },
            !1
          ),
          (u) => {
            s.push(u), Mn.postMessage(l, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (l) => setTimeout(l))(
    typeof setImmediate == "function",
    mt(Mn.postMessage)
  ),
  R0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Mn)
      : (typeof process < "u" && process.nextTick) || kp,
  L = {
    isArray: Sr,
    isArrayBuffer: yp,
    isBuffer: Wy,
    isFormData: Yy,
    isArrayBufferView: Vy,
    isString: Hy,
    isNumber: xp,
    isBoolean: Ky,
    isObject: ii,
    isPlainObject: $l,
    isReadableStream: e0,
    isRequest: t0,
    isResponse: n0,
    isHeaders: r0,
    isUndefined: wo,
    isDate: Gy,
    isFile: Qy,
    isBlob: qy,
    isRegExp: g0,
    isFunction: mt,
    isStream: Jy,
    isURLSearchParams: Zy,
    isTypedArray: d0,
    isFileList: Xy,
    forEach: Co,
    merge: Ta,
    extend: l0,
    trim: o0,
    stripBOM: i0,
    inherits: s0,
    toFlatObject: a0,
    kindOf: oi,
    kindOfTest: bt,
    endsWith: u0,
    toArray: c0,
    forEachEntry: f0,
    matchAll: p0,
    isHTMLForm: h0,
    hasOwnProperty: Ef,
    hasOwnProp: Ef,
    reduceDescriptors: Ep,
    freezeMethods: v0,
    toObjectSet: y0,
    toCamelCase: m0,
    noop: x0,
    toFiniteNumber: w0,
    findKey: wp,
    global: Mn,
    isContextDefined: Sp,
    ALPHABET: Cp,
    generateString: S0,
    isSpecCompliantForm: E0,
    toJSONObject: C0,
    isAsyncFn: k0,
    isThenable: N0,
    setImmediate: kp,
    asap: R0,
  };
function le(n, o, l, s, u) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    o && (this.code = o),
    l && (this.config = l),
    s && (this.request = s),
    u && ((this.response = u), (this.status = u.status ? u.status : null));
}
L.inherits(le, Error, {
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
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Np = le.prototype,
  Rp = {};
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
  Rp[n] = { value: n };
});
Object.defineProperties(le, Rp);
Object.defineProperty(Np, "isAxiosError", { value: !0 });
le.from = (n, o, l, s, u, d) => {
  const f = Object.create(Np);
  return (
    L.toFlatObject(
      n,
      f,
      function (y) {
        return y !== Error.prototype;
      },
      (p) => p !== "isAxiosError"
    ),
    le.call(f, n.message, o, l, s, u),
    (f.cause = n),
    (f.name = n.name),
    d && Object.assign(f, d),
    f
  );
};
const P0 = null;
function Oa(n) {
  return L.isPlainObject(n) || L.isArray(n);
}
function Pp(n) {
  return L.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function kf(n, o, l) {
  return n
    ? n
        .concat(o)
        .map(function (u, d) {
          return (u = Pp(u)), !l && d ? "[" + u + "]" : u;
        })
        .join(l ? "." : "")
    : o;
}
function j0(n) {
  return L.isArray(n) && !n.some(Oa);
}
const b0 = L.toFlatObject(L, {}, null, function (o) {
  return /^is[A-Z]/.test(o);
});
function si(n, o, l) {
  if (!L.isObject(n)) throw new TypeError("target must be an object");
  (o = o || new FormData()),
    (l = L.toFlatObject(
      l,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (E, C) {
        return !L.isUndefined(C[E]);
      }
    ));
  const s = l.metaTokens,
    u = l.visitor || w,
    d = l.dots,
    f = l.indexes,
    y = (l.Blob || (typeof Blob < "u" && Blob)) && L.isSpecCompliantForm(o);
  if (!L.isFunction(u)) throw new TypeError("visitor must be a function");
  function g(b) {
    if (b === null) return "";
    if (L.isDate(b)) return b.toISOString();
    if (!y && L.isBlob(b))
      throw new le("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(b) || L.isTypedArray(b)
      ? y && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function w(b, E, C) {
    let A = b;
    if (b && !C && typeof b == "object") {
      if (L.endsWith(E, "{}"))
        (E = s ? E : E.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (L.isArray(b) && j0(b)) ||
        ((L.isFileList(b) || L.endsWith(E, "[]")) && (A = L.toArray(b)))
      )
        return (
          (E = Pp(E)),
          A.forEach(function (B, W) {
            !(L.isUndefined(B) || B === null) &&
              o.append(
                f === !0 ? kf([E], W, d) : f === null ? E : E + "[]",
                g(B)
              );
          }),
          !1
        );
    }
    return Oa(b) ? !0 : (o.append(kf(C, E, d), g(b)), !1);
  }
  const S = [],
    P = Object.assign(b0, {
      defaultVisitor: w,
      convertValue: g,
      isVisitable: Oa,
    });
  function O(b, E) {
    if (!L.isUndefined(b)) {
      if (S.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      S.push(b),
        L.forEach(b, function (A, I) {
          (!(L.isUndefined(A) || A === null) &&
            u.call(o, A, L.isString(I) ? I.trim() : I, E, P)) === !0 &&
            O(A, E ? E.concat(I) : [I]);
        }),
        S.pop();
    }
  }
  if (!L.isObject(n)) throw new TypeError("data must be an object");
  return O(n), o;
}
function Nf(n) {
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
function qa(n, o) {
  (this._pairs = []), n && si(n, this, o);
}
const jp = qa.prototype;
jp.append = function (o, l) {
  this._pairs.push([o, l]);
};
jp.toString = function (o) {
  const l = o
    ? function (s) {
        return o.call(this, s, Nf);
      }
    : Nf;
  return this._pairs
    .map(function (u) {
      return l(u[0]) + "=" + l(u[1]);
    }, "")
    .join("&");
};
function _0(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function bp(n, o, l) {
  if (!o) return n;
  const s = (l && l.encode) || _0;
  L.isFunction(l) && (l = { serialize: l });
  const u = l && l.serialize;
  let d;
  if (
    (u
      ? (d = u(o, l))
      : (d = L.isURLSearchParams(o) ? o.toString() : new qa(o, l).toString(s)),
    d)
  ) {
    const f = n.indexOf("#");
    f !== -1 && (n = n.slice(0, f)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + d);
  }
  return n;
}
class Rf {
  constructor() {
    this.handlers = [];
  }
  use(o, l, s) {
    return (
      this.handlers.push({
        fulfilled: o,
        rejected: l,
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
    L.forEach(this.handlers, function (s) {
      s !== null && o(s);
    });
  }
}
const _p = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  T0 = typeof URLSearchParams < "u" ? URLSearchParams : qa,
  O0 = typeof FormData < "u" ? FormData : null,
  A0 = typeof Blob < "u" ? Blob : null,
  L0 = {
    isBrowser: !0,
    classes: { URLSearchParams: T0, FormData: O0, Blob: A0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Xa = typeof window < "u" && typeof document < "u",
  Aa = (typeof navigator == "object" && navigator) || void 0,
  D0 =
    Xa &&
    (!Aa || ["ReactNative", "NativeScript", "NS"].indexOf(Aa.product) < 0),
  I0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  F0 = (Xa && window.location.href) || "http://localhost",
  M0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Xa,
        hasStandardBrowserEnv: D0,
        hasStandardBrowserWebWorkerEnv: I0,
        navigator: Aa,
        origin: F0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xe = { ...M0, ...L0 };
function z0(n, o) {
  return si(
    n,
    new Xe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (l, s, u, d) {
          return Xe.isNode && L.isBuffer(l)
            ? (this.append(s, l.toString("base64")), !1)
            : d.defaultVisitor.apply(this, arguments);
        },
      },
      o
    )
  );
}
function U0(n) {
  return L.matchAll(/\w+|\[(\w*)]/g, n).map((o) =>
    o[0] === "[]" ? "" : o[1] || o[0]
  );
}
function B0(n) {
  const o = {},
    l = Object.keys(n);
  let s;
  const u = l.length;
  let d;
  for (s = 0; s < u; s++) (d = l[s]), (o[d] = n[d]);
  return o;
}
function Tp(n) {
  function o(l, s, u, d) {
    let f = l[d++];
    if (f === "__proto__") return !0;
    const p = Number.isFinite(+f),
      y = d >= l.length;
    return (
      (f = !f && L.isArray(u) ? u.length : f),
      y
        ? (L.hasOwnProp(u, f) ? (u[f] = [u[f], s]) : (u[f] = s), !p)
        : ((!u[f] || !L.isObject(u[f])) && (u[f] = []),
          o(l, s, u[f], d) && L.isArray(u[f]) && (u[f] = B0(u[f])),
          !p)
    );
  }
  if (L.isFormData(n) && L.isFunction(n.entries)) {
    const l = {};
    return (
      L.forEachEntry(n, (s, u) => {
        o(U0(s), u, l, 0);
      }),
      l
    );
  }
  return null;
}
function $0(n, o, l) {
  if (L.isString(n))
    try {
      return (o || JSON.parse)(n), L.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (0, JSON.stringify)(n);
}
const ko = {
  transitional: _p,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (o, l) {
      const s = l.getContentType() || "",
        u = s.indexOf("application/json") > -1,
        d = L.isObject(o);
      if ((d && L.isHTMLForm(o) && (o = new FormData(o)), L.isFormData(o)))
        return u ? JSON.stringify(Tp(o)) : o;
      if (
        L.isArrayBuffer(o) ||
        L.isBuffer(o) ||
        L.isStream(o) ||
        L.isFile(o) ||
        L.isBlob(o) ||
        L.isReadableStream(o)
      )
        return o;
      if (L.isArrayBufferView(o)) return o.buffer;
      if (L.isURLSearchParams(o))
        return (
          l.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          o.toString()
        );
      let p;
      if (d) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return z0(o, this.formSerializer).toString();
        if ((p = L.isFileList(o)) || s.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return si(
            p ? { "files[]": o } : o,
            y && new y(),
            this.formSerializer
          );
        }
      }
      return d || u ? (l.setContentType("application/json", !1), $0(o)) : o;
    },
  ],
  transformResponse: [
    function (o) {
      const l = this.transitional || ko.transitional,
        s = l && l.forcedJSONParsing,
        u = this.responseType === "json";
      if (L.isResponse(o) || L.isReadableStream(o)) return o;
      if (o && L.isString(o) && ((s && !this.responseType) || u)) {
        const f = !(l && l.silentJSONParsing) && u;
        try {
          return JSON.parse(o);
        } catch (p) {
          if (f)
            throw p.name === "SyntaxError"
              ? le.from(p, le.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: Xe.classes.FormData, Blob: Xe.classes.Blob },
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
L.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  ko.headers[n] = {};
});
const W0 = L.toObjectSet([
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
  V0 = (n) => {
    const o = {};
    let l, s, u;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (f) {
            (u = f.indexOf(":")),
              (l = f.substring(0, u).trim().toLowerCase()),
              (s = f.substring(u + 1).trim()),
              !(!l || (o[l] && W0[l])) &&
                (l === "set-cookie"
                  ? o[l]
                    ? o[l].push(s)
                    : (o[l] = [s])
                  : (o[l] = o[l] ? o[l] + ", " + s : s));
          }),
      o
    );
  },
  Pf = Symbol("internals");
function po(n) {
  return n && String(n).trim().toLowerCase();
}
function Wl(n) {
  return n === !1 || n == null ? n : L.isArray(n) ? n.map(Wl) : String(n);
}
function H0(n) {
  const o = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = l.exec(n)); ) o[s[1]] = s[2];
  return o;
}
const K0 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function ha(n, o, l, s, u) {
  if (L.isFunction(s)) return s.call(this, o, l);
  if ((u && (o = l), !!L.isString(o))) {
    if (L.isString(s)) return o.indexOf(s) !== -1;
    if (L.isRegExp(s)) return s.test(o);
  }
}
function G0(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (o, l, s) => l.toUpperCase() + s);
}
function Q0(n, o) {
  const l = L.toCamelCase(" " + o);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(n, s + l, {
      value: function (u, d, f) {
        return this[s].call(this, o, u, d, f);
      },
      configurable: !0,
    });
  });
}
class ut {
  constructor(o) {
    o && this.set(o);
  }
  set(o, l, s) {
    const u = this;
    function d(p, y, g) {
      const w = po(y);
      if (!w) throw new Error("header name must be a non-empty string");
      const S = L.findKey(u, w);
      (!S || u[S] === void 0 || g === !0 || (g === void 0 && u[S] !== !1)) &&
        (u[S || y] = Wl(p));
    }
    const f = (p, y) => L.forEach(p, (g, w) => d(g, w, y));
    if (L.isPlainObject(o) || o instanceof this.constructor) f(o, l);
    else if (L.isString(o) && (o = o.trim()) && !K0(o)) f(V0(o), l);
    else if (L.isHeaders(o)) for (const [p, y] of o.entries()) d(y, p, s);
    else o != null && d(l, o, s);
    return this;
  }
  get(o, l) {
    if (((o = po(o)), o)) {
      const s = L.findKey(this, o);
      if (s) {
        const u = this[s];
        if (!l) return u;
        if (l === !0) return H0(u);
        if (L.isFunction(l)) return l.call(this, u, s);
        if (L.isRegExp(l)) return l.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(o, l) {
    if (((o = po(o)), o)) {
      const s = L.findKey(this, o);
      return !!(s && this[s] !== void 0 && (!l || ha(this, this[s], s, l)));
    }
    return !1;
  }
  delete(o, l) {
    const s = this;
    let u = !1;
    function d(f) {
      if (((f = po(f)), f)) {
        const p = L.findKey(s, f);
        p && (!l || ha(s, s[p], p, l)) && (delete s[p], (u = !0));
      }
    }
    return L.isArray(o) ? o.forEach(d) : d(o), u;
  }
  clear(o) {
    const l = Object.keys(this);
    let s = l.length,
      u = !1;
    for (; s--; ) {
      const d = l[s];
      (!o || ha(this, this[d], d, o, !0)) && (delete this[d], (u = !0));
    }
    return u;
  }
  normalize(o) {
    const l = this,
      s = {};
    return (
      L.forEach(this, (u, d) => {
        const f = L.findKey(s, d);
        if (f) {
          (l[f] = Wl(u)), delete l[d];
          return;
        }
        const p = o ? G0(d) : String(d).trim();
        p !== d && delete l[d], (l[p] = Wl(u)), (s[p] = !0);
      }),
      this
    );
  }
  concat(...o) {
    return this.constructor.concat(this, ...o);
  }
  toJSON(o) {
    const l = Object.create(null);
    return (
      L.forEach(this, (s, u) => {
        s != null && s !== !1 && (l[u] = o && L.isArray(s) ? s.join(", ") : s);
      }),
      l
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([o, l]) => o + ": " + l).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(o) {
    return o instanceof this ? o : new this(o);
  }
  static concat(o, ...l) {
    const s = new this(o);
    return l.forEach((u) => s.set(u)), s;
  }
  static accessor(o) {
    const s = (this[Pf] = this[Pf] = { accessors: {} }).accessors,
      u = this.prototype;
    function d(f) {
      const p = po(f);
      s[p] || (Q0(u, f), (s[p] = !0));
    }
    return L.isArray(o) ? o.forEach(d) : d(o), this;
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
L.reduceDescriptors(ut.prototype, ({ value: n }, o) => {
  let l = o[0].toUpperCase() + o.slice(1);
  return {
    get: () => n,
    set(s) {
      this[l] = s;
    },
  };
});
L.freezeMethods(ut);
function ma(n, o) {
  const l = this || ko,
    s = o || l,
    u = ut.from(s.headers);
  let d = s.data;
  return (
    L.forEach(n, function (p) {
      d = p.call(l, d, u.normalize(), o ? o.status : void 0);
    }),
    u.normalize(),
    d
  );
}
function Op(n) {
  return !!(n && n.__CANCEL__);
}
function Er(n, o, l) {
  le.call(this, n ?? "canceled", le.ERR_CANCELED, o, l),
    (this.name = "CanceledError");
}
L.inherits(Er, le, { __CANCEL__: !0 });
function Ap(n, o, l) {
  const s = l.config.validateStatus;
  !l.status || !s || s(l.status)
    ? n(l)
    : o(
        new le(
          "Request failed with status code " + l.status,
          [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][
            Math.floor(l.status / 100) - 4
          ],
          l.config,
          l.request,
          l
        )
      );
}
function q0(n) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (o && o[1]) || "";
}
function X0(n, o) {
  n = n || 10;
  const l = new Array(n),
    s = new Array(n);
  let u = 0,
    d = 0,
    f;
  return (
    (o = o !== void 0 ? o : 1e3),
    function (y) {
      const g = Date.now(),
        w = s[d];
      f || (f = g), (l[u] = y), (s[u] = g);
      let S = d,
        P = 0;
      for (; S !== u; ) (P += l[S++]), (S = S % n);
      if (((u = (u + 1) % n), u === d && (d = (d + 1) % n), g - f < o)) return;
      const O = w && g - w;
      return O ? Math.round((P * 1e3) / O) : void 0;
    }
  );
}
function J0(n, o) {
  let l = 0,
    s = 1e3 / o,
    u,
    d;
  const f = (g, w = Date.now()) => {
    (l = w), (u = null), d && (clearTimeout(d), (d = null)), n.apply(null, g);
  };
  return [
    (...g) => {
      const w = Date.now(),
        S = w - l;
      S >= s
        ? f(g, w)
        : ((u = g),
          d ||
            (d = setTimeout(() => {
              (d = null), f(u);
            }, s - S)));
    },
    () => u && f(u),
  ];
}
const Yl = (n, o, l = 3) => {
    let s = 0;
    const u = X0(50, 250);
    return J0((d) => {
      const f = d.loaded,
        p = d.lengthComputable ? d.total : void 0,
        y = f - s,
        g = u(y),
        w = f <= p;
      s = f;
      const S = {
        loaded: f,
        total: p,
        progress: p ? f / p : void 0,
        bytes: y,
        rate: g || void 0,
        estimated: g && p && w ? (p - f) / g : void 0,
        event: d,
        lengthComputable: p != null,
        [o ? "download" : "upload"]: !0,
      };
      n(S);
    }, l);
  },
  jf = (n, o) => {
    const l = n != null;
    return [(s) => o[0]({ lengthComputable: l, total: n, loaded: s }), o[1]];
  },
  bf =
    (n) =>
    (...o) =>
      L.asap(() => n(...o)),
  Y0 = Xe.hasStandardBrowserEnv
    ? ((n, o) => (l) => (
        (l = new URL(l, Xe.origin)),
        n.protocol === l.protocol &&
          n.host === l.host &&
          (o || n.port === l.port)
      ))(
        new URL(Xe.origin),
        Xe.navigator && /(msie|trident)/i.test(Xe.navigator.userAgent)
      )
    : () => !0,
  Z0 = Xe.hasStandardBrowserEnv
    ? {
        write(n, o, l, s, u, d) {
          const f = [n + "=" + encodeURIComponent(o)];
          L.isNumber(l) && f.push("expires=" + new Date(l).toGMTString()),
            L.isString(s) && f.push("path=" + s),
            L.isString(u) && f.push("domain=" + u),
            d === !0 && f.push("secure"),
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
function ex(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function tx(n, o) {
  return o ? n.replace(/\/?\/$/, "") + "/" + o.replace(/^\/+/, "") : n;
}
function Lp(n, o) {
  return n && !ex(o) ? tx(n, o) : o;
}
const _f = (n) => (n instanceof ut ? { ...n } : n);
function Un(n, o) {
  o = o || {};
  const l = {};
  function s(g, w, S, P) {
    return L.isPlainObject(g) && L.isPlainObject(w)
      ? L.merge.call({ caseless: P }, g, w)
      : L.isPlainObject(w)
      ? L.merge({}, w)
      : L.isArray(w)
      ? w.slice()
      : w;
  }
  function u(g, w, S, P) {
    if (L.isUndefined(w)) {
      if (!L.isUndefined(g)) return s(void 0, g, S, P);
    } else return s(g, w, S, P);
  }
  function d(g, w) {
    if (!L.isUndefined(w)) return s(void 0, w);
  }
  function f(g, w) {
    if (L.isUndefined(w)) {
      if (!L.isUndefined(g)) return s(void 0, g);
    } else return s(void 0, w);
  }
  function p(g, w, S) {
    if (S in o) return s(g, w);
    if (S in n) return s(void 0, g);
  }
  const y = {
    url: d,
    method: d,
    data: d,
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
    headers: (g, w, S) => u(_f(g), _f(w), S, !0),
  };
  return (
    L.forEach(Object.keys(Object.assign({}, n, o)), function (w) {
      const S = y[w] || u,
        P = S(n[w], o[w], w);
      (L.isUndefined(P) && S !== p) || (l[w] = P);
    }),
    l
  );
}
const Dp = (n) => {
    const o = Un({}, n);
    let {
      data: l,
      withXSRFToken: s,
      xsrfHeaderName: u,
      xsrfCookieName: d,
      headers: f,
      auth: p,
    } = o;
    (o.headers = f = ut.from(f)),
      (o.url = bp(Lp(o.baseURL, o.url), n.params, n.paramsSerializer)),
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
    if (L.isFormData(l)) {
      if (Xe.hasStandardBrowserEnv || Xe.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if ((y = f.getContentType()) !== !1) {
        const [g, ...w] = y
          ? y
              .split(";")
              .map((S) => S.trim())
              .filter(Boolean)
          : [];
        f.setContentType([g || "multipart/form-data", ...w].join("; "));
      }
    }
    if (
      Xe.hasStandardBrowserEnv &&
      (s && L.isFunction(s) && (s = s(o)), s || (s !== !1 && Y0(o.url)))
    ) {
      const g = u && d && Z0.read(d);
      g && f.set(u, g);
    }
    return o;
  },
  nx = typeof XMLHttpRequest < "u",
  rx =
    nx &&
    function (n) {
      return new Promise(function (l, s) {
        const u = Dp(n);
        let d = u.data;
        const f = ut.from(u.headers).normalize();
        let { responseType: p, onUploadProgress: y, onDownloadProgress: g } = u,
          w,
          S,
          P,
          O,
          b;
        function E() {
          O && O(),
            b && b(),
            u.cancelToken && u.cancelToken.unsubscribe(w),
            u.signal && u.signal.removeEventListener("abort", w);
        }
        let C = new XMLHttpRequest();
        C.open(u.method.toUpperCase(), u.url, !0), (C.timeout = u.timeout);
        function A() {
          if (!C) return;
          const B = ut.from(
              "getAllResponseHeaders" in C && C.getAllResponseHeaders()
            ),
            K = {
              data:
                !p || p === "text" || p === "json"
                  ? C.responseText
                  : C.response,
              status: C.status,
              statusText: C.statusText,
              headers: B,
              config: n,
              request: C,
            };
          Ap(
            function (Z) {
              l(Z), E();
            },
            function (Z) {
              s(Z), E();
            },
            K
          ),
            (C = null);
        }
        "onloadend" in C
          ? (C.onloadend = A)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 &&
                  !(C.responseURL && C.responseURL.indexOf("file:") === 0)) ||
                setTimeout(A);
            }),
          (C.onabort = function () {
            C &&
              (s(new le("Request aborted", le.ECONNABORTED, n, C)), (C = null));
          }),
          (C.onerror = function () {
            s(new le("Network Error", le.ERR_NETWORK, n, C)), (C = null);
          }),
          (C.ontimeout = function () {
            let W = u.timeout
              ? "timeout of " + u.timeout + "ms exceeded"
              : "timeout exceeded";
            const K = u.transitional || _p;
            u.timeoutErrorMessage && (W = u.timeoutErrorMessage),
              s(
                new le(
                  W,
                  K.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
                  n,
                  C
                )
              ),
              (C = null);
          }),
          d === void 0 && f.setContentType(null),
          "setRequestHeader" in C &&
            L.forEach(f.toJSON(), function (W, K) {
              C.setRequestHeader(K, W);
            }),
          L.isUndefined(u.withCredentials) ||
            (C.withCredentials = !!u.withCredentials),
          p && p !== "json" && (C.responseType = u.responseType),
          g && (([P, b] = Yl(g, !0)), C.addEventListener("progress", P)),
          y &&
            C.upload &&
            (([S, O] = Yl(y)),
            C.upload.addEventListener("progress", S),
            C.upload.addEventListener("loadend", O)),
          (u.cancelToken || u.signal) &&
            ((w = (B) => {
              C &&
                (s(!B || B.type ? new Er(null, n, C) : B),
                C.abort(),
                (C = null));
            }),
            u.cancelToken && u.cancelToken.subscribe(w),
            u.signal &&
              (u.signal.aborted ? w() : u.signal.addEventListener("abort", w)));
        const I = q0(u.url);
        if (I && Xe.protocols.indexOf(I) === -1) {
          s(new le("Unsupported protocol " + I + ":", le.ERR_BAD_REQUEST, n));
          return;
        }
        C.send(d || null);
      });
    },
  ox = (n, o) => {
    const { length: l } = (n = n ? n.filter(Boolean) : []);
    if (o || l) {
      let s = new AbortController(),
        u;
      const d = function (g) {
        if (!u) {
          (u = !0), p();
          const w = g instanceof Error ? g : this.reason;
          s.abort(
            w instanceof le ? w : new Er(w instanceof Error ? w.message : w)
          );
        }
      };
      let f =
        o &&
        setTimeout(() => {
          (f = null), d(new le(`timeout ${o} of ms exceeded`, le.ETIMEDOUT));
        }, o);
      const p = () => {
        n &&
          (f && clearTimeout(f),
          (f = null),
          n.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(d)
              : g.removeEventListener("abort", d);
          }),
          (n = null));
      };
      n.forEach((g) => g.addEventListener("abort", d));
      const { signal: y } = s;
      return (y.unsubscribe = () => L.asap(p)), y;
    }
  },
  lx = function* (n, o) {
    let l = n.byteLength;
    if (l < o) {
      yield n;
      return;
    }
    let s = 0,
      u;
    for (; s < l; ) (u = s + o), yield n.slice(s, u), (s = u);
  },
  ix = async function* (n, o) {
    for await (const l of sx(n)) yield* lx(l, o);
  },
  sx = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const o = n.getReader();
    try {
      for (;;) {
        const { done: l, value: s } = await o.read();
        if (l) break;
        yield s;
      }
    } finally {
      await o.cancel();
    }
  },
  Tf = (n, o, l, s) => {
    const u = ix(n, o);
    let d = 0,
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
            let S = w.byteLength;
            if (l) {
              let P = (d += S);
              l(P);
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
  ai =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Ip = ai && typeof ReadableStream == "function",
  ax =
    ai &&
    (typeof TextEncoder == "function"
      ? (
          (n) => (o) =>
            n.encode(o)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  Fp = (n, ...o) => {
    try {
      return !!n(...o);
    } catch {
      return !1;
    }
  },
  ux =
    Ip &&
    Fp(() => {
      let n = !1;
      const o = new Request(Xe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (n = !0), "half";
        },
      }).headers.has("Content-Type");
      return n && !o;
    }),
  Of = 64 * 1024,
  La = Ip && Fp(() => L.isReadableStream(new Response("").body)),
  Zl = { stream: La && ((n) => n.body) };
ai &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((o) => {
      !Zl[o] &&
        (Zl[o] = L.isFunction(n[o])
          ? (l) => l[o]()
          : (l, s) => {
              throw new le(
                `Response type '${o}' is not supported`,
                le.ERR_NOT_SUPPORT,
                s
              );
            });
    });
  })(new Response());
const cx = async (n) => {
    if (n == null) return 0;
    if (L.isBlob(n)) return n.size;
    if (L.isSpecCompliantForm(n))
      return (
        await new Request(Xe.origin, { method: "POST", body: n }).arrayBuffer()
      ).byteLength;
    if (L.isArrayBufferView(n) || L.isArrayBuffer(n)) return n.byteLength;
    if ((L.isURLSearchParams(n) && (n = n + ""), L.isString(n)))
      return (await ax(n)).byteLength;
  },
  dx = async (n, o) => {
    const l = L.toFiniteNumber(n.getContentLength());
    return l ?? cx(o);
  },
  fx =
    ai &&
    (async (n) => {
      let {
        url: o,
        method: l,
        data: s,
        signal: u,
        cancelToken: d,
        timeout: f,
        onDownloadProgress: p,
        onUploadProgress: y,
        responseType: g,
        headers: w,
        withCredentials: S = "same-origin",
        fetchOptions: P,
      } = Dp(n);
      g = g ? (g + "").toLowerCase() : "text";
      let O = ox([u, d && d.toAbortSignal()], f),
        b;
      const E =
        O &&
        O.unsubscribe &&
        (() => {
          O.unsubscribe();
        });
      let C;
      try {
        if (
          y &&
          ux &&
          l !== "get" &&
          l !== "head" &&
          (C = await dx(w, s)) !== 0
        ) {
          let K = new Request(o, { method: "POST", body: s, duplex: "half" }),
            V;
          if (
            (L.isFormData(s) &&
              (V = K.headers.get("content-type")) &&
              w.setContentType(V),
            K.body)
          ) {
            const [Z, re] = jf(C, Yl(bf(y)));
            s = Tf(K.body, Of, Z, re);
          }
        }
        L.isString(S) || (S = S ? "include" : "omit");
        const A = "credentials" in Request.prototype;
        b = new Request(o, {
          ...P,
          signal: O,
          method: l.toUpperCase(),
          headers: w.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: A ? S : void 0,
        });
        let I = await fetch(b);
        const B = La && (g === "stream" || g === "response");
        if (La && (p || (B && E))) {
          const K = {};
          ["status", "statusText", "headers"].forEach((Se) => {
            K[Se] = I[Se];
          });
          const V = L.toFiniteNumber(I.headers.get("content-length")),
            [Z, re] = (p && jf(V, Yl(bf(p), !0))) || [];
          I = new Response(
            Tf(I.body, Of, Z, () => {
              re && re(), E && E();
            }),
            K
          );
        }
        g = g || "text";
        let W = await Zl[L.findKey(Zl, g) || "text"](I, n);
        return (
          !B && E && E(),
          await new Promise((K, V) => {
            Ap(K, V, {
              data: W,
              headers: ut.from(I.headers),
              status: I.status,
              statusText: I.statusText,
              config: n,
              request: b,
            });
          })
        );
      } catch (A) {
        throw (
          (E && E(),
          A && A.name === "TypeError" && /fetch/i.test(A.message)
            ? Object.assign(new le("Network Error", le.ERR_NETWORK, n, b), {
                cause: A.cause || A,
              })
            : le.from(A, A && A.code, n, b))
        );
      }
    }),
  Da = { http: P0, xhr: rx, fetch: fx };
L.forEach(Da, (n, o) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: o });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: o });
  }
});
const Af = (n) => `- ${n}`,
  px = (n) => L.isFunction(n) || n === null || n === !1,
  Mp = {
    getAdapter: (n) => {
      n = L.isArray(n) ? n : [n];
      const { length: o } = n;
      let l, s;
      const u = {};
      for (let d = 0; d < o; d++) {
        l = n[d];
        let f;
        if (
          ((s = l),
          !px(l) && ((s = Da[(f = String(l)).toLowerCase()]), s === void 0))
        )
          throw new le(`Unknown adapter '${f}'`);
        if (s) break;
        u[f || "#" + d] = s;
      }
      if (!s) {
        const d = Object.entries(u).map(
          ([p, y]) =>
            `adapter ${p} ` +
            (y === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let f = o
          ? d.length > 1
            ? `since :
` +
              d.map(Af).join(`
`)
            : " " + Af(d[0])
          : "as no adapter specified";
        throw new le(
          "There is no suitable adapter to dispatch the request " + f,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: Da,
  };
function ga(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Er(null, n);
}
function Lf(n) {
  return (
    ga(n),
    (n.headers = ut.from(n.headers)),
    (n.data = ma.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Mp.getAdapter(n.adapter || ko.adapter)(n).then(
      function (s) {
        return (
          ga(n),
          (s.data = ma.call(n, n.transformResponse, s)),
          (s.headers = ut.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Op(s) ||
            (ga(n),
            s &&
              s.response &&
              ((s.response.data = ma.call(n, n.transformResponse, s.response)),
              (s.response.headers = ut.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const zp = "1.7.9",
  ui = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, o) => {
    ui[n] = function (s) {
      return typeof s === n || "a" + (o < 1 ? "n " : " ") + n;
    };
  }
);
const Df = {};
ui.transitional = function (o, l, s) {
  function u(d, f) {
    return (
      "[Axios v" +
      zp +
      "] Transitional option '" +
      d +
      "'" +
      f +
      (s ? ". " + s : "")
    );
  }
  return (d, f, p) => {
    if (o === !1)
      throw new le(
        u(f, " has been removed" + (l ? " in " + l : "")),
        le.ERR_DEPRECATED
      );
    return (
      l &&
        !Df[f] &&
        ((Df[f] = !0),
        console.warn(
          u(
            f,
            " has been deprecated since v" +
              l +
              " and will be removed in the near future"
          )
        )),
      o ? o(d, f, p) : !0
    );
  };
};
ui.spelling = function (o) {
  return (l, s) => (console.warn(`${s} is likely a misspelling of ${o}`), !0);
};
function hx(n, o, l) {
  if (typeof n != "object")
    throw new le("options must be an object", le.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let u = s.length;
  for (; u-- > 0; ) {
    const d = s[u],
      f = o[d];
    if (f) {
      const p = n[d],
        y = p === void 0 || f(p, d, n);
      if (y !== !0)
        throw new le("option " + d + " must be " + y, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0) throw new le("Unknown option " + d, le.ERR_BAD_OPTION);
  }
}
const Vl = { assertOptions: hx, validators: ui },
  It = Vl.validators;
class zn {
  constructor(o) {
    (this.defaults = o),
      (this.interceptors = { request: new Rf(), response: new Rf() });
  }
  async request(o, l) {
    try {
      return await this._request(o, l);
    } catch (s) {
      if (s instanceof Error) {
        let u = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(u)
          : (u = new Error());
        const d = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? d &&
              !String(s.stack).endsWith(d.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + d)
            : (s.stack = d);
        } catch {}
      }
      throw s;
    }
  }
  _request(o, l) {
    typeof o == "string" ? ((l = l || {}), (l.url = o)) : (l = o || {}),
      (l = Un(this.defaults, l));
    const { transitional: s, paramsSerializer: u, headers: d } = l;
    s !== void 0 &&
      Vl.assertOptions(
        s,
        {
          silentJSONParsing: It.transitional(It.boolean),
          forcedJSONParsing: It.transitional(It.boolean),
          clarifyTimeoutError: It.transitional(It.boolean),
        },
        !1
      ),
      u != null &&
        (L.isFunction(u)
          ? (l.paramsSerializer = { serialize: u })
          : Vl.assertOptions(
              u,
              { encode: It.function, serialize: It.function },
              !0
            )),
      Vl.assertOptions(
        l,
        {
          baseUrl: It.spelling("baseURL"),
          withXsrfToken: It.spelling("withXSRFToken"),
        },
        !0
      ),
      (l.method = (l.method || this.defaults.method || "get").toLowerCase());
    let f = d && L.merge(d.common, d[l.method]);
    d &&
      L.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (b) => {
          delete d[b];
        }
      ),
      (l.headers = ut.concat(f, d));
    const p = [];
    let y = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == "function" && E.runWhen(l) === !1) ||
        ((y = y && E.synchronous), p.unshift(E.fulfilled, E.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (E) {
      g.push(E.fulfilled, E.rejected);
    });
    let w,
      S = 0,
      P;
    if (!y) {
      const b = [Lf.bind(this), void 0];
      for (
        b.unshift.apply(b, p),
          b.push.apply(b, g),
          P = b.length,
          w = Promise.resolve(l);
        S < P;

      )
        w = w.then(b[S++], b[S++]);
      return w;
    }
    P = p.length;
    let O = l;
    for (S = 0; S < P; ) {
      const b = p[S++],
        E = p[S++];
      try {
        O = b(O);
      } catch (C) {
        E.call(this, C);
        break;
      }
    }
    try {
      w = Lf.call(this, O);
    } catch (b) {
      return Promise.reject(b);
    }
    for (S = 0, P = g.length; S < P; ) w = w.then(g[S++], g[S++]);
    return w;
  }
  getUri(o) {
    o = Un(this.defaults, o);
    const l = Lp(o.baseURL, o.url);
    return bp(l, o.params, o.paramsSerializer);
  }
}
L.forEach(["delete", "get", "head", "options"], function (o) {
  zn.prototype[o] = function (l, s) {
    return this.request(
      Un(s || {}, { method: o, url: l, data: (s || {}).data })
    );
  };
});
L.forEach(["post", "put", "patch"], function (o) {
  function l(s) {
    return function (d, f, p) {
      return this.request(
        Un(p || {}, {
          method: o,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: d,
          data: f,
        })
      );
    };
  }
  (zn.prototype[o] = l()), (zn.prototype[o + "Form"] = l(!0));
});
class Ja {
  constructor(o) {
    if (typeof o != "function")
      throw new TypeError("executor must be a function.");
    let l;
    this.promise = new Promise(function (d) {
      l = d;
    });
    const s = this;
    this.promise.then((u) => {
      if (!s._listeners) return;
      let d = s._listeners.length;
      for (; d-- > 0; ) s._listeners[d](u);
      s._listeners = null;
    }),
      (this.promise.then = (u) => {
        let d;
        const f = new Promise((p) => {
          s.subscribe(p), (d = p);
        }).then(u);
        return (
          (f.cancel = function () {
            s.unsubscribe(d);
          }),
          f
        );
      }),
      o(function (d, f, p) {
        s.reason || ((s.reason = new Er(d, f, p)), l(s.reason));
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
    const l = this._listeners.indexOf(o);
    l !== -1 && this._listeners.splice(l, 1);
  }
  toAbortSignal() {
    const o = new AbortController(),
      l = (s) => {
        o.abort(s);
      };
    return (
      this.subscribe(l),
      (o.signal.unsubscribe = () => this.unsubscribe(l)),
      o.signal
    );
  }
  static source() {
    let o;
    return {
      token: new Ja(function (u) {
        o = u;
      }),
      cancel: o,
    };
  }
}
function mx(n) {
  return function (l) {
    return n.apply(null, l);
  };
}
function gx(n) {
  return L.isObject(n) && n.isAxiosError === !0;
}
const Ia = {
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
Object.entries(Ia).forEach(([n, o]) => {
  Ia[o] = n;
});
function Up(n) {
  const o = new zn(n),
    l = vp(zn.prototype.request, o);
  return (
    L.extend(l, zn.prototype, o, { allOwnKeys: !0 }),
    L.extend(l, o, null, { allOwnKeys: !0 }),
    (l.create = function (u) {
      return Up(Un(n, u));
    }),
    l
  );
}
const fe = Up(ko);
fe.Axios = zn;
fe.CanceledError = Er;
fe.CancelToken = Ja;
fe.isCancel = Op;
fe.VERSION = zp;
fe.toFormData = si;
fe.AxiosError = le;
fe.Cancel = fe.CanceledError;
fe.all = function (o) {
  return Promise.all(o);
};
fe.spread = mx;
fe.isAxiosError = gx;
fe.mergeConfig = Un;
fe.AxiosHeaders = ut;
fe.formToJSON = (n) => Tp(L.isHTMLForm(n) ? new FormData(n) : n);
fe.getAdapter = Mp.getAdapter;
fe.HttpStatusCode = Ia;
fe.default = fe;
const vx = ({ token: n, role: o, id: l }) => {
  const [s, u] = v.useState(null),
    [d, f] = v.useState([]),
    [p, y] = v.useState([]),
    [g, w] = v.useState(null),
    [S, P] = v.useState(!0),
    [O, b] = v.useState("details"),
    [E, C] = v.useState(!1),
    A = async () => {
      try {
        const V = await fe.get(
          `https://hari-book-sphere.netlify.app/user/${l}`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        u(V.data), console.log(V.data);
      } catch (V) {
        w(V.message);
      } finally {
        P(!1);
      }
    },
    I = async () => {
      try {
        const V = await fe.get(
          `https://hari-book-sphere.netlify.app/user/${l}/rentals`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        f(V.data), console.log(V.data);
      } catch (V) {
        w(V.message);
      }
    },
    B = async () => {
      try {
        const V = await fe.get(
          `https://hari-book-sphere.netlify.app/user/${l}/books`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        console.log(V.data), y(V.data);
      } catch (V) {
        w(V.message);
      }
    },
    W = async (V) => {
      C(!0);
      try {
        await fe.post(
          `https://hari-book-sphere.netlify.app/user/${l}/rentbook`,
          { bookId: V },
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          B(),
          I();
      } catch (Z) {
        w(Z.message);
      } finally {
        C(!1);
      }
    };
  if (
    (v.useEffect(() => {
      n &&
        l &&
        (P(!0),
        (async () => {
          try {
            await A(), await I(), await B();
          } catch (Z) {
            w(Z.message);
          } finally {
            P(!1);
          }
        })());
    }, [n, l]),
    S)
  )
    return m.jsx("div", { children: "Loading..." });
  if (g) return m.jsxs("div", { children: ["Error: ", g] });
  const K = (V) =>
    O === V
      ? "border-b-2 border-blue-500 px-6 py-3 text-lg text-gray-700 focus:outline-none hover:text-blue-600"
      : "px-6 py-3 text-lg text-gray-700 focus:outline-none hover:text-blue-600";
  return m.jsxs("div", {
    className: "max-w-4xl mx-auto p-6",
    children: [
      m.jsxs("div", {
        className: "flex border-b-2 border-gray-300 mb-6",
        children: [
          m.jsx("button", {
            onClick: () => b("details"),
            className: K("details"),
            children: "User Details",
          }),
          m.jsx("button", {
            onClick: () => b("history"),
            className: K("history"),
            children: "Rental History",
          }),
          m.jsx("button", {
            onClick: () => b("rent"),
            className: K("rent"),
            children: "Rent Books",
          }),
        ],
      }),
      O === "details" &&
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
      O === "history" &&
        m.jsxs("div", {
          className: "bg-white p-6 rounded-lg shadow-lg mb-6",
          children: [
            m.jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Rental History",
            }),
            d.length > 0
              ? m.jsx("ul", {
                  className: "space-y-4",
                  children: d.map((V) =>
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
      O === "rent" &&
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
                            onClick: () => W(V.id),
                            disabled: E,
                            children: E ? "Renting..." : "Rent",
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
function He(n, o, { checkForDefaultPrevented: l = !0 } = {}) {
  return function (u) {
    if ((n == null || n(u), l === !1 || !u.defaultPrevented))
      return o == null ? void 0 : o(u);
  };
}
function yx(n, o) {
  const l = v.createContext(o),
    s = (d) => {
      const { children: f, ...p } = d,
        y = v.useMemo(() => p, Object.values(p));
      return m.jsx(l.Provider, { value: y, children: f });
    };
  s.displayName = n + "Provider";
  function u(d) {
    const f = v.useContext(l);
    if (f) return f;
    if (o !== void 0) return o;
    throw new Error(`\`${d}\` must be used within \`${n}\``);
  }
  return [s, u];
}
function ci(n, o = []) {
  let l = [];
  function s(d, f) {
    const p = v.createContext(f),
      y = l.length;
    l = [...l, f];
    const g = (S) => {
      var A;
      const { scope: P, children: O, ...b } = S,
        E = ((A = P == null ? void 0 : P[n]) == null ? void 0 : A[y]) || p,
        C = v.useMemo(() => b, Object.values(b));
      return m.jsx(E.Provider, { value: C, children: O });
    };
    g.displayName = d + "Provider";
    function w(S, P) {
      var E;
      const O = ((E = P == null ? void 0 : P[n]) == null ? void 0 : E[y]) || p,
        b = v.useContext(O);
      if (b) return b;
      if (f !== void 0) return f;
      throw new Error(`\`${S}\` must be used within \`${d}\``);
    }
    return [g, w];
  }
  const u = () => {
    const d = l.map((f) => v.createContext(f));
    return function (p) {
      const y = (p == null ? void 0 : p[n]) || d;
      return v.useMemo(() => ({ [`__scope${n}`]: { ...p, [n]: y } }), [p, y]);
    };
  };
  return (u.scopeName = n), [s, xx(u, ...o)];
}
function xx(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const l = () => {
    const s = n.map((u) => ({ useScope: u(), scopeName: u.scopeName }));
    return function (d) {
      const f = s.reduce((p, { useScope: y, scopeName: g }) => {
        const S = y(d)[`__scope${g}`];
        return { ...p, ...S };
      }, {});
      return v.useMemo(() => ({ [`__scope${o.scopeName}`]: f }), [f]);
    };
  };
  return (l.scopeName = o.scopeName), l;
}
function If(n, o) {
  if (typeof n == "function") return n(o);
  n != null && (n.current = o);
}
function Bp(...n) {
  return (o) => {
    let l = !1;
    const s = n.map((u) => {
      const d = If(u, o);
      return !l && typeof d == "function" && (l = !0), d;
    });
    if (l)
      return () => {
        for (let u = 0; u < s.length; u++) {
          const d = s[u];
          typeof d == "function" ? d() : If(n[u], null);
        }
      };
  };
}
function Mt(...n) {
  return v.useCallback(Bp(...n), n);
}
var So = v.forwardRef((n, o) => {
  const { children: l, ...s } = n,
    u = v.Children.toArray(l),
    d = u.find(Sx);
  if (d) {
    const f = d.props.children,
      p = u.map((y) =>
        y === d
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
  return m.jsx(Fa, { ...s, ref: o, children: l });
});
So.displayName = "Slot";
var Fa = v.forwardRef((n, o) => {
  const { children: l, ...s } = n;
  if (v.isValidElement(l)) {
    const u = Cx(l);
    return v.cloneElement(l, { ...Ex(s, l.props), ref: o ? Bp(o, u) : u });
  }
  return v.Children.count(l) > 1 ? v.Children.only(null) : null;
});
Fa.displayName = "SlotClone";
var wx = ({ children: n }) => m.jsx(m.Fragment, { children: n });
function Sx(n) {
  return v.isValidElement(n) && n.type === wx;
}
function Ex(n, o) {
  const l = { ...o };
  for (const s in o) {
    const u = n[s],
      d = o[s];
    /^on[A-Z]/.test(s)
      ? u && d
        ? (l[s] = (...p) => {
            d(...p), u(...p);
          })
        : u && (l[s] = u)
      : s === "style"
      ? (l[s] = { ...u, ...d })
      : s === "className" && (l[s] = [u, d].filter(Boolean).join(" "));
  }
  return { ...n, ...l };
}
function Cx(n) {
  var s, u;
  let o =
      (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
        ? void 0
        : s.get,
    l = o && "isReactWarning" in o && o.isReactWarning;
  return l
    ? n.ref
    : ((o =
        (u = Object.getOwnPropertyDescriptor(n, "ref")) == null
          ? void 0
          : u.get),
      (l = o && "isReactWarning" in o && o.isReactWarning),
      l ? n.props.ref : n.props.ref || n.ref);
}
function kx(n) {
  const o = n + "CollectionProvider",
    [l, s] = ci(o),
    [u, d] = l(o, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (O) => {
      const { scope: b, children: E } = O,
        C = vn.useRef(null),
        A = vn.useRef(new Map()).current;
      return m.jsx(u, { scope: b, itemMap: A, collectionRef: C, children: E });
    };
  f.displayName = o;
  const p = n + "CollectionSlot",
    y = vn.forwardRef((O, b) => {
      const { scope: E, children: C } = O,
        A = d(p, E),
        I = Mt(b, A.collectionRef);
      return m.jsx(So, { ref: I, children: C });
    });
  y.displayName = p;
  const g = n + "CollectionItemSlot",
    w = "data-radix-collection-item",
    S = vn.forwardRef((O, b) => {
      const { scope: E, children: C, ...A } = O,
        I = vn.useRef(null),
        B = Mt(b, I),
        W = d(g, E);
      return (
        vn.useEffect(
          () => (
            W.itemMap.set(I, { ref: I, ...A }), () => void W.itemMap.delete(I)
          )
        ),
        m.jsx(So, { [w]: "", ref: B, children: C })
      );
    });
  S.displayName = g;
  function P(O) {
    const b = d(n + "CollectionConsumer", O);
    return vn.useCallback(() => {
      const C = b.collectionRef.current;
      if (!C) return [];
      const A = Array.from(C.querySelectorAll(`[${w}]`));
      return Array.from(b.itemMap.values()).sort(
        (W, K) => A.indexOf(W.ref.current) - A.indexOf(K.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: f, Slot: y, ItemSlot: S }, P, s];
}
var ei =
    globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  Nx = Xf.useId || (() => {}),
  Rx = 0;
function vo(n) {
  const [o, l] = v.useState(Nx());
  return (
    ei(() => {
      n || l((s) => s ?? String(Rx++));
    }, [n]),
    n || (o ? `radix-${o}` : "")
  );
}
var Px = [
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
  nt = Px.reduce((n, o) => {
    const l = v.forwardRef((s, u) => {
      const { asChild: d, ...f } = s,
        p = d ? So : o;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        m.jsx(p, { ...f, ref: u })
      );
    });
    return (l.displayName = `Primitive.${o}`), { ...n, [o]: l };
  }, {});
function jx(n, o) {
  n && Yf.flushSync(() => n.dispatchEvent(o));
}
function Sn(n) {
  const o = v.useRef(n);
  return (
    v.useEffect(() => {
      o.current = n;
    }),
    v.useMemo(
      () =>
        (...l) => {
          var s;
          return (s = o.current) == null ? void 0 : s.call(o, ...l);
        },
      []
    )
  );
}
function Ya({ prop: n, defaultProp: o, onChange: l = () => {} }) {
  const [s, u] = bx({ defaultProp: o, onChange: l }),
    d = n !== void 0,
    f = d ? n : s,
    p = Sn(l),
    y = v.useCallback(
      (g) => {
        if (d) {
          const S = typeof g == "function" ? g(n) : g;
          S !== n && p(S);
        } else u(g);
      },
      [d, n, u, p]
    );
  return [f, y];
}
function bx({ defaultProp: n, onChange: o }) {
  const l = v.useState(n),
    [s] = l,
    u = v.useRef(s),
    d = Sn(o);
  return (
    v.useEffect(() => {
      u.current !== s && (d(s), (u.current = s));
    }, [s, u, d]),
    l
  );
}
var _x = v.createContext(void 0);
function $p(n) {
  const o = v.useContext(_x);
  return n || o || "ltr";
}
var va = "rovingFocusGroup.onEntryFocus",
  Tx = { bubbles: !1, cancelable: !0 },
  di = "RovingFocusGroup",
  [Ma, Wp, Ox] = kx(di),
  [Ax, Vp] = ci(di, [Ox]),
  [Lx, Dx] = Ax(di),
  Hp = v.forwardRef((n, o) =>
    m.jsx(Ma.Provider, {
      scope: n.__scopeRovingFocusGroup,
      children: m.jsx(Ma.Slot, {
        scope: n.__scopeRovingFocusGroup,
        children: m.jsx(Ix, { ...n, ref: o }),
      }),
    })
  );
Hp.displayName = di;
var Ix = v.forwardRef((n, o) => {
    const {
        __scopeRovingFocusGroup: l,
        orientation: s,
        loop: u = !1,
        dir: d,
        currentTabStopId: f,
        defaultCurrentTabStopId: p,
        onCurrentTabStopIdChange: y,
        onEntryFocus: g,
        preventScrollOnEntryFocus: w = !1,
        ...S
      } = n,
      P = v.useRef(null),
      O = Mt(o, P),
      b = $p(d),
      [E = null, C] = Ya({ prop: f, defaultProp: p, onChange: y }),
      [A, I] = v.useState(!1),
      B = Sn(g),
      W = Wp(l),
      K = v.useRef(!1),
      [V, Z] = v.useState(0);
    return (
      v.useEffect(() => {
        const re = P.current;
        if (re)
          return (
            re.addEventListener(va, B), () => re.removeEventListener(va, B)
          );
      }, [B]),
      m.jsx(Lx, {
        scope: l,
        orientation: s,
        dir: b,
        loop: u,
        currentTabStopId: E,
        onItemFocus: v.useCallback((re) => C(re), [C]),
        onItemShiftTab: v.useCallback(() => I(!0), []),
        onFocusableItemAdd: v.useCallback(() => Z((re) => re + 1), []),
        onFocusableItemRemove: v.useCallback(() => Z((re) => re - 1), []),
        children: m.jsx(nt.div, {
          tabIndex: A || V === 0 ? -1 : 0,
          "data-orientation": s,
          ...S,
          ref: O,
          style: { outline: "none", ...n.style },
          onMouseDown: He(n.onMouseDown, () => {
            K.current = !0;
          }),
          onFocus: He(n.onFocus, (re) => {
            const Se = !K.current;
            if (re.target === re.currentTarget && Se && !A) {
              const _e = new CustomEvent(va, Tx);
              if ((re.currentTarget.dispatchEvent(_e), !_e.defaultPrevented)) {
                const $e = W().filter((ye) => ye.focusable),
                  se = $e.find((ye) => ye.active),
                  D = $e.find((ye) => ye.id === E),
                  Ye = [se, D, ...$e]
                    .filter(Boolean)
                    .map((ye) => ye.ref.current);
                Qp(Ye, w);
              }
            }
            K.current = !1;
          }),
          onBlur: He(n.onBlur, () => I(!1)),
        }),
      })
    );
  }),
  Kp = "RovingFocusGroupItem",
  Gp = v.forwardRef((n, o) => {
    const {
        __scopeRovingFocusGroup: l,
        focusable: s = !0,
        active: u = !1,
        tabStopId: d,
        ...f
      } = n,
      p = vo(),
      y = d || p,
      g = Dx(Kp, l),
      w = g.currentTabStopId === y,
      S = Wp(l),
      { onFocusableItemAdd: P, onFocusableItemRemove: O } = g;
    return (
      v.useEffect(() => {
        if (s) return P(), () => O();
      }, [s, P, O]),
      m.jsx(Ma.ItemSlot, {
        scope: l,
        id: y,
        focusable: s,
        active: u,
        children: m.jsx(nt.span, {
          tabIndex: w ? 0 : -1,
          "data-orientation": g.orientation,
          ...f,
          ref: o,
          onMouseDown: He(n.onMouseDown, (b) => {
            s ? g.onItemFocus(y) : b.preventDefault();
          }),
          onFocus: He(n.onFocus, () => g.onItemFocus(y)),
          onKeyDown: He(n.onKeyDown, (b) => {
            if (b.key === "Tab" && b.shiftKey) {
              g.onItemShiftTab();
              return;
            }
            if (b.target !== b.currentTarget) return;
            const E = zx(b, g.orientation, g.dir);
            if (E !== void 0) {
              if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
              b.preventDefault();
              let A = S()
                .filter((I) => I.focusable)
                .map((I) => I.ref.current);
              if (E === "last") A.reverse();
              else if (E === "prev" || E === "next") {
                E === "prev" && A.reverse();
                const I = A.indexOf(b.currentTarget);
                A = g.loop ? Ux(A, I + 1) : A.slice(I + 1);
              }
              setTimeout(() => Qp(A));
            }
          }),
        }),
      })
    );
  });
Gp.displayName = Kp;
var Fx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function Mx(n, o) {
  return o !== "rtl"
    ? n
    : n === "ArrowLeft"
    ? "ArrowRight"
    : n === "ArrowRight"
    ? "ArrowLeft"
    : n;
}
function zx(n, o, l) {
  const s = Mx(n.key, l);
  if (
    !(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) &&
    !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s))
  )
    return Fx[s];
}
function Qp(n, o = !1) {
  const l = document.activeElement;
  for (const s of n)
    if (
      s === l ||
      (s.focus({ preventScroll: o }), document.activeElement !== l)
    )
      return;
}
function Ux(n, o) {
  return n.map((l, s) => n[(o + s) % n.length]);
}
var Bx = Hp,
  $x = Gp;
function Wx(n, o) {
  return v.useReducer((l, s) => o[l][s] ?? l, n);
}
var No = (n) => {
  const { present: o, children: l } = n,
    s = Vx(o),
    u =
      typeof l == "function" ? l({ present: s.isPresent }) : v.Children.only(l),
    d = Mt(s.ref, Hx(u));
  return typeof l == "function" || s.isPresent
    ? v.cloneElement(u, { ref: d })
    : null;
};
No.displayName = "Presence";
function Vx(n) {
  const [o, l] = v.useState(),
    s = v.useRef({}),
    u = v.useRef(n),
    d = v.useRef("none"),
    f = n ? "mounted" : "unmounted",
    [p, y] = Wx(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const g = Fl(s.current);
      d.current = p === "mounted" ? g : "none";
    }, [p]),
    ei(() => {
      const g = s.current,
        w = u.current;
      if (w !== n) {
        const P = d.current,
          O = Fl(g);
        n
          ? y("MOUNT")
          : O === "none" || (g == null ? void 0 : g.display) === "none"
          ? y("UNMOUNT")
          : y(w && P !== O ? "ANIMATION_OUT" : "UNMOUNT"),
          (u.current = n);
      }
    }, [n, y]),
    ei(() => {
      if (o) {
        let g;
        const w = o.ownerDocument.defaultView ?? window,
          S = (O) => {
            const E = Fl(s.current).includes(O.animationName);
            if (O.target === o && E && (y("ANIMATION_END"), !u.current)) {
              const C = o.style.animationFillMode;
              (o.style.animationFillMode = "forwards"),
                (g = w.setTimeout(() => {
                  o.style.animationFillMode === "forwards" &&
                    (o.style.animationFillMode = C);
                }));
            }
          },
          P = (O) => {
            O.target === o && (d.current = Fl(s.current));
          };
        return (
          o.addEventListener("animationstart", P),
          o.addEventListener("animationcancel", S),
          o.addEventListener("animationend", S),
          () => {
            w.clearTimeout(g),
              o.removeEventListener("animationstart", P),
              o.removeEventListener("animationcancel", S),
              o.removeEventListener("animationend", S);
          }
        );
      } else y("ANIMATION_END");
    }, [o, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(p),
      ref: v.useCallback((g) => {
        g && (s.current = getComputedStyle(g)), l(g);
      }, []),
    }
  );
}
function Fl(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function Hx(n) {
  var s, u;
  let o =
      (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
        ? void 0
        : s.get,
    l = o && "isReactWarning" in o && o.isReactWarning;
  return l
    ? n.ref
    : ((o =
        (u = Object.getOwnPropertyDescriptor(n, "ref")) == null
          ? void 0
          : u.get),
      (l = o && "isReactWarning" in o && o.isReactWarning),
      l ? n.props.ref : n.props.ref || n.ref);
}
var Za = "Tabs",
  [Kx, E1] = ci(Za, [Vp]),
  qp = Vp(),
  [Gx, eu] = Kx(Za),
  Xp = v.forwardRef((n, o) => {
    const {
        __scopeTabs: l,
        value: s,
        onValueChange: u,
        defaultValue: d,
        orientation: f = "horizontal",
        dir: p,
        activationMode: y = "automatic",
        ...g
      } = n,
      w = $p(p),
      [S, P] = Ya({ prop: s, onChange: u, defaultProp: d });
    return m.jsx(Gx, {
      scope: l,
      baseId: vo(),
      value: S,
      onValueChange: P,
      orientation: f,
      dir: w,
      activationMode: y,
      children: m.jsx(nt.div, { dir: w, "data-orientation": f, ...g, ref: o }),
    });
  });
Xp.displayName = Za;
var Jp = "TabsList",
  Yp = v.forwardRef((n, o) => {
    const { __scopeTabs: l, loop: s = !0, ...u } = n,
      d = eu(Jp, l),
      f = qp(l);
    return m.jsx(Bx, {
      asChild: !0,
      ...f,
      orientation: d.orientation,
      dir: d.dir,
      loop: s,
      children: m.jsx(nt.div, {
        role: "tablist",
        "aria-orientation": d.orientation,
        ...u,
        ref: o,
      }),
    });
  });
Yp.displayName = Jp;
var Zp = "TabsTrigger",
  eh = v.forwardRef((n, o) => {
    const { __scopeTabs: l, value: s, disabled: u = !1, ...d } = n,
      f = eu(Zp, l),
      p = qp(l),
      y = rh(f.baseId, s),
      g = oh(f.baseId, s),
      w = s === f.value;
    return m.jsx($x, {
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
        ...d,
        ref: o,
        onMouseDown: He(n.onMouseDown, (S) => {
          !u && S.button === 0 && S.ctrlKey === !1
            ? f.onValueChange(s)
            : S.preventDefault();
        }),
        onKeyDown: He(n.onKeyDown, (S) => {
          [" ", "Enter"].includes(S.key) && f.onValueChange(s);
        }),
        onFocus: He(n.onFocus, () => {
          const S = f.activationMode !== "manual";
          !w && !u && S && f.onValueChange(s);
        }),
      }),
    });
  });
eh.displayName = Zp;
var th = "TabsContent",
  nh = v.forwardRef((n, o) => {
    const { __scopeTabs: l, value: s, forceMount: u, children: d, ...f } = n,
      p = eu(th, l),
      y = rh(p.baseId, s),
      g = oh(p.baseId, s),
      w = s === p.value,
      S = v.useRef(w);
    return (
      v.useEffect(() => {
        const P = requestAnimationFrame(() => (S.current = !1));
        return () => cancelAnimationFrame(P);
      }, []),
      m.jsx(No, {
        present: u || w,
        children: ({ present: P }) =>
          m.jsx(nt.div, {
            "data-state": w ? "active" : "inactive",
            "data-orientation": p.orientation,
            role: "tabpanel",
            "aria-labelledby": y,
            hidden: !P,
            id: g,
            tabIndex: 0,
            ...f,
            ref: o,
            style: { ...n.style, animationDuration: S.current ? "0s" : void 0 },
            children: P && d,
          }),
      })
    );
  });
nh.displayName = th;
function rh(n, o) {
  return `${n}-trigger-${o}`;
}
function oh(n, o) {
  return `${n}-content-${o}`;
}
var Qx = Xp,
  lh = Yp,
  ih = eh,
  sh = nh;
const qx = Qx,
  ah = v.forwardRef(({ className: n, ...o }, l) =>
    m.jsx(lh, {
      ref: l,
      className: Je(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        n
      ),
      ...o,
    })
  );
ah.displayName = lh.displayName;
const ho = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx(ih, {
    ref: l,
    className: Je(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      n
    ),
    ...o,
  })
);
ho.displayName = ih.displayName;
const mo = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx(sh, {
    ref: l,
    className: Je(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      n
    ),
    ...o,
  })
);
mo.displayName = sh.displayName;
const go = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx("div", {
    ref: l,
    className: Je("rounded-xl border bg-card text-card-foreground shadow", n),
    ...o,
  })
);
go.displayName = "Card";
const Xx = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx("div", {
    ref: l,
    className: Je("flex flex-col space-y-1.5 p-6", n),
    ...o,
  })
);
Xx.displayName = "CardHeader";
const Jx = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx("div", {
    ref: l,
    className: Je("font-semibold leading-none tracking-tight", n),
    ...o,
  })
);
Jx.displayName = "CardTitle";
const Yx = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx("div", {
    ref: l,
    className: Je("text-sm text-muted-foreground", n),
    ...o,
  })
);
Yx.displayName = "CardDescription";
const Zx = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx("div", { ref: l, className: Je("p-6 pt-0", n), ...o })
);
Zx.displayName = "CardContent";
const ew = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx("div", { ref: l, className: Je("flex items-center p-6 pt-0", n), ...o })
);
ew.displayName = "CardFooter";
const tt = v.forwardRef(({ className: n, type: o, ...l }, s) =>
  m.jsx("input", {
    type: o,
    className: Je(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      n
    ),
    ref: s,
    ...l,
  })
);
tt.displayName = "Input";
function tw(n, o = globalThis == null ? void 0 : globalThis.document) {
  const l = Sn(n);
  v.useEffect(() => {
    const s = (u) => {
      u.key === "Escape" && l(u);
    };
    return (
      o.addEventListener("keydown", s, { capture: !0 }),
      () => o.removeEventListener("keydown", s, { capture: !0 })
    );
  }, [l, o]);
}
var nw = "DismissableLayer",
  za = "dismissableLayer.update",
  rw = "dismissableLayer.pointerDownOutside",
  ow = "dismissableLayer.focusOutside",
  Ff,
  uh = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ch = v.forwardRef((n, o) => {
    const {
        disableOutsidePointerEvents: l = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: u,
        onFocusOutside: d,
        onInteractOutside: f,
        onDismiss: p,
        ...y
      } = n,
      g = v.useContext(uh),
      [w, S] = v.useState(null),
      P =
        (w == null ? void 0 : w.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, O] = v.useState({}),
      b = Mt(o, (Z) => S(Z)),
      E = Array.from(g.layers),
      [C] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
      A = E.indexOf(C),
      I = w ? E.indexOf(w) : -1,
      B = g.layersWithOutsidePointerEventsDisabled.size > 0,
      W = I >= A,
      K = sw((Z) => {
        const re = Z.target,
          Se = [...g.branches].some((_e) => _e.contains(re));
        !W ||
          Se ||
          (u == null || u(Z),
          f == null || f(Z),
          Z.defaultPrevented || p == null || p());
      }, P),
      V = aw((Z) => {
        const re = Z.target;
        [...g.branches].some((_e) => _e.contains(re)) ||
          (d == null || d(Z),
          f == null || f(Z),
          Z.defaultPrevented || p == null || p());
      }, P);
    return (
      tw((Z) => {
        I === g.layers.size - 1 &&
          (s == null || s(Z),
          !Z.defaultPrevented && p && (Z.preventDefault(), p()));
      }, P),
      v.useEffect(() => {
        if (w)
          return (
            l &&
              (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ff = P.body.style.pointerEvents),
                (P.body.style.pointerEvents = "none")),
              g.layersWithOutsidePointerEventsDisabled.add(w)),
            g.layers.add(w),
            Mf(),
            () => {
              l &&
                g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (P.body.style.pointerEvents = Ff);
            }
          );
      }, [w, P, l, g]),
      v.useEffect(
        () => () => {
          w &&
            (g.layers.delete(w),
            g.layersWithOutsidePointerEventsDisabled.delete(w),
            Mf());
        },
        [w, g]
      ),
      v.useEffect(() => {
        const Z = () => O({});
        return (
          document.addEventListener(za, Z),
          () => document.removeEventListener(za, Z)
        );
      }, []),
      m.jsx(nt.div, {
        ...y,
        ref: b,
        style: {
          pointerEvents: B ? (W ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: He(n.onFocusCapture, V.onFocusCapture),
        onBlurCapture: He(n.onBlurCapture, V.onBlurCapture),
        onPointerDownCapture: He(
          n.onPointerDownCapture,
          K.onPointerDownCapture
        ),
      })
    );
  });
ch.displayName = nw;
var lw = "DismissableLayerBranch",
  iw = v.forwardRef((n, o) => {
    const l = v.useContext(uh),
      s = v.useRef(null),
      u = Mt(o, s);
    return (
      v.useEffect(() => {
        const d = s.current;
        if (d)
          return (
            l.branches.add(d),
            () => {
              l.branches.delete(d);
            }
          );
      }, [l.branches]),
      m.jsx(nt.div, { ...n, ref: u })
    );
  });
iw.displayName = lw;
function sw(n, o = globalThis == null ? void 0 : globalThis.document) {
  const l = Sn(n),
    s = v.useRef(!1),
    u = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const d = (p) => {
          if (p.target && !s.current) {
            let y = function () {
              dh(rw, l, g, { discrete: !0 });
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
          o.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(f),
          o.removeEventListener("pointerdown", d),
          o.removeEventListener("click", u.current);
      };
    }, [o, l]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function aw(n, o = globalThis == null ? void 0 : globalThis.document) {
  const l = Sn(n),
    s = v.useRef(!1);
  return (
    v.useEffect(() => {
      const u = (d) => {
        d.target &&
          !s.current &&
          dh(ow, l, { originalEvent: d }, { discrete: !1 });
      };
      return (
        o.addEventListener("focusin", u),
        () => o.removeEventListener("focusin", u)
      );
    }, [o, l]),
    {
      onFocusCapture: () => (s.current = !0),
      onBlurCapture: () => (s.current = !1),
    }
  );
}
function Mf() {
  const n = new CustomEvent(za);
  document.dispatchEvent(n);
}
function dh(n, o, l, { discrete: s }) {
  const u = l.originalEvent.target,
    d = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: l });
  o && u.addEventListener(n, o, { once: !0 }),
    s ? jx(u, d) : u.dispatchEvent(d);
}
var ya = "focusScope.autoFocusOnMount",
  xa = "focusScope.autoFocusOnUnmount",
  zf = { bubbles: !1, cancelable: !0 },
  uw = "FocusScope",
  fh = v.forwardRef((n, o) => {
    const {
        loop: l = !1,
        trapped: s = !1,
        onMountAutoFocus: u,
        onUnmountAutoFocus: d,
        ...f
      } = n,
      [p, y] = v.useState(null),
      g = Sn(u),
      w = Sn(d),
      S = v.useRef(null),
      P = Mt(o, (E) => y(E)),
      O = v.useRef({
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
        let E = function (B) {
            if (O.paused || !p) return;
            const W = B.target;
            p.contains(W) ? (S.current = W) : yn(S.current, { select: !0 });
          },
          C = function (B) {
            if (O.paused || !p) return;
            const W = B.relatedTarget;
            W !== null && (p.contains(W) || yn(S.current, { select: !0 }));
          },
          A = function (B) {
            if (document.activeElement === document.body)
              for (const K of B) K.removedNodes.length > 0 && yn(p);
          };
        document.addEventListener("focusin", E),
          document.addEventListener("focusout", C);
        const I = new MutationObserver(A);
        return (
          p && I.observe(p, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", E),
              document.removeEventListener("focusout", C),
              I.disconnect();
          }
        );
      }
    }, [s, p, O.paused]),
      v.useEffect(() => {
        if (p) {
          Bf.add(O);
          const E = document.activeElement;
          if (!p.contains(E)) {
            const A = new CustomEvent(ya, zf);
            p.addEventListener(ya, g),
              p.dispatchEvent(A),
              A.defaultPrevented ||
                (cw(mw(ph(p)), { select: !0 }),
                document.activeElement === E && yn(p));
          }
          return () => {
            p.removeEventListener(ya, g),
              setTimeout(() => {
                const A = new CustomEvent(xa, zf);
                p.addEventListener(xa, w),
                  p.dispatchEvent(A),
                  A.defaultPrevented || yn(E ?? document.body, { select: !0 }),
                  p.removeEventListener(xa, w),
                  Bf.remove(O);
              }, 0);
          };
        }
      }, [p, g, w, O]);
    const b = v.useCallback(
      (E) => {
        if ((!l && !s) || O.paused) return;
        const C = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey,
          A = document.activeElement;
        if (C && A) {
          const I = E.currentTarget,
            [B, W] = dw(I);
          B && W
            ? !E.shiftKey && A === W
              ? (E.preventDefault(), l && yn(B, { select: !0 }))
              : E.shiftKey &&
                A === B &&
                (E.preventDefault(), l && yn(W, { select: !0 }))
            : A === I && E.preventDefault();
        }
      },
      [l, s, O.paused]
    );
    return m.jsx(nt.div, { tabIndex: -1, ...f, ref: P, onKeyDown: b });
  });
fh.displayName = uw;
function cw(n, { select: o = !1 } = {}) {
  const l = document.activeElement;
  for (const s of n)
    if ((yn(s, { select: o }), document.activeElement !== l)) return;
}
function dw(n) {
  const o = ph(n),
    l = Uf(o, n),
    s = Uf(o.reverse(), n);
  return [l, s];
}
function ph(n) {
  const o = [],
    l = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (s) => {
        const u = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || u
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; l.nextNode(); ) o.push(l.currentNode);
  return o;
}
function Uf(n, o) {
  for (const l of n) if (!fw(l, { upTo: o })) return l;
}
function fw(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (o !== void 0 && n === o) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function pw(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function yn(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const l = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== l && pw(n) && o && n.select();
  }
}
var Bf = hw();
function hw() {
  let n = [];
  return {
    add(o) {
      const l = n[0];
      o !== l && (l == null || l.pause()), (n = $f(n, o)), n.unshift(o);
    },
    remove(o) {
      var l;
      (n = $f(n, o)), (l = n[0]) == null || l.resume();
    },
  };
}
function $f(n, o) {
  const l = [...n],
    s = l.indexOf(o);
  return s !== -1 && l.splice(s, 1), l;
}
function mw(n) {
  return n.filter((o) => o.tagName !== "A");
}
var gw = "Portal",
  hh = v.forwardRef((n, o) => {
    var p;
    const { container: l, ...s } = n,
      [u, d] = v.useState(!1);
    ei(() => d(!0), []);
    const f =
      l ||
      (u &&
        ((p = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : p.body));
    return f ? qg.createPortal(m.jsx(nt.div, { ...s, ref: o }), f) : null;
  });
hh.displayName = gw;
var wa = 0;
function vw() {
  v.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", n[0] ?? Wf()),
      document.body.insertAdjacentElement("beforeend", n[1] ?? Wf()),
      wa++,
      () => {
        wa === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((o) => o.remove()),
          wa--;
      }
    );
  }, []);
}
function Wf() {
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
var Ft = function () {
  return (
    (Ft =
      Object.assign ||
      function (o) {
        for (var l, s = 1, u = arguments.length; s < u; s++) {
          l = arguments[s];
          for (var d in l)
            Object.prototype.hasOwnProperty.call(l, d) && (o[d] = l[d]);
        }
        return o;
      }),
    Ft.apply(this, arguments)
  );
};
function mh(n, o) {
  var l = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) &&
      o.indexOf(s) < 0 &&
      (l[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, s = Object.getOwnPropertySymbols(n); u < s.length; u++)
      o.indexOf(s[u]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, s[u]) &&
        (l[s[u]] = n[s[u]]);
  return l;
}
function yw(n, o, l) {
  if (l || arguments.length === 2)
    for (var s = 0, u = o.length, d; s < u; s++)
      (d || !(s in o)) &&
        (d || (d = Array.prototype.slice.call(o, 0, s)), (d[s] = o[s]));
  return n.concat(d || Array.prototype.slice.call(o));
}
var Hl = "right-scroll-bar-position",
  Kl = "width-before-scroll-bar",
  xw = "with-scroll-bars-hidden",
  ww = "--removed-body-scroll-bar-size";
function Sa(n, o) {
  return typeof n == "function" ? n(o) : n && (n.current = o), n;
}
function Sw(n, o) {
  var l = v.useState(function () {
    return {
      value: n,
      callback: o,
      facade: {
        get current() {
          return l.value;
        },
        set current(s) {
          var u = l.value;
          u !== s && ((l.value = s), l.callback(s, u));
        },
      },
    };
  })[0];
  return (l.callback = o), l.facade;
}
var Ew = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  Vf = new WeakMap();
function Cw(n, o) {
  var l = Sw(null, function (s) {
    return n.forEach(function (u) {
      return Sa(u, s);
    });
  });
  return (
    Ew(
      function () {
        var s = Vf.get(l);
        if (s) {
          var u = new Set(s),
            d = new Set(n),
            f = l.current;
          u.forEach(function (p) {
            d.has(p) || Sa(p, null);
          }),
            d.forEach(function (p) {
              u.has(p) || Sa(p, f);
            });
        }
        Vf.set(l, n);
      },
      [n]
    ),
    l
  );
}
function kw(n) {
  return n;
}
function Nw(n, o) {
  o === void 0 && (o = kw);
  var l = [],
    s = !1,
    u = {
      read: function () {
        if (s)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return l.length ? l[l.length - 1] : n;
      },
      useMedium: function (d) {
        var f = o(d, s);
        return (
          l.push(f),
          function () {
            l = l.filter(function (p) {
              return p !== f;
            });
          }
        );
      },
      assignSyncMedium: function (d) {
        for (s = !0; l.length; ) {
          var f = l;
          (l = []), f.forEach(d);
        }
        l = {
          push: function (p) {
            return d(p);
          },
          filter: function () {
            return l;
          },
        };
      },
      assignMedium: function (d) {
        s = !0;
        var f = [];
        if (l.length) {
          var p = l;
          (l = []), p.forEach(d), (f = l);
        }
        var y = function () {
            var w = f;
            (f = []), w.forEach(d);
          },
          g = function () {
            return Promise.resolve().then(y);
          };
        g(),
          (l = {
            push: function (w) {
              f.push(w), g();
            },
            filter: function (w) {
              return (f = f.filter(w)), l;
            },
          });
      },
    };
  return u;
}
function Rw(n) {
  n === void 0 && (n = {});
  var o = Nw(null);
  return (o.options = Ft({ async: !0, ssr: !1 }, n)), o;
}
var gh = function (n) {
  var o = n.sideCar,
    l = mh(n, ["sideCar"]);
  if (!o)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var s = o.read();
  if (!s) throw new Error("Sidecar medium not found");
  return v.createElement(s, Ft({}, l));
};
gh.isSideCarExport = !0;
function Pw(n, o) {
  return n.useMedium(o), gh;
}
var vh = Rw(),
  Ea = function () {},
  fi = v.forwardRef(function (n, o) {
    var l = v.useRef(null),
      s = v.useState({
        onScrollCapture: Ea,
        onWheelCapture: Ea,
        onTouchMoveCapture: Ea,
      }),
      u = s[0],
      d = s[1],
      f = n.forwardProps,
      p = n.children,
      y = n.className,
      g = n.removeScrollBar,
      w = n.enabled,
      S = n.shards,
      P = n.sideCar,
      O = n.noIsolation,
      b = n.inert,
      E = n.allowPinchZoom,
      C = n.as,
      A = C === void 0 ? "div" : C,
      I = n.gapMode,
      B = mh(n, [
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
      W = P,
      K = Cw([l, o]),
      V = Ft(Ft({}, B), u);
    return v.createElement(
      v.Fragment,
      null,
      w &&
        v.createElement(W, {
          sideCar: vh,
          removeScrollBar: g,
          shards: S,
          noIsolation: O,
          inert: b,
          setCallbacks: d,
          allowPinchZoom: !!E,
          lockRef: l,
          gapMode: I,
        }),
      f
        ? v.cloneElement(v.Children.only(p), Ft(Ft({}, V), { ref: K }))
        : v.createElement(A, Ft({}, V, { className: y, ref: K }), p)
    );
  });
fi.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
fi.classNames = { fullWidth: Kl, zeroRight: Hl };
var jw = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function bw() {
  if (!document) return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var o = jw();
  return o && n.setAttribute("nonce", o), n;
}
function _w(n, o) {
  n.styleSheet
    ? (n.styleSheet.cssText = o)
    : n.appendChild(document.createTextNode(o));
}
function Tw(n) {
  var o = document.head || document.getElementsByTagName("head")[0];
  o.appendChild(n);
}
var Ow = function () {
    var n = 0,
      o = null;
    return {
      add: function (l) {
        n == 0 && (o = bw()) && (_w(o, l), Tw(o)), n++;
      },
      remove: function () {
        n--,
          !n && o && (o.parentNode && o.parentNode.removeChild(o), (o = null));
      },
    };
  },
  Aw = function () {
    var n = Ow();
    return function (o, l) {
      v.useEffect(
        function () {
          return (
            n.add(o),
            function () {
              n.remove();
            }
          );
        },
        [o && l]
      );
    };
  },
  yh = function () {
    var n = Aw(),
      o = function (l) {
        var s = l.styles,
          u = l.dynamic;
        return n(s, u), null;
      };
    return o;
  },
  Lw = { left: 0, top: 0, right: 0, gap: 0 },
  Ca = function (n) {
    return parseInt(n || "", 10) || 0;
  },
  Dw = function (n) {
    var o = window.getComputedStyle(document.body),
      l = o[n === "padding" ? "paddingLeft" : "marginLeft"],
      s = o[n === "padding" ? "paddingTop" : "marginTop"],
      u = o[n === "padding" ? "paddingRight" : "marginRight"];
    return [Ca(l), Ca(s), Ca(u)];
  },
  Iw = function (n) {
    if ((n === void 0 && (n = "margin"), typeof window > "u")) return Lw;
    var o = Dw(n),
      l = document.documentElement.clientWidth,
      s = window.innerWidth;
    return {
      left: o[0],
      top: o[1],
      right: o[2],
      gap: Math.max(0, s - l + o[2] - o[0]),
    };
  },
  Fw = yh(),
  vr = "data-scroll-locked",
  Mw = function (n, o, l, s) {
    var u = n.left,
      d = n.top,
      f = n.right,
      p = n.gap;
    return (
      l === void 0 && (l = "margin"),
      `
  .`
        .concat(
          xw,
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
          vr,
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
            l === "margin" &&
              `
    padding-left: `
                .concat(
                  u,
                  `px;
    padding-top: `
                )
                .concat(
                  d,
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
            l === "padding" &&
              "padding-right: ".concat(p, "px ").concat(s, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Hl,
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
          Kl,
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
        .concat(Hl, " .")
        .concat(
          Hl,
          ` {
    right: 0 `
        )
        .concat(
          s,
          `;
  }
  
  .`
        )
        .concat(Kl, " .")
        .concat(
          Kl,
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
          vr,
          `] {
    `
        )
        .concat(ww, ": ")
        .concat(
          p,
          `px;
  }
`
        )
    );
  },
  Hf = function () {
    var n = parseInt(document.body.getAttribute(vr) || "0", 10);
    return isFinite(n) ? n : 0;
  },
  zw = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(vr, (Hf() + 1).toString()),
        function () {
          var n = Hf() - 1;
          n <= 0
            ? document.body.removeAttribute(vr)
            : document.body.setAttribute(vr, n.toString());
        }
      );
    }, []);
  },
  Uw = function (n) {
    var o = n.noRelative,
      l = n.noImportant,
      s = n.gapMode,
      u = s === void 0 ? "margin" : s;
    zw();
    var d = v.useMemo(
      function () {
        return Iw(u);
      },
      [u]
    );
    return v.createElement(Fw, { styles: Mw(d, !o, u, l ? "" : "!important") });
  },
  Ua = !1;
if (typeof window < "u")
  try {
    var Ml = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ua = !0), !0;
      },
    });
    window.addEventListener("test", Ml, Ml),
      window.removeEventListener("test", Ml, Ml);
  } catch {
    Ua = !1;
  }
var pr = Ua ? { passive: !1 } : !1,
  Bw = function (n) {
    return n.tagName === "TEXTAREA";
  },
  xh = function (n, o) {
    if (!(n instanceof Element)) return !1;
    var l = window.getComputedStyle(n);
    return (
      l[o] !== "hidden" &&
      !(l.overflowY === l.overflowX && !Bw(n) && l[o] === "visible")
    );
  },
  $w = function (n) {
    return xh(n, "overflowY");
  },
  Ww = function (n) {
    return xh(n, "overflowX");
  },
  Kf = function (n, o) {
    var l = o.ownerDocument,
      s = o;
    do {
      typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
      var u = wh(n, s);
      if (u) {
        var d = Sh(n, s),
          f = d[1],
          p = d[2];
        if (f > p) return !0;
      }
      s = s.parentNode;
    } while (s && s !== l.body);
    return !1;
  },
  Vw = function (n) {
    var o = n.scrollTop,
      l = n.scrollHeight,
      s = n.clientHeight;
    return [o, l, s];
  },
  Hw = function (n) {
    var o = n.scrollLeft,
      l = n.scrollWidth,
      s = n.clientWidth;
    return [o, l, s];
  },
  wh = function (n, o) {
    return n === "v" ? $w(o) : Ww(o);
  },
  Sh = function (n, o) {
    return n === "v" ? Vw(o) : Hw(o);
  },
  Kw = function (n, o) {
    return n === "h" && o === "rtl" ? -1 : 1;
  },
  Gw = function (n, o, l, s, u) {
    var d = Kw(n, window.getComputedStyle(o).direction),
      f = d * s,
      p = l.target,
      y = o.contains(p),
      g = !1,
      w = f > 0,
      S = 0,
      P = 0;
    do {
      var O = Sh(n, p),
        b = O[0],
        E = O[1],
        C = O[2],
        A = E - C - d * b;
      (b || A) && wh(n, p) && ((S += A), (P += b)),
        p instanceof ShadowRoot ? (p = p.host) : (p = p.parentNode);
    } while ((!y && p !== document.body) || (y && (o.contains(p) || o === p)));
    return (
      ((w && (Math.abs(S) < 1 || !u)) || (!w && (Math.abs(P) < 1 || !u))) &&
        (g = !0),
      g
    );
  },
  zl = function (n) {
    return "changedTouches" in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  Gf = function (n) {
    return [n.deltaX, n.deltaY];
  },
  Qf = function (n) {
    return n && "current" in n ? n.current : n;
  },
  Qw = function (n, o) {
    return n[0] === o[0] && n[1] === o[1];
  },
  qw = function (n) {
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
  Xw = 0,
  hr = [];
function Jw(n) {
  var o = v.useRef([]),
    l = v.useRef([0, 0]),
    s = v.useRef(),
    u = v.useState(Xw++)[0],
    d = v.useState(yh)[0],
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
          var E = yw([n.lockRef.current], (n.shards || []).map(Qf), !0).filter(
            Boolean
          );
          return (
            E.forEach(function (C) {
              return C.classList.add("allow-interactivity-".concat(u));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(u)),
                E.forEach(function (C) {
                  return C.classList.remove("allow-interactivity-".concat(u));
                });
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards]
    );
  var p = v.useCallback(function (E, C) {
      if (
        ("touches" in E && E.touches.length === 2) ||
        (E.type === "wheel" && E.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var A = zl(E),
        I = l.current,
        B = "deltaX" in E ? E.deltaX : I[0] - A[0],
        W = "deltaY" in E ? E.deltaY : I[1] - A[1],
        K,
        V = E.target,
        Z = Math.abs(B) > Math.abs(W) ? "h" : "v";
      if ("touches" in E && Z === "h" && V.type === "range") return !1;
      var re = Kf(Z, V);
      if (!re) return !0;
      if ((re ? (K = Z) : ((K = Z === "v" ? "h" : "v"), (re = Kf(Z, V))), !re))
        return !1;
      if (
        (!s.current && "changedTouches" in E && (B || W) && (s.current = K), !K)
      )
        return !0;
      var Se = s.current || K;
      return Gw(Se, C, E, Se === "h" ? B : W, !0);
    }, []),
    y = v.useCallback(function (E) {
      var C = E;
      if (!(!hr.length || hr[hr.length - 1] !== d)) {
        var A = "deltaY" in C ? Gf(C) : zl(C),
          I = o.current.filter(function (K) {
            return (
              K.name === C.type &&
              (K.target === C.target || C.target === K.shadowParent) &&
              Qw(K.delta, A)
            );
          })[0];
        if (I && I.should) {
          C.cancelable && C.preventDefault();
          return;
        }
        if (!I) {
          var B = (f.current.shards || [])
              .map(Qf)
              .filter(Boolean)
              .filter(function (K) {
                return K.contains(C.target);
              }),
            W = B.length > 0 ? p(C, B[0]) : !f.current.noIsolation;
          W && C.cancelable && C.preventDefault();
        }
      }
    }, []),
    g = v.useCallback(function (E, C, A, I) {
      var B = { name: E, delta: C, target: A, should: I, shadowParent: Yw(A) };
      o.current.push(B),
        setTimeout(function () {
          o.current = o.current.filter(function (W) {
            return W !== B;
          });
        }, 1);
    }, []),
    w = v.useCallback(function (E) {
      (l.current = zl(E)), (s.current = void 0);
    }, []),
    S = v.useCallback(function (E) {
      g(E.type, Gf(E), E.target, p(E, n.lockRef.current));
    }, []),
    P = v.useCallback(function (E) {
      g(E.type, zl(E), E.target, p(E, n.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      hr.push(d),
      n.setCallbacks({
        onScrollCapture: S,
        onWheelCapture: S,
        onTouchMoveCapture: P,
      }),
      document.addEventListener("wheel", y, pr),
      document.addEventListener("touchmove", y, pr),
      document.addEventListener("touchstart", w, pr),
      function () {
        (hr = hr.filter(function (E) {
          return E !== d;
        })),
          document.removeEventListener("wheel", y, pr),
          document.removeEventListener("touchmove", y, pr),
          document.removeEventListener("touchstart", w, pr);
      }
    );
  }, []);
  var O = n.removeScrollBar,
    b = n.inert;
  return v.createElement(
    v.Fragment,
    null,
    b ? v.createElement(d, { styles: qw(u) }) : null,
    O ? v.createElement(Uw, { gapMode: n.gapMode }) : null
  );
}
function Yw(n) {
  for (var o = null; n !== null; )
    n instanceof ShadowRoot && ((o = n.host), (n = n.host)), (n = n.parentNode);
  return o;
}
const Zw = Pw(vh, Jw);
var Eh = v.forwardRef(function (n, o) {
  return v.createElement(fi, Ft({}, n, { ref: o, sideCar: Zw }));
});
Eh.classNames = fi.classNames;
var e1 = function (n) {
    if (typeof document > "u") return null;
    var o = Array.isArray(n) ? n[0] : n;
    return o.ownerDocument.body;
  },
  mr = new WeakMap(),
  Ul = new WeakMap(),
  Bl = {},
  ka = 0,
  Ch = function (n) {
    return n && (n.host || Ch(n.parentNode));
  },
  t1 = function (n, o) {
    return o
      .map(function (l) {
        if (n.contains(l)) return l;
        var s = Ch(l);
        return s && n.contains(s)
          ? s
          : (console.error(
              "aria-hidden",
              l,
              "in not contained inside",
              n,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (l) {
        return !!l;
      });
  },
  n1 = function (n, o, l, s) {
    var u = t1(o, Array.isArray(n) ? n : [n]);
    Bl[l] || (Bl[l] = new WeakMap());
    var d = Bl[l],
      f = [],
      p = new Set(),
      y = new Set(u),
      g = function (S) {
        !S || p.has(S) || (p.add(S), g(S.parentNode));
      };
    u.forEach(g);
    var w = function (S) {
      !S ||
        y.has(S) ||
        Array.prototype.forEach.call(S.children, function (P) {
          if (p.has(P)) w(P);
          else
            try {
              var O = P.getAttribute(s),
                b = O !== null && O !== "false",
                E = (mr.get(P) || 0) + 1,
                C = (d.get(P) || 0) + 1;
              mr.set(P, E),
                d.set(P, C),
                f.push(P),
                E === 1 && b && Ul.set(P, !0),
                C === 1 && P.setAttribute(l, "true"),
                b || P.setAttribute(s, "true");
            } catch (A) {
              console.error("aria-hidden: cannot operate on ", P, A);
            }
        });
    };
    return (
      w(o),
      p.clear(),
      ka++,
      function () {
        f.forEach(function (S) {
          var P = mr.get(S) - 1,
            O = d.get(S) - 1;
          mr.set(S, P),
            d.set(S, O),
            P || (Ul.has(S) || S.removeAttribute(s), Ul.delete(S)),
            O || S.removeAttribute(l);
        }),
          ka--,
          ka ||
            ((mr = new WeakMap()),
            (mr = new WeakMap()),
            (Ul = new WeakMap()),
            (Bl = {}));
      }
    );
  },
  r1 = function (n, o, l) {
    l === void 0 && (l = "data-aria-hidden");
    var s = Array.from(Array.isArray(n) ? n : [n]),
      u = e1(n);
    return u
      ? (s.push.apply(s, Array.from(u.querySelectorAll("[aria-live]"))),
        n1(s, u, l, "aria-hidden"))
      : function () {
          return null;
        };
  },
  tu = "Dialog",
  [kh, C1] = ci(tu),
  [o1, _t] = kh(tu),
  Nh = (n) => {
    const {
        __scopeDialog: o,
        children: l,
        open: s,
        defaultOpen: u,
        onOpenChange: d,
        modal: f = !0,
      } = n,
      p = v.useRef(null),
      y = v.useRef(null),
      [g = !1, w] = Ya({ prop: s, defaultProp: u, onChange: d });
    return m.jsx(o1, {
      scope: o,
      triggerRef: p,
      contentRef: y,
      contentId: vo(),
      titleId: vo(),
      descriptionId: vo(),
      open: g,
      onOpenChange: w,
      onOpenToggle: v.useCallback(() => w((S) => !S), [w]),
      modal: f,
      children: l,
    });
  };
Nh.displayName = tu;
var Rh = "DialogTrigger",
  l1 = v.forwardRef((n, o) => {
    const { __scopeDialog: l, ...s } = n,
      u = _t(Rh, l),
      d = Mt(o, u.triggerRef);
    return m.jsx(nt.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": u.open,
      "aria-controls": u.contentId,
      "data-state": ou(u.open),
      ...s,
      ref: d,
      onClick: He(n.onClick, u.onOpenToggle),
    });
  });
l1.displayName = Rh;
var nu = "DialogPortal",
  [i1, Ph] = kh(nu, { forceMount: void 0 }),
  jh = (n) => {
    const { __scopeDialog: o, forceMount: l, children: s, container: u } = n,
      d = _t(nu, o);
    return m.jsx(i1, {
      scope: o,
      forceMount: l,
      children: v.Children.map(s, (f) =>
        m.jsx(No, {
          present: l || d.open,
          children: m.jsx(hh, { asChild: !0, container: u, children: f }),
        })
      ),
    });
  };
jh.displayName = nu;
var ti = "DialogOverlay",
  bh = v.forwardRef((n, o) => {
    const l = Ph(ti, n.__scopeDialog),
      { forceMount: s = l.forceMount, ...u } = n,
      d = _t(ti, n.__scopeDialog);
    return d.modal
      ? m.jsx(No, {
          present: s || d.open,
          children: m.jsx(s1, { ...u, ref: o }),
        })
      : null;
  });
bh.displayName = ti;
var s1 = v.forwardRef((n, o) => {
    const { __scopeDialog: l, ...s } = n,
      u = _t(ti, l);
    return m.jsx(Eh, {
      as: So,
      allowPinchZoom: !0,
      shards: [u.contentRef],
      children: m.jsx(nt.div, {
        "data-state": ou(u.open),
        ...s,
        ref: o,
        style: { pointerEvents: "auto", ...s.style },
      }),
    });
  }),
  Bn = "DialogContent",
  _h = v.forwardRef((n, o) => {
    const l = Ph(Bn, n.__scopeDialog),
      { forceMount: s = l.forceMount, ...u } = n,
      d = _t(Bn, n.__scopeDialog);
    return m.jsx(No, {
      present: s || d.open,
      children: d.modal
        ? m.jsx(a1, { ...u, ref: o })
        : m.jsx(u1, { ...u, ref: o }),
    });
  });
_h.displayName = Bn;
var a1 = v.forwardRef((n, o) => {
    const l = _t(Bn, n.__scopeDialog),
      s = v.useRef(null),
      u = Mt(o, l.contentRef, s);
    return (
      v.useEffect(() => {
        const d = s.current;
        if (d) return r1(d);
      }, []),
      m.jsx(Th, {
        ...n,
        ref: u,
        trapFocus: l.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: He(n.onCloseAutoFocus, (d) => {
          var f;
          d.preventDefault(), (f = l.triggerRef.current) == null || f.focus();
        }),
        onPointerDownOutside: He(n.onPointerDownOutside, (d) => {
          const f = d.detail.originalEvent,
            p = f.button === 0 && f.ctrlKey === !0;
          (f.button === 2 || p) && d.preventDefault();
        }),
        onFocusOutside: He(n.onFocusOutside, (d) => d.preventDefault()),
      })
    );
  }),
  u1 = v.forwardRef((n, o) => {
    const l = _t(Bn, n.__scopeDialog),
      s = v.useRef(!1),
      u = v.useRef(!1);
    return m.jsx(Th, {
      ...n,
      ref: o,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (d) => {
        var f, p;
        (f = n.onCloseAutoFocus) == null || f.call(n, d),
          d.defaultPrevented ||
            (s.current || (p = l.triggerRef.current) == null || p.focus(),
            d.preventDefault()),
          (s.current = !1),
          (u.current = !1);
      },
      onInteractOutside: (d) => {
        var y, g;
        (y = n.onInteractOutside) == null || y.call(n, d),
          d.defaultPrevented ||
            ((s.current = !0),
            d.detail.originalEvent.type === "pointerdown" && (u.current = !0));
        const f = d.target;
        ((g = l.triggerRef.current) == null ? void 0 : g.contains(f)) &&
          d.preventDefault(),
          d.detail.originalEvent.type === "focusin" &&
            u.current &&
            d.preventDefault();
      },
    });
  }),
  Th = v.forwardRef((n, o) => {
    const {
        __scopeDialog: l,
        trapFocus: s,
        onOpenAutoFocus: u,
        onCloseAutoFocus: d,
        ...f
      } = n,
      p = _t(Bn, l),
      y = v.useRef(null),
      g = Mt(o, y);
    return (
      vw(),
      m.jsxs(m.Fragment, {
        children: [
          m.jsx(fh, {
            asChild: !0,
            loop: !0,
            trapped: s,
            onMountAutoFocus: u,
            onUnmountAutoFocus: d,
            children: m.jsx(ch, {
              role: "dialog",
              id: p.contentId,
              "aria-describedby": p.descriptionId,
              "aria-labelledby": p.titleId,
              "data-state": ou(p.open),
              ...f,
              ref: g,
              onDismiss: () => p.onOpenChange(!1),
            }),
          }),
          m.jsxs(m.Fragment, {
            children: [
              m.jsx(c1, { titleId: p.titleId }),
              m.jsx(f1, { contentRef: y, descriptionId: p.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  ru = "DialogTitle",
  Oh = v.forwardRef((n, o) => {
    const { __scopeDialog: l, ...s } = n,
      u = _t(ru, l);
    return m.jsx(nt.h2, { id: u.titleId, ...s, ref: o });
  });
Oh.displayName = ru;
var Ah = "DialogDescription",
  Lh = v.forwardRef((n, o) => {
    const { __scopeDialog: l, ...s } = n,
      u = _t(Ah, l);
    return m.jsx(nt.p, { id: u.descriptionId, ...s, ref: o });
  });
Lh.displayName = Ah;
var Dh = "DialogClose",
  Ih = v.forwardRef((n, o) => {
    const { __scopeDialog: l, ...s } = n,
      u = _t(Dh, l);
    return m.jsx(nt.button, {
      type: "button",
      ...s,
      ref: o,
      onClick: He(n.onClick, () => u.onOpenChange(!1)),
    });
  });
Ih.displayName = Dh;
function ou(n) {
  return n ? "open" : "closed";
}
var Fh = "DialogTitleWarning",
  [k1, Mh] = yx(Fh, { contentName: Bn, titleName: ru, docsSlug: "dialog" }),
  c1 = ({ titleId: n }) => {
    const o = Mh(Fh),
      l = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
    return (
      v.useEffect(() => {
        n && (document.getElementById(n) || console.error(l));
      }, [l, n]),
      null
    );
  },
  d1 = "DialogDescriptionWarning",
  f1 = ({ contentRef: n, descriptionId: o }) => {
    const s = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      Mh(d1).contentName
    }}.`;
    return (
      v.useEffect(() => {
        var d;
        const u =
          (d = n.current) == null ? void 0 : d.getAttribute("aria-describedby");
        o && u && (document.getElementById(o) || console.warn(s));
      }, [s, n, o]),
      null
    );
  },
  p1 = Nh,
  h1 = jh,
  zh = bh,
  Uh = _h,
  Bh = Oh,
  $h = Lh,
  m1 = Ih;
const Na = p1,
  g1 = h1,
  Wh = v.forwardRef(({ className: n, ...o }, l) =>
    m.jsx(zh, {
      ref: l,
      className: Je(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        n
      ),
      ...o,
    })
  );
Wh.displayName = zh.displayName;
const Gl = v.forwardRef(({ className: n, children: o, ...l }, s) =>
  m.jsxs(g1, {
    children: [
      m.jsx(Wh, {}),
      m.jsxs(Uh, {
        ref: s,
        className: Je(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          n
        ),
        ...l,
        children: [
          o,
          m.jsxs(m1, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              m.jsx(zy, { className: "h-4 w-4" }),
              m.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
Gl.displayName = Uh.displayName;
const Ql = ({ className: n, ...o }) =>
  m.jsx("div", {
    className: Je("flex flex-col space-y-1.5 text-center sm:text-left", n),
    ...o,
  });
Ql.displayName = "DialogHeader";
const ql = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx(Bh, {
    ref: l,
    className: Je("text-lg font-semibold leading-none tracking-tight", n),
    ...o,
  })
);
ql.displayName = Bh.displayName;
const v1 = v.forwardRef(({ className: n, ...o }, l) =>
  m.jsx($h, { ref: l, className: Je("text-sm text-muted-foreground", n), ...o })
);
v1.displayName = $h.displayName;
function y1({ token: n, role: o, id: l }) {
  const [s, u] = v.useState([]),
    [d, f] = v.useState([]),
    [p, y] = v.useState([]),
    [g, w] = v.useState([]),
    [S, P] = v.useState("adminDetails"),
    [O, b] = v.useState(null),
    [E, C] = v.useState(null),
    [A, I] = v.useState({
      title: "",
      author: "",
      genre: "",
      copies: "",
      price: "",
    }),
    [B, W] = v.useState(!1),
    K = async () => {
      try {
        const D = await fe.get(
          `https://hari-book-sphere.netlify.app/${o}/${l}`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        u(D.data);
      } catch (D) {
        console.error(D);
      }
    },
    V = async () => {
      try {
        const D = await fe.get(
          `https://hari-book-sphere.netlify.app/${o}/${l}/users`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        f(D.data);
      } catch (D) {
        console.error(D);
      }
    },
    Z = async () => {
      try {
        await fe.put(
          `https://hari-book-sphere.netlify.app/${o}/${l}/user/edit/${E.id}`,
          E,
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          alert("User details updated successfully!"),
          C(null);
      } catch (D) {
        console.error(D), alert("Failed to reset user details.");
      }
    },
    re = async () => {
      try {
        const D = await fe.get(
          `https://hari-book-sphere.netlify.app/${o}/${l}/books`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        console.log(D.data), y(D.data);
      } catch (D) {
        console.error(D);
      }
    },
    Se = async () => {
      console.log(O);
      try {
        await fe.put(
          `https://hari-book-sphere.netlify.app/${o}/${l}/book/edit/${O.id}`,
          {
            title: O.title,
            author: O.author,
            genre: O.genre,
            price: O.price,
            copies: O.copies,
          },
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          alert("Book details updated successfully!"),
          b(null);
      } catch (D) {
        console.error(D), alert("Failed to update book details.");
      }
    },
    _e = async (D) => {
      try {
        await fe.delete(
          `https://hari-book-sphere.netlify.app/${o}/${l}/book/${D}`,
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          alert("Book deleted successfully!"),
          re();
      } catch (Ie) {
        console.error(Ie), alert("Failed to delete book.");
      }
    },
    $e = async () => {
      try {
        const D = await fe.get(
          `https://hari-book-sphere.netlify.app/${o}/${l}/rentals/details`,
          { headers: { Authorization: `Bearer ${n}` } }
        );
        w(D.data);
      } catch (D) {
        console.error(D);
      }
    },
    se = async () => {
      console.log(A);
      try {
        await fe.post(
          `https://hari-book-sphere.netlify.app/${o}/${l}/book/add`,
          {
            title: A.title,
            author: A.author,
            genre: A.genre,
            copies: A.copies,
            price: A.price,
          },
          { headers: { Authorization: `Bearer ${n}` } }
        ),
          alert("Book added successfully!"),
          I({ title: "", author: "", genre: "", copies: "", price: "" }),
          W(!1),
          re();
      } catch (D) {
        console.error(D), alert("Failed to add book.");
      }
    };
  return (
    v.useEffect(() => {
      K(), V(), re(), $e();
    }, []),
    m.jsxs("div", {
      className: "max-w-4xl mx-auto p-6",
      children: [
        m.jsxs(qx, {
          value: S,
          onValueChange: P,
          children: [
            m.jsxs(ah, {
              className:
                "mb-4 lg:block justify-center sm:block md:block max-sm: hidden",
              children: [
                m.jsx(ho, { value: "adminDetails", children: "Admin Details" }),
                m.jsx(ho, {
                  value: "usersDetails",
                  children: "Customers Details",
                }),
                m.jsx(ho, { value: "books", children: "All Books" }),
                m.jsx(ho, { value: "rent", children: "Rented Books Details" }),
              ],
            }),
            m.jsxs("select", {
              className:
                "lg:hidden sm:hidden md:hidden max-sm: block px-4 py-2 w-full",
              name: "tabs",
              id: "tabs",
              value: S,
              onChange: (D) => P(D.target.value),
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
            m.jsxs(mo, {
              value: "adminDetails",
              children: [
                m.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "Admin Details",
                }),
                m.jsxs(go, {
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
            m.jsxs(mo, {
              value: "usersDetails",
              children: [
                m.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "Customers Details",
                }),
                m.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: d.map((D) =>
                    m.jsxs(
                      go,
                      {
                        className: "p-4 flex ",
                        children: [
                          m.jsxs("section", {
                            children: [
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "ID:" }),
                                  " ",
                                  D.id,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Name:" }),
                                  " ",
                                  D.name,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Phone:" }),
                                  " ",
                                  D.phone,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Role:" }),
                                  " ",
                                  D.role,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", {
                                    children: "Customer since:",
                                  }),
                                  " ",
                                  new Date(D.created_at).toLocaleDateString(),
                                ],
                              }),
                            ],
                          }),
                          m.jsx(Qt, {
                            className: "ml-auto bg-green-600",
                            onClick: () =>
                              C({
                                ...D,
                                id: D.id,
                                name: D.name,
                                phone: D.phone,
                                role: D.role,
                                newPassword: "",
                              }),
                            children: "Edit",
                          }),
                        ],
                      },
                      D.id
                    )
                  ),
                }),
              ],
            }),
            m.jsxs(mo, {
              value: "books",
              children: [
                m.jsxs("section", {
                  className: "flex justify-between items-center mb-4",
                  children: [
                    m.jsx("h2", {
                      className: "text-2xl font-semibold mb-4",
                      children: "All Books",
                    }),
                    m.jsx(My, {
                      onClick: () => W(!B),
                      className:
                        "cursor-pointer text-teal-600 hover:text-teal-800 transition-all size-12",
                    }),
                  ],
                }),
                m.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: p.map((D) =>
                    m.jsxs(
                      go,
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
                                  D.id,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Title:" }),
                                  " ",
                                  D.title,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Author:" }),
                                  " ",
                                  D.author,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Genre:" }),
                                  " ",
                                  D.genre,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", { children: "Price:" }),
                                  " ",
                                  D.price,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", {
                                    children: "Total Copies:",
                                  }),
                                  " ",
                                  D.copies,
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx("strong", {
                                    children: "Available Copies:",
                                  }),
                                  " ",
                                  D.available_copies,
                                ],
                              }),
                            ],
                          }),
                          m.jsxs("section", {
                            className: "flex gap-2 justify-between",
                            children: [
                              m.jsx(Qt, {
                                variant: "destructive",
                                onClick: () => _e(D.id),
                                children: "Delete",
                              }),
                              m.jsx(Qt, {
                                variant: "outline",
                                onClick: () => b(D),
                                children: "Edit",
                              }),
                            ],
                          }),
                        ],
                      },
                      D.id
                    )
                  ),
                }),
              ],
            }),
            m.jsxs(mo, {
              value: "rent",
              children: [
                m.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "Rented Books Details",
                }),
                m.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: g.map((D) =>
                    m.jsxs(
                      go,
                      {
                        className: "p-4",
                        children: [
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Rental ID:" }),
                              " ",
                              D.rental_id,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Book ID:" }),
                              " ",
                              D.book_id,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Book Title:" }),
                              " ",
                              D.book_title,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "User ID:" }),
                              " ",
                              D.user_id,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Customer Name:" }),
                              " ",
                              D.customer_name,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Customer Phone:" }),
                              " ",
                              D.customer_phone,
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Rent Date:" }),
                              " ",
                              D.rent_date &&
                                new Date(D.rent_date).toLocaleDateString(),
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Return Date:" }),
                              " ",
                              D.return_date
                                ? new Date(D.return_date).toLocaleDateString()
                                : "Not yet returned",
                            ],
                          }),
                          m.jsxs("p", {
                            children: [
                              m.jsx("strong", { children: "Returned:" }),
                              " ",
                              D.returned
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
                      D.rental_id
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        O &&
          m.jsx(Na, {
            open: !!O,
            onOpenChange: () => b(null),
            children: m.jsxs(Gl, {
              children: [
                m.jsx(Ql, { children: m.jsx(ql, { children: "Edit Book" }) }),
                m.jsx(tt, {
                  value: O.title,
                  onChange: (D) => b({ ...O, title: D.target.value }),
                  placeholder: "Title",
                }),
                m.jsx(tt, {
                  type: "text",
                  value: O.author,
                  onChange: (D) => b({ ...O, author: D.target.value }),
                  placeholder: "Author",
                }),
                m.jsx(tt, {
                  type: "text",
                  value: O.genre,
                  onChange: (D) => b({ ...O, genre: D.target.value }),
                  placeholder: "Genre",
                }),
                m.jsx(tt, {
                  type: "number",
                  value: O.price,
                  onChange: (D) => b({ ...O, price: parseInt(D.target.value) }),
                  placeholder: "Price",
                }),
                m.jsx(tt, {
                  type: "number",
                  value: O.copies,
                  onChange: (D) =>
                    b({ ...O, copies: parseInt(D.target.value), id: O.id }),
                  placeholder: "Total Copies",
                }),
                m.jsx(Qt, { onClick: Se, children: "Update" }),
              ],
            }),
          }),
        E &&
          m.jsx(Na, {
            open: !!E,
            onOpenChange: () => C(null),
            children: m.jsxs(Gl, {
              children: [
                m.jsx(Ql, {
                  children: m.jsx(ql, { children: "Reset User Details" }),
                }),
                m.jsx(tt, { value: E.id, readOnly: !0 }),
                m.jsx(tt, {
                  value: E.name,
                  onChange: (D) => C({ ...E, name: D.target.value }),
                  placeholder: "Name",
                }),
                m.jsx(tt, {
                  value: E.phone,
                  onChange: (D) => C({ ...E, phone: D.target.value }),
                  placeholder: "Phone",
                }),
                m.jsxs("select", {
                  className: "w-full p-2 border border-gray-300 rounded-md",
                  defaultValue: E.role,
                  onChange: (D) => C({ ...E, role: D.target.value }),
                  children: [
                    m.jsx("option", { value: "user", children: "User" }),
                    m.jsx("option", { value: "admin", children: "Admin" }),
                  ],
                }),
                m.jsx(tt, {
                  value: E.newPassword,
                  onChange: (D) => C({ ...E, newPassword: D.target.value }),
                  placeholder: "New Password",
                  type: "password",
                }),
                m.jsx(Qt, { onClick: Z, children: "Reset" }),
              ],
            }),
          }),
        B &&
          m.jsx(Na, {
            open: !!B,
            onOpenChange: () => W(!1),
            children: m.jsxs(Gl, {
              children: [
                m.jsx(Ql, {
                  children: m.jsx(ql, { children: "Add New Book" }),
                }),
                m.jsx(tt, {
                  value: A.title,
                  onChange: (D) => I({ ...A, title: D.target.value }),
                  placeholder: "Title",
                }),
                m.jsx(tt, {
                  value: A.author,
                  onChange: (D) => I({ ...A, author: D.target.value }),
                  placeholder: "Author",
                }),
                m.jsx(tt, {
                  value: A.genre,
                  onChange: (D) => I({ ...A, genre: D.target.value }),
                  placeholder: "Genre",
                }),
                m.jsx(tt, {
                  value: A.price,
                  onChange: (D) => I({ ...A, price: parseInt(D.target.value) }),
                  placeholder: "Price",
                }),
                m.jsx(tt, {
                  value: A.copies,
                  onChange: (D) =>
                    I({ ...A, copies: parseInt(D.target.value) }),
                  placeholder: "Total Copies",
                }),
                m.jsx(Qt, { onClick: se, children: "Add" }),
              ],
            }),
          }),
      ],
    })
  );
}
function x1({ setRole: n, setToken: o, setId: l }) {
  const [s, u] = v.useState({ name: "", password: "", role: "user" }),
    [d, f] = v.useState(""),
    p = ri(),
    y = async (g) => {
      var w, S;
      if ((g.preventDefault(), !s.name || !s.password)) {
        f("All fields are required!");
        return;
      }
      try {
        const P = await fe.post(
          "https://hari-book-sphere.netlify.app/login",
          s
        );
        f(""),
          o(P.data.token),
          n(P.data.user.role),
          l(P.data.user.id),
          localStorage.setItem("token", P.data.token),
          localStorage.setItem("role", P.data.user.role),
          localStorage.setItem("id", P.data.user.id),
          P.data.user.role === "admin"
            ? p("/admin")
            : p(`/user/${P.data.user.id}`);
      } catch (P) {
        f(
          ((S = (w = P.response) == null ? void 0 : w.data) == null
            ? void 0
            : S.error) || "Something went wrong! Please try again."
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
        d && m.jsx("div", { className: "text-red-500 mt-2", children: d }),
      ],
    }),
  });
}
function w1() {
  const [n, o] = v.useState({
      name: "",
      phone: "",
      password: "",
      role: "user",
    }),
    [l, s] = v.useState(""),
    u = async (d) => {
      var f, p;
      d.preventDefault();
      try {
        const y = await fe.post(
          "https://hari-book-sphere.netlify.app/register",
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
              onChange: (d) => o({ ...n, name: d.target.value }),
              required: !0,
            }),
            m.jsx("input", {
              className: "p-2",
              type: "text",
              placeholder: "Phone",
              value: n.phone,
              onChange: (d) => o({ ...n, phone: d.target.value }),
              required: !0,
            }),
            m.jsx("input", {
              className: "p-2",
              type: "password",
              placeholder: "Password",
              value: n.password,
              onChange: (d) => o({ ...n, password: d.target.value }),
              required: !0,
            }),
            m.jsxs("select", {
              className: "p-2 w-full",
              value: n.role,
              onChange: (d) => o({ ...n, role: d.target.value }),
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
          children: l && m.jsx("p", { className: "text-red-500", children: l }),
        }),
      ],
    }),
  });
}
function S1() {
  const [n, o] = v.useState(""),
    [l, s] = v.useState(""),
    [u, d] = v.useState("");
  v.useState("details");
  const f = () => {
    o(""),
      s(""),
      d(""),
      localStorage.removeItem("token"),
      localStorage.removeItem("role"),
      localStorage.removeItem("id");
  };
  return (
    v.useEffect(() => {
      const p = localStorage.getItem("token"),
        y = localStorage.getItem("role"),
        g = localStorage.getItem("id");
      p && (o(p), s(y), d(g));
    }, []),
    m.jsxs(Vv, {
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
                  m.jsx(uo, {
                    to: "/",
                    className:
                      "hover:text-indigo-200 transition-colors duration-200",
                    children: "Home",
                  }),
                  !n &&
                    m.jsxs(m.Fragment, {
                      children: [
                        m.jsx(uo, {
                          to: "/login",
                          className:
                            "hover:text-indigo-200 transition-colors duration-200",
                          children: "Login",
                        }),
                        m.jsx(uo, {
                          to: "/register",
                          className:
                            "hover:text-indigo-200 transition-colors duration-200",
                          children: "Register",
                        }),
                      ],
                    }),
                  l === "admin" &&
                    m.jsx(uo, {
                      to: "/admin",
                      className:
                        "hover:text-indigo-200 transition-colors duration-200",
                      children: "Admin",
                    }),
                  l === "user" &&
                    u &&
                    m.jsx(uo, {
                      to: `/user/${u}`,
                      className:
                        "hover:text-indigo-200 transition-colors duration-200",
                      children: "User Dashboard",
                    }),
                  l &&
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
        m.jsxs(Fv, {
          children: [
            m.jsx(Fn, { path: "/", element: m.jsx(By, {}) }),
            m.jsx(Fn, { path: "/register", element: m.jsx(w1, {}) }),
            m.jsx(Fn, {
              path: "/login",
              element: m.jsx(x1, { setRole: s, setToken: o, setId: d }),
            }),
            m.jsx(Fn, {
              path: "/admin",
              element:
                l === "admin" && n
                  ? m.jsx(y1, { token: n, role: l, id: u })
                  : m.jsx("div", {
                      className: "text-red-500 text-center mt-20",
                      children: "Access Denied. Please log in as an admin.",
                    }),
            }),
            m.jsx(Fn, {
              path: `/user/${u}`,
              element:
                l === "user" && n && u
                  ? m.jsx(vx, { token: n, role: l, id: u })
                  : m.jsx(hf, { to: "/login" }),
            }),
            m.jsx(Fn, { path: "*", element: m.jsx(hf, { to: "/" }) }),
          ],
        }),
      ],
    })
  );
}
Qg.createRoot(document.getElementById("root")).render(
  m.jsx(v.StrictMode, { children: m.jsx(S1, {}) })
);
