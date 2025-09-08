import React from "react";

const DeployLink = () => {
    const DeployUrl = import.meta.env.REACT_APP_DEPLOY_URL || 'http://localhost:3000';

    return (
        <a href={`https://${DeployUrl}`} target="_blank" rel="noopener noreferrer">Deploy Link</a>
    )
}

export default DeployLink;