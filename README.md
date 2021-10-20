# d-tail
**D**ynamically **t**ype-checked **a**ccessors for **i**ndex-**l**inked arrays.

## Motivation
Index-linked arrays are a great, lightweight solution for storing and sending attributes. Especially with thousands of game entities, sent tens of times per second.

d-tail creates accessor objects whose properties get/set and dynamically type-check values at an entity's index across all index-linked attribute arrays.
