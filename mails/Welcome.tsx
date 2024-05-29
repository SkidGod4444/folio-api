import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  username: string;
  subUrl: string;
}

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : "";

export const WelcomeEmail = ({ username, subUrl }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>The Folio Welcome!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hey {username},</Text>
        <Text style={paragraph}>
          Thank you for signing in to my portfolio! I&apos;m thrilled to have you
          here and excited to share my journey, projects, and passions with you.
          On my portfolio, you’ll find a showcase of my latest work.<br /> I hope these
          gives you a clear sense of my skills and the kind of work I love to do.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={subUrl}>
            Subscribe to my newsletter
          </Button>
        </Section>
        <Text style={paragraph}>
          Best Regards,
          <br />
          Saidev Dhal (SkidGod)
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
        Thank you again for visiting my portfolio. I’m looking forward to connecting with you!
        </Text>
      </Container>
    </Body>
  </Html>
);


export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
