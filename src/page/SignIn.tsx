import { Button, FormField, ToggleField } from 'boot-cell';
import { FC } from 'web-cell';
import { formToJSON } from 'web-utility';

import { history } from '../model';

export const SignInPage: FC = () => (
    <main className="bg-light">
        <form
            // @ts-ignore
            className="m-auto py-5 px-3"
            style={{ maxWidth: '26.25rem' }}
            onSubmit={(event: Event) => {
                event.preventDefault(), event.stopPropagation();

                console.log(formToJSON(event.target as HTMLFormElement));

                history.push('admin');
            }}
        >
            <div className="text-center mb-4">
                <img
                    className="mb-4"
                    style={{ width: '72', height: '72' }}
                    src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
                />
                <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
                <p>
                    Build form controls with floating labels via the{' '}
                    <code>:placeholder-shown</code> pseudo-element.{' '}
                    <a href="https://caniuse.com/#feat=css-placeholder-shown">
                        Works in latest Chrome, Safari, and Firefox.
                    </a>
                </p>
            </div>

            <FormField
                type="email"
                name="email"
                required
                autofocus
                placeholder="Email address"
                labelFloat
            />
            <FormField
                type="password"
                name="password"
                required
                autofocus
                placeholder="Password"
                labelFloat
            />
            <ToggleField className="mb-3" type="checkbox" name="remember_me">
                Remember me
            </ToggleField>

            <Button type="submit" color="primary" block size="lg">
                Sign in
            </Button>
        </form>

        <footer className="text-center bg-light py-5">
            Proudly developed with
            <a className="mx-1" target="_blank" href="https://web-cell.dev/">
                WebCell v3
            </a>
            &amp;
            <a
                className="mx-1"
                target="_blank"
                href="https://bootstrap.web-cell.dev/"
            >
                BootCell v2
            </a>
        </footer>
    </main>
);
