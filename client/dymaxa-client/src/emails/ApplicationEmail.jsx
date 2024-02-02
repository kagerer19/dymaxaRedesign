import * as React from "react";
import { Html } from '@react-email/html';
import {
    Body,
    Container,
    Head,
    Heading,
    Text,
    Tailwind,
    Button,
} from "@react-email/components";

export function ApplicationEmail() {
    return (
        <Html>
            <Head>
                <Tailwind>
                    <Body className="bg-white my-12 mx-auto font-sans">
                        <Text>
                            <Container className="p-8 rounded-lg mx-auto shadow-lg">
                                <Heading className="text-xl pt-4 text-center">🍀Application Received🍀
                                    <Text className="text-lg font-medium text-gray">
                                        Application from Alexander Kagerer for JOB-ID: #567687754433
                                    </Text>
                                    <Button className="bg-[#3C3F43] text-white font-bold p-5 rounded"
                                            href="https://dymaxa.co.za/jobs/">
                                        Other jobs that might also interest you!
                                    </Button>
                                </Heading>
                            </Container>
                        </Text>
                    </Body>
                </Tailwind>
            </Head>
        </Html>
    )
}