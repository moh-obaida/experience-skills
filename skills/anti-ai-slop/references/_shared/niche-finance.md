<!-- GENERATED FROM shared/design-intelligence/niche-finance.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Niche Atlas: Finance

Money interfaces carry consequence: a wrong number, an ambiguous pending state, or a hidden fee
damages trust quickly and sometimes permanently. The generated default is a gradient balance card,
a green-up line chart, and blue "fintech" everything. The real design material is time (pending vs
posted, settlement, due dates), certainty (what is final, what is an estimate), and control (limits,
approvals, reversibility). Load a profile only when its realities affect a decision; compare systems only when the direction is open.

## Product realities

### Consumer banking
- **Reality:** People check balances often and briefly, pay and transfer occasionally, and need help rarely but urgently (fraud, lost card).
- **Jobs:** Check balance and recent activity, understand a transaction, send money, pay a bill, freeze a card, dispute a charge, save toward a goal.
- **Density:** Medium; lists of transactions.
- **Surfaces:** Accounts home, transaction list and detail, transfer, payees, cards, statements, support, security settings.
- **States:** Pending vs posted, reversed, declined with reason, scheduled, insufficient funds, card frozen, suspicious activity, maintenance.
- **Interaction:** Phone-first, biometrics, quick glances, notifications.
- **Trust:** Very high.
- **Generated-UI failures:** Giant gradient balance card, spending donut chart on home, pending and posted indistinguishable, playful copy on errors.

### Business banking, payments, invoicing, expenses, accounting
- **Reality:** Multiple people move company money with approvals; bookkeeping must reconcile; cash flow timing matters.
- **Jobs:** Pay vendors in batches, approve payments, send invoices and get paid, collect receipts, categorize and reconcile, close the month, export for accountants.
- **Density:** Dense.
- **Surfaces:** Cash overview, payments with approval queue, invoices, bills, expenses and receipts, reconciliation, reports, user permissions.
- **States:** Draft, awaiting approval, scheduled, sent, paid, partially paid, overdue, failed, unreconciled, locked period.
- **Interaction:** Desktop for finance staff, phone for approvals and receipts.
- **Trust:** Very high; fraud and errors.
- **Generated-UI failures:** KPI cards for revenue on every page, approvals hidden in notifications, rounded cards instead of reconcilable tables.

### Investing, trading, crypto
- **Reality:** Long-term investors want reassurance and goals; active traders want speed and precise data; crypto adds self-custody risk and irreversible transfers.
- **Jobs:** See holdings and performance honestly, research, place orders with correct type, understand fees and taxes, transfer assets, secure keys.
- **Density:** Sparse for long-term, dense for trading.
- **Surfaces:** Portfolio, asset detail, order ticket, watchlist, research, activity, tax documents, wallet and addresses.
- **States:** Market closed, order pending/partial/filled/cancelled, price moved, insufficient buying power, network congestion, unconfirmed transaction, wrong network.
- **Interaction:** Real-time data, keyboard for traders, phone for most.
- **Trust:** Very high; irreversible in crypto.
- **Generated-UI failures:** Neon crypto aesthetic, confetti on trades, red/green as the only signal, hiding fees until confirmation.

### Insurance
- **Reality:** People buy rarely, read little, and return in stressful moments (claims).
- **Jobs:** Get a quote, understand coverage and exclusions, buy, find the policy document, file a claim, track the claim.
- **Density:** Medium.
- **Surfaces:** Quote flow, coverage comparison, policy summary, documents, claim filing, claim status.
- **States:** Quote expired, underwriting review, policy active/lapsed, claim received/in review/approved/denied.
- **Interaction:** Phone, photos for claims.
- **Trust:** Very high; coverage misunderstandings are costly.
- **Generated-UI failures:** Umbrellas and shields, hero smiling families, coverage details hidden, three pricing cards.

## Systems

### Statement Line
**Thesis.** A bank account is a statement: a calm, dated list where every line is exact and pending is never confused with settled. Character: calm, reassuring. Audience: everyday banking customers. **Fit:** consumer banking apps, credit card apps, account history.

