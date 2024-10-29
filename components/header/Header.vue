<template>
  <div class="w-full min-h-screen">
    <div class="container flex flex-col items-center justify-center w-full mx-auto">

      <Navbar class="flex justify-between w-full" />
      
      <div class="min-h-[calc(100vh-1.25rem)] flex flex-col items-center justify-center h-full gap-8 py-20 lg:py-10">
        <div class="relative flex flex-col gap-4">
          <NuxtImg src="/svg/user-secret.svg" class="h-28"></NuxtImg>
          <h1
            class="relative max-w-4xl text-5xl font-bold tracking-tighter text-center text-slate-700 md:text-6xl font-regular">
            <span>Gerar seu Dark Video agora é</span>
            <div class="relative mt-4 -top-32">
              <span v-for="(title, index) in titles" :key="index" :style="getTitleStyle(index)"
                class="absolute flex justify-center w-full overflow-hidden font-bold text-center text-slate-700 md:pb-4 md:pt-1">
                {{ title }}
              </span>
            </div>
          </h1>

          <p
            class="relative max-w-3xl mt-16 text-lg leading-relaxed tracking-tight text-center text-slate-600 md:text-xl text-muted-foreground">
            Experimente a liberdade de criar vídeos criativos e envolventes em instantes, com a ajuda da inteligência
            artificial que transforma seus textos em imagens e histórias memoráveis, tudo de maneira prática e
            acessível!
          </p>
        </div>

        <div class="flex flex-row gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button size="lg" class="gap-4 px-24 py-6 text-lg font-bold text-white rounded-full shadow-xl"
                  variant="outline">
                  Testar agora
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Bora lá, partiu!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const titles = [
  "Simples!",
  "Fácil!",
  "Rápido!",
  "Criativo!",
  "Intuitivo!",
  "Divertido!",
  "Acessível!",
  "Dinâmico!",
  "Ágil!",
  "Prático!"
];

const titleNumber = ref(0);
let timeoutId: any;

const updateTitle = () => {
  titleNumber.value = (titleNumber.value + 1) % titles.length;
};

onMounted(() => {
  timeoutId = setInterval(updateTitle, 2000);
});

onBeforeUnmount(() => {
  clearInterval(timeoutId);
});

const getTitleStyle = (index: number) => {
  return {
    opacity: titleNumber.value === index ? 1 : 0,
    transform: titleNumber.value > index ? 'translateY(-150%)' : 'translateY(150%)',
    transition: 'opacity 0.5s ease, transform 1s ease',
  };
};
</script>
