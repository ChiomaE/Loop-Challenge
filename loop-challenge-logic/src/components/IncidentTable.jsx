import IncidentTableRow from "./IncidentTableRow";

function IncidentTable({ incidents, selectedIncident, onSelectIncident }) {
  console.log("incidents", incidents);
  if (incidents.length === 0) {
    return (
      <div>
        No incidents found for this filter. Please try a different filter.
      </div>
    );
  }

  return (
    <table width="100%" border=".5" cellPadding="8">
      <thead>
        <tr>
          <td style={{ backgroundColor: "black", color: "white" }}>
            Incident ID
          </td>
          <td style={{ backgroundColor: "black", color: "white" }}>Severity</td>
          <td style={{ backgroundColor: "black", color: "white" }}>Type</td>
          <td style={{ backgroundColor: "black", color: "white" }}>System</td>
          <td style={{ backgroundColor: "black", color: "white" }}>Status</td>
          <td style={{ backgroundColor: "black", color: "white" }}>Owner</td>
          <td style={{ backgroundColor: "black", color: "white" }}>
            Assigned To
          </td>
          <td style={{ backgroundColor: "black", color: "white" }}>
            Time of Incident
          </td>
        </tr>
      </thead>
      <tbody>
        {incidents.map((incident) => (
          <IncidentTableRow
            incident={incident}
            key={incident.id}
            isSelected={selectedIncident?.id === incident.id}
            onSelect={onSelectIncident}
          />
        ))}
      </tbody>
    </table>
  );
}

export default IncidentTable;
