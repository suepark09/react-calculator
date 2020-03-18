import React from 'react';

function ResultComponent(props) {
    console.log(props.result, "wuttt")
  return (
    <div className="resultComponent">
        <h1>{props.result}</h1>
     </div>
  );
}

export default ResultComponent;