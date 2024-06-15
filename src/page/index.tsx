import { createRouter } from 'cell-router';
import { FC, lazy } from 'web-cell';

import { SignInPage } from './SignIn';

const DashBoard = lazy(() => import('./DashBoard')),
    DownloaderPage = lazy(() => import('./Downloader'));

const { Route } = createRouter();

export const PageFrame: FC = () => (
    <div>
        <Route path="" component={SignInPage} />
        <Route path="admin" component={DashBoard} />
        <Route path="admin/dashboard" component={DashBoard} />
        <Route path="admin/downloader" component={DownloaderPage} />
    </div>
);
