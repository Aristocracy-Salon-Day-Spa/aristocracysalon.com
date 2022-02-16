import { FaListAlt as icon } from 'react-icons/fa';

export default {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'object',
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  icon,
  fieldsets: [
    {
      title: 'Menu Item',
      name: 'menuItemSet',
    },
  ],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableTextBody',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      media: 'icon',
    },
    prepare(selection) {
      const { title, price, media } = selection;
      return {
        title: `${title} - ${price}`,
        media,
      };
    },
  },
};
