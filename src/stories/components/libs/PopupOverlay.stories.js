import PopupOverlay from '/src/components/libs/PopupOverlay.vue'
import NewUserStoryField from '/src/components/user_stories/NewUserStoryField.vue'
import NewUserStoryFieldTextArea from '/src/components/user_stories/NewUserStoryFieldTextArea.vue'

export default {
    title: 'PopupOverlay',
    component: PopupOverlay,
}

const Template = (args, {argTypes }) => ({
    components: { PopupOverlay, NewUserStoryField, NewUserStoryFieldTextArea },
    props: Object.keys(argTypes),
    template: `
        <NewUserStoryField :required="true" labelText="Summary" /> 
        <NewUserStoryFieldTextArea labelText="Description" placeHolder="A simple placeholder"/>

        <PopupOverlay v-bind="$props">
            <template v-slot>${args.default}</template>
        </PopupOverlay>
    `
});

export const Empty = Template.bind({});

Empty.args = {
    default: ``
}

export const CreateUserStory = Template.bind({});

CreateUserStory.args = {
    default: `
        <div class="w-[40vw] h-[80vh]">
        <NewUserStoryField :required="true" labelText="Summary" /> 
        <NewUserStoryFieldTextArea labelText="Description" placeHolder="A simple placeholder"/>
        </div>
    `
}

export const CreateUserStorySmall = Template.bind({});

CreateUserStorySmall.args = {
    default: `
        <div class="w-[20vw] h-[80vh]">
        <NewUserStoryField :required="true" labelText="Summary" /> 
        <NewUserStoryFieldTextArea labelText="Description" placeHolder="A simple placeholder"/>
        </div>
    `
}


export const CreateUserStoryBig = Template.bind({});

CreateUserStoryBig.args = {
    default: `
        <div class="w-[70vw] h-[80vh]">
        <NewUserStoryField :required="true" labelText="Summary" /> 
        <NewUserStoryFieldTextArea labelText="Description" placeHolder="A simple placeholder"/>
        </div>
    `
}
