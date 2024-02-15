/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_BW4FFCYO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { s as supabase } from './callback_Nkdn6stP.mjs';

const $$Astro$2 = createAstro();
const $$HeaderLogin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderLogin;
  return renderTemplate`${maybeRenderHead()}<header class="text-white text-center"> <div class="flex justify-between items-center p-4"> <a href="/"> <h1 class="text-2xl font-bold">MyAnimeList</h1> </a> <div class="space-x-4"> <a href="/list"> <i class="fas fa-list"></i> </a> <a href="/messages"> <i class="fas fa-envelope"></i> </a> <a href="/notifications"> <i class="fas fa-bell"></i> </a> <a href="/profile"> <i class="fas fa-user"></i> </a> <form action="/api/auth/signout"> <button type="submit">Cerrar sesión</button> </form> </div> </div> <nav class="bg-blue-600 font-bold"> <ul class="flex space-x-4"> <li><a href="#">Anime</a></li> <li><a href="#">Manga</a></li> <li><a href="#">Community</a></li> <li><a href="#">Industry</a></li> <li><a href="#">Watch</a></li> <li><a href="#">Read</a></li> <li><a href="#">Help</a></li> </ul> </nav> </header>`;
}, "/home/adrian/webs-proyects/animelist/src/components/HeaderLogin.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$HeaderLogin, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/adrian/webs-proyects/animelist/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  const email = data?.user?.email;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "panel de control" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Bienvenido ${email}</h1> <p>Estamos felices de verte aquí</p> <form action="/api/auth/signout"> <button type="submit">Cerrar sesión</button> </form> ` })}`;
}, "/home/adrian/webs-proyects/animelist/src/pages/dashboard.astro", void 0);

const $$file = "/home/adrian/webs-proyects/animelist/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, dashboard as d };
