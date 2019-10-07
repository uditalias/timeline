<h1 align=center>
🕰</br>
Timeline
</h1>
<h3 align=center>JavaScript Undo/Redo mechanism with simple API < 1KB</h3>
<p align=center>
<a href="https://travis-ci.org/uditalias/timeline"><img src="https://travis-ci.org/uditalias/timeline.svg?branch=master" alt="npm version" height="18"></a> <a href="https://badge.fury.io/js/%40udidu%2Ftimeline"><img src="https://badge.fury.io/js/%40udidu%2Ftimeline.svg" alt="npm version" height="18"></a> <img src="https://img.shields.io/bundlephobia/minzip/@udidu/timeline" alt="npm bundle size" height="18">


<img alt="Langauge" src="http://badge.langauge.io/uditalias/timeline?maxAge=600">
</p>

<h4>Install</h4>

##### NPM

```bash
npm i @udidu/timeline
```

##### YARN

```bash
yarn add @udidu/timeline
```

##### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@udidu/timeline@latest/umd/timeline.js"></script>
```

Minified

```html
<script src="https://cdn.jsdelivr.net/npm/@udidu/timeline@latest/umd/timeline.min.js"></script>
```

<h4>Usage</h4>

```javascript
import Timeline from "@udidu/timeline";

const timeline = new Timeline();

timeline.setPresent(1);
timeline.setPresent(2);
timeline.setPresent(3);

timeline.present; // 3

timeline.undo(); // 2

timeline.hasPast; // true

timeline.hasFuture; // true

timeline.setPresent(4);

timeline.hasFuture; // false

timeline.undo(); // 2

timeline.redo(); // 4

timeline.clear();
timeline.hasPast; // false
timeline.hasFuture; // false
```

<h4>Options</h4>

All options are optional

```javascript
const timeline = new Timeline({
  // The size of the past queue
  // default: Infinity
  size: 5,

  // When calling `setPresent(preset)` the value is passed to this function.
  // this is good for cases when we want to clone the object before saving it.
  // default: echo function - returns the same value/reference
  cloneFn: item => toJS(item),

  // Initialize the present
  // default: undefined
  present: 2
});
```

For your convenience, I created this [**Fiddle**](https://jsfiddle.net/udidu/hcbkzvgj/), so you can take Timeline for a ride.

---

<h4>License</h4>

The MIT License (MIT)

Copyright (c) 2019 Udi Talias

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
