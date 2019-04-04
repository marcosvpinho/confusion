import React,  {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media, Breadcrumb, BreadcrumbItem, Modal, Button, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
	
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

	function RenderDish({dish}) {
		if(dish){
			return (
				
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
				
			);
			}else{
				return(
					<div></div>
				);
			}
	}


	function RenderComments({comments}) {
		if (comments != null) {
			const list = comments.map((item) => {
				return (
					<div key={item.id}>
						<Media tag="li">
							<Media body>
								<p>{item.comment}</p>
								<p>-- {item.author}, {new Intl.DateTimeFormat('en-US',{ year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(item.date)))}</p>
							</Media>
						</Media>
					</div>
				);
			});
			return (
				<div>
					<h4>Comments</h4>
					<Media list className="list-unstyled">
						{list}
					</Media>
				</div>
			);
		} else
			return (
				<div></div>
			);
	}
	
	const DishDetail = (props) => {
		console.log('DishDetail Component render invoked!');
		if (props.dish != null) 
			return (
				<div className="container">
					<div className="row">	
						<Breadcrumb>
							<BreadcrumbItem><Link to='/menu'>Menu</Link> </BreadcrumbItem>
							<BreadcrumbItem active>{props.dish.name}}</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h3>{props.dish.name}</h3>
							<hr/>
                    	</div>
                	</div>
					<div className="row">
						<div className="col-12 col-md-5 m-2">
							<RenderDish dish={props.dish} />	
						</div>
						<div className="col-12 col-md-5 m-1">
							<RenderComments comments= {props.comments}/>
							<CommentForm></CommentForm>
						</div>
					</div>
				</div>
			);
		else
			return (
				<div></div>
			);
	}
	export default DishDetail;

	class CommentForm extends Component{
		constructor(props){
			super(props);
			this.state = {
				isModalOpen: false
			};
		
		}

		toggleModal=()=>{
			this.setState({
				isModalOpen: !this.state.isModalOpen
			  });
		  }

		handleComment(values){
			alert("Current State is: "+JSON.stringify(values));
			
	
		}

		render(){
			return(
				<React.Fragment>
					<Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

					<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>    
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleComment(values)}>
						<Label htmlFor="rating">Rating</Label>
							<Row className="form-group">
                                <Col>
                                    <Control.select model=".rating" name="Rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
							<Label htmlFor="name">Your Name</Label>
							<Row className="form-group">
                                
                                <Col>
                                    <Control.text model=".name" id="name" name="name"
                                    placeholder="Name" className="form-control" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}/>
                                    <Errors className="text-danger" model=".name" show="touched" messages={{
                                        required: 'required', 
                                        minLength:'Must be greater than 2 characers',
                                        maxLength: 'Must be 15 characters or less'}}/>
                                </Col>
                            </Row>
							<Label htmlFor="feedback">Comment</Label>
							<Row className="form-group">
                                
                                <Col>
                                    <Control.textarea model=".message" className="form-control" id="message" name="message" rows="12"/>
                                </Col>
                            </Row>
							<Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>

						</LocalForm>


					</ModalBody>
				</Modal> 
			</React.Fragment>

				

			);

		}

	}
