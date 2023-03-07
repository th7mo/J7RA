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

export const Empty = Template.bind({});

Empty.args = {
    required: true,
    labelText: 'Summary'
}
