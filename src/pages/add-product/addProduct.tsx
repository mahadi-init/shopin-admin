import { Button, Form } from "react-bootstrap";
import "../add-product/addProduct.css";
const addProduct = () => {
  return (
    <div className="body-bg">
      <div className="py-3">
        <div className="container ">add product</div>
        <Form className="container my-2">
          <div >
            <div className="row ">
              <div className="col-md-9 ">
                <div className="p-4 my-2  form-bg">
                  <h5 className="mx-3">General</h5>
                  <Form.Group className="mb-3 " controlId="">
                    <Form.Label>
                      Title <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="product title" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      type="text"
                      placeholder="product description"
                    />
                  </Form.Group>
                </div>

                <div className="p-3 my-4 form-bg">
                  <div className="row">
                    <div className="col-md-4 col-lg-3">
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>
                          Price <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="product title" />
                      </Form.Group>
                    </div>

                    <div className="col-md-4 col-lg-3">
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>
                          SKU <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="product title" />
                      </Form.Group>
                    </div>

                    <div className="col-md-4 col-lg-3">
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>
                          Quantity <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="product title" />
                      </Form.Group>
                    </div>

                    <div className="col-md-4 col-lg-3">
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Discount Percentage</Form.Label>
                        <Form.Control type="text" placeholder="product title" />
                      </Form.Group>
                    </div>
                  </div>
                </div>

                <div className="p-4 my-4 form-bg">
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Youtube Video id</Form.Label>
                        <Form.Control type="text" placeholder="product title" />
                      </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Start And End Date</Form.Label>
                        <Form.Control type="text" placeholder="product title" />
                      </Form.Group>
                    </div>
                  </div>
                </div>

                <div className="p-4 my-4 form-bg">
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group>
                        <Form.Label>Product Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div>

                    <div className="col-md-4">
                      <Form.Group>
                        <Form.Label>Brands</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div>

                    <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>
                          Unit <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="product unit" />
                      </Form.Group>
                    </div>
                  </div>
                </div>

                <div className="p-4 my-4 form-bg">
                  <div className="row">
                    <h4>Additional Information</h4>
                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>
                        Key <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="product unit" />
                    </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>
                        Value <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="product unit" />
                      
                    </Form.Group>
                    </div>
                  </div>
                  <Button>Add Field</Button>
                </div>

                <div className="p-4 my-4 form-bg">
                  <div className="row">
                    <h4>Product Variations</h4>
                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>
                        Color<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="Color name" />
                    </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>
                        Color Code <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="Color Code" />
                      
                    </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>
                        Sizes <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="enter sizes" />
                    </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>
                        Upload your image here <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="product unit" />
                    </Form.Group>
                    </div>
                  </div>

                  <Button>Add Field</Button>
                </div>

              </div>
              <div className="col-md-3">
                    <Form.Group className="p-4 my-2 form-bg" controlId="">
                      <Form.Label>
                       Products Tags <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="product unit" />
                    </Form.Group>     
              </div>
            </div>
          </div>

          <Button>Add Product</Button>
        </Form>
      </div>
    </div>
  );
};

export default addProduct;
