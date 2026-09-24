# Validation Matrix

## Default web matrix

| Size | Represents | Why it matters |
|---|---|---|
| 1920×1080 | Large desktop monitor | Stretch, dead space, line length |
| 1536×864 | Common scaled Windows laptop | Real-world "desktop" for many users |
| 1440×900 | MacBook-class laptop | Designer default; do not stop here |
| 1366×768 | Budget laptops, many offices and schools | Short height; sticky chrome; below-fold actions |
| 1280×800 | Small laptop, split-screen half of large monitor | Breakpoint edge cases |
| 1024×768 | Small tablet landscape, small windows | Nav collapse, two-column squeeze |
| 768×1024 | Tablet portrait | Touch; mid breakpoints |
| 430×932 | Large phone | Mobile layout at its roomiest |
| 390×844 | Common phone | Primary mobile check |
| 375×812 | Older/smaller common phone | Tighter width |
| 360×800 | Many Android phones | Narrowest common width; overflow |

Plus conditions:

- **Zoom 200%** at 1280×800 (equivalent to a 640×400 CSS viewport); reflow at 320 CSS px width.
- **Landscape phone** (for example 844×390): very short height.
- **RTL** if the product supports RTL languages.
- **Ultra-wide** (2560×1080 or larger) if the audience uses large monitors (data tools, trading).

## Adapting to the audience

Do not fetishize the list. Adjust:

- **Classroom product:** projector (1280×720 or 1920×1080 at a distance), Chromebooks (1366×768),
  student phones.
- **Internal admin tool:** office laptops (1366×768, 1536×864), large monitors; maybe skip phones.
- **Consumer mobile web:** weight phones heavily; include 320–360 px widths and landscape.
- **Kiosk:** the exact kiosk resolution and orientation, touch only.
- **Data dashboards:** large and ultra-wide monitors, split screens.

Analytics (if available) are the best source: test the top sizes that cover most sessions.

## States × sizes

Responsive defects often appear only in certain states. For the most important surfaces,
cross the matrix with at least: sparse data, dense data, long content, and an error state.

## Running efficiently

- Automate the matrix (`scripts/layout-report.mjs`) and look at screenshots in a grid.
- Prioritize: smallest width, shortest height, 200% zoom, and the audience's primary size.
- Re-run the same matrix after fixes to compare.
