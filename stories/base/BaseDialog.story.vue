<template>
  <Story>
    <Variant title="Small">
      <BaseDialog>
        <div class="w-[20vw] h-[80vh]">
          <BaseInput required labelText="Summary" />
          <BaseTextArea labelText="Description" placeHolder="A simple placeholder" />
        </div>
      </BaseDialog>
    </Variant>

    <Variant title="Normal">
      <BaseDialog>
        <div class="w-[40vw] h-[80vh]">
          <BaseInput required labelText="Summary" />
          <BaseTextArea labelText="Description" placeHolder="A simple placeholder" />
        </div>
      </BaseDialog>
    </Variant>
  </Story>
</template>
