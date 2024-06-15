import {
    Button,
    FormControl,
    FormGroup,
    Nav,
    OffcanvasNavbar
} from 'boot-cell';
import { JsxChildren } from 'dom-renderer';
import { FC, PropsWithChildren } from 'web-cell';

import WebCell_0 from '../image/WebCell-0.png';
import { IconNavLink, IconNavLinkProps } from './IconNavLink';
import style from './PageFrame.module.less';

interface MenuSection {
    title?: JsxChildren;
    list: Pick<IconNavLinkProps, 'title' | 'href' | 'icon'>[];
}

export type PageFrameProps = PropsWithChildren<{
    menu?: MenuSection[];
}>;

export const PageFrame: FC<PageFrameProps> = ({ menu = [], children }) => (
    <>
        <OffcanvasNavbar
            variant="dark"
            fluid
            expand="md"
            brand={
                <img
                    style={{ width: '2rem' }}
                    alt="WebCell scaffold"
                    src={WebCell_0}
                />
            }
        >
            <div className="row w-100 ms-auto g-3">
                <FormGroup className="col-md-3 offset-md-7">
                    <FormControl
                        as="input"
                        type="search"
                        required
                        placeholder="Search"
                    />
                </FormGroup>
                <FormGroup className="col-md-2 text-end">
                    <Button
                        variant="outline-light"
                        className="text-nowrap"
                        onClick={() => (self.location.href = '')}
                    >
                        Sign out
                    </Button>
                </FormGroup>
            </div>
        </OffcanvasNavbar>

        <div className={style.body}>
            <Nav className="flex-column py-2 bg-light border-right">
                {menu.map(({ title, list }) => (
                    <>
                        {title && (
                            <h6 className="text-muted mx-3 mt-4 d-none d-md-block">
                                {title}
                            </h6>
                        )}
                        {list.map(({ title, href, icon }) => (
                            <IconNavLink
                                key={title}
                                className="text-nowrap"
                                href={`#${href}`}
                                icon={icon}
                            >
                                {title}
                            </IconNavLink>
                        ))}
                    </>
                ))}
            </Nav>
            <main className="flex-fill h-100 p-4 overflow-auto">
                {children}
            </main>
        </div>
    </>
);
