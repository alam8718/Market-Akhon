import React from "react";

function Fotter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <h1 className="text-white text-center">{`Copyright © E-Commerce Shop ${year}. All rights reserved`}</h1>
      </div>
    </footer>
  );
}

export default Fotter;
