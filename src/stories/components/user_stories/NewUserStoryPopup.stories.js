import PopupOverlay from '/src/components/libs/PopupOverlay.vue'
import NewUserStoryPopup from '/src/components/user_stories/NewUserStoryPopup.vue'
import NewUserStoryField from '/src/components/user_stories/NewUserStoryField.vue'
import NewUserStoryFieldTextArea from '/src/components/user_stories/NewUserStoryFieldTextArea.vue'

export default {
    title: 'NewUserStoryPopup',
    component: NewUserStoryPopup,
}

const Template = (args, {argTypes }) => ({
    components: { NewUserStoryPopup, PopupOverlay, NewUserStoryField, NewUserStoryFieldTextArea },
    props: Object.keys(argTypes),
    template: `
        <h2 class="font-bold">In velit ad cillum laborum sunt esse irure exercitation adipisicing.</h2>
        <p>Pariatur tempor ex incididunt proident Lorem. Eiusmod reprehenderit incididunt aliqua irure adipisicing excepteur veniam excepteur cillum consectetur et qui. Reprehenderit id magna laboris et culpa esse commodo officia sit qui tempor cillum do. Eu nulla nulla Lorem nulla quis deserunt cillum ea tempor labore eu ullamco aliquip exercitation. Aliquip enim Lorem sint ut. Non eu id exercitation consequat laboris commodo adipisicing.</p>

        <NewUserStoryPopup />
    `
});

export const Empty = Template.bind({});

Empty.args = {
    default: ``
}
