# ✅ Playwright + TypeScript Automation Framework Requirements

## 📌 Overview

This document outlines the technical requirements for building a robust, scalable, and maintainable **automation framework** using **Playwright with TypeScript**. The framework will support **UI + API testing**, **multi-environment execution**, advanced **reporting**, and be CI/CD-ready.

---

## 🎯 Key Objectives

- Cross-browser and multi-device automated testing
- Scalable and maintainable Page Object Model structure
- Support for UI and API testing
- Reusability, logging, and observability
- Team-friendly CI/CD integration
- Secure data handling and secrets management

---

## 📁 Project Structure

├── tests/
│ ├── e2e/
│ ├── api/
│ └── viewports/
├── pages/
├── fixtures/
├── utils/
├── data/
├── config/
├── logs/
├── reports/
├── .env
├── playwright.config.ts
├── global-setup.ts
├── global-teardown.ts
└── package.json


---

## ✨ Features & Requirements

### ✅ 1. Test Automation Basics
- [x] Playwright with TypeScript
- [x] Page Object Model (POM) with OOP concepts
- [x] Centralized selectors and utilities

---

### 📲 2. Multi-Device Testing
- [x] Desktop
- [x] Tablet
- [x] Mobile
- [x] Run same tests across all viewports

---

### 🌐 3. Cross-Browser Testing
- [x] Chromium
- [x] Firefox
- [x] WebKit

---

### 🧪 4. API Testing
- [x] Integrated REST API test support using Playwright’s `request` context
- [x] JSON schema validation
- [x] Request/response logging

---

### 🔄 5. Retry Mechanism
- [x] Automatic retry of failed tests (configurable via `playwright.config.ts`)
- [x] Capture screenshot/video on retries
- [x] Retry only on specific errors (optional advanced config)

---

### 📁 6. Data-Driven Testing
- [x] Test data via JSON or CSV
- [x] Parameterized tests using `test.describe()`, `test.each()`, or custom logic

---

### 🔐 7. Password Encryption
- [x] Use Node.js crypto module or `dotenv` for secrets
- [x] Encrypt/decrypt password fields safely
- [x] Avoid hardcoding secrets in the codebase

---

### 🌎 8. Multi-Environment Support
- [x] `.env` files for different environments (`.env.dev`, `.env.qa`, `.env.prod`)
- [x] Use `dotenv` or `tsconfig-paths` to manage env-specific data

---

### 📈 9. Reporting
- [x] Allure Report
- [x] HTML Report (built-in with Playwright)
- [x] Screenshot/video capture on failures
- [x] CI-friendly artifacts generation

---

### 🔁 10. CI/CD Integration
- [x] GitHub Actions / GitLab / Azure DevOps pipeline integration
- [x] Docker-ready for test execution
- [x] Headless browser testing
- [x] Retry + artifact upload on failure

---

### 📦 11. Reusability & Utils
- [x] Custom utilities for:
  - Date/time formatting
  - Test data generators (Faker.js)
  - API helpers
  - File uploads
  - DB support (optional)
- [x] Logging utility (`winston` or custom logger)

---

### 🧹 12. Code Quality
- [x] ESLint + Prettier setup
- [x] husky + lint-staged for pre-commit checks
- [x] Git hooks for formatting and type-checking

---

### ⚙️ 13. Parallel Testing
- [x] Parallel test execution (default in Playwright)
- [x] Sharding for large test suites (CI optimization)
- [x] Tag-based test grouping: `@smoke`, `@regression`, `@sanity`, etc.

---

### 🔧 14. Logging
- [x] Structured logs using `winston` or `pino`
- [x] Separate logs per test run
- [x] Logs captured as Allure attachments

---

## 🔖 Tags and Filtering
- [x] Ability to run tests by tag: `npx playwright test --grep @smoke`
- [x] Tags defined using `test.info().annotations`

---

## 📌 Non-Functional Goals
- Maintainable and extensible codebase
- Readable and reusable test logic
- Team-friendly documentation and onboarding

---

## 📚 Documentation to be Provided
- `README.md` for setup and usage
- `CONTRIBUTING.md` for contribution guidelines
- `docs/` folder for:
  - Framework architecture
  - Test writing guidelines
  - CI/CD setup
  - Troubleshooting tips

---

## 📎 Tools & Libraries