**Fingerprint** `density=medium; composition=ledger; surface=flat-ruled; type=humanist-sans; nav=tab-bar; accent=low; motion=restrained-causal; imagery=none; radius=medium; data=moderate; tone=calm-reassuring`

| Layer | Decision |
|---|---|
| Composition | Tabs: Accounts, Pay, Cards, Help. Accounts home: available balance as text (not a card), pending total beneath, then transactions grouped by day with pending at top. Transaction detail shows merchant, time, status, and actions (dispute, split). |
| Type | Humanist sans (Source Sans 3 or Noto Sans), balances 32px tabular, rows 16px. Arabic: Noto Sans Arabic; amounts with locale digits policy chosen and consistent. |
| Color | canvas #F6F5F1 · surface #FFFFFF · ink #1B1E1C · muted #555B57 · line #D9DBD5 · action #1D4F43 · on-action #FFFFFF. Outgoing amounts ink, incoming with + and dark green text; pending in muted italic with "Pending" label. |
| Space and shape | 8px base; 56px transaction rows; 10px radius on sheets and buttons. Stroke and lift: transaction rows are divided by one 1px line with no card borders; the pending group differs by label and a muted amount, not a second border; sheets carry the only lift. |
| Icons and imagery | Merchant logos where reliable; category glyphs otherwise. No illustrations on money screens. |
| Components | Transfer flow: recipient, amount, review with fees and arrival time, confirm with biometrics; freeze card toggle with immediate effect message. Shown when: the pending total shows only when something is pending, the maintenance banner only during maintenance, and the confirm step for transfers always shows fees and arrival time because it is a safeguard; no balance cards or promotional banners on money screens. Copy: statuses are plain words with dates ("Pending, settles by Fri"), and a decline states its reason. |
| States | Declined transactions show reason; reversed shows link to original; maintenance banner with time; suspicious activity asks for confirmation in plain language. |
| Responsive | Phone first; tablet two-pane (list and detail); web desktop adds statement download and filters. |
| Motion | Transfer confirmation marks completion with a short check (250ms) and the new pending row appears. Reduced motion: static. |
| Accessibility | Amounts read with currency and sign; biometrics with passcode fallback. |
| Build | Money as integers in minor units; formatting centralized per locale. Accept: capture home with pending items, a declined transaction, a transfer review, and a frozen card at 390 and a tablet, checking row rules are even and amounts align by their decimal point. |
| AI mutation | Gradient balance card, spending donut on home, emoji categories, pending indistinguishable. |
| Fails when | Business finance teams; traders. |

### Counting House
**Thesis.** Accounting is double-entry discipline made visible: ledgers, periods, and reconciliation status in exact tables where nothing is decorated. Character: meticulous, trustworthy. Audience: bookkeepers, accountants, finance teams. **Fit:** accounting software, bookkeeping, reconciliation, financial reporting.

**Fingerprint** `density=dense; composition=ledger; surface=flat-bordered; type=technical-sans; nav=persistent-sidebar; accent=low; motion=none; imagery=none; radius=square; data=strong; tone=meticulous`

| Layer | Decision |
|---|---|
| Composition | Sidebar by function (Banking, Sales, Purchases, Accounts, Reports). Reconciliation: bank lines left, matched ledger entries right, match actions between. Reports as paginated statements with period selector. |
| Type | Technical sans (IBM Plex Sans 13px), tabular figures, mono for account codes. Arabic: IBM Plex Sans Arabic. |
| Color | canvas #F4F4F2 · surface #FFFFFF · ink #141414 · muted #545454 · line #CBCBC6 · action #2B4A6F · on-action #FFFFFF. Debit/credit by column, never by color alone. |
| Space and shape | 32px rows, square corners, full-grid borders in ledgers. Stroke and lift: ledgers use a full 1px grid with square corners and no shadows; the matched line changes fill only, and an imbalance marks the difference cell once. |
| Icons and imagery | None. |
| Components | Match, split, create rule from match; journal entry with balanced check; lock period with confirmation. Shown when: the unreconciled count appears per account only when nonzero, the lock explanation only on locked periods, and the balance check only when a journal is open; no dashboard tiles above the ledger. Copy: periods and accounts use the books' own names, and an imbalance states the amount of the difference. |
| States | Unreconciled count per account; locked periods block edits with explanation; imbalance flagged with difference. |
| Responsive | Desktop only for bookkeeping; phone for approvals and receipt capture. |
| Motion | None. |
| Accessibility | Tables with headers and summaries; keyboard matching. |
| Build | Decimal-safe arithmetic; audit trail for every edit. Accept: capture reconciliation with matches, a locked period edit attempt, an imbalanced journal, and a paginated report at 1440 and a laptop, checking the grid lines stay continuous across pages and the sidebar edge. |
| AI mutation | Revenue KPI cards, charts on every page, rounded cards instead of ledgers. |
| Fails when | Consumers checking their own money. |

