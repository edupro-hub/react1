import React from 'react';

const Login = props => (
   <form>
                            <div className="mt-3">
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                              placeholder="Your name.."
                                type="text"
                            />
                            </div>
                            <div className="mt-3">
                            <input
                                class="form-control"
                             id="email"
                                name="email"
                                placeholder="Your email.."
                                type="text"
                            />
                            </div>
                            <div className="d-grid mt-4">
                            <button class="btn btn-primary btn-lg" type="submit" value="Send Now">
                            checking
                            </button>
                            </div>
                          </form>
      
);

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
