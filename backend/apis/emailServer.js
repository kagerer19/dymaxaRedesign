const express = require('express');
const { sendEmail } = require('sendEmail');
const cors = require('cors');
const multer = require('multer');
const logger = require("./loggerService");
const upload = multer();
const app = express();


app.use(cors());
app.use(express.json());
app.use(upload.array('files'));

app.post('/api/send-email', async (req, res) => {
    console.log('Received request body:', req.body);

    try {
        const formData = req.body;
        const files = req.files || [];

        if (!formData) {
            // !TODO Implement Winston for logging errors
            console.error('formData is undefined');
            res.status(400).json({ success: false, message: 'Bad request: formData is undefined' });
            return;
        }

        await sendEmail({ formData, files });
        logger({
            messageString: 'Email sent successfully',
            additionalInfo: {
                request: {
                    body: req.body,
                    files: req.files,
                },
            },
            type: 'info',
        });
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (err) {
        // !TODO Implement Winston for logging errors
       logger({
            messageString: 'Error sending email',
            additionalInfo: {
                error: err,
                request: {
                    body: req.body,
                    files: req.files,
                },
            },
            type: 'error',
        });
        res.status(500).json({ success: false, message: 'Error sending email' });
    }
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
