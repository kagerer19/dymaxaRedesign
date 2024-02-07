// Import nodemailer
const nodemailer = require('nodemailer');
const ErrorResponse = require("../utils/errorResponse");

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kagerer19@gmail.com',
        pass: 'sgovvmhqcqslyade',
    },
});

exports.sendEmail = async ({ formData, files }) => {
    try {
        if (!formData) {
            return new ErrorResponse('Error: formData is undefined');
        }

        // Email content of form data
        const emailContent = `
            Name: ${formData.firstName} ${formData.lastName}
            Email: ${formData.email}
            Contact Number: ${formData.contactNumber}
            LinkedIn Profile: ${formData.url}
            Additional Info: ${formData.introText}
            Salary Expectation: ${formData.salaryExpectation}
            Start Date: ${formData.earliestStartDate}
            JobID: ${formData.jobId}
        `;

        const attachments = files.map(file => ({
            filename: file.originalname,
            content: file.buffer,
        }));

        // Send email to admin
        const adminMailOptions = {
            from: 'kagerer19@gmail.com',
            to: 'kagerer19@gmail.com',
            subject: 'New Job Application',
            text: emailContent,
            attachments,
        };

        // Send email to admin
        await transporter.sendMail(adminMailOptions);

        // Send confirmation email to the applicant
        const applicantMailOptions = {
            from: 'kagerer19@gmail.com',
            to: formData.email,
            subject: 'Thank you for your application',
            text: 'Your application has been received. We will get back to you soon!'
        };

        await transporter.sendMail(applicantMailOptions);
    } catch (error) {
        return new ErrorResponse('Error: formData is undefined');
    }
};