import { Button, Field, Nav, OffcanvasNavbar } from 'boot-cell';
import { VNode } from 'dom-renderer';
import { FC, PropsWithChildren } from 'web-cell';

import WebCell_0 from '../image/WebCell-0.png';
import { IconNavLink, IconNavLinkProps } from './IconNavLink';
import style from './PageFrame.less';

interface MenuSection {
    title?: VNode;
    list: IconNavLinkProps[];
}

export type PageFrameProps = PropsWithChildren<{
    menu?: MenuSection[];
}>;

export const PageFrame: FC<PageFrameProps> = ({ menu = [], children }) => (
    <>
        <OffcanvasNavbar
            brand={
                <img
                    className={style.logo}
                    alt="WebCell scaffold"
                    src={WebCell_0}
                />
            }
        >
            <Field
                type="search"
                className="col-md-9 my-2 my-md-0"
                required
                placeholder="Search"
            />
            <Button
                color="light"
                outline
                className="ml-md-5 mr-md-4 text-nowrap"
                onClick={() => (self.location.href = '')}
            >
                Sign out
            </Button>
        </OffcanvasNavbar>

        <div className={style.body}>
            <Nav direction="column" className="py-2 bg-light border-right">
                {menu.map(({ title, list }) => (
                    <>
                        {title && (
                            <h6 className="text-muted mx-3 mt-4 d-none d-md-block">
                                {title}
                            </h6>
                        )}
                        {list.map(({ title, ...rest }) => (
                            <IconNavLink {...rest}>{title}</IconNavLink>
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
