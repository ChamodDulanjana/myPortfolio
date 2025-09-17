import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailTemplateProps = {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
};

const EmailTemplate = ({ senderName, senderEmail, subject, message }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>📩 New contact form message from {senderName}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans text-black">
          <Container className="mx-auto my-10 w-full max-w-[600px]">
            {/* Card */}
            <Section className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
              <Heading className="text-xl font-semibold text-gray-800 mb-4">
                ✨ New Contact Form Submission
              </Heading>

              <Text className="text-gray-600 text-sm mb-2">
                You received a new message from your portfolio contact form.
              </Text>

              <Hr className="my-6 border-gray-300" />

              {/* Sender Details */}
              <Section className="mb-6">
                <Text className="text-gray-800 font-medium">
                  👤 From: <span className="text-gray-600">{senderName}</span>
                </Text>
                <Text className="text-gray-800 font-medium">
                  📧 Email:{" "}
                  <a
                    href={`mailto:${senderEmail}`}
                    className="text-blue-600 underline"
                  >
                    {senderEmail}
                  </a>
                </Text>
                <Text className="text-gray-800 font-medium">
                  📝 Subject:{" "}
                  <span className="text-gray-600">{subject || "No subject"}</span>
                </Text>
              </Section>

              {/* Message */}
              <Section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <Text className="text-gray-700 whitespace-pre-line">{message}</Text>
              </Section>

              <Hr className="my-6 border-gray-300" />

              {/* Footer */}
              <Text className="text-xs text-gray-500">
                This message was sent from your portfolio website contact form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailTemplate