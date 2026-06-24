# AGENTS.md - Rules, Onboarding, and Memory for Agents

## Strict Rules

### Context Window Token Limit

**ALWAYS WARN** the user when the context window exceeds 120,000 tokens for the current task. Model performance degrades sharply at this point.
