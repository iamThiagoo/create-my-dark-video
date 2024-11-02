<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
v-bind="forwarded"
    :class="
      cn('peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 border-slate-800 border-slate-800 border-slate-50 ring-offset-slate-950 focus-visible:ring-slate-300 data-[state=checked]:bg-slate-50 data-[state=checked]:text-slate-900 dark:border dark:border-slate-800 rounded',
         props.class)"
  >
    <CheckboxIndicator class="flex items-center justify-center w-full h-full text-current">
      <slot>
        <Check class="w-4 h-4" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
