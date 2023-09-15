import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import LogoN from "../../assets/images/icon-l.png";
import Logo from "../../assets/images/logo-light.png";
import LogoNew from "../../assets/images/logo.png";
import RightNav from "./RightNav";

const Navbar = ({ open, setOpen }) => {
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

  return (
    <div>
      <div className="flex items-center justify-between gap-5 z-50 bg-white duration-300 transition-transform transform py-3 md:py-0">
        <div
          className={`hidden md:flex items-center justify-center border-b-2 h-[82px] bg-[#0e0e23] ${
            open ? "w-[241px]" : "w-20"
          } px-5 transition-width duration-500 ease-in-out`}
        >
          {open ? <img src={Logo} alt="" /> : <img src={LogoN} alt="" />}
        </div>
        <HiMenuAlt1
          onClick={() => setOpen(!open)}
          className="ml-5 md:ml-0"
          size={24}
        />
        <div className="md:hidden">
          <img src={LogoNew} alt="" />
        </div>
        <div className="hidden md:flex justify-start flex-1 items-center py-2 ml-3">
          <div className="border rounded-md flex">
            {/* <div className="fixed top-16 w-72"> */}
            <Listbox value="Choice One" onChange={setSelected}>
              <div className="relative mt-1 z-50">
                <Listbox.Button className="relative w-[148px] cursor-default rounded-md py-2 h-full pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm  ">
                  <span className="block truncate text-gray-400 font-medium  ">
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
        <div className="flex items-center gap-1">
          <BsThreeDotsVertical
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden cursor-pointer"
            size={20}
          />
          <LuSettings className="animate-spin mr-5" size={20} />
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
