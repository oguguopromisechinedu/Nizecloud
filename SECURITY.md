# Security

Security-sensitive implementation decisions belong to the engineering phase.

Never commit:

- API keys
- passwords
- private certificates
- tokens
- production credentials
- `.env` files containing secrets

Use `.env.example` as the safe template for local configuration.
