import * as React from "react";
import Home from "./Home";
import "../css/App.css";
import CMS from "netlify-cms-app";
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate("my-template", MyTemplate);
export default function IndexPage() {
  return (
    <>
      <title>{"MIKE KASEL | artist"}</title>
      <Home />
    </>
  );
}
