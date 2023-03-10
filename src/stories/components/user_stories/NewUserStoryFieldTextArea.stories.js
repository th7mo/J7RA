import NewUserStoryFieldTextArea from '/src/components/user_stories/NewUserStoryFieldTextArea.vue';

export default {
    title: 'user stories/TextArea',
    component: NewUserStoryFieldTextArea,
}

export const RequiredPlaceholderLessRows = {
    args: {
        required: true,
        labelText: 'Summary',
        placeHolder: 'Placeholder text',
        rows: 2
    },
};

export const LongPlaceholder = {
    args: {
        labelText: 'A bit longer label for this input',
        placeHolder: `Ullamco amet labore veniam Lorem eiusmod duis laboru m esse sit. Nulla occaecat id anim dolor eiusmod fugiat Lorem aute adipisicing nulla. Do aute adipisicing anim culpa magna nulla elit.`,  
    }
}

export const RequiredMoreRows = {
    args: {
        required: true,
        labelText: 'Description',
        rows: 6,
    }
};
