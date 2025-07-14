import * as React from "react";

export default function Spacer({ size = 2 }) {
  return (
    <>
      {Array.from({ length: size }, (_, i) => (
        <br key={i} />
      ))}
    </>
  );
}
