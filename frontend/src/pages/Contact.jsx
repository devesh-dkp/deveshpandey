import React from "react";
const contacts = [
  {
    name: "Email",
    link: "mailto:deveshpandey.dp2@gmail.com",
    place: "deveshpandey.dp2@gmail.com",
    symbol:
      "data:image/jpeg;base64,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",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deveshkpandey",
    place: "deveshkpandey",
    symbol:
      "data:image/png;base64,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",
  },
  {
    name: "GitHub",
    link: "https://github.com/devesh-dkp",
    place: "devesh-dkp",
    symbol: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/pandey_devesh_",
    place: "pandey_devesh_",
    symbol:
      "https://icon2.cleanpng.com/20240119/rp/transparent-x-logo-cross-design-black-and-white-photograph-sim-black-and-white-cross-with-letters-x-and-1710898892931.webp",
  },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/devesh_dkp",
    place: "devesh_dkp",
    symbol:
      "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3629285-3031869.png?f=webp",
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
        <ul className="space-y-5">
          {contacts.map((contact) => (
            <li key={contact.name} className="flex items-center justify-left">
              <a href={contact.symbol} className="mr-4">
                <img src={contact.symbol} alt={contact.name} className="h-6" />
              </a>
              <span className="text-xl font-medium mr-4">{contact.name}:</span>{" "}
              <div
                className="text-xl text-blue-500 hover:text-blue-700 no-underline cursor-pointer"
                onClick={() => window.open(contact.link, "_blank")}
              >
                {contact.place}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
