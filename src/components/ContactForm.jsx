import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can replace this with your form submission logic
    // For example, send data to an API or email service
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section className=" bg-black text-white">
      <div className="container py-8 lg:pt-16 lg:pb-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`shadow-sm text-white border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 5,
                  message: "Subject must be at least 5 characters",
                },
              })}
              className={`block p-3 w-full text-sm text-white bg-black rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                errors.subject ? "border-red-500" : ""
              }`}
              placeholder="Let us know how we can help you"
            />
            {errors.subject && (
              <p className="mt-2 text-sm text-red-600">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className={`block p-2.5 w-full text-sm text-white bg-black rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Leave a comment..."
            ></textarea>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-slate-300 text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
