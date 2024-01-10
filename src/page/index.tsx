import { PageProps, createRouter } from 'cell-router';
import { FC } from 'web-cell';

import { DashBoard } from './DashBoard';
import { SignInPage } from './SignIn';

const { Route } = createRouter({
    startClass: 'start',
    endClass: 'end'
});

export const PageFrame: FC = () => (
    <>
        <Route
            path="/sign-in"
            component={({ className }: PageProps) => (
                <div className={`page ${className}`}>
                    <SignInPage />
                </div>
            )}
        />
        <Route
            path="/admin"
            component={({ className }: PageProps) => (
                <div className={`page ${className}`}>
                    <DashBoard />
                </div>
            )}
        />
    </>
);
