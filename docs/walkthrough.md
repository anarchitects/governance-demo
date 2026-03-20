# Governance Demo Walkthrough

This demo evolves across four linear branches in one Nx workspace using installed `@anarchitects/nx-governance` targets.

## Branch Order and Goals

1. `stage-0-baseline`
- Intentionally poor architecture/governance baseline.
- Captures baseline reports and baseline snapshot path used for all drift comparisons.

2. `stage-1-boundary-stabilization`
- Fixes structural violations first (domain and layer).
- Leaves ownership/documentation weak.

3. `stage-2-ownership-docs`
- Raises ownership and documentation coverage above 70%.
- Keeps boundary metrics stable.

4. `stage-3-dependency-complexity`
- Reduces fanout/dependency complexity without reintroducing structural violations.
- Produces optional AI scorecard artifact.

## Expected Score Progression

- Baseline: **40 (F)**
- Branch 1: **70 (C)**
- Branch 2: **89 (B)**
- Branch 3: **95 (A)**

## Canonical Baseline Snapshot

- `.governance-metrics/snapshots/2026-03-20T10-59-26.json`

Use this exact path as `--baseline` for drift in Branches 1-3.

## Reproducible Commands

Run from workspace root.

### Baseline stage

```bash
yarn nx workspace-graph > reports/baseline/workspace-graph.txt
yarn nx repo-snapshot --output=json > reports/baseline/baseline-snapshot.json
yarn nx repo-health --output=json > reports/baseline/baseline-health-report.json
```

### Branch 1 (structural boundary stabilization)

```bash
yarn nx repo-snapshot --output=json > reports/branch-1/branch-1-snapshot.json
yarn nx repo-drift --baseline=.governance-metrics/snapshots/2026-03-20T10-59-26.json --output=cli > reports/branch-1/branch-1-drift-report.txt
yarn nx repo-health --output=json > reports/branch-1/branch-1-health-report.json
```

### Branch 2 (ownership and documentation recovery)

```bash
yarn nx repo-snapshot --output=json > reports/branch-2/branch-2-snapshot.json
yarn nx repo-drift --baseline=.governance-metrics/snapshots/2026-03-20T10-59-26.json --output=cli > reports/branch-2/branch-2-drift-report.txt
yarn nx repo-health --output=json > reports/branch-2/branch-2-health-report.json
```

### Branch 3 (dependency complexity reduction)

```bash
yarn nx repo-snapshot --output=json > reports/branch-3/branch-3-snapshot.json
yarn nx repo-drift --baseline=.governance-metrics/snapshots/2026-03-20T10-59-26.json --output=cli > reports/branch-3/branch-3-drift-report.txt
yarn nx repo-health --output=json > reports/branch-3/branch-3-health-report.json
yarn nx repo-ai-scorecard --output=json > reports/branch-3/branch-3-scorecard.json
```

## Verification Checklist

- Baseline has poor results across structural + ownership/docs + complexity dimensions.
- Branch 1 removes structural violations versus baseline.
- Branch 2 raises ownership/docs to >=70% while structural metrics stay stable.
- Branch 3 improves dependency complexity and retains structural correctness.