### Invoice Paper
**Thesis.** An invoice is a document sent between businesses; the product lets you compose it as the paper it will become and follow it until it is paid. Character: professional, friendly. Audience: freelancers and small businesses. **Fit:** invoicing, quotes, payment links, small-business payments.

**Fingerprint** `density=medium; composition=document; surface=paper-sheet; type=grotesque; nav=top-bar; accent=medium; motion=restrained-causal; imagery=none; radius=low; data=moderate; tone=professional-friendly`

| Layer | Decision |
|---|---|
| Composition | Top bar: Invoices, Clients, Payments. Editor shows the invoice as a sheet with inline editable fields; right side shows send options and payment methods. List of invoices shows status and amount due with ageing. |
| Type | Grotesk (Work Sans or Schibsted Grotesk), invoice numbers tabular. Arabic: IBM Plex Sans Arabic; invoice direction follows client locale. |
| Color | canvas #EFEEEA · surface #FFFFFF · ink #1B1B1A · muted #585854 · line #D6D4CE · action #1E5A7A · on-action #FFFFFF. Status: draft grey, sent blue, overdue amber, paid green, each with text. |
| Space and shape | Sheet with 48px padding; 4px radius controls. Stroke and lift: the sheet separates from the canvas by tone and a single soft edge, and fields on it carry no boxes until edited; the focused field owns the ring; the preview matches the PDF stroke for stroke. |
| Icons and imagery | Client's logo on the invoice; none else. |
| Components | Add line item with tax, send with preview of email, payment link, reminders schedule. Shown when: the reminder history shows only on overdue invoices, partial payment lines only after a payment, and the receipt only when paid; send options appear after the invoice validates. Copy: invoice text uses the sender's terms and exact amounts with currency, and statuses say days overdue. |
| States | Overdue with days and reminder history; partially paid; paid with receipt. A failed email send keeps the invoice as draft with the reason; an empty list offers a first invoice. |
| Responsive | Phone: create from template and send; preview sheet scales. |
| Motion | Status change animates the badge (150ms). Reduced motion: none. |
| Accessibility | Invoice PDF tagged; form labels explicit. |
| Build | PDF rendering from same template as preview. Accept: capture the editor, a sent invoice, an overdue invoice, a part-paid one, and the generated PDF at desktop and 390, checking the preview and PDF share margins and line weights. |
| AI mutation | Dashboard with revenue charts before the user has sent an invoice, gradient sidebar. |
| Fails when | Enterprise accounts payable (use Treasury Console). |

### Ticker Tape
**Thesis.** Active trading is an instrument panel: prices, depth, positions, and orders in a dense dark workspace where every action states its exact consequence. Character: alert, disciplined. Audience: active traders. **Fit:** trading platforms, brokerage pro modes, exchanges.

**Fingerprint** `density=dense; composition=instrument-grid; surface=flat-bordered; type=mono-led; nav=rail; accent=multi-role; motion=restrained-causal; imagery=data-graphic; radius=square; data=strong; tone=alert-disciplined`

