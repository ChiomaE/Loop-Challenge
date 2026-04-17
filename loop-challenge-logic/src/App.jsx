/* 
File structure (prioritizing Incident Table)

src
-App.jsx
-index.jsx
-components
--IncidentTable // list view 
--IncidentTableRow
--IncidentDetalForm // form view 
--TeamTypeBadge


-pages
--DashboardPage
--ChartsPage
*/

import DashboardPage from "./pages/DashboardPage";

const mockIncidents = [
  {
    id: "INC-1042",
    severity: "Critical",
    type: "Unauthorized Access",
    system: "Auth Service",
    status: "Investigating",
    timestamp: "2026-03-24T09:42:00Z",
    owner: "Alice Chen",
    assignedTo: {
      userName: "John Smith",
      team: "Security",
    },
  },
  {
    id: "INC-1041",
    severity: "High",
    type: "API Abuse",
    system: "Public API",
    status: "Resolved",
    timestamp: "2026-03-24T08:15:00Z",
    owner: "David Kim",
    assignedTo: {
      userName: "Wiliam Adams",
      team: "Operations",
    },
  },
];

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DashboardPage incidentList={mockIncidents} />
    </div>
  );
}

export default App;
