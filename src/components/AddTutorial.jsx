

const AddTutorial = () => {
  return (
    <div className="container text-center mt-4">
    <h1 className="display-6 text-danger">Add Your Tutorial</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="title" class="form-label">
          Title
        </label>
        <input
          type="email"
          class="form-control"
          id="title"
          // value={title}
        />
      </div>
      <div class="mb-3">
        <label htmlFor="desc" class="form-label">
          Description
        </label>
        <input
          type="password"
          class="form-control"
          id="desc"
          //   value={desc}
        />
      </div>

      <button type="submit" class="btn btn-danger mb-4">
        Submit
      </button>
    </form>
    
  </div>

  )}
export default AddTutorial