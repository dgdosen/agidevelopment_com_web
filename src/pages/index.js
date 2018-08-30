/* global tw */
import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion';

import Layout from '../components/layout'

const Heading = styled('h1')`
  ${tw('my-0 text-xl leading-tight')};
  `;

const IndexPage = () => (
  <Layout>
    <Heading>Cloud-based Progressive Application Development</Heading>
    <Link to="/page-2/">test link to other page...</Link>
  </Layout>
)

export default IndexPage
