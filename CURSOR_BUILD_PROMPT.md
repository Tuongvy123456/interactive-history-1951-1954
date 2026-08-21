# CURSOR BUILD PROMPT — Historical Interactive Landing Page 1951–1954

## 0. ROLE

You are a senior Creative Frontend Engineer and Interactive Experience Designer.

Build a premium, cinematic, interactive historical landing page about the Vietnamese historical period **1951–1954**, the resistance war against French colonial forces, culminating in the **Điện Biên Phủ victory**.

The existing project uses:

- React
- Vite

Keep the existing React + Vite architecture.


The experience should feel like an **interactive historical documentary**, not a normal corporate landing page and not a generic AI-generated website.

---

# 1. PRIMARY OBJECTIVE

Create a visually impressive long-scroll landing page where the user feels that they are **travelling through history from 1951 to 1954**.

The core storytelling sequence is:

```text
1951
Đại hội II / Chiến dịch Hòa Bình
        ↓
1952
Chiến dịch Tây Bắc
        ↓
1953
Đông Xuân 1953–1954 / Thượng Lào
        ↓
1954
Điện Biên Phủ
        ↓
07.05.1954
Victory
```

The website should communicate history through:

- historical photographs
- maps
- animated campaign routes
- typography
- timeline
- cinematic transitions
- parallax
- depth
- selective 3D
- smooth scrolling

The user should understand the historical progression even if they do not read every paragraph.

---

# 2. DESIGN DIRECTION

## Visual keywords

The visual language must feel:

- historical
- cinematic
- editorial
- documentary
- military-map inspired
- premium
- minimal
- modern
- restrained
- emotionally powerful

Avoid making it look like:

- a generic SaaS landing page
- a generic AI website
- a gaming website
- excessive glassmorphism
- excessive neon
- excessive gradients
- random 3D objects
- excessive rounded cards
- random floating elements
- excessive glowing effects

Do not use unnecessary decorative UI.

Every visual effect should support the historical storytelling.

---

# 3. COLOR SYSTEM

Use a historical-modern palette.

```text
Background:
#E8E1D3
Warm parchment

Primary:
#26382D
Deep military green

Secondary:
#5E211B
Dark historical red

Accent:
#B9975B
Aged gold

Text:
#20211E
Charcoal
```

Suggested usage:

- parchment → main background
- deep green → major sections / navigation / map background
- dark red → important historical emphasis
- aged gold → timeline, dates, highlights
- charcoal → body text

Do not make the entire website red/yellow.

The result should feel like an archival museum exhibition redesigned for the modern web.

---

# 4. TYPOGRAPHY

Use an editorial typography system.

Recommended:

- Display font: elegant serif or historical editorial serif
- Body font: clean modern sans-serif

Typography hierarchy:

```text
Hero title
Very large
High contrast

Year
Large serif

Section title
Large editorial

Date
Small uppercase / tracking

Body
Readable modern sans-serif
```

Important dates should feel like archival labels.

Example:

```text
1954

ĐIỆN BIÊN PHỦ

13.03.1954 — 07.05.1954
```

Avoid excessive font weights.

---

# 5. IMAGE DIRECTION

Use authentic historical photographs and maps whenever available.

Expected image categories:

## 1951

- Đại hội Đảng lần II năm 1951
- Chủ tịch Hồ Chí Minh / lãnh đạo tại Đại hội
- Chiến dịch Hòa Bình
- Bộ đội / dân công / hậu cần
- bản đồ Chiến dịch Hòa Bình

## 1952

- Chiến dịch Tây Bắc
- bộ đội hành quân
- vượt sông / vượt đèo
- nghiên cứu sa bàn
- các trận đánh
- bản đồ Chiến dịch Tây Bắc

## 1953

- Đông Xuân 1953–1954
- Thượng Lào
- bản đồ chiến lược Đông Dương
- bộ đội hành quân
- hậu cần

