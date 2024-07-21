import React from "react";
import "./Background.css";
const Background = ()=>{
    return(
        <>
        <div style={{
             width : "100vw",
             height : "100px",
             border : "2px solid blue",
             alignContent : "center",
             /**For example, this creates a linear gradient that starts from the right and transitions from #2f095b to #065551 */
            background : "linear-gradient(to left, cyan, indigo)"
        }}>
           <h2>This creates a linear gradient that starts from the right and transition for the color "Cyan" to "Indigo"</h2>
        </div>
        <div style={{
             width : "100vw",
             height : "100px",
             border : "2px solid blue",
             alignContent : "center",
             /**For example, this creates a linear gradient that starts from the left and transitions from #2f095b to #065551 */
            background : "linear-gradient(to right, cyan, indigo)"
        }}>
           <h2>This creates a linear gradient that starts from the left and transition for the color "Cyan" to "Indigo</h2>
        </div>
        <div style={{
             width : "100vw",
             height : "100px",
             border : "2px solid blue",
             textAlign : "center",
             alignContent : "center",
    
             /**For example, this creates a linear gradient that starts from the up and transitions from cyan to indigo */
            background : "linear-gradient(to bottom, cyan, indigo)"
        }}>
           <h2>This creates a linear gradient that starts from the up and trainsition for the colors "Cyan" to "Indigo</h2>
        </div>
        <div style={{
             width : "100vw",
             height : "100px",
             border : "2px solid blue",
             alignContent : "center",
    
             /**For example, this creates a linear gradient that starts from the bottom and transitions from Cyan to Indigo */
            background : "linear-gradient(to top, cyan, indigo)"
        }}>
           <h2>This creates a linear gradient that starts from the bottom trainsition for the colors "Cyan" to "Indigo</h2>
        </div>
        <div style={{
             width : "100vw",
             height : "100px",
             border : "2px solid blue",
             textAlign : "center",
             alignContent : "center",
            // DIAGONAL LINEAR GRADIENT
            background : "linear-gradient(to left top, cyan, indigo 50%)"
        }}>
           <h2>This creates a diagonal gradient that starts from right bottom and trainsition from "Cyan" to "Indigo"</h2>
        </div>
        <div style={{
            width : "100vw",
            height : "100px",
            border : "2px solid blue",
            textAlign : "center",
            alignContent : "center",
            // ANY Number of colors
            background: "linear-gradient(to left, red, orange, yellow, green, blue, indigo, violet)"
        }}>
           <h2>This is demonstration for linear gradient with any number of colors from the right to left</h2>
        </div>
        <div style={{
            width : "100vw",
            height : "100px",
            border : "2px solid blue",
            textAlign : "center",
            alignContent : "center",
            // RADIAL GRADIENT
            background : "radial-gradient(cyan, indigo)"
            //background: "radial-gradient(circle farthest-corner at top left Cyan, Indigo)"
        }}>
           <h2>This is demonstration for radial gradient for the color "Cyan" to "Indigo"</h2>
        </div>
        </>
    );
}
export default Background;