"use client";
import NorthernLights from "@/app/ui/components/NorthernLights";
import { Input } from "@/components/ui/input";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
export default function NFC_Hub() {
  const [CustName, setCustName] = useState("");
  const [phone, setPhone] = useState("");
  const [pathName, setPathName] = useState(
    "https://ziverium-git-ziverium-exp-ziveriums-projects.vercel.app/nfc_center?CustID=BC123410"
  );
  const custIDFetcher = (urls: any) => {
    // Split the URL by the '/' character
    // const segments = urls.split("/");
    // Retrieve the 'CustID' query parameter
    // Parse the current URL
    const url = new URL(urls);
    const retrievedCustID = url.searchParams.get("CustID");
    // The desired part (nfc_center) is the last segment
    // const finalPath = segments[segments.length - 1];
    console.log("Path : "); // Output: nfc_center
    setCustID(retrievedCustID!);
    setStatus(true);
    console.log("CustID :  ", custID); // Output: BC123410
  };
  const [queryParams, setQueryParams] = useState<{ [key: string]: string }>({});

  const [status, setStatus] = useState(false);
  const [scanProgress, setScanProgress] = useState("Not Scanning");
  const [custID, setCustID] = useState("");
  //Overlay state
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const giveAccessButton = async () => {
    setOverlayVisible(true);
    if ("NDEFReader" in window) {
      try {
        const reader: any = new (window as any).NDEFReader();
        await reader.scan();

        reader.addEventListener("reading", (event: any) => {
          const { message } = event;
          const records = message.records;

          // Process the NFC data
          const urls = records
            .filter((record: any) => record.recordType === "url") // Filter for URL records
            .map((record: any) => {
              const textDecoder = new TextDecoder("utf-8"); // Decode using UTF-8
              return textDecoder.decode(record.data); // Decode the data
            });

          // Display the extracted URLs
          if (urls.length > 0) {
            // Retrieve the query parameter 'CustID'
            const custID = urls.searchParams.get("CustID");
            custIDFetcher(urls);
            setScanProgress("Scanning Complete");
          } else {
            // ("NFC scan successful, but no URL records found.");
            setScanProgress("Scanning Complete without Url");
            setStatus(true);
          }
        });

        reader.addEventListener("error", (event: any) => {
          console.error("NFC scan error:", event);
          setScanProgress("Failed: " + event);
          // ("Error scanning NFC.");
        });
      } catch (error) {
        setScanProgress("Failed to set up scan :" + error);
        console.error("Error setting up NFC scan:", error);
      }
    } else {
      setScanProgress("NFC is not supported");
      console.error("NFC is not supported");
    }
  };

  const handleOverlayClick = () => {
    setCustID("");
    setOverlayVisible(false);
  };

  return (
    <>
      {" "}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="text-white dark:text-white relative overflow-hidden ">
        <div className="flex flex-col md:flex-row justify-center items-center w-screen min-h-screen relative overflow-hidden px-5 md:px-20">
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ziverium-background-dark z-20"></div>
          <NorthernLights />
          <div className="  w-full h-full flex flex-col items-center md:items-start justify-center relative z-20 mt-36 md:mt-0 mb-10">
            <h1 className="scroll-m-20 text-7xl font-normal tracking-tight lg:text-8xl mb-4">
              Welcome to NFC Hub
            </h1>
            <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
              Give Access Control
            </p>
            <p>{scanProgress}</p>
            <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
              Enter Name:
            </p>
            <Input
              type="text" // Use text for Client Name
              name="ClientName"
              value={CustName}
              onChange={(e) => setCustName(e.target.value)} // Update state on change
              placeholder="Enter Full Name:"
              style={{
                width: "350px",
                height: "45px",
                padding: "12px 20px",
                margin: "8px 0",
                boxSizing: "border-box",
                border: "2px solid #ccc",
                borderRadius: "4px",
                fontSize: "21px",
                background: "transparent",
                fontFamily: "Arial, sans-serif",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            />
            <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
              Enter Phone Number:
            </p>
            <Input
              type="number" // Use text for Phone number
              name="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Update state on change
              placeholder="Enter Phone  Number:"
              style={{
                width: "350px",
                height: "45px",
                padding: "12px 20px",
                margin: "8px 0",
                boxSizing: "border-box",
                border: "2px solid #ccc",
                borderRadius: "4px",
                fontSize: "21px",
                background: "transparent",
                fontFamily: "Arial, sans-serif",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            />
            <button
              className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "
              onClick={giveAccessButton}
              // onTouchStart={giveAccessButton} /* Added touch event */
            >
              <span>Give Access</span>
            </button>
            <p></p>
          </div>
          <div className=" w-full h-full relative overflow-visible bg-transparent">
            {isOverlayVisible && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                onClick={handleOverlayClick}
              >
                {true ? (
                  <div className="text-white text-2xl">
                    <p>Full Name: </p>
                    {CustName}
                    <p>Cust ID: </p>
                    {custID}

                    <p>Phone: </p>
                    {phone}
                    <button className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 ">
                      <span>Confirm Access</span>
                    </button>
                  </div>
                ) : (
                  <div className="text-white text-2xl">
                    Tap Your Access Card to Give Access :{scanProgress}
                  </div>
                )}
              </div>
            )}
            <button className="bg-transparent text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 ">
              <span></span>
            </button>
            <button
              className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "

              // onTouchStart={giveAccessButton} /* Added touch event */
            >
              <span>Give Access</span>
            </button>
            <button className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 ">
              <span>Get id from url</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
