## 2025-01-24 - $O(N^2)$ DOM Manipulation in Typewriter Effect
**Learning:** Using `element.innerHTML += char` in a typewriter effect causes the browser to re-parse the entire content of the element on every character added. This leads to $O(N^2)$ complexity relative to the number of characters, which can cause significant jank as the text grows longer.
**Action:** Use `element.appendChild(document.createTextNode(char))` for incremental text updates. This is an $O(1)$ operation per character and avoids redundant DOM parsing. For newlines, use `document.createElement('br')`.
