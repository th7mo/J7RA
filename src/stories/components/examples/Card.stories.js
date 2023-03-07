import Card from '/src/components/examples/Card.vue';

export default {
    title: 'Card',
    component: Card,
}

const Template = (args) => ({
    components: { Card },
    setup() {
        return { args };
    },
    template: `
        <Card v-bind="args" />
    `
});

export const ShortDescription = Template.bind({});

ShortDescription.args = {
    title: 'Primary',
    subText: 'Example sub Text',
}
