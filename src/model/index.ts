import { History } from 'cell-router/source';

import { ContentModel } from './Content';

export const history = new History();

export const content = new ContentModel({
    owner: 'EasyWebApp',
    repo: 'DashBoard'
});
