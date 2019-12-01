<script>
    import Repl from "../../../components/Repl.svelte";
    import Layout from "../_layout.svelte";

    import examples from "./_examples.toml";
</script>

<Layout>
    <article class="article">
        <h1 class="fw-semibold">Button</h1>
        <h3 class="fw-light">
            Buttons are simple blocky elements that be clicked to active internal application
            functionality or even some times act as a link.
        </h3>

        <h2>Import via CommonJS</h2>
        <pre>
            <code>const Button = require("svelte-luda/lib/elements/Button.svelte");</code>
        </pre>

        <h2>Import via ES2015</h2>
        <pre>
            <code>import Button from "svelte-luda/lib/elements/Button.svelte";</code>
        </pre>

        <h2>
            Import from
            <code>{'<script />'}</code>
            Package
        </h2>
        <pre>
            <code>const {'{Button}'} = window.luda;</code>
        </pre>
    </article>

    <article class="article">
        <h1>Button Styles</h1>
        <p>
            A button can be created by using the
            <code>Button</code>
            Component, can be customized with different a look and feel. Let's preview the button
            styles in the below examples.
        </p>

        <h2>Solid Buttons</h2>
        <small class="d-block">
            <code>type Button.color = "danger" | "dark" | "light" | "primary" | "secondary";</code>
        </small>
        <p>
            Change the
            <code>Button.color</code>
            property to create solid buttons.
        </p>
        <Repl value={examples.styles.solid} />

        <h2>Hollow Buttons</h2>
        <small class="d-block">
            <code>type Button.hollow = boolean;</code>
        </small>
        <p>
            A hollow button shows its background when being hovered of clicked. Toggle the
            <code>Button.hollow</code>
            property to create hollow styled buttons.
        </p>
        <Repl value={examples.styles.hollow} />

        <h2>Text Buttons</h2>
        <small class="d-block">
            <code>type Button.text = boolean;</code>
        </small>
        <p>
            Text buttons have the same sizes as solid and hollow buttons. They have no backgrounds
            or borders. Toggle the
            <code>Button.text</code>
            property to create text styled buttons.
        </p>
        <Repl value={examples.styles.text} />
    </article>

    <article class="article">
        <h1>Button Tags</h1>
        <small class="d-block">
            <code>type Button.href = string;</code>
        </small>
        <p>
            To utilize links as a
            <code>Button</code>
            , simply change the
            <code>Button.href</code>
            property.
        </p>
        <Repl value={examples.tags.href} />
    </article>

    <article class="article">
        <h1>Functional Buttons</h1>
        <p>Luda offers some functional buttons, let's have a look at what they can do.</p>

        <h2>Checkbox Buttons</h2>
        <small class="d-block">
            <pre>
                <code>type Button.checkbox = boolean;</code>
            </pre>
            <pre>
                <code>type Button.id = string;</code>
            </pre>
            <pre>
                <code>type Button.name = string;</code>
            </pre>
            <pre>
                <code>type Button.value = string;</code>
            </pre>
        </small>
        <p>
            Checkbox
            <code>Button</code>
            s look similar to normal
            <code>Button</code>
            s, but behave like normal
            <code>{'<input type="checkbox" />'}</code>
            elements. A checkbox
            <code>Button</code>
            is very simple to create, just toggle the
            <code>Button.checkbox</code>
            property.
        </p>
        <Repl value={examples.functional.checkbox} />

        <h2>Radio Buttons</h2>
        <small class="d-block">
            <pre>
                <code>type Button.radio = boolean;</code>
            </pre>
            <pre>
                <code>type Button.id = string;</code>
            </pre>
            <pre>
                <code>type Button.name = string;</code>
            </pre>
            <pre>
                <code>type Button.value = string;</code>
            </pre>
        </small>
        <p>
            Radio
            <code>Button</code>
            s look similar to normal
            <code>Button</code>
            s, but behave like normal
            <code>{'<input type="radio" />'}</code>
            elements. A radio
            <code>Button</code>
            is very simple to create, just toggle the
            <code>Button.radio</code>
            property.
        </p>
        <Repl value={examples.functional.radio} />

        <h2>File Buttons</h2>
        <small class="d-block">
            <pre>
                <code>type Button.file = boolean;</code>
            </pre>
            <pre>
                <code>type Button.id = string;</code>
            </pre>
            <pre>
                <code>type Button.multiple = string;</code>
            </pre>
            <pre>
                <code>type Button.name = string;</code>
            </pre>
        </small>
        <p>
            File
            <code>Button</code>
            s are used to pick up files. It's easy to create, almost the same as creating checkbox
            and radio
            <code>Button</code>
            s. Let's go straight to the below examples.
        </p>
        <Repl value={examples.functional.file} />
    </article>

    <article class="article">
        <h1>Button States</h1>
        <p>
            Button states can be controlled through the relavent
            <code>Button.*</code>
            properties
        </p>

        <h2>Active</h2>
        <small class="d-block">
            <code>type Button.active = boolean;</code>
        </small>
        <p>
            The
            <code>Button.active</code>
            property is used to show the active state of a
            <code>Button</code>
            or a functional
            <code>Button</code>
            , you can see the effect in the below examples.
        </p>
        <p>
            Also note, whenever a checkbox or radio
            <code>Button</code>
            was selected by the user,
            <code>Button.active</code>
            will be set to
            <code>true</code>
            . Like-wise, if you set
            <code>Button.active</code>
            , it will reflect the in the form state.
        </p>
        <Repl value={examples.states.active} />

        <h2>Disabled</h2>
        <small class="d-block">
            <code>type Button.disabled = boolean;</code>
        </small>
        <p>
            The
            <code>Button.disabled</code>
            property can be used to disable a
            <code>Button</code>
            or a functional
            <code>Button</code>
            . Disabled
            <code>Button</code>
            s cannot be focused nor respond to user actions.
        </p>
        <Repl value={examples.states.disabled} />

        <h2>Readonly</h2>
        <small class="d-block">
            <code>type Button.readonly = boolean;</code>
        </small>
        <p>
            A readonly functional
            <code>Button</code>
            cannot be focused, it doesn't respond to user actions. But still can be submitted if
            included in a
            <code>{'<form>'}</code>
            .
        </p>
        <Repl value={examples.states.readonly} />
    </article>

    <article class="article">
        <h1>Size Modifiers</h1>
        <p>
            If you want to change the size of a
            <code>Button</code>
            , you can use the side modifier properties
        </p>

        <h2>Small</h2>
        <small class="d-block">
            <code>type Button.size = "small";</code>
        </small>
        <p>
            By setting
            <code>Button.size</code>
            to
            <code>"small"</code>
            , it makes the
            <code>Button</code>
            smaller.
        </p>
        <Repl value={examples.sizes.small} />

        <h2>Large</h2>
        <small class="d-block">
            <code>type Button.size = "large";</code>
        </small>
        <p>
            By setting
            <code>Button.size</code>
            to
            <code>"large"</code>
            , it makes the
            <code>Button</code>
            larger.
        </p>
        <Repl value={examples.sizes.large} />

        <h2>Fluid</h2>
        <small class="d-block">
            <code>type Button.fluid = boolean;</code>
        </small>
        <p>
            By toggling
            <code>Button.size</code>
            , it makes the
            <code>Button</code>
            take up all available horizontal space in its container. You can also use the
            <code>Button.size</code>
            property with this property.
        </p>
        <Repl value={examples.sizes.fluid} />
    </article>

    <article class="article">
        <h1>Event Listeners</h1>
        <p>
            Like other
            <code>Component</code>
            s within this library,
            <code>Button</code>
            also provides an event.
        </p>

        <h2>click</h2>
        <small class="d-block">
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event">
                <code>MDN: Click Event</code>
            </a>
        </small>
        <p>
            You can bind to
            <code>on:click</code>
            to listen for when the end-user clicks a
            <code>Button</code>
            .
        </p>
        <Repl value={examples.events.click} />
    </article>
</Layout>
