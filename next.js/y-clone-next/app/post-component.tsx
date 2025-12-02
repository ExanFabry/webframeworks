"use client"
import React from "react";
import { useState } from "react";
import { Posts } from "./page";

export const PostComponent = ({item}: {item: Posts[]}) => {
  const [like, setLike] = useState<boolean>(false);
  return (
    <>
      {
        item.map((item: Posts) =>
          <React.Fragment key={item.text}>
            <img src={item.CreatedBy?.avatarUrl} style={{width: 100}}/>
            <p>{item.CreatedBy?.name}</p>
            <p>@{item.CreatedBy?.username}</p>
            <p>{item.text}</p>
            <p>{String(item.createdOn)}</p>
            <button onClick={() => setLike(!like)}>
              {like ? "unlike" : "like"}
            </button>
          </React.Fragment>
        )
      }
    </>
  );
};