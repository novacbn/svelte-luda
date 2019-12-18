<script>
    import {setContext} from "svelte";

    const {
        Button,
        Navigation,
        NavigationButton,
        NavigationLogo,
        NavigationItems,
        NavigationMenu
    } = window.luda;
</script>

<Navigation class="col-12 col-3-m" style="z-index:3;" aside>
    <NavigationLogo class="td-none">
        <h1 class="c-light">svelte-luda</h1>
    </NavigationLogo>

    <NavigationButton />

    <NavigationMenu>
        <NavigationButton close />

        <NavigationItems>
            <p class="px-small c-light fw-semibold">Framework</p>
            <Button color="light" href="#framework" text>Introduction</Button>
            <Button color="light" href="#framework/installation" text>Installation</Button>
            <Button color="light" href="#framework/faq" text>F.A.Q.</Button>
        </NavigationItems>

        <NavigationItems>
            <p class="px-small c-light fw-semibold">Base</p>
            <Button color="light" href="#framework/base" text>Introduction</Button>
            <Button color="light" href="#framework/base/baseline" text>Baseline</Button>
            <Button color="light" href="#framework/base/code" text>Code</Button>
            <Button color="light" href="#framework/base/header" text>Header</Button>
            <Button color="light" href="#framework/base/link" text>Link</Button>
            <Button color="light" href="#framework/base/list" text>List</Button>
            <Button color="light" href="#framework/base/pane" text>Pane</Button>
            <Button color="light" href="#framework/base/paragraph" text>Paragraph</Button>
            <Button color="light" href="#framework/base/quote" text>Quote</Button>
            <Button color="light" href="#framework/base/scrollbar" text>Scrollbar</Button>
            <Button color="light" href="#framework/base/table" text>Table</Button>
            <Button color="light" href="#framework/base/text" text>Text</Button>
        </NavigationItems>

        <NavigationItems>
            <p class="px-small c-light fw-semibold">Elements</p>
            <Button color="light" href="#framework/elements" text>Introduction</Button>
            <Button color="light" href="#framework/elements/article" text>Article</Button>
            <Button color="light" href="#framework/elements/badge" text>Badge</Button>
            <Button color="light" href="#framework/elements/button" text>Button</Button>
            <Button color="light" href="#framework/elements/container" text>Container</Button>
            <Button color="light" href="#framework/elements/form" text>Form</Button>
            <Button color="light" href="#framework/elements/icon" text>Icon</Button>
            <Button color="light" href="#framework/elements/media" text>Media</Button>
            <Button color="light" href="#framework/elements/overlay" text>Overlay</Button>
            <Button color="light" href="#framework/elements/progress" text>Progress</Button>
        </NavigationItems>

        <NavigationItems>
            <p class="px-small c-light fw-semibold">Patterns</p>
            <Button color="light" href="#framework/patterns" text>Introduction</Button>
            <Button color="light" href="#framework/patterns/alert" text>Alert</Button>
            <Button color="light" href="#framework/patterns/avatar" text>Avatar</Button>
            <Button color="light" href="#framework/patterns/breadcrumb" text>Breadcrumb</Button>
            <Button color="light" href="#framework/patterns/button-group" text>
                Button Group
            </Button>
            <Button color="light" href="#framework/patterns/button-icon" text>
                Button Icon
            </Button>
            <Button color="light" href="#framework/patterns/carousel" text>Carousel</Button>
            <Button color="light" href="#framework/patterns/dropdown" text>Dropdown</Button>
            <Button color="light" href="#framework/patterns/form-dropdown" text>
                Form Dropdown
            </Button>
            <Button color="light" href="#framework/patterns/form-group" text>Form Group</Button>
            <Button color="light" href="#framework/patterns/form-icon" text>Form Icon</Button>
            <Button color="light" href="#framework/patterns/grid" text>Grid</Button>
            <Button color="light" href="#framework/patterns/modal" text>Modal</Button>
            <Button color="light" href="#framework/patterns/navigation" text>Navigation</Button>
            <Button color="light" href="#framework/patterns/search-bar" text>Search Bar</Button>
            <Button color="light" href="#framework/patterns/tab" text>Tab</Button>
        </NavigationItems>

        <NavigationItems>
            <p class="px-small c-light fw-semibold">Utilities</p>
            <Button color="light" href="#framework/utilities" text>Introduction</Button>
            <Button color="light" href="#framework/utilities/alignment" text>Alignment</Button>
            <Button color="light" href="#framework/utilities/background" text>
                Background
            </Button>
            <Button color="light" href="#framework/utilities/border" text>Border</Button>
            <Button color="light" href="#framework/utilities/color" text>Color</Button>
            <Button color="light" href="#framework/utilities/display" text>Display</Button>
            <Button color="light" href="#framework/utilities/flex" text>Flex</Button>
            <Button color="light" href="#framework/utilities/float" text>Float</Button>
            <Button color="light" href="#framework/utilities/opacity" text>Opacity</Button>
            <Button color="light" href="#framework/utilities/overflow" text>Overflow</Button>
            <Button color="light" href="#framework/utilities/position" text>Position</Button>
            <Button color="light" href="#framework/utilities/shadow" text>Shadow</Button>
            <Button color="light" href="#framework/utilities/shape" text>Shape</Button>
            <Button color="light" href="#framework/utilities/size" text>Size</Button>
            <Button color="light" href="#framework/utilities/spacing" text>Spacing</Button>
            <Button color="light" href="#framework/utilities/text" text>Text</Button>
            <Button color="light" href="#framework/utilities/visibility" text>
                Visibility
            </Button>
            <Button color="light" href="#framework/utilities/z-index" text>Z-index</Button>
        </NavigationItems>
    </NavigationMenu>
</Navigation>