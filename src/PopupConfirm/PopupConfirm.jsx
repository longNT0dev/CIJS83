import React, { useState, useEffect } from 'react';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
// import {Prompt} from 'react-router-dom'


function FirstScreen() {
    const [isEditing, setIsEditing] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Function to handle changes in the user information
    const handleInputChange = (event) => {
        // Set isEditing to true when the user makes any changes
        setIsEditing(true);
        // Handle your input changes here
    };

    // Function to handle navigation to the second screen
    const navigateToSecondScreen = () => {
        // Check if there are any unsaved changes
        if (isEditing) {
            // Show the custom confirmation modal
            setShowConfirmation(true);
        } else {
            // If there are no unsaved changes, navigate to the second screen directly
            // Perform your navigation here (e.g., using React Router)
            // For example:
            // history.push('/second-screen'); // Replace '/second-screen' with your actual path for the second screen
        }
    };

    // Function to handle confirming the navigation
    const handleConfirmNavigation = () => {
        // Close the confirmation modal
        setShowConfirmation(false);

        // Perform your navigation here (e.g., using React Router)
        // For example:
        // history.push('/second-screen'); // Replace '/second-screen' with your actual path for the second screen
    };

    // Function to handle canceling the navigation
    const handleCancelNavigation = () => {
        // Close the confirmation modal
        setShowConfirmation(false);
    };

    // Hook to set up the beforeunload event
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (isEditing) {
                event.preventDefault();
                event.returnValue = ''; // This text will be shown in the browser's confirmation dialog
                setShowConfirmation(true); // Show the custom modal on beforeunload
            }
        };

        // Attach the event listener when the component mounts
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Remove the event listener when the component unmounts to avoid memory leaks
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isEditing]);

    return (
        <div>
            {/* Your input fields and UI components */}
            <input type="text" onChange={handleInputChange} />
            {/* Your other UI components */}
            <button onClick={navigateToSecondScreen}>Go to Screen 2</button>

            {/* Render the ConfirmationModal component */}
            {/* <Prompt
                when={isEditing}
                message="Are you sure you want to leave?"
            /> */}
        </div>
    );
}

export default FirstScreen;
