import React, { useState } from 'react';
import { taskValue } from 'src/slices';
import { useSelector } from 'react-redux';
import { Button, Card, Task, Typography } from 'src/components';
import { StyledBodyAppContiner } from './BodyApp.styled';

const Body = () => {
    const allTasks = useSelector(taskValue);
    console.log('🚀 ~ Body ~ allTasks:', allTasks);
    const [filter, setFilter] = useState('All');

    const filterTasks = (task: { status: string }) => {
        if (filter === 'Active') {
            return task.status !== 'Completed';
        } else if (filter === 'Completed') {
            return task.status === 'Completed';
        }
        return true;
    };

    const handleFilterClick = (
        selectedFilter: React.SetStateAction<string>
    ) => {
        setFilter(selectedFilter);
    };

    const filteredTasks = allTasks.filter(filterTasks);

    return (
        <Card>
            <StyledBodyAppContiner
                style={
                    !filteredTasks.length
                        ? {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                          }
                        : {}
                }
            >
                {filteredTasks.length ? (
                    filteredTasks.map((task) => (
                        <Task
                            id={task.id}
                            task={task.task}
                            variant={task.status}
                            categoryText={task.status}
                            key={task.id}
                        />
                    ))
                ) : (
                    <Typography variant="paragraph">
                        {filter === 'Completed'
                            ? `You have no completed tasks.`
                            : `You have no task to fulfill.`}
                    </Typography>
                )}
            </StyledBodyAppContiner>
            <div style={{ textAlign: 'center' }}>
                {['Active', 'All', 'Completed'].map((filterOption) => (
                    <Button
                        key={filterOption}
                        variant="secondary"
                        selected={filter === filterOption}
                        onClick={() => handleFilterClick(filterOption)}
                    >
                        {filterOption}
                    </Button>
                ))}
            </div>
        </Card>
    );
};

export default Body;
