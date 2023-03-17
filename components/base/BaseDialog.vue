<template>
  <div :class="`fixed inset-0 bg-slate-800/40 grid place-items-center z-50`">
    <article @click.stop="" class="bg-white p-10 w-full max-w-4xl rounded-sm">
      <slot></slot>
    </article>
  </div>
</template>
