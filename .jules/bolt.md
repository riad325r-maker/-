## 2025-05-14 - [DOM Mutation Anti-pattern]
**Learning:** Using `innerHTML +=` in a loop (like a typing effect) causes the browser to re-parse the entire content of the element on every iteration, leading to (n^2)$ performance degradation relative to the text length.
**Action:** Always use `appendChild` with `createTextNode` or `textContent` for incremental UI updates to keep DOM operations (1)$ per update.

## 2025-05-14 - [High-frequency DOM lookups]
**Learning:** Repeatedly calling `document.getElementById` inside high-frequency intervals (e.g., 300ms animations or 60ms typing loops) adds unnecessary overhead that can be easily avoided by caching references.
**Action:** Identify and cache all frequently used DOM elements at script initialization or component mount.
