/* eslint-disable import/prefer-default-export */
/* eslint no-unused-vars: "off" */
import React, { useState } from "react";
import {
  MenuItem,
} from "react-pro-sidebar";

export const LeftPrime = ({match}) => {
  return (
    <>
      <MenuItem active>states</MenuItem>
    </>
  )
}

export const LeftTrend = ({match}) => {
  return (
    <>
      <MenuItem active>OVERVIEW</MenuItem>
      <MenuItem>SOCIAL</MenuItem>
      <MenuItem>E-COMMERCE</MenuItem>
      <MenuItem>GOOGLE ANALYTICS</MenuItem>
      <MenuItem>TREND-RESPONSE</MenuItem>
    </>
  )
}

export const LeftSocial = ({match}) => {
  return (
    <>
      <MenuItem>SENTIMENT ANALYSIS</MenuItem>
      <MenuItem>NEEDS PATTERNS</MenuItem>
    </>
  )
}

export const LeftOnline = ({match}) => {
  return (
    <>
      <MenuItem>OVERVIEW</MenuItem>
      <MenuItem>PRODUCT &amp; PRICE</MenuItem>
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