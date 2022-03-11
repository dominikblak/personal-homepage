import dominikBlakProfile from "./profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled";
import { email } from "../email";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={dominikBlakProfile} alt="Dominik Blak" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Dominik Blak</Name>
      <Summary>
        Hi! 👋 I'm a beginner Frontend Developer 👨‍💻 in love with JavaScript and React, currently looking for new job
        opportunities.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
