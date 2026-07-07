# Bolt's Performance Journal

## 2025-05-15 - Initial Journal Setup
**Learning:** This journal will track critical performance insights for the CineLingua project.
**Action:** Always document $O(N^2)$ bottlenecks or surprising performance patterns discovered during profiling.

## 2025-05-20 - $O(N^2)$ DOM Re-parsing in Typewriter Animations
**Learning:** Using `element.innerHTML += char` in a typewriter effect creates $O(N^2)$ overhead. Each addition forces the browser to re-parse the entire existing string and re-build the DOM tree for that element. While negligible for short strings, it causes noticeable UI lag and battery drain for longer texts or high-frequency updates.
**Action:** Use `document.createTextNode` and `element.appendChild()` to perform $O(1)$ appends ($O(N)$ total for the animation) without re-parsing the existing content. Use `Array.from(text)` to safely iterate over Unicode code points (e.g., emojis or complex scripts like Arabic) to avoid breaking surrogate pairs.
