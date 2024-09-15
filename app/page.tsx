"use client";
import { About } from "@/components";
import ReactFullpage from "@fullpage/react-fullpage";
export default function Home() {
  return (
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      scrollHorizontally={true} /* Because we are using the extension */
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <About />
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
