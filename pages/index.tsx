import Navbar from "@/components/navbar";
import React from "react";
import "./index.css";
import ListRequest from "@/components/ListRequests";

export default function Index() {
  return (
    <>
      <Navbar></Navbar>
      <ListRequest></ListRequest>
    </>
  );
}
