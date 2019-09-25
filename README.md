<h1 align=center>Timeline</h1>
<h3 align=center>JavaScript Undo/Redo mechanism with simple API</h3>
<p align=center>
<a href="https://travis-ci.org/uditalias/timeline"><img src="https://travis-ci.org/uditalias/timeline.svg?branch=master" alt="npm version" height="18"></a> <a href="https://badge.fury.io/js/%40udidu%2Ftimeline"><img src="https://badge.fury.io/js/%40udidu%2Ftimeline.svg" alt="npm version" height="18"></a> <img src="https://img.shields.io/bundlephobia/minzip/@udidu/timeline" alt="npm bundle size" height="18">
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

Or

```html
<script src="https://cdn.jsdelivr.net/npm/@udidu/timeline@latest/umd/timeline.min.js"></script>
```

<h4>Usage</h4>

```javascript
import Timline from "@udidu/timeline";

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
