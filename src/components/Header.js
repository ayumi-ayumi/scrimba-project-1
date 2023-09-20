import React from 'react';
import smile from "/Users/Ayumi/Desktop/SelfStudy/React/scrimba-project-1/src/images/smile.png"

export default function Header () {
  return (
    <>
      <img src={smile} alt="smile emoji" className="nav-logo"/>
      <h1 className="nav-title">Ayumi</h1>
      <h2 className="nav-text">born in Tokyo, based in Berlin</h2>
    </>
  )
}
