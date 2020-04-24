import React, { useState } from "react"
import { Modal, ModalBody, ModalHeader, Button} from "reactstrap"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import ProductList from "./product/ProductList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
import EmployeeForm from "./employee/EmployeeForm"
import { EmployeeProvider } from "./employee/EmployeeProvider"




export default () => {
    const [modal, setModal] = useState(true)
    const toggle = () => setModal(!modal)

    return (



    <>
        <h2>Kandy Korner</h2>

        
        <ProductProvider>
            <ProductTypeProvider>
                <ProductList />
            </ProductTypeProvider>
        </ProductProvider>
    

        <LocationProvider>
            <EmployeeProvider>
                <LocationList />

                <Button onClick={toggle}>Record an Employee</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        Record an Employee
                    </ModalHeader>
                    <ModalBody>
                        <EmployeeForm toggle={toggle}/>
                    </ModalBody>
                </Modal>

            </EmployeeProvider>
        </LocationProvider>
        

    </>
)
}