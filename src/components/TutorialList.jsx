
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
            <td> 
              <FaEdit className="me-3 text-warning" size={22} />
              <AiFillDelete className="text-danger" size={22} />
            </td>
          </tr>



        </tbody>
      </table>
    </div>
  )
}

export default TutorialList