# AGENTS.md - Critical Knowledge for Agents Working on this Repo

This file provides guidance to AI coding agents when working in this repository.

This file serves as your system context, operational constraints, and project source-of-truth. Review this file before analyzing or modifying the codebase.

## Core Development Protocols

### Expectation of Highest Quality Work

- **Software Engineering:** Always follow software engineering best practices.
- **DO NOT VIBE CODE:** Vibe coding is stricly forbidden.
- **Best Practices:** Follow DRY, KISS, and SOLID paradigms. Document everything.

### Code Style & Paradigm

- **Programming Paradigm:** Favor functional, declarative patterns over imperative loops wherever possible.
- **State Management:** Keep state immutable and predictable.
- **Type Safety:** Strict TypeScript enforcement. No implicit any. Use exact interfaces and utility types.

### Performance & Efficiency Targets

- **Time Complexity:** Strive for $O(1)$ or $O(\log n)$ operations for critical paths. Avoid nested $O(n^2)$ loops.
- **Memory Management:** Optimize data structures for low memory footprints (e.g., use circular buffers, lookups via HashMaps/Sets instead of array iterations).
- **Dependencies:** Zero-dependency or low-dependency philosophy. Do not install third-party packages unless absolutely necessary and explicitly approved. Rely on native web APIs or core runtime modules first.

## Operational Workflow & Guardrails

### Step-by-Step Execution Protocol

- **Read and Discover:** Before writing code, locate and read relevant files, schemas, and existing tests. Do not guess exports or API contracts.
- **Plan (Chain of Thought):** State your proposed architecture changes or bug fix steps in a clear markdown summary before editing code.
- **Execute:** Make surgical, minimal edits. Do not rewrite whole files if changing a single logic block suffices.
- **Verify:** Run the test suite immediately after changes. Ensure no regressions occur.

### Context Window Token Limit

**STOP** working on a task if the context window exceeds 120,000 tokens. Agent accuracy degrades sharply at this point. If you are working on a task when the context window reaches this limit, hand off the task to a new agent with a new context window.

### Multi Agent Workflow

- If multiple tasks can be completed simultaneously, use sub-agents to complete the work.
- Do not use multiple agents for overlapping tasks.
- Create worktrees for each sub-agent within the .worktrees/ directory.

### Absolute Boundaries (The "Never" List)

- **NEVER** strip out existing inline comments or documentation blocks unless rewriting the feature entirely.
- **NEVER** placeholders or TODO comments in the code (e.g., // TODO: implement later). Write the complete solution.
- **NEVER** bypass native platform features in favor of external utility libraries (e.g., no lodash if native JS suffices).
- **NEVER** alter the testing framework configurations without explicit instruction.
- **NEVER** make changes to the project without updating all relevant documentation.

## Testing & Verification

### Requirements

- Every bug fix must include a regression test.
- Every new feature must have corresponding unit or integration tests achieving at least 100% coverage.
- Ensure all edge cases (e.g., empty states, math boundary limits, null/undefined handling) throw explicit, readable errors.

## Memory & Context Optimization

- When tracking your progress, maintain an internal state checkpoint.
- If a solution fails multiple times, halt, re-read the relevant source files, challenge your previous assumptions, and pivot to an alternative approach. Do not loop fruitlessly on the same failing implementation.

## Details for Agents Using Skills

### Core Rules

- If a task matches a skill, you MUST invoke it
- Skills are located in `.agents/skills/<skill-name>/SKILL.md`
- Never implement directly if a skill applies
- Always follow the skill instructions exactly (do not partially apply them)

### Intent → Skill Mapping

The agent should automatically map user intent to skills:

- Feature / new functionality → `spec-driven-development`, then `incremental-implementation`, `test-driven-development`
- Planning / breakdown → `planning-and-task-breakdown`
- Bug / failure / unexpected behavior → `debugging-and-error-recovery`
- Code review → `code-review-and-quality`
- Refactoring / simplification → `code-simplification`
- API or interface design → `api-and-interface-design`
- UI work → `frontend-ui-engineering`

### Execution Model

For every request:

1. Determine if any skill applies (even 1% chance)
2. Invoke the appropriate skill using the `skill` tool
3. Follow the skill workflow strictly
4. Only proceed to implementation after required steps (spec, plan, etc.) are complete

### Anti-Rationalization

The following thoughts are incorrect and must be ignored:

- "This is too small for a skill"
- "I can just quickly implement this"
- "I’ll gather context first"

Correct behavior:

- Always check for and use skills first

This ensures OpenCode behaves similarly to Claude Code with full workflow enforcement.

## Orchestration: Personas, Skills, and Commands

This repo has two composable layers. They have different jobs and should not be confused:

- **Skills** (`.agents/skills/<name>/SKILL.md`) — workflows with steps and exit criteria. The _how_. Mandatory hops when an intent matches.
- **Personas** (`agents/<role>.md`) — roles with a perspective and an output format. The _who_.

Composition rule: **the user (or a slash command) is the orchestrator. Personas do not invoke other personas.** A persona may invoke skills.

The only multi-persona orchestration pattern this repo endorses is **parallel fan-out with a merge step** — used by `/ship` to run `code-reviewer`, `security-auditor`, and `test-engineer` concurrently and synthesize their reports. Do not build a "router" persona that decides which other persona to call; that's the job of slash commands and intent mapping.

See [agents/README.md](agents/README.md) for the decision matrix and [references/orchestration-patterns.md](references/orchestration-patterns.md) for the full pattern catalog.
