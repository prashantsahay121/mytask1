import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Main() {
  return (
    <div className="flex justify-center mr-24 m-5 ">
      <div className=" w-3/6 h-96 justify-between  justify-items-start text-white text-5xl pl-4">
        <p>
          Searching for <b> Augmented </b>
          <p>
            {" "}
            <b> Development </b> Teams to{" "}
          </p>
          <p>steer your product towards triumph?" </p>
          <div className="w-5/6 h-96 ml-24  mt-11 pl-2 text-white">
            <div className="text-xs flex justify-between font-semibold ">
              <div>
                <p className="text-4xl">50+</p> <br /> clients
              </div>
              <div>
                {" "}
                <p className="text-4xl">80+</p> <br /> Project Successfully{" "}
                <br /> Completed
              </div>
              <div>
                <p className="text-4xl">60%</p>
                <br /> of the partners converted into long <br /> term
                engagements partners.
              </div>
            </div>
          </div>
        </p>
      </div>
      <div className=" w-5/12 h-96 bg-gray-300 text-black flex flex-col   rounded-lg p-4">
        <div className="justify-items-start mt-4  ">
          <p className="text-2xl  text-black font-semibold ">
            Fill out the form
          </p>
          <p> Our team will touch base with you in 24 hours</p>
          <div className=" flex-col w-full  flex justify-between gap-x-16 lg:flex-row">
            <form action="">
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="Full Name*"
                  autoComplete="of"
                  className="px-2 py-3 text-xl font-light outline-none w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit"
                />

                <input
                  type="text"
                  placeholder="Email Id*"
                  autoComplete="of"
                  className="px-2 py-3 ml-28 text-xl font-light outline-none w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit"
                />
              </div>
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="Country"
                  autoComplete="of"
                  className="px-2 py-3 text-xl font-light outline-none w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit"
                />

                <input
                  type="text"
                  placeholder="Contact number"
                  autoComplete="of"
                  className="px-2 py-3 ml-28 text-xl font-light outline-none w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit"
                />
              </div>

              <input
                type="text"
                placeholder="Tell us your Requirments"
                autoComplete="of"
                className="px-2 py-3 text-xl font-light outline-none w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit"
              />
            </form>
          </div>
        </div>
        <div className=" mt-10 pl-4 flex justify-start">
          <button className="w-20 h-9 text-base p-1 bg-black text-white rounded-2xl hover:">
            submit
          </button>
          <button className="w-10 h-9 p-1 bg-black rounded-3xl ml-5 ">
            <ArrowForwardIcon className="text-white  " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
