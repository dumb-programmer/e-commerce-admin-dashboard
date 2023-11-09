const RegisterProduct = () => {
  return (
    <div>
      <h1>Register Product</h1>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description:</label>
          <textarea id="description"></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" />
        </div>
        <div className="form-control">
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" />
        </div>
        <div className="form-control">
          <label htmlFor="Images">Images:</label>
          <input type="file" id="Images" multiple/>
        </div>
        <div className="form-control">
          <button className="btn primary-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterProduct;
