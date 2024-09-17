import { defineField, defineType } from 'sanity';
import { MdCategory } from 'react-icons/md';

export const categoryType = defineType({
  name: 'category',
  type: 'document',
  icon: MdCategory,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
});
