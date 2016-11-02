---
layout: post
title:  "A sass/less mixin for perfect baseline grids"
---

It can be unreasonably difficult to achieve a regular baseline grid in the browser. Some great progress has been made by the likes of [Basehold.it](http://basehold.it/) but the fundamental problem remains.

> The way fonts are positioned in css has nothing to do with the baseline!

There's no need reason to despair. There's actually still a mathematical relationship between the baseline values and css values.

<div>
<div class="col-3"></div>
<img class="top" src="/images/logo.svg" alt="">
</div>

### Just show me the mixin!

Okay, hold your horses.

```scss
@mixin baseline(
  $font-size: 14px,
  $baseline: 20px,
  $first-baseline: $baseline,
  $after: 0,
  $ratio: 1.4 // cap height : descender
) {

  $shift: (($ratio / 8) * $font-size);
  $shift: $shift + (($baseline - $font-size) / 2);

  box-sizing: content-box;

  font-size: $font-size;
  line-height: $baseline;
  margin-top: ($first-baseline - $baseline + $shift);
  $aftern: ($after - $shift);
  @if $aftern < 0 {
    margin-bottom: $aftern;
    padding-bottom: 0;
  } @else {
    padding-bottom: $aftern;
    margin-bottom: 0;
  }
}
```

