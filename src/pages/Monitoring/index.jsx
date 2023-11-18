import React from "react";
import {
  CloseAccountModal,
  Sidebar,
  Table,
  initialTabs as tabs,
} from "../../components";
import { pendingData, completedData } from "../../data/mockData";
import { useState, useEffect } from "react";

const Monitoring = () => {
  const [triggerReasons, setTriggerReasons] = useState([]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isCloseAccountModalOpen, setIsCloseAccountModalOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (selectedTab.name === "Pending") {
      setData(pendingData);
    } else {
      setData(completedData);
    }
  }, [selectedTab]);

  useEffect(() => {
    handleFindTriggerReasons();
  }, [data]);

  const handleFilterDataBasedOnReason = (reason) => {
    if (!data) return;
    if (reason === "") return setData(data);
    if (selectedTab.name === "Pending") {
      const filteredData = pendingData.filter(
        (item) => item.triggerReason === reason
      );
      setData(filteredData);
    } else {
      const filteredData = completedData.filter(
        (item) => item.actionReason === reason
      );
      setData(filteredData);
    }
  };
  const handleToggleCloseAccount = () =>
    setIsCloseAccountModalOpen((prev) => !prev);

  const handleFindTriggerReasons = () => {
    if (!data) return;
    const triggerReasons = new Set();
    if (selectedTab.name === "Pending") {
      pendingData.forEach((item) => {
        triggerReasons.add(item.triggerReason);
      });
    } else {
      completedData.forEach((item) => {
        triggerReasons.add(item.actionReason);
      });
    }
    setTriggerReasons([...triggerReasons]);
  };
  return (
    <div className="flex">
      <Sidebar />
      <CloseAccountModal
        isOpen={isCloseAccountModalOpen}
        onClose={handleToggleCloseAccount}
      />
      <div className="pl-[20vw] pt-8">
        <h1 className="font-[500] text-2xl">Monitoring</h1>

        <div className="flex justify-between w-[75vw] pt-4 pb-0 border-b-2 border-[#e4e4e4]">
          <div>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  if (tab === selectedTab) return;
                  setSelectedTab(tab);
                }}
                //border-[#4643EE]
                className={`text-[14px]  font-[500] mt-2 px-4 pb-4   ${
                  selectedTab === tab
                    ? "text-[#4643EE] border-[#4643EE] border-b-2"
                    : "text-[#ADADAD]"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={handleToggleCloseAccount}
              className="flex text-[14px] bg-[#F6D8D8] text-[#D13B3B] font-bold rounded-md p-2 pr-4"
            >
              <img
                className="ml-2 mr-1 mt-[0.1rem]"
                src="./x-circle.png"
                alt=""
              />
              Close account
            </button>
          </div>
        </div>

        {selectedTab.name === "Pending" ? (
          <>
            <div className=" flex gap-2 w-[75vw] mt-10">
              <div className="flex relative">
                <img
                  className="absolute mt-[1rem] ml-4"
                  src="./search.png"
                  alt=""
                />
                <input
                  className="border border-[#ADADAD] text-[14px] font-[500] rounded-md w-[30vw] p-2 pl-10"
                  type="text"
                  name=""
                  placeholder="Search"
                  id=""
                />
              </div>

              <div className="p-2">
                <select
                  className="bg-[#F5F5F5] text-[#777676] text-[14px] font-[500] rounded-md p-[0.45rem]"
                  name="Trigger reason"
                  id="Trigger reason"
                  onChange={(e) => {
                    handleFilterDataBasedOnReason(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Trigger reason
                  </option>
                  {triggerReasons.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-2">
                <select
                  className="bg-[#F5F5F5] font-[500] text-[#777676] text-[14px] rounded-md p-[0.45rem]"
                  name="Risk level"
                  id="Risk level"
                >
                  <option value="" disabled selected>
                    Risk level
                  </option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            <Table data={data} />
          </>
        ) : (
          <>ok bye</>
        )}
      </div>
    </div>
  );
};

export { Monitoring };
