"use client";
import { About } from "@/components";
import { Navbar } from "@/components/navbar/navbar.component";
import ReactFullpage from "@fullpage/react-fullpage";
export default function Home() {
  return (
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      scrollHorizontally={true} /* Because we are using the extension */
      credits={{
        enabled: false,
      }}
      render={() => {
        return (
          <>
            <ReactFullpage.Wrapper>
              <About />
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
}
