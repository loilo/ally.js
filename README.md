# @loilo/ally.js

This is a fork of [ally.js](https://allyjs.io/) (v1.4.1) with very minor modifications for exclusive usage with bundlers. Unlike the original ally.js, you can import this package in your bundled source code as a whole and it will be [tree-shaken](https://en.wikipedia.org/wiki/Tree_shaking) without any further effort:

```js
import * as ally from '@loilo/ally.js'

console.log(ally.get.activeElement())
```

Bundling this source code with [webpack](https://webpack.js.org) will result in this 200 bytes bundle:

```js
(()=>{"use strict";console.log(function({context:e}={}){const t=(n=e)?n.nodeType===Node.DOCUMENT_NODE?n:n.ownerDocument||document:document;var n;let o;try{o=t.activeElement}catch(e){}return o&&o.nodeType||(o=t.body||t.documentElement),o}())})();
```
