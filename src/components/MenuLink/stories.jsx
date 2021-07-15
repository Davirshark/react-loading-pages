import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Menu',
    link: '#target0',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
