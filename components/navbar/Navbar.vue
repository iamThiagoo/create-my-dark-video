<template>
    <NavigationMenu class="fixed top-0 w-full pt-5 bg-white/50">
        <NavigationMenuList class="flex items-center justify-between w-full px-4">
            <NavigationMenuLink href="/" class="flex items-center gap-x-3">
                <NuxtImg src="/svg/user-secret.svg" class="h-12 hover:opacity-60"></NuxtImg>
                <h1 class="text-lg font-medium">Create My Dark Video</h1>
            </NavigationMenuLink>

            <div class="flex items-center gap-x-8">
                <NavigationMenuLink class="hover:opacity-60">
                    <Dialog>
                        <DialogTrigger as-child>
                            <Button class="p-0 text-base shadow-none bg-none dark:bg-white">
                                {{ $t('navbar.howItWorks') }}
                            </Button>
                        </DialogTrigger>
                        <DialogContent class="sm:max-w-[600px] bg-white dark:bg-white">
                            <DialogHeader>
                                <DialogTitle>{{ $t('navbar.howItWorks') }}</DialogTitle>
                                <div class="mt-4">
                                    <p>{{ $t('navbar.howItWorksModal.step1') }}</p><br>
                                    <p>{{ $t('navbar.howItWorksModal.step2') }}</p><br>
                                    <p>{{ $t('navbar.howItWorksModal.step3') }}</p>
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </NavigationMenuLink>
                <NavigationMenuLink href="/" class="outline-none hover:opacity-60">
                    <Select class="outline-none" v-model="selectedLocale">
                        <SelectTrigger class="w-auto outline-none">
                            <SelectValue class="outline-none" :placeholder="$t('navbar.selectLanguage')" />
                        </SelectTrigger>
                        <SelectContent class="outline-none">
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
                <NavigationMenuLink href="/" class="hover:opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </NavigationMenuLink>
                <NavigationMenuLink href="https://github.com/iamThiagoo/create-my-dark-video" target="_blank"
                    class="hover:opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 496 512">
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