## 1954

- Điện Biên Phủ
- kéo pháo
- giao thông hào
- pháo binh
- bộ đội tiến công
- bản đồ Điện Biên Phủ
- ảnh chiến thắng ngày 07.05.1954
- cờ chiến thắng

IMPORTANT:

If historical images are already present in:

```text
public/historical/
```

use those files.

Expected structure:

```text
public/
└── historical/
    ├── 1951/
    ├── 1952/
    ├── 1953/
    └── 1954/
```

Do not invent image URLs.

Do not use random stock photos.

Do not use fake historical-looking AI images if authentic assets are available.

If an image is missing, create a clear asset reference/fallback component instead of silently using an unrelated image.

---

# 6. IMAGE TREATMENT

Historical images should initially feel archival.

Suggested CSS treatment:

```css
filter:
  grayscale(80%)
  sepia(15%)
  contrast(1.05);
```

When the user reaches the image section:

```text
high grayscale
      ↓
reveal animation
      ↓
reduced grayscale
      ↓
image becomes clearer
```

This should feel like:

> "memory becoming visible"

Do not apply the same effect to every image.

Vary:

- clipping
- opacity
- scale
- blur
- grayscale
- position

---

# 7. REQUIRED TECH STACK

Use:

```text
React
Vite
GSAP
GSAP ScrollTrigger
Lenis
Three.js
SVG
CSS
```

Optional if useful:

```text
@react-three/fiber
@react-three/drei
```

Do not add unnecessary libraries.

Before installing a dependency, inspect the existing project.

---

# 8. SCROLL ARCHITECTURE

The most important technical requirement:

## Use Lenis for smooth scrolling.

Use GSAP ScrollTrigger for scroll-controlled animation.

Architecture:

```text
Mouse / Touch Scroll
        ↓
      Lenis
        ↓
Smooth scroll progress
        ↓
GSAP ScrollTrigger
        ↓
Animation timelines
        ↓
HTML / SVG / Three.js
```

Do not implement animations as simple:

```text
onEnter → play()
```

Instead, animations should be tied to scroll progress.

Use:

```js
scrub: true
```

where appropriate.

The user must be able to scroll forward and backward and the animation must respond naturally.

---

# 9. LENIS + GSAP INTEGRATION

Create a centralized scroll system.

Example architecture:

```text
src/
└── animations/
    └── scroll/
        ├── lenis.js
        ├── scrollTrigger.js
        └── index.js
```

Ensure Lenis and ScrollTrigger stay synchronized.

Do not create multiple independent Lenis instances.

Use a single global smooth-scroll controller.

---

# 10. GSAP ARCHITECTURE

Use GSAP timelines and ScrollTrigger.

For React:

- use `useLayoutEffect`
- use `gsap.context()`
- clean up animations on unmount
- avoid duplicate ScrollTriggers
- avoid creating animations during render

Example pattern:

```jsx
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // GSAP animations
  }, containerRef);

  return () => ctx.revert();
}, []);
```

Animations must remain maintainable.

Avoid putting hundreds of unrelated GSAP calls inside `App.jsx`.

---

# 11. GLOBAL TIMELINE

Create a persistent visual timeline.

Desktop:

```text
1951 ●
     │
     │
1952 ●
     │
     │
1953 ●
     │
     │
1954 ●
```

The active year should:

- scale slightly
- increase opacity
- show a gold accent
- update based on scroll position

The timeline line should progressively reveal as the user scrolls.

Mobile:

- move the timeline to the top or bottom
- or convert it into a compact horizontal year indicator

Do not let the timeline block the content.

---

# 12. PAGE STRUCTURE

Build the page in the following order:

```text
1. Hero
2. Historical introduction
3. 1951
4. 1952
5. 1953
6. 1954
7. Victory climax
8. Historical conclusion
```

---

# 13. HERO SECTION

The hero must immediately establish:

