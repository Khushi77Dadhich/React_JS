import React from "react";
import ReactDOM from "react-dom";
import cars from "./car";

console.log(cars);

ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{tesla.topColour</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{honda.topColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);
