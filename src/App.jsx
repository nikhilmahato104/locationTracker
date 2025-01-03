// // import React, { useState } from "react";
// // import "./App.css";

// // function App() {
// //   const [latitudeInput, setLatitudeInput] = useState("");
// //   const [longitudeInput, setLongitudeInput] = useState("");
// //   const [googleMapLink, setGoogleMapLink] = useState("");
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const [password, setPassword] = useState("");
// //   const correctPassword = "akash@123";
// //   const [loading, setLoading] = useState(false);
// //   const [showCoordinatesInput, setShowCoordinatesInput] = useState(false);
// //   const [showLocationButton, setShowLocationButton] = useState(true);
// //   const [userLocation, setUserLocation] = useState(null);

// //   const getLocation = () => {
// //     if (loading) return; // Prevent multiple loading states from being triggered
// //     setLoading(true); // Set loading to true when button is clicked

// //     setTimeout(() => {
// //       if ("geolocation" in navigator) {
// //         navigator.geolocation.getCurrentPosition(
// //           (position) => {
// //             const { latitude, longitude } = position.coords;
// //             setUserLocation({ latitude, longitude });
// //             setLoading(false); // Stop loading after 1 second
// //             setShowLocationButton(false);
// //           },
// //           (error) => {
// //             let errorMessage = "";
// //             switch (error.code) {
// //               case error.PERMISSION_DENIED:
// //                 errorMessage =
// //                   "Permission denied. Please allow location access.";
// //                 break;
// //               case error.POSITION_UNAVAILABLE:
// //                 errorMessage = "Location information is unavailable.";
// //                 break;
// //               case error.TIMEOUT:
// //                 errorMessage = "The request to get your location timed out.";
// //                 break;
// //               default:
// //                 errorMessage = "An unknown error occurred.";
// //             }
// //             alert(errorMessage);
// //             setLoading(false); // Stop loading if there is an error
// //           }
// //         );
// //       } else {
// //         alert("Geolocation is not supported by your browser.");
// //         setLoading(false); // Stop loading if geolocation is not supported
// //       }
// //     }, 1000); // Fake delay of 1 second
// //   };

// //   const generateGoogleMapLink = () => {
// //     if (loading) return; // Don't trigger this if loading is already true
// //     const lat = parseFloat(latitudeInput);
// //     const lng = parseFloat(longitudeInput);

// //     if (!isNaN(lat) && !isNaN(lng)) {
// //       const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
// //       setGoogleMapLink(googleMapsUrl);
// //     } else {
// //       alert("Please enter valid latitude and longitude.");
// //     }
// //   };

// //   const handlePasswordSubmit = () => {
// //     if (password === correctPassword) {
// //       setLoading(true);
// //       setTimeout(() => {
// //         setLoading(false);
// //         setShowCoordinatesInput(true);
// //         setPasswordVisible(false);
// //       }, 1000);
// //     } else {
// //       alert("Incorrect password. Try again.");
// //     }
// //   };

// //   const handleDoubleClick = () => {
// //     setPasswordVisible(true);
// //   };

// //   const handleCopy = (e) => {
// //     const copiedText = window.getSelection().toString().trim();
// //     if (copiedText === "Welcome!") {
// //       setPasswordVisible(true);
// //     }
// //   };

