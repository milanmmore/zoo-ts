# Post-Retirement Career Options for QA Leads

## 👨‍💻 Freelance QA Automation

- Tools: Cypress, Playwright, Selenium
- Platforms: Upwork, Freelancer, WisdomCircle
- Sample Roles:
  - QA Consultant – Genpact
  - QA Engineer – IntelliSavvy

## 🎓 Online Teaching & Mentoring

- Platforms: Test Pro, JanBask Training, SQA Tools
- Formats: YouTube, Teachable, Gumroad
- Topics: Cypress basics, API testing, CI/CD integration

## 🧠 Consulting & Advisory

- Offer QA strategy, framework setup, team mentoring
- Platform: WisdomCircle (India-based)

## 🧰 Remote or Part-Time QA Jobs

- Explore LinkedIn, Indeed, and company career pages
- Filter by “Remote” and “QA Automation”

## 📝 Technical Writing & Content Creation

- Medium Partner Program
- QA blogs, tutorials, documentation
- Freelance gigs on Fiverr, Freelancer

## 📚 Start a QA Training Center

- Weekend workshops
- Partner with colleges or bootcamps
- Offer certification prep

## 🌟 Passive Income Ideas

- YouTube channel (Cypress tutorials)
- Sell test templates or eBooks
- GitHub Sponsors for open-source projects

---

## 🎥 First YouTube Tutorial Outline: “Cypress for Beginners”

Here’s a professional and engaging outline for your first video:

🎬 Title: “Cypress for Beginners – Setup & First Test Case”
🧩 Video Structure (5–8 minutes)
Intro (30 sec)

Who you are

What viewers will learn

What is Cypress? (1 min)

Brief overview

Why it's popular

Installation (2 min)

```bash
npm install cypress --save-dev
npx cypress open
Writing Your First Test (2 min)
```

```javascript
describe("Login Page", () => {
  it("should load login form", () => {
    cy.visit("https://example.com/login");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("password");
    cy.get('button[type="submit"]').click();
  });
});
```

Running the Test (1 min)

Show Cypress Test Runner

Highlight results

Outro (30 sec)

Invite to subscribe

Mention next video topic (e.g., API testing with Cypress)

💡 Use OBS Studio or Loom to record your screen and voice. Keep the tone friendly and clear.

## 🧰 GitHub Portfolio Setup: Cypress Examples

```
📁 Suggested Repo Structure
qa-automation-portfolio/
├── README.md
├── cypress-examples/
│   ├── login-tests/
│   │   └── login.spec.js
│   ├── api-tests/
│   │   └── api.spec.js
│   └── visual-tests/
│       └── visual.spec.js
└── assets/
    └── screenshots/
```

## 📝 Sample README.md

```markdown
# QA Automation Portfolio – Cypress Projects

Hi, I'm Milan — a QA Lead with 18+ years of experience. This repo showcases Cypress-based automation projects including UI, API, and visual testing.

## 🔧 Tools Used

- Cypress
- JavaScript
- GitHub Actions

## 📂 Projects

- Login Tests: [login.spec.js](./cypress-examples/login-tests/login.spec.js)
- API Testing: [api.spec.js](./cypress-examples/api-tests/api.spec.js)
- Visual Regression: [visual.spec.js](./cypress-examples/visual-tests/visual.spec.js)

## 📬 Contact

Connect with me on [LinkedIn](https://linkedin.com) or email for collaboration.
```

## 🧪 1. Cypress UI Test: login.spec.js

This test simulates a login flow on a sample site.

```javascript
// cypress-examples/login-tests/login.spec.js

describe("Login Page Tests", () => {
  beforeEach(() => {
    cy.visit("https://example.com/login"); // Replace with actual URL
  });

  it("should display login form", () => {
    cy.get("form").should("be.visible");
    cy.get('input[name="username"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("contain", "Login");
  });

  it("should login with valid credentials", () => {
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    // Assert successful login
    cy.url().should("include", "/dashboard");
    cy.contains("Welcome, admin").should("be.visible");
  });

  it("should show error for invalid credentials", () => {
    cy.get('input[name="username"]').type("wronguser");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();

    cy.contains("Invalid username or password").should("be.visible");
  });
});
```

