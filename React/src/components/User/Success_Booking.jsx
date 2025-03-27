import React, { useEffect } from "react";
import Navbar from "./Navbar";

function Success_Booking() {
    useEffect(() => {
        // Fetch and download the PDF after the component mounts
        const downloadPDF = async () => {
            try {
                const response = await axios.get(
                    `https://host-turf-managment-system-project.onrender.com/generate-pdf`,
                    { responseType: "blob" } // Important for handling binary data (PDF)
                );

                // Create a Blob from the PDF data
                const pdfBlob = new Blob([response.data], {
                    type: "application/pdf",
                });

                // Create a link element to trigger the download
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(pdfBlob);
                link.download = `player-data-${sloteid}.pdf`;
                link.click();
            } catch (error) {
                console.error("Error downloading PDF:", error);
            }
        };

        downloadPDF();
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col">
  {/* Success Message at the top */}
  <div className="bg-white p-8 rounded-lg shadow-md text-center sm:mt-8 md:mt-8 lg:mt-30 mx-auto max-w-md">
    <h2 className="text-2xl font-bold mb-4">
      Booking Successful!
    </h2>
    <p className="text-gray-700">
      Your booking has been confirmed. The PDF is being downloaded...
    </p>
  </div>

  {/* Rest of your content can go here below */}
  <div className="flex-grow">
    {/* Other content if needed */}
  </div>
</div>
        </>
    );
}

export default Success_Booking;
