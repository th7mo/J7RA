<template>
  <Story :layout="{ type: 'grid', width: '40%' }">
    <Variant title="Primary">
      <BaseButton label="Create" />
    </Variant>

    <Variant title="Primary Long">
      <BaseButton label="Create a new User Story!" />
    </Variant>

    <Variant title="Transparent">
      <BaseButton label="Cancel" transparent />
    </Variant>

    <Variant title="Primary Disabled">
      <BaseButton label="Create" disabled />
    </Variant>

    <Variant title="Transparent Disabled">
      <BaseButton label="Cancel" transparent disabled />
    </Variant>
  </Story>
</template>
