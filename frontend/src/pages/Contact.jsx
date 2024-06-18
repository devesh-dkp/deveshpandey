import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const contacts = [
  {
    name: "Email",
    link: "mailto:deveshpandey.dp2@gmail.com",
    place: "deveshpandey.dp2@gmail.com",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deveshkpandey",
    place: "deveshkpandey",
  },
  {
    name: "GitHub",
    link: "https://github.com/devesh-dkp",
    place: "devesh-dkp",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/pandey_devesh_",
    place: "pandey_devesh_",
  },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/devesh_dkp",
    place: "devesh_dkp",
  },
];

const Contact = () => {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="max-w-4xl w-full bg-white p-8">
        <p className="text-xl text-gray-700 mb-6 text-center">
          I would love to hear from you! Whether you have a project in mind,
          want to collaborate, feel free to reach out to me through any of the
          following platforms.
        </p>
        <ul className="space-y-6">
          {contacts.map((contact) => (
            <li key={contact.name} className="ml-5 pl-2 border-gray-300">
              <span className="text-2xl font-semibold">{contact.name}:</span>{" "}
              <Link
                to={contact.link}
                className="text-2xl text-blue-500 hover:text-blue-700 no-underline"
              >
                {contact.place}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
