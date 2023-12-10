export default function HomeSecondPage() {
  const experience = [
    {
      logo: "/logos/html.svg",
      name: "HTML",
      description: "Experience with 3 years",
    },
    {
      logo: "/logos/css.svg",
      name: "CSS",
      description: "Experience with 3 years",
    },
    {
      logo: "/logos/javascript.svg",
      name: "Javascript",
      description: "Experience with 3 years",
    },
    {
      logo: "/logos/tailwindcss.svg",
      name: "Tailwind Css",
      description: "Experience with 3 years",
    },
    {
      logo: "/favicon.ico",
      name: "React",
      description: "Experience with 3 years",
    },
    {
      logo: "/logos/firebase.svg",
      name: "Firebase",
      description: "Experience with 3 years",
    }
  ];

  const langElements = experience.map((field, index) => {
    const isOdd = index % 2 === 1;
    return (
      <li
        key={index}
        dir={isOdd ? "ltr" : "rtl"}
        className="group relative flex justify-around  py-3  bg-blue-100 odd:border-l-4  even:border-r-4 rounded-md"
      >
        <img
          className="h-6 w-6 md:h-10 md:w-10 rounded-full ltr:ml-3 rtl:mr-3 hover:scale-125 transition-all"
          src={field.logo}
          alt="Field Logo"
        />
        <div className="overflow-hidden">
          <p className="text-sm font-medium text-slate-900">{field.name}</p>
          <p className="text-sm text-slate-500 truncate">{field.description}</p>
        </div>
        <span className={`absolute top-0 w-[4px] h-0 bg-sky-700  group-hover:h-full ${isOdd ? "-right-1 " : "-left-1"} transition-all rounded-e-md`}></span>
      </li>
    );
  });
  return (
    <div className="home-second-page flex flex-col items-center md:justify-center text-center min-w-full min-h-screen">
      <h1 className="text-xl md:text-2xl font-bold font-title my-10">My Experience</h1>
      <ul className="p-6  w-full md:w-3/4 grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 md:gap-x-6">
        {langElements}
      </ul>
    </div>
  );
}
