import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/6.1.6/index.min.js"
          integrity="sha512-xCMh+IX6X2jqIgak2DBvsP6DNPne/t52lMbAUJSjr3+trFn14zlaryZlBcXbHKw8SbrpS0n3zlqSVmZPITRDSQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </body>
    </Html>
  );
}
