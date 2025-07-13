# 🧪 Test Automation Framework

This project is a TypeScript-based Playwright test automation framework designed for cross-browser web testing. It follows the Page Object Model structure for maintainability and includes organized test cases under tests, reusable page methods under pages, and utility functions under utils. The framework supports multi-environment configurations, screenshot/video capture on failure on failure, and Built-In reporting. Ideal for integrating into CI/CD pipelines, it's structured to scale with growing test suites.


## 🚀 Tech Stack

- **Playwright** – End-to-end browser automation
- **TypeScript** – Strongly-typed JavaScript
- **HTML Playwright Built-In** – Rich, interactive test reports
- **Node.js & npm** – Package and build management
- **CI/CD Ready** – Easily integrable with GitHub Actions 

---

## 🧰 Features

✅ Page Object Model (POM) using OOP principles  
✅ Multi-environment support (dev, staging, prod)  
✅ Retries with screenshots and videos on failure  
✅ Tagged tests (e.g., smoke, regression)  
✅ Mobile/tablet/desktop viewport testing  
✅ HTML reports with step logging  
✅ Easily extendable for API and data-driven tests  

---

## 🌐 Environment Support
Set test environment using a .env file or configuration object in playwright.config.ts.

Examples: DEV, STAGING, PROD

---

## ⚙️ CI/CD Integration
Easily integrate into pipelines using:
# GitHub Actions
Supports headless mode, tagged test runs,

---

## 🤝 Contributing
Contributions are welcome. Please fork and submit a PR.

---

## 🙋‍♀️ Maintained by
Vidushi Mishra
🔹 10+ years in QA | Selenium | Playwright | API | CI/CD
🔗 [LinkedIn](https://www.linkedin.com/in/vidushi-mishra-b7b05b81/)

---

## 🛠️ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/vidushiTPG/test-automation.git
cd test-automation

# Install dependencies
npm install

## 🧪 Running Tests
➤ UI Tests
# Run all test 
npx playwright test

➤ Run a Specific Tagged Test
# Run specific test  
npx playwright test TestFileName.spec.ts






