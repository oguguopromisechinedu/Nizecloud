# NizeCloud Admin Console

The NizeCloud Admin Console is the administrative interface for managing the NizeCloud platform.

## Responsibilities

- Platform overview
- Organizations
- Projects
- Users
- Identity and SSO
- Permissions
- Compute
- Storage
- Databases
- Networking
- Deployments
- Observability
- Billing
- Usage
- Secrets
- Notifications
- System settings

## Architecture

The console is a frontend application.

It must not contain backend service implementations.

The console will communicate with NizeCloud APIs through defined API clients.

Future integration:

Console
  |
  v
NizeCloud API Gateway
  |
  +--> Platform Services
  |
  +--> Mdano Gateway
