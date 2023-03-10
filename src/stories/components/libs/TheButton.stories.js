import TheButton from '/src/components/libs/TheButton.vue';

export default {
    title: 'libs/TheButton',
    component: TheButton,
}

export const DefaultButton = {
    args: {
        label: 'Create',
    },
};

export const DefaultButtonLong = {
    args: {
        label: 'Creata a new User Story',
    },
};

export const ButtonNotFilled = {
    args: {
        label: 'Create',
        filled: false,
    },
};

export const ButtonDisabledAndFilled = {
    args: {
        label: `Create`,
        disabled: true,
    },
};

export const ButtonDisabledAndNotFilled = {
    args: {
        label: `Create`,
        disabled: true,
        filled: false,
    },
};
