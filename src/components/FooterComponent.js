import React from 'react';

function Footer(props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">contactus.html</a>Contact</li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            410, Rua Valdomiro Cunha<br/> 
                            Forquilhinhas, São José<br/>
                            <i className="fa fa-phone fa-lg"></i>:+554823343323<br/>
                            <i className="fa fa-fax fa-lg"></i>:+48999999999<br/>
                            <i className="fa fa-envelope fa-lg"></i>:<a href="mailto:marcos.v.pinho@gmail.com">marcos.v.pinho@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="#"> <i className="fa fa-google-plus fa-lg"></i> </a>
                            <a className="btn btn-social-icon btn-facebook" href="#"> <i className="fa fa-facebook fa-lg"></i> </a>
                            <a className="btn btn-social-icon btn-twitter" href="#"> <i className="fa fa-twitter fa-lg"></i> </a>
                            <a className="btn btn-social-icon btn-linkedin" href="#"> <i className="fa fa-linkedin fa-lg"></i> </a>
                        </div>
                    </div>
                    <div className="row justify-content-center">             
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