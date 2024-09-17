import type { SchemaTypeDefinition } from 'sanity';
import { authorType } from './author';
import { blockContent } from './blockContent';
import { categoryType } from './categoryType';
import { postType } from './post';

export const schemaTypes = [authorType, blockContent, categoryType, postType];
