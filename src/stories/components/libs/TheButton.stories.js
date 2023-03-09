import TheButton from '/src/components/libs/TheButton.vue';

export default {
    title: 'TheButton',
    component: TheButton,
}

const Template = (args) => ({
    components: { TheButton },
    setup() {
        return { args };
    },
    template: `
        <TheButton v-bind="args">
            <template v-slot>${args.default}</template>
        </TheButton>
    `
});

export const DefaultButton = Template.bind({});

DefaultButton.args = {
    default: `Create`
}

export const DefaultButtonLong = Template.bind({});

DefaultButtonLong.args = {
    default: `Create a new User Story`
}

export const ButtonNotFilled = Template.bind({});

ButtonNotFilled.args = {
    filled: false,
    default: `Create`
}

export const ButtonDisabledAndFilled = Template.bind({});

ButtonDisabledAndFilled.args = {
    default: `Create`,
    disabled: true
}

export const ButtonDisabledAndNotFilled = Template.bind({});

ButtonDisabledAndNotFilled.args = {
    default: `Create`,
    disabled: true,
    filled: false
}