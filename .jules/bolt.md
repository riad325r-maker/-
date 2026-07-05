# Bolt Performance Journal

## 2025-05-14 - Optimized Typewriter Effect & Resource Hints
**Learning:** Using `innerHTML +=` for incremental text animations (like typewriter effects) triggers a full DOM re-parse on every character, leading to O(N²) complexity. This is especially impactful in mobile browsers or with longer texts. Additionally, external assets from Google Fonts and Catbox caused slight delays in initial render and audio playback due to missing connection pre-warming.
**Action:** Always use `appendChild` with `createTextNode` for incremental text updates. Use `preconnect` resource hints for critical external CDNs to reduce TTFB for assets.
