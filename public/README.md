# Public Directory

Any static assets placed in this folder will be copied verbatim to the build output root (`dist/`) during production build.

You can reference them using root-relative paths in your HTML, CSS, or JS.
For example, if you place `favicon.ico` in this folder, you can reference it as `/favicon.ico` in your HTML:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

Note:
- Assets referenced via relative paths (e.g. `./cardiagent_mockup.png` or `cardiagent_mockup.png`) are automatically resolved, hashed, and optimized by Vite and placed in the `dist/assets/` directory.
