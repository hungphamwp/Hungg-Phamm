const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

// Replace font-serif definition
css = css.replace(
  `--font-serif: "Cormorant Garamond", serif;`,
  `--font-serif: "Playfair Display", serif;\n  --font-display: "Cormorant Garamond", serif;`
);

// Enhance base layer
css = css.replace(
  `h1, h2, h3, h4, h5, h6 {\n    @apply font-serif;\n  }`,
  `h1, h2, h3, h4, h5, h6 {\n    @apply font-serif font-medium tracking-wide;\n    text-wrap: balance;\n  }`
);

// Also add a custom utility for elegant subtitles
if (!css.includes('.text-elegant')) {
  css = css.replace(
    `@layer utilities {`,
    `@layer utilities {\n  .text-elegant {\n    @apply font-display italic tracking-wide text-balance;\n  }`
  );
}

fs.writeFileSync('src/index.css', css);