```text
1951 — 1954

MỘT HÀNH TRÌNH
ĐẾN ĐIỆN BIÊN PHỦ
```

Visual direction:

- full viewport
- parchment / archival background
- subtle map texture
- large typography
- subtle atmospheric movement
- very restrained particles if needed
- deep layered parallax

Do not overload the hero with text.

Suggested composition:

```text
small label

1951 — 1954

MỘT HÀNH TRÌNH
ĐẾN ĐIỆN BIÊN PHỦ

[short subtitle]

SCROLL ↓
```

Animation:

At page load:

1. background fades in
2. small metadata appears
3. year appears
4. main title reveals line-by-line
5. subtle map lines move
6. scroll indicator appears

Do not make the title bounce.

---

# 14. INTRODUCTION SECTION

Create a short contextual section explaining that 1951–1954 was the decisive phase leading toward Điện Biên Phủ.

Visual:

- large editorial paragraph
- archival texture
- small timeline
- one historical photograph

Animation:

- text enters through vertical clipping
- image slowly scales
- background map moves slightly

Keep this section calm.

It should act as a transition from hero to historical timeline.

---

# 15. SECTION 1951

Title:

```text
1951

ĐẠI HỘI II
```

Supporting topic:

```text
CHIẾN DỊCH HÒA BÌNH
```

Visual layout:

```text
                 1951

          ĐẠI HỘI II

                ↓

        CHIẾN DỊCH HÒA BÌNH

       [historical image]
```

Animation:

- year enters first
- title reveals vertically
- image slides / clips in
- map appears behind
- campaign route draws gradually

Use a subtle map texture.

Do not use a full 3D scene yet unless necessary.

---

# 16. SECTION 1952 — TÂY BẮC

This is the first major 3D moment.

Create:

```text
CHIẾN DỊCH TÂY BẮC

14.10 — 10.12.1952
```

Visual concept:

```text
Vietnam map
    ↓
camera zoom
    ↓
Northwest region
    ↓
campaign route
    ↓
historical photographs
```

Three.js can be used for:

- terrain depth
- map plane
- camera movement
- subtle elevation
- particles / dust if appropriate

Do NOT make the map look like a video game.

It should look like a museum exhibition map.

Use parchment / dark green / aged gold.

---

# 17. 3D MAP REQUIREMENTS

If implementing a Three.js map:

Create a dedicated component:

```text
src/components/three/
└── HistoricalMapScene.jsx
```

Use a restrained visual style.

Possible layers:

```text
base map
terrain depth
campaign routes
location markers
labels
atmospheric particles
```

Camera:

```text
overview
    ↓
zoom
    ↓
regional view
    ↓
target location
```

Camera movement must be controlled by ScrollTrigger.

Avoid uncontrolled animation loops where possible.

---

# 18. SVG CAMPAIGN ROUTES

Use SVG for strategic routes where possible.

Do not render simple CSS lines.

Use actual SVG paths.

Animation:

```text
stroke-dasharray
stroke-dashoffset
```

GSAP controls the path progress.

Example conceptual behavior:

```text
scroll 0%
route hidden

scroll 50%
route half drawn

scroll 100%
route fully drawn
```

Use small gold/red markers for important locations.

---

# 19. SECTION 1953

Title:

```text
1953

ĐÔNG XUÂN 1953–1954

THƯỢNG LÀO
```

This should be the strongest strategic storytelling section.

Create a large East Indochina / Vietnam-Laos strategic map.

Visual:

```text
                 ĐIỆN BIÊN
                     ↑
                     │
          TÂY BẮC ←──┼──→ THƯỢNG LÀO
                     │
                     ↓
                  TRUNG LÀO
```

Animation sequence:

```text
1. Map appears
2. First route appears
3. Second route appears
4. Third route appears
5. Multiple directions become visible
6. Strategic pressure increases
7. Camera begins moving toward Điện Biên
```

The visual message should be:

