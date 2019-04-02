import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Contact(props){
    return(
        <div className="container">
            <div className="row">	
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr/>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information </h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        410, Rua Valdomiro Cunha<br/> 
                        Forquilhinhas, São José<br/>
                        <i className="fa fa-phone fa-lg"></i>:+554823343323<br/>
                        <i className="fa fa-fax fa-lg"></i>:+48999999999<br/>
                        <i className="fa fa-envelope fa-lg"></i>:<a href="mailto:marcos.v.pinho@gmail.com">marcos.v.pinho@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" class="btn btn-primary" href="tel:+554832470830"><i class="fa fa-phone"></i> Call</a>
                        <a role="button" class="btn btn-info"><i class="fa fa-skype"></i>Skype</a>
                        <a role="button" class="btn btn-success" href="mailto:marcos.v.pinho@gmail.com"><i class="fa fa-envelope-o"></i>Email</a> 
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;