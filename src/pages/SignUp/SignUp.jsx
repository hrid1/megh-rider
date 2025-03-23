import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import districtList from "../../constants/districtList";
import districtAreas from "../../constants/districtAres";
import bankOptions from "../../constants/bankOptions";

const SignUp = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    merchantName: "",
    fullAddress: "",
    businessAddress: "",
    district: "",
    area: "",
    contactNumber: "",
    facebookPage: "",
    website: "",
    accountName: "",
    accountNumber: "",
    branchName: "",
    bankName: "",
    mobileBankingProvider: "",
    mobileBankingType: "",
    mobileBankingNumber: "",
    nid: "",
    email: "",
    password: "",
    confirmPassword: "",
    nidUploadFront: null,
    nidUploadBack: null,
    tradeLicense: null,
    tinCertificate: null,
  });

  const [areas, setAreas] = useState([]);
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
  };
  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table("form Data", formData);
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
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full p-2 border rounded mt-2"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Merchant Name:
            </label>
            <input
              type="text"
              name="merchantName"
              placeholder="Merchant Name"
              className="w-full p-2 border rounded mt-2"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Full Address:
            </label>
            <input
              type="text"
              name="fullAddress"
              placeholder="Full Address"
              className="w-full p-2 border rounded mt-2"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Bussiness Address:
            </label>
            <input
              type="text"
              name="businessAddress"
              placeholder="Business Address"
              className="w-full p-2 border rounded mt-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <div>
            <label className="font-medium " htmlFor="">
              Select District:
            </label>
            <br />
            <select
              name="district"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            >
              <option >Select District</option>
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

        <label className="font-medium" htmlFor="">
          Contact Number
        </label>

        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full p-2 border rounded mt-1.5"
          onChange={handleChange}
        />
        <div>
          <label className="font-medium" htmlFor="">
            Facebook Page URL
          </label>
          <input
            type="url"
            name="facebookPage"
            placeholder="Facebook Business Page URL"
            className="w-full p-2 border rounded mt-1.5"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="font-medium" htmlFor="">
            Website Link
          </label>
          <input
            type="url"
            name="website"
            placeholder="Website URL"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>
        <label className="font-semibold text-xl mb-2 block" htmlFor="">
          Bank Details
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="accountName"
            placeholder="Account Name"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="branchName"
            placeholder="Branch Name"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <select
            name="bankName"
            className="p-2 border rounded"
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

        <label className="font-semibold text-xl mb-2 block" htmlFor="">
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
              type="text"
              name="mobileBankingNumber"
              id="mobileBankingNumber"
              placeholder="Mobile Number"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>
        </div>
        <label className="font-medium" htmlFor="mobileBankingNumber">
          NID Number:
        </label>
        <input
          type="number"
          name="nid"
          placeholder="Enter the NID Number"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        {/* NID Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* fontside */}
          <div>
            <label className="font-medium" htmlFor="nidUploadFront">
              NID  (FrontSide):
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
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-gray-50 ">
            <label
              htmlFor="tradeLicense"
              className="cursor-pointer bg-gray-800 text-gray-100 px-4 py-2 hover:bg-gray-900 "
            >
              Choose File
            </label>
            <input
              type="file"
              name="tradeLicense"
              id="tradeLicense"
              className="hidden"
              onChange={handleChange}
            />
            <span className="px-4 py-2 text-gray-500 truncate">
              {formData.tradeLicense?.name || "No file chosen"}
            </span>
          </div>
        </div>

        {/* TIN Certificate */}
        <div>
          <label className="font-medium" htmlFor="tinCertificate">
            TIN Certificate:
          </label>
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-gray-50">
            <label
              htmlFor="tinCertificate"
              className="cursor-pointer bg-gray-800 text-gray-100 px-4 py-2 hover:bg-gray-900"
            >
              Choose File
            </label>
            <input
              type="file"
              name="tinCertificate"
              id="tinCertificate"
              className="hidden"
              onChange={handleChange}
            />
            <span className="px-4 py-2 text-gray-500 truncate">
              {formData.tinCertificate?.name || "No file chosen"}
            </span>
          </div>
        </div>

        {/* Email and Password */}

        <label className="font-medium" htmlFor="">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <label className="font-medium" htmlFor="">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <label className="font-medium" htmlFor="">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter confirm password"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