> the strategic situation is changing and forces are being dispersed.

Do not overload the screen with military icons.

Keep it elegant.

---

# 20. TRANSITION 1953 → 1954

This transition is extremely important.

All strategic routes should gradually lead the viewer toward:

```text
ĐIỆN BIÊN
```

Possible animation:

```text
multiple campaign routes
        ↓
converge
        ↓
map zoom
        ↓
Điện Biên marker
        ↓
screen darkens
        ↓
1954 appears
```

This should feel like the climax is approaching.

---

# 21. SECTION 1954 — ĐIỆN BIÊN PHỦ

This is the most visually powerful section.

Title:

```text
1954

ĐIỆN BIÊN PHỦ
```

Dates:

```text
13.03.1954
        ↓
56 NGÀY ĐÊM
        ↓
07.05.1954
```

Visual:

- large battlefield/map
- deep parallax
- Three.js camera
- historical photographs
- SVG trenches / routes
- restrained particles
- dramatic typography

Animation:

```text
overview map
    ↓
zoom toward Điện Biên
    ↓
battlefield layers
    ↓
routes
    ↓
historical image reveal
    ↓
date
    ↓
56 NGÀY ĐÊM
    ↓
07.05.1954
```

This should feel cinematic but respectful.

Do NOT use explosions, game-like gunfire, aggressive particle effects, or flashy transitions.

---

# 22. VICTORY CLIMAX

After the 1954 battle sequence, create a strong visual release.

Suggested:

```text
07.05.1954

[Historical victory photograph]

CHIẾN THẮNG
ĐIỆN BIÊN PHỦ
```

The photograph should become the dominant visual.

Animation:

- background darkens
- text fades
- image slowly emerges
- image scale settles
- gold date appears
- all motion becomes slower

This should feel emotional and historical.

---

# 23. CONCLUSION

End with a clean editorial conclusion.

Possible structure:

```text
1951
1952
1953
1954

Một hành trình.
Một bước ngoặt.
Một chiến thắng mang ý nghĩa lịch sử.
```

Do not create a generic footer immediately.

Let the historical conclusion breathe.

---

# 24. PARALLAX SYSTEM

Use multiple layers.

Example:

```text
Background paper       speed 0.05
Map                     speed 0.20
Historical image        speed 0.40
Main content            speed 1.00
Foreground elements     speed 1.15
```

Do not exaggerate movement.

Parallax should feel cinematic, not nauseating.

---

# 25. IMAGE REVEAL EFFECTS

Use different reveal techniques:

### Clip reveal

```text
image hidden behind vertical mask
        ↓
mask moves
        ↓
image revealed
```

### Scale reveal

```text
scale 1.15
opacity 0
        ↓
scale 1
opacity 1
```

### Horizontal reveal

Useful for historical photographs.

Do not use the same reveal animation everywhere.

---

# 26. TEXT ANIMATION

Use editorial text animations.

Recommended:

- line reveal
- word reveal
- vertical clip
- subtle y translation
- opacity

Avoid:

- bounce
- elastic
- spinning text
- excessive blur
- flashy text effects

Typography should feel sophisticated.

---

# 27. MICRO INTERACTIONS

Add subtle interactions:

- timeline hover
- map marker hover
- historical image caption reveal
- date hover
- cursor response only if useful

Do not build a custom cursor unless it materially improves the experience.

If implemented, keep it subtle.

---

# 28. PERFORMANCE

Performance is critical.

Requirements:

- lazy-load below-the-fold images
- use WebP/AVIF where possible
- compress large images
- avoid huge uncompressed textures
- avoid unnecessary Three.js render loops
- dispose Three.js resources
- avoid duplicate ScrollTriggers
- use `will-change` sparingly
- avoid excessive DOM nodes
- use `prefers-reduced-motion`

Do not sacrifice performance just for visual effects.

---

# 29. REDUCED MOTION

Implement:

