import NewUserStoryFieldTextArea from '/src/components/user_stories/NewUserStoryFieldTextArea.vue';

export default {
    title: 'NewUserStoryFieldTextArea',
    component: NewUserStoryFieldTextArea,
}

const Template = (args) => ({
    components: { NewUserStoryFieldTextArea: NewUserStoryFieldTextArea },
    setup() {
        return { args };
    },
    template: `
        <NewUserStoryFieldTextArea v-bind="args" />
    `
});

export const RequiredPlaceholderLessRows = Template.bind({});

RequiredPlaceholderLessRows.args = {
    required: true,
    labelText: 'Summary',
    placeHolder: 'Placeholder text',
    rows: 2
}

export const LongPlaceholder = Template.bind({});

LongPlaceholder.args = {
    labelText: 'A bit longer label for this input',
    placeHolder: `Ullamco amet labore veniam Lorem eiusmod duis laboru m esse sit. Nulla occaecat id anim dolor eiusmod fugiat Lorem aute adipisicing nulla. Do aute adipisicing anim culpa magna nulla elit.`
}

export const RequiredMoreRows = Template.bind({});

RequiredMoreRows.args = {
    required: true,
    labelText: 'Description',
    rows: 6
}
