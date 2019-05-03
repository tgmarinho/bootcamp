import React from "react";

import { Container, Repository } from "./styles";

const CompareList = () => (
  <Container>
    <Repository>
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/69631?v=4"
          alt="Facebook"
        />
        <strong>react</strong>
        <small>facebook</small>
      </header>

      <ul>
        <li>
          95,019 <small>stars</small>
        </li>
        <li>
          95,019 <small>forks</small>
        </li>
        <li>
          95,019 <small>issues</small>
        </li>
        <li>
          3 days ago <small>last commit</small>
        </li>
      </ul>
    </Repository>
  </Container>
);

export default CompareList;
