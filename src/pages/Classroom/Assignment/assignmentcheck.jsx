import React, { useEffect } from "react";
import { Document, Page } from 'react-pdf';
import { useState } from "react";
import axios, { Axios } from "axios"
export default function AssignmentCheck(){
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const[pdf,setPdf]=useState()
 useEffect(()=>{async function fetchFile(){
  console.log("fetching..")
    const url = 'http://127.0.0.1:5000/api/assign/';
        await axios.post(
            url,
            {
              id:"1C9RRYKe5UyKe4dCVQLV"
            },
            {
              responseType: 'blob'
            }
          )
          .then((res) => {
            console.log(res);
            const file=new Blob([res.data],{type:'application/pdf'});
            console.log(file)
            const fileurl = window.URL.createObjectURL(file);
            // window.open(fileurl)
            console.log(fileurl)
            setPdf(fileurl)
          })
          .catch((e)=>{
          if (e.isAxiosError) {
            if (e.message) {
              alert(e.message);
            } else {
              alert("Network Error");
            }
          }})
 }
 fetchFile()
},[])
function onDocumentLoadSuccess({ numPages }) {
  setNumPages(numPages);
}
    return(
        <div className="assign-check">
            {/* check pdf */}
            {pdf &&<iframe title="pdf" type="application/pdf" src={pdf} className="h-[100vh] w-[80vw]"></iframe>}
           {/* <Document file={pdf+".pdf"} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
           </Document> */}
        </div>
    )
}