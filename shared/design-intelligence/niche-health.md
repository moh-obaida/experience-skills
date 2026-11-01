# Niche Atlas: Health & Wellness

Health products range from clinical systems where errors harm people to wellness apps where
motivation is the challenge. Many users are unwell, anxious, older, or using assistive technology.
Generated defaults bring soft pastel gradients, stock smiling doctors, and wellness blobs to
everything, including screens that should be exact and plain. Load with `niche-atlas-index.md`;
compare product-relevant systems with `design-system-selector.md` when direction is open.

## Product realities

### Healthcare portals and patient tools
- **Reality:** Patients check results, message clinicians, manage prescriptions, and pay bills, often anxious and sometimes with low health literacy.
- **Jobs:** Read a test result and understand it, message a care team, request a refill, see upcoming appointments, pay, share records.
- **Density:** Medium.
- **Surfaces:** Home, results, messages, medications, appointments, billing, records, proxy access.
- **States:** Result pending, result released with or without clinician note, abnormal flag, message awaiting reply, refill denied, proxy access.
- **Interaction:** Phone and desktop; older users; assistive technology.
- **Trust:** Very high; privacy and clarity.
- **Generated-UI failures:** Wellness pastels on lab results, cheerful copy on serious news, results as KPI cards without ranges.

### Appointment systems
- **Reality:** Booking with the right clinician, location, and time, often with insurance and eligibility constraints.
- **Jobs:** Find a clinician or service, see real availability, book, reschedule, cancel, check in, join telehealth.
- **Density:** Medium.
- **Surfaces:** Search, clinician profile, availability, booking form, confirmation, check-in, waiting room.
- **States:** No availability, waitlist, booked, reminder, late, cancelled by clinic, telehealth connection issue.
- **Interaction:** Phone-first.
- **Trust:** High.
- **Generated-UI failures:** Calendars without times visible, stock photography, hiding cancellation policy.

### Clinical software
- **Reality:** Clinicians under time pressure read and record patient data; errors can harm patients.
- **Jobs:** Review a chart, see vitals trends, order tests, document, reconcile medications, hand off.
- **Density:** Very dense.
- **Surfaces:** Patient list, chart summary, vitals and labs, orders, notes, medication administration, alerts.
- **States:** Critical values, allergies, pending orders, duplicate orders, signed vs unsigned, downtime.
- **Interaction:** Keyboard and mouse, shared workstations, tablets on rounds.
- **Trust:** Critical.
- **Generated-UI failures:** Modern consumer styling that reduces density, alerts as cards, color-only criticality.

### Fitness
- **Reality:** Some users train seriously and log details; others follow guided workouts; motivation and progress matter.
- **Jobs:** Start a workout, follow along, log sets or runs, see progress, plan a program.
- **Density:** Variable.
- **Surfaces:** Workout player, log, program, history, personal records.
- **States:** Paused, rest timer, missed workout, personal record, injury mode.
- **Interaction:** Phone during exercise, watch, big targets, glanceability.
- **Trust:** Moderate; injury safety.
- **Generated-UI failures:** Neon gradients, tiny targets during exercise, streak guilt.

### Meditation and wellness
- **Reality:** Users seek calm; the interface should reduce stimulation.
- **Jobs:** Start a session quickly, choose by time or need, follow a course, sleep.
- **Density:** Sparse.
- **Surfaces:** Home, session player, courses, sleep, settings.
- **States:** Downloaded, in progress, completed, subscription required.
- **Interaction:** Phone, headphones, night use.
- **Trust:** Moderate; claims must be honest.
- **Generated-UI failures:** Aurora gradients and floating blobs everywhere, pushy upsells, streak pressure.

### Nutrition
- **Reality:** Logging food is tedious; guidance must avoid shame and disordered-eating triggers.
- **Jobs:** Log a meal quickly, see balance over a day or week, follow a plan, find recipes.
- **Density:** Medium.
- **Surfaces:** Day log, food search, barcode scan, recipes, trends.
- **States:** Missing data, estimated entries, goal exceeded (neutral), sensitive mode.
- **Interaction:** Phone, camera, quick add.
- **Trust:** Moderate; health sensitivity.
- **Generated-UI failures:** Red over-limit warnings, calorie counts dominating, gamified weight loss.

## Systems

### Clinic Letter
**Thesis.** A patient portal should read like a clear letter from your care team: what's new, what it means, what to do next, and who to contact. Character: reassuring, plain. Audience: patients and caregivers. **Fit:** patient portals, health records access, test results.

