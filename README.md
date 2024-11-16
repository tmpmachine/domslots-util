domslots-util
=============

Usage:

```js
let slots = DOMSlots(parentNode);
slots.title?.replaceChildren('Example');
```

Example:

```html
<div class="_container">
    <span data-slot="title"> Placeholder </span>
</div>
```

```js
let $ = document.querySelector.bind(document);
let parentNode = $('._container');

let slots = DOMSlots(parentNode);
slots.title?.replaceChildren('Example');
```