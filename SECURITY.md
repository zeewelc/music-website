
# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

- Email: [zeewelc@gmail.com](mailto:zeewelc@gmail.com)
- Do **not** open a public issue.
- Include detailed information such as:
  - Steps to reproduce
  - Affected components (Node.js backend, SQLite database, Angular frontend)
  - Potential impact

We aim to respond within **48 hours** and will work with you to resolve the issue promptly.

## Supported Versions

| Component         | Version Range | Supported |
|------------------|----------------|-----------|
| Node.js Backend  | >=14.x         | ✅         |
| SQLite Database  | >=3.35         | ✅         |
| Angular Frontend | >=12.x         | ✅         |

## Security Best Practices

- Dependencies are monitored using GitHub Dependabot.
- Secrets and credentials are stored securely using GitHub Actions encrypted secrets.
- CI/CD pipelines enforce code linting, unit testing, and static analysis.
- HTTPS is enforced for all client-server communication.
- User input is sanitized to prevent SQL injection and XSS attacks.

## Disclosure Policy

We follow [responsible disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure) guidelines. Public disclosure is permitted only after a fix has been released and verified.

Thank you for helping us keep this project secure!
