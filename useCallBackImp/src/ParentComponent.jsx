import React, { useState, useCallback } from 'react';
import Button from './Button';
import Text from './Text';
import Count from './Count';
const ParentComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const handleAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const handleSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);
    return (
        <div>
            <Text />
            <Count text={'Age'} value={age} />
            <Button handleClick={handleAge}>Increment Age</Button>
            <Count text={'Salary'} value={salary} />
            <Button handleClick={handleSalary}>Increment Salary</Button>
        </div>
    );
};

export default ParentComponent;