**Fingerprint** `density=medium; composition=hub; surface=flat-bordered; type=humanist-sans; nav=top-bar; accent=low; motion=none; imagery=none; radius=medium; data=moderate; tone=reassuring-plain`

| Layer | Decision |
|---|---|
| Composition | Home hub: "What's new" (results released, messages, appointments) in plain sentences with next steps; sections for Results, Messages, Medications, Appointments, Billing. Result detail shows value, reference range, trend, and clinician note. |
| Type | Humanist sans with high legibility (Atkinson Hyperlegible or Source Sans 3, 17px). Arabic: Noto Sans Arabic 18px. |
| Color | canvas #F5F7F7 · surface #FFFFFF · ink #1A2022 · muted #505A5E · line #D3DADC · action #1E5A73 · on-action #FFFFFF. Out-of-range values flagged with icon and word ("High"), not only red. |
| Space and shape | 8px base; 8px radius; generous line height 1.6. Stroke and lift: sections are separated by space and one 1px rule, results by one row border; the released-before-review note is a labelled line, not a colored box; no shadows. |
| Icons and imagery | None on clinical content; simple icons for sections. |
| Components | Message care team with expected response time; refill request; proxy access management; download records. Shown when: the response-time line shows beside Message care team, the urgent-symptoms banner with the emergency number on every clinical page because it is a safeguard, and "released before review" only on such results; no wellness tips between results. Copy: results say what the value is, what the range means, and who to contact, in plain sentences without clinical shorthand. |
| States | Result released before clinician review states so and offers context; pending results show expected time; urgent symptoms banner with emergency number. |
| Responsive | Phone first; desktop two columns. |
| Motion | None. |
| Accessibility | WCAG AA minimum, AAA for body text; plain language; screen-reader tested tables. |
| Build | Reference ranges and units from source; no client-side reinterpretation. Accept: capture the hub, a result before review, a pending result, and the urgent banner at 390 and a laptop, checking the emergency number stays visible and ranges align with their values. |
| AI mutation | Pastel gradients, cheerful stock doctors, results as colorful cards without ranges. |
| Fails when | Clinician-facing work. |

### Bedside Chart
**Thesis.** Clinical software is a chart: dense, exact, time-ordered, with critical information (allergies, alerts) pinned and never styled away. Character: clinical, exact. Audience: clinicians. **Fit:** EHR, clinical documentation, nursing workflows.

**Fingerprint** `density=dense; composition=object-sheet; surface=flat-ruled; type=technical-sans; nav=persistent-sidebar; accent=multi-role; motion=none; imagery=data-graphic; radius=square; data=strong; tone=clinical-exact`

| Layer | Decision |
|---|---|
| Composition | Patient banner pinned (name, DOB, MRN, allergies, code status); sidebar sections (Summary, Vitals, Labs, Meds, Orders, Notes); summary shows problems, meds, recent vitals with trends. |
| Type | Technical sans (IBM Plex Sans 13px) with tabular numerals and clear 0/O, 1/l. |
| Color | canvas #F6F7F7 · surface #FFFFFF · ink #111414 · muted #4E5555 · line #CBD1D1 · action #0B4F71 · on-action #FFFFFF. Criticality: critical red with icon and word, abnormal amber, allergy banner red outline. |
| Space and shape | 28px rows; square; ruled tables. Stroke and lift: tables are ruled with one 1px line and square corners, and the patient banner has one stronger bottom rule; a critical value changes label and fill, never a decorative glow; no shadows. |
| Icons and imagery | Vitals sparklines with ranges; no decorative imagery. |
| Components | Orders with duplicate checks; medication reconciliation side by side; note templates; sign with attestation. Shown when: the patient banner is on every screen because it is identification, the unsigned flag only on unsigned notes, and the downtime notice only during downtime; critical values always require acknowledgement and are never hidden by a filter. Copy: values always carry units and times, and alerts name the patient and the value. |
| States | Unsigned notes flagged; critical values require acknowledgement; downtime mode read-only notice. |
| Responsive | Desktop workstations; tablet rounds view with larger targets. |
| Motion | None. |
| Accessibility | Keyboard complete; color never the only signal; high-contrast option. |
| Build | Patient identity banner on every screen; units always shown. Accept: capture the summary, an order with a duplicate check, a critical value, an unsigned note, and downtime read-only mode at 1440 and a tablet, checking the allergy banner is never clipped or scrolled away. |
| AI mutation | Consumer styling, cards reducing density, pastel alerts. |
| Fails when | Patient-facing screens. |

