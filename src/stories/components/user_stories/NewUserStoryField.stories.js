import NewUserStoryField from '/src/components/user_stories/NewUserStoryField.vue';

export default {
    title: 'user stories/InputField',
    component: NewUserStoryField,
}

export const RequiredFieldWithSmallLabel = {
    args: {
        labelText: 'Summary',
        required: true,
    },
};

export const OptionalFieldWithLongerLabel = {
    args: {
        labelText: 'A bit longer label for this input',
    },
};

export const InvalidUserInput = {
    args: {
        labelText: 'Summary',
        required: true,
        error: true,
    },
};
