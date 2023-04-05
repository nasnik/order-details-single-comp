import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderDetails = () => {
    const newObj = {
        "deliveryAddress": {
            "street": "226 Daniel Cove",
            "city": "North Beth",
            "state": "VT",
            "zip": "91204"
        },
        "_id": "642a2e2d96c5157f84550443",
        "user": {
            "address": {
                "street": "226 Daniel Cove",
                "city": "North Beth",
                "state": "VT",
                "zip": "91204"
            },
            "ratedRestaurants": [],
            "_id": "642a2e2c96c5157f8455043d",
            "name": "Rachael Kovacek",
            "email": "Neil83@gmail.com",
            "password": "$2b$10$0WHrFM/Ndsez3JYhfrZ.Le7GPMCOgifPF297h6lRyrvZG7DkenxVK",
            "phone": "1-389-983-2267 x8985",
            "role": "customer",
            "cart": [],
            "registeredAt": "2023-04-03T01:38:52.754Z",
            "__v": 0
        },
        "items": [
            {
                "dish": null,
                "quantity": 3,
                "restaurant": {
                    "description": "",
                    "_id": "642a2e194aae82e284f3431d",
                    "name": "Paucek - Lindgren",
                    "address": {
                        "street": "2786 Jovany Point",
                        "city": "Baileyfort",
                        "state": "FL",
                        "zip": "91961",
                        "_id": "642a2e194aae82e284f3431e"
                    },
                    "contactInfo": {
                        "phone": "(829) 792-4109",
                        "email": "Jovani_Hauck87@hotmail.com",
                        "_id": "642a2e194aae82e284f3431f"
                    },
                    "cuisine": "Chinese",
                    "rating": 1,
                    "dishes": [
                        {
                            "name": "e-services Personal",
                            "description": "Quas ducimus voluptatibus perspiciatis sint sint non doloremque.",
                            "category": "Grill",
                            "price": 23,
                            "image": "https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "SSL",
                                "Territories",
                                "parsing",
                                "Optimization",
                                "Handcrafted"
                            ],
                            "allergens": [
                                "Courts"
                            ],
                            "_id": "642a2e194aae82e284f34317"
                        },
                        {
                            "name": "seamless convergence",
                            "description": "Qui iure accusantium dolore nemo harum doloremque maiores.",
                            "category": "Main Course",
                            "price": 24,
                            "image": "https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "global",
                                "capacitor",
                                "Granite",
                                "override",
                                "blue",
                                "program",
                                "Lead",
                                "Mouse"
                            ],
                            "allergens": [
                                "RSS",
                                "utilisation"
                            ],
                            "_id": "642a2e194aae82e284f34318"
                        },
                        {
                            "name": "transmitter Games",
                            "description": "Commodi placeat aspernatur odit eos modi dolorum.",
                            "category": "Soup",
                            "price": 21,
                            "image": "https://images.pexels.com/photos/772518/pexels-photo-772518.png?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "auxiliary",
                                "Dakota",
                                "Baby",
                                "Glen",
                                "Intranet",
                                "CFP",
                                "pink"
                            ],
                            "allergens": [
                                "encompassing"
                            ],
                            "_id": "642a2e194aae82e284f34319"
                        },
                        {
                            "name": "back-end Unbranded",
                            "description": "Dicta vero adipisci odio sapiente deserunt sunt maiores sed.",
                            "category": "Dessert",
                            "price": 13,
                            "image": "https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "Jewelery",
                                "Money",
                                "Designer",
                                "lime"
                            ],
                            "allergens": [],
                            "_id": "642a2e194aae82e284f3431a"
                        },
                        {
                            "name": "Ergonomic Compatible",
                            "description": "Reprehenderit id recusandae esse iusto inventore omnis eos sapiente aperiam.",
                            "category": "Drink",
                            "price": 15,
                            "image": "https://images.pexels.com/photos/983587/pexels-photo-983587.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "synthesizing",
                                "virtual",
                                "paradigms"
                            ],
                            "allergens": [],
                            "_id": "642a2e194aae82e284f3431b"
                        },
                        {
                            "name": "Cheese USB",
                            "description": "Et saepe dolorem ex repellat nesciunt.",
                            "category": "Grill",
                            "price": 19,
                            "image": "https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "e-business",
                                "panel",
                                "transmitting",
                                "synergies",
                                "Borders"
                            ],
                            "allergens": [
                                "Mandatory",
                                "wireless"
                            ],
                            "_id": "642a2e194aae82e284f3431c"
                        }
                    ],
                    "slug": "paucek-lindgren",
                    "workingDays": [
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Tuesday",
                        "Saturday",
                        "Sunday"
                    ],
                    "workingHours": {
                        "from": "07:00",
                        "to": "19:00",
                        "_id": "642a2e194aae82e284f34326"
                    },
                    "logo": "https://images.pexels.com/photos/4475780/pexels-photo-4475780.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                    "headerImage": "https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&h=400&w=720",
                    "createdAt": "2023-04-03T01:38:33.013Z",
                    "__v": 0,
                    "ratings": []
                },
                "_id": "642a2e2d96c5157f84550444"
            },
            {
                "dish": null,
                "quantity": 2,
                "restaurant": {
                    "description": "",
                    "_id": "642a2e194aae82e284f3431d",
                    "name": "Paucek - Lindgren",
                    "address": {
                        "street": "2786 Jovany Point",
                        "city": "Baileyfort",
                        "state": "FL",
                        "zip": "91961",
                        "_id": "642a2e194aae82e284f3431e"
                    },
                    "contactInfo": {
                        "phone": "(829) 792-4109",
                        "email": "Jovani_Hauck87@hotmail.com",
                        "_id": "642a2e194aae82e284f3431f"
                    },
                    "cuisine": "Chinese",
                    "rating": 1,
                    "dishes": [
                        {
                            "name": "e-services Personal",
                            "description": "Quas ducimus voluptatibus perspiciatis sint sint non doloremque.",
                            "category": "Grill",
                            "price": 23,
                            "image": "https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "SSL",
                                "Territories",
                                "parsing",
                                "Optimization",
                                "Handcrafted"
                            ],
                            "allergens": [
                                "Courts"
                            ],
                            "_id": "642a2e194aae82e284f34317"
                        },
                        {
                            "name": "seamless convergence",
                            "description": "Qui iure accusantium dolore nemo harum doloremque maiores.",
                            "category": "Main Course",
                            "price": 24,
                            "image": "https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "global",
                                "capacitor",
                                "Granite",
                                "override",
                                "blue",
                                "program",
                                "Lead",
                                "Mouse"
                            ],
                            "allergens": [
                                "RSS",
                                "utilisation"
                            ],
                            "_id": "642a2e194aae82e284f34318"
                        },
                        {
                            "name": "transmitter Games",
                            "description": "Commodi placeat aspernatur odit eos modi dolorum.",
                            "category": "Soup",
                            "price": 21,
                            "image": "https://images.pexels.com/photos/772518/pexels-photo-772518.png?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "auxiliary",
                                "Dakota",
                                "Baby",
                                "Glen",
                                "Intranet",
                                "CFP",
                                "pink"
                            ],
                            "allergens": [
                                "encompassing"
                            ],
                            "_id": "642a2e194aae82e284f34319"
                        },
                        {
                            "name": "back-end Unbranded",
                            "description": "Dicta vero adipisci odio sapiente deserunt sunt maiores sed.",
                            "category": "Dessert",
                            "price": 13,
                            "image": "https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "Jewelery",
                                "Money",
                                "Designer",
                                "lime"
                            ],
                            "allergens": [],
                            "_id": "642a2e194aae82e284f3431a"
                        },
                        {
                            "name": "Ergonomic Compatible",
                            "description": "Reprehenderit id recusandae esse iusto inventore omnis eos sapiente aperiam.",
                            "category": "Drink",
                            "price": 15,
                            "image": "https://images.pexels.com/photos/983587/pexels-photo-983587.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "synthesizing",
                                "virtual",
                                "paradigms"
                            ],
                            "allergens": [],
                            "_id": "642a2e194aae82e284f3431b"
                        },
                        {
                            "name": "Cheese USB",
                            "description": "Et saepe dolorem ex repellat nesciunt.",
                            "category": "Grill",
                            "price": 19,
                            "image": "https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                            "specialOffer": "none",
                            "ingredients": [
                                "e-business",
                                "panel",
                                "transmitting",
                                "synergies",
                                "Borders"
                            ],
                            "allergens": [
                                "Mandatory",
                                "wireless"
                            ],
                            "_id": "642a2e194aae82e284f3431c"
                        }
                    ],
                    "slug": "paucek-lindgren",
                    "workingDays": [
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Tuesday",
                        "Saturday",
                        "Sunday"
                    ],
                    "workingHours": {
                        "from": "07:00",
                        "to": "19:00",
                        "_id": "642a2e194aae82e284f34326"
                    },
                    "logo": "https://images.pexels.com/photos/4475780/pexels-photo-4475780.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
                    "headerImage": "https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&h=400&w=720",
                    "createdAt": "2023-04-03T01:38:33.013Z",
                    "__v": 0,
                    "ratings": []
                },
                "_id": "642a2e2d96c5157f84550445"
            }
        ],
        "totalPrice": 30,
        "status": "pending",
        "orderDate": "2023-04-03T01:38:53.229Z",
        "__v": 0
    }
    let orderId = '642a2e2d96c5157f84550443';
    let userId = '642a2e2c96c5157f8455043d';

    const[order, setOrder] = useState(newObj)

    const getOrder = () => {
        axios.get(`https://deliveryapp-sever.herokuapp.com/user/${userId}/orders/${orderId}`)
            .then(res=>{
  //                console.log(res.data)
                setOrder(res.data)}
            ).catch(err =>
            console.log(err)
        )
    }
    useEffect(() => {
        getOrder()
    }, [])


    return (
        <div className="App">
            <h2>Order Details</h2>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Dish</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                {order.items.map(item=>
                    item.restaurant.dishes.map((el,index)=>
                        <tbody>

                        <tr key={el.index}>
                            <td>{item.restaurant.name}</td>
                            <td>{el.name}</td>
                            <td>{el.price}</td>
                        </tr>
                        </tbody>
                    ))
                }
                <tfoot>
                <tr>
                    <td><b>Total Price:</b></td>
                    <td><b>${order.totalPrice}</b></td>
                </tr>
                </tfoot>
            </table>
            <h5>Shipping Details</h5>
            <p>Delivery address: {`${order.deliveryAddress.street}, ${order.deliveryAddress.city}, 
            ${order.deliveryAddress.state}, ${order.deliveryAddress.zip}`}</p>
            <h5>Payment Details</h5>
            <p>Master Card : *7890</p>

        </div>
    );
};

export default OrderDetails;