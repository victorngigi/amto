import { useEffect, useState } from "react";
import { Calendar, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const userRole = localStorage.getItem("role"); // "admin" or "member"

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // Replace this with your real API call
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to load events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Split events by date
  const now = new Date();
  const upcoming = events.filter((e) => new Date(e.date) >= now);
  const past = events.filter((e) => new Date(e.date) < now);

  return (
    <div className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Calendar className="w-6 h-6" /> Events
        </h1>

        {userRole === "admin" && (
          <Button onClick={() => alert("Open Create Event form")}>
            Create Event
          </Button>
        )}
      </header>

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
        </div>
      ) : (
        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
            {upcoming.length === 0 ? (
              <p className="text-gray-500">No upcoming events.</p>
            ) : (
              <EventGrid events={upcoming} />
            )}
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">Past Events</h2>
            {past.length === 0 ? (
              <p className="text-gray-500">No past events.</p>
            ) : (
              <EventGrid events={past} />
            )}
          </section>
        </div>
      )}
    </div>
  );
}

function EventGrid({ events }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="border rounded-lg shadow-sm p-4 hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold">{event.title}</h2>
          <p className="text-sm text-gray-500">{event.date}</p>
          <p className="mt-2 text-gray-700 line-clamp-3">{event.description}</p>
        </div>
      ))}
    </div>
  );
}
