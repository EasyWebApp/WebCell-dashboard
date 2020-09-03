import { createCell } from 'web-cell';
import { CellRouter } from 'cell-router/source';

import { history } from '../model';

import { SignInPage } from './SignIn';
import { DashBoard } from './DashBoard';

export function PageFrame() {
    return (
        <CellRouter
            history={history}
            routes={[
                {
                    paths: [''],
                    component: SignInPage
                },
                {
                    paths: ['admin', 'admin/dashboard'],
                    component: DashBoard
                }
            ]}
        />
    );
}
