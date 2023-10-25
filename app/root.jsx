import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import SwaggerUI from 'swagger-ui-react'
import styles from "swagger-ui-react/swagger-ui.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
        <Outlet />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
