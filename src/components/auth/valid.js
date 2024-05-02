import * as Yup from 'yup'

export const SignUpValid = Yup.object({
    first_name: Yup.string().min(2).required(' FirstName is Required'),
    last_name: Yup.string().min(2).required(' LastName is Required'),
    email: Yup.string().matches(/^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)/).required(' Email is Required'),
    mobile: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/).required(' LastName is Required'),
    password: Yup.string().min(2).max(16).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required(' Password is Required'),
    confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Password must match"),
})