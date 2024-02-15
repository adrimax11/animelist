/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_BW4FFCYO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout } from './dashboard_CERK_-lF.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${maybeRenderHead()}<div class="background-image h-screen flex items-center justify-center left-40" data-astro-cid-b2fdlob7> <div class="mb-50" data-astro-cid-b2fdlob7> <h2 class="text-white " data-astro-cid-b2fdlob7>Never forget what you've seen. Save what you want to watch next.</h2> <h1 class="text-white text-3xl font-bold " data-astro-cid-b2fdlob7>Start tracking your anime today.</h1> </div> </div>  <div class="w-1/5 h-auto bg-blue-500 p-4 rounded absolute right-40 top-40" data-astro-cid-b2fdlob7> <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 w-full" data-astro-cid-b2fdlob7>
Sign up with Apple
</button> <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mb-2 w-full" data-astro-cid-b2fdlob7>
Sign up with Google
</button> <button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 w-full" data-astro-cid-b2fdlob7>
Sign up with Facebook
</button> <button class="bg-sky-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" data-astro-cid-b2fdlob7>
Sign up with Twitter
</button> <h2 class="text-center mb-4" data-astro-cid-b2fdlob7></h2> <p class="text-center my-4" data-astro-cid-b2fdlob7>---or---</p> <p class="text-center my-4" data-astro-cid-b2fdlob7> <a href="/register" data-astro-cid-b2fdlob7>
Sign up with your email
</a> </p> </div> 
\`\`\``;
}, "/home/adrian/webs-proyects/animelist/src/components/Login.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AnimeList", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Login", $$Login, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<h5 class="text-gradient" data-astro-cid-j7pv25f6>Welcome to AnimeList</h5> ` })} `;
}, "/home/adrian/webs-proyects/animelist/src/pages/index.astro", void 0);

const $$file = "/home/adrian/webs-proyects/animelist/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
