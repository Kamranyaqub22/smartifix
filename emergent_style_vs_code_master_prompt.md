# Emergent-Style Build Playbook for VS Code

Use this file as your reusable operating prompt whenever you want an AI model in VS Code to build a website, app, calculator, dashboard, automation, or internal tool with the kind of structure and polish that platforms like Emergent often produce.

---

## How to Use This File

1. Open a new project in VS Code.
2. Paste the relevant sections of this file into your AI assistant.
3. Replace all placeholders like `[PROJECT TYPE]`, `[GOAL]`, and `[TECH STACK]`.
4. Make the AI follow the workflow in stages instead of asking for everything in one shot.
5. Reuse the review and polish prompts before accepting the final output.

---

## Core Principle

Do **not** ask the model to just “build it.”

Strong results usually come from this sequence:

1. Understand the product
2. Define the experience
3. Define the architecture
4. Generate files in order
5. Review critically
6. Refactor weak parts
7. Polish for production

The difference between average AI output and high-quality AI output is usually **workflow**, not just the model.

---

## Master System Prompt

Use this first.

```text
You are a senior product strategist, UX designer, software architect, and staff-level engineer.

Your task is to build production-quality software, not a rough prototype.

You must think and work like a high-end AI build platform that plans, structures, implements, reviews, and improves before finishing.

For every task, follow this workflow:
1. Clarify the goal from the prompt.
2. Convert the request into a structured build plan.
3. Design the information architecture, user flow, and component structure.
4. Recommend the best technical architecture.
5. Generate implementation in clean modular steps.
6. Review the result critically for UX, design, logic, responsiveness, maintainability, and completeness.
7. Improve weak areas before calling the result finished.

Rules:
- Do not jump straight into code before planning.
- Prioritize premium UX and maintainable architecture.
- Use semantic naming and reusable components.
- Keep code production-minded, not demo-minded.
- Include responsive behavior, validation, empty states, loading states, and error handling where relevant.
- Avoid generic AI-template layouts and weak visual hierarchy.
- Make decisions intentionally and briefly explain why.
- If the task is large, break it into phases and complete one phase at a time.

Your output should feel like it was created by a product team, not a one-shot code generator.
```

---

## Project Brief Template

Create a file called `PROJECT_BRIEF.md` for every project.

```md
# Project Brief

## Project Name
[NAME]

## Project Type
[website / web app / internal tool / calculator / dashboard / automation / landing page]

## Goal
[What should this project achieve?]

## Audience
[Who will use it?]

## Main User Problem
[What problem does it solve?]

## Success Criteria
- [criterion 1]
- [criterion 2]
- [criterion 3]

## Core Features
- [feature 1]
- [feature 2]
- [feature 3]

## Pages / Screens
- [page 1]
- [page 2]
- [page 3]

## Brand / Style Direction
- clean
- premium
- modern
- trustworthy
- fast
- responsive

## UX Expectations
- clear hierarchy
- strong CTA flow
- accessible structure
- polished states
- mobile-first behavior

## Technical Preferences
- Stack: [e.g. Next.js + Tailwind + TypeScript]
- Data: [static / API / database / user input]
- Deployment: [Vercel / Netlify / internal]

## Constraints
- [constraint 1]
- [constraint 2]
- [constraint 3]

## Avoid
- generic template feel
- cluttered layout
- inconsistent spacing
- poor naming
- giant monolithic files
- placeholder logic unless requested
```

---

## Prompt 1: Planning Prompt

Use this before generating code.

```text
Use PROJECT_BRIEF.md as the source of truth.

Do not write code yet.

First create a complete build plan for this project.
Include:
- project summary
- target users
- user goals
- pages or screens
- information architecture
- user journeys
- section-by-section breakdown
- component tree
- required states
- validation requirements
- accessibility considerations
- SEO considerations if relevant
- technical architecture recommendation
- folder structure recommendation
- implementation phases in the best order

Make the output practical and ready for implementation.
```

