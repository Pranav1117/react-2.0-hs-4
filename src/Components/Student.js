import React from "react";
import NavBar from "../Utilities/NavBar";
import { Link } from "react-router-dom";
import "./style.css";

const Student = () => {
  return (
    <>
      <NavBar />
      <div className="page-header">Student Details</div>

      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>

        <tbody>
          <tr className="tr">
            <td>John</td>
            <td>24</td>
            <td>MERN</td>
            <td>OCT</td>
            <td>
              <Link>Edit</Link>
            </td>
          </tr>

          <tr className="tr">
            <td>Roman</td>
            <td>25</td>
            <td>MERN</td>
            <td>SEP</td>
            <td>
              <Link>Edit</Link>
            </td>
          </tr>

          <tr className="tr">
            <td>DOE</td>
            <td>26</td>
            <td>MERN</td>
            <td>SEP</td>
            <td>
              <Link>Edit</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Student;
