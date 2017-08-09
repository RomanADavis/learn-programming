"use strict";

var gSquaeVertexBuffer;

function initSquareBuffer() {
    
    // Define the vertices of the square
    var verticesOfSquare = [
       0.5,  0.5, 0.0,
      -0.5,  0.5, 0.0,
       0.5, -0.5, 0.0,
      -0.5, -0.5, 0.0
    ];
    
    // Step A: Create a buffer on the gGL context for our vertices positions
    gSquareVertexBuffer = gGL.createBuffer();
    
    // Step B: Activate vertexBuffer
    gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);
    
    // Step C: Load VerticesOfSquae into the vertexBuffer
}