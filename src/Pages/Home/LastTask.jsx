import { PiDotsThreeVerticalBold } from "react-icons/pi";

const LastTask = () => {
  return (
    <div className="mt-5 rounded-md p-5 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl uppercase font-bold">Project Budget</h2>
          <p className="text-xs text-gray-500">Previeus moth vs this month</p>
        </div>
        <PiDotsThreeVerticalBold />
      </div>
      <div>
        <div className="overflow-x-auto border-2 mt-5 p-2">
          <table className="table ">
            {/* head */}
            <thead className="">
              <tr>
                <th>TASK</th>
                <th>TEAM</th>
                <th>OPEN TASK</th>
                <th>PRORITY</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="border-0">
                <th className="flex justify-start gap-4 items-center">
                  <label>
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                  <span>Evaluating the design</span>
                </th>
                <td>
                  <div className="avatar-group -space-x-2">
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td>37</td>
                <th>
                  <span className="text-blue-500">High</span>
                </th>
                <td>
                  <div className="badge badge-primary">Complete</div>
                </td>
              </tr>
              <tr className="border-0">
                <th className="flex justify-start gap-4 items-center">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                  <span>Evaluating the design</span>
                </th>
                <td>
                  <div className="avatar-group -space-x-2">
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td>37</td>
                <th>
                  <span className="text-blue-500">High</span>
                </th>
                <td>
                  <div className="badge badge-primary">Complete</div>
                </td>
              </tr>
              <tr className="border-0">
                <th className="flex justify-start gap-4 items-center">
                  <label>
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                  <span>Evaluating the design</span>
                </th>
                <td>
                  <div className="avatar-group -space-x-2">
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td>37</td>
                <th>
                  <span className="text-blue-500">High</span>
                </th>
                <td>
                  <div className="badge badge-primary">Complete</div>
                </td>
              </tr>
              <tr className="border-0">
                <th className="flex justify-start gap-4 items-center">
                  <label>
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                  <span>Evaluating the design</span>
                </th>
                <td>
                  <div className="avatar-group -space-x-2">
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-7">
                        <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td>37</td>
                <th>
                  <span className="text-blue-500">High</span>
                </th>
                <td>
                  <div className="badge badge-primary">Complete</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LastTask;
