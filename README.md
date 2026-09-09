# NizeCloud

NizeCloud is the cloud infrastructure and developer platform for Mendanize Inc.

## Platform responsibilities

- Identity and SSO
- Organizations and access control
- API gateway
- Compute
- Storage
- Databases
- Cache
- Secrets
- Networking
- Deployments
- Observability
- Developer tooling
- Mdano integration gateway

## Architecture

NizeCloud provides the infrastructure and platform layer.

Mdano remains the dedicated AI infrastructure and orchestration layer.

Applications consume NizeCloud services through defined APIs rather than coupling directly to internal service implementations.

## Repository structure

- `apps/` — NizeCloud user-facing applications
- `services/` — backend platform services
- `packages/` — shared libraries and SDKs
- `infrastructure/` — infrastructure definitions
- `docs/` — architecture and engineering documentation
- `tests/` — integration, E2E, and contract testing
- `scripts/` — repository automation

## Current phase

**Phase 1 — Architecture & Scaffold**

No production service implementation is included yet.
