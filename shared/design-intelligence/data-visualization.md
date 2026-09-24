# Data Visualization Selection

Choose a chart by the question the user is answering, then check when *not* to use it. The
data-type-to-chart guidance below is adapted from the UI UX Pro Max project's chart dataset (MIT; see
the third-party notices file), condensed and rewritten with Experience Skills' priorities: decisions
first, accessibility always.

## Start from the question

| Question | Usually | Not when | Accessibility risk |
|---|---|---|---|
| How did it change over time? | Line | Fewer than ~4 points (state the number); more than ~6 series | Low with labeled lines |
| How do categories compare? | Bar (horizontal for long labels) | More than ~15 categories (use a table or search); time dimension (use line) | Low |
| What share of the whole? | Stacked bar or waffle; pie/donut only for ≤ 5 parts with clear differences | Differences under ~5%; many parts | High for pie/donut |
| How are two variables related? | Scatter | Categorical variables; very few points | Conditional |
| Where is intensity high? | Heat map | Few cells; exact values needed; color-only encoding | Conditional |
| Where geographically? | Choropleth or bubble map | Region sizes distort comparison | Conditional; provide a table |
| Where do we lose people? | Funnel or bar by stage | Stages are not sequential | Conditional |
| Are we on target? | Bullet chart | No target exists | Low |
| What is forecast? | Line with uncertainty band | No historical baseline | Conditional |
| What is unusual? | Line with highlighted anomalies | Anomalies are predefined categories | Conditional |
| How is it nested? | Treemap (shallow hierarchies) | Depth > 3 levels; precise comparison needed | High |
| Where does flow go? | Sankey | Loops; very few flows | Conditional |
| What added up to the total? | Waterfall | Changes are not additive | Low |
| What is the distribution? | Box plot or histogram | Too few points per group | Low |
| Price action (finance audiences) | Candlestick | Non-financial audiences (use line) | Conditional |
| How are things connected? | Network graph (clustered) | Hundreds of nodes unclustered | High |
| What is happening right now? | Streaming line or area with pause | Updates less than once a minute (use periodic refresh) | Conditional; avoid flashing |

## Rules that apply to every chart

1. **One question per chart.** Title it with the question or the answer ("Late deliveries rose in North zone").
2. **Tables are charts too.** When users need exact values or comparison across many attributes, use
   a table.
3. **Color encodes meaning.** Categorical palettes distinguishable for color-vision deficiency; status
   colors reserved for status; never color alone (add labels, patterns, direct annotation).
4. **Direct labels beat legends** when there are few series.
5. **Show freshness** for live data ("as of 08:42").
6. **Text alternative:** a summary sentence and access to the underlying data table.
7. **Avoid decorative charts:** sparklines without axes or comparison on KPI cards inform nothing.
8. **3D, radar, word clouds, and sunbursts** are rarely the clearest option; justify them.
