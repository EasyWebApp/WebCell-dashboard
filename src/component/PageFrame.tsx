import {
    WebCellProps,
    VNodeChildElement,
    createCell,
    Fragment
} from 'web-cell';
import { NavProps } from 'boot-cell/source/Navigator/Nav';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { Button } from 'boot-cell/source/Form/Button';

import { ColNav } from './ColNav';
import WebCell_0 from '../image/WebCell-0.png';

type MenuItem = NavProps['list'][0] & {
    icon: string;
};

interface MenuSection {
    title?: VNodeChildElement;
    list: MenuItem[];
}

interface PageFrameProps extends WebCellProps {
    menu?: MenuSection[];
}

export function PageFrame({ menu = [], defaultSlot }: PageFrameProps) {
    return (
        <Fragment>
            <NavBar
                brand={
                    <img
                        alt="WebCell scaffold"
                        src={WebCell_0}
                        style={{ width: '2rem' }}
                    />
                }
            >
                <input
                    type="search"
                    className="form-control col-md-9 my-2 my-md-0"
                    required
                    placeholder="Search"
                />
                <Button kind="light" outline className="ml-md-5 mr-md-4">
                    Sign out
                </Button>
            </NavBar>

            <main
                className="d-flex mt-5 pt-2"
                style={{ height: 'calc(100vh - 3rem)' }}
            >
                <div className="py-2 bg-light border-right overflow-auto">
                    {menu.map(({ title, list }) => (
                        <Fragment>
                            {title && (
                                <h6 className="text-muted mx-3 mt-4">
                                    {title}
                                </h6>
                            )}
                            <ColNav list={list} />
                        </Fragment>
                    ))}
                </div>

                {defaultSlot}
            </main>
        </Fragment>
    );
}
