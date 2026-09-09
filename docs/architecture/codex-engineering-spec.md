# NizeCloud Engineering Specification

## 1. Purpose

NizeCloud is the cloud infrastructure and developer platform of Mendanize Inc.

It provides the common infrastructure layer used by Mendanize Inc. products and internal systems.

NizeCloud is a platform, not a single application.

---

## 2. Core Boundary

NizeCloud owns cloud infrastructure and platform capabilities.

Mdano owns AI infrastructure and AI orchestration.

NizeCloud must not duplicate Mdano's internal AI implementation.

When NizeCloud requires AI capabilities, it must communicate through:

services/mdano-gateway

Conceptual flow:

Application
    |
    v
NizeCloud
    |
    +--> Cloud Services
    |
    +--> Mdano Gateway
              |
              v
            Mdano

---

## 3. Repository Architecture

apps/
    User-facing NizeCloud applications.

services/
    Independent backend platform domains.

packages/
    Shared libraries, SDKs, contracts, clients, and types.

infrastructure/
    Infrastructure definitions and environment configuration.

docs/
    Architecture and engineering documentation.

tests/
    Integration, E2E, and contract testing.

scripts/
    Repository automation.

---

## 4. Core Platform Domains

The initial platform boundaries are:

- API Gateway
- Identity
- Organizations
- Users
- Permissions
- Billing
- Compute
- Storage
- Database
- Cache
- Secrets
- Networking
- Deployments
- Observability
- Notifications
- Mdano Gateway

Each domain must maintain a clear responsibility boundary.

---

## 5. Identity and SSO

NizeCloud provides the centralized identity foundation for Mendanize Inc.

The architecture must support:

- one Mendanize identity
- authentication
- SSO
- organizations
- users
- roles
- permissions
- application access
- service authorization

Individual Mendanize Inc. products retain their own application dashboards.

NizeCloud provides the identity and access foundation rather than replacing those dashboards.

---

## 6. Product Integration

Products should integrate through stable platform APIs.

Preferred model:

Product
    |
    v
NizeCloud API
    |
    +--> NizeCloud services
    |
    +--> Mdano Gateway
              |
              v
            Mdano

Avoid unnecessary direct product-to-product dependencies.

---

## 7. Mdano Gateway

services/mdano-gateway is a controlled integration boundary.

It is responsible for concerns such as:

- authentication
- authorization
- request validation
- API compatibility
- rate limiting
- timeout handling
- retries where appropriate
- usage metering
- error normalization
- version management

It must not contain a copy of Mdano's implementation.

---

## 8. Engineering Principles

Implementations should prioritize:

- clear service ownership
- modular architecture
- strong API contracts
- secure defaults
- least privilege
- tenant isolation
- observability
- auditability
- scalability
- maintainability
- backward compatibility

Avoid premature complexity.

---

## 9. Infrastructure

Infrastructure must remain separated from application business logic.

The infrastructure structure currently provides:

infrastructure/local/
infrastructure/development/
infrastructure/staging/
infrastructure/production/

Infrastructure implementation choices should be documented before introducing major platform dependencies.

---

## 10. Security

Security is a platform-level concern.

The implementation must account for:

- authentication
- authorization
- service identity
- secrets
- encryption
- tenant isolation
- audit logging
- credential rotation
- least privilege
- secure API communication

Never commit secrets or production credentials.

---

## 11. API Principles

APIs should have:

- explicit contracts
- versioning
- authentication
- authorization
- validation
- consistent errors
- documented request/response models

Breaking changes require deliberate versioning.

---

## 12. Observability

Platform services should eventually expose:

- structured logs
- metrics
- distributed traces
- health checks
- audit events
- service status
- operational telemetry

Observability should be designed into services rather than added after deployment.

---

## 13. Testing

The repository provides:

tests/integration/
tests/e2e/
tests/contract/

Service implementations should eventually provide appropriate automated tests.

API contracts between independently deployed components should be protected by contract testing.

---

## 14. Rules for Codex

Before implementing a service, inspect the existing architecture and documentation.

Do not:

- collapse all services into one application
- duplicate Mdano
- bypass mdano-gateway
- create unnecessary direct product-to-product dependencies
- put unrelated business logic into shared packages
- expose secrets
- hard-code production credentials
- introduce major infrastructure dependencies without documenting them
- replace the established repository architecture without justification

Prefer incremental implementation.

When architectural ambiguity exists, document the decision before making a large structural change.

---

## 15. Current Phase

The repository is currently in:

PHASE 1 — ARCHITECTURE AND SCAFFOLD

The next engineering phase will implement the platform incrementally.

The scaffold itself must remain clean, understandable, and extensible.

---

## 16. Definition of a Good Implementation

A good NizeCloud implementation should make it possible for Mendanize Inc. products to consume shared infrastructure through stable platform interfaces while keeping product-specific operations independent.

NizeCloud provides the cloud platform.

Mdano provides AI infrastructure.

Products provide their own domain-specific applications and dashboards.

These boundaries must remain explicit.
