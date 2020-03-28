import React from "react";

function renderAttachments (data) {
    console.log(data);
    return [].concat(data.attachment.map((attach, i) =>
    (
        <h4>{data.attachment[i].name}</h4>
    )))
}

export default renderAttachments;