### Open Slots
**Thesis.** Booking care should show real availability immediately: who, where, when, with clear policies, in as few steps as honesty allows. Character: welcoming, efficient. Audience: patients booking appointments. **Fit:** appointment booking, clinic scheduling, telehealth booking.

**Fingerprint** `density=medium; composition=calendar-grid; surface=tonal-blocks; type=institutional-sans; nav=stepwise; accent=medium; motion=restrained-causal; imagery=photography; radius=medium; data=light; tone=welcoming`

| Layer | Decision |
|---|---|
| Composition | Search by reason or clinician; results with next available times as tappable slots; booking form minimal; confirmation with add to calendar and preparation instructions. |
| Type | Institutional sans (Public Sans 16px). Arabic: Noto Sans Arabic. |
| Color | canvas #F3F6F4 · surface #FFFFFF · ink #1A211D · muted #525C56 · line #D0D9D3 · action #1D5E48 · on-action #FFFFFF. |
| Space and shape | Slots 44px tall buttons, 8px radius; day groups on tonal blocks. Stroke and lift: slots are buttons with one 1px border; the chosen slot changes fill and shows one check, and day groups differ by tone; no shadows beyond the sticky confirm bar. |
| Icons and imagery | Real clinician photos with names and roles. |
| Components | Slot picker by day; insurance check; reschedule and cancel with policy in text. Shown when: the waitlist offer appears only when no slots exist, the cancellation policy next to the confirm, and preparation instructions only after booking; the insurance check only when a plan is entered. Copy: times show the clinic's time zone, and a clinic-cancelled message offers the next available times. |
| States | No availability offers waitlist and other locations; clinic-cancelled with rebooking. |
| Responsive | Phone first; desktop multi-day grid. |
| Motion | Selected slot confirms (150ms). Reduced motion: none. |
| Accessibility | Slots as buttons with full date/time labels. |
| Build | Time zone and daylight saving handled server-side. Accept: capture results with slots, a no-availability page, the form, the confirmation, and a clinic-cancelled rebooking at 390, checking slot tap targets and day tints stay aligned. |
| AI mutation | Calendar pills without times, stock photos. |
| Fails when | Clinician scheduling (use Week Loom). |

### Training Log
**Thesis.** Serious training is logged like a lab notebook: sets, reps, loads, splits, and records in a fast, dense log with bold numbers readable mid-workout. Character: driven, exact. Audience: strength and endurance athletes. **Fit:** workout logging, running and cycling logs, coaching platforms.

**Fingerprint** `density=dense; composition=ledger; surface=flat-bordered; type=condensed-display; nav=tab-bar; accent=high; motion=restrained-causal; imagery=data-graphic; radius=low; data=strong; tone=driven`

| Layer | Decision |
|---|---|
| Composition | Today's session as a ledger of exercises with set rows (previous, target, actual); rest timer bar; history and records tabs with charts. |
| Type | Condensed display for numbers (Barlow Condensed 600, 28px for current set), body Barlow 15px. Arabic: Cairo. |
| Color | canvas #F4F4F2 · surface #FFFFFF · ink #151515 · muted #555552 · line #D2D2CD · action #B3261E · on-action #FFFFFF. Records in accent with "PR" label. |
| Space and shape | 52px set rows; 4px radius; steppers large. Stroke and lift: set rows share one 1px rule and no card borders; the completed set changes fill and the check once; steppers are large with one outline; no shadows. |
| Icons and imagery | Progress charts. |
| Components | One-tap set completion with previous values prefilled; rest timer auto-start; plate calculator. Shown when: the rest timer shows only after a completed set, the plate calculator only on barbell lifts, and the injury substitutions only when injury mode is on; no social feed or badges mid-workout. Copy: previous values and targets are bare numbers with units, and the log reads like a notebook. |
| States | Missed session rescheduling; injury mode substitutions; offline logging. |
| Responsive | Phone and watch first. |
| Motion | Set completion check (150ms); rest timer smooth. Reduced motion: text countdown. |
| Accessibility | Large targets with sweaty hands; voice logging. |
| Build | Offline-first; units configurable. Accept: capture a session with previous values, a completed set with the rest timer, an offline log, and records at 390 in bright light, checking numbers keep their size and set rows have unbroken rules. |
| AI mutation | Neon gradients, streak guilt, tiny steppers. |
| Fails when | Guided beginners (use Coach Stage). |

