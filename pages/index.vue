<template>
    <main class="w-full min-h-screen dark:bg-zinc-950">
        <Navbar class="flex justify-between w-full" />
        <Header />
        <Waves />

        <!--Content starts-->
        <div class="flex items-center pt-8 mb-28 content">
            <section class="w-full max-w-6xl mx-auto min-h-[50vh] flex-col flex items-center justify-center">
                <div class="flex flex-col justify-between mb-10">
                    <div class="w-9/12 italic font-bold text-slate-600 md:text-4xl dark:text-slate-400">Seja bem-vindo! ✌️</div>
                    <div class="w-10/12 mt-3 text-base text-slate-700 dark:text-gray-300">Sinta-se à vontade para experimentar nosso
                        serviço! Atualmente, limitamos a geração a 5 vídeos diários por usuário para manter o equilíbrio
                        nos custos e garantir que todos possam aproveitar a plataforma.</div>
                </div>
                <div class="flex justify-between w-full h-full gap-x-20">
                    <div class="w-full">
                        <form class="w-full">
                            <div class="grid items-center w-full gap-4">
                                <div class="flex flex-col gap-y-4">
                                    <Label for="prompt dark:text-slate-400" class="dark:text-slate-300">Insira um prompt ou roteiro</Label>
                                    <Textarea rows="6"
                                        placeholder="Digite aqui o seu prompt ou roteiro de como vocë gostaria que o vídeo fosse gerado"
                                        class="border outline-none border-slate-600 dark:dark-slate-200 dark:outline-none dark:bg-slate-800 dark:focus:ring-none dark:text-slate-200 dark:placeholder:text-slate-300 placeholder:text-slate-700 ring-none ring-offset-none focus:ring-none focus:outline-none focus:ring-offset-transparent" />
                                </div>
                                <div class="flex items-center space-x-2">
                                    <Switch id="airplane-mode" />
                                    <Label for="airplane-mode" class="dark:text-slate-300">Não gerar história com IA/Manter prompt original</Label>
                                </div>
                                <div class="flex w-full gap-x-5">
                                    <div class="flex flex-col w-6/12 my-3 space-y-4">
                                        <Label for="idioma" class="dark:text-slate-300">Idioma</Label>
                                        <Select class="user-select-none">
                                            <SelectTrigger class="border-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                                                <SelectValue placeholder="Selecione um idioma para narração" />
                                            </SelectTrigger>
                                            <SelectContent class="dark:bg-slate-900 dark:text-slate-300">
                                                <SelectGroup>
                                                    <SelectItem value="arabic">
                                                        Árabe
                                                    </SelectItem>
                                                    <SelectItem value="bengali">
                                                        Bengali
                                                    </SelectItem>
                                                    <SelectItem value="bulgarian">
                                                        Búlgaro
                                                    </SelectItem>
                                                    <SelectItem value="chinese">
                                                        Chinês
                                                    </SelectItem>
                                                    <SelectItem value="croatian">
                                                        Croata
                                                    </SelectItem>
                                                    <SelectItem value="czech">
                                                        Tcheco
                                                    </SelectItem>
                                                    <SelectItem value="danish">
                                                        Dinamarquês
                                                    </SelectItem>
                                                    <SelectItem value="dutch">
                                                        Holandês
                                                    </SelectItem>
                                                    <SelectItem value="english">
                                                        Inglês
                                                    </SelectItem>
                                                    <SelectItem value="finnish">
                                                        Finlandês
                                                    </SelectItem>
                                                    <SelectItem value="french">
                                                        Francês
                                                    </SelectItem>
                                                    <SelectItem value="gaelic">
                                                        Gaélico
                                                    </SelectItem>
                                                    <SelectItem value="german">
                                                        Alemão
                                                    </SelectItem>
                                                    <SelectItem value="greek">
                                                        Grego
                                                    </SelectItem>
                                                    <SelectItem value="hebrew">
                                                        Hebraico
                                                    </SelectItem>
                                                    <SelectItem value="hindi">
                                                        Hindi
                                                    </SelectItem>
                                                    <SelectItem value="hungarian">
                                                        Húngaro
                                                    </SelectItem>
                                                    <SelectItem value="icelandic">
                                                        Islandês
                                                    </SelectItem>
                                                    <SelectItem value="indonesian">
                                                        Indonésio
                                                    </SelectItem>
                                                    <SelectItem value="italian">
                                                        Italiano
                                                    </SelectItem>
                                                    <SelectItem value="japanese">
                                                        Japonês
                                                    </SelectItem>
                                                    <SelectItem value="korean">
                                                        Coreano
                                                    </SelectItem>
                                                    <SelectItem value="malay">
                                                        Malaio
                                                    </SelectItem>
                                                    <SelectItem value="norwegian">
                                                        Norueguês
                                                    </SelectItem>
                                                    <SelectItem value="persian">
                                                        Persa
                                                    </SelectItem>
                                                    <SelectItem value="polish">
                                                        Polonês
                                                    </SelectItem>
                                                    <SelectItem value="portuguese">
                                                        Português
                                                    </SelectItem>
                                                    <SelectItem value="romanian">
                                                        Romeno
                                                    </SelectItem>
                                                    <SelectItem value="russian">
                                                        Russo
                                                    </SelectItem>
                                                    <SelectItem value="serbian">
                                                        Sérvio
                                                    </SelectItem>
                                                    <SelectItem value="slovak">
                                                        Eslovaco
                                                    </SelectItem>
                                                    <SelectItem value="spanish">
                                                        Espanhol
                                                    </SelectItem>
                                                    <SelectItem value="swahili">
                                                        Suaíli
                                                    </SelectItem>
                                                    <SelectItem value="swedish">
                                                        Sueco
                                                    </SelectItem>
                                                    <SelectItem value="thai">
                                                        Tailandês
                                                    </SelectItem>
                                                    <SelectItem value="turkish">
                                                        Turco
                                                    </SelectItem>
                                                    <SelectItem value="ukrainian">
                                                        Ucraniano
                                                    </SelectItem>
                                                    <SelectItem value="vietnamese">
                                                        Vietnamita
                                                    </SelectItem>
                                                    <SelectItem value="welsh">
                                                        Galês
                                                    </SelectItem>

                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div class="flex flex-col w-6/12 my-3 space-y-4">
                                        <Label for="voice" class="dark:text-slate-300">Voz</Label>
                                        <Select class="user-select-none">
                                            <SelectTrigger class="border border-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 ring-none dark:focus:outline-none dark:focus:ring-0">
                                                <SelectValue placeholder="Selecione um modelo para narração" />
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
                                            Habilitar legenda
                                        </label>
                                        <p class="text-xs text-slate-800 dark:text-slate-400">
                                            Legenda automática gerada a partir do áudio com o idioma escolhido
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full gap-x-2">
                                    <Button type="submit"
                                        class="w-full py-6 text-white bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100/50 text-slate-500 dark:bg-gray-100 dark:hover:bg-slate-300">
                                        <font-awesome-icon :icon="['fas', 'clock-rotate-left']" />
                                        Meu Histórico
                                    </Button>
                                    <Button type="submit"
                                        class="w-full py-6 text-white border rounded-lg shadow-lg dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600">
                                        <font-awesome-icon :icon="['fas', 'play']" />
                                        Gerar Vídeo
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="h-auto w-[450px]">
                        <div
                            class="flex flex-col items-center justify-center h-full text-center mt-1 border-2 border-dashed rounded w-[450px] border-slate-400 hover:opacity-90">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    class="mb-5 size-16 fill-slate-600 dark:fill-slate-300">
                                    <path
                                        d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                                </svg>
                            </div>
                            <span class="text-slate-800 dark:text-slate-300">Seu vídeo será exibido aqui!</span>
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

</script>