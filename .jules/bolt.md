## 2025-01-24 - [Typewriter Effect Optimization]
**Learning:** Using `innerHTML +=` for typewriter effects causes $O(N^2)$ overhead as the browser re-parses the entire element on each character. Additionally, iterating strings with `charAt` or index-access breaks Unicode surrogate pairs (emojis).
**Action:** Use `appendChild` with `createTextNode` for $O(N)$ updates and `Array.from(text)` for Unicode-safe iteration in all future text animation implementations.