// //   return (
// //     <div
// //       className={`App ${showCoordinatesInput ? "coordinatesVisible" : ""}`}
// //       onDoubleClick={handleDoubleClick}
// //       onCopy={handleCopy}
// //     >
// //       {/* If password form is visible, hide other content */}
// //       {passwordVisible ? (
// //         <div className="passwordPrompt">
// //           <div className="passwordForm">
// //             <label htmlFor="password">Enter Password:</label>
// //             <input
// //               type="password"
// //               id="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Password"
// //             />
// //             <button onClick={handlePasswordSubmit}>Submit</button>
// //             {loading && (
// //               <div className="loading">
// //                 <div className="circle-loader"></div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       ) : (
// //         <>
// //           {/* Latitude and Longitude Input Form */}
// //           {showCoordinatesInput && !googleMapLink && (
// //             <div className="coordinatesInputForm">
// //               <label htmlFor="latitude">Latitude:</label>
// //               <input
// //                 type="text"
// //                 id="latitude"
// //                 value={latitudeInput}
// //                 onChange={(e) => setLatitudeInput(e.target.value)}
// //                 placeholder="Enter Latitude"
// //               />
// //               <label htmlFor="longitude">Longitude:</label>
// //               <input
// //                 type="text"
// //                 id="longitude"
// //                 value={longitudeInput}
// //                 onChange={(e) => setLongitudeInput(e.target.value)}
// //                 placeholder="Enter Longitude"
// //               />
// //               <button onClick={generateGoogleMapLink}>Track Location</button>
// //             </div>
// //           )}

// //           {/* Other Content */}
// //           {!showCoordinatesInput && (
// //             <>
// //               {showLocationButton && (
// //                 <div className="welcomeMessage">
// //                   <h1>Welcome!</h1>
// //                   <button onClick={getLocation} disabled={loading}>
// //                     Magic Number
// //                   </button>
// //                 </div>
// //               )}

// //               {loading && (
// //                 <div className="loading">
// //                   <div className="circle-loader"></div>
// //                 </div>
// //               )}

// //               {userLocation && (
// //                 <div className="locationInfo">
// //                   {/* <p>
// //                     <strong>Value of A : </strong> {userLocation.latitude}
// //                   </p>
// //                   <p>
// //                     <strong>Value of B : </strong> {userLocation.longitude}
// //                   </p> */}
// //                   <p>
// //           <strong>Value of A : </strong>
// //           {userLocation.latitude}{" "}
// //           <span
// //             role="button"
// //             aria-label="Copy Latitude"
// //             className="copy-emoji"
// //             onClick={() => handleCopy(userLocation.latitude)}
// //           >
// //             📝
// //           </span>
// //         </p>
// //         <p>
// //           <strong>Value of B : </strong>
// //           {userLocation.longitude}{" "}
// //           <span
// //             role="button"
// //             aria-label="Copy Longitude"
// //             className="copy-emoji"
// //             onClick={() => handleCopy(userLocation.longitude)}
// //           >
// //             📝
// //           </span>
// //         </p>
// //                   <p
// //                     style={{
// //                       color: "#007bcff",
// //                       fontSize: "16px",
// //                       fontWeight: "500",
// //                       marginTop: "10px",
// //                     }}
// //                   >
// //                     Write value of <strong>A </strong> and <strong>B</strong> in the form below
// //                   </p>
// //                   <p
// //                     style={{
// //                       color: "#980098",
// //                       fontSize: "18px",
// //                       fontWeight: "600",
// //                       marginTop: "5px",
// //                     }}
// //                   >
// //                     Thank you dear! ❤️
// //                   </p>
// //                   <div>
// //                     <div
// //                       className="googleSheetIframe"
// //                       style={{
// //                         width: "350px",
// //                         height: "500px",
// //                         overflow: "hidden",
// //                         border: "1px solid #ddd",
// //                       }}
// //                     >
// //                       <iframe
// //                         src="https://docs.google.com/forms/d/e/1FAIpQLScQblK59dDzJIb9urEPIGes27va2WXr3llTrEzOtcfOOjDCmA/viewform?usp=sharing"
// //                         width="100%"
// //                         height="100%"
// //                         frameBorder="0"
// //                         title="Google Sheets"
// //                       ></iframe>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </>
// //           )}

// //           {/* Google Maps Link */}
// //           {googleMapLink && (
// //             <div className="googleMapLink">
// //               <a href={googleMapLink} target="_blank" rel="noopener noreferrer">
// //                 Click here to view the location on Google Maps
// //               </a>
// //             </div>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;

