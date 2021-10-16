/* eslint-disable import/prefer-default-export */
/* eslint no-unused-vars: "off" */
import React from "react";
import {
  MenuItem,
} from "react-pro-sidebar";
import { NavLink } from 'react-router-dom';

export const LeftPrime = ({match}) => {
  return (
    <>
      <MenuItem><NavLink to="/app/prime/prime" activeClassName="active">STATES</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/prime/channels" activeClassName="active">CHANNELS</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/prime/product" activeClassName="active">CHANNELS</NavLink></MenuItem>
    </>
  )
}

export const LeftTrend = ({match}) => {
  return (
    <>
      <MenuItem><NavLink to="/app/trend/overview" activeClassName="active">OVERVIEW</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/trend/social" activeClassName="active">SOCIAL</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/trend/ecommerce" activeClassName="active">E-COMMERCE</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/trend/googleAnalytics" activeClassName="active">GOOGLE ANALYTICS</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/trend/response" activeClassName="active">TREND-RESPONSE</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/gogo/start" activeClassName="active">INDUSTRY</NavLink></MenuItem>
    </>
  )
}

export const LeftSocial = ({match}) => {
  return (
    <>
      <MenuItem><NavLink to="/app/socialListening/sentimentanalysis" activeClassName="active">SENTIMENT ANALYSIS</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/socialListening/needspatterns" activeClassName="active">NEEDS PATTERNS</NavLink></MenuItem>
    </>
  )
}

export const LeftOnline = ({match}) => {
  return (
    <>
      <MenuItem><NavLink to="/app/onlineRetailer/onboard" activeClassName="active">ONBOARD</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/onlineRetailer/overview" activeClassName="active">OVERVIEW</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/onlineRetailer/productprice" activeClassName="active">PRODUCT &amp; PRICE</NavLink></MenuItem>
    </>
  )
}

export const LeftSimulator = ({match}) => {
  return (
    <>
      <MenuItem>Simulator 메뉴1</MenuItem>
    </>
  )
}

export const LeftAbout = ({match}) => {
  return (
    <>
      <MenuItem>about 메뉴1</MenuItem>
    </>
  )
}


export const LeftSearch = ({match}) => {
  return (
    <>
      <MenuItem>Search[모바일]</MenuItem>
    </>
  )
}

export const LeftBasic = ({match}) => {
  return (
    <>
      <MenuItem><NavLink to="/app/basic/product" activeClassName="active">PRODUCT</NavLink></MenuItem>
      <MenuItem><NavLink to="/app/basic/graphinfo" activeClassName="active">GRAPhINFO</NavLink></MenuItem>
    </>
  )
}