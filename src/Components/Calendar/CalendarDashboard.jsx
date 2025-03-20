import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const localizer = momentLocalizer(moment);

export default function CalendarDashboard() {
  const [events, setEvents] = useState([
    { title: "Development Meeting", start: new Date(), end: new Date() },
  ]);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">My Calendars</h2>
        <ul>
          <li>📅 Personal</li>
          <li>🛠️ Work</li>
          <li>❤️ Health</li>
        </ul>
      </div>

      {/* Main Calendar */}
      <div className="flex-1 p-4 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Schedule</h1>
          <Button onClick={() => setOpen(true)}>Add Event</Button>
        </div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
        />
      </div>

      {/* Add Event Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const title = form.title.value;
              const start = new Date(form.start.value);
              const end = new Date(form.end.value);
              setEvents([...events, { title, start, end }]);
              setOpen(false);
            }}
            className="space-y-4"
          >
            <input
              name="title"
              placeholder="Event Title"
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="start"
              type="datetime-local"
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="end"
              type="datetime-local"
              className="w-full p-2 border rounded"
              required
            />
            <Button type="submit" className="w-full">
              Save Event
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
