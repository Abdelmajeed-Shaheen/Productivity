import React from "react";

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Symbol</th>
          <th scope="col">Use</th>
          <th scope="col">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">#project Name</th>
          <td>
            Group a task into a project. If the # is used at the very beginning,
            it turns the entire Task into a project. If the # is used anywhere
            else, it adds the Task to the project grouping
          </td>
          <td>#Productivity App. Write project brief #Productivity App</td>
        </tr>
        <tr>
          <th scope="row">x</th>
          <td>At the beginning of the Task, it means the Task is completed</td>
          <td>x Buy domain</td>
        </tr>
        <tr>
          <th scope="row">~</th>
          <td>Canceled task</td>
          <td>~ Send proposal to client x</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
