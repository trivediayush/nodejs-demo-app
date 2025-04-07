const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>🚀 Node.js CI/CD Pipeline</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #1e1e2f;
                color: #f5f5f5;
                text-align: center;
                padding: 50px;
            }
            h1 {
                font-size: 3rem;
                color: #00d8ff;
            }
            p {
                font-size: 1.2rem;
                margin-top: 20px;
            }
            .badge {
                background: #282c34;
                border: 1px solid #00d8ff;
                padding: 10px 20px;
                display: inline-block;
                border-radius: 20px;
                margin-top: 30px;
                font-weight: bold;
                color: #00d8ff;
            }
        </style>
    </head>
    <body>
        <h1>🚀 CI/CD Pipeline Deployed Successfully!</h1>
        <p>This Node.js app was built, tested, and deployed via GitHub Actions & Docker 🚢</p>
        <div class="badge">DevOps Engineer</div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`🚀 App running on http://localhost:${port}`);
});
