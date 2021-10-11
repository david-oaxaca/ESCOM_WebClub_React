import React from 'react';
import Axolotl from '../images/Axolotl.png'

const Index = ({form, onChange, onSubmit}) =>{

    return(
        <div className="principal">
            <div className="container-form">
                
                
                <form onSubmit={onSubmit} className="form-react mb-3 mt-3">
                <div className="text-center mb-4">
                        <h2>React Course</h2>
                    </div>
                    <div className="text-center mb-4">
                        <img className="img-size" src={Axolotl} alt="Logo ESCOM"/>
                    </div>
                    <div className="text-center mb-4">
                        <h5>David Oaxaca's page for Web Development Club</h5>
                        <h5>Boleta: 2019639376</h5>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input autoComplete="off" onChange={onChange} value={form.email} name="email" type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input onChange={onChange} value={form.pass} name="pass" type="Password" className="form-control" id="pass" placeholder="Password" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={onChange} value={form.name} name="name" type="text" className="form-control" id="name" placeholder="Name" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="birth" className="form-label">Birth date</label>
                        <input onChange={onChange} value={form.birth} name="birth" type="date" className="form-control" id="birth" placeholder="DD-MM-YY" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="career" className="form-label">Career</label>
                        <input onChange={onChange} value={form.career} name="career" type="text" className="form-control" id="career" placeholder="Career" />
                    </div>

                    <div className="text-center mb-3">
                        <button type="submit" className="btn btn-success">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )

};

export default Index;