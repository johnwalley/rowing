---
"react-bumps-chart": minor
---

Export `layoutChartMultiYear`, which gives where every part of a `BumpsChartMultiYear` goes, so a page can line its own elements up with the chart, such as year labels that stay in view while the chart scrolls. Its layout now includes each race's position (`races`) and the height of a position (`rowHeight`).
