import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import useInventoryDataContext from "../hooks/useInventoryDataContext";

const Image = ({ value }: { value: string }) => <img src={value} />;

const InventoryManagement = () => {
  const inventoryContext = useInventoryDataContext();

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
          rowData={inventoryContext?.inventory}
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
