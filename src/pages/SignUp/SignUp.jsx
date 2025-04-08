import { useState } from "react";
import {
  FaCloudUploadAlt,
  FaEye,
  FaEyeSlash,
  FaRegUser,
  FaUser,
} from "react-icons/fa";
import districtList from "../../constants/districtList";
import districtAreas from "../../constants/districtAres";
import bankOptions from "../../constants/bankOptions";
import { Link } from "react-router-dom";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    merchantName: "",
    fullAddress: "",
    businessAddress: "",
    district: "Dhaka",
    area: "",
    contactNumber: "",
    facebookPage: "",
    website: "",
    productType: "",
    paymentMethod: "",
    bankName: "",
    branchName: "",
    accountName: "",
    accountNumber: "",
    routingNumber: "",
    note: "",
    mobileBankingProvider: "",
    mobileBankingType: "",
    mobileBankingNumber: "",
    nid: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    nidUploadFront: null,
    nidUploadBack: null,
    tradeLicense: null,
    tinCertificate: null,
  });

  const [areas, setAreas] = useState(districtAreas.Dhaka);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === "district") {
      setAreas(districtAreas[value] || []);
      setFormData((prev) => ({ ...prev, area: "" }));
    }
    // Clear error for the field being updated
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      console.table("Form Data", formData);
    } else {
      alert("Check terms and condtion");
    }
  };

  // handle show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    // console.log(showPassword);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg my-2">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Merchant Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-medium" htmlFor="">
              Company Name:
              <span className="text-red-500"> *</span>
            </label>

            <input
              required
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full p-2 border  rounded mt-2 focus:outline-none focus:invalid:border-red-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Merchant Name:
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              name="merchantName"
              placeholder="Merchant Name"
              className="w-full p-2 border rounded mt-2  focus:outline-none focus:invalid:border-red-500"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Full Address:
            </label>
            <textarea
              type="text"
              name="fullAddress"
              placeholder="Full Address"
              className="w-full p-2 border rounded mt-2 h-12"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Bussiness Address:
              <span className="text-red-500"> *</span>
            </label>
            <textarea
              type="text"
              name="businessAddress"
              placeholder="Address of Your Pickup Location"
              className="w-full p-2 border rounded mt-2 h-12 focus:outline-none focus:invalid:border-red-500"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <label className="font-medium " htmlFor="">
              Select District:
            </label>
            <br />
            <select
              name="district"
              className="p-2 border rounded w-full"
              defaultValue="Dhaka"
              onChange={handleChange}
            >
              <option>Select District</option>
              {districtList.map((bank, index) => (
                <option key={index} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-medium mb-2" htmlFor="">
              Select Area:
            </label>
            <br />
            <select
              name="area"
              className="p-2 border rounded w-full"
              value={formData.area}
              onChange={handleChange}
            >
              <option>Select Area</option>
              {areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="relative">
            {/* contact number */}
            <label className="font-medium" htmlFor="">
              Contact Number:
              <span className="text-red-500"> *</span>
            </label>

            <input
              type="number"
              name="contactNumber"
              placeholder="Contact Number"
              className="w-full py-2 pl-16 border rounded mt-1.5 overflow-hidden focus:outline-none focus:invalid:border-red-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onChange={handleChange}
              required
            />

            <span className="bg-slate-800 text-white px-4 py-2 rounded-l absolute top-7.5 left-0 border overflow-hidden">
              +88
            </span>
          </div>

          <div className="relative">
            {/* owner number */}
            <label className="font-medium" htmlFor="">
              Owner Mobile Number:
              <span className="text-red-500"> *</span>
            </label>

            <input
              type="number"
              name="ownerNumber"
              placeholder="Owner Number"
              className="w-full p-2 pl-16 border rounded mt-1.5 overflow-hidden focus:outline-none focus:invalid:border-red-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onChange={handleChange}
              required
            />

            <span className="bg-slate-800 text-white px-4 py-2 rounded-l absolute top-7.5 left-0 border overflow-hidden">
              +88
            </span>
          </div>
        </div>

        <div className="relative">
          <label className="font-medium" htmlFor="">
            Facebook Page URL
          </label>
          <input
            type="url"
            name="facebookPage"
            placeholder="Facebook Business Page URL"
            className="w-full p-2 border rounded mt-1.5 pl-24"
            onChange={handleChange}
          />

          <span className="bg-slate-800 text-white px-4 py-2 rounded-l absolute top-7.5 left-0 border overflow-hidden">
            Https://
          </span>
        </div>
        <div className="relative">
          <label className="font-medium" htmlFor="">
            Website Link
          </label>
          <input
            type="url"
            name="website"
            placeholder="Website URL"
            className="w-full p-2 border rounded pl-24"
            onChange={handleChange}
          />
          <span className="bg-slate-800 text-white px-4 py-2 rounded-l absolute  left-0 border overflow-hidden">
            Https://
          </span>
        </div>
        <div>
          <label className="font-medium" htmlFor="">
            Your Products Type
          </label>
          <input
            type="url"
            name="productType"
            placeholder="What kind of products do you sell? "
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>

        {/* Payment method */}
        <div>
          <label className="font-medium " htmlFor="">
            Default Payment Method:
          </label>
          <br />
          <select
            name="paymentMethod"
            className="p-2 border rounded w-full"
            onChange={handleChange}
          >
            <option>Select Method</option>
            <option value={"cash"}>Cash</option>
            <option value={"bank"}>Bank</option>
            <option value={"mobilebank"}>Mobile Banking</option>
          </select>
        </div>

        <fieldset className="border p-3 rounded-md">
          <legend className="font-semibold text-xl  block">Payment Info</legend>

          <p className="font-semibold text-xl mb-2 block  ">Bank Details</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-medium block " htmlFor="">
                Bank Name
              </label>
              <select
                name="bankName"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              >
                <option value="">Select Bank</option>
                {bankOptions.map((bank, index) => (
                  <option key={index} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-medium block " htmlFor="">
                Branch Name
              </label>
              <input
                type="text"
                name="branchName"
                placeholder="Branch Name"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-medium block " htmlFor="">
                Account Holder Name
              </label>
              <input
                type="text"
                name="accountName"
                placeholder="Account Name"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-medium block " htmlFor="">
                Account Number
              </label>
              <input
                type="number"
                name="accountNumber"
                placeholder="Account Number"
                className="p-2 border rounded w-full  appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-medium block" htmlFor="">
                Routing Number:
              </label>
              <input
                type="number"
                name="routingNumber"
                placeholder="Routing Number"
                className="p-2 border rounded w-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-medium block" htmlFor="">
                Note:
              </label>
              <input
                type="text"
                name="note"
                placeholder="Write Note"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              />
            </div>
          </div>

          <label className="font-semibold text-xl mb-2 block mt-2 " htmlFor="">
            Mobile Banking Details
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label className="font-medium" htmlFor="mobileBankingProvider">
                Provider:
              </label>
              <br />
              <select
                name="mobileBankingProvider"
                id="mobileBankingProvider"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="bkash">bKash</option>
                <option value="nagad">Nagad</option>
                <option value="upay">Upay</option>
              </select>
            </div>
            <div>
              <label className="font-medium" htmlFor="mobileBankingType">
                Type:
              </label>
              <br />
              <select
                name="mobileBankingType"
                id="mobileBankingType"
                className="p-2 border rounded w-full"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div>
              <label className="font-medium" htmlFor="mobileBankingNumber">
                Number:
              </label>
              <input
                type="number"
                name="mobileBankingNumber"
                id="mobileBankingNumber"
                placeholder="Mobile Number"
                className="p-2 border rounded w-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        <label className="font-medium" htmlFor="mobileBankingNumber">
          NID Number:
        </label>
        <input
          type="number"
          name="nid"
          placeholder="Enter the NID Number"
          className="w-full p-2 border rounded appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          onChange={handleChange}
        />
        {/* NID Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* fontside */}
          <div>
            <label className="font-medium" htmlFor="nidUploadFront">
              NID (FrontSide):
            </label>
            <label
              htmlFor="nidUploadFront"
              className="flex items-center justify-between w-full p-4 border-2 border-dashed rounded-lg cursor-pointer hover:border-teal-500 transition"
            >
              <div className="flex items-center gap-2">
                <FaCloudUploadAlt className="w-8 h-8 text-gray-500" />
                <span className="text-gray-600 text-sm">
                  {formData.nidUploadFront?.name || "Upload NID Frontside"}
                </span>
              </div>
              <input
                type="file"
                name="nidUploadFront"
                id="nidUploadFront"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </div>
          {/* backside */}
          <div>
            <label className="font-medium" htmlFor="nidUploadBack">
              NID (BackSide):
            </label>
            <label
              htmlFor="nidUploadBack"
              className="flex items-center justify-between w-full p-4 border-2 border-dashed rounded-lg cursor-pointer hover:border-teal-500 transition"
            >
              <div className="flex items-center gap-2">
                <FaCloudUploadAlt className="w-8 h-8 text-gray-500" />
                <span className="text-gray-600 text-sm">
                  {formData.nidUploadBack?.name || "Upload NID Backside"}
                </span>
              </div>
              <input
                type="file"
                name="nidUploadBack"
                id="nidUploadBack"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        {/* Trade License */}
        <div>
          <label className="font-medium" htmlFor="tradeLicense">
            Trade License:
          </label>
          <label
            htmlFor="tradeLicense"
            className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-gray-50 w-full cursor-pointer"
          >
            <div className="bg-gray-800 text-gray-100 px-4 py-2 hover:bg-gray-900">
              Choose_File
            </div>
            <input
              type="file"
              name="tradeLicense"
              id="tradeLicense"
              className="hidden"
              onChange={handleChange}
            />
            <span className="px-4 py-2 text-gray-500 truncate w-full">
              {formData.tradeLicense?.name || "No file chosen"}
            </span>
          </label>
        </div>

        {/* TIN Certificate */}
        <div>
          <label className="font-medium" htmlFor="tinCertificate">
            TIN Certificate:
          </label>
          <label
            htmlFor="tinCertificate"
            className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-gray-50 w-full cursor-pointer"
          >
            <div className="bg-gray-800 text-gray-100 px-4 py-2 hover:bg-gray-900">
              Choose_File
            </div>
            <input
              type="file"
              name="tinCertificate"
              id="tinCertificate"
              className="hidden"
              onChange={handleChange}
            />
            <span className="px-4 py-2 text-gray-500 truncate w-full">
              {formData.tinCertificate?.name || "No file chosen"}
            </span>
          </label>
        </div>

        {/* Email and Password */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="font-medium" htmlFor="">
              Username
              <span className="text-red-500"> *</span>
            </label>

            <input
              type="username"
              name="username"
              placeholder="Enter username "
              className="w-full p-2 border rounded pl-8 focus:outline-none focus:invalid:border-red-500"
              onChange={handleChange}
              required
            />
            <span className=" absolute left-2 bottom-3">
              <FaRegUser className="text-lg" />
            </span>
          </div>
          <div className="relative">
            <label className="font-medium" htmlFor="">
              Email
              <span className="text-red-500"> *</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="w-full p-2 border rounded pl-8 focus:outline-none focus:invalid:border-red-500"
              onChange={handleChange}
              required
            />
            <span className="absolute left-2 bottom-3">
              <MdOutlineEmail className="text-xl" />
            </span>
          </div>
          <div className="relative">
            <label className="font-medium" htmlFor="">
              Password
              <span className="text-red-500"> *</span>
            </label>
            <input
              type={showPassword ? `text` : `password`}
              name="password"
              placeholder="Enter password"
              className="w-full p-2 border rounded pl-8 focus:outline-none focus:invalid:border-red-500"
              onChange={handleChange}
              required
            />

            <p onClick={handleShowPassword} className=" absolute top-9 right-2">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </p>

            <span className="absolute left-2 bottom-3">
              <MdLockOutline className="text-xl" />
            </span>
          </div>
          <div className="relative">
            <label className="font-medium" htmlFor="">
              Confirm Password
              <span className="text-red-500"> *</span>
            </label>
            <input
              type={showPassword ? `text` : `password`}
              name="confirmPassword"
              placeholder="Enter confirm password"
              className="w-full p-2 border rounded pl-8 focus:outline-none focus:invalid:border-red-500"
              onChange={handleChange}
              required
            />
            <p onClick={handleShowPassword} className=" absolute top-9 right-2">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </p>

            <span className="absolute left-2 bottom-3">
              <MdLockOutline className="text-xl" />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-4 h-4"
            />

            <label htmlFor="terms" className="text-sm">
              I agree to the
              <Link to="/terms" className="text-orange-400 underline">
                {" Terms and Conditions"}
              </Link>
            </label>
          </div>
          <p>
            Already have an account{" "}
            <Link
              className="text-orange-500 font-medium underline"
              to={"/login"}
            >
              Sign In
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
