import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGetTest } from "../hooks/useGetTest";
// import { useGetTest } from './../hooks/useGetTest';

function Test() {
  const { data, isLoading, error } = useGetTest();
  // console.log(data , "1");
  

  return (
    <>

    </>
  )
}

export default Test;
