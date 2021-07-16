import { GridTwoColum } from '.';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: {
    title: 'teste component Grid two columns',
    text: `jeito sempre alegre sem deixar transparecer`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};