// // // //Advanced codding
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [latitudeInput, setLatitudeInput] = useState("");
//   const [longitudeInput, setLongitudeInput] = useState("");
//   const [googleMapLink, setGoogleMapLink] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [password, setPassword] = useState("");
//   const correctPassword = "akash@123";
//   const [loading, setLoading] = useState(false);
//   const [showCoordinatesInput, setShowCoordinatesInput] = useState(false);
//   const [showLocationButton, setShowLocationButton] = useState(true);
//   const [userLocation, setUserLocation] = useState(null);

//   const getLocation = () => {
//     if (loading) return; // Prevent multiple loading states from being triggered
//     setLoading(true); // Set loading to true when button is clicked

//     setTimeout(() => {
//       if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setUserLocation({ latitude, longitude });
//             setLoading(false); // Stop loading after 1 second
//             setShowLocationButton(false);
//           },
//           (error) => {
//             let errorMessage = "";
//             switch (error.code) {
//               case error.PERMISSION_DENIED:
//                 errorMessage =
//                   "Permission denied. Please allow location access.";
//                 break;
//               case error.POSITION_UNAVAILABLE:
//                 errorMessage = "Location information is unavailable.";
//                 break;
//               case error.TIMEOUT:
//                 errorMessage = "The request to get your location timed out.";
//                 break;
//               default:
//                 errorMessage = "An unknown error occurred.";
//             }
//             alert(errorMessage);
//             setLoading(false); // Stop loading if there is an error
//           }
//         );
//       } else {
//         alert("Geolocation is not supported by your browser.");
//         setLoading(false); // Stop loading if geolocation is not supported
//       }
//     }, 1000); // Fake delay of 1 second
//   };

//   const generateGoogleMapLink = () => {
//     if (loading) return; // Don't trigger this if loading is already true
//     const lat = parseFloat(latitudeInput);
//     const lng = parseFloat(longitudeInput);

//     if (!isNaN(lat) && !isNaN(lng)) {
//       const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
//       setGoogleMapLink(googleMapsUrl);
//     } else {
//       alert("Please enter valid latitude and longitude.");
//     }
//   };

//   const handlePasswordSubmit = () => {
//     if (password === correctPassword) {
//       setLoading(true);
//       setTimeout(() => {
//         setLoading(false);
//         setShowCoordinatesInput(true);
//         setPasswordVisible(false);
//       }, 1000);
//     } else {
//       alert("Incorrect password. Try again.");
//     }
//   };

//   const handleDoubleClick = () => {
//     setPasswordVisible(true);
//   };

//   const handleCopy = (value) => {
//     navigator.clipboard.writeText(value).then(() => {
//       alert(`${value} copied to clipboard!`);
//     });
//   };

//   return (
//     <div
//       className={`App ${showCoordinatesInput ? "coordinatesVisible" : ""}`}
//       onDoubleClick={handleDoubleClick}
//     >
//       {/* If password form is visible, hide other content */}
//       {passwordVisible ? (
//         <div className="passwordPrompt">
//           <div className="passwordForm">
//             <label htmlFor="password">Enter Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//             />
//             <button onClick={handlePasswordSubmit}>Submit</button>
//             {loading && (
//               <div className="loading">
//                 <div className="circle-loader"></div>
//               </div>
//             )}
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* Latitude and Longitude Input Form */}
//           {showCoordinatesInput && !googleMapLink && (
//             <div className="coordinatesInputForm">
//               <label htmlFor="latitude">Latitude:</label>
//               <input
//                 type="text"
//                 id="latitude"
//                 value={latitudeInput}
//                 onChange={(e) => setLatitudeInput(e.target.value)}
//                 placeholder="Enter Latitude"
//               />
//               <label htmlFor="longitude">Longitude:</label>
//               <input
//                 type="text"
//                 id="longitude"
//                 value={longitudeInput}
//                 onChange={(e) => setLongitudeInput(e.target.value)}
//                 placeholder="Enter Longitude"
//               />
//               <button onClick={generateGoogleMapLink}>Track Location</button>
//             </div>
//           )}

//           {/* Other Content */}
//           {!showCoordinatesInput && (
//             <>
//               {showLocationButton && (
//                 <div className="welcomeMessage">
//                   <h1>Welcome!</h1>
//                   <button onClick={getLocation} disabled={loading}>
//                     Magic Number
//                   </button>
//                 </div>
//               )}

