import React from "react";
import styled from "@emotion/styled";
import LogoUrl from "../assets/images/logo.png";


const LoadingOverlay = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 78px);
  background-color: #FFF;
  --loader-color: 222, 226, 255;

  >img {
    position: absolute;
    width: 45px;
    height: 45px;
    top:    0; right: 0;
    bottom: 0; left:  0;
    margin: auto;
  }

  .loader {
    position: absolute;
    top:    0; right: 0;
    bottom: 0; left:  0;
    margin: auto auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    text-indent: -9999em;
    animation: load5 1.1s infinite ease;
    transform: translateZ(0);
  }
  @keyframes load5 {
    0%,
    100% {
      box-shadow: 
        0em -2.6em 0em 0em rgba(var(--loader-color), 1), 
        1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2), 
        2.5em 0em 0 0em rgba(var(--loader-color), 0.2), 
        1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2), 
        0em 2.5em 0 0em rgba(var(--loader-color), 0.2), 
        -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2), 
        -2.6em 0em 0 0em rgba(var(--loader-color), 0.5), 
        -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.7);
    }
    12.5% {
      box-shadow:
        0em -2.6em 0em 0em rgba(var(--loader-color), 0.7),
        1.8em -1.8em 0 0em rgba(var(--loader-color), 1),
        2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
        1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
        0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
        -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.5);
    }
    25% {
      box-shadow: 
        0em -2.6em 0em 0em rgba(var(--loader-color), 0.5),
        1.8em -1.8em 0 0em rgba(var(--loader-color), 0.7),
        2.5em 0em 0 0em rgba(var(--loader-color), 1),
        1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
        0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
        -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
    }
    37.5% {
      box-shadow:
        0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
        1.8em -1.8em 0 0em rgba(var(--loader-color), 0.5),
        2.5em 0em 0 0em rgba(var(--loader-color), 0.7),
        1.75em 1.75em 0 0em rgba(var(--loader-color), 1),
        0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
        -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
    }
    50% {
      box-shadow:
        0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
        1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
        2.5em 0em 0 0em rgba(var(--loader-color), 0.5),
        1.75em 1.75em 0 0em rgba(var(--loader-color), 0.7),
        0em 2.5em 0 0em rgba(var(--loader-color), 1),
        -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
        -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
    }
    62.5% {
      box-shadow:
        0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
        1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
        2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
        1.75em 1.75em 0 0em rgba(var(--loader-color), 0.5),
        0em 2.5em 0 0em rgba(var(--loader-color), 0.7),
        -1.8em 1.8em 0 0em rgba(var(--loader-color), 1),
        -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
    }
    75% {
      box-shadow:
        0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
        1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
        2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
        1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
        0em 2.5em 0 0em rgba(var(--loader-color), 0.5),
        -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.7),
        -2.6em 0em 0 0em rgba(var(--loader-color), 1),
        -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
    }
    87.5% {
      box-shadow:
        0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
        1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
        2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
        1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
        0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
        -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.5),
        -2.6em 0em 0 0em rgba(var(--loader-color), 0.7),
        -1.8em -1.8em 0 0em rgba(var(--loader-color), 1);
    }
  }
`;

const LoadingSpinner = React.memo(() => {
  return (
    <LoadingOverlay>
      <div className="loader" />
      <img alt="Loading..." src={LogoUrl} />
    </LoadingOverlay>
  );
});

export {
  LoadingSpinner,
};