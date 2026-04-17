import { useState } from "react";
import IncidentTable from "../components/IncidentTable";
import IncidentDetailForm from "../components/IncidentDetailForm";

export default function DashboardPage({ incidentList }) {
  const [selectedIncident, setSelectedIncident] = useState(null);
  return (
    <div style={{ margin: "16px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div
          style={{ border: "1px solid black", width: "30%", height: "90px" }}
        >
          Alerts
        </div>
        <div
          style={{ border: "1px solid black", width: "30%", height: "90px" }}
        >
          Incident Overview
        </div>
      </div>
      <IncidentTable
        incidents={incidentList}
        selectedIncident={selectedIncident}
        onSelectIncident={setSelectedIncident}
      />

      {selectedIncident && (
        <IncidentDetailForm
          incident={selectedIncident}
          onClose={() => setSelectedIncident(null)}
        />
      )}
    </div>
  );
}
