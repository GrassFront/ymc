# React Page Replication Task (Google Antigravity Agent)

I have attached a **reference screenshot/design** for this page, along with the **exported CSS for each layer/section** copied directly from Figma. Your task is to **analyze both carefully and replicate the page as accurately as possible** directly in this project, aiming for **100% visual similarity** to the reference — across all breakpoints, not just desktop.

## Attached Reference Material

* **Screenshot(s)** of the full page — desktop, tablet, and mobile frames if available. If only desktop is provided, infer sensible responsive behavior using standard patterns (stacking, collapsing nav, scaling type) rather than leaving mobile/tablet unstyled.
* **CSS layers exported from Figma** for each section — labeled to match the Figma layer/frame name (e.g. `Hero.css`, `FeatureCards.css`, `Footer.css`), provided per breakpoint where available. Use these as the exact source for spacing, sizing, color, and typography values at each breakpoint — do not estimate or round any value that's explicitly given here.
* The **already-built Navbar component** (`src/components/common/Navbar.jsx`) in this project — reuse this as-is at the top of the page, including its existing responsive/collapse behavior. Do not rebuild or modify it unless the design explicitly shows a different navbar state on this page.

## Before You Start Writing Code

* Use **Planning Mode** first: produce a section-by-section to-do list mapping each Figma frame/CSS layer to the component you'll create, before touching any files. Share this plan for confirmation if the workflow allows it.
* Scope your work to this project's folder boundaries only — do not touch files outside `src/components`, `src/pages`, `src/sections`, `tailwind.config.js`, and any config file explicitly relevant to this task.

## Requirements

* Build the page as a composition of **reusable/common React components** suitable for a static React website.
* For each section in the screenshot, cross-reference the matching Figma CSS layer (per breakpoint) and reproduce:

  * Overall layout and structure at every breakpoint
  * Spacing and padding (use exact px/rem values from the CSS layer for each breakpoint, not visual estimation)
  * Heights and widths, including how they change or become fluid across screen sizes
  * Typography — font family, sizes, weights, line heights, letter spacing (per breakpoint if it scales)
  * Colors and opacity (exact hex/rgba from the CSS layer)
  * Borders, border radius, and shadows
  * Icons, icon sizes, and alignment
  * Active/inactive states
  * Hover states where they can be inferred from the design
  * Exact alignment and positioning of every visible element
  * How elements reflow, stack, hide, or resize between breakpoints (e.g. multi-column → single column, horizontal nav → hamburger)

## Styling Approach

* Use **Tailwind CSS as much as possible** for all layout and styling, using responsive prefixes (`sm:` `md:` `lg:` `xl:`) to match each Figma breakpoint frame.
* Map each Figma CSS value to the closest matching Tailwind utility or theme token (see project `tailwind.config.js`) — do not introduce new spacing/breakpoint values if the project's existing scale already covers them.
* Avoid unnecessary custom CSS.
* If Tailwind cannot accurately reproduce a specific value from the Figma CSS layer at a given breakpoint, create minimal custom CSS only for that requirement — do not use Tailwind arbitrary values (`bg-[#...]`, `p-[13px]`) as a substitute for adding a proper token.
* Preserve the **exact values from the attached Figma CSS layers** at every breakpoint. Do not approximate when an exact value is provided.
* Build **mobile-first**: base classes represent the smallest breakpoint, layering `md:`/`lg:` on top for larger screens — not the reverse.

## Component Structure

Break the page into components matching the Figma section/frame names, for example:

```
src/
  components/
    common/
      Navbar.jsx        # already built — reuse
    sections/
      Hero.jsx
      FeatureCards.jsx
      Footer.jsx
  pages/
    HomePage.jsx         # composes the sections above
```

Keep each component modular and maintainable. If a section contains repeated items (cards, list rows, nav items), use a configuration array and map through it rather than duplicating markup.

## Important Rules

1. **Do not redesign or improve the UI** at any breakpoint.
2. **Do not add extra elements, spacing, colors, animations, or styling that are not present in the reference screenshot or CSS layers.**
3. **Do not use placeholder styling or generic page/layout patterns**, including generic "standard" mobile menu patterns not implied by the design.
4. The attached screenshots **and** the attached Figma CSS layers are the **single source of truth** — where they conflict, the CSS layer value wins over visual estimation.
5. Prioritize **pixel-perfect visual accuracy** over simplification, at every breakpoint provided.
6. Use semantic and clean React code.
7. Ensure the page works properly within the existing React project and does not break the Navbar or other existing components.
8. **The page must be fully responsive** — verify correct rendering at common widths (375px, 768px, 1024px, 1440px) in addition to matching the exact reference breakpoints.

## Self-Verification (use browser-in-the-loop)

* After implementing each section, run the local dev server and use browser automation to open the page at 375px, 768px, 1024px, and 1440px widths.
* Take a screenshot at each width and visually diff it against the corresponding attached reference frame — flag and fix any mismatch in spacing, alignment, color, or typography before moving to the next section.
* Do not mark the task complete until all breakpoints have been visually verified this way, not just implemented from code review alone.

## Expected Output

Produce, directly in this project:

1. The complete set of reusable React section components, with responsive classes included.
2. The composed page file that assembles them (including the existing Navbar).
3. Any supporting configuration/data files if required.
4. Minimal custom CSS only if Tailwind is insufficient — clearly commented with which value and breakpoint it's covering.
5. A summary artifact listing dependencies/icons used, and the browser screenshots taken during self-verification at each breakpoint, for me to review against the reference.

Before finalizing, compare the implementation against **both the screenshot and the Figma CSS layers at every breakpoint**, section by section, and refine spacing, sizing, typography, alignment, borders, and colors until the result visually and structurally matches 100% — on mobile, tablet, and desktop. Report back with the verification screenshots and a short summary of any deviations you couldn't resolve and why.
