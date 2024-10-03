"use client";
import { About, Experience, Project, Contact } from "@/components";
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
              <Experience />
              <Project />
              <Contact />
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
}
