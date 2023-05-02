import PrivateRoute from "@/components/common/PrivateRoute";
import Script from "next/script";

export default function Dashboard({ user }) {
  return (
    <>
      <div className="relative z-0 flex flex-col min-w-0 p-3 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
        <div data-toggle="calendar" id="calendar" />
      </div>
      <Script src="../path/to/fullcalendar.min.js" />
    </>
  );
}
