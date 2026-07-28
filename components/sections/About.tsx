// DEPRECATED — not imported anywhere. Superseded by CompanyOverview.tsx,
// which merged this "Sri Lanka first, built to scale" content into the
// single "#company" section per the warm-editorial rebuild (see
// docs/site-copy.md). Kept only because this sandbox can't delete files
// from a mounted repo folder; safe to delete for real in your own editor.
//
// Stubbed to a no-op (rather than left referencing the retired
// `about.ambition` field) so `tsc --noEmit` — which type-checks every
// file under `components/`, not just the ones composed into
// `app/page.tsx` — still passes cleanly.
export function About() {
  return null;
}
