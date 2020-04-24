import React from "react"
import { Modal, ModalBody, ModalHeader} from "reactstrap"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import ProductList from "./product/ProductList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
import EmployeeForm from "./employee/EmployeeForm"


export default () => (
    <>
        <h2>Kandy Korner</h2>

        <LocationProvider>
            <LocationList />
        </LocationProvider>
        
        <ProductProvider>
            <ProductTypeProvider>
                <ProductList />
            </ProductTypeProvider>
        </ProductProvider>
    
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Admit an Animal
            </ModalHeader>
            <ModalBody>
                <EmployeeForm toggle={toggle}/>
            </ModalBody>
        </Modal>


    </>
)