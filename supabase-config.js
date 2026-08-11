// ---------------------------------------------------------------------------
// Konfigurace Supabase (přihlášení + synchronizace pokroku do cloudu).
//
// SEM VYPLŇ dvě hodnoty ze svého Supabase projektu:
//   Supabase dashboard → Project Settings → API
//     • "Project URL"        → url
//     • "anon public" klíč   → anonKey
//
// anon klíč JE bezpečné mít v klientském kódu — přístup k datům hlídá
// Row Level Security (RLS) na straně Supabase, ne utajení klíče.
//
// Dokud jsou hodnoty prázdné (nebo zůstane placeholder níže), appka běží
// v původním "jen lokálně" režimu bez přihlášení — nic se nerozbije.
// ---------------------------------------------------------------------------
window.SB = {
  url: "https://wskrbdbckdrxcnaajdlc.supabase.co",  // tvůj projekt
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza3JiZGJja2RyeGNuYWFqZGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0NjI1NjQsImV4cCI6MjEwMjAzODU2NH0.LJcjbrdpKCgeppE-dKoh9UAwC9yuPEfMqjRdJpbWlBs"
};
