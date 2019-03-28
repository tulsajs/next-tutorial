import React from 'react';
import fetch from 'isomorphic-unfetch';
import { API_URL } from '../shared/constants';

export default function Fact(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

Fact.getInitialProps = async function(props) {
  console.log(props.query);
  let data = await fetch(`${API_URL}/facts/${props.query.id}`);
  data = await data.json();

  return data;
};
