import React from "react";
import "../cStyles.css";

import {notes} from "../notes.js"
function Note(props){
  return <div className="fluid-container note">
  
<h3>{props.title}</h3>
<p>{props.content} </p>
</div>
}

export default Note;