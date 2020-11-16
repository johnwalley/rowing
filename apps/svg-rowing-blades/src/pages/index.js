import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Blade, { clubs, shortNames } from "react-rowing-blades";

const allShortNames = {
  ...shortNames.cambridge,
  ...shortNames.oxford,
  ...shortNames.uk,
  ...shortNames.international
};

const allClubs = [
  ...clubs.cambridge,
  ...clubs.oxford,
  ...clubs.uk,
  ...clubs.international
].sort((a, b) => {
  const nameA = a.toLowerCase();
  const nameB = b.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

const BladesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BladeContainer = styled.div`
  min-width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.p`
  font-size: 12px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
`;

const IndexPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredClubs = allClubs.filter(club =>
    allShortNames[club].toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Layout>
      <SEO title="Home" />
      <SearchContainer>
        <input
          type="text"
          className="input"
          placeholder="Search..."
          value={searchValue}
          onChange={event => {
            setSearchValue(event.target.value);
          }}
        />
      </SearchContainer>

      <BladesContainer>
        {filteredClubs.map(club => (
          <Link key={club} to={`/${club}`}>
            <BladeContainer>
              <Blade club={club} size={100} />
              <Label>{allShortNames[club]}</Label>
            </BladeContainer>
          </Link>
        ))}
      </BladesContainer>
    </Layout>
  );
};

export default IndexPage;
