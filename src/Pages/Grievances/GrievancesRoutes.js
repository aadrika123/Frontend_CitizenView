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

const GrievancesRoutes = () => {

  return (
    <>

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

    </>
  );
};

export default GrievancesRoutes;
