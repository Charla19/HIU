import React, { useEffect, useState } from "react";
import User from "../components/User";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

function UserSelect() {
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState({});
  const [firstname, setFirstname] = useState("");
  const [customUser, setCustomUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const saveAllCustomUserToLocalStorage = () => {
    localStorage.setItem("allAccounts", JSON.stringify(customUser));
  };

  function genererIdUnique(prefix = "") {
    return `${prefix}${Date.now().toString(36)}${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  }

  useEffect(() => {
    let accountFromStorage = localStorage.getItem("allAccounts");
    let parseAccountStorage = JSON.parse(accountFromStorage);
    if (parseAccountStorage !== null) {
      setCustomUser(parseAccountStorage);
      setSelected(parseAccountStorage[0]);
    } else {
      setCustomUser([]);
    }
  }, []);

  return (
    <>
      <ProgressBar progressProps={progress} />
      <div className="h-full flex flex-col items-center justify-center gap-[24px] w-full max-w-[720px] mx-auto">
        <h1 className="text-2xl font-semibold">
          Confirmer votre compte existant pour continuer
        </h1>
        <div className="w-full p-4 text-right">
          <div className="mx-auto w-full max-w-md">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Server size
              </RadioGroup.Label>
              <div className="space-y-2">
                {customUser &&
                  customUser.length > 0 &&
                  customUser.map((account) => (
                    <User key={account.id} user={account} />
                  ))}
              </div>
            </RadioGroup>

            {customUser.length > 0 && (
              <p className="mt-4 text-center text-gray-400">
                - ou ajouter une autre compte -
              </p>
            )}

            <div className="flex flex-col items-center justify-center w-full mt-3">
              <div className="w-full my-3">
                <p className="text-sm text-gray-600 font-semibold dark:text-gray-400 text-left">
                  Votre prénom
                </p>
                <input
                  id="firstname"
                  type="text"
                  className="flex w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-sky-300 rounded-lg focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </div>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:border-indigo-200 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-indigo-500 mb-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  <p className="font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Cliquer pour ajouter votre image
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG or JPEG
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="hidden"
                  onChange={async (e) => {
                    setErrorMessage(null);
                    setProgress(20);
                    const files = e.target.files;
                    if (files == null || files.length == 0) {
                      setErrorMessage("No files wait for import.");
                      return;
                    }
                    let file = files[0];
                    let name = file.name;
                    let suffixArr = name.split("."),
                      suffix = suffixArr[suffixArr.length - 1];
                    if (
                      suffix != "png" &&
                      suffix != "jpg" &&
                      suffix != "jpeg"
                    ) {
                      setErrorMessage("Only support png jpg or jpeg files.");
                      return;
                    }
                    setProgress(50);

                    const base64 = await convertBase64(file);

                    const user = {
                      id: genererIdUnique("user"),
                      fullName: firstname ? firstname : suffixArr[0],
                      picture: base64,
                    };

                    setCustomUser([...customUser, user]);
                    setFirstname("");
                    setSelected(user);
                    setProgress(100);
                  }}
                />
              </label>
              {errorMessage && (
                <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
              )}
            </div>
            <Link
              to="/login"
              onClick={() => saveAllCustomUserToLocalStorage()}
              state={{ account: selected }}
              className="mt-4 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600"
            >
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1.5 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSelect;
