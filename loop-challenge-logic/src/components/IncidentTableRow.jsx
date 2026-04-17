import TeamTypeBadge from "./TeamTypeBadge";

function IncidentTableRow({ incident, isSelected, onSelect }) {
  console.log("incident", incident);
  return (
    <tr
      onClick={() => onSelect(incident)}
      style={{
        cursor: "pointer",
        background: isSelected ? "#b6b6b6" : "white",
      }}
    >
      <td style={{ border: 0 }}>{incident.id}</td>
      <td style={{ border: 0 }}>{incident.severity}</td>
      <td style={{ border: 0, display: "flex" }}>
        <div style={{ width: "35%" }}>{incident.type} </div>
        <div style={{ width: "15%" }}>
          <TeamTypeBadge incident={incident} />
        </div>
      </td>
      <td style={{ border: 0 }}>{incident.system}</td>
      <td style={{ border: 0 }}>{incident.status}</td>
      <td style={{ border: 0 }}>{incident.timestamp}</td>
      <td style={{ border: 0 }}>{incident.owner}</td>
      <td style={{ border: 0 }}>{incident.assignedTo.userName}</td>
    </tr>
  );
}

export default IncidentTableRow;
