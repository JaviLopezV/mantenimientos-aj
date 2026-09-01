# @jlopvil/mui-kit gaps

## Box

### Current project requirement

Polymorphic responsive layout across headers, page shells, sections, lists and inline elements, with extensive `sx` usage.

### Current library API

`Box` is used internally but is not publicly exported. `Section` always adds semantic structure and spacing.

### Missing API

A neutral polymorphic MUI system primitive.

### Proposed solution

Publicly reexport MUI `Box`, consistent with the existing transparent primitive policy.

## Grid migration compatibility

### Current project requirement

Existing layouts use the MUI 5 `item`, `xs`, `sm`, and `md` Grid contract and must retain exact responsive behavior.

### Current library API

The public `Grid` is MUI 7 Grid and uses the `size` API.

### Missing API

There is no compatibility bridge for incremental migration of legacy Grid layouts.

### Proposed solution

Document a consumer migration recipe from `GridLegacy` to `Grid`. Do not add a legacy abstraction to the library; consumers should migrate layout-by-layout with visual tests.

## Common MUI primitives

### Current project requirement

The application repeatedly uses `Divider`, `Paper`, `Fade`, `Slide`, cards, lists and navigation primitives.

### Current library API

`Surface` partially covers Paper treatments, but the remaining primitives have no public equivalent.

### Missing API

Central import paths or reusable styling for genuinely shared primitives.

### Proposed solution

Audit cross-project repetition first. Transparently reexport only primitives governed by shared theme defaults; keep animation and business/navigation compositions in the app.
