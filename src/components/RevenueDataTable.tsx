import { AgGridReact } from "ag-grid-react";

const revenueData = [
  {
    orderID: 1001,
    customerID: "C1001",
    productID: "P001",
    productName: "Laptop",
    quantity: 2,
    unitPrice: 800,
    totalPrice: 1600,
    discounts: 50,
    tax: 120,
    shippingFee: 20,
    totalOrderAmount: 1750,
    paymentMethod: "Credit Card",
    transactionStatus: "Completed",
  },
  {
    orderID: 1002,
    customerID: "C1002",
    productID: "P002",
    productName: "Smartphone",
    quantity: 1,
    unitPrice: 600,
    totalPrice: 600,
    discounts: 25,
    tax: 60,
    shippingFee: 15,
    totalOrderAmount: 670,
    paymentMethod: "PayPal",
    transactionStatus: "Completed",
  },
  {
    orderID: 1003,
    customerID: "C1003",
    productID: "P003",
    productName: "Wireless Headphones",
    quantity: 3,
    unitPrice: 100,
    totalPrice: 300,
    discounts: 10,
    tax: 15,
    shippingFee: 10,
    totalOrderAmount: 315,
    paymentMethod: "Debit Card",
    transactionStatus: "Pending",
  },
  {
    orderID: 1004,
    customerID: "C1004",
    productID: "P004",
    productName: "Smart Watch",
    quantity: 1,
    unitPrice: 150,
    totalPrice: 150,
    discounts: 5,
    tax: 12,
    shippingFee: 8,
    totalOrderAmount: 155,
    paymentMethod: "Credit Card",
    transactionStatus: "Completed",
  },
  // Add more entries as needed
];

const RevenueDataTable = () => {
  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        columnDefs={[
          { field: "orderID", headerName: "orderID", filter: true },
          { field: "customerID", headerName: "customerID", filter: true },
          { field: "productID", headerName: "productID", filter: true },
          { field: "productName", headerName: "productName", filter: true },
          {
            field: "quantity",
            headerName: "quantity",
            filter: true,
            sortable: true,
          },
          {
            field: "unitPrice",
            headerName: "unitPrice",
            filter: true,
            sortable: true,
          },
          {
            field: "totalPrice",
            headerName: "totalPrice",
            filter: true,
            sortable: true,
          },
          {
            field: "discounts",
            headerName: "discounts",
            filter: true,
            sortable: true,
          },
          { field: "tax", headerName: "tax", filter: true, sortable: true },
          { field: "shippingFee", headerName: "shippingFee", filter: true },
          {
            field: "totalOrderAmount",
            headerName: "totalOrderAmount",
            filter: true,
            sortable: true,
          },
          { field: "paymentMethod", headerName: "paymentMethod", filter: true },
          {
            field: "transactionStatus",
            headerName: "transactionStatus",
            filter: true,
          },
        ]}
        rowData={revenueData}
        animateRows={true}
      />
    </div>
  );
};

export default RevenueDataTable;