### Coach Stage
**Thesis.** Guided workouts are a stage: the coach video or cue fills the screen, controls sit as a HUD, and the next move is announced before it arrives. Character: energetic, motivating. Audience: people following guided workouts. **Fit:** workout videos, classes, guided runs.

**Fingerprint** `density=sparse; composition=stage; surface=full-bleed; type=grotesque; nav=hud; accent=high; motion=choreographed; imagery=photography; radius=square; data=light; tone=energetic`

| Layer | Decision |
|---|---|
| Composition | Full-bleed video; HUD with current move, time left, next move, heart rate if available; pause large. |
| Type | Bold grotesk (Archivo Black for cues, Archivo body). Arabic: Cairo Black. |
| Color | canvas #0F0F10 · surface #1A1A1C · ink #F4F4F5 · muted #A6A6AD · line #2C2C30 · action #FF5A36 · on-action #0F0F10. |
| Space and shape | Square HUD blocks with 70% scrims only behind text. Stroke and lift: HUD blocks are square with scrims only behind text and no borders; the pause control is the only filled shape; no shadows over the video. |
| Icons and imagery | Coach video and photography with diverse bodies. |
| Components | Pause, skip, modify (low-impact alternative), cast to TV. Shown when: the next-move line shows during the last five seconds of a move, heart rate only with a connected device, and the modify option only where an alternative exists; no achievement pop-ups over the coach. Copy: cues are verbs with counts ("Lunge, 8 left"). |
| States | Paused with resume; connection drop continues with downloaded audio. |
| Responsive | Phone portrait and landscape, TV casting. |
| Motion | Cue transitions choreographed with countdown; audio cues. Reduced motion: no zooms. |
| Accessibility | Audio cues and captions; modifications for mobility. |
| Build | Preload next segment; cue timing data-driven. Accept: capture a move, a paused state, a low-impact modification, and a connection drop with downloaded audio on a phone and a TV, checking text over video keeps its contrast and the pause target is large. |
| AI mutation | Glass panels over video, glowing rings everywhere. |
| Fails when | Logging and analysis. |

### Still Water
**Thesis.** Meditation apps should lower stimulation: slow texture, a single serif line, and start in one tap. Character: serene, unhurried. Audience: people seeking calm or sleep. **Fit:** meditation, sleep, breathing, mental wellness self-care.

**Fingerprint** `density=sparse; composition=stage; surface=tonal-blocks; type=editorial-serif; nav=tab-bar; accent=none; motion=ambient-world; imagery=texture; radius=high; data=none; tone=serene`

| Layer | Decision |
|---|---|
| Composition | Home: "Today" with one recommended session and time options (3, 10, 20 min); library by need; player with a single line of text and a slow texture. |
| Type | Soft editorial serif (Newsreader or Fraunces with soft optical axis) for prompts, sans for UI (Figtree). Arabic: Amiri. |
| Color | canvas #EDEEE8 · surface #F7F7F3 · ink #22261F · muted #596054 · line #D3D6CC · action #3F5A4A · on-action #FFFFFF. Night mode deep and warm, not blue. |
| Space and shape | 24px radius blocks; generous margins. Stroke and lift: blocks have no borders and a soft fill; the player line and texture have no frame; focus rings stay visible and quiet; no shadows or glow. |
| Icons and imagery | Slow natural textures (water, paper grain), no floating blobs. |
| Components | One-tap start, timer, download, sleep timer. Shown when: the subscription gate appears before a session starts and never during one, the sleep timer only in sleep sessions, and the download state only when offline use matters; no streaks, reminders badges, or counters. Copy: one calm line in the player, and the gate says the price and the trial plainly. |
| States | Session completed quietly; subscription gate honest before start, not mid-session. |
| Responsive | Phone first; tablet same. |
| Motion | Ambient texture drift under 5% movement; breathing guide expands in sync. Reduced motion: static texture, text breathing cues. |
| Accessibility | Screen reader friendly player; captions for guidance. |
| Build | Low-power animations; offline audio. Accept: capture home, the player, a completed session, and the subscription gate at 390 in dark and light, checking the texture never lowers text contrast below legible and focus rings are visible. |
| AI mutation | Aurora gradients, floating orbs, streak pressure, pushy upsells. |
| Fails when | Clinical mental health care (needs clinical rigor and safety). |

