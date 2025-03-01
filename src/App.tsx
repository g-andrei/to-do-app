import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Typography } from './components';
import { Body } from './features/views';
import AddEvent from './features/views/AddEventModal/AddEventModal';
import Header from './features/views/Header/Header';
import './i18n';
import { formStatus, getTasks } from './slices';
import { useAppDispatch } from './store';
import Theme from './themes';

function App() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { isAddEventModalOpend } = useSelector(formStatus);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos')!) || [];
        dispatch(getTasks({ data: todos }));
    }, [dispatch]);

    return (
        <Theme>
            <div
                style={{
                    display: 'grid',
                    backgroundColor: isAddEventModalOpend
                        ? '#0e141e'
                        : '#1C273C',
                }}
            >
                {isAddEventModalOpend && <AddEvent />}

                <div
                    style={{
                        margin: '50vh auto 0',
                        transform: 'translateY(-50%)',
                        filter: isAddEventModalOpend ? 'blur(4px)' : 'blur(0)',
                        gap: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="title"
                        style={{
                            marginBottom: '114px',
                            marginTop: '80px',
                        }}
                    >
                        {t('personal-task-manager-uppercase')}
                    </Typography>

                    <Header />
                    <Body />
                    <Typography variant="paragraph">
                        {t('project-in-progress')}
                    </Typography>
                </div>
            </div>
        </Theme>
    );
}

export default App;
