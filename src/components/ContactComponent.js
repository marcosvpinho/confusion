import React,{Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, Form, Errors, actions } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{

    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.props.postFeedBack(this.props.id,
            values.firstname,
            values.lastname,
            values.telnum,
            values.email,
            values.message, 
            values.agree);
    }

    render(){
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
                            <a role="button" class="btn btn-info" href="marcos.pinho5"><i class="fa fa-skype"></i>Skype</a>
                            <a role="button" class="btn btn-success" href="mailto:marcos.v.pinho@gmail.com"><i class="fa fa-envelope-o"></i>Email</a> 
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name" className="form-control" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}/>
                                    <Errors className="text-danger" model=".firstname" show="touched" messages={{
                                        required: 'required', 
                                        minLength:'Must be greater than 2 characers',
                                        maxLength: 'Must be 15 characters or less'}}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" className="form-control"
                                    id="lastname" name="lastname" placeholder="Last Name" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}/>
                                    <Errors className="text-danger" model=".lastname" show="touched" messages={{
                                        required: 'required', 
                                        minLength:'Must be greater than 2 characers',
                                        maxLength: 'Must be 15 characters or less'}}/>
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" className="form-control"
                                    id="telnum" name="telnum" placeholder="Tel. Number" validators={{required, minLength: minLength(3), maxLength: maxLength(15), isNumber}} />
                                    <Errors className="text-danger" model=".telnum" show="touched" messages={{
                                        required: 'required', 
                                        minLength:'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                        isNumber: 'Must be a number'}}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" className="form-control" type="email" 
                                    id="email" name="email" placeholder="Email" validators={{required, validEmail}}/>
                                    <Errors className="text-danger" model=".email" show="touched" messages={{
                                        required: 'required', 
                                        validEmail: 'Invalid Email Address'}}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" className="form-check-input" name="agree" /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contactType" className="form-control" name="contactType">
                                        <option> Tel.</option>
                                        <option> Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" className="form-control" id="message" name="message" rows="12"/>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                        
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;