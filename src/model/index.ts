import { Downloader } from 'mobx-restful';

import { ContentModel } from './Content';

export * from './Content';

export const content = new ContentModel({
    owner: 'EasyWebApp',
    repo: 'WebCell-dashboard'
});

export const downloader = new Downloader();
