# @jlopvil/mui-kit migration

## Scope and compatibility

This inventory covers authored UI under `src/`. `@jlopvil/mui-kit@0.2.0` is installed from npm and imported only from its public root entrypoint. To satisfy its peer contract without duplicate React or MUI copies, MUI and MUI Icons were upgraded from 5.18 to 7.x; React 18.3 and Emotion 11.14 remain compatible. Next.js is not a library peer.

The verified root API exports `Button`, `IconButton`, `Surface`, `SelectField`, `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions`, `Section`, `Alert`, `Checkbox`, `Container`, `Grid`, `Link`, `RadioGroup`, `Stack`, `TextField`, `Typography`, `MyUiProvider`, `MyUiInitColorSchemeScript`, `createMyUiTheme`, public theme tokens/helpers, and their public prop/types contracts.

## Inventory and migration order

Usage counts are JSX occurrences before this migration. The table is ordered from lower to higher risk.

| Current component                                                 | @jlopvil/mui-kit equivalent | Classification             | Usage count | Risk   |
| ----------------------------------------------------------------- | --------------------------- | -------------------------- | ----------: | ------ |
| MUI `Alert`                                                       | `Alert`                     | DIRECTLY_MIGRATABLE        |           3 | Low    |
| MUI `Button`                                                      | `Button`                    | DIRECTLY_MIGRATABLE        |           7 | Low    |
| MUI `Checkbox`                                                    | `Checkbox`                  | DIRECTLY_MIGRATABLE        |           1 | Low    |
| MUI `Container`                                                   | `Container`                 | DIRECTLY_MIGRATABLE        |           8 | Low    |
| MUI `IconButton`                                                  | `IconButton`                | DIRECTLY_MIGRATABLE        |          10 | Low    |
| MUI `Link`                                                        | `Link`                      | DIRECTLY_MIGRATABLE        |           1 | Low    |
| MUI `Stack`                                                       | `Stack`                     | DIRECTLY_MIGRATABLE        |           1 | Low    |
| MUI `TextField`                                                   | `TextField`                 | DIRECTLY_MIGRATABLE        |           6 | Low    |
| MUI `Typography`                                                  | `Typography`                | DIRECTLY_MIGRATABLE        |          95 | Low    |
| MUI v5 `Grid` API                                                 | Library `Grid` (MUI v7 API) | MIGRATABLE_WITH_ADAPTATION |          21 | Medium |
| MUI `Paper`                                                       | `Surface`                   | MIGRATABLE_WITH_ADAPTATION |           8 | Medium |
| MUI `Select` + `MenuItem`                                         | `SelectField`               | MIGRATABLE_WITH_ADAPTATION |           1 | Medium |
| MUI `Box`                                                         | None                        | NO_EQUIVALENT              |          91 | Medium |
| MUI `Divider`, `Fade`, `Slide`, navigation/list/card primitives   | None                        | NO_EQUIVALENT              |    Multiple | Medium |
| `Section`, `Header`, `Footer`, quote/contact/product compositions | Partial or none             | PROJECT_SPECIFIC           |    Multiple | High   |

## First migration

The low-risk components above now import from `@jlopvil/mui-kit`. Existing labelled icon buttons satisfy the library accessibility contract. Grid remains on MUI `GridLegacy` so the required peer upgrade does not change existing layout behavior. No local component became unused or was deleted.

## Second-phase candidates

Convert `GridLegacy` layouts to the MUI 7/library `Grid` size API with visual regression checks; evaluate simple `Paper` uses against `Surface`; replace the controlled quote select with `SelectField`; and assess provider/theme adoption separately.