//               {loading && (
//                 <div className="loading">
//                   <div className="circle-loader"></div>
//                 </div>
//               )}

//               {userLocation && (
//                 <div className="locationInfo">
//                   <p>
//                     <strong>Value of A : </strong>
//                     {userLocation.latitude}{" "}
//                     <span
//                       role="button"
//                       aria-label="Copy Latitude"
//                       className="copy-emoji"
//                       onClick={() => handleCopy(userLocation.latitude)}
//                     >
//                       copy
//                     </span>
//                   </p>
//                   <p>
//                     <strong>Value of B : </strong>
//                     {userLocation.longitude}{" "}
//                     <span
//                       role="button"
//                       aria-label="Copy Longitude"
//                       className="copy-emoji"
//                       onClick={() => handleCopy(userLocation.longitude)}
//                     >
//                     copy
//                     </span>
//                   </p>
//                   <p
//                     style={{
//                       color: "#007bcff",
//                       fontSize: "16px",
//                       fontWeight: "500",
//                       marginTop: "10px",
//                     }}
//                   >
//                     Write value of <strong>A </strong> and <strong>B</strong> in the form below
//                   </p>
//                   <p
//                     style={{
//                       color: "#980098",
//                       fontSize: "18px",
//                       fontWeight: "600",
//                       marginTop: "5px",
//                     }}
//                   >
//                     Thank you dear! ❤️
//                   </p>
//                   <div>
//                     <div
//                       className="googleSheetIframe"
//                       style={{
//                         width: "350px",
//                         height: "500px",
//                         overflow: "hidden",
//                         border: "1px solid #ddd",
//                       }}
//                     >
//                       <iframe
//                         src="https://docs.google.com/forms/d/e/1FAIpQLScQblK59dDzJIb9urEPIGes27va2WXr3llTrEzOtcfOOjDCmA/viewform?usp=sharing"
//                         width="100%"
//                         height="100%"
//                         frameBorder="0"
//                         title="Google Sheets"
//                       ></iframe>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}

//           {/* Google Maps Link */}
//           {googleMapLink && (
//             <div className="googleMapLink">
//               <a href={googleMapLink} target="_blank" rel="noopener noreferrer">
//                 Click here to view the location on Google Maps
//               </a>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [latitudeInput, setLatitudeInput] = useState("");
//   const [longitudeInput, setLongitudeInput] = useState("");
//   const [googleMapLink, setGoogleMapLink] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [password, setPassword] = useState("");
//   const correctPassword = "akash@123";
//   const [loading, setLoading] = useState(false);
//   const [showCoordinatesInput, setShowCoordinatesInput] = useState(false);
//   const [showLocationButton, setShowLocationButton] = useState(true);
//   const [userLocation, setUserLocation] = useState(null);

//   const getLocation = () => {
//     if (loading) return; // Prevent multiple loading states from being triggered
//     setLoading(true); // Set loading to true when button is clicked

//     setTimeout(() => {
//       if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setUserLocation({ latitude, longitude });
//             setLoading(false); // Stop loading after 1 second
//             setShowLocationButton(false);
//           },
//           (error) => {
//             let errorMessage = "";
//             switch (error.code) {
//               case error.PERMISSION_DENIED:
//                 errorMessage =
//                   "Permission denied. Please allow location access.";
//                 break;
//               case error.POSITION_UNAVAILABLE:
//                 errorMessage = "Location information is unavailable.";
//                 break;
//               case error.TIMEOUT:
//                 errorMessage = "The request to get your location timed out.";
//                 break;
//               default:
//                 errorMessage = "An unknown error occurred.";
//             }
//             alert(errorMessage);
//             setLoading(false); // Stop loading if there is an error
//           }
//         );
//       } else {
//         alert("Geolocation is not supported by your browser.");
//         setLoading(false); // Stop loading if geolocation is not supported
//       }
//     }, 1000); // Fake delay of 1 second
//   };

