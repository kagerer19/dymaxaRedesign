import React, {useState} from 'react';
import DymaxaHeader from "../components/DymaxaHeader.jsx";
import DymaxaFooter from "../components/DymaxaFooter.jsx";

export function JobDescriptionPage() {

    // React state hooks for form fields and errors
    const [companyName, setCompanyName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState([]);

    // React state hook for success message
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation logic
        const validationErrors = [];
        if (!companyName) validationErrors.push('Company Name is required');
        if (!phone) validationErrors.push('Phone number is required');
        if (phone && !/^\d+$/.test(phone)) validationErrors.push('Phone number should contain only digits');

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Submit data to the server (you may need to adjust this part based on your backend logic)
        try {
            const response = await fetch('API_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    companyName,
                    contactPerson,
                    phone,
                    address,
                }),
            });

            const result = await response.json();

            if (result === 'Data Inserted') {
                // Display success message
                setSuccessMessage('Client created successfully');

                // Redirect to the dashboard upon successful client creation
                history.push('/dashboard');
            } else {
                // Display server error message
            }
        } catch (error) {
            // Handle fetch error
            console.error('Error:', error);
        }
    };

    return (
        <>
            <DymaxaHeader/>
            <form action="#" method="post">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-md mt-20 mb-20"
                     style={{backgroundColor: '#F8F7F1'}}>
                    <div className="space-y-2 text-center p-4">
                        <h1 className="text-3xl font-bold">Client Registration</h1>
                        <p className="text-gray-500 dark:text-gray-400"></p>
                    </div>
                    <div className="space-y-4 p-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="company-name">
                                Company Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background"
                                id="company-name"
                                name="company-name"
                                placeholder="Your Company Name"
                                required=""
                                value={companyName}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="contact-person">
                                Contact Person
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background"
                                id="contact-person"
                                name="contact-person"
                                placeholder="John Doe"
                                required=""
                                value={contactPerson}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background"
                                id="phone"
                                name="phone"
                                placeholder="(123) 456-7890"
                                required=""
                                value={phone}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="address">
                                Address
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background"
                                id="address"
                                name="address"
                                placeholder="123 Main St, City, State, ZIP"
                                required=""
                                value={address}
                            />
                        </div>
                        <button
                            className="text-white bg-[#1A202C] inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                            type="submit"
                        >
                            Create Client
                        </button>
                    </div>
                </div>
            </form>
            <DymaxaFooter />
        </>
    );
}

export default JobDescriptionPage;
