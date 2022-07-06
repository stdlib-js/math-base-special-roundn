// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base10-exponent@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base10-exponent@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base10-exponent-subnormal@esm/index.mjs";var o=m+1,j=1e308;function l(m,l){var p,h;return s(m)||s(l)||t(l)?NaN:t(m)||0===m||l<r||n(m)>o&&l<=0?m:l>d?0*m:l<a?(p=e(10,-(l+d)),t(h=m*j*p)?m:i(h)/j/p):(p=e(10,-l),t(h=m*p)?m:i(h)/p)}export{l as default};
//# sourceMappingURL=index.mjs.map
