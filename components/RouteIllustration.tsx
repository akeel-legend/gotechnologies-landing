// DEPRECATED — not imported anywhere. Superseded by the hero photo in the
// warm-editorial rebuild. Kept only because this sandbox can't delete
// files from a mounted repo folder; safe to delete for real in your own
// editor. Original comment follows:
//
// Decorative "route grammar" graphic: rounded route lines connecting
// points, with the gold waypoint used sparingly for the destination.
// Follows brand guidelines section 11 (avoid literal car/map-pin
// iconography; inherit the rounded geometry and arrow angle of the
// route-G mark).
//
// Animation is done natively in SVG (SMIL <animate>/<animateMotion>) so
// it needs no JS bundle and no client component -- it plays automatically
// wherever this is rendered, including in a static export.
const PATH_D = 'M40 260C110 260 110 180 180 180C250 180 250 100 320 100C370 100 380 70 440 60';

export function RouteIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <path id="go-route-path" d={PATH_D} />
      </defs>

      {/* Faint static base line so the route reads even if animation is reduced/unsupported */}
      <use href="#go-route-path" stroke="#7CB1AD" strokeOpacity="0.3" strokeWidth="2" />

      {/* Flowing dashes suggesting travel along the route */}
      <use href="#go-route-path" stroke="#7CB1AD" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 16">
        <animate attributeName="stroke-dashoffset" from="0" to="-170" dur="7s" repeatCount="indefinite" />
      </use>

      {/* Waypoint markers */}
      <circle cx="180" cy="180" r="5" fill="#0B1F2A" stroke="#7CB1AD" strokeWidth="2" />
      <circle cx="320" cy="100" r="5" fill="#0B1F2A" stroke="#7CB1AD" strokeWidth="2" />

      {/* Start point */}
      <circle cx="40" cy="260" r="8" fill="#7CB1AD" />

      {/* Traveller: a soft glow + solid dot moving the full length of the route */}
      <g>
        <animateMotion dur="4.5s" repeatCount="indefinite" rotate="auto">
          <mpath href="#go-route-path" />
        </animateMotion>
        <circle r="12" fill="#7CB1AD" opacity="0.25" />
        <circle r="5.5" fill="#7CB1AD" />
      </g>

      {/* Destination: pulsing gold waypoint */}
      <circle cx="440" cy="60" r="10" fill="#D8A344" opacity="0.35">
        <animate attributeName="r" values="10;22;10" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="440" cy="60" r="9" fill="#D8A344" />
    </svg>
  );
}
