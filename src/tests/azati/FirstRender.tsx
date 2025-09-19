import React from 'react'

const useFirstRender = () => {
  
};

export default function RenderAfterFirstRender(props) {
  const isFirstRender = useFirstRender();

  if (isFirstRender) return "ничего";

  return props.children;
}