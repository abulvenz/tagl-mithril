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
                ...
            ),
            section.content(
                h1.title()
            )
        ]
    }
})


```