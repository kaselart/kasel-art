// import React from "react";
// import {
//   useNetlifyForm,
//   NetlifyFormProvider,
//   NetlifyFormComponent,
//   Honeypot,
// } from "react-netlify-forms";
// import { useForm } from "react-hook-form";

// export default function ContactForm() {
//   const { register, handleSubmit, reset, errors } = useForm({
//     mode: "onBlur",
//   });
//   const netlify = useNetlifyForm({
//     name: "react-hook-form",
//     action: "/thanks",
//     honeypotName: "bot-field",
//     onSuccess: (response, context) => {
//       console.log("Successfully sent form data to Netlify Server");
//     },
//   });
//   const onSubmit = (data) => netlify.handleSubmit(null, data);

//   const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

//   return (
//     <NetlifyFormProvider {...netlify}>
//       <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
//         <Honeypot />
//         {netlify.success && (
//           <p sx={{ variant: "alerts.success", p: 3 }}>
//             Thanks for contacting us!
//           </p>
//         )}
//         {netlify.error && (
//           <p sx={{ variant: "alerts.muted", p: 3 }}>
//             Sorry, we could not reach servers. Because it only works on Netlify,
//             our GitHub demo does not provide a response.
//           </p>
//         )}
//         <div>
//           <label htmlFor="email" sx={{ variant: "forms.label" }}>
//             Email:
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             ref={register({
//               required: "Email is required",
//               pattern: {
//                 value: EMAIL_REGEX,
//                 message: "Invalid email address",
//               },
//             })}
//             sx={{
//               variant: "forms.input",
//             }}
//           />
//           {errors.email && (
//             <div sx={{ variant: "text.error" }}>{errors.email.message}</div>
//           )}
//         </div>
//         <div sx={{ pt: 3 }}>
//           <button type="submit" sx={{ variant: "buttons.success" }}>
//             Submit
//           </button>
//           <button
//             type="reset"
//             onClick={() => reset()}
//             sx={{ variant: "buttons.danger" }}
//           >
//             Reset
//           </button>
//         </div>
//       </NetlifyFormComponent>
//     </NetlifyFormProvider>
//   );
// }

// //   return (
// //     <form
// //       name="contact"
// //       method="post"
// //       data-netlify="true"
// //       data-netlify-honeypot="bot-field"
// //       onSubmit={handleSubmit(onSubmit)}
// //       className="contact__form"
// //     >
// //       <input type="hidden" name="form-name" value="contact" />
// //       <div className="form__element">
// //         <label className="visually-hidden" htmlFor="name">
// //           name
// //         </label>
// //         <input
// //           id="name"
// //           type="text"
// //           placeholder="name"
// //           {...register("name", {
// //             required: "name required",
// //           })}
// //         />
// //         {errors.name && (
// //           <p className="form__error-message">{errors.name.message}</p>
// //         )}
// //       </div>

// //       <div className="form__element">
// //         <label htmlFor="email" className="visually-hidden">
// //           email
// //         </label>
// //         <input
// //           id="email"
// //           type="text"
// //           placeholder="email"
// //           {...register("email", {
// //             required: "email required",
// //             pattern: {
// //               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
// //               message: "enter a valid e-mail address",
// //             },
// //           })}
// //         />
// //         {errors.email && (
// //           <p className="form__error-message">{errors.email.message}</p>
// //         )}
// //       </div>

// //       <div className="form__element">
// //         <label className="visually-hidden" htmlFor="telephone">
// //           telephone number:
// //         </label>
// //         <input
// //           id="telephone"
// //           type="text"
// //           placeholder="telephone (optional)"
// //           {...register("telephone", {
// //             minLength: { value: 7, message: "must be at least 7 digits" },
// //             pattern: {
// //               value: /^([0-9]*)$/,
// //               message: "enter a valid telephone number",
// //             },
// //           })}
// //         />
// //         {errors.telephone && (
// //           <p className="form__error-message">{errors.telephone.message}</p>
// //         )}
// //       </div>

// //       <div className="form__element">
// //         <label className="visually-hidden" htmlFor="comments">
// //           questions or comments:
// //         </label>
// //         <textarea
// //           id="comments"
// //           type="text"
// //           placeholder="questions or comments"
// //           {...register("comments", {
// //             required: "enter questions or comments",
// //           })}
// //         />
// //         {errors.comments && (
// //           <p className="form__error-message">{errors.comments.message}</p>
// //         )}
// //       </div>
// //       <input type="submit" className="btn--submit" value="SEND" />
// //     </form>
// //   );
// // }
