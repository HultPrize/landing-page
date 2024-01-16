import React from "react";

export default function page() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center mt-20 pb-16">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfr-ugHHQYn9lLwgThGtAn87pgtas1H2DlvhPQKfpRMa2lseQ/viewform?embedded=true"
        className="w-full min-h-screen"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </main>
  );
}
