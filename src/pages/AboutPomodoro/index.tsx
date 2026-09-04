import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro() {
    return <MainTemplate>
        <Container>
            <GenericHtml>
                <Heading>The Pomodoro Technique 🍅</Heading>

                <p>
                    The Pomodoro Technique is a productivity methodology created by{' '}
                    <strong>Francesco Cirillo</strong>, which consists of dividing
                    work into time blocks (the famous "Pomodoros") interspersed
                    with breaks. The goal is to maintain total focus for a short period and
                    ensure rest to prevent mental fatigue.
                </p>

                <img src='https://placehold.co/1920x1080' alt='' />

                <h2>How does the traditional Pomodoro work?</h2>
                <ul>
                    <li>
                        <strong>1. Define a task</strong> you want to accomplish.
                    </li>
                    <li>
                        <strong>2. Work on it for 25 minutes</strong> without interruptions.
                    </li>
                    <li>
                        <strong>3. Take a short 5-minute break</strong>.
                    </li>
                    <li>
                        <strong>4. Every 4 cycles, take a long break</strong>{' '}
                        (usually 15 to 30 minutes).
                    </li>
                </ul>

                <h2>
                    But in <strong>Chronos Pomodoro</strong> there is a key feature 🚀
                </h2>

                <p>
                    Our app follows the original concept, but with a few improvements and
                    customizations to make the process even more efficient:
                </p>

                <h3>⚙️ Time customization</h3>
                <p>
                    You can set the focus, short break, and long break times
                    however you like! Just go to the{' '}
                    <a href='/settings'>settings page</a> and adjust the minutes
                    to your preference.
                </p>

                <h3>🔁 Sequenced cycles</h3>
                <p>
                    With each completed cycle, a new task is automatically added
                    to your history, and the app immediately suggests the next cycle (focus or
                    break).
                </p>
                <p>
                    <strong>Our default:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Odd</strong> cycles: Work (focus).
                    </li>
                    <li>
                        <strong>Even</strong> cycles: Short break.
                    </li>
                    <li>
                        Cycle <strong>8</strong>: Special long break, to reset the
                        full cycle.
                    </li>
                </ul>

                <h3>🍅 Cycle visualization</h3>
                <p>
                    Right below the timer, you will see colored dots
                    representing the cycles:
                </p>
                <ul>
                    <li>🟡 Yellow: Work cycle (focus).</li>
                    <li>🟢 Green: Short break.</li>
                    <li>🔵 Blue: Long break (appears every 8 cycles).</li>
                </ul>

                <p>
                    This way, you always know where you are in the process and what comes
                    next. No need to write it down on paper or calculate it in
                    your head!
                </p>

                <h3>📊 Automatic history</h3>
                <p>
                    All your completed tasks and cycles are saved in the{' '}
                    <a href='/history'>history</a>, marked as completed or
                    interrupted. That way, you can track your progress over
                    time.
                </p>

                <h2>Why use Chronos Pomodoro?</h2>
                <ul>
                    <li>✅ Organize your focus with clarity.</li>
                    <li>✅ Work and rest in the right measure.</li>
                    <li>✅ Customize your own cycles and times.</li>
                    <li>✅ Track your history automatically.</li>
                </ul>

                <p>
                    <strong>Ready to focus?</strong> Let's{' '}
                    <a href='/'>go back to the homepage</a> and start your
                    Pomodoros! 🍅🚀
                </p>

                <p>
                    <em>"Total focus, no rush, no pause, keep going!"</em> 💪🧘‍♂️
                </p>
            </GenericHtml>
        </Container>
    </MainTemplate>
}