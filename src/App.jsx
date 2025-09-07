import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import Page2 from "./Page2";
import { ReactLenis, useLenis } from 'lenis/react'


function App() {

  const lenis = useLenis((lenis)=>{

  })

  return (
    <>
    <ReactLenis root />
      <Nav />
      <Hero />
      <Page2 />
    </>
  );
}

export default App;
