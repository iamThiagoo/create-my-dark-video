<template>
    <main class="w-full min-h-screen">
        <Header />
        <Waves />

        <!--Content starts-->
        <div class="flex pt-8 mb-16 content">
            <section class="w-full max-w-6xl mx-auto ">
                <div class="flex flex-col justify-between mb-10">
                    <div class="w-9/12 italic font-bold text-slate-900 md:text-4xl">Seja bem-vindo!</div>
                    <div class="w-10/12 mt-3 text-base text-slate-700">Fique à vontade para experimentar nosso serviço!
                        No momento, limitamos a geração a 5 vídeos por dia por usuário para equilibrar os custos e
                        garantir que todos os interessados possam aproveitar a plataforma.</div>
                </div>
                <div class="flex gap-x-10">
                    <div class="w-7/12">
                        <form>
                            <div class="grid items-center w-full gap-4">
                                <div class="flex flex-col gap-y-4">
                                    <Label for="prompt">Insira um prompt ou roteiro</Label>
                                    <Textarea placeholder="Digite aqui o seu prompt ou roteiro de como vocë gostaria que o vídeo fosse gerado"
                                        class="dark:outline-none dark:bg-white text-slate-800 dark:placeholder:text-slate-700 placeholder:text-slate-700" />
                                </div>
                                <div class="flex flex-col space-y-1.5 my-3">
                                    <Label for="framework">Framework</Label>
                                </div>
                                <Button type="submit" class="py-6 rounded-lg dark:text-white dark:bg-slate-800 dark:hover:bg-slate-600 hover:bg-slate-500">
                                    Gerar Vídeo
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div class="5/12">
                        <div>
                            Seu vídeo aparecerá aqui!
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!--Content ends-->

        <Footer />
    </main>
</template>