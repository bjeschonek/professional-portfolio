# AGENTS.md - Rules, Onboarding, and Memory for Agents

This document defines rules for agents working within this repository. It is a resource for new agents to get up to speed on this project. Most importantly, it serves as a central location for agents to record important information and learnings to avoid repeating mistakes.

This document is both concise and complete. Do not waste tokens by placing unecessary information here. When adding to this document, do so with the principle of progressive disclosure. If content is verbose or does not need to be included in context on every turn, move that information to a skill file.

For details regarding the purpose of this project, directory structure, technical stack, required features, and non-functional features, see [SPEC.md](/SPEC.md).

## Strict Rules

### Context Window Token Limit

**ALWAYS WARN** the user when the context window exceeds 120,000 tokens for the current task. Model performance degrades sharply at this point.
