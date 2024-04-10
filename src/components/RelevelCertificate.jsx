
import { Fragment } from 'react';

const RelevelCertificate = () => {
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="col-span-1">
          <div className="card compact bg-base-200 shadow">
            <div className="card-body">
              <div className="mx-3 flex items-center justify-between mb-2">
                <h5 className="card-title">
                  <span className="text-accent opacity-80">Frontend Development certificate</span>
                </h5>
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-1  justify-center">
                 
                  <img className="mx-auto w-[900px] h-96" src="https://i.ibb.co/cJp9NfQ/sonpal-4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RelevelCertificate;

