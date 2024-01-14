import { Icon, NavLink, NavLinkProps } from 'boot-cell';
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
        <Icon name={icon} className="text-center me-md-2" size={1.25} />

        <span className="d-none d-md-inline">{children}</span>
    </NavLink>
);
