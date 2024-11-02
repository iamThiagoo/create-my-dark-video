<template>
    <NavigationMenu class="fixed top-0 w-full pt-5">
        <NavigationMenuList class="flex items-center justify-between w-full px-4">
            <NavigationMenuLink href="/" class="flex items-center gap-x-3">
                <svg class="h-12 hover:opacity-60 dark:fill-slate-300" viewBox="0 0 14 14" role="img" focusable="false"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m 10.747763,8.225634 0.560172,-1.46723 c 0.09375,-0.2461 -0.08672,-0.50861 -0.351572,-0.50861 l -1.3711332,0 c 0.2578199,-0.44298 0.4171992,-0.95159 0.4171992,-1.50004 l 0,-0.007 c 0.918776,-0.18281 1.500043,-0.44767 1.500043,-0.74299 0,-0.31172 -0.639862,-0.58829 -1.6430156,-0.77346 C 9.6438252,2.457534 9.2266259,1.684074 8.9078668,1.285624 8.6852042,1.006714 8.3008183,0.91999396 7.9820592,1.079374 l -0.6468934,0.32344 c -0.2109435,0.10548 -0.4593881,0.10548 -0.6703316,0 L 6.0179408,1.079374 c -0.3187591,-0.15938004 -0.7031451,-0.0727 -0.9258076,0.20625 -0.3164153,0.39845 -0.7359585,1.17191 -0.9515896,1.94068 -1.0008098,0.18517 -1.6406717,0.46174 -1.6406717,0.77346 0,0.29532 0.5812665,0.56018 1.5000427,0.74299 l 0,0.007 c 0,0.54845 0.1593795,1.05706 0.4171993,1.50004 l -1.3476946,0 c -0.2695389,0 -0.4500128,0.27422 -0.344541,0.52267 l 0.6047047,1.41098 c -0.9398705,0.54611 -1.5797325,1.5516 -1.5797325,2.71648 l 0,1.05003 c 0,0.57892 0.4711072,1.05003 1.0500299,1.05003 l 8.4002396,0 c 0.578922,0 1.050029,-0.47111 1.050029,-1.05003 l 0,-1.05003 c 0,-1.13441 -0.604704,-2.11881 -1.502386,-2.67429 z m -4.8727951,4.02433 -0.9750277,-4.50013 1.1625331,0.75002 0.562516,0.93753 -0.7500214,2.81258 z m 2.2500641,0 -0.7500213,-2.81258 0.562516,-0.93753 1.1625331,-0.75002 -0.9750278,4.50013 z m 0.9773716,-6.99629 c -0.091409,0.27891 -0.1640672,0.57657 -0.3867298,0.78283 -0.2367255,0.21798 -1.125032,0.52502 -1.5000427,-0.58595 -0.065627,-0.19688 -0.3609478,-0.19688 -0.4289184,0 -0.3984489,1.17659 -1.3125374,0.75939 -1.5000428,0.58595 -0.2226625,-0.20626 -0.2976647,-0.50392 -0.3867297,-0.78283 -0.01875,-0.0586 -0.1476605,-0.1336 -0.1476605,-0.13595 l 0,-0.25313 c 0.6633002,0.0844 1.4297282,0.13594 2.2500641,0.13594 0.8203358,0 1.5867639,-0.0492 2.2500641,-0.13594 l 0,0.25313 c -0.00234,0.002 -0.1312538,0.075 -0.1500043,0.13595 z" />
            </svg>
                <h1 class="text-lg font-medium dark:text-slate-300">Create My Dark Video</h1>
            </NavigationMenuLink>

            <div class="flex items-center gap-x-8">
                <NavigationMenuLink class="hover:opacity-60">
                    <Dialog>
                        <DialogTrigger as-child>
                            <Button class="p-0 text-base bg-transparent shadow-none text-slate-900 dark:bg-transparent hover:bg-transparent dark:text-white dark:hover:bg-transparent">
                                {{ $t('navbar.howItWorks') }}
                            </Button>
                        </DialogTrigger>
                        <DialogContent class="sm:max-w-[600px] bg-white dark:bg-white dark:bg-slate-900">
                            <DialogHeader>
                                <DialogTitle class="text-2xl dark:text-slate-400">{{ $t('navbar.howItWorks') }}</DialogTitle>
                                <div class="mt-4 dark:text-white">
                                    <p class="dark:text-white">{{ $t('navbar.howItWorksModal.step1') }}</p><br>
                                    <p class="dark:text-white">{{ $t('navbar.howItWorksModal.step2') }}</p><br>
                                    <p class="dark:text-white">{{ $t('navbar.howItWorksModal.step3') }}</p>
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </NavigationMenuLink>
                <NavigationMenuLink href="/" class="outline-none hover:opacity-60">
                    <Select class="outline-none" v-model="selectedLocale">
                        <SelectTrigger class="w-auto outline-none dark:bg-slate-800 dark:text-white">
                            <SelectValue class="outline-none" :placeholder="$t('navbar.selectLanguage')" />
                        </SelectTrigger>
                        <SelectContent class="outline-none dark:bg-slate-800 dark:text-white">
                            <SelectGroup class="outline-none">
                                <SelectItem :selected="locale === 'pt'" value="pt" class="outline-none cursor-pointer">
                                    <span class="flex items-center gap-x-2">
                                        <NuxtImg src="/icons/pt-br.png" class="size-7" />
                                        PT-BR
                                    </span>
                                </SelectItem>
                                <SelectItem :selected="locale === 'en'" value="en"
                                    class="flex outline-none cursor-pointer">
                                    <span class="flex items-center gap-x-2">
                                        <NuxtImg src="/icons/en.png" class="size-7" />
                                        EN
                                    </span>
                                </SelectItem>
                                <SelectItem :selected="locale === 'es'" value="es"
                                    class="flex outline-none cursor-pointer">
                                    <span class="flex items-center gap-x-2">
                                        <NuxtImg src="/icons/es.png" class="size-7" />
                                        ES
                                    </span>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </NavigationMenuLink>
                <NavigationMenuLink class="flex justify-center w-8 hover:opacity-60">
                    <svg v-if="$colorMode.preference == 'system' || $colorMode.preference == 'light'"
                        @click="$colorMode.preference = 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                    <svg viewBox="0 0 15 15" v-else @click="$colorMode.preference = 'light'"
                        class="cursor-pointer size-7 text-foreground dark:fill-white">
                        <path fill-rule="evenodd"
                            d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4q.211.305.389.632A6.602 6.602 0 0 1 2.96 11.69c-.215.012-.334.264-.184.417q.103.105.21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115q.18.115.37.217l.264.135l.26.12l.303.122l.244.086a6.6 6.6 0 0 0 1.103.26l.317.04l.267.02q.19.011.384.011a6.6 6.6 0 0 0 6.56-7.339l-.038-.277a6.6 6.6 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.6 6.6 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.6 7.6 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.6 7.6 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732q.093-.174.178-.355A1.25 1.25 0 1 0 10.35 6.2q.052-.442.052-.9"
                            clip-rule="evenodd"></path>
                    </svg>
                </NavigationMenuLink>
                <NavigationMenuLink href="https://github.com/iamThiagoo/create-my-dark-video" target="_blank"
                    class="hover:opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-8 dark:fill-white" viewBox="0 0 496 512">
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                </NavigationMenuLink>
            </div>
        </NavigationMenuList>
    </NavigationMenu>
</template>

<script setup lang="ts">

import { Button } from '@/components/ui/button'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();
const selectedLocale = ref(locale.value);
const colorMode = useColorMode()

const state = reactive({
    isOpenAbousUsModal: false,
});

const setLang = (newLocale: string) => {
    locale.value = newLocale;
};

watch(selectedLocale, (newLocale) => {
    setLang(newLocale);
});

</script>
