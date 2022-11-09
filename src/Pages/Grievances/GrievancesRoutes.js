//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 03 November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Grievances Routes' Page
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GrievancesCitizenEntryForm from "./GrievancesCitizenEntryForm";
import GrievancesComplaints from "./GrievancesComplaints";
import GrievancesIndex from "./GrievancesIndex";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const GrievancesRoutes = () => {

  // react query constant
  const queryClient = new QueryClient()

  return (
    <>

<QueryClientProvider client={queryClient}>

  {/* Routes */}
      <Routes>

        <Route
            path="/grievance-index"
            element={<GrievancesIndex/>}
        />

        <Route
          path="/grievance-citizen-form"
          element={<GrievancesCitizenEntryForm />}
        />
        <Route
          path="/grievance-complaints"
          element={<GrievancesComplaints />}
        />
      </Routes>

      </QueryClientProvider>


    {/* Toast Component */}
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

    </>
  );
};

export default GrievancesRoutes;
