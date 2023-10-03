import React from "react";

const Font = () => {
  return (
    <div>
      <html>
        <head>
          <title>SERVING FONTS</title>
        </head>

        <body>
          <center>
            {" "}
            <h1>SERVING FONTS</h1>{" "}
          </center>
          <h2>Research:</h2>
          <p>
            I conducted research on how to deliver a specific font to a client's
            browser by visiting the Mozilla Developer Network (MDN) from{" "}
            
             <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts" target="_blank" rel="noreferrer">

            
              here
            </a>
            . MDN is a reputable resource for web development information and
            tutorials. On the MDN page, I found information regarding web fonts
            and the different methods for delivering fonts to clients.
          </p>

          <p>
            <strong>Give me a font:</strong>
            <p>I did the following steps to serve the font:</p>
            <ol>
              <li>
                I chose the "
                <a href="https://fonts.google.com/specimen/Freckle+Face?query=Freckle+Face" target="_blank" rel="noreferrer">

                  Freckle Face
                </a>
                " font from Google Fonts for this assignment.
              </li>
              <li>
                Google Fonts is a reliable platform for accessing a wide range
                of web fonts that are not typically pre-installed on most
                people's computers.
              </li>
              <li>
                Once downloaded and extracted the font file
                FreckleFace-Regular.ttf, copy it to the "src" folder in the
                React project.
              </li>
              <li>
                The next step is configuring the "index.css" file. Change the
                font family with the name: Freckle Face.
              </li>
              <li>
                The SRC URL property of "face-font" is configured with the file
                "FreckleFace-Regular.ttf."
              </li>
              <li>
                I formatted SRC URL properties as "woff2" since many browsers
                widely support WOFF/WOFF2.
              </li>
              <li>
                In the "index.css" file, we configure the "html" tag with the
                font-family property using the name previously given: Freckle
                Face.
              </li>
              <li>
                Now we are good to run the application. Once it's run, we can
                see the page formatted with "FreckleFace-Regular.ttf."
              </li>
            </ol>
            <p>
              Once the application is run, the page formatting in Freckle-Face
              should be as shown in the below image.{" "}
            </p>
            <img
              src="servingfonts.png"
              alt="Serving Fonts in FreckleFace Format"
              width={1300}
              height={600}
            ></img>
          </p>
        </body>
      </html>
    </div>
  );
};

export default Font;
