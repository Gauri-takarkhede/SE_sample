import React from "react";

function Allocation() {
  const dummyData = [
    {
      mis: 123456144,
      preferences: {
        preference1: "Mathematics",
        preference2: "Physics",
        preference3: "Chemistry",
      },
    },
    {
      mis: 654321144,
      preferences: {
        preference1: "Biology",
        preference2: "Computer Science",
        preference3: "History",
      },
    },
    {
      mis: 654321144,
      preferences: {
        preference1: "Computer Science",
        preference2: "Biology",
        preference3: "History",
      },
    },
    {
      mis: 654321144,
      preferences: {
        preference1: "Biology",
        preference2: "Computer Science",
        preference3: "History",
      },
    },
    {
      mis: 654321144,
      preferences: {
        preference1: "Computer Science",
        preference2: "History",
        preference3: "Biology",
      },
    },
    {
      mis: 654321144,
      preferences: {
        preference1: "Biology",
        preference2: "History",
        preference3: "Computer Science",
      },
    },
    {
      mis: 654321144,
      preferences: {
        preference1: "Computer Science",
        preference2: "Biology",
        preference3: "History",
      },
    },
    {
      mis: 654321144,
      preferences: {
        preference1: "Biology",
        preference2: "History",
        preference3: "Computer Science",
      },
    },
  ];
  return (
    <div className="relative overflow-x-auto mx-4">
      <h1 className="text-center py-8 font-bold">Student Preferences</h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-scroll">
        <thead className="text-xs text-gray-300 uppercase bg-custom-color dark:bg-gray-700 dark:text-white-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              MIS
            </th>
            <th scope="col" className="px-6 py-3">
              Preference 1
            </th>
            <th scope="col" className="px-6 py-3">
              Preference 2
            </th>
            <th scope="col" className="px-6 py-3">
              Preference 3
            </th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data, index) => (
            <tr
              key={index}
              className={`bg-white border-b dark:bg-gray-800 ${
                index % 2 === 0 ? "" : "dark:border-gray-700"
              }`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.mis}
              </th>
              <td className="px-6 py-4">{data.preferences.preference1}</td>
              <td className="px-6 py-4">{data.preferences.preference2}</td>
              <td className="px-6 py-4">{data.preferences.preference3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Allocation;
