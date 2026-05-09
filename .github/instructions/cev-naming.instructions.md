---
description: 'Use when naming, renaming, or reviewing UI component and layout names. Enforces the CEV (Context–Element–Variant) naming convention for all React components in src/components and src/layouts.'
applyTo: "{'src/components/**','src/layouts/**'}"
---

# CEV Component Naming Convention

All UI components and layouts must follow the **CEV** pattern:

```
<Context><Element><Variant?>
```

## Tokens

| Token   | Role                                                                       | Required     |
| ------- | -------------------------------------------------------------------------- | ------------ |
| Context | Domain scope (`Article`, `Product`, `Navigation`, `Checkout`)              | Recommended  |
| Element | Concrete UI role or structure (`Card`, `List`, `Form`, `Menu`, `Carousel`) | **Required** |
| Variant | Stable, meaningful differentiation (`Compact`, `Featured`, `Inverted`)     | Optional     |

## Rules

- Compose in strict order: **Context → Element → Variant**. Never invert.
- Context is domain scope, not visual style. `ArticleCard`, not `DarkCard`.
- Variant only for stable recurring differences, not state or one-off tweaks.
- Use **singular** for single-instance components (`ArticleCard`), **plural** for collections (`ArticlesList`).
- Multi-word tokens are allowed when a single word loses domain meaning: `ScreenReaderText`, `OrderHistoryList`.

## Valid Examples

- `ArticleCard` — single article card
- `ArticleCardCompact` — stable small variant of the article card
- `ArticlesList` — collection of articles
- `ProductsList` — collection of products
- `FaqAccordion` — accordion UI for a FAQ domain
- `NavigationMenu` — menu scoped to navigation domain
- `ScreenReaderText` — multi-word token for accessibility utility
- `Header`, `Footer` — context omission for globally obvious layout primitives

## Validation Checklist

Before confirming any component name:

- [ ] Is Element clear and concrete?
- [ ] Does Context represent domain scope (not visual style)?
- [ ] Is Variant truly meaningful and stable?
- [ ] Is the order exactly Context → Element → Variant?
- [ ] Does the name improve searchability in the codebase?
