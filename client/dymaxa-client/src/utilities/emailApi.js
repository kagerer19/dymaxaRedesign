// emailApi.js

import DOMPurify from "dompurify";

export const sendFormDataToServer = async (formData, files) => {
    try {
        const formDataObj = new FormData();

        const sanitizeFormData = {
            firstName: DOMPurify.sanitize(formData.firstName),
            lastName: DOMPurify.sanitize(formData.lastName),
            email: DOMPurify.sanitize(formData.email),
            contactNumber: DOMPurify.sanitize(formData.contactNumber),
            url: DOMPurify.sanitize(formData.url),
            introText: DOMPurify.sanitize(formData.introText),
            salaryExpectation: DOMPurify.sanitize(formData.salaryExpectation),
            earliestStartDate: formData.earliestStartDate,
            jobId: formData.jobId,
        };

        // Append sanitized form data fields
        Object.keys(sanitizeFormData).forEach((key) => {
            formDataObj.append(key, sanitizeFormData[key]);
        });

        // Append files with the correct field name
        files.forEach((file, index) => {
            formDataObj.append(`files`, file);
        });

        const response = await fetch('http://localhost:3001/api/send-email', {
            method: 'POST',
            body: formDataObj,
        });

        if (response.ok) {
            const result = await response.json();
            // !TODO Implement Winston for logging errors
            console.log(result);
        } else {
            // !TODO Implement Winston for logging errors
            console.error('Failed to send data to server.');
        }
    } catch (error) {
        // !TODO Implement Winston for logging errors
        console.error('Error:', error);
    }
};
