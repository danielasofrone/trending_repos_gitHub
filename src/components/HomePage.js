import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./homePage.styled";
import star from "../assets/star.svg";

const HomePage = () => {
  const [repos, setRepos] = useState([]);
  const [starText, setStarText] = useState("Star");

  useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(
        "https://api.github.com/search/repositories?q=created"
      );
      setRepos(response.data.items);
    };
    fetchRepo();
  }, []);

  const toggleStar = () => {
    setStarText(starText === "Star" ? "Unstar" : "Star");
  };

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.ContentContainer>
          <S.TitleContainer>Most popular GitHub repos</S.TitleContainer>
          <ul>
            {repos.map((repo) => (
              <S.RepoContainer key={repo.id}>
                <S.RepoName>
                  <a href={repo.html_url}>{repo.name}</a>
                </S.RepoName>
                <S.DescriptionContainer>
                  <S.RepoDescription>{repo.description}</S.RepoDescription>
                  <S.Button onClick={toggleStar}>
                    <S.Icon src={star}></S.Icon>
                    <S.ButtonText>{starText}</S.ButtonText>
                  </S.Button>
                </S.DescriptionContainer>
              </S.RepoContainer>
            ))}
          </ul>
        </S.ContentContainer>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default HomePage;
