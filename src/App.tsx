import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

function setInitialTheme() {
    document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    );
}

export function App() {
    setInitialTheme();

    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action=''>
                    <div className='form-row'>
                        <DefaultInput type='text' label='Task' id='input_task' placeholder='Task name' />
                    </div>

                    <div className='form-row'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='form-row'>
                        <Cycles />
                    </div>

                    <div className='form-row'>
                        <DefaultButton>
                            <PlayCircleIcon />
                        </DefaultButton>
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}