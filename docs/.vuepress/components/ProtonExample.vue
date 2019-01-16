<template>
    <div class="proton-example">
        <div class="proton-example__preview" ref="example">
            <slot></slot>
        </div>

        <div class="proton-example__markup">
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'proton-example',
    }
</script>

<style>
    .proton-example {
        border: 4px solid #F1F5F8;
        border-radius: .25rem;
        margin: 0.85rem 0;
    }

    .proton-example__preview {
        padding: 1.5rem;
    }

    .proton-example__markup {
        /* background: red; */
        border-radius: 0;
    }

    .proton-example > .proton-example__markup>div {
        border-radius: 0;
    }

    .proton-example > .proton-example__markup>div>pre {
        margin: 0;
        border-radius: 0;
    }
</style>
