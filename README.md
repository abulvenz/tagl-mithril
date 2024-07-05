# tagl-mithril

Wrapper around [tagl](https://github.com/StephanHoyer/tagl), a readability enhancement for hyperscript code. The example tagl function for [mithril](https://mithril.js.org) is extended by camelcase to hyphenated syntax for css-classes and ids.

# Installation

`npm install --save tagl-mithril`

## Example usage

```javascript
import tagl_hyperscript from 'tagl-mithril';
import m from 'mithril'

const {
    nav, 
    section, 
    footer,
    h1, 
    div
} = tagl_hyperscript(m);

m.mount(document.body,{
    view(vnode) {
        return [
            nav.navbar.isInfo(
                '...'
            ),
            section.content.$home(
                h1.title('Hello Tagl And Mithril')
            ),
            footer.fixedBottom(
                '...'
            )
        ]
    }
})
```
The above snippet will be rendered to the DOM like this:

```html
<nav class="navbar is-info">...</nav>
<section id="home" class="content">
  <h1 class="title">Hello Tagl And Mithril</h1>
</section>
<footer class="fixed-bottom">...</footer>
```

## What you should have noticed ...

... is that you need to define all tags that you want to use as a result of `tagl_hyperscript(m)`.

... is that `isInfo` was turned into `is-info`, because css classes don't like camelcase.

... is that `$home` was transformed into an id attribute for the section.

## How can I add calculated class names?
You can use bracket notation `div[<class expression]` to use JS-expressions for class calculation like this
```javascript

const fieldClass = (idx) =>
  (idx + trunc(idx / 8)) % 2 === 0 ? "black" : "white";

...
div.chessboard(
   range(64).map(
      idx => div[fieldClass(idx)]()
   )
)
```
