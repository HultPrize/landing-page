import React from "react";

export default function page() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center mt-20">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeHHg6sLT3_zfumOZE98CwB2rRA76o12EnpLm1czqB1ziuSzg/viewform?embedded=true"
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
