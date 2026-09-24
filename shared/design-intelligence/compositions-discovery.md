# Compositions: Discovery and Commerce Family

---

## Catalog grid

| Aspect | Guidance |
|---|---|
| Solves | Browsing many comparable items |
| Content needs | Consistent item cards with decision attributes (price, rating, availability) |
| Hierarchy / focal | Filters and count above; items; consistent action position |
| Responsive | Columns reduce by content minimum width, not by fixed breakpoints |
| Sparse state | One or two items must not stretch full width |
| Dense state | Pagination or "load more" with a reachable footer |
| Fails when | Cards show decoration instead of decision data |
| Precedent | IKEA (IK2, IK3), Steam (ST2) |

## Masonry discovery

| Aspect | Guidance |
|---|---|
| Solves | Visual items of mixed aspect ratios |
| Accessibility | Reading order across columns is confusing; provide logical DOM order |
| Fails when | Items need comparison (use a grid) |

## Feed with contextual rail

| Aspect | Guidance |
|---|---|
| Solves | Continuous content plus related context |
| Content needs | Feed items; a rail with real context (trends, filters, the user's state) |
| Responsive | Rail moves below or into a sheet on phones |
| Fails when | The rail is filled with promotions |

## Search-first

| Aspect | Guidance |
|---|---|
| Solves | The query is the entry point |
| Content needs | The search form with inferred defaults; recent searches |
| Hierarchy / focal | The search form is the focal object |
| Responsive | Fold the form into one tap target on phones |
| Precedent | Google Flights (G1), Airbnb (ABd1, ABm1), GOV.UK (UKm2) |

## Image-led commerce

| Aspect | Guidance |
|---|---|
| Solves | Selling through imagery |
| Content needs | Consistent, art-directed images; price and availability close by |
| Fails when | Images push price and purchase far below |
| Precedent | Nike (NK1), Aesop (AE1), Patagonia (PA2) |

## Product-first commerce

| Aspect | Guidance |
|---|---|
| Solves | Deciding and buying one item |
| Content needs | Images, variant, price, delivery, returns, buy, in one block |
| Hierarchy / focal | Decision block in the first viewport on phones |
| Fails when | Modals, promotions, or blank known choices precede the decision |
| Precedent | Apple (AP3), Wise (W1) as a financial analogue |

## Comparison surface

| Aspect | Guidance |
|---|---|
| Solves | Choosing between a few options |
| Content needs | Aligned attributes across options; differences highlighted |
| Responsive | Horizontal scroll with sticky labels, or one-at-a-time with a summary |
| Precedent | IKEA compare (IK2) |

## Timeline

| Aspect | Guidance |
|---|---|
| Solves | Events ordered in time (activity, history, releases) |
| RTL | Time direction follows locale conventions |
| Fails when | Time is not the organizing dimension |

## Map-centered

| Aspect | Guidance |
|---|---|
| Solves | Place is the primary dimension |
| Content needs | Map plus a list equivalent |
| Accessibility | The list is the accessible path |

## Ecosystem index

| Aspect | Guidance |
|---|---|
| Solves | Several discovery lenses on one platform (featured, new, by category) |
| Content needs | Real inventory in each lens |
| Precedent | Coursera (CO1), Steam (ST1) |
| Fails when | Lenses repeat the same items |
