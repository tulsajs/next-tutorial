import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { API_URL } from '../shared/constants';

export default function Fact({ data }) {
  return (
    <ul>
      {data.map(fact => (
        <Link key={fact._id} href={`fact/${fact._id}`}>
          <li>{fact.text}</li>
        </Link>
      ))}
    </ul>
  );
}

Fact.getInitialProps = async function(props) {
  let data = await fetch(`${API_URL}/facts/random?animal_type=cat&amount=10`);
  data = await data.json();
  console.log(data);
  return { data };
};
