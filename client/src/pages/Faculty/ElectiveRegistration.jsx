import React, { useState } from "react";
import "../../css/Allocationform.css";

const ElectiveRegistration = () => {
  const [numSubjects, setNumSubjects] = useState(1);
  const [numCategories, setNumCategories] = useState(1);

  const [subjects, setSubjects] = useState([
    { name: "", code: "", credits: "" },
  ]);
  const [categories, setCategories] = useState([
    { name: "", code: "", credits: "", electives: [{ name: "" }] },
  ]);

  const handleNumSubjectsChange = (e) => {
    const count = parseInt(e.target.value);
    setNumSubjects(count);
    const newElectives = Array.from({ length: count }, () => ({
      name: "",
      code: "",
      credits: "",
    }));
    setSubjects(newElectives);
  };
  const handleNumCategoriesChange = (e) => {
    const count = parseInt(e.target.value);
    setNumCategories(count);
    const newCategories = Array.from({ length: count }, () => ({
      name: "",
      code: "",
      credits: "",
      electives: [{ name: "" }],
    }));
    setCategories(newCategories);
  };

  const handleCategoryChange = (e, index, field) => {
    const newCategories = [...categories];
    newCategories[index][field] = e.target.value;
    setCategories(newCategories);
  };

  const handleNumElectivesChange = (e, index) => {
    const count = parseInt(e.target.value);
    const newCategories = [...categories];
    newCategories[index].electives = Array.from({ length: count }, () => ({
      name: "",
    }));
    setCategories(newCategories);
  };

  const handleSubjectChange = (e, index, field) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = e.target.value;
    setSubjects(newSubjects);
  };

  const handleElectiveChange = (e, categoryIndex, electiveIndex) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].electives[electiveIndex].name = e.target.value;
    setCategories(newCategories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Categories:", categories);
  };

  return (
    <div className="electivesformcontainer">
      <h1 className="mb-8 text-3xl text-center">
        <b>Subject Credit Registration Form</b>
      </h1>

      <div className="form-container p-8">
        <i className="text-red-600 ">
          *Note: Form is divided into 2 sections : Subjects & Electives
        </i>
        <form onSubmit={handleSubmit}>
          <h1 className="p-2">
            <b> Section 1 : Subjects</b>
          </h1>
          <hr className="py-2" />
          <div className="form-group">
            <label htmlFor="numSubjects">Number of Subjects</label>
            <input
              type="number"
              id="numSubjects"
              min="1"
              value={numSubjects}
              onChange={handleNumSubjectsChange}
              required
            />
          </div>
          {subjects.map((subject, index) => (
            <div key={index}>
              <div className="form-group">
                <label htmlFor={`electiveName${index}`}>
                  <b> Subject {index + 1} Name</b>
                </label>
                <input
                  type="text"
                  id={`electiveName${index}`}
                  value={subject.name}
                  onChange={(e) => handleSubjectChange(e, index, "name")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`electiveCode${index}`}>
                  Subject {index + 1} Code
                </label>
                <input
                  type="text"
                  id={`electiveCode${index}`}
                  value={subject.code}
                  onChange={(e) => handleSubjectChange(e, index, "code")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`electiveCredits${index}`}>
                  Subject {index + 1} Credits
                </label>
                <input
                  type="text"
                  id={`electiveCredits${index}`}
                  value={subject.credits}
                  onChange={(e) => handleSubjectChange(e, index, "credits")}
                  required
                />
              </div>
            </div>
          ))}
          <h1 className="p-2">
            <b> Section 2 : Electives</b>
          </h1>
          <hr className="py-2" />
          <div className="form-group">
            <label htmlFor="numCategories">Number of Categories</label>
            <input
              type="number"
              id="numCategories"
              min="1"
              value={numCategories}
              onChange={handleNumCategoriesChange}
              required
            />
          </div>
          {categories.map((category, index) => (
            <div key={index}>
              <div className="form-group">
                <label htmlFor={`categoryName${index}`}>
                  <b> Category {index + 1} Name </b>
                </label>
                <input
                  type="text"
                  id={`categoryName${index}`}
                  value={category.name}
                  onChange={(e) => handleCategoryChange(e, index, "name")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`categoryCode${index}`}>
                  Category {index + 1} Code
                </label>
                <input
                  type="text"
                  id={`categoryCode${index}`}
                  value={category.code}
                  onChange={(e) => handleCategoryChange(e, index, "code")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`categoryCredits${index}`}>
                  Category {index + 1} Credits
                </label>
                <input
                  type="text"
                  id={`categoryCredits${index}`}
                  value={category.credits}
                  onChange={(e) => handleCategoryChange(e, index, "credits")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`numElectives${index}`}>
                  Category {index + 1} : Number of Electives
                </label>
                <input
                  type="number"
                  id={`numElectives${index}`}
                  min="1"
                  value={category.electives.length}
                  onChange={(e) => handleNumElectivesChange(e, index)}
                  required
                />
                {category.electives.map((elective, electiveIndex) => (
                  <div key={electiveIndex}>
                    <div className="form-group">
                      <label htmlFor={`electiveName${index}_${electiveIndex}`}>
                        Elective {electiveIndex + 1} Name
                      </label>
                      <input
                        type="text"
                        id={`electiveName${index}_${electiveIndex}`}
                        value={elective.name}
                        onChange={(e) =>
                          handleElectiveChange(e, index, electiveIndex)
                        }
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ElectiveRegistration;

// import React, { useState } from "react";
// import "../../css/Allocationform.css";

// const ElectiveRegistration = () => {
//   const [purpose, setPurpose] = useState("");
//   const [credits, setCredits] = useState("");
//   const [numSubjects, setNumSubjects] = useState(1);
//   const [numCategories, setNumCategories] = useState(1);
//   const [numElective, setNumElective] = useState(1);

//   const [subjects, setSubjects] = useState([
//     { name: "", code: "", credits: "" },
//   ]);
//   const [electivesCateory, setElectivesCategory] = useState([
//     {
//       name: "",
//       code: "",
//       credits: "",
//       number: "",
//     },
//   ]);
//   const [elective, setElective] = useState([{ name: "" }]);

//   const handleNumSubjectsChange = (e) => {
//     const count = parseInt(e.target.value);
//     setNumSubjects(count);
//     const newElectives = Array.from({ length: count }, () => ({
//       name: "",
//       code: "",
//       credits: "",
//     }));
//     setSubjects(newElectives);
//   };
//   const handleNumCategoriesChange = (e) => {
//     const count = parseInt(e.target.value);
//     setNumCategories(count);
//     const newElectives = Array.from({ length: count }, () => ({
//       name: "",
//       code: "",
//       credits: "",
//       number: "",
//     }));
//     setElectivesCategory(newElectives);
//   };
//   const handleNumElectiveChange = (e) => {
//     const count = parseInt(e.target.value);
//     setNumElective(count);
//     const newElectives = Array.from({ length: count }, () => ({
//       name: "",
//     }));
//     setElective(newElectives);
//   };

//   const handleSubjectChange = (e, index, field) => {
//     const newSubjects = [...subjects];
//     newSubjects[index][field] = e.target.value;
//     setSubjects(newSubjects);
//   };

//   const handleElectiveCategoryChange = (e, index, field) => {
//     const newElectiveCategories = [...electivesCategory];
//     newElectiveCategories[index][field] = e.target.value;
//     setElectivesCategory(newElectiveCategories);
//   };

//   const handleElectiveChange = (e, index, field) => {
//     const newElectives = [...elective];
//     newElectives[index][field] = e.target.value;
//     setElective(newElectives);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Purpose:", purpose);
//     console.log("Credits:", credits);
//     console.log("Electives:", electives);
//   };

//   return (
//     <div className="form-container p-8">
//       <h1 className="mb-8">
//         <b>Subject Credit Registration Form</b>
//       </h1>
//       <i className="text-red-600">
//         *Note: Form is divided into 2 sections : Subjects & Electives
//       </i>
//       <form onSubmit={handleSubmit}>
//         <h1 className="p-2">Section 1 : Subjects</h1>
//         <hr className="py-2" />

//         <div className="form-group">
//           <label htmlFor="numSubjects">Number of Subjects</label>
//           <input
//             type="number"
//             id="numSubjects"
//             min="1"
//             value={numSubjects}
//             onChange={handleNumSubjectsChange}
//             required
//           />
//         </div>
//         {subjects.map((subject, index) => (
//           <div key={index}>
//             <div className="form-group">
//               <label htmlFor={`electiveName${index}`}>
//                 Subject {index + 1} Name
//               </label>
//               <input
//                 type="text"
//                 id={`electiveName${index}`}
//                 value={subject.name}
//                 onChange={(e) => handleSubjectChange(e, index, "name")}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`electiveCode${index}`}>
//                 Subject {index + 1} Code
//               </label>
//               <input
//                 type="text"
//                 id={`electiveCode${index}`}
//                 value={subject.code}
//                 onChange={(e) => handleSubjectChange(e, index, "code")}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`electiveCredits${index}`}>
//                 Subject {index + 1} Credits
//               </label>
//               <input
//                 type="text"
//                 id={`electiveCredits${index}`}
//                 value={subject.credits}
//                 onChange={(e) => handleSubjectChange(e, index, "credits")}
//                 required
//               />
//             </div>
//           </div>
//         ))}
//         <h1 className="p-2">Section 2 : Electives</h1>
//         <hr className="py-2" />
//         <div className="form-group">
//           <label htmlFor="numCategories">Number of Categories</label>
//           <input
//             type="number"
//             id="numCategories"
//             min="1"
//             value={numCategories}
//             onChange={handleNumCategoriesChange}
//             required
//           />
//         </div>
//         {electivesCateory.map((subject, index) => (
//           <div key={index}>
//             <div className="form-group">
//               <label htmlFor={`categoryName${index}`}>
//                 Category {index + 1} Name
//               </label>
//               <input
//                 type="text"
//                 id={`categoryName${index}`}
//                 value={electivesCateory.name}
//                 onChange={(e) => handleElectiveCategoryChange(e, index, "name")}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`categoryCode${index}`}>
//                 Category {index + 1} Code
//               </label>
//               <input
//                 type="text"
//                 id={`categoryCode${index}`}
//                 value={electivesCateory.code}
//                 onChange={(e) => handleElectiveCategoryChange(e, index, "code")}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`categoryCredits${index}`}>
//                 Category {index + 1} Credits
//               </label>
//               <input
//                 type="text"
//                 id={`categoryCredits${index}`}
//                 value={electivesCateory.credits}
//                 onChange={(e) =>
//                   handleElectiveCategoryChange(e, index, "credits")
//                 }
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={numElective}>
//                 Category {index + 1} : Number of electives
//               </label>
//               <input
//                 type="number"
//                 id={numElective}
//                 min="1"
//                 value={numElective}
//                 onChange={(e) => handleNumElectiveChange(e, index, "credits")}
//                 required
//               />

//               {electivesCateory.map((elective, index) => (
//                 <div key={index}>
//                   <div className="form-group">
//                     <label htmlFor={`electiveName${index}`}>
//                       Sub {index + 1} Name
//                     </label>
//                     <input
//                       type="text"
//                       id={`electiveName${index}`}
//                       value={elective.name}
//                       onChange={(e) => handleElectiveChange(e, index, "name")}
//                       required
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button
//           className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ElectiveRegistration;
