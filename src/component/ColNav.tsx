import { createCell, Fragment } from 'web-cell';
import { NavProps, Nav } from 'boot-cell/source/Navigator/Nav';
import { Icon } from 'boot-cell/source/Reminder/Icon';

export function ColNav({ list, ...rest }: NavProps) {
    return (
        <Nav
            {...rest}
            direction="column"
            list={list.map(({ icon, title, ...rest }) => ({
                title: (
                    <Fragment>
                        <Icon
                            name={icon}
                            className="text-center mr-2"
                            style={{
                                width: '1.25rem',
                                height: '1.25rem'
                            }}
                        />
                        {title}
                    </Fragment>
                ),
                ...rest
            }))}
        />
    );
}
