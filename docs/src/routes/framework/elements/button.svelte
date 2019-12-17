<script>
    const {Article, Header} = window.luda;

    import Repl from "../../../components/Repl.svelte";
    import DocsBlock from "../../../components/docs/DocsBlock.svelte";
    import DocsPreamble from "../../../components/docs/DocsPreamble.svelte";
    import DocsImport from "../../../components/docs/DocsImport.svelte";

    import Layout from "../_layout.svelte";

    import examples from "./_button.toml";
</script>

<Layout>
    <Article>
        <DocsPreamble
            title="Button"
            imports={[['elements', 'Button', ['BUTTON_COLOR_NAMES', 'BUTTON_SIZE_NAMES']]]}
        >
            Buttons are simple blocky elements that can be clicked to active internal application
            functionality or even some times act as a link.
        </DocsPreamble>
    </Article>

    <Article>
        <DocsBlock title="Button Styles">
            A button can be created by using the
            <code>Button</code>
            Component, can be customized with different a look and feel. Let's preview the button
            styles in the below examples.
        </DocsBlock>

        <DocsBlock
            code={examples.styles.solid}
            title="Solid Buttons"
            types={['type Button.color = "danger" | "dark" | "light" | "primary" | "secondary";']}
            small>
            Change the
            <code>Button.color</code>
            property to create solid buttons.
        </DocsBlock>

        <DocsBlock
            code={examples.styles.hollow}
            title="Hollow Buttons"
            types={['type Button.hollow = boolean;']}
            small>
            A hollow button shows its background when being hovered of clicked. Toggle the
            <code>Button.hollow</code>
            property to create hollow styled buttons.
        </DocsBlock>

        <DocsBlock
            code={examples.styles.text}
            title="Text Buttons"
            types={['type Button.text = boolean;']}
            small>
            Text buttons have the same sizes as solid and hollow buttons. They have no backgrounds
            or borders. Toggle the
            <code>Button.text</code>
            property to create text styled buttons.
        </DocsBlock>
    </Article>

    <Article>
        <DocsBlock
            code={examples.tags.href}
            title="Button Links"
            types={['type Button.href = string;']}>
            To utilize links as a
            <code>Button</code>
            , simply change the
            <code>Button.href</code>
            property.
        </DocsBlock>
    </Article>

    <Article>
        <DocsBlock title="Functional Buttons">
            Luda offers some functional buttons, let's have a look at what they can do.
        </DocsBlock>

        <DocsBlock
            code={examples.functional.checkbox}
            title="Checkbox Buttons"
            types={['type Button.checkbox = boolean;', 'type Button.id = string;', 'type Button.name = string;', 'type Button.value = string;']}
            small>
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
        </DocsBlock>

        <DocsBlock
            code={examples.functional.radio}
            title="Radio Buttons"
            types={['type Button.radio = boolean;', 'type Button.group = string;', 'type Button.id = string;', 'type Button.name = string;', 'type Button.value = string;']}
            small>
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
            property. Make sure to also bind
            <code>Button.group</code>
            to the same reference for multiple
            <code>Button</code>
            s to work.
        </DocsBlock>

        <DocsBlock
            code={examples.functional.file}
            title="File Buttons"
            types={['type Button.file = boolean;', 'type Button.id = string;', 'type Button.multiple = boolean', 'type Button.name = string;']}
            small>
            File
            <code>Button</code>
            s are used to pick up files. It's easy to create, almost the same as creating checkbox
            and radio
            <code>Button</code>
            s. Let's go straight to the below examples.
        </DocsBlock>
    </Article>

    <Article>
        <DocsBlock title="Button States">
            Button states can be controlled through the relavent
            <code>Button.*</code>
            properties
        </DocsBlock>

        <DocsBlock
            code={examples.states.active}
            title="Active Buttons"
            types={['type Button.active = boolean;']}
            small>
            The
            <code>Button.active</code>
            property is used to show the active state of a
            <code>Button</code>
            or a functional
            <code>Button</code>
            , you can see the effect in the below examples.
            <div class="alert mt-medium">
                <p class="alert-content">
                    <b>NOTE:</b>
                    Whenever a checkbox
                    <code>Button</code>
                    was selected by the user,
                    <code>Button.active</code>
                    will be set to
                    <code>true</code>
                    . Like-wise, if you set
                    <code>Button.active</code>
                    , it will reflect the in the form state.
                </p>
            </div>

            <div class="alert mt-medium">
                <p class="alert-content">
                    <b>NOTE 2:</b>
                    To activate a radio
                    <code>Button</code>
                    , you need to set
                    <code>Button.group</code>
                    to
                    {@html `<code>Button.value</code>.`}
                    Since radio
                    <code>Buttons</code>
                    share the same form reference.
                </p>
            </div>
        </DocsBlock>

        <DocsBlock
            code={examples.states.disabled}
            title="Disabled Buttons"
            types={['type Button.disabled = boolean;']}
            small>
            The
            <code>Button.disabled</code>
            property can be used to disable a
            <code>Button</code>
            or a functional
            <code>Button</code>
            . Disabled
            <code>Button</code>
            s cannot be focused nor respond to user actions.
        </DocsBlock>

        <DocsBlock
            code={examples.states.readonly}
            title="Readonly Buttons"
            types={['type Button.readonly = boolean;']}
            small>
            A readonly functional
            <code>Button</code>
            cannot be focused, it doesn't respond to user actions. But still can be submitted if
            included in a
            {@html `<code>&lt;form&gt;</code>.`}
        </DocsBlock>
    </Article>

    <Article>
        <DocsBlock title="Size Modifiers">
            If you want to change the size of a
            <code>Button</code>
            , you can use the side modifier properties
        </DocsBlock>

        <DocsBlock
            code={examples.sizes.small}
            title="Small Buttons"
            types={['type Button.size = "small";']}
            small>
            By setting
            <code>Button.size</code>
            to
            <code>"small"</code>
            , it makes the
            <code>Button</code>
            smaller.
        </DocsBlock>

        <DocsBlock
            code={examples.sizes.large}
            title="Large Buttons"
            types={['type Button.size = "large";']}
            small>
            By setting
            <code>Button.size</code>
            to
            <code>"large"</code>
            , it makes the
            <code>Button</code>
            larger.
        </DocsBlock>

        <DocsBlock
            code={examples.sizes.fluid}
            title="Fluid Buttons"
            types={['type Button.fluid = boolean;']}
            small>
            By toggling the
            <code>Button.fluid</code>
            property, it makes the
            <code>Button</code>
            Component take up all available horizontal space in its container. You can also use the
            <code>Button.size</code>
            property with this property.
        </DocsBlock>
    </Article>

    <Article>
        <DocsBlock title="Event Listeners">
            Like other
            <code>Component</code>
            s within this library,
            <code>Button</code>
            also provides an event.
        </DocsBlock>

        <DocsBlock
            code={examples.events.click}
            links={[['MDN: Click Event', 'https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event']]}
            title="on:click"
            small>
            You can bind to
            <code>on:click</code>
            to listen for when the end-user clicks a
            {@html `<code>Button</code>.`}
        </DocsBlock>
    </Article>
</Layout>
