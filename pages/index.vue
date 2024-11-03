<template>
    <main class="w-full min-h-screen dark:bg-zinc-950">
        <Navbar class="flex justify-between w-full"></Navbar>
        <Header @tryNow="scrollToForm"></Header>
        <Waves></Waves>

        <!--Content starts-->
        <div class="flex items-center px-4 pt-8 mb-6 sm:px-0 sm:mb-28 content">
            <section class="w-full sm:max-w-6xl mx-auto min-h-[50vh] flex-col flex items-center justify-center">
                <div class="flex flex-col justify-between mb-8 sm:mb-10">
                    <div class="w-9/12 text-2xl italic font-bold text-slate-600 md:text-4xl dark:text-slate-400">{{
                        $t('main.welcomeMessage') }} 👋</div>
                    <div class="w-full mt-3 text-sm text-justify sm:text-left sm:w-10/12 sm:text-base text-slate-700 dark:text-gray-300">{{
                        $t('main.welcomeDescription') }}</div>
                </div>
                <div class="flex flex-col justify-between w-full h-full sm:flex-row gap-x-20 gap-y-8 sm:gap-y-0">
                    <div class="w-full">
                        <form class="w-full" ref="form">
                            <div class="grid items-center w-full gap-4">
                                <div class="flex flex-col gap-y-4">
                                    <Label for="prompt dark:text-slate-400" class="dark:text-slate-300">{{
                                        $t('main.promptLabel') }}</Label>
                                    <Textarea rows="6" :placeholder="$t('main.promptPlaceholder')"
                                        class="border outline-none border-slate-600 dark:dark-slate-200 dark:outline-none dark:bg-slate-800 dark:focus:ring-none dark:text-slate-200 dark:placeholder:text-slate-300 placeholder:text-slate-700 ring-none ring-offset-none focus:ring-none focus:outline-none focus:ring-offset-transparent" />
                                </div>
                                <div class="flex items-center space-x-2">
                                    <Switch id="airplane-mode" />
                                    <Label for="airplane-mode" class="dark:text-slate-300">{{ $t('main.noAIStoryOption')
                                        }}</Label>
                                </div>
                                <div class="flex flex-col w-full gap-x-5 sm:flex-row">
                                    <div class="flex flex-col my-3 space-y-4 sm:w-6/12">
                                        <Label for="idioma" class="dark:text-slate-300">{{ $t('main.languageLabel')
                                            }}</Label>
                                        <Select class="user-select-none">
                                            <SelectTrigger
                                                class="border-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                                                <SelectValue :placeholder="$t('main.selectLanguage')" />
                                            </SelectTrigger>
                                            <SelectContent class="dark:bg-slate-900 dark:text-slate-300">
                                                <SelectGroup>
                                                    <SelectItem :value="'arabic'">{{ $t('languages.arabic') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'bengali'">{{ $t('languages.bengali') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'bulgarian'">{{ $t('languages.bulgarian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'chinese'">{{ $t('languages.chinese') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'croatian'">{{ $t('languages.croatian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'czech'">{{ $t('languages.czech') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'danish'">{{ $t('languages.danish') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'dutch'">{{ $t('languages.dutch') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'english'">{{ $t('languages.english') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'finnish'">{{ $t('languages.finnish') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'french'">{{ $t('languages.french') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'gaelic'">{{ $t('languages.gaelic') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'german'">{{ $t('languages.german') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'greek'">{{ $t('languages.greek') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'hebrew'">{{ $t('languages.hebrew') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'hindi'">{{ $t('languages.hindi') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'hungarian'">{{ $t('languages.hungarian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'icelandic'">{{ $t('languages.icelandic') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'indonesian'">{{ $t('languages.indonesian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'italian'">{{ $t('languages.italian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'japanese'">{{ $t('languages.japanese') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'korean'">{{ $t('languages.korean') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'malay'">{{ $t('languages.malay') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'norwegian'">{{ $t('languages.norwegian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'persian'">{{ $t('languages.persian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'polish'">{{ $t('languages.polish') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'portuguese'">{{ $t('languages.portuguese') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'romanian'">{{ $t('languages.romanian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'russian'">{{ $t('languages.russian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'serbian'">{{ $t('languages.serbian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'slovak'">{{ $t('languages.slovak') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'spanish'">{{ $t('languages.spanish') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'swahili'">{{ $t('languages.swahili') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'swedish'">{{ $t('languages.swedish') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'thai'">{{ $t('languages.thai') }}</SelectItem>
                                                    <SelectItem :value="'turkish'">{{ $t('languages.turkish') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'ukrainian'">{{ $t('languages.ukrainian') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'vietnamese'">{{ $t('languages.vietnamese') }}
                                                    </SelectItem>
                                                    <SelectItem :value="'welsh'">{{ $t('languages.welsh') }}
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div class="flex flex-col w-full my-3 space-y-4 sm:w-6/12">
                                        <Label for="voice" class="dark:text-slate-300">{{ $t('main.voiceLabel')
                                            }}</Label>
                                        <Select class="user-select-none">
                                            <SelectTrigger
                                                class="border border-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 ring-none dark:focus:outline-none dark:focus:ring-0">
                                                <SelectValue :placeholder="$t('main.selectVoice')" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup class="dark:bg-slate-900 dark:text-slate-300">
                                                    <SelectItem value="alloy">
                                                        Alloy
                                                    </SelectItem>
                                                    <SelectItem value="echo">
                                                        Echo
                                                    </SelectItem>
                                                    <SelectItem value="fable">
                                                        Fable
                                                    </SelectItem>
                                                    <SelectItem value="onyx">
                                                        Onyx
                                                    </SelectItem>
                                                    <SelectItem value="nova">
                                                        Nova
                                                    </SelectItem>
                                                    <SelectItem value="shimmer">
                                                        Shimmer
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div class="flex pb-4 items-top gap-x-2">
                                    <Checkbox id="terms1" />
                                    <div class="grid gap-1.5 leading-none">
                                        <label for="terms1"
                                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-400">
                                            {{ $t('main.enableSubtitle') }}
                                        </label>
                                        <p class="text-xs text-slate-800 dark:text-slate-400">
                                            {{ $t('main.autoSubtitleDescription') }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-full sm:flex-row gap-y-3 sm:gap-y-0 gap-x-2">
                                    <Button type="submit"
                                        class="w-full py-6 text-white bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100/50 text-slate-500 dark:bg-gray-100 dark:hover:bg-slate-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path
                                                d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z" />
                                        </svg>
                                        {{ $t('main.myHistory') }}
                                    </Button>
                                    <Button type="submit"
                                        class="w-full py-6 text-white border rounded-lg shadow-lg fill-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path
                                                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                        </svg>
                                        {{ $t('main.generateVideo') }}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="h-auto w-full sm:w-[450px]">
                        <div
                            class="flex flex-col items-center justify-center text-center mt-1 border-2 border-dashed rounded h-96 sm:h-full sm:w-[450px] border-slate-400 hover:opacity-90">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    class="mb-5 size-16 fill-slate-600 dark:fill-slate-300">
                                    <path
                                        d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                                </svg>
                            </div>
                            <span class="text-sm sm:text-base text-slate-800 dark:text-slate-300">{{ $t('main.videoDisplayMessage') }}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!--Content ends-->

        <Footer />
    </main>
</template>

<script setup lang="ts">

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const form = ref(null)

const scrollToForm = () => {
    form.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

</script>