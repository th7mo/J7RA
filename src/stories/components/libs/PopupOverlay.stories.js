import PopupOverlay from '/src/components/libs/PopupOverlay.vue'
import NewUserStoryField from '/src/components/user_stories/NewUserStoryField.vue'
import NewUserStoryFieldTextArea from '/src/components/user_stories/NewUserStoryFieldTextArea.vue'

export default {
    title: 'libs/PopupOverlay',
    component: PopupOverlay,
}

export const Empty = {};

export const CreateUserStory = () => ({
    components: { PopupOverlay, NewUserStoryField, NewUserStoryFieldTextArea },
    template: `
        <PopupOverlay>
            <div class="w-[40vw] h-[80vh]">
                <NewUserStoryField :required="true" labelText="Summary" /> 
                <NewUserStoryFieldTextArea labelText="Description" placeHolder="A simple placeholder"/>
            </div>
        </PopupOverlay>
    `,
});

export const CreateUserStorySmall = () => ({
    components: { PopupOverlay, NewUserStoryField, NewUserStoryFieldTextArea },
    template: `
        <PopupOverlay>
            <div class="w-[20vw] h-[80vh]">
                <NewUserStoryField :required="true" labelText="Summary" /> 
                <NewUserStoryFieldTextArea labelText="Description" placeHolder="A simple placeholder"/>
            </div>
        </PopupOverlay>
    `,
});

export const CreateUserStoryBig = () => ({
    components: { PopupOverlay, NewUserStoryField, NewUserStoryFieldTextArea },
    template: `
        <PopupOverlay>
            <div class="w-[70vw] h-[80vh]">
                <NewUserStoryField :required="true" labelText="Summary" /> 
                <NewUserStoryFieldTextArea labelText="Description" placeHolder="A simple placeholder"/>
            </div>
        </PopupOverlay>
    `,
});
