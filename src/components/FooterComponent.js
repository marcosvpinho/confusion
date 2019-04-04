import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props){
    return(
        <div className="footer">
            
            <div>
                <div className="row justify-content-center footb">
                    <div className="col-12 col-sm-3 ">
                        
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/aboutus">About</Link>
                        <Link className="link" to="/menu">Menu</Link>
                        <Link className="link" to="/contactus">Contact</Link> 
                    </div>
                </div>
                <div><br/><br/></div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 text-center">
                        <h5 className="link">Our Address</h5>
                        <address className="address">
                            410, Rua Valdomiro Cunha, Forquilhinhas, São José<br/>
                            <i className="fa fa-phone fa-lg"></i>+554823343323<br/>
                            <i className="fa fa-fax fa-lg"></i>+48999999999<br/>
                            <i className="fa fa-envelope fa-lg"></i><a className="link" href="mailto:marcos.v.pinho@gmail.com">marcos.v.pinho@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 text-center">
                    <h5 className="link">Follow Us</h5>
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="www.google.com"> <i className="fa fa-google-plus fa-lg"></i> </a>
                            <a className="btn btn-social-icon btn-facebook" href="www.facebook.com"> <i className="fa fa-facebook fa-lg"></i> </a>
                            <a className="btn btn-social-icon btn-twitter" href="www.twitter.com"> <i className="fa fa-twitter fa-lg"></i> </a>
                            <a className="btn btn-social-icon btn-linkedin" href="www.linkedin.com"> <i className="fa fa-linkedin fa-lg"></i> </a>
                        </div>
                    </div>
                    <div className="row justify-content-center link">             
                        <div className="col-auto">
                            <p>© Copyright 2018 Ristorante Con Fusion</p>
                        </div>
                    </div>


                </div>
            </div> 
        </div>

    );
}

export default Footer;