//   const generateGoogleMapLink = () => {
//     if (loading) return; // Don't trigger this if loading is already true
//     const lat = parseFloat(latitudeInput);
//     const lng = parseFloat(longitudeInput);

//     if (!isNaN(lat) && !isNaN(lng)) {
//       const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
//       setGoogleMapLink(googleMapsUrl);
//     } else {
//       alert("Please enter valid latitude and longitude.");
//     }
//   };

//   const handlePasswordSubmit = () => {
//     if (password === correctPassword) {
//       setLoading(true);
//       setTimeout(() => {
//         setLoading(false);
//         setShowCoordinatesInput(true);
//         setPasswordVisible(false); // Hide password form after success
//       }, 1000);
//     } else {
//       alert("Incorrect password. Try again.");
//     }
//   };

//   const handleDoubleClick = () => {
//     if (!passwordVisible) {
//       setPasswordVisible(true); // Show password input form when double-clicking anywhere
//     }
//   };

//   const handleCopy = (e) => {
//     // Check if the user is copying the "Welcome!" text
//     if (e.target.innerText === "Welcome!") {
//       setPasswordVisible(true); // Show password form on copy
//     }
//   };

//   const handleTextSelect = () => {
//     // Add event listener for text selection to handle copy
//     document.addEventListener("copy", handleCopy);
//   };

//   const handleRemoveCopyListener = () => {
//     // Remove event listener for copy event
//     document.removeEventListener("copy", handleCopy);
//   };

//   const handleCopyText = (value) => {
//     navigator.clipboard.writeText(value).then(() => {
//       // alert(`${value} copied to clipboard!`);
//     });
//   };

//   return (
//     <div
//       className={`App ${showCoordinatesInput ? "coordinatesVisible" : ""}`}
//       onDoubleClick={handleDoubleClick} // Handle double-click on the whole document
//       onMouseUp={handleTextSelect} // Add event listener to detect text selection (for copying)
//     >
//       {/* If password form is visible, hide other content */}
//       {passwordVisible ? (
//         <div className="passwordPrompt">
//           <div className="passwordForm">
//             <label htmlFor="password">Enter Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//             />
//             <button onClick={handlePasswordSubmit}>Submit</button>
//             {loading && (
//               <div className="loading">
//                 <div className="circle-loader"></div>
//               </div>
//             )}
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* Latitude and Longitude Input Form */}
//           {showCoordinatesInput && !googleMapLink && (
//             <div className="coordinatesInputForm">
//               <label htmlFor="latitude">Latitude:</label>
//               <input
//                 type="text"
//                 id="latitude"
//                 value={latitudeInput}
//                 onChange={(e) => setLatitudeInput(e.target.value)}
//                 placeholder="Enter Latitude"
//               />
//               <label htmlFor="longitude">Longitude:</label>
//               <input
//                 type="text"
//                 id="longitude"
//                 value={longitudeInput}
//                 onChange={(e) => setLongitudeInput(e.target.value)}
//                 placeholder="Enter Longitude"
//               />
//               <button onClick={generateGoogleMapLink}>Track Location</button>
//             </div>
//           )}

//           {/* Other Content */}
//           {!showCoordinatesInput && (
//             <>
//               {showLocationButton && (
//                 <div className="welcomeMessage">
//                   <h1>Welcome!</h1>
//                   <button onClick={getLocation} disabled={loading}>
//                     Magic Number
//                   </button>
//                 </div>
//               )}

//               {loading && (
//                 <div className="loading">
//                   <div className="circle-loader"></div>
//                 </div>
//               )}

