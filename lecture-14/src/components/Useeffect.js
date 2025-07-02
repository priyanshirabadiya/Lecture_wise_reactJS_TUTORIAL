import React, { useEffect, useState } from "react";

export default function Effect() {
  const [increment, setincre] = useState(0);
  const [deincrement, setdecre] = useState(0);

  // []                           -> only one time when page is reload
  //                              -> onclick where we click on any button
  // [increment] //any dependency -> any dependancy example [increment] works when we click on increment burron

  // useEffect(() => {
  //     console.log('Use effect run depend on decrement');
  // },[deincrement]);

  // Reload time
  // useEffect(() => {
  //     console.log('Use effect run depend on decrement / pageload');
  // },[]);

  useEffect(() => {
    console.log("🔥 increment useEffect triggered:", increment);
  }, [increment]);

//   useEffect(() => {
//   console.log('🧊 deincrement useEffect triggered:', deincrement);
// }, [deincrement]);


  const increfun = () => {
    // console.log('incre');
    setincre(increment + 1);
  };
  const decrefun = () => {
    // console.log('decre');
    setdecre(deincrement - 1);
  };
  return (
    <>
      <p>increment</p>
      <h1>{increment}</h1>
      <button onClick={increfun}>click here</button>
      <p>{deincrement}</p>
      <button onClick={decrefun}>click here</button>
    </>
  );
}
