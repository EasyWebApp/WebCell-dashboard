import { Button, FormCheck, FormField } from 'boot-cell';
import { FC, WebCellProps } from 'web-cell';
import { formToJSON } from 'web-utility';

export const SignInPage: FC<WebCellProps> = ({ className = '', style }) => (
    <main
        className={`bg-light vh-100 d-flex flex-column ${className}`}
        style={style}
    >
        <form
            // @ts-ignore
            className="m-auto px-3 flex-fill d-flex flex-column justify-content-center gap-3"
            style={{ maxWidth: '26.25rem' }}
            onSubmit={(event: Event) => {
                event.preventDefault(), event.stopPropagation();

                console.log(formToJSON(event.target as HTMLFormElement));

                location.hash = 'admin';
            }}
        >
            <div className="d-flex flex-column align-items-center gap-4">
                <img
                    style={{ width: '72', height: '72' }}
                    src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
                />
                <h1 className="h3 m-0 font-weight-normal">Floating labels</h1>
                <p>
                    Build form controls with floating labels via the{' '}
                    <code>:placeholder-shown</code> pseudo-element.{' '}
                    <a href="https://caniuse.com/#feat=css-placeholder-shown">
                        Works in latest Chrome, Safari, and Firefox.
                    </a>
                </p>
            </div>

            <FormField
                as="input"
                type="email"
                name="email"
                required
                autofocus
                placeholder="Email address"
                labelFloat
            />
            <FormField
                as="input"
                type="password"
                name="password"
                required
                autofocus
                placeholder="Password"
                labelFloat
            />
            <FormCheck
                type="checkbox"
                name="remember_me"
                label={<>Remember me</>}
            />
            <Button
                type="submit"
                variant="primary"
                className="d-block w-100"
                size="lg"
            >
                Sign in
            </Button>
        </form>

        <footer className="text-center bg-light py-4">
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
