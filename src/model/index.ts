import { Downloader } from 'mobx-downloader';

import { ContentModel } from './Content';

export * from './Content';

export const content = new ContentModel({
    owner: 'EasyWebApp',
    repo: 'WebCell-dashboard'
});

export const downloader = new Downloader();
