import React, { useState } from 'react';
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';

const Loading = () => {
    const override = css`
    display: block;
    margin: 0 auto;
  `;
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FF9B09");
    return (
        <div className="flex justify-center items-center h-[80vh] w-full">
            <ClipLoader color={color} loading={loading} css={override} size={150} />
        </div>

    );
};

export default Loading;