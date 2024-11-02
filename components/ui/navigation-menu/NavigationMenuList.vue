<script setup lang="ts">
import { cn } from '@/lib/utils'
import { NavigationMenuList, type NavigationMenuListProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NavigationMenuListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuList
    v-bind="forwardedProps"
    :class="
      cn(
        'relative group flex flex-1 list-none items-center w-full justify-between gap-x-1 max-w-6xl mx-auto',
      )
    "
  >
    <slot />
  </NavigationMenuList>
</template>