//               {userLocation && (
//                 <div className="locationInfo">
//                   <p>
//                     <strong>Value of A : </strong>
//                     {userLocation.latitude}{" "}
//                     <span
//                       role="button"
//                       aria-label="Copy Latitude"
//                       className="copy-emoji"
//                       onClick={() => handleCopyText(userLocation.latitude)}
//                     >
//                       copy
//                     </span>
//                   </p>
//                   <p>
//                     <strong>Value of B : </strong>
//                     {userLocation.longitude}{" "}
//                     <span
//                       role="button"
//                       aria-label="Copy Longitude"
//                       className="copy-emoji"
//                       onClick={() => handleCopyText(userLocation.longitude)}
//                     >
//                     copy
//                     </span>
//                   </p>
//                   <p
//                     style={{
//                       color: "#007bcff",
//                       fontSize: "16px",
//                       fontWeight: "500",
//                       marginTop: "10px",
//                     }}
//                   >
//                     Write value of <strong>A </strong> and <strong>B</strong> in the form below
//                   </p>
//                   <p
//                     style={{
//                       color: "#980098",
//                       fontSize: "18px",
//                       fontWeight: "600",
//                       marginTop: "5px",
//                     }}
//                   >
//                     Thank you dear! ❤️
//                   </p>
//                   <div>
//                     <div
//                       className="googleSheetIframe"
//                       style={{
//                         width: "350px",
//                         height: "500px",
//                         overflow: "hidden",
//                         border: "1px solid #ddd",
//                       }}
//                     >
//                       <iframe
//                         src="https://docs.google.com/forms/d/e/1FAIpQLScQblK59dDzJIb9urEPIGes27va2WXr3llTrEzOtcfOOjDCmA/viewform?usp=sharing"
//                         width="100%"
//                         height="100%"
//                         frameBorder="0"
//                         title="Google Sheets"
//                       ></iframe>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}

//           {/* Google Maps Link */}
//           {googleMapLink && (
//             <div className="googleMapLink">
//               <a href={googleMapLink} target="_blank" rel="noopener noreferrer">
//                 Click here to view the location on Google Maps
//               </a>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;






//production code
import React, { useState } from "react";
import "./App.css";

