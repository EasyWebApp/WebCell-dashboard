import { FAIcon, NavLink, NavLinkProps } from 'boot-cell';
import { FC } from 'web-cell';

export interface IconNavLinkProps extends NavLinkProps {
    icon: string;
}

export const IconNavLink: FC<IconNavLinkProps> = ({
    icon,
    children,
    ...rest
}) => (
    <NavLink {...rest}>
        <FAIcon
            name={icon}
            className="text-center mr-md-2"
            style={{
                width: '1.25rem',
                height: '1.25rem'
            }}
        />
        <span className="d-none d-md-inline">{children}</span>
    </NavLink>
);
