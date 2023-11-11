import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { faker } from "@faker-js/faker";

const rows = Array.from({ length: 100 }).map(() => ({
  image: faker.image.urlPicsumPhotos({
    height: 90,
    width: 320,
  }),
  name: faker.commerce.productName(),
  stock: faker.number.int({ min: 0, max: 100 }),
}));

const Image = ({ value }: { value: string }) => (
  <img src={value} />
);

const InventoryManagement = () => {
  return (
    <div style={{ height: "100%" }}>
      <h1 style={{ marginBottom: 10 }}>Inventory Management</h1>
      <section
        className="ag-theme-alpine"
        style={{ height: "85%", width: "100%" }}
      >
        {/* List view of all products with current inventory status, with options to sort, filter and search products, funtionality to update inventory levels */}
        <AgGridReact
          columnDefs={[
            {
              headerName: "Image",
              field: "image",
              cellRenderer: Image,
            },
            {
              headerName: "Name",
              field: "name",
              filter: true,
              sortable: true,
            },
            {
              headerName: "Stock",
              field: "stock",
              filter: true,
              sortable: true,
            },
          ]}
          rowData={rows}
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        />
      </section>
      <section>
        {/* Low inventory alerts and forecasting to indicate when restocking is necessary */}
      </section>
    </div>
  );
};

export default InventoryManagement;
