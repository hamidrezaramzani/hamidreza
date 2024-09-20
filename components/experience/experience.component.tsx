export const Experience = () => {
  return (
    <div className="section w-full flex justify-center align-middle h-screen">
      <div className="flex justify-center w-full gap-5">
        <div className="flex flex-col w-1/2 gap-5 justify-center align-middle">
          <h1 className="text-9xl raleway-bold text-slate-200 mb-16">
            #EXPERIENCE
          </h1>
          <div className="flex flex-col justify-center h-80 pl-6 w-full border-l py-2 border-slate-600 relative">
            <span className="text-sm raleway-regular text-slate-600">
              2022 july - 2024 july
            </span>
            <h3 className="raleway-bold text-2xl  py-1 text-slate-800">
              Frontend Developer
            </h3>
            <h4 className="raleway-regular text-slate-600">
              - Poroshat Filter
            </h4>

            <ul className="list-disc ml-3 mt-3">
              <li className="text-sm raleway-regular text-slate-600 mt-3">
                I have built dynamic user interfaces using React.js to improve
                the user experience in the company's web applications.
              </li>
              <li className="text-sm raleway-regular text-slate-600 mt-3">
                I've implemented responsive designs with JavaScript, ensuring
                that our applications work seamlessly across all devices.
              </li>
              <li className="text-sm raleway-regular text-slate-600 mt-3">
                I regularly collaborate with backend developers to integrate
                APIs and ensure data flow between the frontend and backend is
                smooth.
              </li>
              <li className="text-sm raleway-regular text-slate-600 mt-3">
                I've optimized application performance, focusing on reducing
                load times and improving overall responsiveness.
              </li>
              <li className="text-sm raleway-regular text-slate-600 mt-3">
                I contribute to maintaining and improving the codebase by
                following best practices in JavaScript and React development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
