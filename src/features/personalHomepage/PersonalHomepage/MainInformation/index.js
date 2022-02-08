import dominikBlakProfile from "./profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled";
import { email } from "../email";

export const MainInfromation = () => (
  <Wrapper>
    <Avatar src={dominikBlakProfile} />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Dominik Blak</Name>
      <Summary>
        I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