```css
@media (prefers-reduced-motion: reduce) {
  /* reduce / disable non-essential motion */
}
```

If reduced motion is enabled:

- disable heavy camera animations
- disable unnecessary parallax
- simplify route animations
- keep content fully accessible

---

# 30. MOBILE EXPERIENCE

Mobile must not simply be a scaled-down desktop.

Desktop:

```text
full 3D
large maps
multiple layers
complex camera movement
```

Mobile:

```text
simplified 3D
fewer layers
smaller maps
reduced particle count
simpler parallax
```

Preserve:

- historical sequence
- dates
- photographs
- map storytelling
- timeline

If WebGL performance is poor on mobile, gracefully replace the 3D scene with a static / lightly animated map.

---

# 31. RESPONSIVE BREAKPOINTS

At minimum support:

```text
mobile
tablet
desktop
large desktop
```

Test approximately:

```text
375px
768px
1024px
1440px
1920px
```

No horizontal overflow.

---

# 32. COMPONENT ARCHITECTURE

Recommended structure:

```text
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── Intro/
│   │
│   ├── Timeline/
│   │
│   ├── HistoricalSection/
│   │   ├── Year1951.jsx
│   │   ├── Year1952.jsx
│   │   ├── Year1953.jsx
│   │   └── Year1954.jsx
│   │
│   ├── Map/
│   │   ├── StrategicMap.jsx
│   │   └── CampaignRoute.jsx
│   │
│   ├── Three/
│   │   ├── HistoricalMapScene.jsx
│   │   └── CameraController.jsx
│   │
│   └── Victory/
│
├── animations/
│   ├── lenis.js
│   ├── scrollTrigger.js
│   ├── hero.js
│   ├── timeline.js
│   ├── maps.js
│   └── sections.js
│
├── data/
│   └── history.js
│
├── assets/
│   ├── images/
│   ├── maps/
│   └── textures/
│
├── App.jsx
└── main.jsx
```

Adapt this structure to the existing project instead of blindly rewriting it.

---

# 33. DATA-DRIVEN HISTORY

Do not hard-code every year directly into unrelated components.

Create structured data where practical:

```js
const historicalTimeline = [
  {
    year: "1951",
    title: "Đại hội II",
    subtitle: "Chiến dịch Hòa Bình",
    date: "...",
    images: [],
  },
  {
    year: "1952",
    title: "Chiến dịch Tây Bắc",
    date: "14.10 — 10.12.1952",
    images: [],
  },
  {
    year: "1953",
    title: "Đông Xuân 1953–1954",
    subtitle: "Thượng Lào",
    images: [],
  },
  {
    year: "1954",
    title: "Điện Biên Phủ",
    date: "13.03 — 07.05.1954",
    images: [],
  },
];
```

This makes future content updates easier.

---

# 34. ACCESSIBILITY

Use:

- semantic HTML
- proper headings
- alt text
- keyboard navigation where interactive
- sufficient contrast
- reduced motion support

Do not put important historical information only inside canvas/WebGL.

All essential text must remain in HTML.

---

# 35. PERFORMANCE BUDGET

Aim for:

- smooth desktop scrolling
- stable 60 FPS where possible
- no obvious scroll jank
- no long blocking JS execution
- lazy-loaded historical images
- optimized 3D assets

If a visual effect causes significant performance problems, simplify the effect rather than compromising the whole page.

---

# 36. DO NOT OVERENGINEER

Do not:

- migrate frameworks
- rewrite unrelated project code
- add a backend
- add a CMS
- add authentication
- add unnecessary libraries
- create unnecessary abstractions
- create a huge design system

Focus entirely on the landing page.

---

# 37. DEVELOPMENT PROCESS

Do not generate everything blindly in one step.

Follow this sequence:

## Phase 1 — Inspect

Inspect:

- package.json
- src/
- public/
- existing components
- existing CSS
- current Vite setup

Determine what can be reused.

