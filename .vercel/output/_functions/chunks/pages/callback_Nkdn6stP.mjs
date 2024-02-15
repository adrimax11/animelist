import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://jjwxddvryzxjbmcljvtc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqd3hkZHZyeXp4amJtY2xqdnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDAxODUsImV4cCI6MjAyMzUxNjE4NX0.3QXZ932G4JmZzzzPfFCCfCL7k1Lm_nM-VrttiZ9ZAdA",
  {
    auth: {
      flowType: "pkce"
    }
  }
);

const GET = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return new Response("No se proporcionó ningún código", { status: 400 });
  }
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  return redirect("/dashboard");
};

const callback = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { callback as c, supabase as s };
