# Introduction

## Before browsing the documentation, here is some information for getting started with the `svelte-luda` framework

## Quick-Start

### Installation

```sh
npm install git+https://github.com/novacbn/svelte-luda#0.0.1
```

### Simple Example

```svelte repl
<script>
    import {Article, Header, Paragraph} from "svelte-luda/lib/components/base";
</script>

<Article bc-dark c-light>
    <Header size="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Header>

    <Paragraph>
        Etiam ut dignissim nunc, sit amet placerat ligula. Fusce varius ex mollis ligula consequat, nec vestibulum ligula tristique. Praesent nec congue urna, nec mattis urna. Nullam a iaculis dui, sit amet pharetra risus. Quisque rutrum at nulla sed pulvinar. Sed quis dictum eros. Pellentesque iaculis purus ligula. Nullam ac suscipit turpis. Cras rhoncus tellus id blandit consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris tristique sollicitudin dapibus. Vivamus dignissim lacus at metus faucibus luctus. Donec at tincidunt eros. Vivamus feugiat elit sed nunc blandit, venenatis blandit magna ullamcorper.
    </Paragraph>
</Article>
```

## References

-   [Base](./base) ― Represents basic bindings to HTML elements, such as [`Article`](./base/article.md) and [`Paragraph`](./base/paragraph.md)
-   [Elements](./elements) ― Represents advanced bindings to HTML elements and simple Components, such as [`Button`](./elements/button.md) and [`Badge`](./elements/badge.md)
-   [Patterns](./patterns) ― Represents advanced bindings to complex Component patterns, such as [`Navigation`](./patterns/navigation.md)
-   [Utilities](./utilities) ― Represents toggle bindings to Luda-supplied utility classes that be used with any Componet, such as [`Color`](./utilities/color.md) and [`Flex`](./utilities/flex.md)

## F.A.Q.
