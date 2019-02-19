<template>
    <span class="image" :style="styles">
        <transition name="fade" v-if="lazySrc">
            <img v-show="loadedLazy" @load="onLoadedLazy" :src="lazySrc" :alt="alt" :style="styles" class="blurred" :class="{ 'loaded': loaded }">
        </transition>

        <transition name="fade">
            <img v-show="loaded" @load="onLoaded" :style="styles" :src="src" :alt="alt">
        </transition>
    </span>
</template>


<script>
    export default {
        name: 'p-img',

        data() {
            return {
                loaded: false,
                loadedLazy: false,
            }
        },

        props: {
            src: {
                type: String,
                required: true,
            },

            lazySrc: {
                type: String,
                required: false,
            },

            width: {
                type: String,
                required: false,
            },

            height: {
                type: String,
                required: false,
            },

            alt: {
                type: String,
                required: false,
            },
        },

        computed: {
            styles() {
                let styles = {}

                if (this.width) {
                    styles.width = this.width
                }

                if (this.height) {
                    styles.height = this.height
                }

                return styles
            }
        },

        methods: {
            onLoaded() {
                this.loaded = true
            },

            onLoadedLazy() {
                this.loadedLazy = true
            },
        },
    }
</script>

<style scoped lang="css">
    .fade-enter-active {
        transition: opacity 800ms ease-in-out;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter {
        opacity: 0;
    }

    .image {
        display: inline-block;
        position: relative;
        overflow: hidden;
        -webkit-animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: placeholderSkeleton;
        -webkit-animation-timing-function: linear;
        background: #f6f7f8;
        background-image: -webkit-gradient(linear, left center, right center, from(#f6f7f8), color-stop(.2, #edeef1), color-stop(.4, #f6f7f8), to(#f6f7f8));
        background-image: -webkit-linear-gradient(left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
        background-repeat: no-repeat;
        position: relative;
    }

    .image img {
        position: absolute;
        top: 0;
        left: 0;
        transform: scale(1.1);
        transition: 800ms all ease-in-out;
    }

    .image img.loaded {
        transform: scale(1);
    }

    @-webkit-keyframes placeholderSkeleton {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }
    
    .blurred {
        filter: blur(25px);
        -webkit-filter: blur(25px);
        -moz-filter: blur(25px);
        -o-filter: blur(25px);
        -ms-filter: blur(25px);
    }
</style>
