import React from "react";

const Startup = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return <div>page</div>;
};

export default Startup;
