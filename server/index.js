const express = require('express');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const app = express();


const staticRoot = path.resolve(__dirname, '../dist/ebseiten-angular/browser');
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (!req.secure && req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect('https://' + req.headers.host + req.url);
  } else {
    next();
  }
});

// threshold controls compressing based on file size. Let's not do that
// WARNING: The order matters here...compression must come before express.static
app.use(compression({ threshold: 0 }));
app.use(express.static(staticRoot, { maxAge: '365d' }));

app.use(function (req, res) {
  res.status(404);
  fs.createReadStream(path.join(staticRoot, '/index.html')).pipe(res);
});

app.listen(port, () => {
 console.log(`Portfolio listening on port ${port}`);
});
