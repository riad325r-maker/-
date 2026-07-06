## 2026-07-06 - Optimized Typewriter Effect Performance
**Learning:** Using `innerHTML +=` for typewriter effects causes O(N²) overhead as the browser re-parses the entire element on each character. Additionally, `charAt(i)` breaks surrogate pairs (emojis).
**Action:** Use `appendChild(document.createTextNode(char))` for characters and `appendChild(document.createElement('br'))` for newlines. Iterate over characters using the spread operator `[...text]` to support Unicode code points correctly.
