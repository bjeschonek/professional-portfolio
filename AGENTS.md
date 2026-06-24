# AGENTS.md - Rules, Onboarding, and Memory for Agents

This document serves 3 purposes. First, to define rules for all agents working within this repository. Second, to onboard new agents by providing context regarding this project. Lastly, to provide a central location where agents can record important information, learnings, and other useful information to avoid repeating the same mistakes. 

This document must be concise to avoid polluting the context window on every turn, but it must also remain complete to allow agents to operate efficiently so that mistakes are not repeated. When updating this document, do so with the guiding principle of progressive disclosure - if content is becoming too verbose, simply move that information to a separate file and link to it from here as long as it is not imperative to include that information on every turn. 

For details regarding the purpose of this project, directory structure, technical stack, required features, and non-functional features, see [SPEC.md](/SPEC.md).

## Strict Rules

### Context Window Token Limit

**ALWAYS WARN** the user when the context window exceeds 120,000 tokens for the current task. Model performance degrades sharply at this point.
