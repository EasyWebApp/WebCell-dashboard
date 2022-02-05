import { History } from 'cell-router';

import { ContentModel } from './Content';

export const history = new History();

export const content = new ContentModel({
    owner: 'EasyWebApp',
    repo: 'DashBoard'
});
