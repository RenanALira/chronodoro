import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { MenuItem } from './MenuItem';

export function Menu() {
    return (
        <nav className={styles.menu}>
            <MenuItem>
                <HouseIcon />
            </MenuItem>
            <MenuItem>
                <HistoryIcon />
            </MenuItem>
            <MenuItem>
                <SettingsIcon />
            </MenuItem>
            <MenuItem>
                <SunIcon />
            </MenuItem>
        </nav>
    );
}