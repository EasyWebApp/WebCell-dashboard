import { observable } from 'mobx';

import { service } from './service';

export interface Content {
    type: 'file' | 'dir';
    name: string;
    path: string;
    size: number;
    sha: string;
    html_url: string;
}

export class ContentModel {
    owner: string;
    repo: string;

    constructor({ owner, repo }: { owner: string; repo: string }) {
        (this.owner = owner), (this.repo = repo);
    }

    @observable
    list: Content[] = [];

    async getPaths() {
        const { body } = await service.get<Content[]>(
            `repos/${this.owner}/${this.repo}/contents`
        );
        return (this.list = body);
    }
}