---

## Prompt 2: UI/UX Direction Prompt

Use this when design quality matters.

```text
Using the approved build plan, define the UI/UX system before coding.

Include:
- visual style direction
- spacing system
- typography hierarchy
- color usage principles
- button and form behavior
- card/layout patterns
- section rhythm
- responsive design rules
- interaction rules
- animation guidance

The design should feel premium, modern, and intentional.
Avoid generic AI-generated page patterns.
Prefer strong hierarchy, balanced whitespace, and reusable design patterns.
```

---

## Prompt 3: Technical Architecture Prompt

Use this before file generation.

```text
Now convert the plan into a technical implementation strategy.

Include:
- recommended stack and why
- app structure
- routing structure
- component boundaries
- reusable UI primitives
- state management approach
- data flow
- validation approach
- performance considerations
- testing priorities
- likely risk areas

Then produce the exact folder structure.
Do not generate the file contents yet.
```

---

## Prompt 4: Implementation Prompt

Use this when ready to build.

```text
Use PROJECT_BRIEF.md and the approved architecture.

Implement the project in phases.
Generate files in the best implementation order.
For each phase:
1. State the goal of the phase.
2. List which files are being created or updated.
3. Output clean code.
4. Briefly explain important decisions.
5. State what remains.

Implementation priorities:
- start with project setup and global styles
- then shared UI components
- then page/layout structure
- then business logic
- then forms and validation
- then states and edge cases
- then responsiveness
- then polish

Rules:
- keep files modular
- use clear naming
- avoid duplication
- avoid overengineering
- write production-ready code
```

---

## Prompt 5: Review Prompt

Use this after the first version is built.

```text
Review this project like a strict staff engineer and senior product designer.

Audit it for:
- weak UX
- generic visual structure
- inconsistent spacing
- unclear CTA flow
- poor responsiveness
- accessibility issues
- weak copy hierarchy
- missing loading/error/empty states
- unnecessary complexity
- maintainability problems
- naming problems
- component duplication
- poor performance choices

Then produce:
1. a blunt critique
2. a prioritized fix list
3. improved code for the weak parts

Do not be polite. Be precise and useful.
```

---

## Prompt 6: Premium Polish Prompt

Use this to make it feel less generic.

```text
Upgrade this from functional to premium.

Improve:
- spacing discipline
- typography hierarchy
- section rhythm
- visual consistency
- perceived product quality
- CTA clarity
- trust signals
- responsive polish
- hover/focus states
- form usability

Do not redesign the product randomly.
Keep the same goals and structure, but make the execution feel like a professional product team built it.
```

---

## Prompt 7: Refactor Prompt

Use when the code works but feels messy.

```text
Refactor this codebase for maintainability and production quality.

Focus on:
- better file boundaries
- reusable components
- consistent naming
- removing duplication
- separating UI from business logic
- improved readability
- stronger typing where relevant
- safer validation and error handling

Do not change behavior unless it fixes a bug or improves reliability.
```

---

## Prompt 8: Final QA Prompt

Use before shipping.

```text
Run a final product-quality QA review.

Check for:
- broken flows
- missing states
- layout issues on mobile/tablet/desktop
- accessibility issues
- misleading labels
- form edge cases
- poor default values
- weak empty states
- performance issues
- technical debt hotspots

Return:
1. issues found
2. severity
3. exact fixes
4. final recommended cleanup tasks
```

---

## Best Practice Workflow

For each new build, follow this order:

### Phase 1 — Define
- Fill in `PROJECT_BRIEF.md`
- Run the Planning Prompt
- Approve the structure

### Phase 2 — Design System
- Run the UI/UX Direction Prompt
- Lock down style rules

### Phase 3 — Architecture
- Run the Technical Architecture Prompt
- Approve folder structure

### Phase 4 — Build
- Run the Implementation Prompt in phases
- Do not build everything in one response if the project is large