### Plate Journal
**Thesis.** Nutrition logging should be a gentle food journal: meals through the day with photos, balance shown over the week, and no red shame. Character: nonjudgmental, practical. Audience: people tracking food for health goals. **Fit:** nutrition tracking, meal planning, dietitian-client apps.

**Fingerprint** `density=medium; composition=timeline; surface=paper-sheet; type=rounded-sans; nav=tab-bar; accent=multi-role; motion=physical-direct; imagery=photography; radius=medium; data=moderate; tone=nonjudgmental`

| Layer | Decision |
|---|---|
| Composition | Day timeline of meals with photos and quick add; weekly balance view with ranges; recipes tab. |
| Type | Rounded sans (Nunito Sans 16px). Arabic: Tajawal. |
| Color | canvas #FBF8F2 · surface #FFFFFF · ink #25221D · muted #5F5A51 · line #E6DFD2 · action #3B6B35 · on-action #FFFFFF. Nutrient roles use neutral hues with labels; exceeding goals shown in neutral text. |
| Space and shape | 10px radius; photos 8px radius. Stroke and lift: meal entries differ by tone with no outline; an estimated entry shows a dashed edge on its photo only, one mark; ranges are shaded bands, and nothing is red; no shadows. |
| Icons and imagery | User meal photos. |
| Components | Barcode scan, photo log, recent foods, portion estimate with edit. Shown when: numbers show only when sensitive mode is off, the estimated mark only on estimated entries, and the weekly view only after three days of data; no calorie shame labels or streaks. Copy: balance is described in ranges and plain words ("A bit light on protein this week"). |
| States | Estimated entries marked; sensitive mode hides numbers. |
| Responsive | Phone first. |
| Motion | Added meal slides into timeline (200ms). Reduced motion: none. |
| Accessibility | Numbers optional; text descriptions. |
| Build | Food database source cited. Accept: capture a day timeline, a weekly balance, an estimated entry, and sensitive mode at 390, checking photos keep their corners and no number appears in sensitive mode. |
| AI mutation | Red over-limit warnings, calorie counts large, weight-loss gamification. |
| Fails when | Clinical dietetics requiring precision reports. |

### Care Plan Path
**Thesis.** Managing a long-term condition is a path of small steps; the product shows today's tasks, the plan's stages, and explains with clear medical illustration. Character: encouraging, steady. Audience: patients with chronic conditions and their care teams. **Fit:** chronic care programs, rehabilitation, post-operative recovery.

**Fingerprint** `density=medium; composition=path; surface=tonal-blocks; type=humanist-sans; nav=tab-bar; accent=medium; motion=event-celebration; imagery=illustration; radius=high; data=light; tone=encouraging-steady`

| Layer | Decision |
|---|---|
| Composition | Today: tasks (medication, exercise, measurement) with done checks; path of plan stages with current stage explained; learn tab with illustrated explanations. |
| Type | Humanist sans (Source Sans 3 17px). Arabic: Noto Sans Arabic. |
| Color | canvas #F5F3EE · surface #FFFFFF · ink #1F211E · muted #585C56 · line #DDD9CF · action #2A5C66 · on-action #FFFFFF. |
| Space and shape | 16px radius tonal blocks; 48px targets. Stroke and lift: blocks are tonal with no borders; the current stage adds one outline, and done tasks change the check, not the block; illustrations have no frames; no shadows. |
| Icons and imagery | Accurate medical illustrations reviewed by clinicians. |
| Components | Log measurement with ranges; message care team; reminders. Shown when: out-of-range guidance appears with the measurement and escalation contact, missed tasks roll forward without a count, and the learn tab content only on request; no scores. Copy: encouraging and exact ("Take your reading before breakfast"), never blaming. |
| States | Missed tasks without shame; out-of-range measurement guidance with escalation. |
| Responsive | Phone first; large text supported. |
| Motion | Stage completion marks the path (300ms). Reduced motion: static. |
| Accessibility | Large text, voice reminders. |
| Build | Clinical content versioned and reviewed. Accept: capture today, the stage path, an out-of-range measurement, and a missed-task day at 390 with large text, checking blocks keep their tonal edges and targets stay 48px. |
| AI mutation | Wellness gradients, generic stock photos. |
| Fails when | Acute care or emergencies. |

