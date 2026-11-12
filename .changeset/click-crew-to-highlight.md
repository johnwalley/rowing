---
"react-bumps-chart": minor
---

Add `onClubClick` to `BumpsChart` and `BumpsChartMultiYear`: it's called with a crew's club when its name or line is clicked, or a starting name is pressed with Enter or Space. With it, the starting names are toggle buttons (`aria-pressed` while highlighted) and the chart shows a pointer over crews. Without it, the chart renders as before. The layout's crew labels and lines now carry each crew's `club`.
