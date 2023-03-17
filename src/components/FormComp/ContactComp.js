import {React,useRef} from 'react'
import '../../style/style.css'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

function ContactComp() {
    const{register,handleSubmit,formState: { errors }}=useForm()
    const form = useRef();
    const onSubmit=(data)=>{
        console.log(data);
        alert(JSON.stringify(data))
        form.current.reset()
    }
  return (
        <div className='contact_comp_section'>
            <div className="container">
                <div className="row justify-content-evenly align-items-center">
                    <div className="col-8">
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={classNames("form-control", {
                                            "is-invalid": errors.fullname
                                        }
                                    )}
                                    placeholder='Enter your full name'
                                    autoComplete='off'
                                    id='fullname'
                                    name='fullname'
                                    {...register("fullname", {
                                        required: "This field is required",
                                        minLength: {
                                            value: 4,
                                            message: "Please enter fullname minimum 4 character"
                                        }
                                    })}
                                />
                                {errors.fullname && (
                                    <div className="invalid-feedback">
                                        {errors.fullname.message}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className={classNames("form-control", {
                                            "is-invalid": errors.email
                                        }
                                    )}
                                    placeholder='Enter your email address'
                                    autoComplete='off'
                                    id='email'
                                    name='email'
                                    {...register("email", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Please enter valid email address"
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email.message}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={classNames("form-control", {
                                            "is-invalid": errors.subject
                                        }
                                    )}
                                    placeholder='Enter Subject'
                                    autoComplete='off'
                                    id='subject'
                                    name="subject"
                                    {...register("subject", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[a-zA-Z\s]+$/,
                                            message: "Please enter a valid subject"
                                        },
                                        minLength: {
                                            value: 7,
                                            message: "Please enter subject minimum 7 character"
                                        }
                                    })}
                                />
                                 {errors.subject && (
                                    <div className="invalid-feedback">
                                        {errors.subject.message}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your Message" name="message"></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp
