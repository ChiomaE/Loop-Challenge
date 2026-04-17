export default function TeamTypeBadge({ incident }) {
  let badgeColor = "gray";
  switch (incident.assignedTo.team) {
    case "Operations":
      badgeColor = "#024A46";
      break;
    case "Security":
      badgeColor = "#E68844";
      break;
    case "Network":
      badgeColor = "#9A3E1D";
      break;
    case "Compliance":
      badgeColor = "#A12596";
      break;

    default:
      badgeColor = "gray";
  }
  return (
    <span
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "4px",
        color: "white",
        backgroundColor: badgeColor,
      }}
    >
      {incident.assignedTo.team}
    </span>
  );
}
