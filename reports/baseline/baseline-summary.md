# Stage 0 - Baseline (Intentional Governance Debt)

## Baseline Snapshot Path

`.governance-metrics/snapshots/2026-03-20T10-59-26.json`

This exact snapshot path is the baseline reference for all later `repo-drift` comparisons.

## Workspace Shape

- Projects: 10
- Dependencies: 49

## Health Summary

- Workspace health score: **40** (Grade **F**)
- Hotspots: Architectural Entropy, Dependency Complexity, Domain Integrity, Ownership Coverage, Documentation Completeness

## Metric Scores

- `architectural-entropy`: 4
- `dependency-complexity`: 0
- `domain-integrity`: 57
- `ownership-coverage`: 0
- `documentation-completeness`: 0
- `layer-integrity`: 67

## Violation Mix

- Total violations: 47
- `domain-boundary`: 21
- `layer-boundary`: 16
- `ownership-presence`: 10

## Findings Context

- Cross-domain violations are concentrated in `shop <-> payments/orders` and `shared -> shop/payments/orders` dependencies.
- Layer violations are concentrated in reversed edges such as `data-access -> feature/ui` and `util -> feature/ui`.
- Ownership and documentation are both missing across every project, so accountability and repo context are absent.
- Dependency graph density is intentionally high (`49` dependencies across `10` projects), amplifying entropy.

## Intentional Anti-Patterns Included

- same-layer feature leak (`feature-cart -> feature-checkout`)
- layer reversal (`shop-ui -> feature-cart`, `shop-data-access -> shop-ui` and more)
- cross-domain leaks (`shop -> payments/orders`, `shared -> shop/payments/orders`)
- high fanout and dense graph links from app and shared libraries
- ownership/documentation intentionally absent
