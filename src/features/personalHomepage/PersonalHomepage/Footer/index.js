import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Addres, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk !</LetsTalk>
    <Addres>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        I’m always open to new projects whenever I have the time😉. If you need to create a&nbsp;website, need some help
        to&nbsp;make your ideas come to life, feel free to contact me 🤙
      </Paragraph>
      <SocialIcons />
    </Addres>
  </Wrapper>
);
