import NewUserStoryField from '/src/components/user_stories/NewUserStoryField.vue';

export default {
    title: 'NewUserStoryField',
    component: NewUserStoryField,
}

const Template = (args) => ({
    components: { NewUserStoryField },
    setup() {
        return { args };
    },
    template: `
        <NewUserStoryField v-bind="args" />
    `
});

export const RequiredFieldWithSmallLabel = Template.bind({});

RequiredFieldWithSmallLabel.args = {
    labelText: 'Summary',
    required: true,
}

export const OptionalFieldWithLongerLabel = Template.bind({});

OptionalFieldWithLongerLabel.args = {
    labelText: 'A bit longer label for this input'
}

export const InvalidUserInput = Template.bind({});

InvalidUserInput.args = {
    labelText: 'Summary',
    required: true,
    error: true
}
