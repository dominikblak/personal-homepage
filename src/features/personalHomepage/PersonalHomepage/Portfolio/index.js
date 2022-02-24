import { useEffect } from "react";
import { Content } from "./Content";
import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

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
