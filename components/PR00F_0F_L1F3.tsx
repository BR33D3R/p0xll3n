import React, { useState } from 'react';
import { Button, Card, TextareaAutosize, Typography, TextField, styled } from '@mui/material';
import { Box } from '@mui/system';

const StyledLabel = styled('label')`
  display: block;
  margin: 20px 0;
`;

function PR00F_OF_L1F3() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        gardenExperience: '',
        favoritePlant: '',
        photo: null,
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhotoChange = (e: { target: { files: any[]; }; }) => {
        setFormData({
            ...formData,
            photo: e.target.files[0],
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (step < 2) {
            setStep(step + 1);
        } else {
            // Use formData to interact with contract
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 4 }}>
            {step === 0 && (
                <div>
                    <StyledLabel>
                        Tell us about your gardening experience:
                        <TextareaAutosize name="gardenExperience" value={formData.gardenExperience} onChange={handleChange} />
                    </StyledLabel>
                </div>
            )}
            {step === 1 && (
                <div>
                    <StyledLabel>
                        What's your favorite plant?
                        <TextField type="text" name="favoritePlant" value={formData.favoritePlant} onChange={handleChange} />
                    </StyledLabel>
                </div>
            )}
            {step === 2 && (
                <div>
                    <StyledLabel>
                        Upload a 'Proof of Life' photo:
                        <TextField type="file" name="photo" onChange={handlePhotoChange} />
                    </StyledLabel>
                </div>
            )}
            <Button variant="contained" type="submit">{step < 2 ? 'Next' : 'Submit'}</Button>
        </Box>
    );
}

export default PR00F_OF_L1F3;
