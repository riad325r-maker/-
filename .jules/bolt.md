## 2026-07-08 - Optimized Typewriter Effect
**Learning:** Using `innerHTML +=` for typewriter effects or incremental DOM updates causes $O(N^2)$ performance overhead because the browser re-parses the entire element content on each character addition. Additionally, `text.charAt(i)` can break Unicode surrogate pairs.
**Action:** Use `appendChild` with `document.createTextNode` and `document.createElement('br')` for $O(N)$ efficiency. Use `Array.from(text)` or the spread operator to safely iterate over Unicode code points.
