import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    clearCompletedTasks,
    completedTaskLength,
    deleteAllTasks,
    openAddEventModal,
    taskLength,
} from 'src/slices';
import { useAppDispatch } from 'src/store';

import { Button, Card, Typography } from 'src/components';

import colors from 'src/themes/colors';
import { StyledContainer } from './Header.styled';

const Header = () => {
    const { t } = useTranslation();
    const lengthOfTasks = useSelector(taskLength);
    const lengthOfCompletedTasks = useSelector(completedTaskLength);
    const dispatch = useAppDispatch();

    return (
        <Card>
            <StyledContainer>
                <Typography
                    variant="paragraph"
                    style={{ color: colors.text.secondary }}
                >
                    {lengthOfTasks}
                    {lengthOfTasks === 1 ? t('task') : t('tasks')}
                </Typography>
                <Button onClick={() => dispatch(openAddEventModal(true))}>
                    {t('add-new-task')}
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => dispatch(clearCompletedTasks())}
                    disabled={lengthOfCompletedTasks === 0 ? true : false}
                >
                    {t('clear-completed')}
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => dispatch(deleteAllTasks())}
                    disabled={lengthOfTasks === 0 ? true : false}
                >
                    {t('clear-all-tasks')}
                </Button>
            </StyledContainer>
        </Card>
    );
};

export default Header;