### Vital Monitor
**Thesis.** Remote monitoring watches trends quietly and escalates clearly: charts with ranges, alerts that name the patient and value, and calm when all is well. Character: watchful, calm. Audience: care teams and patients using connected devices. **Fit:** remote patient monitoring, wearables dashboards, home care.

**Fingerprint** `density=medium; composition=instrument-grid; surface=layered-panels; type=technical-sans; nav=rail; accent=low; motion=restrained-causal; imagery=data-graphic; radius=medium; data=strong; tone=watchful-calm`

| Layer | Decision |
|---|---|
| Composition | Rail of patient groups; grid of patient rows with latest readings and trend sparklines with range bands; alert panel. |
| Type | Technical sans (IBM Plex Sans 14px), tabular. |
| Color | canvas #EEF2F2 · surface #FFFFFF · ink #151B1B · muted #4D5858 · line #C9D3D3 · action #185E66 · on-action #FFFFFF. |
| Space and shape | 6px radius panels; 44px rows. Stroke and lift: rows have one 1px line and charts a shaded range band with no frame; an out-of-range reading changes the value color and label once; panels are flat. |
| Icons and imagery | Trend charts with normal ranges shaded. |
| Components | Acknowledge alert, contact patient, adjust thresholds with audit. Shown when: the sync-age text appears only when a device is late, the alert panel only when alerts exist, and threshold edits require an audit note; all-within-range is a quiet line. Copy: alerts name the patient, the value, and the range, and a gap reads "No reading since 14:02". |
| States | Device not syncing (last reading age); out-of-range; all within range. |
| Responsive | Desktop; phone for on-call alerts. |
| Motion | New alert highlight 400ms. Reduced motion: static. |
| Accessibility | Values with units in text. |
| Build | Distinguish missing data from normal. Accept: capture all clear, one out-of-range alert, a device not syncing, and a threshold edit at 1440 and a tablet, checking a missing reading is a gap and never a zero. |
| AI mutation | Glowing heart icons, green orbs. |
| Fails when | Acute ICU monitoring (regulated device UI). |

### Pharmacy Counter
**Thesis.** Medication management must be careful: each prescription listed with its pill image, dose, refills, and pharmacy status, so mistakes are visible. Character: careful, clear. Audience: patients and caregivers managing medications. **Fit:** pharmacy apps, refill management, medication lists.

**Fingerprint** `density=medium; composition=index; surface=flat-bordered; type=institutional-sans; nav=top-bar; accent=low; motion=none; imagery=product-object; radius=low; data=moderate; tone=careful`

| Layer | Decision |
|---|---|
| Composition | Medication index with pill image, name, strength, instructions, refills left, status; detail with interactions and pharmacist contact. |
| Type | Institutional sans (Public Sans 17px); drug names with tall-man lettering where standard. |
| Color | canvas #F6F7F8 · surface #FFFFFF · ink #181B1E · muted #51575D · line #D2D7DC · action #1F4F7A · on-action #FFFFFF. |
| Space and shape | 4px radius; bordered rows 64px. Stroke and lift: rows have one 1px border and the same 4px radius; the selected medication changes fill and shows one marker; the pill image has no frame; no shadows. |
| Icons and imagery | Actual pill images for identification. |
| Components | Refill, transfer, pickup or delivery, reminders. Shown when: the refill-too-soon date appears only when too soon, the interaction warning only when one exists, and the pickup status only when ready; the pill image is always shown because it prevents mix-ups. Copy: doses use the label's wording with units, and statuses give the next date. |
| States | Refill too soon with date; prescriber approval pending; ready for pickup. |
| Responsive | Phone first. |
| Motion | None. |
| Accessibility | Large text; screen reader reads full instructions. |
| Build | Drug data from authoritative source. Accept: capture the list, a detail with an interaction warning, refill too soon, and ready for pickup at 390 and a tablet, checking pill images are not cropped and row borders are complete. |
| AI mutation | Wellness pastel cards, emoji pills. |
| Fails when | Clinical ordering. |

## Confusable pairs

- **Clinic Letter vs Pharmacy Counter:** both patient-facing and plain. The Letter explains what's new across care; the Counter manages each medication exactly.
- **Training Log vs Coach Stage:** both fitness. The Log records self-directed training; the Stage leads a guided session.
- **Bedside Chart vs Vital Monitor:** both clinical data. The Chart is one patient's complete record; the Monitor watches many patients' trends.
