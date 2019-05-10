import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import articleApi from '../../utils/articleApi';

const Article = styled.li`
  background:${props =>
    props.default ? 'white' : '#FF9090'};
  p {
    color: white;
  }
`;

export default ({ match }) => {
  const [article, setArticle] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    articleApi.get(id).then(data => setArticle(data));
  }, []);

  return (
    <ul>
      <Article>{parse(`${article.title}${article.content}`)}</Article>
    </ul>
  );
};