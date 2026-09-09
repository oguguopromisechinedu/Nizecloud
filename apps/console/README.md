# NizeCloud Admin Console

Administrative control plane for NizeCloud.

## Responsibilities

- Platform overview
- Organizations
- Projects
- Users
- Identity and SSO
- Roles and permissions
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

It communicates with NizeCloud backend services through platform APIs.

The console must not contain backend service implementations.

Console
    |
    v
NizeCloud API Gateway
    |
    +---- Platform Services
    |
    +---- Mdano Gateway
              |
              v
            Mdano
