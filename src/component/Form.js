import {useFormik} from "formik";
import * as Yup from "yup";
import Input from "./Input";

const GetInTouchForm = ({sentMail}) => {
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        handleBlur
    } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, "First name must be min 2 letters")
                .max(15, "First name must be max 15 letters")
                .matches(/^[a-zA-Z -]+$/, "First name can only contain latin letters")
                .required("First name is a required"),
            lastName: Yup.string()
                .min(2, "Last name must be min 2 letters")
                .max(15, "Last name must be max 15 letters")
                .matches(/^[a-zA-Z -]+$/, "Last name can only contain latin letters")
                .required("Last name is a required"),
            email: Yup.string()
                .email("Email must be a valid: user@exemple.com")
                .required("Email is a required"),
            phone: Yup.string()
                .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Enter valid phone number. +1234567890"),
            company: Yup.string()
                .matches(/^[\w -]+$/, "Company name can only contain: letters, numbers, space, and symbols:'-','_'"),
            message: Yup.string()
                .max(500, "Max letter in message must be 500")
                .matches(/^[\w.,?!\/\\&():;"' -]+$/, "You can use: letters, numbers and next symbols: .,?!\/\\&():;\"' -"),
        }),
        onSubmit: async ({firstName, lastName, email, phone, company, message}, {resetForm}) => {
            try {
                const data = new FormData()
                data.append("firstName", `${firstName}`)
                data.append("lastName", `${lastName}`)
                data.append("email", `${email}`)
                data.append("phone", `${phone}`)
                data.append("company", `${company}`)
                data.append("message", `${message}`)

                // console.log(data)
                const res = await fetch("send_mail.php", {
                    method: "POST",
                    body: data,
                })
                // response.then(res => {
                if (res.ok) {
                    // res.then(response => {
                        res.json().then(data => {
                            if (data.result === "success") {
                                sentMail(data.status, data.result)
                            } else {
                                sentMail(data.status, data.result)
                            }
                            resetForm()
                            console.log(data)
                        })
                    // })
                } else {
                    //page 404
                    alert(res.status + " " + res.statusText)
                    //sentMail(res.status, res.result)
                }
                console.log("res", res)
                console.log("status msg", res.status, "result msg", res.statusText)
                // })
            } catch (err) {
                console.log(err)
            }
        }
    })
    return (
        <form className="form flex col" onSubmit={handleSubmit}>
            <div className="flex col-gap">
                <Input
                    name="firstName"
                    type="text"
                    placeholder="First Name*"
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                    touched={touched.firstName}
                    errors={errors.firstName}
                />
                <Input
                    name="lastName"
                    type="text"
                    placeholder="Last Name*"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                    touched={touched.lastName}
                    errors={errors.lastName}
                />
            </div>
            <Input
                name="email"
                type="email"
                placeholder="Email*"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                touched={touched.email}
                errors={errors.email}
            />
            <Input
                name="phone"
                type="tel"
                placeholder="Phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                touched={touched.phone}
                errors={errors.phone}
            />
            <Input
                name="company"
                type="text"
                placeholder="Company"
                onChange={handleChange}
                value={values.company}
                onBlur={handleBlur}
                touched={touched.company}
                errors={errors.company}
            />
            <textarea
                className="input__input message"
                id="message"
                name="message"
                placeholder="Message"
                onChange={handleChange}
                value={values.message}
                onBlur={handleBlur}
            ></textarea>
            <div className="relative">
                {touched.message && errors.message ? (<span className="input__err">{errors.message}</span>) : null}
            </div>
            <button className="submit" type="submit">Submit</button>
        </form>
    )
}
export default GetInTouchForm