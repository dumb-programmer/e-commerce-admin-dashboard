import { AgGridReact } from "ag-grid-react";
import useInventoryDataContext from "../hooks/useInventoryDataContext";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Image = ({ value }: { value: string }) => (
  <img
    src={value}
    height={"100%"}
    width={"100%"}
    style={{ objectFit: "cover" }}
  />
);

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
              headerName: "Description",
              field: "description",
              filter: true,
            },
            {
              headerName: "Stock",
              field: "stock",
              filter: true,
              editable: true,
              sortable: true,
            },
            {
              headerName: "Price",
              field: "price",
              filter: true,
              sortable: true,
            },
          ]}
          rowHeight={200}
          getRowClass={({ data }) => {
            return (data?.stock && data?.stock < 40 && "highlight-red") || "";
          }}
          onCellValueChanged={(e) => {
            if (inventoryContext?.setInventory) {
              inventoryContext?.setInventory((inventory) => {
                const newInventory = [];
                for (const inventoryItem of inventory) {
                  if (inventoryItem.id === e.data.id) {
                    newInventory.push(e.data);
                  } else {
                    newInventory.push(inventoryItem);
                  }
                }
                return newInventory;
              });
            }
          }}
          rowData={inventoryContext?.inventory}
          animateRows={true}
        />
      </section>
      <section>
        {/* Low inventory alerts and forecasting to indicate when restocking is necessary */}
      </section>
    </div>
  );
};

export default InventoryManagement;
