<template>
    <div class="relative header -top-2 sm:-top-20">
        <div>
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="10" fill="rgba(51,65,85, 1)" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(51,65,85, 0.6)" />
                    <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(51,65,85, 0.2)" />
                    <use xlink:href="#gentle-wave" x="48" y="20" class="fill-white dark:fill-zinc-950" />
                </g>
            </svg>
        </div>
    </div>
</template>

<style lang="css" scoped>
.header {
    position: relative;
    text-align: center;
    background: white;
    @apply dark:bg-zinc-950;
    color: white;
}

.inner-header {
    height: 65vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

.waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
}

/* Animation */
.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
    .waves {
        height: 20px;
        min-height: 20px;
    }
}
</style>