| Feature         | Tool              |
|----------------|-------------------|
| Test runner     | Playwright Test   |
| Language        | TypeScript        |
| Reporting       | Allure / HTML     |
| Logging         | Winston / Pino    |
| CI/CD           | GitHub Actions    |
| Data Generator  | Faker.js          |
| Linting         | ESLint            |
| Formatting      | Prettier          |
| Passwords       | dotenv / crypto   |

---

## ✅ Deliverables

- Fully working Playwright framework
- Sample test suite (UI + API)
- Allure + HTML reporting enabled
- `.env` setup for multi-environment
- Parallel execution support
- CI/CD config (e.g., GitHub Actions YAML)
- Documentation

---
### 3. Test Scenarios (Sample)
### 3.1 Page Object Model Class and basic test
**Scenario:** Verify creation of Page class for loign page and create basic test.

**Steps:**

Create POM Class for login page.
Create Tests using Page class and its methods to login.
Log in to Salesforce.
Verify the success of login

### 3.2 Data-Driven Testing
**Scenario:** Verify creation of Salesforce records using different sets of data.

**Steps:**

Retrieve test data from an external source.
For each set of data:
Log in to Salesforce.
Create a new record with the provided data.
Verify the record creation is successful.

### 3.3 Logging
**Scenario:** Validate detailed logging during a complex transaction.

**Steps:**

Initiate a complex transaction in Salesforce.
Perform a series of steps.
Log intermediate results, status, and any errors at each step.
Verify the log file for expected entries and error messages.

### 3.4 Retry Mechanism
**Scenario:** Test automatic retry of a failed Salesforce login.

**Steps:**

Introduce a temporary failure in Salesforce login.
Configure the framework to retry the login.
Verify that the login is successful after the configured retries.


### 3.5 Self-Healing
**Scenario:** Validate self-healing for a changed Salesforce page structure.

**Steps:**

Identify a stable element on a Salesforce page.
Introduce a change in the structure of the identified element.
Execute a scenario that relies on the changed element.
Verify that the framework dynamically adjusts, and the scenario passes.
3.6 Cross-Browser Testing
Scenario: Verify Salesforce application on different browsers.

Steps:

Configure the test to run on Chrome, Firefox, and Safari.
Log in to Salesforce and perform key transactions on each browser.
Verify consistent behavior across different browsers.
3.7 Multiple Environments
Scenario: Test Salesforce functionality in different environments.

Steps:

Configure the test to run in a Salesforce sandbox, developer edition, and production.
Execute test scenarios in each environment.
Verify that the application behaves as expected in different Salesforce environments.
3.8 Password Encryption
Scenario: Securely use an encrypted password for Salesforce login.

Steps:

Encrypt a Salesforce login password using the framework's encryption mechanism.
Log in to Salesforce using the encrypted password.
Verify successful login with the encrypted password.
3.9 Code Quality
Scenario: Enforce coding standards in Salesforce automation scripts.

Steps:

Perform a code review for adherence to coding standards.
Identify and correct any code quality issues.
Use static code analysis tools to ensure code quality.
3.10 CI/CD Integration
Scenario: Integrate Salesforce automation with CI/CD pipeline.

Steps:

Configure the CI/CD pipeline to trigger Salesforce test automation.
Monitor pipeline execution for successful integration.
3.11 Reusable Utilities
Scenario: Validate reuse of utility functions in Salesforce tests.

Steps:

Identify a common functionality shared across multiple tests.
Implement a reusable utility function.
Use the utility function in multiple test scenarios.
3.12 Data Generation
Scenario: Generate dynamic test data for Salesforce testing.

Steps:

Create a test scenario that requires dynamic test data.
Implement a data generation utility.
Execute the test scenario with dynamically generated data.
Verify the correct handling of dynamic data.
3.13 Parallel Testing
Scenario: Execute Salesforce tests concurrently for optimized execution.

Steps:

Identify a suite of test scenarios suitable for parallel execution.
Configure the framework for parallel test execution.
Execute the identified test suite concurrently.
3.14 API Mocking/Testing
Scenario: Mock and test Salesforce API interactions.

Steps:

Identify a Salesforce API used in a test scenario.
Implement a mock for the identified API.
Execute the test scenario, validating interaction with the mock API.
Note:
Adapt these scenarios to match specific Salesforce application and the intricacies of framework.
Regularly update the documentation to reflect changes and additions to features and scenarios.
