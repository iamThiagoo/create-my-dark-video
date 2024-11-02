<template>
    <footer class="flex justify-between max-w-6xl py-5 mx-auto">
        <NuxtLink href="/" class="flex items-center gap-x-3">
            <NuxtImg src="/svg/user-secret.svg" class="h-12 hover:opacity-60"></NuxtImg>
        </NuxtLink>
        <div>
            <p class="mt-3 text-sm text-slate-950">© 2024 Create My Dark Video. {{ $t('footer.allRightsReserved')}}.</p>
            <p class="text-sm text-right text-slate-950">✌️ Made by <a href="https://github.com/iamThiagoo" target="_blank" class="text-sky-500">@IamThiagoo</a></p>
        </div>
    </footer>
</template>