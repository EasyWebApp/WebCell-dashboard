import {
    WebCellProps,
    VNodeChildElement,
    createCell,
    Fragment
} from 'web-cell';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { Nav } from 'boot-cell/source/Navigator/Nav';
import { Field } from 'boot-cell/source/Form/Field';
import { Button } from 'boot-cell/source/Form/Button';

import { IconNavLinkProps, IconNavLink } from './IconNavLink';
import style from './PageFrame.less';
import WebCell_0 from '../image/WebCell-0.png';

interface MenuSection {
    title?: VNodeChildElement;
    list: IconNavLinkProps[];
}

export interface PageFrameProps extends WebCellProps {
    menu?: MenuSection[];
}

export function PageFrame({ menu = [], defaultSlot }: PageFrameProps) {
    return (
        <>
            <NavBar
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
            </NavBar>

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
                    {defaultSlot}
                </main>
            </div>
        </>
    );
}