Do not overwrite working code unnecessarily.

---

## Phase 2 — Install dependencies

Only install missing dependencies:

```text
gsap
lenis
three
```

Use React Three Fiber only if it provides a clear benefit.

---

## Phase 3 — Build visual foundation

Implement:

1. color system
2. typography
3. base layout
4. Lenis
5. ScrollTrigger
6. global timeline

Verify scrolling before proceeding.

---

## Phase 4 — Build Hero

Complete Hero before moving on.

Verify:

- smooth scroll
- typography
- parallax
- responsive layout
- no console errors

---

## Phase 5 — Build 1951

Implement the first historical section.

Use this as the template for the rest of the storytelling architecture.

---

## Phase 6 — Build 1952

Add the first major 3D/map experience.

Verify camera + scroll synchronization.

---

## Phase 7 — Build 1953

Implement strategic map and SVG campaign routes.

This is the primary data-visualization section.

---

## Phase 8 — Build 1954

Implement the cinematic climax.

---

## Phase 9 — Performance + responsive

Test:

- desktop
- tablet
- mobile
- reduced motion

---

# 38. QUALITY BAR

Before considering the implementation complete, ask:

### Visual

- Does it feel cinematic?
- Does it feel historical?
- Does it feel premium?
- Does it avoid generic AI landing page aesthetics?
- Is the color palette consistent?

### Motion

- Is scrolling smooth?
- Are animations controlled by scroll progress?
- Do animations reverse naturally?
- Are transitions coherent?
- Is 3D used selectively?

### Storytelling

- Can the user understand 1951 → 1954?
- Does each year have a distinct visual identity?
- Does the visual tension build toward 1954?
- Does Điện Biên Phủ feel like the climax?

### Technical

- No console errors
- No duplicate ScrollTriggers
- No memory leaks
- No horizontal overflow
- Responsive
- Reduced-motion support
- Images optimized

---

# 39. IMPORTANT IMPLEMENTATION RULES

## Rule 1

Do not use placeholder blocks when actual historical assets exist.

## Rule 2

Do not use random stock images.

## Rule 3

Do not fabricate historical facts.

## Rule 4

Do not create excessive visual effects.

## Rule 5

Do not make the site look like a gaming interface.

## Rule 6

Do not use Three.js just because it is available.

## Rule 7

Use ScrollTrigger `scrub` for important scroll-driven sequences.

## Rule 8

Use `pin` for major cinematic scenes where appropriate.

## Rule 9

Keep important text in HTML.

## Rule 10

Do not sacrifice performance for unnecessary effects.

---

# 40. FINAL CREATIVE DIRECTION

The final experience should feel like:

```text
ARCHIVAL MUSEUM
        +
EDITORIAL MAGAZINE
        +
CINEMATIC DOCUMENTARY
        +
INTERACTIVE MAP
        +
MODERN WEB EXPERIENCE
```

The user should feel:

```text
1951
  ↓
history begins

1952
  ↓
the map expands

1953
  ↓
the strategic situation changes

1954
  ↓
everything converges

ĐIỆN BIÊN PHỦ
  ↓
climax

07.05.1954
  ↓
victory
```

The core principle is:

> **Do not merely show history. Make the user travel through it.**

---

# 41. START NOW

Start by inspecting the existing React + Vite project.

Then:

1. Identify the current architecture.
2. Identify existing dependencies.
3. Identify available historical assets.
4. Install only missing dependencies.
5. Build the global smooth-scroll system.
6. Build the Hero.
7. Build the historical timeline.
8. Implement each year sequentially.
9. Implement the 3D map experiences.
10. Implement the Điện Biên Phủ climax.
11. Optimize performance.
12. Test responsive behavior.
13. Fix all console/runtime errors.
14. Run the production build.

Do not stop after creating a scaffold.

The final result must be a **fully implemented, visually polished, interactive landing page**, not a collection of placeholder components.
