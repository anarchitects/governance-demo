# Governance Demo for `@anarchitects/nx-governance`

This repository is a standalone Nx workspace that demonstrates governance remediation in stages using the installed `@anarchitects/nx-governance` plugin targets.

## What This Repo Is

- A practical demo workspace, not the plugin source code.
- A branch-by-branch remediation narrative showing how governance metrics improve over time.
- A reproducible reference for running governance reports through Nx targets.

## Plugin Context

`@anarchitects/nx-governance` evaluates Nx workspace structure and reports:

- domain and layer boundary integrity
- dependency complexity and architectural entropy
- ownership coverage
- documentation completeness
- snapshot drift between stages

This workspace uses plugin targets registered in `package.json` (`repo-health`, `repo-snapshot`, `repo-drift`, `workspace-graph`, `repo-ai-scorecard`, etc.).

## Demo Intent and Purpose

The demo intentionally starts from a poor baseline, then applies three remediation phases to show measurable change:

1. Structural boundary stabilization
2. Ownership and documentation recovery
3. Dependency complexity reduction

The goal is to make governance outcomes visible, auditable, and easy to replay from git branches.

## Branch Model

- `main`: initial setup with governance plugin installed
- `stage-0-baseline`: intentionally degraded architecture + baseline artifacts
- `stage-1-boundary-stabilization`: cross-domain and layer fixes
- `stage-2-ownership-docs`: metadata coverage recovery
- `stage-3-dependency-complexity`: fanout reduction + final packaging

## Current Score Progression

- Baseline: `40 (F)`
- Branch 1: `70 (C)`
- Branch 2: `89 (B)`
- Branch 3: `95 (A)`

Detailed stage summaries live under `reports/*/stage-summary.md`.

## Repository Layout

- `tools/governance/profiles/angular-cleanup.json`: governance profile used by targets
- `tools/governance/eslint/dependency-constraints.mjs`: shared dep-constraint source for governance/ESLint alignment
- `reports/baseline`: baseline outputs and snapshot reference
- `reports/branch-1`, `reports/branch-2`, `reports/branch-3`: per-stage snapshot, drift, health, and summary artifacts
- `docs/walkthrough.md`: step-by-step branch narrative and command flow

## Usage

Run all commands from workspace root.

### Baseline

```bash
yarn nx workspace-graph > reports/baseline/workspace-graph.txt
yarn nx repo-snapshot --output=json > reports/baseline/baseline-snapshot.json
yarn nx repo-health --output=json > reports/baseline/baseline-health-report.json
```

### Branch 1

```bash
yarn nx repo-snapshot --output=json > reports/branch-1/branch-1-snapshot.json
yarn nx repo-drift --baseline=.governance-metrics/snapshots/2026-03-20T10-59-26.json --output=cli > reports/branch-1/branch-1-drift-report.txt
yarn nx repo-health --output=json > reports/branch-1/branch-1-health-report.json
```

### Branch 2

```bash
yarn nx repo-snapshot --output=json > reports/branch-2/branch-2-snapshot.json
yarn nx repo-drift --baseline=.governance-metrics/snapshots/2026-03-20T10-59-26.json --output=cli > reports/branch-2/branch-2-drift-report.txt
yarn nx repo-health --output=json > reports/branch-2/branch-2-health-report.json
```

### Branch 3

```bash
yarn nx repo-snapshot --output=json > reports/branch-3/branch-3-snapshot.json
yarn nx repo-drift --baseline=.governance-metrics/snapshots/2026-03-20T10-59-26.json --output=cli > reports/branch-3/branch-3-drift-report.txt
yarn nx repo-health --output=json > reports/branch-3/branch-3-health-report.json
yarn nx repo-ai-scorecard --output=json > reports/branch-3/branch-3-scorecard.json
```

## Notes

- `workspace-graph` does not support `--output`; redirect stdout to file if needed.
- The canonical baseline snapshot path used in drift comparisons is:
  `.governance-metrics/snapshots/2026-03-20T10-59-26.json`
- This repo intentionally keeps stage artifacts in git for demo clarity.
