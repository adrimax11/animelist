/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_BW4FFCYO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout } from './dashboard_CERK_-lF.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registrarse" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Registrarse</h1> <p>¿Ya tienes una cuenta? <a href="/signin">Iniciar sesión</a></p> <form action="/api/auth/register" method="post"> <label for="email" for="email">Correo electrónico</label> <input type="email" name="email" id="email"> <label for="password">Contraseña</label> <input type="password" name="password" id="password"> <button type="submit">Iniciar sesión</button> </form> ` })}`;
}, "/home/adrian/webs-proyects/animelist/src/pages/register.astro", void 0);

const $$file = "/home/adrian/webs-proyects/animelist/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
