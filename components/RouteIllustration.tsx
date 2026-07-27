// Decorative "route grammar" graphic: rounded route lines connecting
// points, with the gold waypoint used sparingly for the destination.
// Follows brand guidelines section 11 (avoid literal car/map-pin
// iconography; inherit the rounded geometry and arrow angle of the
// route-G mark).
export function RouteIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 260C110 260 110 180 180 180C250 180 250 100 320 100C370 100 380 70 440 60"
        stroke="#0D6F68"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="1 18"
      />
      <circle cx="40" cy="260" r="9" fill="#0D6F68" />
      <circle cx="180" cy="180" r="6" fill="#E4ECEA" />
      <circle cx="320" cy="100" r="6" fill="#E4ECEA" />
      <circle cx="440" cy="60" r="12" fill="#D8A344" />
    </svg>
  );
}
