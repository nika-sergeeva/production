import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/Items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
 item?: SidebarItemType;
 collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            key={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(`${item.text}`)}
            </span>
        </AppLink>

    );
};