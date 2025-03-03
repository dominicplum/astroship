if (typeof window !== "undefined") {
  window.addEventListener("load", function () {
    var script = document.createElement("script");
    script.src = "//cookieinfoscript.com/js/cookieinfo.min.js";
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("data-font-size", "10px");
    script.setAttribute("data-divlinkbg", "#01a0ff");
    script.setAttribute("data-divlink", "#FFFFFF");
    script.setAttribute(
      "data-message",
      "Na naszej stronie internetowej używamy plików cookies, aby dostarczać Ci najlepsze doświadczenia. Korzystając z naszej witryny, bez zmiany ustawień prywatności przeglądarki, wyrażasz zgodę na przetwarzanie Twoich danych osobowych, takich jak adres IP czy identyfikatory plików cookies, w celach marketingowych, w tym wyświetlania reklam dostosowanych do Twoich zainteresowań i preferencji, oraz w celach analitycznych i statystycznych przez Dominik Śliwiński ul. Małachowskiego 8/31, 61-129 Poznań (Administrator danych). Zgadzasz się również na zapisywanie i przechowywanie plików cookies na Twoim urządzeniu. Pamiętaj, że zawsze masz możliwość zmiany ustawień dotyczących plików cookies w swojej przeglądarce. Dowiedz się więcej w "
    );
    script.setAttribute("data-linkmsg", "Polityka Prywatności");
    script.setAttribute("data-cookie", "CookieInfoScript");
    script.setAttribute("data-text-align", "left");
    script.setAttribute("data-moreinfo", "/polityka-prywatnosci");
    script.setAttribute("data-close-text", "Akceptuje");

    document.head.appendChild(script);
  });
}
