import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

//defer allows to load part of the website whilst waiting for fetch data from the server for example

function EventsPage() {
  const data = useLoaderData();
  return (
    // Suspense shows fallback whilst waiting for data to arrive
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