| Layer | Decision |
|---|---|
| Composition | Rail of workspaces; grid of panels: chart, order book, order ticket, positions, orders, watchlist. Panels resizable and savable. |
| Type | Mono for prices and quantities (IBM Plex Mono or JetBrains Mono 13px), sans for labels (IBM Plex Sans 12px). |
| Color | canvas #0D1014 · surface #151A20 · ink #E8ECF0 · muted #9AA4AF · line #26303A · action #5AB0FF · on-action #0D1014. Up/down in teal and orange (colorblind-safer than red/green) plus arrows and signs. |
| Space and shape | 24px rows; square panels; 1px borders. Stroke and lift: panels share one 1px border and square corners; a rejected order marks its row once, and the focused ticket field owns the ring; no shadows or glow behind price changes. |
| Icons and imagery | Charts with volume, indicators with legends. |
| Components | Order ticket: side, type, quantity, price, time in force, estimated cost and fees, confirm; one-click trading opt-in only with explicit setting. Shown when: one-click trading shows only when explicitly enabled, the stale-price time only when feed lags, and the frozen-ticket notice only when the connection is lost; the order ticket always shows estimated cost and fees because it is a safeguard. Copy: rejections state the reason and what to change, and sides and types use exact market terms. |
| States | Market closed; partial fill; rejected with reason; stale price marked with time; connection lost freezes ticket. |
| Responsive | Desktop; tablet reduced grid; phone single-asset view with ticket sheet. |
| Motion | Price changes flash background 200ms; no other animation. Reduced motion: text color change only. |
| Accessibility | Price direction in text/sign; flashing optional. |
| Build | Websocket updates throttled to render budget; server-confirmed state only. Accept: capture a full workspace, an order with partial fill, a rejection, a stale price, and a lost connection at 2560 and a laptop, checking panel borders are continuous and the ticket stays on screen. |
| AI mutation | Neon crypto gradients, confetti on trades, red/green only. |
| Fails when | Long-term investors (use Long View). |

### Long View
**Thesis.** Long-term investing is about years; the interface speaks in goals and time horizons, shows volatility honestly, and discourages reactive trading. Character: patient, steady. Audience: retirement and goal-based investors. **Fit:** robo-advisors, retirement accounts, savings goals, wealth management for individuals.

**Fingerprint** `density=sparse; composition=timeline; surface=tonal-blocks; type=editorial-serif; nav=top-bar; accent=low; motion=none; imagery=data-graphic; radius=medium; data=moderate; tone=patient-steady`

| Layer | Decision |
|---|---|
| Composition | Home: each goal as a band with target, date, current value, and a projection range over years; performance shown over the goal's horizon by default, not today. |
| Type | Editorial serif for headings and goal names (Newsreader or Source Serif 4), sans for numbers (Source Sans 3 tabular). Arabic: Noto Naskh Arabic headings. |
| Color | canvas #F4F2EC · surface #FFFFFF · ink #1E211F · muted #585D59 · line #D8D6CE · action #2E4F3E · on-action #FFFFFF. Projection ranges as shaded bands, not single lines. |
| Space and shape | Tonal goal bands, 12px radius, generous spacing. Stroke and lift: goal bands differ by tone with no border; the selected goal adds one outline, and an off-track goal changes its label, not a warning border; chart ranges are shaded areas, with no shadows. |
| Icons and imagery | Projection charts only. |
| Components | Adjust contribution and see projection change; rebalance explanation; withdraw with tax consequences stated. Shown when: the market-drop message appears only during a significant drop and always with the horizon context, the off-track suggestion only when a goal is off track, and tax consequences on every withdrawal because they are a required disclosure; no daily gain or loss tickers. Copy: ranges and horizons in years, never a single predicted figure. |
| States | Market drop messaging with context; off-track goal suggests specific changes; pending deposits. A pending deposit shows the expected date and keeps the projection unchanged until it settles; a new account shows goals with no history and says why. |
| Responsive | Phone first; charts simplify to range and date. |
| Motion | None (calm is the point). |
| Accessibility | Projection described in text ("Likely between X and Y by 2045"). |
| Build | Projection model documented; ranges not point estimates. Accept: capture home, a goal detail, a market-drop state, and a withdrawal confirmation at 390 and a laptop, checking the projection range shading is unclipped at the chart edges. |
| AI mutation | Day-change red/green, trading prompts, confetti. |
| Fails when | Active traders. |

