<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-php {
      background-color: #777bb4;
      color: white;
    }

    &-sql {
      background-color: #00758f;
      color: white;
    }

    &-powerbi {
      background-color: #f2c811;
      color: #1f1f1f;
    }

    &-excel {
      background-color: #217346;
      color: white;
    }

    &-erp {
      background-color: #4b5563;
      color: white;
    }

    &-arduino {
      background-color: #00878f;
      color: white;
    }

    &-cpp {
      background-color: #00599c;
      color: white;
    }

    &-leds {
      background-color: #e5484d;
      color: white;
    }

    &-hcsr04 {
      background-color: #3b82f6;
      color: white;
    }

    &-buzzer {
      background-color: #374151;
      color: white;
    }

    &-servo {
      background-color: #f97316;
      color: #2b1200;
    }

    &-pir {
      background-color: #7c3aed;
      color: white;
    }

    &-ldr {
      background-color: #facc15;
      color: #3a2f00;
    }

    &-cad {
      background-color: #0f766e;
      color: white;
    }

    &-solar {
      background-color: #fbbf24;
      color: #3a2a00;
    }
  }
}
</style>
