
"use client";

import { Footer } from "flowbite-react";

export function FooterReact() {
  return (
    <div    >
        <Footer container className="bg-slate-950 justify-evenly md:flex md:relative hidden sm:absolute sm:top-0 md:visible">
        <Footer.Copyright href="#" by="Raymond" year={2024} className=""/>
        <Footer.LinkGroup>
            <Footer.Link href="https://github.com/ZaRamen">Github</Footer.Link>
            <Footer.Link href="mailto:rlin7289@gmail.com">Contact</Footer.Link>
        </Footer.LinkGroup>
        </Footer>
    </div>

  );
}
