# Devpost Submission Draft — Dapur Hantu (Kiroween 2026, Costume Contest)

> DRAFT — do NOT submit yet. Repo URL and live demo URL are filled in
> once the public GitHub repo + GitHub Pages deploy exist. Final submit
> needs Lisna's approval.

## Title

**Dapur Hantu — Haunted Kitchen**

## Tagline

Indonesian home recipes from a warm haunted kitchen — tell the ghost chef
what's in your pantry, and it finds what you can cook tonight.

## Inspiration

I write Indonesian home recipes (my e-book "Dapur Apple Chery") and I love
Ghibli films — the warm kitchens, the night sky, the friendly spirits.
Dapur Hantu is that feeling as a web app: a haunted kitchen at night, with
a little ghost chef who helps you cook with whatever you already have.

## What it does

- **Pantry matching:** tap the ingredients you have at home (25 pantry
  items) and the 12 recipes re-rank by best match, showing "Cocok X dari
  Y bahan" (matched X of Y key ingredients).
- **Search + category filters:** search by name, or filter by Nasi, Mie,
  Ayam, Sup, Manis, Gorengan, Telur, Sayur.
- **Recipe detail:** every recipe shows ingredients with amounts (ones you
  already have are marked ✓ in green, missing ones ○ in red), 6 cooking
  steps, time, servings, difficulty, a "spook level", and a "Bisikan
  Hantu" (ghost whisper) cooking tip.
- **Kitchen ambience:** an optional sizzling-pan sound, generated live
  with WebAudio — no audio files.
- **Ghibli night theme:** warm lantern light, drifting fog, fireflies,
  a floating ghost chef (hand-drawn SVG), all in pure CSS animation.

## How we built it

- **Spec-driven workflow:** requirements, design, and tasks were written
  first (in `.kiro/specs/dapur-hantu/`, with steering docs in
  `.kiro/steering/`), then the app was built against that spec.
- **Stack:** vanilla HTML + CSS + JavaScript. No framework, no build
  step, no backend — the whole app is static files and runs anywhere,
  including fully offline.
- **Fonts are self-hosted** (Baloo 2 + Nunito, OFL license, in `fonts/`)
  so the site works with zero external requests.
- **12 original recipes** from my e-book "Dapur Apple Chery", each with
  measured ingredients, 6 steps, and a tip.
- **Tested in a real browser** (Chromium, desktop 1280px and mobile
  390px): 16/16 interaction checks pass — ingredient ranking, search,
  category filter, recipe modal, Escape to close, empty state — with
  zero JavaScript errors and zero failed requests.

## Honest note about Kiro

Kiro did **not** write any code in this project. The project was
structured following Kiro's spec-driven workflow (specs + steering docs in
`.kiro/`), and the code was written by my personal AI agent (Muse Spark)
based on that spec. My Kiro account (Free plan) is set up and ready; Kiro
is planned for the next iteration (UI polish, step-by-step cook mode,
recipe photos) with my approval. Nothing about Kiro's role here is
exaggerated.

## Challenges we ran into

- Making the ranking feel right: with one ingredient selected, a recipe
  that needs 4 ingredients should outrank one that needs 6 — so the sort
  weighs missing ingredients, not just matches.
- The full-moon decoration overlapped the title on phones — fixed with a
  mobile layout pass.
- Making the site work fully offline meant self-hosting the fonts instead
  of loading them from a CDN.

## Accomplishments we're proud of

- A complete, working app with zero dependencies and zero failed
  requests — it loads fast anywhere.
- The ingredient-matching interaction actually helps you decide what to
  cook, instead of just listing recipes.
- The haunted-kitchen atmosphere (fog, fireflies, ghost chef) is all
  hand-made CSS/SVG — no images needed.

## What we learned

- Writing the spec first (requirements → design → tasks) made the build
  fast and kept the scope honest.
- Testing in a real browser caught real bugs (mobile layout, missing
  favicon) that unit tests of the data functions never would.

## What's next

- Step-by-step "Masak bareng hantu" cook mode with timers.
- Photos/illustrations for each recipe.
- Saving favourite ingredients (localStorage).
- A Kiro-assisted polish pass (with the owner's approval).

## Built with

HTML, CSS, JavaScript (vanilla, no frameworks). Fonts: Baloo 2 + Nunito
(OFL, self-hosted).

## Links (fill in before submit)

- Live demo: _(GitHub Pages URL — pending repo + deploy)_
- Source code: _(https://github.com/talonelmajakiri/dapur-hantu — pending)_
- Demo video: `dapur-hantu-demo.mp4` in this repo (49.7s, 1280x720,
  screen recording of the real app)
