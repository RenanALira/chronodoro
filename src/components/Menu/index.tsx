import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { MenuItem } from './MenuItem';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return localStorage.getItem('theme') as AvailableThemes || 'dark';
    });

    const toggleThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme((prevTheme) => {
            return prevTheme === 'dark' ? 'light' : 'dark';
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <MenuItem aria-label='Go to Home' title='Go to Home'>
                <HouseIcon />
            </MenuItem>
            <MenuItem aria-label='Go to History' title='Go to History'>
                <HistoryIcon />
            </MenuItem>
            <MenuItem aria-label='Go to Settings' title='Go to Settings'>
                <SettingsIcon />
            </MenuItem>
            <MenuItem aria-label='Change theme' title='Change theme' onClick={(event) => handleThemeChange(event)}>
                {toggleThemeIcon[theme]}
            </MenuItem>
        </nav>
    );
}