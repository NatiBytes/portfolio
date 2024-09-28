import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: FilesIcon, path: '/' },
  { Icon: GithubIcon, path: '/github' },
  { Icon: CodeIcon, path: '/projects' },
  { Icon: MailIcon, path: '/contact' },
];

const sidebarBottomItems = [
  { Icon: AccountIcon, path: '/about' },
  { Icon: SettingsIcon, path: '/settings' },
];

const Sidebar = () => {
  const router = useRouter();

  const renderIcon = (Icon, path) => {
    const isActive = router.pathname === path;
    const fill = isActive ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)';
    
    return (
      <div className={`${styles.iconContainer} ${isActive ? styles.active : ''}`}>
        <Icon fill={fill} className={styles.icon} />
      </div>
    );
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            {renderIcon(Icon, path)}
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            {renderIcon(Icon, path)}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;