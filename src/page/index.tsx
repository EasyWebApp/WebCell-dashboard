import { createRouter } from 'cell-router';
import { FC } from 'web-cell';

import { DashBoard } from './DashBoard';
import { SignInPage } from './SignIn';

const { Route } = createRouter();

export const PageFrame: FC = () => (
    <>
        <Route path="" component={SignInPage} />
        <Route path="admin" component={DashBoard} />
    </>
);
