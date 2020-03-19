import { component } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';

import { history } from '../model';

import { SignInPage } from './SignIn';
import { DashBoard } from './DashBoard';

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = history;
    protected routes = [
        {
            paths: [''],
            component: SignInPage
        },
        {
            paths: ['admin', 'admin/dashboard'],
            component: DashBoard
        }
    ];
}