### Receipt Stack
**Thesis.** Expenses begin as receipts in pockets; the product is an inbox of receipt objects you capture, match, and submit, with policy made visible. Character: brisk, helpful. Audience: employees and finance approvers. **Fit:** expense management, corporate cards, reimbursement.

**Fingerprint** `density=medium; composition=stream; surface=elevated-cards; type=grotesque; nav=tab-bar; accent=multi-role; motion=physical-direct; imagery=user-content; radius=low; data=moderate; tone=brisk-helpful`

| Layer | Decision |
|---|---|
| Composition | Tabs: Inbox, Reports, Approvals, Card. Inbox: stream of captured receipts and card transactions, each a receipt-shaped card with photo thumbnail, merchant, amount, match status. |
| Type | Grotesk (Hanken Grotesk 15px), amounts tabular. |
| Color | canvas #EEF0F0 · surface #FFFFFF · ink #161A1A · muted #515959 · line #CDD4D4 · action #0E5C5C · on-action #FFFFFF. Policy states: within policy neutral, needs info amber, out of policy red text with rule. |
| Space and shape | Receipt cards with 3px radius and a slight shadow (they are objects); 8px base. Stroke and lift: receipt cards are objects with a slight shadow and a 3px radius, and no border; the selected card gains an outline, and a policy violation adds a text line, not another marker; lists elsewhere are flat. |
| Icons and imagery | Photos of receipts. |
| Components | Camera capture with auto-crop; auto-match to card transactions; swipe to add to report with keyboard alternative. Shown when: the OCR confidence note appears only on low-confidence fields, the policy explanation only on violations, and the reimbursed date only after payment; no gamified submit streaks. Copy: policy messages name the rule and the limit ("Meals over 60 need an attendee"). |
| States | Unmatched, matched, missing receipt, policy violation with explanation, approved, reimbursed with date. |
| Responsive | Phone capture first; desktop approvals as table. |
| Motion | Matched receipt snaps onto its transaction (200ms). Reduced motion: instant. |
| Accessibility | Swipe actions have buttons; OCR results editable. |
| Build | OCR confidence surfaced for low-confidence fields. Accept: capture the inbox with each match status, camera capture, a policy violation, and an approved report at 390 and a laptop, checking the shadow is not clipped by the list edge. |
| AI mutation | Spend analytics dashboards for employees, gradients, gamified savings. |
| Fails when | Accountants reconciling (use Counting House). |

### Policy Plain
**Thesis.** Insurance earns trust by explaining coverage in plain language with diagrams of what is and isn't covered, step by step. Character: plain-spoken, fair. Audience: people buying or claiming insurance. **Fit:** insurance quotes, policy management, claims.

**Fingerprint** `density=medium; composition=stepwise; surface=flat-bordered; type=institutional-sans; nav=stepwise; accent=low; motion=none; imagery=diagram; radius=medium; data=light; tone=plain-spoken`

| Layer | Decision |
|---|---|
| Composition | Quote as one question per page with a running summary; policy page with "Covered" and "Not covered" side by side; claim flow with photo upload and status timeline. |
| Type | Institutional sans (Public Sans 17px). Arabic: Noto Sans Arabic. |
| Color | canvas #F5F6F7 · surface #FFFFFF · ink #1A1C1E · muted #53585E · line #D2D6DA · action #264C73 · on-action #FFFFFF. |
| Space and shape | 8px base; 8px radius; bordered sections. Stroke and lift: sections have one 1px border and the same 8px radius; the Covered and Not covered columns differ by label and icon, and never by border color alone; no shadows. |
| Icons and imagery | Simple diagrams of scenarios (water leak, theft) with covered/not labels. |
| Components | Coverage comparison table; document download; claim upload with checklist. Shown when: the running summary shows beside the question once an answer exists, the expected time only during underwriting, and the lapsed-policy fix only for lapsed policies; the coverage exclusions are always visible because they are a required disclosure. Copy: terms are plain with the legal term in parentheses, and claim stages say what happens next. |
| States | Underwriting review with expected time; claim status stages with what happens next; lapsed policy with fix. |
| Responsive | Phone first; comparison stacks per plan. |
| Motion | None. |
| Accessibility | Plain language, reading level tested; documents accessible PDFs. |
| Build | Coverage terms as structured data powering both comparison and documents. Accept: capture a quote step, the coverage comparison, a claim timeline, and a lapsed policy at 390 and a laptop, checking the side-by-side columns stack in order without losing which is which. |
| AI mutation | Shields, umbrellas, smiling stock families, three glowing pricing cards. |
| Fails when | Trading or high-frequency tasks. |