function App() {
  const [latitudeInput, setLatitudeInput] = useState("");
  const [longitudeInput, setLongitudeInput] = useState("");
  const [googleMapLink, setGoogleMapLink] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "akash@123";
  const [loading, setLoading] = useState(false);
  const [showCoordinatesInput, setShowCoordinatesInput] = useState(false);
  const [showLocationButton, setShowLocationButton] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [copied, setCopied] = useState({ latitude: false, longitude: false }); // Track which value is copied

  const getLocation = () => {
    if (loading) return; // Prevent multiple loading states from being triggered
    setLoading(true); // Set loading to true when button is clicked

    setTimeout(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
            setLoading(false); // Stop loading after 1 second
            setShowLocationButton(false);
          },
          (error) => {
            let errorMessage = "";
            switch (error.code) {
              case error.PERMISSION_DENIED:
                errorMessage =
                  "Permission denied. Please allow location access.";
                break;
              case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information is unavailable.";
                break;
              case error.TIMEOUT:
                errorMessage = "The request to get your location timed out.";
                break;
              default:
                errorMessage = "An unknown error occurred.";
            }
            alert(errorMessage);
            setLoading(false); // Stop loading if there is an error
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
        setLoading(false); // Stop loading if geolocation is not supported
      }
    }, 1000); // Fake delay of 1 second
  };

  const generateGoogleMapLink = () => {
    if (loading) return; // Don't trigger this if loading is already true
    const lat = parseFloat(latitudeInput);
    const lng = parseFloat(longitudeInput);

    if (!isNaN(lat) && !isNaN(lng)) {
      const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
      setGoogleMapLink(googleMapsUrl);
    } else {
      alert("Please enter valid latitude and longitude.");
    }
  };

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowCoordinatesInput(true);
        setPasswordVisible(false); // Hide password form after success
      }, 1000);
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  const handleDoubleClick = () => {
    if (!passwordVisible) {
      setPasswordVisible(true); // Show password input form when double-clicking anywhere
    }
  };

  const handleCopy = (e) => {
    // Check if the user is copying the "Welcome!" text
    if (e.target.innerText === "Welcome!") {
      setPasswordVisible(true); // Show password form on copy
    }
  };

  const handleTextSelect = () => {
    // Add event listener for text selection to handle copy
    document.addEventListener("copy", handleCopy);
  };

  const handleRemoveCopyListener = () => {
    // Remove event listener for copy event
    document.removeEventListener("copy", handleCopy);
  };

  const handleCopyText = (value, type) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied((prev) => ({
        ...prev,
        [type]: true, // Set copied state for latitude or longitude
      }));
      setTimeout(() => {
        setCopied((prev) => ({
          ...prev,
          [type]: false, // Reset copied state after 1 second
        }));
      }, 2000);
    });
  };

  return (
    <div
      className={`App ${showCoordinatesInput ? "coordinatesVisible" : ""}`}
      onDoubleClick={handleDoubleClick} // Handle double-click on the whole document
      onMouseUp={handleTextSelect} // Add event listener to detect text selection (for copying)
    >
      {/* If password form is visible, hide other content */}
      {passwordVisible ? (
        <div className="passwordPrompt">
          <div className="passwordForm">
            <label htmlFor="password">Enter Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button onClick={handlePasswordSubmit}>Submit</button>
            {loading && (
              <div className="loading">
                <div className="circle-loader"></div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Latitude and Longitude Input Form */}
          {showCoordinatesInput && !googleMapLink && (
            <div className="coordinatesInputForm">
              <label htmlFor="latitude">Latitude:</label>
              <input
                type="text"
                id="latitude"
                value={latitudeInput}
                onChange={(e) => setLatitudeInput(e.target.value)}
                placeholder="Enter Latitude"
              />
              <label htmlFor="longitude">Longitude:</label>
              <input
                type="text"
                id="longitude"
                value={longitudeInput}
                onChange={(e) => setLongitudeInput(e.target.value)}
                placeholder="Enter Longitude"
              />
              <button onClick={generateGoogleMapLink}>Track Location</button>
            </div>
          )}

          {/* Other Content */}
          {!showCoordinatesInput && (
            <>
              {showLocationButton && (
                <div className="welcomeMessage">
                  <h1>Welcome!</h1>
                  <button onClick={getLocation} disabled={loading}>
                    Magic Number
                  </button>
                </div>
              )}

              {loading && (
                <div className="loading">
                  <div className="circle-loader"></div>
                </div>
              )}

              {userLocation && (
                <div className="locationInfo">
                  <p>
                    <strong>Value of A : </strong>
                    {userLocation.latitude}{" "}
                    <span
                      role="button"
                      aria-label="Copy Latitude"
                      className="copy-emoji"
                      onClick={() =>
                        handleCopyText(userLocation.latitude, "latitude")
                      }
                    >
                      {copied.latitude ? "Copied" : "copy"}
                    </span>
                  </p>
                  <p>
                    <strong>Value of B : </strong>
                    {userLocation.longitude}{" "}
                    <span
                      role="button"
                      aria-label="Copy Longitude"
                      className="copy-emoji"
                      onClick={() =>
                        handleCopyText(userLocation.longitude, "longitude")
                      }
                    >
                      {copied.longitude ? "Copied" : "copy"}
                    </span>
                  </p>
                  <p
                    style={{
                      color: "#007bcff",
                      fontSize: "16px",
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    Write value of <strong>A </strong> and <strong>B</strong> in the form below
                  </p>
                  <p
                    style={{
                      color: "#980098",
                      fontSize: "18px",
                      fontWeight: "600",
                      marginTop: "5px",
                    }}
                  >
                    Thank you dear! ❤️
                  </p>
                  <div>
                    <div
                      className="googleSheetIframe"
                      style={{
                        width: "350px",
                        height: "500px",
                        overflow: "hidden",
                        border: "1px solid #ddd",
                      }}
                    >
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScQblK59dDzJIb9urEPIGes27va2WXr3llTrEzOtcfOOjDCmA/viewform?usp=sharing"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Google Sheets"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Google Maps Link */}
          {googleMapLink && (
            <div className="googleMapLink">
              <a href={googleMapLink} target="_blank" rel="noopener noreferrer">
                Click here to view the location on Google Maps
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
