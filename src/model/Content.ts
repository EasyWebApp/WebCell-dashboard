import { observable } from 'mobx';
import { components } from '@octokit/openapi-types';

import { service } from './service';

export type PickItem<T> = T extends (infer R)[] ? R : T;

export type Content =
    | PickItem<components['schemas']['content-directory']>
    | PickItem<components['schemas']['content-file']>;

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
