<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  NavigationMenuRoot,
  type NavigationMenuRootEmits,
  type NavigationMenuRootProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import NavigationMenuViewport from './NavigationMenuViewport.vue'

const props = defineProps<NavigationMenuRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<NavigationMenuRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuRoot
    v-bind="forwarded"
    :class="cn('fixed top-0 pb-5 w-full z-10 max-w-6xl items-center justify-between bg-white/50 dark:bg-slate-950/50 pt-5',)"
  >
    <slot class="w-full" />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
