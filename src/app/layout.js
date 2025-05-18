import AppLayout from "@/layouts/AppLayout";
import Providers from "@/services/Provider";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Sage Rover",
  description: "Sage Rover is a travel and tour company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/png" href="assets/images/travele-logo.png" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"></script>
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.min.css" />
        <link rel="stylesheet" href="/assets/vendors/modal-video/modal-video.min.css" />
        <link rel="stylesheet" href="/assets/vendors/lightbox/dist/css/lightbox.min.css" />
        <link rel="stylesheet" href="/assets/vendors/slick/slick.css" />
        <link rel="stylesheet" href="/assets/vendors/slick/slick-theme.css" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body className="home" suppressHydrationWarning={true}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>

        {/* Scripts via Next.js Script component */}
        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/jquery-ui/jquery-ui.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/countdown-date-loop-counter/loopcounter.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.counterup.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/modal-video/jquery-modal-video.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/masonry/masonry.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/lightbox/dist/js/lightbox.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/slick/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