### Vault Ledger
**Thesis.** Self-custody is guarding: a dark, sober vault where addresses are verified character by character and irreversible actions slow down on purpose. Character: guarded, precise. Audience: crypto holders using wallets. **Fit:** crypto wallets, self-custody, on-chain transfers.

**Fingerprint** `density=medium; composition=hub; surface=layered-panels; type=technical-sans; nav=tab-bar; accent=low; motion=restrained-causal; imagery=none; radius=medium; data=moderate; tone=guarded`

| Layer | Decision |
|---|---|
| Composition | Home hub: total value, assets list, Send/Receive; send flow verifies address (chunked display, network, ENS/name resolution) before amount; activity with confirmations. |
| Type | Technical sans (IBM Plex Sans), addresses in mono chunked by 4. |
| Color | canvas #16181B · surface #1F2226 · ink #EAE7E0 · muted #A39E93 · line #33373C · action #C8A96A · on-action #16181B. No neon; brass accent for primary only. |
| Space and shape | Layered panels; 8px radius; generous spacing in send confirmation. Stroke and lift: layered panels use one 1px line, and the full-address view uses a stronger stroke; the selected asset changes fill, and the wrong-network warning owns a single colored edge; no glow or neon. |
| Icons and imagery | Token logos; network icons with names. |
| Components | Address book with verification status; network selector explicit; simulation of transaction result before signing. Shown when: the gas warning appears only during a spike, the confirmation count only while unconfirmed, and the simulation result before every signing because it is a safeguard; addresses are never truncated without a full view. Copy: addresses show in chunks, networks by name, and failures state the fee that was spent. |
| States | Unconfirmed with confirmations count; wrong network warning; gas spike; failed transaction with fee spent explanation. |
| Responsive | Phone and extension sizes first; desktop wider activity. |
| Motion | Confirmation count updates; no celebratory animation. Reduced motion: none. |
| Accessibility | Addresses readable in chunks by screen readers; warnings not color-only. |
| Build | Simulation before sign; never truncate addresses without a full view. Accept: capture the send flow with address verification, a wrong network, the simulation, an unconfirmed transfer, and a failed one at 390, checking chunked addresses never wrap mid-chunk and borders are complete. |
| AI mutation | Neon gradients, 3D coins, "to the moon" copy, confetti. |
| Fails when | Custodial banking customers. |

### Treasury Console
**Thesis.** Business cash is controlled by process: every outgoing payment passes through visible approvals, limits, and audit, with the detail beside the queue. Character: controlled, accountable. Audience: finance teams and approvers. **Fit:** business banking, accounts payable, treasury, payroll approvals.

**Fingerprint** `density=dense; composition=master-detail; surface=layered-panels; type=institutional-sans; nav=persistent-sidebar; accent=low; motion=none; imagery=none; radius=low; data=strong; tone=controlled`

