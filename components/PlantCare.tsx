import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//npm reactToastify

function NotificationSystem() {
    const [counter, setCounter] = useState(0);

    const plantCareNotification = () => {
        toast.info('It\'s time to take care of your plant!', {
            onClick: () => {
                toast.dismiss();
                toast(<PlantCareSurvey />);
            }
        });
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(counter => counter + 1);
            plantCareNotification();
        }, 60000); // Adjust this value to set the time interval of notifications

        return () => clearInterval(intervalId);
    }, []);

    return <ToastContainer />;
}

function PlantCareSurvey() {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: ''
    });

    const handleChange = (e) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use answers to interact with smart contract here

        // Show success toast and clear form
        toast.success("Survey submitted successfully!");
        setAnswers({
            question1: '',
            question2: '',
            question3: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question 1:
                <input type="text" name="question1" value={answers.question1} onChange={handleChange} />
            </label>
            <label>
                Question 2:
                <input type="text" name="question2" value={answers.question2} onChange={handleChange} />
            </label>
            <label>
                Question 3:
                <input type="text" name="question3" value={answers.question3} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NotificationSystem;
