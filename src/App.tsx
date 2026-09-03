import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';

function setInitialTheme() {
    document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    );
}

export function App() {
    setInitialTheme();

    return <Home />;
}