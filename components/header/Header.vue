<template>
  <div class="w-full">
    <div class="container flex flex-col items-center justify-center w-full mx-auto">

      <Navbar class="flex justify-between w-full" />
      
      <div class="min-h-[calc(100vh-1.25rem)] flex flex-col items-center justify-center h-full gap-8 py-20 lg:py-10">
        <div class="relative flex flex-col gap-4">
          <div class="flex justify-center">
            <Badge class="w-fit">{{ $t('header.inDevelopmentBadge') }}</Badge>
          </div>
          <svg class="h-28 dark:fill-slate-300" viewBox="0 0 14 14" role="img" focusable="false"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m 10.747763,8.225634 0.560172,-1.46723 c 0.09375,-0.2461 -0.08672,-0.50861 -0.351572,-0.50861 l -1.3711332,0 c 0.2578199,-0.44298 0.4171992,-0.95159 0.4171992,-1.50004 l 0,-0.007 c 0.918776,-0.18281 1.500043,-0.44767 1.500043,-0.74299 0,-0.31172 -0.639862,-0.58829 -1.6430156,-0.77346 C 9.6438252,2.457534 9.2266259,1.684074 8.9078668,1.285624 8.6852042,1.006714 8.3008183,0.91999396 7.9820592,1.079374 l -0.6468934,0.32344 c -0.2109435,0.10548 -0.4593881,0.10548 -0.6703316,0 L 6.0179408,1.079374 c -0.3187591,-0.15938004 -0.7031451,-0.0727 -0.9258076,0.20625 -0.3164153,0.39845 -0.7359585,1.17191 -0.9515896,1.94068 -1.0008098,0.18517 -1.6406717,0.46174 -1.6406717,0.77346 0,0.29532 0.5812665,0.56018 1.5000427,0.74299 l 0,0.007 c 0,0.54845 0.1593795,1.05706 0.4171993,1.50004 l -1.3476946,0 c -0.2695389,0 -0.4500128,0.27422 -0.344541,0.52267 l 0.6047047,1.41098 c -0.9398705,0.54611 -1.5797325,1.5516 -1.5797325,2.71648 l 0,1.05003 c 0,0.57892 0.4711072,1.05003 1.0500299,1.05003 l 8.4002396,0 c 0.578922,0 1.050029,-0.47111 1.050029,-1.05003 l 0,-1.05003 c 0,-1.13441 -0.604704,-2.11881 -1.502386,-2.67429 z m -4.8727951,4.02433 -0.9750277,-4.50013 1.1625331,0.75002 0.562516,0.93753 -0.7500214,2.81258 z m 2.2500641,0 -0.7500213,-2.81258 0.562516,-0.93753 1.1625331,-0.75002 -0.9750278,4.50013 z m 0.9773716,-6.99629 c -0.091409,0.27891 -0.1640672,0.57657 -0.3867298,0.78283 -0.2367255,0.21798 -1.125032,0.52502 -1.5000427,-0.58595 -0.065627,-0.19688 -0.3609478,-0.19688 -0.4289184,0 -0.3984489,1.17659 -1.3125374,0.75939 -1.5000428,0.58595 -0.2226625,-0.20626 -0.2976647,-0.50392 -0.3867297,-0.78283 -0.01875,-0.0586 -0.1476605,-0.1336 -0.1476605,-0.13595 l 0,-0.25313 c 0.6633002,0.0844 1.4297282,0.13594 2.2500641,0.13594 0.8203358,0 1.5867639,-0.0492 2.2500641,-0.13594 l 0,0.25313 c -0.00234,0.002 -0.1312538,0.075 -0.1500043,0.13595 z" />
            </svg>
          <h1
            class="relative max-w-4xl text-5xl font-bold tracking-tighter text-center text-slate-700 md:text-6xl font-regular dark:text-slate-300">
            <span>{{ $t('header.generateYourDarkVideo') }}</span>
            <div class="relative mt-4 -top-32">
              <span v-for="(title, index) in titles" :key="index" :style="getTitleStyle(index)"
                class="absolute flex justify-center w-full overflow-hidden font-bold text-center text-slate-700 md:pb-4 md:pt-1 dark:text-slate-300">
                {{ title }}
              </span>
            </div>
          </h1>

          <p
            class="relative max-w-3xl mt-16 text-lg leading-relaxed tracking-tight text-center text-slate-600 dark:text-slate-500 md:text-xl text-muted-foreground">
            {{ $t('header.experienceFreedom') }}
          </p>
        </div>

        <div class="flex flex-row gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button size="lg" class="gap-4 px-24 py-6 text-lg font-bold text-white rounded-full shadow-xl bg-slate-800 hover:text-white hover:bg-slate-600 dark:text-white"
                  variant="outline">
                  {{ $t('header.tryNow') }}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {{ $t('header.letsGo') }}
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

import { Badge } from '@/components/ui/badge'

import { useI18n } from 'vue-i18n';
import { watch, ref, onMounted, onBeforeUnmount } from 'vue';

const { locale, t } = useI18n();

const titles = ref([
  t("header.simple"),
  t("header.easy"),
  t("header.fast"),
  t("header.creative"),
  t("header.intuitive"),
  t("header.fun"),
  t("header.accessible"),
  t("header.dynamic"),
  t("header.agile"),
  t("header.practical")
]);

const titleNumber = ref(0);
let timeoutId: any;

const updateTitle = () => {
  titleNumber.value = (titleNumber.value + 1) % titles.value.length;
};

watch(locale, () => {
  titles.value = [
    t("header.simple"),
    t("header.easy"),
    t("header.fast"),
    t("header.creative"),
    t("header.intuitive"),
    t("header.fun"),
    t("header.accessible"),
    t("header.dynamic"),
    t("header.agile"),
    t("header.practical")
  ];
});

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