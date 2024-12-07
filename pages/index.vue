<template>
    <main class="w-full min-h-screen dark:bg-zinc-950">
        <Navbar class="flex justify-between w-full"></Navbar>
        <Header @tryNow="scrollToForm"></Header>
        <Waves></Waves>

        <!--Content starts-->
        <div class="flex items-center px-4 pt-8 mb-20 sm:px-0 content">
            <section class="w-full sm:max-w-6xl mx-auto min-h-[50vh] flex-col flex items-center justify-center">
                <div class="flex flex-col justify-between mb-8 sm:mb-10">
                    <div class="w-9/12 text-2xl italic font-bold text-slate-600 md:text-4xl dark:text-slate-400">
                        {{ $t('main.welcomeMessage') }} 👋
                    </div>
                    <div
                        class="w-full mt-3 text-sm text-justify sm:text-left sm:w-10/12 sm:text-base text-slate-700 dark:text-gray-300">
                        {{ $t('main.welcomeDescription') }}
                    </div>
                </div>
                <div class="flex flex-col justify-between w-full h-full sm:flex-row gap-x-20 gap-y-8 sm:gap-y-0">
                    <div class="w-full">
                        <form class="w-full" ref="form" @submit.prevent="onSubmit">
                            <div class="grid items-center w-full gap-4">
                                <div class="flex flex-col gap-y-4">
                                    <Label for="prompt dark:text-slate-400" class="dark:text-slate-300">{{
                                        $t('main.promptLabel') }}</Label>
                                    <Textarea rows="6" :placeholder="$t('main.promptPlaceholder')"
                                        v-model="fields.prompt"
                                        class="border outline-none border-slate-600 dark:dark-slate-200 dark:outline-none dark:bg-slate-800 dark:focus:ring-none dark:text-slate-200 dark:placeholder:text-slate-300 placeholder:text-slate-700 ring-none ring-offset-none focus:ring-none focus:outline-none focus:ring-offset-transparent" />
                                    <p v-if="errorMessage" class="ml-1 -mt-2 text-sm text-red-600">{{ errorMessage }}
                                    </p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <Switch id="noIaGenerated" v-model="fields.enableNoAIStoryOption" />
                                    <Label for="noIaGenerated" class="dark:text-slate-300">{{ $t('main.noAIStoryOption')
                                        }}</Label>
                                </div>
                                <div class="flex flex-col w-full gap-x-5 sm:flex-row">
                                    <div class="flex flex-col my-3 space-y-4 sm:w-6/12">
                                        <Label for="idioma" class="dark:text-slate-300">{{ $t('main.languageLabel')
                                            }}</Label>
                                        <Select v-model="fields.language" class="user-select-none">
                                            <SelectTrigger
                                                class="border-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                                                <SelectValue :placeholder="$t('main.selectLanguage')" />
                                            </SelectTrigger>
                                            <SelectContent class="dark:bg-slate-900 dark:text-slate-300">
                                                <SelectGroup>
                                                    <SelectItem v-for="language in languageOptions"
                                                        :key="language.value" :value="language.value">
                                                        {{ $t(language.label) }}
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div class="flex flex-col w-full my-3 space-y-4 sm:w-6/12">
                                        <Label for="voice" class="dark:text-slate-300">{{
                                            $t('main.voiceLabel') }}</Label>
                                        <Select v-model="fields.voice" class="user-select-none">
                                            <SelectTrigger
                                                class="border border-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 ring-none dark:focus:outline-none dark:focus:ring-0">
                                                <SelectValue :placeholder="$t('main.selectVoice')" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup class="dark:bg-slate-900 dark:text-slate-300">
                                                    <SelectItem v-for="item in voiceOptions" :key="item.value"
                                                        :value="item.value">
                                                        {{ item.label }}
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div class="flex pb-4 items-top gap-x-2">
                                    <Checkbox id="enableCaption" v-model="fields.enableCaption" />
                                    <div class="grid gap-1.5 leading-none">
                                        <label for="enableCaption"
                                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-400">
                                            {{ $t('main.enableSubtitle') }}
                                        </label>
                                        <p class="text-xs text-slate-800 dark:text-slate-400">
                                            {{ $t('main.autoSubtitleDescription') }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-col w-full sm:flex-row gap-y-3 sm:gap-y-0 gap-x-2">
                                    <Dialog>
                                        <DialogTrigger as-child>
                                            <Button type="button"
                                                class="w-full py-6 text-white bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100/50 text-slate-500 dark:bg-gray-100 dark:hover:bg-slate-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z" />
                                                </svg>
                                                {{ $t('main.myHistory') }}
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent
                                            class="sm:max-w-[600px] bg-white dark:bg-white dark:bg-slate-900">
                                            <DialogHeader class="dark:text-white">
                                                <p>Funcionalidade em desenvolvimento!</p>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
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
                        <div v-if="videoUrl">
                            <div
                                class="flex flex-col items-center justify-center text-center mt-1 border-2 border-dashed rounded h-96 sm:h-full sm:w-[450px] sm:max-h-[440px] border-slate-400 hover:opacity-90">
                                <video ref="videoRef" controls class="w-full p-2 rounded-lg shadow-lg"
                                    :style="{ height: `${formHeight}px` }" :src="videoUrl">
                                    {{ $t('main.browserNotSupported') }}
                                </video>
                            </div>
                            <div class="flex gap-x-4">
                                <Button type="button" @click="onSubmit"
                                    class="w-full py-6 mt-5 text-white border rounded-lg shadow-lg fill-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-10" viewBox="0 0 512 512">
                                        <path
                                            d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                                    </svg>
                                    {{ $t('main.generateAgain') }}
                                </Button>
                                <Button type="submit" @click="onDownload"
                                    class="w-full py-6 mt-5 text-white border rounded-lg shadow-lg fill-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-10" viewBox="0 0 512 512">
                                        <path
                                            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                    </svg>
                                    Download
                                </Button>
                                <!-- <Button type="submit"
                                    class="w-full py-6 mt-5 text-white border rounded-lg shadow-lg fill-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path
                                            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                    </svg>
                                    Favoritar no Início
                                </Button> -->
                            </div>
                        </div>
                        <div v-else
                            class="flex flex-col items-center justify-center text-center mt-1 border-2 border-dashed rounded h-96 sm:h-full sm:w-[450px] border-slate-400 hover:opacity-90">
                            <div v-if="!isGeneratingVideo" class="flex justify-center items-center flex-col">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="mb-5 size-16 fill-slate-600 dark:fill-slate-300">
                                        <path
                                            d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                                    </svg>
                                </div>
                                <span class="text-sm sm:text-base text-slate-800 dark:text-slate-300">{{
                                    $t('main.videoDisplayMessage') }}</span>
                            </div>
                            <div v-else class="flex justify-center items-center flex-col">
                                <div>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'
                                        class="size-20 stroke-slate-600 dark:stroke-slate-300 fill-slate-600 dark:fill-slate-300">
                                        <circle stroke-width='15' r='15' cx='35' cy='100'>
                                            <animate attributeName='cx' calcMode='spline' dur='2'
                                                values='35;165;165;35;35'
                                                keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1'
                                                repeatCount='indefinite' begin='0'></animate>
                                        </circle>
                                        <circle stroke-width='15' opacity='.8' r='15' cx='35' cy='100'>
                                            <animate attributeName='cx' calcMode='spline' dur='2'
                                                values='35;165;165;35;35'
                                                keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1'
                                                repeatCount='indefinite' begin='0.05'></animate>
                                        </circle>
                                        <circle stroke-width='15' opacity='.6' r='15' cx='35' cy='100'>
                                            <animate attributeName='cx' calcMode='spline' dur='2'
                                                values='35;165;165;35;35'
                                                keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1'
                                                repeatCount='indefinite' begin='.1'></animate>
                                        </circle>
                                        <circle stroke-width='15' opacity='.4' r='15' cx='35' cy='100'>
                                            <animate attributeName='cx' calcMode='spline' dur='2'
                                                values='35;165;165;35;35'
                                                keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1'
                                                repeatCount='indefinite' begin='.15'></animate>
                                        </circle>
                                        <circle stroke-width='15' opacity='.2' r='15' cx='35' cy='100'>
                                            <animate attributeName='cx' calcMode='spline' dur='2'
                                                values='35;165;165;35;35'
                                                keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1'
                                                repeatCount='indefinite' begin='.2'></animate>
                                        </circle>
                                    </svg>
                                </div>
                                <span class="text-sm sm:text-base text-slate-800 dark:text-slate-300 animate-pulse">{{
                                    $t('main.generatingVideo') }}...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!--Content ends-->

        <Footer></Footer>
    </main>
</template>

<script setup lang="ts">

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { LanguageEnum } from '~/enum/language.enum';
import { VoiceEnum } from '~/enum/voice.enum';
import { useToast } from '@/components/ui/toast/use-toast'
import { useI18n } from 'vue-i18n';

const { toast } = useToast()
const { $http } = useNuxtApp()
const form = ref<HTMLFormElement | null>(null)
const errorMessage = ref<string | null>(null)
const videoUrl = ref<string | null>(null)
const token = ref<string>('')
const formHeight = ref<number>(0)
const isGeneratingVideo = ref<boolean>(false)

const scrollToForm = () => {
    form.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

const languageOptions = useLanguages();
const voiceOptions = useVoices();
const { locale, t } = useI18n();

const fields = reactive({
    prompt: '',
    enableNoAIStoryOption: false,
    enableCaption: false,
    voice: VoiceEnum.Alloy as VoiceEnum,
    language: LanguageEnum.Portuguese as LanguageEnum,
})

const onSubmit = async () => {
    try {
        if (isGeneratingVideo.value) {
            throw new Error(t('main.videoGenerationInProgress'))
        }

        if (!fields.prompt) {
            errorMessage.value = t('main.pleaseInsertPrompt')
            return;
        } else {
            errorMessage.value = null
        }

        videoUrl.value = null
        isGeneratingVideo.value = true
        const video = await $http.video.generate(fields, token.value)
        const blob = new Blob([video], { type: 'video/mp4' })
        videoUrl.value = URL.createObjectURL(blob)
        isGeneratingVideo.value = false

    } catch (error: any) {
        const message = error?.message ?? t('main.tryAgainContactUs')
        toast({
            title: t('main.unexpectedError'),
            description: message,
            variant: 'destructive',
        });
    }
}

const onDownload = () => {
    const a = document.createElement('a')
    a.href = videoUrl.value!
    a.download = 'video.mp4'
    a.click()
}

onBeforeMount(async () => {
    try {
        let response = await $http.csrf.getCsrfToken()
        token.value = response.csrfToken
    } catch (error) {
        console.log(error);
    }
})

onMounted(() => {
    if (form.value) {
        formHeight.value = form.value.offsetHeight;
    }
});

</script>