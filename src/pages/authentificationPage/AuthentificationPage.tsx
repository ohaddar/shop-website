import React from "react";
import InputAuth from "../../components/inputAuth/InputAuth";
import InputCreateAcc from "../../components/inputCreateAcc/InputCreateAcc";

const AuthentificationPage: React.FC = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <InputCreateAcc />
        </div>
        <div className="col-md-6">
          <InputAuth />
        </div>
      </div>
    </div>
  );
};

export default AuthentificationPage;
