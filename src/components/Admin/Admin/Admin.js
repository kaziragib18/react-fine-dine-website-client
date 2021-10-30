import React from 'react';
import AddService from '../../AddService/AddService';
import ManageServices from '../../ManageServices/ManageServices';

const Admin = () => {
      return (
            <div>
                  <h2 className="text-danger pt-3">Admin Panel</h2>
                  <hr className="text-light" />
                  {/* <div className="col-md-6"> */}

                        <AddService></AddService>
                  <hr className="text-light" />

                        <ManageServices></ManageServices>
                  {/* </div> */}
            </div>
      );
};

export default Admin;