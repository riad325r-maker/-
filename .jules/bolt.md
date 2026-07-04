## 2026-07-04 - [DOM Optimization & Unicode Handling in Typewriter Effects]
**Learning:** Using `innerHTML +=` for typewriter animations causes $O(N^2)$ performance degradation because the browser must re-parse and re-serialize the entire DOM subtree for every character added. Additionally, `charAt()` can break Unicode surrogate pairs (emojis).
**Action:** Always use `appendChild` with `createTextNode` for character insertion and `[...text]` spread operator for correct Unicode iteration in animations.
