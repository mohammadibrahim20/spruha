import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/Fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import LogoNew from "../../assets/images/logo.png";
import RightNav from "./RightNav";

const Navbar = () => {
  const people = [
    { name: "Choice One" },
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
  ];
  const [selected, setSelected] = useState(people[0]);
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);

  return (
    <div>
      <div className="w-full flex items-center justify-between md:py-0 py-2 gap-5 border-b-2 drop-shadow-md">
        <HiMenuAlt1 size={24} />
        <div className="md:hidden">
          <img src={LogoNew} alt="" />
        </div>
        <div className="hidden md:flex justify-center items-center py-2 ml-3 mr-auto">
          <div className="border rounded-md flex">
            {/* <div className="fixed top-16 w-72"> */}
            <Listbox value="Choice One" onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-[148px] cursor-default rounded-md py-2 h-full pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm  ">
                  <span className="block truncate text-gray-400 font-medium ">
                    {selected.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ml-5">
                    <FiChevronDown
                      className="h-5 w-5 text-gray-400 ml-10"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1  w-full overflow-none  bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 hover:font-bold hover:text-blue-800 pl-3 pr-2 ${
                            active
                              ? "bg-blue-50 text-[#6259ca] "
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {/* {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                            </span>
                          ) : null} */}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <input
              type="text"
              className=" px-4 py-2 focus:outline-none flex-grow  text-gray-700"
              placeholder="Search for anything..."
            />

            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-3 rounded-r-lg">
              <FiSearch size={18} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex">
          <RightNav />
        </div>
        <div className="flex items-center gap-5">
          <BsThreeDotsVertical
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden cursor-pointer"
            size={20}
          />
          <LuSettings className="animate-spin" size={20} />
        </div>
      </div>
      {openMenu && (
        <div className="border-b-2 md:hidden">
          <RightNav />
        </div>
      )}
    </div>
  );
};

export default Navbar;