// DEPRECATED — not imported anywhere. Superseded by Partner.tsx (single
// partner banner) per the warm-editorial rebuild; the four audience paths
// this used to render as cards are preserved via the contact form's
// `interest` field instead (see docs/site-copy.md, reconciliation note
// 2). Kept only because this sandbox can't delete files from a mounted
// repo folder; safe to delete for real in your own editor.
//
// Stubbed to a no-op (rather than left referencing the retired
// `audiences`/`Audience` export) so `tsc --noEmit` — which type-checks
// every file under `components/`, not just the ones composed into
// `app/page.tsx` — still passes cleanly.
export function Audiences() {
  return null;
}
