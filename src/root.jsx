// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
// import "./assets/css/main.css"
import base from "./configs";
import "uno.css";
import "./css/style.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta
          name="description"
          content="Metis Linux a powerful lightweight linux distro based on Artix"
        />
        {/* favicon & font */}
        <link rel="icon" type="image/svg+xml" href={base+"/logo.png"} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* meta description */}
        <Title>METIS Linux</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
