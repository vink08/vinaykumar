import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function App() {
  const init = useCallback(async (main) => {
    await loadFull(main);

    console.log("loaded");
  }, []);

  return (
    <Particles

      id="tsparticles"
      init={init}
      options={{

        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,

              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#0D324D",
          },
          links: {
            color: "#0D324D",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },

          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

// Path: particle\src\pages\home\index.js
// Compare this snippet from particle\src\App.js:
//



// const App = () => {
//   const options = {
//     background: {
//       color: {
//         value: "#000",
//       },
//     },
//     fpsLimit: 60,
//     interactivity: {
//       detectsOn: "canvas",
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: true,
//           mode: "repulse",
//         },
//         resize: true,
//       },
//       modes: {
//         bubble: {
//           distance: 400,
//           duration: 2,
//           opacity: 0.8,
//           size: 40,
//           speed: 3,
//         },
//         push: {
//           quantity: 4,
//         },
//         repulse: {
//           distance: 200,

//           duration: 0.4,
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: "#fff",
//       },
//       links: {
//         color: "#fff",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       collisions: {
//         enable: true,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outMode: "out",
//         random: false,
//         speed: 2,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           value_area: 800,
//         },
//         value: 80,
//       },

//       opacity: {
//         value: 0.5,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         random: true,
//         value: 5,
//       },
//     },
//     detectRetina: true,
//   };

//   const particlesInit = useCallback((main) => {
//     loadFull(main).then((tsparticles) => {
//       console.log("tsparticles", tsparticles);
//     });
//   }, []);

  

//   return (
//     <div className="App">
//       <Particles options={options} init={particlesInit} />
//     </div>
//   );
// };

// export default App