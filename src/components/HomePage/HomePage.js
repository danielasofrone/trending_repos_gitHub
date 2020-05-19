import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./homePage.styled";
import Repo from "../Repo/Repo";

const HomePage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(
        "https://api.github.com/search/repositories?q=created"
      );
      setRepos(response.data.items);
      setLoading(false);
    };
    fetchRepo();
  }, []);

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.ContentContainer>
          <S.TitleContainer>Most popular GitHub repos</S.TitleContainer>
          {loading ? (
            <S.LoadingContainer>
              <S.Loading>
                <h2>Loading...</h2>
              </S.Loading>
            </S.LoadingContainer>
          ) : (
            <ul>
              {repos.map((repo, i) => (
                <Repo
                  key={i}
                  html_url={repo.html_url}
                  name={repo.name}
                  description={repo.description}
                />
              ))}
            </ul>
          )}
        </S.ContentContainer>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default HomePage;
