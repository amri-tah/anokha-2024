"use client";

import React, { useEffect, useState } from "react";
import EventCard from "@/app/events/components/EventCard";
import Link from "next/link";
import Navbar from "../../components/EventHeader";
import Footer from "../../components/Footer";
import WebGLApp from "../../bg/WebGLApp";
import {STARRED_EVENTS_URL } from "@/app/_util/constants";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";

const Events = () => {
 
  const [eventsData, setEventsData] = useState([]);

  const [secretToken, setSecretToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [isAmritaCBE, setIsAmritaCBE] = useState(0);
  const [hasActivePassport, setHasActivePassport] = useState(0);

  const tagsFunction = (eventData) => {
    for (let i of eventData.tags) {
      if (TagsFilter.includes(i.tagName)) {
        return true;
      }
      console.log(i);
    }
    return false;
  };

  const router = useRouter();
  useEffect(() => {
    setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
    setIsAmritaCBE(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
    setHasActivePassport(
      parseInt(secureLocalStorage.getItem("hasActivePassport"))
    );
    setSecretToken(secureLocalStorage.getItem("registerToken"));
  }, [router]);

  useEffect(() => {
    fetch( STARRED_EVENTS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + secureLocalStorage.getItem("registerToken"),
      },
    })
      .then((res) => {
        if (res.status === 401) {
          buildDialog(
            "Error",
            "You are not logged in!\nPlease Login to continue.",
            "Okay"
          );
          setTimeout(() => {
            router.push("/login");
          }, 1500);
          // openModal();
          // Session Expired or not logged in. Clear Cache and Navigate to login screen.
        } else if (res.status === 500) {
          // Backend Error. Handle it.
        } else if (res.status === 200) {
          // Valid Request. Data has come
          return res.json();
        } else if (res.status === 400) {
          // Display error message from "MESSAGE" field in data
        } else {
          // Unknown Error.
        }
      })
      .then((data) => {
        console.log("Recived Data:", data);
        setEventsData(data.EVENTS);
        setFilteredData(data.EVENTS);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [router]);


  
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#192032]">
      <WebGLApp colors={webGLColors} className="-z-10" /> 
      <div className="block">
        <Navbar />
        <div className="flex flex-col gap-5 justify-center items-center mx-10 md:min-h-[20px] lg:min-h-[160px]">
          <div className="grid mb-10 z-10 grid-flow-row gap-10 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
            {eventsData && eventsData.length > 0 ? (
              eventsData.map((event) => {
                return (
                  <div key={event.eventId}>
                    <Link href={`/events/${event.eventId}`}>
                      <EventCard
                        imgSrc={event.eventImageURL}
                        id={event.eventId}
                        eventName={event.eventName}
                        eventBlurb={event.eventDescription}
                        eventDesc={event.eventDescription}
                        date={event.eventDate}
                        time={event.eventTime}
                        goi={event.isGroup}
                        tags={event.tags}
                        price={event.eventPrice}
                        isAllowed={event.eventStatus === "1"}
                        isRegistered={
                          secureLocalStorage.getItem("isLoggedIn")
                            ? event.isRegistered
                            : -1
                        }
                        isStarred={event.isStarred}
                        maxseats={event.maxSeats}
                        seats={event.seatsFilled}
                        router={router}
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Events;
