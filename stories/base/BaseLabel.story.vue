<template>
  <Story :layout="{ type: 'grid', width: '40%' }">
    <Variant title="Label">
      <BaseLabel label-text="The button">
        <BaseButton label="Create Button" />
      </BaseLabel>
    </Variant>

    <Variant title="Label Required">
      <BaseLabel label-text="The Required Button" required>
        <BaseButton label="Create Button" />
      </BaseLabel>
    </Variant>
  </Story>
</template>