💡 You can replace https://example.com/login with a real or mock app URL. If you don’t have one, I can help you set up a simple HTML login page for testing.

## 🔌 2. Cypress API Test: api.spec.js

This test checks a sample REST API using cy.request.

```javascript
// cypress-examples/api-tests/api.spec.js

describe("API Testing with Cypress", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  it("should fetch user data", () => {
    cy.request(`${baseUrl}/users/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1);
      expect(response.body).to.have.property("username");
    });
  });

  it("should create a new post", () => {
    cy.request("POST", `${baseUrl}/posts`, {
      title: "QA Automation",
      body: "Learning Cypress API testing",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      expect(response.body.title).to.eq("QA Automation");
    });
  });
});
```

💡 This uses a public mock API (jsonplaceholder.typicode.com) — great for demos and tutorials.

## 🧱 Part 1: Simple HTML Login Page for Cypress Testing

Create a file named login.html in a folder like mock-app/:

```html
<!-- mock-app/login.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Page</title>
    <style>
      body {
        font-family: Arial;
        padding: 2rem;
      }
      form {
        max-width: 300px;
        margin: auto;
      }
      input,
      button {
        display: block;
        width: 100%;
        margin: 1rem 0;
        padding: 0.5rem;
      }
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <h2>Login</h2>
    <form id="loginForm">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p id="message" class="error"></p>
    </form>

    <script>
      document
        .getElementById("loginForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const username = e.target.username.value;
          const password = e.target.password.value;
          const message = document.getElementById("message");

          if (username === "admin" && password === "password123") {
            window.location.href = "dashboard.html";
          } else {
            message.textContent = "Invalid username or password";
          }
        });
    </script>
  </body>
</html>
```

Create a simple dashboard.html for redirection:

```html
<!-- mock-app/dashboard.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dashboard</title>
  </head>
  <body>
    <h1>Welcome, admin</h1>
  </body>
</html>
```

💡 You can serve this locally using Live Server in VS Code or any static server.

## ⚙️ Part 2: GitHub Actions to Run Cypress Tests Automatically

Create a file in your repo: .github/workflows/cypress.yml

```yaml
# .github/workflows/cypress.yml
name: Run Cypress Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run
```

## ✅ What This Does:

Runs Cypress tests on every push or pull request to main

Uses Node.js and installs dependencies

Executes npx cypress run to run all tests

## 🧪 Customizing Cypress Tests for Local HTML Page

To test your login.html locally with Cypress:

## ✅ Step 1: Serve the HTML Page Locally

Use a static server like http-server:

```bash
npm install -g http-server
http-server ./mock-app -p 8080
```

This will serve your login.html at http://localhost:8080/login.html.

## ✅ Step 2: Update Cypress Test

Modify login.spec.js to point to your local page:

```javascript
describe("Local Login Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/login.html");
  });

  it("should display login form", () => {
    cy.get("form").should("be.visible");
    cy.get('input[name="username"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("contain", "Login");
  });

  it("should login with valid credentials", () => {
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "dashboard.html");
  });

  it("should show error for invalid credentials", () => {
    cy.get('input[name="username"]').type("wrong");
    cy.get('input[name="password"]').type("wrong");
    cy.get('button[type="submit"]').click();

    cy.get("#message").should("contain", "Invalid username or password");
  });
});
```

## 🌐 Hosting the Mock App with GitHub Pages

You can host your login.html and dashboard.html publicly using GitHub Pages.

## ✅ Step-by-Step Guide

1. Create a GitHub Repo
   Name it something like qa-mock-app.

2. Add Your Files
   Include:

login.html

dashboard.html

Optional: README.md

3. Enable GitHub Pages
   Go to Settings → Pages

Under Source, select main branch and /root

Click Save

Your site will be live at:

https://<your-username>.github.io/qa-mock-app/login.html 4. Update Cypress Test URL
Change the cy.visit() line to:

```javascript
cy.visit("https://<your-username>.github.io/qa-mock-app/login.html");
```

💡 This lets you run Cypress tests against a live, hosted version of your mock app — great for demos and GitHub Actions.
