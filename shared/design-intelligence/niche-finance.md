# Niche Atlas: Finance

Money interfaces carry consequence: a wrong number, an ambiguous pending state, or a hidden fee
damages trust quickly and sometimes permanently. The generated default is a gradient balance card,
a green-up line chart, and blue "fintech" everything. The real design material is time (pending vs
posted, settlement, due dates), certainty (what is final, what is an estimate), and control (limits,
approvals, reversibility). Load with `niche-atlas-index.md`; compare three systems with
`design-system-selector.md`.

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
| Space and shape | 8px base; 56px transaction rows; 10px radius on sheets and buttons. |
| Icons and imagery | Merchant logos where reliable; category glyphs otherwise. No illustrations on money screens. |
| Components | Transfer flow: recipient, amount, review with fees and arrival time, confirm with biometrics; freeze card toggle with immediate effect message. |
| States | Declined transactions show reason; reversed shows link to original; maintenance banner with time; suspicious activity asks for confirmation in plain language. |
| Responsive | Phone first; tablet two-pane (list and detail); web desktop adds statement download and filters. |
| Motion | Transfer confirmation marks completion with a short check (250ms) and the new pending row appears. Reduced motion: static. |
| Accessibility | Amounts read with currency and sign; biometrics with passcode fallback. |
| Build | Money as integers in minor units; formatting centralized per locale. |
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
| Space and shape | 32px rows, square corners, full-grid borders in ledgers. |
| Icons and imagery | None. |
| Components | Match, split, create rule from match; journal entry with balanced check; lock period with confirmation. |
| States | Unreconciled count per account; locked periods block edits with explanation; imbalance flagged with difference. |
| Responsive | Desktop only for bookkeeping; phone for approvals and receipt capture. |
| Motion | None. |
| Accessibility | Tables with headers and summaries; keyboard matching. |
| Build | Decimal-safe arithmetic; audit trail for every edit. |
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
| Space and shape | Sheet with 48px padding; 4px radius controls. |
| Icons and imagery | Client's logo on the invoice; none else. |
| Components | Add line item with tax, send with preview of email, payment link, reminders schedule. |
| States | Overdue with days and reminder history; partially paid; paid with receipt. |
| Responsive | Phone: create from template and send; preview sheet scales. |
| Motion | Status change animates the badge (150ms). Reduced motion: none. |
| Accessibility | Invoice PDF tagged; form labels explicit. |
| Build | PDF rendering from same template as preview. |
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
| Space and shape | 24px rows; square panels; 1px borders. |
| Icons and imagery | Charts with volume, indicators with legends. |
| Components | Order ticket: side, type, quantity, price, time in force, estimated cost and fees, confirm; one-click trading opt-in only with explicit setting. |
| States | Market closed; partial fill; rejected with reason; stale price marked with time; connection lost freezes ticket. |
| Responsive | Desktop; tablet reduced grid; phone single-asset view with ticket sheet. |
| Motion | Price changes flash background 200ms; no other animation. Reduced motion: text color change only. |
| Accessibility | Price direction in text/sign; flashing optional. |
| Build | Websocket updates throttled to render budget; server-confirmed state only. |
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
| Space and shape | Tonal goal bands, 12px radius, generous spacing. |
| Icons and imagery | Projection charts only. |
| Components | Adjust contribution and see projection change; rebalance explanation; withdraw with tax consequences stated. |
| States | Market drop messaging with context; off-track goal suggests specific changes; pending deposits. |
| Responsive | Phone first; charts simplify to range and date. |
| Motion | None (calm is the point). |
| Accessibility | Projection described in text ("Likely between X and Y by 2045"). |
| Build | Projection model documented; ranges not point estimates. |
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
| Space and shape | Receipt cards with 3px radius and a slight shadow (they are objects); 8px base. |
| Icons and imagery | Photos of receipts. |
| Components | Camera capture with auto-crop; auto-match to card transactions; swipe to add to report with keyboard alternative. |
| States | Unmatched, matched, missing receipt, policy violation with explanation, approved, reimbursed with date. |
| Responsive | Phone capture first; desktop approvals as table. |
| Motion | Matched receipt snaps onto its transaction (200ms). Reduced motion: instant. |
| Accessibility | Swipe actions have buttons; OCR results editable. |
| Build | OCR confidence surfaced for low-confidence fields. |
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
| Space and shape | 8px base; 8px radius; bordered sections. |
| Icons and imagery | Simple diagrams of scenarios (water leak, theft) with covered/not labels. |
| Components | Coverage comparison table; document download; claim upload with checklist. |
| States | Underwriting review with expected time; claim status stages with what happens next; lapsed policy with fix. |
| Responsive | Phone first; comparison stacks per plan. |
| Motion | None. |
| Accessibility | Plain language, reading level tested; documents accessible PDFs. |
| Build | Coverage terms as structured data powering both comparison and documents. |
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
| Space and shape | Layered panels; 8px radius; generous spacing in send confirmation. |
| Icons and imagery | Token logos; network icons with names. |
| Components | Address book with verification status; network selector explicit; simulation of transaction result before signing. |
| States | Unconfirmed with confirmations count; wrong network warning; gas spike; failed transaction with fee spent explanation. |
| Responsive | Phone and extension sizes first; desktop wider activity. |
| Motion | Confirmation count updates; no celebratory animation. Reduced motion: none. |
| Accessibility | Addresses readable in chunks by screen readers; warnings not color-only. |
| Build | Simulation before sign; never truncate addresses without a full view. |
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
| Space and shape | 40px rows; 4px radius; layered panel tones. |
| Icons and imagery | None. |
| Components | Approve/reject with comment; batch approve with total; limits per user. |
| States | Awaiting second approval; scheduled; failed with bank reason; payee details recently changed warning. |
| Responsive | Desktop; phone approvals with full detail. |
| Motion | None. |
| Accessibility | Keyboard approval; totals announced. |
| Build | Approval rules server-side; immutable audit log. |
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
| Space and shape | 20px radii; big targets; tonal goal jars. |
| Icons and imagery | Friendly illustrations for goals and empty states, never on warnings. |
| Components | Goal jars with round-ups; parent controls (for teens); card freeze. |
| States | Low balance warns early in plain words; declined payment explains; parent approval pending. |
| Responsive | Phone only first; tablet same layout scaled. |
| Motion | Goal reached celebration once; nothing celebrates spending. Reduced motion: static badge. |
| Accessibility | Plain language; amounts read clearly; dyslexia-friendly option. |
| Build | Safe-to-spend calculation explained on tap. |
| AI mutation | Gamified spending rewards, crypto promos, dark patterns. |
| Fails when | Adults managing complex finances. |

## Confusable pairs

- **Statement Line vs Counting House:** both ledgers. Statement Line is a customer's calm history; Counting House is a professional's reconciliation instrument.
- **Ticker Tape vs Long View:** both investing. Ticker Tape serves minutes; Long View serves decades and deliberately removes minute-level noise.
- **Treasury Console vs Invoice Paper:** both business payments. Treasury controls outgoing money through approvals; Invoice Paper composes and chases incoming money.
