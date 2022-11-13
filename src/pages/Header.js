import "./css/Header.css";
import React from "react";
// import ReactTypingEffect from 'react-typing-effect';
import NavBar from "../components/NavBar";

export default function Header(props) {
  return (
    <>
      <div id="intro">
      <NavBar />
      {/* <ReactTypingEffect
        text={["Hello.", "I'm Jule Berry, a software engineer."]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        eraseDelay={"500ms"}
        typingDelay={"1000ms"}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    // style={i%2 === 0 ? { color: 'cyan'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      /> */}
      <div id="mainText">
        <h1>Jule Berry</h1>
        <h3>Software Engineer</h3>
        <p>
          <a href="#aboutSection">Explore</a>
        </p>
        </div>
      </div>
    </>
  );
}
