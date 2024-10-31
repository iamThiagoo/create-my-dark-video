<template>
    <footer class="flex justify-between max-w-6xl py-5 mx-auto">
        <NuxtLink href="/" class="flex items-center gap-x-3">
            <NuxtImg src="/svg/user-secret.svg" class="h-12 hover:opacity-60"></NuxtImg>
        </NuxtLink>
        <p class="mt-3 text-sm text-slate-950">© 2024 Create My Dark Video. {{ $t('footer.allRightsReserved')}}.</p>
    </footer>
</template>