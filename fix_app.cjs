const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

if (!app.includes('FloatingActions')) {
  app = app.replace(
    "import { Toast } from './components/Toast';",
    "import { Toast } from './components/Toast';\nimport { FloatingActions } from './components/FloatingActions';"
  );
  
  app = app.replace(
    "<Toast />",
    "<Toast />\n        <FloatingActions />"
  );
  
  fs.writeFileSync('src/App.tsx', app);
  console.log('App.tsx updated');
}
