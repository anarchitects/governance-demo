# Governance Demo for `@anarchitects/nx-governance`

This repository is the public demonstration workspace behind the Anarchitects **Architecture Health Assessment** and **Nx Governance** positioning.

It shows how architectural health can be made visible, measured, improved and explained through a repeatable Nx-based governance workflow.

## Why This Demo Exists

An Architecture Health Assessment should not be based on gut feeling alone. This demo shows the evidence chain behind the assessment offer:

1. Nx workspace graph and conformance data
2. Deterministic governance signals
3. Metrics and health scoring
4. Architectural interpretation
5. Prioritized remediation roadmap

The goal is to demonstrate how a codebase can move from unclear structural risk to measurable architectural improvement.

## What This Repo Is

- A practical demo workspace, not the plugin source code.
- A branch-by-branch remediation narrative showing how governance metrics improve over time.
- A reproducible reference for running governance reports through Nx targets.
- A proof asset for the Codebase Governance / Architecture Health Assessment offer.

## Assessment Narrative

The demo intentionally starts from a poor baseline, then applies remediation in stages.

| Stage | Focus | Score |
| --- | --- | --- |
| Baseline | Architectural drift and weak boundaries | `40 (F)` |
| Branch 1 | Structural boundary stabilization | `70 (C)` |
| Branch 2 | Ownership and documentation recovery | `89 (B)` |
| Branch 3 | Dependency complexity reduction | `95 (A)` |

This mirrors the client-facing assessment story:

```text
Measure the current structure -> identify signals -> interpret risk -> remediate -> prove improvement
```

## Plugin Context

`@anarchitects/nx-governance` evaluates Nx workspace structure and reports:

- domain and layer boundary integrity
- dependency complexity and architectural entropy
- ownership coverage
- documentation completeness
- snapshot drift between stages
- AI-ready deterministic payloads for interpretation and recommendations

This workspace uses plugin targets registered in `package.json`, including:

- `repo-health`
- `repo-boundaries`
- `repo-ownership`
- `repo-architecture`
- `repo-snapshot`
- `repo-drift`
- `workspace-graph`
- `repo-ai-scorecard`
- `repo-ai-recommendations`
- `repo-ai-refactoring-suggestions`

## How This Supports the Architecture Health Assessment

The Anarchitects website positions Codebase Governance as an assessment-led offer. This repository provides the technical proof behind that offer.

### What the assessment makes visible

- architecture health score
- boundary leakage
- dependency complexity
- structural hotspots
- ownership/documentation gaps
- drift between stages or snapshots

### What the assessment produces

- Architecture Health Report
- Hotspot & Risk Analysis
- Refactoring Roadmap
- governance rule recommendations
- CI integration opportunities
- AI-ready evidence payloads

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

## Reading the Demo as a Buyer

If you are evaluating the Architecture Health Assessment, read this repo as proof that the offer is grounded in deterministic signals:

- the baseline shows structural risk
- each remediation branch shows a measurable improvement step
- the final scorecard shows how technical signals become executive-readable insight
- the staged narrative demonstrates how assessment findings turn into a roadmap

## Notes

- `workspace-graph` does not support `--output`; redirect stdout to file if needed.
- The canonical baseline snapshot path used in drift comparisons is:
  `.governance-metrics/snapshots/2026-03-20T10-59-26.json`
- This repo intentionally keeps stage artifacts in git for demo clarity.
