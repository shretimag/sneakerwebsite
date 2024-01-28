import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/auth-context";
import OrderCard from "./OrderCard";

let items = {
  _id: "65b5fb73cde73979c074d097",
  Name: "Siddharth Aggarwal",
  Address: "92/10 Rk Puram Delhi Road Meerit",
  Password: "$2a$12$Y/ur3/SQIwavMnet3zLoVeGN9utggyuScq4di02O8OJLK98Yys3wG",
  Number: "8650768103",
  Email: "aggarwalsiddharthwswdw49@gmail.com",
  Cart: [
    {
      _id: "65802743ace4c0f600d98fe5",
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      price: "160",
      __v: 0,
    },
  ],
  Orders: [
    {
      Items: [
        {
          _id: "65802743ace4c0f600d98fe5",
          name: "Nike React Infinity Run Flyknit",
          brand: "NIKE",
          gender: "MEN",
          category: "RUNNING",
          imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
          price: "160",
          __v: 0,
        },
      ],
      paymentId: "dwqdwq",
      orderId: "ewfw4gfw4",
      date: "dfe",
      address: "fwqfwq",
      number: "efqewfq",
      amount: "efewfe",
    },
    {
      Items: [
        {
          _id: "65802743ace4c0f600d98fe5",
          name: "Nike React Infinity Run Flyknit",
          brand: "NIKE",
          gender: "MEN",
          category: "RUNNING",
          imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
          price: "160",
          __v: 0,
        },
      ],
      paymentId: "dwqdwq",
      orderId: "ewfw4gfw4",
      date: "dfe",
      address: "fwqfwq",
      number: "efqewfq",
      amount: "efewfe",
    },
  ],
  __v: 1,
};

const Order = () => {
  const [orders, setOrders] = React.useState([]);
  let auth = useContext(AuthContext);

  // React.useEffect(() => {
  //   async function getOrder() {
  //     let response;
  //     try {
  //       response = await fetch(`http://localhost:5000/user/${auth.userId}`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: "Bearer " + auth.token,
  //         },
  //       });

  //       if (!response) {
  //         throw new Error("error");
  //       }

  //       if (!response.ok) {
  //         throw new Error("error");
  //       }

  //       let responseData = await response.json();
  //       setOrders(responseData);
  //       console.log(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getOrder();
  // }, 1);

  return (
    <>
      <OrderCard Items={items.Orders[0]} />
      <OrderCard Items={items.Orders[1]} />
    </>
  );
};

export default Order;
