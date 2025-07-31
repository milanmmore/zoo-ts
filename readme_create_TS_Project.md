![Zoo Banner](<https://placehold.co/800x200?text=Create+TS+Project(Github+ready+structure)&font=source-sans-pro>)

## 🚀 How to Create a TypeScript Project

Follow these steps to set up a TypeScript project and publish it on GitHub.

## 1️⃣ Initialize the Project

```bash
mkdir my-typescript-project
cd my-typescript-project
npm init -y
```

## 2️⃣ Install TypeScript

```bash
npm install typescript --save-dev
npx tsc --init
```

This creates a tsconfig.json file. You can customize it later.

## 3️⃣ Create Source Folder

```bash
mkdir src
touch src/index.ts
```

Add your TypeScript code in src/index.ts.

## 4️⃣ Add Build Script

Update package.json:

```json
    "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
    }
```

## 5️⃣ Compile TypeScript

```bash
npm run build
```

This generates JavaScript files in the dist/ folder.

## 6️⃣ Initialize Git and Push to GitHub

```bash
## if git is not configured before -
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
## ----------
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/my-typescript-project.git
git push -u origin main
```

Replace your-username and repo name accordingly.

## 7️⃣ Optional: Add .gitignore

Create a .gitignore file:

node_modules/
dist/

## 8️⃣ Optional: Add README.md

Create a README.md with project details, commands, and structure.

## 9️⃣ Optional: Enable GitHub Pages (for frontend projects)

- Go to your repo settings → Pages
- Select branch: main, folder: /root or /docs
- Save and access your site at https://your-username.github.io/my-typescript-project

## 📁 sample Folder Structure

```
my-typescript-project/
├── src/              # TypeScript source files
│   └── index.ts      # Entry point
├── tests/            # Jest test files
├── dist/             # Compiled JavaScript (auto-generated)
├── .gitignore        # Ignore node_modules and dist
├── package.json      # Project metadata and scripts
├── tsconfig.json     # TypeScript configuration
├── jest.config.js    # Jest configuration
├── README.md         # Project overview
```

## 📦 package.json (with scripts)

```json
{
  "name": "my-typescript-project",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest",
    "lint": "eslint src/**/*.ts"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0",
    "eslint": "^8.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "@typescript-eslint/eslint-plugin": "^5.0.0"
  }
}
```

## 🛠 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## ✅ jest.config.js

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
};
```

## 🚫 .gitignore

node_modules/
dist/

## ✅ Git First-Time Setup Checklist

1. 🔧 Install Git. If you haven’t already:
   Download Git for your OS
   Verify installation:

```bash
git --version
```

2. 👤 Configure Your Identity
   Set your global username and email (used in commits):

```bash
git config --global user.name "Milan"
git config --global user.email "your.email@example.com"
```

Check your config:

```bash
git config --list
```

3. 🔐 Set Up SSH (Recommended for GitHub)
   This lets you push/pull without typing your password every time.

   - a. Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

Press Enter to accept defaults. Your key will be saved in ~/.ssh/id_ed25519.

    - b. Add SSH Key to GitHub
    Copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Go to GitHub → Settings → SSH and GPG keys
Click New SSH key, paste it, and save.

    - c. Test Connection

```bash
ssh -T git@github.com
```

You should see: Hi <your Name>! You've successfully authenticated.
