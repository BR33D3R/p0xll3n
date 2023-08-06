import React, { useState } from 'react';
//install more dependencies for ui/ux

function Onboarding() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        gardenExperience: '',
        favoritePlant: '',
        photo: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhotoChange = (e) => {
        setFormData({
            ...formData,
            photo: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 2) {
            setStep(step + 1);
        } else {
            // Use formData to interact with contract
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {step === 0 && (
                <div>
                    <label>
                        Tell us about your gardening experience:
                        <textarea name="gardenExperience" value={formData.gardenExperience} onChange={handleChange} />
                    </label>
                </div>
            )}
            {step === 1 && (
                <div>
                    <label>
                        What's your favorite plant?
                        <input type="text" name="favoritePlant" value={formData.favoritePlant} onChange={handleChange} />
                    </label>
                </div>
            )}
            {step === 2 && (
                <div>
                    <label>
                        Upload a 'Proof of Life' photo:
                        <input type="file" name="photo" onChange={handlePhotoChange} />
                    </label>
                </div>
            )}
            <button type="submit">{step < 2 ? 'Next' : 'Submit'}</button>
        </form>
    );
}

export default Onboarding;