| Layer | Decision |
|---|---|
| Composition | Sidebar: Cash, Payments, Approvals, Vendors, Users, Audit. Approvals: queue left with amount, payee, requester, due; detail right with invoice, bank details change history, approval chain. |
| Type | Institutional sans (Public Sans 14px), tabular amounts. Arabic: Noto Sans Arabic. |
| Color | canvas #EDEFF1 · surface #FFFFFF · ink #15181B · muted #4F555C · line #C8CDD3 · action #1A4B6E · on-action #FFFFFF. Changed bank details flagged in amber with date. |
| Space and shape | 40px rows; 4px radius; layered panel tones. Stroke and lift: panels differ by tone with one 1px line; the selected queue item changes fill, and a payee-details warning is a labelled row, not a colored border; no shadows. |
| Icons and imagery | None. |
| Components | Approve/reject with comment; batch approve with total; limits per user. Shown when: the second-approval marker appears only on payments that need it, the payee-change warning only for recently changed details, and the batch total only when batch approving; approvals always show the full chain because it is a control. Copy: failures name the bank's reason, and approvals name who must act next. |
| States | Awaiting second approval; scheduled; failed with bank reason; payee details recently changed warning. |
| Responsive | Desktop; phone approvals with full detail. |
| Motion | None. |
| Accessibility | Keyboard approval; totals announced. |
| Build | Approval rules server-side; immutable audit log. Accept: capture the queue, a payment awaiting second approval, a failed payment, and a changed-payee warning at 1440 and a tablet, checking the queue and detail edges align and chain rows are not clipped. |
| AI mutation | Cash KPI cards with sparklines, gradient charts. |
| Fails when | Individuals. |

### Everyday Pocket
**Thesis.** For young and first-time account holders, money should feel approachable and honest: a bright, friendly home that answers "what can I spend?" and celebrates saving goals, never spending. Character: cheerful, honest. Audience: teens, students, young adults. **Fit:** youth banking, budgeting-first neobanks, allowance apps.

**Fingerprint** `density=sparse; composition=stage; surface=full-bleed; type=rounded-sans; nav=tab-bar; accent=high; motion=event-celebration; imagery=illustration; radius=high; data=light; tone=cheerful-honest`

| Layer | Decision |
|---|---|
| Composition | Home stage: "Safe to spend until Friday" amount large on a full-bleed brand color, then upcoming bills and goals; transactions a tab away. |
| Type | Rounded sans (Nunito or Baloo 2 for display, Nunito Sans body). Arabic: Baloo Bhaijaan 2 display, Tajawal body. |
| Color | canvas #FFF8EC · surface #FFFFFF · ink #221C16 · muted #5F554A · line #EADFCD · action #0E6E62 · on-action #FFFFFF. Stage background uses the brand color with ink text at ≥ 7:1. |
| Space and shape | 20px radii; big targets; tonal goal jars. Stroke and lift: goal jars are tonal shapes with no outlines; the safe-to-spend block is a full-bleed fill with no border; cards and sheets use one soft shadow, and warnings use a plain row, never an illustration. |
| Icons and imagery | Friendly illustrations for goals and empty states, never on warnings. |
| Components | Goal jars with round-ups; parent controls (for teens); card freeze. Shown when: low-balance warnings appear early and in plain words, the parent-approval note only on teen accounts, and the explanation of safe-to-spend on tap; no spending streaks, no celebration for spending. Copy: friendly but exact ("You can spend 42 until Friday"), and declines explain why. |
| States | Low balance warns early in plain words; declined payment explains; parent approval pending. |
| Responsive | Phone only first; tablet same layout scaled. |
| Motion | Goal reached celebration once; nothing celebrates spending. Reduced motion: static badge. |
| Accessibility | Plain language; amounts read clearly; dyslexia-friendly option. |
| Build | Safe-to-spend calculation explained on tap. Accept: capture home, a goal jar, a low-balance warning, a declined payment, and a parent approval at 390, checking the brand-color block keeps text contrast and the warning stays legible. |
| AI mutation | Gamified spending rewards, crypto promos, dark patterns. |
| Fails when | Adults managing complex finances. |

## Confusable pairs

- **Statement Line vs Counting House:** both ledgers. Statement Line is a customer's calm history; Counting House is a professional's reconciliation instrument.
- **Ticker Tape vs Long View:** both investing. Ticker Tape serves minutes; Long View serves decades and deliberately removes minute-level noise.
- **Treasury Console vs Invoice Paper:** both business payments. Treasury controls outgoing money through approvals; Invoice Paper composes and chases incoming money.
