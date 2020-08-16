import { createCell } from 'web-cell';
import {
    NavProps,
    NavLinkProps,
    Nav,
    NavLink
} from 'boot-cell/source/Navigator/Nav';
import { FAIcon } from 'boot-cell/source/Reminder/FAIcon';

export function ColNav({ list, ...rest }: NavProps & { list: NavLinkProps[] }) {
    return (
        <Nav {...rest} direction="column">
            {list.map(({ icon, title, ...rest }) => (
                <NavLink {...rest}>
                    <FAIcon
                        name={icon}
                        className="text-center mr-md-2"
                        style={{
                            width: '1.25rem',
                            height: '1.25rem'
                        }}
                    />
                    <span className="d-none d-md-inline">{title}</span>
                </NavLink>
            ))}
        </Nav>
    );
}
