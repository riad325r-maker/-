## 2025-01-24 - Efficient Typewriter Effects
**Learning:** Using `innerHTML +=` for incremental text updates (like typewriter effects) causes $O(N^2)$ overhead because the browser must re-parse the entire element content on every iteration. Additionally, `charAt(i)` fails to correctly handle Unicode surrogate pairs (e.g., emojis or certain scripts).
**Action:** Use `appendChild` with `document.createTextNode()` for linear performance ($O(N)$) and use `Array.from(text)` or the spread operator `[...text]` to safely iterate over Unicode code points.
