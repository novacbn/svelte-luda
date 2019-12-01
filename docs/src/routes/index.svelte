<script>
    const {Button, Navigation, NavigationLogo, NavigationMenu, NavigationItems} = window.luda;
</script>

<Navigation class="rel px-large py-medium">
    <NavigationLogo class="td-none">
        <h1 class="c-light">svelte-luda</h1>
    </NavigationLogo>

    <NavigationMenu>
        <NavigationItems />
        <NavigationItems submenu>
            <Button color="light" href="https://github.com/novacbn/svelte-luda" text>GitHub</Button>
        </NavigationItems>
    </NavigationMenu>
</Navigation>

<main>
    <article class="article grid-edge jc-center ta-center max-w-100 p-large bc-dark c-light">
        <h1 class="col-12 mb-medium" style="font-size:250%;">
            Unofficial Svelte Bindings for Luda
        </h1>

        <p class="col-12 h2 c-inverse-muted px-small">
            Utilize the lightweight and responsive
            <a class="link-light" href="https://oatw.github.io/luda">Luda</a>
            CSS framework,
            <br class="d-none d-block-m" />
            {@html `that's cybernetically enhanced by the <a class="link-light" href="https://svelte.dev" target="_blank">Svelte</a>!`}
        </p>

        <p class="col-12 px-small">
            <Button color="primary" size="large" href="#framework">Getting Started</Button>
            <Button color="light" size="large" href="#framework/installation" hollow>
                Installation
            </Button>
        </p>
    </article>

    <article class="px-small py-large grid-edge ai-center bc-muted">
        <div class="col-auto h-100 p-large">
            <h2>Declarative Layout / Properties</h2>

            <h4>
                With just a few simple imports, easily construct your HTML without fiddling with
                classes and strings!
            </h4>
        </div>

        <div class="col-12 col-6-m">
            <div class="w-100 bc-danger" style="height:25rem;" />
        </div>
    </article>

    <article class="px-small py-large grid-edge ai-center">
        <div class="col-12 col-6-m">
            <div class="w-100 bc-danger" style="height:25rem;" />
        </div>

        <div class="col-auto h-100 p-large">
            <h2>Minimal Dependencies</h2>

            <h4>
                <b>svelte-luda</b>
                only has its self and
                <b>Svelte</b>
                as a dependency. And can be easily utilized as a self-contained package in-Browser,
                with no other build steps!
            </h4>
        </div>
    </article>

    <article class="px-small py-large grid-edge ai-center bc-muted">
        <div class="col-auto h-100 p-large">
            <h2>Magical in all the Right Places</h2>

            <h4>
                Just like with vanilla Luda, the framework does most of the work for you. And in
                this instance, there's less typing because of
                {@html `<b>Svelte</b>!`}
            </h4>
        </div>

        <div class="col-12 col-6-m">
            <div class="w-100 bc-danger" style="height:25rem;" />
        </div>
    </article>

    <article class="px-small py-large grid ai-center">
        <div class="col-12 col-4-m mb-small mb-none-m d-flex jc-center">
            <div class="modal grid-edge fd-column ai-center" style="max-width:450px;">
                <a href="#framework/elements">
                    <div class="bc-danger" style="width:128px;height:128px;" />
                </a>

                <a href="#framework/elements">
                    <h2>Elements</h2>
                </a>

                <h5>Basic visual units of UI</h5>
            </div>
        </div>

        <div class="col-12 col-4-m mb-small mb-none-m d-flex jc-center">
            <div class="modal grid-edge fd-column ai-center" style="max-width:450px;">
                <a href="#framework/patterns">
                    <div class="bc-danger" style="width:128px;height:128px;" />
                </a>

                <a href="#framework/patterns">
                    <h2>Patterns</h2>
                </a>

                <h5>Modular commonly used UI designs</h5>
            </div>
        </div>

        <div class="col-12 col-4-m mb-small mb-none-m d-flex jc-center">
            <div class="modal grid-edge fd-column ai-center" style="max-width:450px;">
                <a href="#framework/utilities">
                    <div class="bc-danger" style="width:128px;height:128px;" />
                </a>

                <a href="#framework/utilities">
                    <h2>Utilities</h2>
                </a>

                <h5>Globally accessible UI modifications</h5>
            </div>
        </div>
    </article>
</main>
