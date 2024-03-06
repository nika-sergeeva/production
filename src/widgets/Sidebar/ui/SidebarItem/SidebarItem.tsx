import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/Items';

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
            className={cls.item}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(`${item.text}`)}
            </span>
        </AppLink>

    );
};
