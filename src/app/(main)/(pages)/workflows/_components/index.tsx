import React from "react";
import Workflow from "./workflow";

const Workflows = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow
          description="Creating a test workflow"
          name="Automation workflow"
          id="user21312312"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
