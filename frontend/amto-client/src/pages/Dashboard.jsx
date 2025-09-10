import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Calendar, User, Bus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <p className="text-gray-600">
        Welcome back! Here’s a quick overview of your membership and activities.
      </p>

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Membership Status */}
        <Card className="shadow-md rounded-2xl border">
          <CardContent className="p-6 flex flex-col items-center">
            <BadgeCheck size={32} className="text-blue-500 mb-2" />
            <h2 className="text-lg font-medium">Membership</h2>
            <p className="text-gray-600 text-sm">Active until Dec 2025</p>
          </CardContent>
        </Card>

        {/* Upcoming Event */}
        <Card className="shadow-md rounded-2xl border">
          <CardContent className="p-6 flex flex-col items-center">
            <Calendar size={32} className="text-green-500 mb-2" />
            <h2 className="text-lg font-medium">Upcoming Event</h2>
            <p className="text-gray-600 text-sm">AGM — 20 Oct 2025</p>
          </CardContent>
        </Card>

        {/* Profile */}
        <Card className="shadow-md rounded-2xl border">
          <CardContent className="p-6 flex flex-col items-center">
            <User size={32} className="text-purple-500 mb-2" />
            <h2 className="text-lg font-medium">Profile</h2>
            <p className="text-gray-600 text-sm">Complete: 80%</p>
          </CardContent>
        </Card>

        {/* Routes & Operations */}
        <Card className="shadow-md rounded-2xl border">
          <CardContent className="p-6 flex flex-col items-center">
            <Bus size={32} className="text-orange-500 mb-2" />
            <h2 className="text-lg font-medium">Operations</h2>
            <p className="text-gray-600 text-sm">3 routes, 12 vehicles</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