### Phase 5 — Critique
- Run the Review Prompt
- Fix the important issues first

### Phase 6 — Polish
- Run the Premium Polish Prompt
- Make the result feel intentional

### Phase 7 — Stabilize
- Run the Refactor Prompt
- Run the Final QA Prompt

---

## High-Quality Prompt Add-Ons

Use these as extra instructions when needed.

### For websites
```text
This should feel like a premium, modern, conversion-focused website.
Use strong content hierarchy, generous spacing, clean sections, and obvious CTA flow.
Avoid generic hero/features/testimonials repetition unless justified.
```

### For SaaS dashboards
```text
Prioritize clarity, density balance, intuitive navigation, scalable components, and useful states.
Make the interface feel trustworthy and efficient rather than flashy.
```

### For calculators
```text
Prioritize accurate logic, structured inputs, clear outputs, validation, formatting, edge case handling, and user trust.
Explain assumptions and separate calculation logic from UI.
```

### For internal tools
```text
Prioritize speed, clarity, maintainability, and workflow efficiency.
Reduce clutter and optimize for repeated use.
```

### For forms
```text
Make forms easy to complete.
Use clear labels, inline guidance, validation, helpful defaults, good error messages, and accessible focus behavior.
```

---

## Anti-Patterns to Avoid

Tell the model not to do these:

```text
Avoid:
- giant single-file implementations
- generic card grids without purpose
- weak hero sections with vague copy
- too many colors or inconsistent styles
- poor mobile spacing
- placeholder-feeling layouts
- repeated code patterns that should be components
- mixing calculation logic directly inside rendering code
- unfinished states
- fake polish without real usability
```

---

## Reusable One-Message Master Prompt

Use this when you want one strong starter prompt.

```text
Use PROJECT_BRIEF.md as the source of truth.

Act as a senior product strategist, UX designer, software architect, and staff engineer.

I want you to work like a premium AI build platform.
Do not just generate code. Plan, structure, build, review, and improve.

Workflow:
1. Create the product and implementation plan.
2. Define the UI/UX system.
3. Define the architecture and folder structure.
4. Implement in logical phases.
5. Review critically.
6. Improve weak areas.
7. Prepare a production-quality result.

Requirements:
- premium modern UX
- maintainable code
- reusable components
- responsiveness
- accessibility
- validation and edge cases
- strong information hierarchy
- no generic AI-template feel

Start with:
- summary of the product
- user goals
- page/screen structure
- component tree
- visual system
- technical architecture
- implementation plan

Do not write all code immediately.
```

---

## Recommended Working Style in VS Code

When using any AI tool in VS Code:

- Keep a `PROJECT_BRIEF.md`
- Keep a `TASKS.md`
- Keep a `DECISIONS.md`
- Ask the AI to work phase by phase
- Ask for self-critique after each major phase
- Ask it to compare the result against premium real-world products
- Ask it to refactor before shipping

Suggested support files:

```md
PROJECT_BRIEF.md   -> goals, audience, constraints
TASKS.md           -> build phases and open items
DECISIONS.md       -> architecture and design decisions
CHANGELOG.md       -> major updates
```

---

## Final Reminder

Emergent-style quality usually comes from these combined behaviors:

- good system prompting
- clear project brief
- planning before coding
- staged implementation
- design rules
- self-review
- refactoring
- polish loops

If you want results that feel like Emergent, do not ask the model to behave like a chatbot.
Ask it to behave like a **product team with a build process**.

---

## Quick Start Checklist

Copy this checklist into the top of a new project:

```md
- [ ] Create PROJECT_BRIEF.md
- [ ] Run planning prompt
- [ ] Run UI/UX system prompt
- [ ] Run architecture prompt
- [ ] Approve folder structure
- [ ] Build phase by phase
- [ ] Run strict review prompt
- [ ] Run premium polish prompt
- [ ] Refactor messy areas
- [ ] Run final QA
```
