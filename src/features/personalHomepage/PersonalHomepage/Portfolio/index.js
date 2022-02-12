import { useEffect } from "react";
import { Content } from "./Content";
import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelecor } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomePageSlice";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelecor(selectRepositoriesStatus);
  const repositories = useSelecor(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      <Content status={repositoriesStatus} repositories={repositories} />
    </Section>
  );
};
