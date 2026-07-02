## 2026-07-02 - [Initial Performance Audit]
**Learning:** Animating properties like `top` triggers layout and paint on every frame, which is expensive. Using `transform` allows the browser to offload the animation to the GPU. Frequent `innerHTML` updates and redundant DOM lookups in loops also degrade performance.
**Action:** Always prefer `transform` for animations and cache DOM references in frequently executed code. Use `insertAdjacentHTML` or DOM methods instead of `innerHTML +=`.
