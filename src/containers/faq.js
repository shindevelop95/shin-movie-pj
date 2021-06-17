import React from 'react';
import { Accordion,InputForm } from '../components';
import faqData from '../fixtures/faq.json'

export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqData.map((item) => (
                <Accordion.Item key = {item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}

            <InputForm>
                <InputForm.Text>
                    Want to be kept updated for future update? Enter your email to create or restart your membership.
                </InputForm.Text>
                <InputForm.Input placeholder="Email Address"/>
                <InputForm.Button>Subscribe</InputForm.Button>
            </InputForm>
        </Accordion>
    )
}