import React from "react";

import { useParams } from "react-router-dom";

const Info = () => {
    const params = useParams()

    console.log(params)
    return (
        <h1>
            Welcome {params?.user_id}
        </h1>
    )
}

export default Info